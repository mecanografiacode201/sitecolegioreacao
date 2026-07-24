
import './polyfills';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: "https://us.i.posthog.com",
  person_profiles: 'identified_only' as const, 
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PostHogProvider 
      apiKey="phc_9YaffLRWZ9WgcllQXnTiliNrxAADGea52GO5yQn0w2q"
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
