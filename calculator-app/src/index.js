import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; //importing App.js to call the component
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
