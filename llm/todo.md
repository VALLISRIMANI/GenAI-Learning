# 🚀 Production Upgrade — TODO Plan

## Color Palette
| Token     | Hex       |
|-----------|-----------|
| Cyan      | `#00ffff` |
| Sky       | `#00dbff` |
| Azure     | `#10a5f5` |
| Royal     | `#0c71e0` |
| Deep Blue | `#0859c6` |

---

## Phase 1 — Foundation & Tooling
- [ ] Add Tailwind CSS via CDN (`<script>` play CDN in `index.html`)
- [ ] Add Bootstrap Icons via CDN (`<link>` in `index.html`)
- [ ] Remove Font Awesome CDN reference
- [ ] Install `react-router-dom` via npm
- [ ] Update `vite.config.js` for production-optimised build

## Phase 2 — Project Architecture (React Router)
- [ ] Create page components: `HomePage`, `ChatPage`, `AboutPage`
- [ ] Create a shared `Layout` component (Navbar + Sidebar + Outlet)
- [ ] Configure `BrowserRouter` and routes in `main.jsx`
- [ ] Refactor `App.jsx` to use router outlet pattern

## Phase 3 — UI Overhaul (Tailwind + Bootstrap Icons)
- [ ] Retheme everything with teal-blue palette CSS variables
- [ ] Replace all `fa-*` icon classes with `bi bi-*` (Bootstrap Icons)
- [ ] Rewrite `Header` / `Navbar` with Tailwind utility classes + glassmorphism
- [ ] Redesign Sidebar with Tailwind + smooth slide-in animation
- [ ] Redesign ChatWindow, MessageBubble, ChatInput with new palette
- [ ] Redesign selectors, toggles, sliders with new palette
- [ ] Add animated gradient background to hero / homepage
- [ ] Add micro-animations: hover, focus, page transitions

## Phase 4 — Performance & Data Structures
- [ ] Use `Map` for session memory store (O(1) lookup) in frontend
- [ ] Use `useCallback` / `useMemo` to prevent unnecessary re-renders
- [ ] Debounce input on temperature slider
- [ ] Use `Set` for deduplication where applicable
- [ ] Virtualise long message lists if needed (prepare pattern)
- [ ] Lazy-load page components with `React.lazy` + `Suspense`

## Phase 5 — Backend Hardening
- [ ] Add request-level caching (LRU) for repeated identical prompts
- [ ] Use `OrderedDict`-based LRU cache with max capacity
- [ ] Add proper error response models
- [ ] Add health-check endpoint `/health`

## Phase 6 — Polish & Documentation
- [ ] Final responsive testing pass
- [ ] Create `doc.md` with full changelog
- [ ] Update this `todo.md` — mark all steps ✅

---
_Last updated: 2026-03-14_
