import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Webpack 모듈 번들러
// 스크립트 파일 확장자 생략 (.js, .jsx, .ts, .tsx, .json, .wasm)

import './styles/global.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
