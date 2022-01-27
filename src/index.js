import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App"; //import app vào để chèn vào dom tree
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root") //chuyền động vào root trong public/index.html.
    //Tất cả mọi thứ chỉ là 1 file index.html=> ko phải load lại trang
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
