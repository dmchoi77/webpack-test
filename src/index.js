import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button.js";
import { createRoot } from "react-dom/client";

function Container() {
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "버튼을 클릭해주세요."),
    React.createElement(Button, { label: "좋아요" }),
    React.createElement(Button, { label: "싫어요" })
  );
}

const domContainer = document.querySelector("#react-root");
/** React 17 */
// ReactDOM.render(React.createElement(Container), domContainer);

/** React 18 */
const root = createRoot(domContainer);
root.render(<Container />);
