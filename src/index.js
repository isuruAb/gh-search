import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const optionsArray = [
  {
    label: "Here",
    key: "keyHere"
  },
  {
    label: "Here1",
    key: "keyHere1"
  },
  {
    label: "Here2",
    key: "keyHere2"
  },
  {
    label: "Here3",
    key: "keyHere3"
  },
  {
    label: "Here4",
    key: "keyHere4"
  },
  {
    label: "Here5",
    key: "keyHere5"
  },
  {
    label: "Here6",
    key: "keyHere6"
  }
];

const handleOnChange = (e) => {

  console.log(e.target.value);
};

ReactDOM.render(
  <React.StrictMode>
    <App optionsArray={optionsArray} onChange={handleOnChange} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
