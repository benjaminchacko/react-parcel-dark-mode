import React, {StrictMode} from "react";
import { render } from "react-dom";

import App from './app.js'


const rootElement = document.querySelector("#root");

render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

