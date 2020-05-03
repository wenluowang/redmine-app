import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const urlData = "http://i.dspread.com/redmine/projects.json";

ReactDOM.render(<App urlData={urlData} />, document.getElementById("root"));
