import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createReduxStore } from "./store/store";
import Example1 from "./Example1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={createReduxStore()}>
        <BrowserRouter>
            <Example1/>
        </BrowserRouter>
    </Provider>
);
