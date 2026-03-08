import '../components/Controls.css';

export default function BotSelector({ value, onChange }) {
  return (
    <div className="bot-selector form-group">
      <label htmlFor="bot-select">
        <i className="fas fa-robot"></i> Bot Type
      </label>

      <select
        id="bot-select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option
          value="basic_bot"
          title="General-purpose AI assistant for any topic."
        >
          🤖 Basic Bot
        </option>

        <option
          value="career_assistant_bot"
          title="Helps with careers, skills, jobs, and structured learning paths only."
        >
          💼 Career Assistant
        </option>

        <option
          value="code_assistant_bot"
          title="Provides programming help, debugging, code explanations, and best practices only."
        >
          💻 Code Assistant
        </option>

        <option
          value="tutor_bot"
          title="Explains concepts step-by-step in simple language, assuming beginner-level knowledge."
        >
          🎓 Tutor Bot
        </option>

        <option
          value="multimode_bot"
          title="Adapts responses based on context, tone, and user intent."
        >
          🧠 Multimodal Bot
        </option>

        <option
          value="temperature_comparison_bot"
          title="Demonstrates how different temperature values affect AI response creativity and determinism."
        >
          🌡️ Temperature Comparison Bot
        </option>
      </select>
    </div>
  );
}