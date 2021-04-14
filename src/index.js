import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const handleOnChange = (value) => {
  //If you want to get the value outside you can get it here
  console.log(value);
};

ReactDOM.render(
  <React.StrictMode>
    <App onChange={handleOnChange} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
