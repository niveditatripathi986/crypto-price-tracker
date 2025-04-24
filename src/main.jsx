// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // 👈 this is important for Vite
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
