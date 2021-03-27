import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "../src/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider } from "./store/AuthStore";
import { UserProvider } from "./store/UserContext";

// import UserStore from "./store/UserContext/index";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();
