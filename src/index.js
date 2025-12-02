import React from "react";
import ReactDOM from "react-dom/client";
// 💥 수정: 메인 앱 파일의 실제 이름인 './DamageRateCalculator.jsx'를 사용합니다.
import App from "./DamageRateCalculator.jsx";
import "./index.js";

// HTML의 id="root" 인 곳에 리액트 앱을 그립니다.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
