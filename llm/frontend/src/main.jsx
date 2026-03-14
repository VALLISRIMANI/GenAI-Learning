import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';

// Lazy-load pages for performance (code-splitting)
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ChatPage = React.lazy(() => import('./pages/ChatPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-screen bg-surface-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-cyan-400 font-medium tracking-wide animate-pulse">Loading…</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);