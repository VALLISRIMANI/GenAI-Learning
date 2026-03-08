# Frontend – React (llm/frontend)

## Architecture Overview
A modern, modular React application built with Vite. Provides a responsive chat UI, model controls, and seamless API integration with the FastAPI backend.

### Component Structure
```
frontend/
└── src/
	├── api/
	│   └── chatApi.js         # API integration
	└── components/
		├── ChatWindow.jsx     # Main chat interface
		├── MessageBubble.jsx  # User/assistant message UI
		├── ModelSelector.jsx  # LLM model selection
		├── TemperatureSlider.jsx # Temperature control
		├── MemoryToggle.jsx   # Memory on/off
		└── CodeBlock.jsx      # Code formatting
```

## Chat UI Workflow
1. User types a message in ChatWindow
2. Message is sent via chatApi.js to backend
3. UI updates with user message and loading state
4. Response from backend is rendered in chat
5. Controls (model, temperature, memory) update state and API payload

## API Integration
- All chat requests handled by `src/api/chatApi.js`
- Uses REST POST to backend `/chat` endpoint
- Handles errors, loading, and response parsing

## State Management
- React useState/useEffect for local state
- Props drilling for component communication
- (Optional) Easily extendable to Redux or Context API

## Running the Frontend
```bash
npm install
npm run dev
```

## Environment Variables
- No required variables by default
- To override API URL, use Vite env (see Vite docs)

## Technologies Used
- React, Vite, JavaScript/JSX
- Modern CSS for responsive design

---

> For backend/API details, see the backend README.
