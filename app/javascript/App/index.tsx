import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { store } from '../store/store';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const root = ReactDOM.createRoot(rootEl!);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});
