import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import "./TypingIndicator.css";
import "./ChatWindow.css";

export default function ChatWindow({ messages: externalMessages = [], onSend }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
  };

  useEffect(() => {
    if (isAtBottom) scrollToBottom();
  }, [externalMessages, isAtBottom]);

  function handleSubmit() {
    if (!input.trim() || loading) return;

    const userInput = input;
    setInput("");
    setLoading(true);
    setError("");

    onSend(userInput, (responseOrError) => {
      setLoading(false);
      if (typeof responseOrError === "object" && responseOrError.error) {
        setError(responseOrError.error);
      }
    });
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="chat-container">
      <div
        className="messages"
        ref={messagesContainerRef}
        onScroll={handleScroll}
      >
        {externalMessages.length === 0 ? (
          <div className="empty-state">
            <i className="fas fa-comments"></i>
            <p>Start a conversation to get amazing results!</p>
          </div>
        ) : (
          externalMessages.map((m, i) => (
            <div key={i} className={`message ${m.role}`}>
              <div className="message-icon">
                <i className={`fas ${m.role === "user" ? "fa-user" : "fa-robot"}`}></i>
              </div>
              <MessageBubble role={m.role} content={m.content} />
            </div>
          ))
        )}

        {loading && (
          <div className="message assistant">
            <div className="message-icon">
              <i className="fas fa-robot"></i>
            </div>
            <TypingIndicator />
          </div>
        )}

        {error && (
          <div className="error-message">
            <i className="fas fa-exclamation-triangle"></i>
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="input-row">
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          disabled={loading}
        />
        <button
          className="send-button"
          onClick={handleSubmit}
          disabled={loading || !input.trim()}
        >
          <i className="fas fa-paper-plane"></i>
          <span>Send</span>
        </button>
      </div>
    </div>
  );
}