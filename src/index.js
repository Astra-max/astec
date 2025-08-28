import React from 'react';
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './views/App';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const store = createStore(()=>({
  token: '123',
  userName: 'odongo724'
}))
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();