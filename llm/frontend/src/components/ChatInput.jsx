import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
  const [input, setInput] = useState("");

  function handleSubmit() {
    if (!input.trim() || loading) return;

    const userInput = input;
    setInput("");
    onSend(userInput);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="chat-input-wrapper">
      <div className="chat-input-box">
        <textarea
          className="chat-input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Message GenAI LLM..."
          disabled={loading}
          rows={1}
        />
        <button
          className="chat-send-btn"
          onClick={handleSubmit}
          disabled={loading || !input.trim()}
          aria-label="Send message"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}
