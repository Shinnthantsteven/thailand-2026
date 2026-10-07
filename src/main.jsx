import React from 'react';
import ReactDOM from 'react-dom/client';
import Shell from './Shell';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Shell />
  </React.StrictMode>
);


// Offline support: cache the app shell, photos, and built files after the first online visit.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`;
    navigator.serviceWorker.register(swUrl).catch((err) => {
      console.warn('Vacation offline cache registration failed:', err);
    });
  });
}
