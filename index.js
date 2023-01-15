"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _Button = _interopRequireDefault(require("./Button.js"));
var _client = require("react-dom/client");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Container() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "버튼을 클릭해주세요."), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "좋아요"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "싫어요"
  }));
}
var domContainer = document.querySelector("#react-root");
/** React 17 */
// ReactDOM.render(React.createElement(Container), domContainer);

/** React 18 */
var root = (0, _client.createRoot)(domContainer);
root.render( /*#__PURE__*/_react["default"].createElement(Container, null));