import '../components/Controls.css';

export default function TemperatureSlider({ value, onChange }) {
  return (
    <div className="temperature-slider form-group">
      <label htmlFor="temp-slider">
        <i className="fas fa-thermometer-half"></i>{' '}
        Temperature - {value.toFixed(1)}

        <span
          title={
            'Temperature controls the randomness of the model\'s output.\n\n'+
            'Low (0.0 – 0.3): factual, deterministic\n' +
            'Medium (0.4 – 0.7): balanced\n' +
            'High (0.8 – 1.0): creative and diverse'
          }
          style={{
            marginLeft: 8,
            cursor: 'help',
            color: '#6b7280',
            fontSize: '1rem'
          }}
        >
          <i className="fas fa-info-circle"></i>
        </span>
      </label>

      <input
        id="temp-slider"
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{
          cursor: 'pointer',
          background: `linear-gradient(
            to right,
            #3b82f6 0%,
            #8b5cf6 ${(value * 100).toFixed(0)}%,
            #e5e7eb ${(value * 100).toFixed(0)}%,
            #e5e7eb 100%
          )`
        }}
      />
    </div>
  );
}