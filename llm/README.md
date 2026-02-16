# GenAI LLM Project

## Overview
Production-ready full-stack LLM chat application with:
- Python FastAPI backend (LLM switching, chat logic)
- React frontend (UI, chat, configuration)
- Supports multiple LLM providers, bot types, and advanced controls

---

## FEATURES

- **Supported LLM Providers:**
	- Ollama (local)
	- Groq (API)
- **Bot Types:**
	- Basic Bot
	- Career Assistant
	- Code Assistant
	- Tutor Bot
	- Multimodal Bot
	- Temperature Comparison Bot
- **Controls:**
	- Model/Provider selection
	- Bot type selection
	- Temperature slider (0.0–1.0)
	- Memory toggle (conversation context)
- **Chat UI:**
	- Responsive (mobile, tablet, desktop)
	- Visual separation for user/assistant
	- Typing indicator
	- Disabled send button while loading
	- Error message on backend/API failure
	- Copyable code blocks
	- Empty input guard
- **Backend API:**
	- Modular FastAPI endpoints
	- Session-based memory (in-memory)
	- Markdown-formatted responses
	- LLM switching (Ollama, Groq)

---

## Architecture

**Backend:**
- FastAPI app (`backend/`)
- Modular: `api/`, `core/`, `services/`
- LLM selection via environment/config
- Session memory (in-memory, per session_id)
- Markdown output for all responses

**Frontend:**
- React app (`frontend/`)
- Modern, minimal UI
- All controls in sidebar
- Chat window with message bubbles, code blocks, typing indicator
- Fully responsive CSS

---

## Structure
- `backend/` — FastAPI backend (LLM, chat logic)
- `frontend/` — React frontend (UI, chat, config)

---

## Quick Start

### Backend
1. `cd backend`
2. (Optional) Create a virtual environment
3. `pip install -r requirements.txt`
4. `uvicorn app.main:app --reload`

### Frontend
1. `cd frontend`
2. `npm install` (or `yarn`)
3. `npm run dev` (or `yarn dev`)

---

## Environment Variables

**Backend:**
- `GROQ_API_KEY` (required for Groq provider)
- See `backend/.env.example` for template

**Frontend:**
- No required variables by default
- To override API URL, use Vite env (see frontend README)

---

## Development
- Lint Python: `black .` or `flake8`
- Lint JS: `npm run lint`
- Test Python: `pytest`
- Test JS: `npm test`

## Deployment
- Use a process manager (e.g., Gunicorn, PM2) and serve frontend with a static server or reverse proxy.

## License
MIT (see LICENSE)

## Contributing
PRs welcome! Please add tests and update docs.
