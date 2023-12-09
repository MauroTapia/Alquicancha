import {
  FaWhatsapp
} from "./chunk-6OWKCX6J.js";
import {
  GenIcon
} from "./chunk-ZVAM7HF2.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/react-whatsapp-widget/dist/index.modern.js
var import_react = __toESM(require_react());

// node_modules/react-icons/bi/index.esm.js
function BiSupport(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z" } }] })(props);
}

// node_modules/react-icons/ai/index.esm.js
function AiOutlineClose(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024", "fill": "currentColor", "fillRule": "evenodd" }, "child": [{ "tag": "path", "attr": { "d": "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" } }] })(props);
}

// node_modules/react-whatsapp-widget/dist/index.modern.js
var ChatContext = (0, import_react.createContext)({
  isChatOpen: false,
  setIsChatOpen: function setIsChatOpen() {
  }
});
var ChatProvider = function ChatProvider2(_ref) {
  var children = _ref.children;
  var _useState = (0, import_react.useState)(false), isChatOpen = _useState[0], setIsChatOpen2 = _useState[1];
  var value = {
    isChatOpen,
    setIsChatOpen: setIsChatOpen2
  };
  return import_react.default.createElement(ChatContext.Provider, {
    value
  }, children);
};
var styles = { "root": "_39IQj", "message": "_1mXIm", "message_title": "_3sxfE", "message_body": "_1iYf5", "triangle_top_right": "_3Oyio", "message_time": "_3--Dl" };
var defaultProps = {
  companyName: "Support",
  message: "Hello! 👋🏼 \n\nWhat can we do for you?"
};
var ChatBox = function ChatBox2(_ref) {
  var _ref$companyName = _ref.companyName, companyName = _ref$companyName === void 0 ? defaultProps.companyName : _ref$companyName, _ref$message = _ref.message, message = _ref$message === void 0 ? defaultProps.message : _ref$message;
  var time = (/* @__PURE__ */ new Date()).toTimeString().split(":").slice(0, 2).join(":");
  return import_react.default.createElement("div", {
    className: styles.root
  }, import_react.default.createElement("div", {
    className: styles.message
  }, import_react.default.createElement("span", {
    className: styles.triangle_top_right
  }), import_react.default.createElement("span", {
    className: styles.message_title
  }, companyName), import_react.default.createElement("p", {
    className: styles.message_body
  }, message), import_react.default.createElement("span", {
    className: styles.message_time
  }, time)));
};
var styles$1 = { "root": "_2uc4w", "close_btn": "_lI8mw", "logo": "_3jDIS", "texts": "_3trGj", "texts_h1": "_3XZUa", "texts_span": "_Muogh" };
var defaultProps$1 = {
  companyName: "Support",
  replyTimeText: "Typically replies within a day"
};
var Header = function Header2(_ref) {
  var CompanyIcon = _ref.CompanyIcon, _ref$companyName = _ref.companyName, companyName = _ref$companyName === void 0 ? defaultProps$1.companyName : _ref$companyName, _ref$replyTimeText = _ref.replyTimeText, replyTimeText = _ref$replyTimeText === void 0 ? defaultProps$1.replyTimeText : _ref$replyTimeText;
  var _useContext = (0, import_react.useContext)(ChatContext), setIsChatOpen2 = _useContext.setIsChatOpen;
  var handleOpen = function handleOpen2() {
    setIsChatOpen2(false);
  };
  return import_react.default.createElement("div", {
    className: styles$1.root
  }, import_react.default.createElement("span", {
    className: styles$1.close_btn,
    onClick: handleOpen
  }, import_react.default.createElement(AiOutlineClose, null)), import_react.default.createElement("div", {
    className: styles$1.logo
  }, CompanyIcon && import_react.default.createElement(CompanyIcon, null) || import_react.default.createElement(BiSupport, null)), import_react.default.createElement("div", {
    className: styles$1.texts
  }, import_react.default.createElement("span", {
    className: styles$1.texts_h1
  }, companyName), import_react.default.createElement("span", {
    className: styles$1.texts_span
  }, replyTimeText)));
};
var styles$2 = { "root": "_3XP0H", "input": "_siqLL", "button": "_3twZq" };
var defaultProps$2 = {
  sendButtonText: "Send",
  inputPlaceHolder: "Type a message"
};
var SendButton = function SendButton2(_ref) {
  var phoneNumber = _ref.phoneNumber, _ref$inputPlaceHolder = _ref.inputPlaceHolder, inputPlaceHolder = _ref$inputPlaceHolder === void 0 ? defaultProps$2.inputPlaceHolder : _ref$inputPlaceHolder, _ref$sendButtonText = _ref.sendButtonText, sendButtonText = _ref$sendButtonText === void 0 ? defaultProps$2.sendButtonText : _ref$sendButtonText;
  var _useState = (0, import_react.useState)(""), message = _useState[0], setMessage = _useState[1];
  var handleClick = function handleClick2() {
    if (!phoneNumber) {
      window.alert("Invalid Phone Number");
      return false;
    }
    window.open("https://wa.me/" + phoneNumber + "?text=" + message);
    setMessage("");
  };
  var handleChange = function handleChange2(e) {
    setMessage(e.target.value);
  };
  return import_react.default.createElement("div", {
    className: styles$2.root
  }, import_react.default.createElement("input", {
    placeholder: inputPlaceHolder,
    className: styles$2.input,
    onChange: handleChange,
    value: message
  }), import_react.default.createElement("button", {
    className: styles$2.button,
    onClick: handleClick
  }, sendButtonText));
};
var styles$3 = { "root": "_2qp0Z" };
var WaButton = function WaButton2() {
  var _useContext = (0, import_react.useContext)(ChatContext), isChatOpen = _useContext.isChatOpen, setIsChatOpen2 = _useContext.setIsChatOpen;
  var handleOpen = function handleOpen2() {
    setIsChatOpen2(!isChatOpen);
  };
  return import_react.default.createElement("div", {
    className: styles$3.root,
    onClick: handleOpen
  }, import_react.default.createElement(FaWhatsapp, null));
};
var styles$4 = { "root": "_1yCVn", "open": "_1qse9", "customTransition": "_2-Apl", "close": "_--3fm" };
var App = function App2(props) {
  var _useContext = (0, import_react.useContext)(ChatContext), isChatOpen = _useContext.isChatOpen, setIsChatOpen2 = _useContext.setIsChatOpen;
  (0, import_react.useEffect)(function() {
    if (props.open) {
      setIsChatOpen2(true);
    }
  }, []);
  return import_react.default.createElement(import_react.Fragment, null, import_react.default.createElement("div", {
    className: styles$4.root + " " + (isChatOpen ? styles$4.open : styles$4.close)
  }, import_react.default.createElement(Header, props), import_react.default.createElement(ChatBox, props), import_react.default.createElement(SendButton, props)), import_react.default.createElement(WaButton, null));
};
var WhatsAppWidget = function WhatsAppWidget2(props) {
  return import_react.default.createElement(ChatProvider, null, import_react.default.createElement(App, props));
};
export {
  WhatsAppWidget
};
//# sourceMappingURL=react-whatsapp-widget.js.map
