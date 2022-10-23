"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const app_1 = require("./app");
const root = (0, client_1.createRoot)(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(app_1.App, {}));
