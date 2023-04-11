import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/configs/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // *===================== Provider 나중에 refactoring =====================*
  <Provider store={store}>
    <App />
  </Provider>
);