
import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import App from "./App";

// ReactDOM.render(<App />, document.querySelector('#root'))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
