# Frontend Setup

## What is this?
React frontend for GenAI LLM chat app. Provides chat UI, controls, and responsive design.

## FEATURES
- Model/Provider selection (Ollama, Groq)
- Bot type selection (Basic, Career, Code, Tutor, Multimode, Temperature Comparison)
- Temperature slider (0.0–1.0)
- Memory toggle (conversation context)
- Responsive UI (mobile, tablet, desktop)
- Visual separation for user/assistant
- Typing indicator
- Disabled send button while loading
- Error message on backend/API failure
- Copyable code blocks
- Empty input guard

## Architecture
- `src/components/` — React components
- `src/api/` — API logic

## Requirements
- Node.js 18+
- npm or yarn

## Running
```
npm install
npm run dev
```

## Environment Variables
- No required variables by default
- To override API URL, use Vite env (see Vite docs)

## Testing
- Add tests with Jest/React Testing Library.

## Linting
- Use `npm run lint`.
