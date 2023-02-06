import './index.css';
import React from 'react';
import { App } from './app';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >
);


