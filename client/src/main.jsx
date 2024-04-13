import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import App from '@/App.jsx';
import '@/i18n/i18n.js';
import '@fontsource/caveat-brush';
import '@fontsource-variable/onest';
import '@fontsource/lato';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// CSS
import '@/css/reset/reset.css';
import '@/css/init.css';
import '@/css/styles.css';
import '@/css/comp-dropdown.css';
import '@/css/comp-form.css';
import '@/css/comp-card.css';
import '@/css/comp-carousels.css';



export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>,
);