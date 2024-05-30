import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './GlobalStyles';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);
const GlobalStylesProxy: any = GlobalStyles; // TODO: remove once @types/styled-components is updated to work with react 18

root.render(
  <React.StrictMode>
    <GlobalStylesProxy />
    <App />
  </React.StrictMode>
);
// Force build v3.0.1
