import { useState, useEffect } from "react";
import { sendMessage } from "./api/chatApi";
import BotSelector from "./components/BotSelector";
import ModelSelector from "./components/ModelSelector";
import TemperatureSlider from "./components/TemperatureSlider";
import MemoryToggle from "./components/MemoryToggle";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
  const [botType, setBotType] = useState("basic_bot");
  const [provider, setProvider] = useState("groq");
  const [temperature, setTemperature] = useState(0.7);
  const [useMemory, setUseMemory] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);
  }, [botType]);

  const sessionId = "demo-session";

  function handleSend(input, callback) {
    setMessages(prev => [...prev, { role: "user", content: input }]);
    sendMessage({
      message: input,
      bot_type: botType,
      provider,
      temperature,
      use_memory: useMemory,
      session_id: useMemory ? sessionId : null,
    }).then(res => {
      setMessages(prev => [...prev, { role: "assistant", content: res.response }]);
      if (callback) callback(res.response);
    });
  }

  return (
    <div>
      <header className="header">
        <h1><i className="fas fa-sparkles"></i> GenAI LLM Chat Bots</h1>
        <p><i className="fas fa-code"></i> Interact with AI models powered by LangChain</p>
      </header>

      <div className="container">
        <aside className="card">
          <h2><i className="fas fa-sliders-h"></i> Configuration</h2>

          <div className="form-group">
            <BotSelector value={botType} onChange={setBotType} />
          </div>

          <div className="form-group">
            <ModelSelector value={provider} onChange={setProvider} />
          </div>

          <div className="form-group">
            <TemperatureSlider value={temperature} onChange={setTemperature} />
          </div>

          <MemoryToggle value={useMemory} onChange={setUseMemory} />
        </aside>

        <section className="card">
          <h2><i className="fas fa-comments"></i> Chat</h2>
          <ChatWindow messages={messages} onSend={handleSend} />
        </section>
      </div>
    </div>

  );
}

export default App;