import BotSelector from "./BotSelector";
import ModelSelector from "./ModelSelector";
import TemperatureSlider from "./TemperatureSlider";
import MemoryToggle from "./MemoryToggle";

export default function Sidebar({
  isOpen,
  onClose,
  botType,
  setBotType,
  provider,
  setProvider,
  temperature,
  setTemperature,
  useMemory,
  setUseMemory,
}) {
  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? "open" : ""}`} 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      <aside className={`app-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2><i className="fas fa-sliders-h"></i> Configuration</h2>
        </div>

        <div className="sidebar-content">
          <BotSelector value={botType} onChange={setBotType} />
          <ModelSelector value={provider} onChange={setProvider} />
          <TemperatureSlider value={temperature} onChange={setTemperature} />
          <MemoryToggle value={useMemory} onChange={setUseMemory} />
        </div>
      </aside>
    </>
  );
}
