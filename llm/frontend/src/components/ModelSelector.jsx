import '../components/Controls.css';

export default function ModelSelector({ value, onChange }) {
  return (
    <div className="model-selector form-group">
      <label htmlFor="model-select">
        <i className="fas fa-cube"></i> Model Provider
      </label>

      <select
        id="model-select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option
          value="groq"
          title="Runs on Groq cloud. Extremely fast, globally accessible, and ideal for production."
        >
          ⚡ Groq (API)
        </option>

        <option
          value="ollama"
          title="Runs locally on your system. Free, private, and works without internet."
        >
          🖥️ Ollama (Local)
        </option>
      </select>
    </div>
  );
}