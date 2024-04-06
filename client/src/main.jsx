import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Suspense } from 'react';
import './i18n/i18n.js';

// CSS
import './css/reset.css';
import './css/init.css';
import './css/styles.css';
import './css/dropdown.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
