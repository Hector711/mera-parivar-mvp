import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import App from '@/App.jsx';
import '@/i18n/i18n.js';
import '@fontsource/caveat-brush';
import '@fontsource-variable/onest';
import '@fontsource/lato';
// CSS
import '@/css/reset/reset.css';
import '@/css/init.css';
import '@/css/styles.css';
import '@/css/comp-dropdown.css';
import '@/css/comp-form.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
