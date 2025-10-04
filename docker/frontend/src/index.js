import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


const API_URL = "/api/users";

fetch(`${API_URL}/users`)
  .then(res => res.json())
  .then(data => console.log(data));