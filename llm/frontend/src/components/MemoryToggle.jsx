import '../components/Controls.css';

export default function MemoryToggle({ value, onChange }) {
  return (
    <div className="memory-toggle form-group">
      <label htmlFor="memory-toggle"><i className="fas fa-brain"></i> Conversation Memory</label>
      <div className="memory-toggle-input">
        <input type="checkbox" id="memory-toggle" checked={value} onChange={e => onChange(e.target.checked)}/>
        <span>{value ? "On" : "Off"}</span>
      </div>
      <div style={{ fontSize: '0.7em', color: '#94a3b8' }}>
        {value ? "Bot will remember previous messages." : "Bot will not remember previous messages."}
      </div>
    </div>
  );
}