import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { sendMessage } from '../api/chatApi';
import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow';

export default function ChatPage() {
  const [botType, setBotType] = useState('basic_bot');
  const [provider, setProvider] = useState('groq');
  const [temperature, setTemperature] = useState(0.7);
  const [useMemory, setUseMemory] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Use Map for O(1) session lookups (DS optimization)
  const sessionMapRef = useRef(new Map());
  const sessionId = 'demo-session';

  // Clear messages on bot type change
  useEffect(() => {
    setMessages([]);
  }, [botType]);

  // Memoize send handler to prevent child re-renders
  const handleSend = useCallback((input, callback) => {
    setMessages(prev => [...prev, { role: 'user', content: input }]);

    sendMessage({
      message: input,
      bot_type: botType,
      provider,
      temperature,
      use_memory: useMemory,
      session_id: useMemory ? sessionId : null,
    }).then(res => {
      if (res.error) {
        setMessages(prev => [...prev, { role: 'error', content: res.error }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: res.response }]);
        // Cache in session Map
        sessionMapRef.current.set(Date.now(), { input, response: res.response });
      }
      if (callback) callback(res);
    });
  }, [botType, provider, temperature, useMemory]);

  const toggleSidebar = useCallback(() => setSidebarOpen(p => !p), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // Memoize sidebar props to prevent unnecessary re-renders
  const sidebarProps = useMemo(() => ({
    botType, setBotType,
    provider, setProvider,
    temperature, setTemperature,
    useMemory, setUseMemory,
    isOpen: sidebarOpen,
    onClose: closeSidebar,
  }), [botType, provider, temperature, useMemory, sidebarOpen, closeSidebar]);

  return (
    <div className="flex-1 flex min-h-0 overflow-hidden">
      {/* Mobile sidebar toggle */}
      <button
        className="lg:hidden fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-[#00ffff] to-[#10a5f5] text-[#060e1a] shadow-lg shadow-[#00ffff]/25 flex items-center justify-center hover:shadow-[#00ffff]/40 transition-shadow"
        onClick={toggleSidebar}
        aria-label="Toggle configuration"
      >
        <i className="bi bi-sliders text-lg"></i>
      </button>

      {/* Sidebar */}
      <ChatSidebar {...sidebarProps} />

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#060e1a]">
        {/* Chat header */}
        <div className="flex-shrink-0 px-6 py-3 bg-[#0c1a2e]/90 backdrop-blur-lg border-b border-[rgba(0,219,255,0.1)] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00ffff]/20 to-[#10a5f5]/20 flex items-center justify-center">
            <i className="bi bi-chat-dots text-[#00dbff] text-sm"></i>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white leading-tight">AI Chat</h2>
            <p className="text-[10px] text-[#5a7a94]">
              {botType.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} • {provider === 'groq' ? 'Groq Cloud' : 'Ollama Local'}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {useMemory && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00ffff]/10 text-[#00ffff] text-[10px] font-semibold">
                <i className="bi bi-memory"></i> Memory On
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10a5f5]/10 text-[#10a5f5] text-[10px] font-semibold">
              <i className="bi bi-thermometer-half"></i> {temperature.toFixed(1)}
            </span>
          </div>
        </div>

        <ChatWindow messages={messages} onSend={handleSend} />
      </div>
    </div>
  );
}
