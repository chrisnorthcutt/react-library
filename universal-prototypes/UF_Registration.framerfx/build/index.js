(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../UF-Core.framerfx/code/Button.tsx":
/*!*******************************************!*\
  !*** ../UF-Core.framerfx/code/Button.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFnRjtBQUNoRiwwQkFBMEI7QUFDMUIsMkNBQXNEO0FBQ3RELHFDQUFvQztBQUNwQyx5REFBc0M7QUFDdEMsaUNBQTJCO0FBUzNCLGlDQUFpQztBQUNqQyxNQUFNLFlBQVksR0FBRywyQkFBTSxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDOUQsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQy9DLE9BQU87UUFDSCxJQUFJLEVBQUUsSUFBSTtRQUNWLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFVBQVUsRUFBRSxVQUFVO0tBQ3pCLENBQUE7Q0FDSixDQUFDLENBQUE7O2VBRWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FFckMsbUJBQU8sQ0FBQyxJQUFJLENBQUM7aUJBQ1YsbUJBQU8sQ0FBQyxJQUFJLENBQUM7a0JBQ1osQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNwQixLQUFLLENBQUMsV0FBVyxLQUFLLFVBQVUsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLFdBQVc7SUFDakUsQ0FBQyxDQUFDLGFBQWE7SUFDZixDQUFDLENBQUMsa0JBQU0sQ0FBQyxVQUFVOztjQUVqQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2hCLEtBQUssQ0FBQyxXQUFXLEtBQUssV0FBVztJQUM3QixDQUFDLENBQUMsWUFBWSxHQUFHLGtCQUFNLENBQUMsVUFBVTtJQUNsQyxDQUFDLENBQUMsYUFBYTs7a0JBRVQsQ0FBQyxLQUFLLEVBQUUsRUFB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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Import Variables & Type
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const Text = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../UF-Core.framerfx/node_modules/styled-components/dist/styled-components.browser.esm.js");
const Icon_1 = __webpack_require__(/*! ./Icon */ "../UF-Core.framerfx/code/Icon.tsx");
// Create styled button component
const StyledButton = styled_components_1.default(framer_1.motion.button).attrs((props) => {
    window["__checkBudget__"]();
    const { text, buttonStyle, isDisabled } = props;
    return {
        text: text,
        buttonStyle: buttonStyle,
        isDisabled: isDisabled,
    };
}) `
    cursor: pointer;
    opacity: ${(props) => props.isDisabled ? .5 : 1};
    width: 100%;
    height: ${Variables_1.spacing["5x"]};
    padding: 0 ${Variables_1.spacing["2x"]};
    background: ${(props) => props.buttonStyle === "tertiary" || props.buttonStyle === "secondary"
    ? "transparent"
    : Variables_1.colors.primary900};
    outline: none;
    border: ${(props) => props.buttonStyle === "secondary"
    ? "1px solid " + Variables_1.colors.primary900
    : "transparent"};
    border-radius: 1.5rem;
    box-shadow: ${(props) => props.buttonStyle === "primary" && !props.isDisabled ? Variables_1.shadows.z1 : "none"};
    transition: all 0.25s ease-in-out;
    &:hover {
        box-shadow: ${(props) => props.buttonStyle === "primary" || props.buttonStyle === "secondary" ? Variables_1.shadows.z1 : "none"} ;
    }
    &:active {
        box-shadow: none;
        transform: scale(.98);
    }
,
    &.lg {
        display: block;
        width: ${"100%" > "300px" ? "300px" : "100%"};
        height: 2.5rem;
    }
`;
// Export button component
function Button(props) {
    window["__checkComponentBudget__"]();
    const { text, buttonStyle, isDisabled, onTap, style, hasIcon } = props, rest = __rest(props, ["text", "buttonStyle", "isDisabled", "onTap", "style", "hasIcon"]);
    const navigation = framer_1.useNavigation();
    return (React.createElement(StyledButton, { isDisabled: isDisabled, onTap: onTap, buttonStyle: buttonStyle, style: style },
        React.createElement(Text.ButtonText, { color: buttonStyle != "primary" && buttonStyle != "secondary"
                ? Variables_1.colors.primary600 : buttonStyle === "secondary" ? Variables_1.colors.primary900 : Variables_1.colors.white }, text)));
}
exports.Button = Button;
Button.defaultProps = {
    text: "Heeey",
    buttonStyle: "primary",
    width: 375,
    height: 40,
};
framer_1.addPropertyControls(Button, Object.assign({ text: {
        title: "Text",
        type: framer_1.ControlType.String,
    }, buttonStyle: {
        title: "Style",
        type: framer_1.ControlType.Enum,
        options: ["primary", "secondary", "tertiary"],
        optionTitles: ["Primary", "Secondary", "Tertiary"],
    }, isDisabled: {
        title: "Disabled",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    }, hasIcon: {
        title: "Icon",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    }, onTap: {
        type: framer_1.ControlType.EventHandler,
    } }, Icon_1.Icon.propertyControls));
exports.__info__ = [{ "name": "Button", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/Checkbox.tsx":
/*!*********************************************!*\
  !*** ../UF-Core.framerfx/code/Checkbox.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NoZWNrYm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLDJDQUEyRDtBQUMzRCx5REFBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLG1DQUFrRTtBQVFsRSxNQUFNLGNBQWMsR0FBRywyQkFBTSxDQUFDLGVBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDL0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztRQUN0QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7UUFDeEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO0tBQ25CLENBQUM7Q0FDSCxDQUFDLENBQUE7Ozs7Ozs7Ozs7YUFVVyxtQkFBTyxDQUFDLElBQUksQ0FBQztjQUNaLG1CQUFPLENBQUMsSUFBSSxDQUFDO2tCQUNULENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsa0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGtCQUFNLENBQUMsT0FBTyxDQUFDOzt3QkFFdEQsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQU0sQ0FBQyxPQUFPOzs7Ozs7Ozs7ZUFTekYsdUJBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2QsdUJBQVcsQ0FBQyxFQUFFLENBQUM7b0JBQ1gsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsa0JBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtCQUFNLENBQUMs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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../UF-Core.framerfx/node_modules/styled-components/dist/styled-components.browser.esm.js");
const Type = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const StyledCheckbox = styled_components_1.default(framer_1.motion.div).attrs((props) => {
    window["__checkBudget__"]();
    return {
        checked: props.checked,
        disabled: props.disabled,
        color: props.color,
    };
}) `
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: start;
  align-content: flex-start;
  align-items: center;

  .container {
    position: relative;
    width: ${Variables_1.spacing["3x"]};
    height: ${Variables_1.spacing["3x"]};
    background: ${(props) => (!props.disabled ? Variables_1.colors.white : Variables_1.colors.grey200)};
    outline: none;
    border: 1px solid ${(props) => props.checked && !props.disabled ? Variables_1.colors.primary900 : Variables_1.colors.grey400};
    border-radius: 2px;

    > .background {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: ${Variables_1.converToREM(22)};
      height: ${Variables_1.converToREM(22)};
      background: ${(props) => !props.disabled ? Variables_1.colors.primary900 : Variables_1.colors.grey400};
    }
    > .svg-container {
      position: absolute;
      top: 0;
      left: 0;
      width: ${Variables_1.converToREM(22)};
      height: ${Variables_1.converToREM(22)};
      background: transparent;

      > svg {
        fill: transparent;

        > path {
          fill: transparent;
          stroke-width: 2px;
          stroke: hsl(0, 0%, 100%);
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      }
    }
  }
  > .label {
      margin: 0 ${Variables_1.spacing['2x']};
    color: ${(props) => props.color};
  }
`;
function Checkbox(props) {
    window["__checkComponentBudget__"]();
    const { disabled, checked, label } = props;
    const [isChecked, setChecked] = react_1.useState(checked);
    const toggleChecked = () => {
        window["__checkBudget__"]();
        if (disabled && isChecked) {
            return;
        }
        else {
            setChecked(!isChecked);
        }
    };
    return (React.createElement(StyledCheckbox, { onTap: toggleChecked, checked: isChecked, disabled: disabled },
        React.createElement("div", { className: "container" },
            React.createElement(framer_1.motion.div, { initial: {
                    opacity: isChecked ? 1 : 0,
                }, animate: {
                    opacity: isChecked ? 1 : 0,
                }, transition: {
                    duration: 0.2,
                }, className: "background" }),
            React.createElement(framer_1.motion.div, { initial: {
                    scale: isChecked ? 1 : 0,
                    opacity: isChecked ? 1 : 0,
                }, animate: {
                    scale: isChecked ? 1 : 0,
                    opacity: isChecked ? 1 : 0,
                }, transition: {
                    delay: 0.05,
                    duration: 0.15,
                }, className: "svg-container" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: Variables_1.converToREM(22), height: Variables_1.converToREM(22), viewBox: "0 -6 30 40" },
                    React.createElement("path", { d: "M 5.5 17 L 11 22.5 L 22.5 6" })))),
        React.createElement(Type.Body2, { className: "label", style: { marginLeft: ".5rem" } }, label)));
}
exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
    disabled: false,
    checked: false,
    width: 200,
    height: 40,
    label: "Label",
};
framer_1.addPropertyControls(Checkbox, {
    disabled: {
        title: "Disabled",
        type: framer_1.ControlType.Boolean,
    },
    checked: {
        title: "Checked",
        type: framer_1.ControlType.Boolean,
    },
    label: {
        title: "Label",
        type: framer_1.ControlType.String,
    },
});
exports.__info__ = [{ "name": "Checkbox", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/DateField.tsx":
/*!**********************************************!*\
  !*** ../UF-Core.framerfx/code/DateField.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9EYXRlRmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixpQ0FBb0Q7QUFDcEQsMkNBQThDO0FBQzlDLHlEQUF1QztBQUN2QyxtQ0FBeUU7QUFDekUscUNBQXFDO0FBQ3JDLGlDQUE4QjtBQU85QixNQUFNLFdBQVcsR0FBRywyQkFBTSxDQUFDLGVBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDN0QsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDbkMsT0FBTztRQUNOLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO0tBQ2hCLENBQUM7Q0FDRixDQUFDLENBQUE7OztZQUdVLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDOzs7OztVQUt0QyxtQkFBTyxDQUFDLElBQUksQ0FBQztTQUNkLG1CQUFPLENBQUMsSUFBSSxDQUFDOzs7Ozs7OztlQVFQLG1CQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hCLG1CQUFPLENBQUMsSUFBSSxDQUFDOzs7Ozs7Z0JBTVQsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQU0sQ0FBQyxPQUFPOzs7bUJBRzdCLGtCQUFNLENBQUMsTUFBTTs7Ozs7WUFLcEIsbUJBQU8sQ0FBQyxJQUFJLENBQUM7ZUFDVixtQkFBTyxDQUFDLElBQUksQ0FBQzs7O0NBRzNCLENBQUM7QUFFRixTQUFnQixTQUFTLENBQUMsS0FBVTs7SUFDbkMsTUFBTSxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssRUFDTCxRQUFRLEVBQ1IsWUFBWSxHQUFHLEVBQUUsRUFDakIsYUFBYSxHQUFHLEVBQUUsRUFDbEIsWUFBWSxHQUFHLHVCQUF1QixFQUN0QyxLQUFLLEdBQ0wsR0FBRyxLQUFLLENBQUM7SUFDVix1Q0FBdUM7SUFFdkMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLElBQUksV0FBVyxFQUFFLE9BQU8sQ0FBQztJQUN6QixNQUFNLFFBQVEsR0FBRyxjQUFNLEVBQUUsQ0FBQztJQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUU1QyxvQ0FBb0M7SUFFcEMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsR0FBRyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLGdCQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFL0MsMkNBQTJDO0lBRTNDLDBCQUEwQjtJQUMxQixTQUFTLFlBQVksQ0FBQyxLQUFhOztRQUNqQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7SUFFRCw2QkFBNkI7SUFDN0IsU0FBUyxlQUFlLENBQUMsUUFBZ0I7O1FBQ3ZDLE9BQU8sa0RBQWtELENBQUMsSUFBSSxDQUM1RCxRQUFRLENBQ1QsQ0FBQztLQUNIO0lBRUQsU0FBUyxXQUFXLENBQUMsSUFBWTs7UUFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLENBQUM7S0FDcEQ7SUFDRCxTQUFTLFFBQVEsQ0FBQyxDQUFNOztRQUN2QixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUM1QixJQUFJLEtBQUssQ0FBQyxRQUFRO1lBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVuQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFZixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDckIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM3QjtRQUNQLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQixRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDN0I7SUFDRCxTQUFTLE9BQU87O1FBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pCO0lBQ0QsU0FBUyxNQUFNOztRQUNkLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUVELElBQUksU0FBUyxFQUFFO1FBQ2QsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixPQUFPLEdBQUcsYUFBYSxDQUFDO0tBQ3hCO1NBQU0sSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ25FLElBQUksWUFBWSxLQUFLLEVBQUUsRUFBRTtZQUN2QixXQUFXLEdBQUcsa0JBQU0sQ0FBQyxPQUFPLENBQUM7WUFDN0IsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUN6QjthQUFNO1lBQ0wsV0FBVyxHQUFHLGtCQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVCLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFDdkIsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO1NBQ3RCO0tBQ0Y7U0FBTSxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxZQUFZLElBQUksRUFBRSxFQUFFO1FBQ3ZELFdBQVcsR0FBRyxrQkFBTSxDQUFDLE9BQU8sQ0FBQztRQUM3QixPQUFPLEdBQUcsYUFBYSxDQUFDO0tBQ3pCO1NBQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDOUIsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3JCLFdBQVcsR0FBRyxrQkFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUM7S0FDakU7SUFFRCxPQUFPLENBQ04sb0JBQUMsV0FBVyxJQUFDLE9BQU8sRUFBRSxPQUFPO1FBQzVCLG9CQUFDLGVBQU0sQ0FBQyxLQUFLLElBQ1osU0FBUyxFQUFDLE9BQU8sRUFDakIsT0FBTyxFQUFFLFFBQVEsR0FBRyxFQUFFLEVBQ3RCLEtBQUssRUFBRTtnQkFDTixPQUFPLEVBQUUsQ0FBQzthQUNWLEVBQ0QsT0FBTyxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2dCQUNSLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxXQUFXO2FBQ2xCLEVBQ0QsT0FBTyxFQUFFO2dCQUNSLEtBQUssRUFBRSxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxFQUFFLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLEVBQUUsU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsS0FBSyxFQUFFLFdBQVc7YUFDbEIsRUFDRCxVQUFVLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7YUFDZCxJQUVBLEtBQUssQ0FDUTtRQUNmLG9CQUFDLFdBQUksSUFDUSxRQUFRLEVBQUUsU0FBUyxFQUNuQixJQUFJLEVBQUUsa0JBQU0sQ0FBQyxNQUFNLEVBQ25CLEtBQUssRUFBRTtnQkFDSCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNO2FBQ3pDLEdBQ0g7UUFDWCxvQkFBQyxlQUFNLENBQUMsS0FBSyxJQUNaLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUNqQixTQUFTLEVBQUMsT0FBTyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFDbEIsWUFBWSxFQUFFLFlBQVksRUFDMUIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsT0FBTyxFQUFFLE9BQU8sRUFDaEIsTUFBTSxFQUFFLE1BQU0sRUFDZCxPQUFPLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsV0FBVyxFQUFFLFdBQVc7YUFDeEIsRUFDRCxPQUFPLEVBQUU7Z0JBQ1IsV0FBVyxFQUNWLFNBQVMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsV0FBVyxFQUFFLFdBQVc7YUFDeEIsRUFDRCxVQUFVLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7YUFDZCxHQUNBO1FBQ0Ysb0JBQUMsY0FBSyxJQUNMLElBQUksRUFBRSxFQUFFLEVBQ1IsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsRUFBRSxFQUNWLFVBQVUsRUFBRSxhQUFhO1lBRXpCLG9CQUFDLElBQUksQ0FBQyxPQUFPLElBQUMsS0FBSyxFQUFFLFdBQVcsSUFBRyxPQUFPLENBQWdCLENBQ25ELENBQ0ssQ0FDZCxDQUFDO0NBQ0Y7QUF0SkQsOEJBc0pDO0FBRUQsU0FBUyxDQUFDLFlBQVksR0FBRztJQUN4QixLQUFLLEVBQUUsTUFBTTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsa0JBQU0sQ0FBQyxVQUFVO0lBQ3hCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7Q0FDVixDQUFDO0FBRUYsNEJBQW1CLENBQUMsU0FBUyxFQUFFO0lBQzlCLE9BQU8sRUFBRTtRQUNSLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsWUFBWSxFQUFFLElBQUk7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUixLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLFlBQVksRUFBRSxLQUFLO0tBQ25CO0lBQ0QsS0FBSyxFQUFFO1FBQ04sS0FBSyxFQUFFLE9BQU87UUFDZCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLFlBQVksRUFBRSxrQkFBTSxDQUFDLFVBQVU7S0FDL0I7SUFDRCxZQUFZLEVBQUU7UUFDYixLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLEVBQUU7S0FDaEI7SUFDRCxLQUFLLEVBQUU7UUFDTixLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07S0FDeEI7SUFDRCxhQUFhLEVBQUU7UUFDZCxLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO0tBQ3hCO0lBQ0QsWUFBWSxFQUFFO1FBQ2IsS0FBSyxFQUFFLFdBQVc7UUFDbEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtLQUN4QjtDQUNELENBQUMsQ0FBQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../UF-Core.framerfx/node_modules/styled-components/dist/styled-components.browser.esm.js");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Type = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
const Icon_1 = __webpack_require__(/*! ./Icon */ "../UF-Core.framerfx/code/Icon.tsx");
const StyledField = styled_components_1.default(framer_1.motion.div).attrs((props) => {
    window["__checkBudget__"]();
    const { enabled, focused } = props;
    return {
        enabled: enabled,
        focused: focused,
    };
}) `
	width: 100%;
	height: 100%;
	opacity: ${(props) => (props.enabled ? 1 : 0.5)};
	margin-bottom: 1.5rem;

	> .label {
		position: absolute;
		left: ${Variables_1.spacing["2x"]};
		top: ${Variables_1.spacing["2x"]};
		font-family: Roboto, sans-serif;
		font-size: 16px;
		line-height: 19px;
		origin-x: 0;
	}
	> .input {
		width: 100%;
		padding: 0 ${Variables_1.spacing["2x"]};
		height: ${Variables_1.spacing["6x"]};
		padding-top: 12px;
		font-size: 14px;
		border-radius: 4px;
		border-style: solid;
		outline: none;
		background: ${(props) => props.enabled ? Variables_1.colors.white : Variables_1.colors.grey200};

		&:invalid {
			border-color: ${Variables_1.colors.danger};
		}
	}
	> .assistive {
		margin-top: 0px;
		height: ${Variables_1.spacing["2x"]};
		padding: 0 ${Variables_1.spacing["2x"]};
		padding-top: 4px;
	}
`;
function DateField(props) {
    window["__checkComponentBudget__"]();
    const { label, enabled, focused, empty, hasError, defaultValue = "", assistMessage = "", errorMessage = "This date isn't valid", color, } = props;
    //********** Set Variables **********//
    let showIcon = false;
    let activeColor, message;
    const inputRef = react_1.useRef();
    const id = Math.floor(Math.random() * 8888);
    //********** Set States **********//
    const [isFocused, setFocused] = react_1.useState(focused);
    const [value, setValue] = react_1.useState(defaultValue);
    const [isValid, setValid] = react_1.useState(hasError);
    //********** Validation Checks **********//
    // Check if email is valid
    function emailIsValid(email) {
        window["__checkBudget__"]();
        return /\S+@\S+\.\S+/.test(email);
    }
    // Check if password is valid
    function passwordIsValid(password) {
        window["__checkBudget__"]();
        return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password);
    }
    function isValidDate(date) {
        window["__checkBudget__"]();
        return new Date(date).toString() !== "Invalid Date";
    }
    function onChange(e) {
        window["__checkBudget__"]();
        const value = e.target.value;
        if (props.onChange)
            props.onChange(value);
        setValue(value);
        if (props.onValueChange) {
            props.onValueChange(value);
        }
        setValue(value);
        setValid(isValidDate(value));
    }
    function onFocus() {
        window["__checkBudget__"]();
        setFocused(true);
    }
    function onBlur() {
        window["__checkBudget__"]();
        setFocused(false);
    }
    if (isFocused) {
        activeColor = color;
        message = assistMessage;
    }
    else if ((!isValid && value.length > 0 && !isFocused) || hasError) {
        if (errorMessage === "") {
            activeColor = Variables_1.colors.grey400;
            message = assistMessage;
        }
        else {
            activeColor = Variables_1.colors.danger;
            message = errorMessage;
            showIcon = !showIcon;
        }
    }
    else if ((!isFocused && !empty) || defaultValue != "") {
        activeColor = Variables_1.colors.grey400;
        message = assistMessage;
    }
    else if (empty && !isFocused) {
        showIcon = !showIcon;
        activeColor = Variables_1.colors.danger;
        message = label.replace(/[^a-zA-Z ]/g, "") + " cannot be empty";
    }
    return (React.createElement(StyledField, { enabled: enabled },
        React.createElement(framer_1.motion.label, { className: "label", htmlFor: "renene" + id, style: {
                originX: 0,
            }, initial: {
                scale: 1,
                x: 0,
                y: 0,
                color: activeColor,
            }, animate: {
                scale: isFocused || value.length > 0 ? 0.65 : 1,
                x: isFocused || value.length > 0 ? 1 : 0,
                y: isFocused || value.length > 0 ? -15 : 0,
                color: activeColor,
            }, transition: {
                duration: 0.15,
            } }, label),
        React.createElement(Icon_1.Icon, { iconName: "warning", fill: Variables_1.colors.danger, style: {
                position: "absolute",
                right: "12px",
                top: "12px",
                display: showIcon ? "initial" : "none",
            } }),
        React.createElement(framer_1.motion.input, { id: "renene" + id, className: "input", type: "date", disabled: !enabled, defaultValue: defaultValue, onChange: onChange, onFocus: onFocus, onBlur: onBlur, initial: {
                borderWidth: 1,
                borderColor: activeColor,
            }, animate: {
                borderWidth: isFocused || (!isValid && value.length > 0) ? 1 : 1,
                borderColor: activeColor,
            }, transition: {
                duration: 0.15,
            } }),
        React.createElement(framer_1.Frame, { left: 16, width: "100%", height: 16, background: "transparent" },
            React.createElement(Type.Caption, { color: activeColor }, message))));
}
exports.DateField = DateField;
DateField.defaultProps = {
    label: "Test",
    enabled: true,
    focused: false,
    color: Variables_1.colors.primary900,
    width: 375,
    height: 70,
};
framer_1.addPropertyControls(DateField, {
    enabled: {
        title: "Enabled",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    focused: {
        title: "Focused",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    },
    color: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: Variables_1.colors.primary900,
    },
    defaultValue: {
        title: "Date",
        type: framer_1.ControlType.String,
        defaultValue: "",
    },
    label: {
        title: "Label",
        type: framer_1.ControlType.String,
    },
    assistMessage: {
        title: "Assist Msg",
        type: framer_1.ControlType.String,
    },
    errorMessage: {
        title: "Error Msg",
        type: framer_1.ControlType.String,
    },
});
exports.__info__ = [{ "name": "DateField", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/Icon.tsx":
/*!*****************************************!*\
  !*** ../UF-Core.framerfx/code/Icon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVFO0FBQ3ZFLHlDQUEwRDtBQUMxRCx5REFBcUc7QUFFckcscUNBQXFDO0FBRXJDLFNBQWdCLElBQUksQ0FBQyxLQUFLOztJQUN0QixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssS0FBYyxLQUFLLEVBQWpCLG9FQUFpQixDQUFBO0lBQzdELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLGtCQUNGLE1BQU0sRUFBRSxJQUFJLEVBQ1osS0FBSyxFQUFFLElBQUksRUFDWCxLQUFLLEVBQUUsS0FBSyxJQUNSLElBQUksSUFDUixVQUFVLEVBQUUsYUFBYSxFQUN6QixLQUFLLEVBQUUsS0FBSztRQUVaLDZCQUNJLEtBQUssRUFBRSxJQUFJLEVBQ1gsTUFBTSxFQUFFLElBQUksRUFDWixPQUFPLEVBQUMsV0FBVyxFQUNuQixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBQyw0QkFBNEIsSUFHN0IsMkJBQWUsQ0FBQyxnQkFBSyxDQUFDLGdCQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUU5RSxDQUNGLENBQ1gsQ0FBQTtDQUNKO0FBeEJELG9CQXdCQztBQUVELElBQUksQ0FBQyxZQUFZLEdBQUc7SUFDaEIsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsRUFBRTtDQUNaLENBQUE7QUFFRCx3REFBd0Q7QUFDeEQsNEJBQW1CLENBQUMsSUFBSSxFQUFFO0lBQ3RCLFFBQVEsRUFBRTtRQUNOLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixZQUFZLEVBQUUsT0FBTztRQUNyQixPQUFPLEVBQUUsb0JBQVMsQ0FBQyxJQUFJLEVBQUU7UUFDekIsWUFBWSxFQUFFLHNCQUFXLENBQUMsSUFBSSxFQUFFO0tBQ25DO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLFlBQVk7UUFDbkIsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztLQUMxQjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLFlBQVk7S0FDakM7Q0FDSixDQUFDLENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const IconList_1 = __webpack_require__(/*! ./IconList */ "../UF-Core.framerfx/code/IconList.tsx");
const react_html_parser_1 = __webpack_require__(/*! react-html-parser */ "../UF-Core.framerfx/node_modules/react-html-parser/lib/index.js");
// Learn more: https://framer.com/api
function Icon(props) {
    window["__checkComponentBudget__"]();
    const { iconName, fill, onTap, size, style } = props, rest = __rest(props, ["iconName", "fill", "onTap", "size", "style"]);
    return (React.createElement(framer_1.Frame, Object.assign({ height: size, width: size, style: style }, rest, { background: "transparent", onTap: onTap }),
        React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: fill, xmlns: "http://www.w3.org/2000/svg" }, react_html_parser_1.default(IconList_1.Icons[IconList_1.Icons.findIndex(icon => icon.name === iconName)].svg))));
}
exports.Icon = Icon;
Icon.defaultProps = {
    height: 24,
    width: 24,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(Icon, {
    iconName: {
        title: "Icon",
        type: framer_1.ControlType.Enum,
        defaultValue: "check",
        options: IconList_1.iconNames.sort(),
        optionTitles: IconList_1.iconOptions.sort(),
    },
    fill: {
        title: "Fill Color",
        type: framer_1.ControlType.Color,
    },
    onTap: {
        type: framer_1.ControlType.EventHandler
    }
});
exports.__info__ = [{ "name": "Icon", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/IconList.tsx":
/*!*********************************************!*\
  !*** ../UF-Core.framerfx/code/IconList.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbkxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0ljb25MaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYSxRQUFBLEtBQUssR0FBRztJQUNqQjtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsR0FBRyxFQUNDLHFVQUFxVTtLQUM1VTtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQ0MsZ3ZCQUFndkI7S0FDdnZCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsU0FBUztRQUNmLEdBQUcsRUFDQywrM0JBQSszQjtLQUN0NEI7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osR0FBRyxFQUNDLDBoRUFBMGhFO0tBQ2ppRTtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixHQUFHLEVBQ0MsMjBDQUEyMEM7S0FDbDFDO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsWUFBWTtRQUNsQixHQUFHLEVBQ0Msc2pCQUFzakI7S0FDN2pCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsS0FBSztRQUNYLEdBQUcsRUFDQyx5OURBQXk5RDtLQUNoK0Q7SUFDRDtRQUNJLElBQUksRUFBRSxVQUFVO1FBQ2hCLEdBQUcsRUFDQyxpVkFBaVY7S0FDeFY7SUFDRDtRQUNJLElBQUksRUFBRSxhQUFhO1FBQ25CLEdBQUcsRUFDQyw2dEJBQTZ0QjtLQUNwdUI7SUFDRDtRQUNJLElBQUksRUFBRSxZQUFZO1FBQ2xCLEdBQUcsRUFDQyw2dEJBQTZ0QjtLQUNwdUI7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osR0FBRyxFQUNDLDB6Q0FBMHpDO0tBQ2owQztJQUNEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsR0FBRyxFQUNDLGltQ0FBaW1DO0tBQ3htQztJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixHQUFHLEVBQ0MsNnRCQUE2dEI7S0FDcHVCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFDQywrL0NBQSsvQztLQUN0Z0Q7SUFDRDtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsR0FBRyxFQUNDLGlpQkFBaWlCO0tBQ3hpQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLGVBQWU7UUFDckIsR0FBRyxFQUNDLG9nQ0FBb2dDO0tBQzNnQztJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixHQUFHLEVBQ0Msb3RCQUFvdEI7S0FDM3RCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFDQyxnekJBQWd6QjtLQUN2ekI7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osR0FBRyxFQUNDLGk0QkFBaTRCO0tBQ3g0QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQ0Msd3RFQUF3dEU7S0FDL3RFO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLEdBQUcsRUFDQyxvSkFBb0o7S0FDM0o7Q0FDSixDQUFBO0FBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7SUFDckIsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO1FBQUUsT0FBTyxFQUFFLENBQUE7SUFDcEMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDaEQsQ0FBQTtBQUNVLFFBQUEsU0FBUyxHQUFHLEVBQUUsQ0FBQTtBQUNkLFFBQUEsV0FBVyxHQUFHLEVBQUUsQ0FBQTtBQUMzQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsYUFBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7SUFDL0MsaUJBQVMsQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDcEMsbUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxhQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQzFIIn0=

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
exports.Icons = [
    {
        name: "check",
        svg: '<path d="M 19.47 6.47 C 19.748 6.194 20.191 6.179 20.488 6.434 C 20.784 6.69 20.835 7.13 20.603 7.446 L 20.53 7.53 L 9.53 18.53 C 9.268 18.793 8.853 18.824 8.554 18.603 L 8.47 18.53 L 3.47 13.53 C 3.194 13.252 3.179 12.809 3.434 12.512 C 3.69 12.216 4.13 12.165 4.446 12.397 L 4.53 12.47 L 9 16.939 L 19.47 6.469 Z"></path>',
    },
    {
        name: "warning",
        svg: '<path d="M 12 1.25 C 6.063 1.25 1.25 6.063 1.25 12 C 1.25 17.937 6.063 22.75 12 22.75 C 17.937 22.75 22.75 17.937 22.75 12 C 22.75 6.063 17.937 1.25 12 1.25 Z M 12 2.75 C 17.109 2.75 21.25 6.891 21.25 12 C 21.25 17.109 17.109 21.25 12 21.25 C 6.891 21.25 2.75 17.109 2.75 12 C 2.75 6.891 6.891 2.75 12 2.75 Z"></path><path d="M 12 7.25 C 12.375 7.25 12.692 7.527 12.743 7.898 L 12.75 8 L 12.75 12 C 12.75 12.394 12.444 12.721 12.051 12.748 C 11.658 12.775 11.311 12.493 11.257 12.102 L 11.25 12 L 11.25 8 C 11.25 7.586 11.586 7.25 12 7.25 Z M 12.01 15.25 C 12.404 15.25 12.731 15.556 12.758 15.949 C 12.785 16.342 12.503 16.689 12.112 16.743 L 12 16.75 C 11.606 16.75 11.279 16.444 11.252 16.051 C 11.225 15.658 11.507 15.311 11.898 15.257 Z"></path>',
    },
    {
        name: "success",
        svg: '<path d="M 3.828 6.01 C 6.921 2.391 12.026 1.237 16.375 3.175 C 16.744 3.349 16.907 3.786 16.741 4.159 C 16.575 4.531 16.141 4.703 15.765 4.545 C 12.047 2.888 7.682 3.856 5.014 6.931 C 2.345 10.005 2 14.462 4.164 17.91 C 6.328 21.359 10.492 22.987 14.421 21.921 C 18.349 20.856 21.12 17.347 21.245 13.278 L 21.25 13 L 21.25 12.08 C 21.25 11.686 21.556 11.359 21.949 11.332 C 22.342 11.305 22.689 11.587 22.743 11.978 L 22.75 12.08 L 22.75 13 C 22.747 17.761 19.614 21.953 15.048 23.303 C 10.483 24.653 5.573 22.839 2.982 18.846 C 0.391 14.852 0.735 9.629 3.828 6.01 Z"></path><path d="M 21.47 4.47 C 21.748 4.194 22.191 4.179 22.488 4.434 C 22.784 4.69 22.835 5.13 22.603 5.446 L 22.531 5.53 L 12.531 15.54 C 12.268 15.803 11.853 15.834 11.554 15.613 L 11.47 15.54 L 8.47 12.54 C 8.194 12.262 8.179 11.819 8.434 11.522 C 8.69 11.226 9.13 11.175 9.446 11.407 L 9.53 11.48 L 12 13.948 Z"></path>',
    },
    {
        name: "hide",
        svg: '<path d="M 6.656 5.605 C 6.907 5.934 6.845 6.404 6.516 6.656 C 4.636 8.091 3.063 9.888 1.89 11.941 L 1.854 12.003 L 1.954 12.177 C 2.034 12.315 2.123 12.46 2.217 12.611 L 2.364 12.843 C 2.97 13.784 3.659 14.669 4.422 15.487 C 6.637 17.849 9.175 19.25 11.988 19.25 C 13.977 19.218 15.903 18.55 17.485 17.344 C 17.814 17.103 18.276 17.17 18.523 17.495 C 18.771 17.819 18.714 18.282 18.395 18.536 C 16.555 19.938 14.313 20.714 12 20.75 C 8.7 20.75 5.8 19.15 3.328 16.513 C 2.251 15.359 1.313 14.083 0.532 12.711 L 0.355 12.386 C 0.22 12.159 0.214 11.878 0.339 11.646 C 1.633 9.233 3.429 7.126 5.605 5.464 C 5.934 5.213 6.404 5.275 6.656 5.604 Z M 12 3.25 C 15.3 3.25 18.2 4.85 20.672 7.487 C 21.749 8.641 22.687 9.917 23.468 11.289 L 23.645 11.614 L 23.671 11.664 C 23.78 11.882 23.776 12.139 23.661 12.354 C 23.03 13.536 22.276 14.648 21.414 15.673 C 21.147 15.99 20.674 16.031 20.357 15.764 C 20.04 15.497 19.999 15.024 20.266 14.707 C 20.948 13.897 21.555 13.027 22.082 12.109 L 22.145 11.996 L 22.045 11.823 C 21.965 11.685 21.877 11.54 21.783 11.389 L 21.636 11.157 C 21.03 10.216 20.341 9.331 19.578 8.513 C 17.363 6.151 14.825 4.75 11.998 4.75 C 11.349 4.748 10.703 4.822 10.071 4.97 C 9.673 5.053 9.281 4.803 9.188 4.407 C 9.095 4.011 9.335 3.613 9.729 3.51 C 10.473 3.336 11.235 3.248 12 3.25 Z M 10.429 9.369 C 10.565 9.515 10.637 9.708 10.63 9.907 C 10.622 10.106 10.537 10.293 10.391 10.429 C 9.789 10.99 9.541 11.835 9.745 12.632 C 9.948 13.429 10.571 14.052 11.368 14.255 C 12.165 14.459 13.01 14.211 13.571 13.609 C 13.853 13.306 14.328 13.289 14.631 13.571 C 14.934 13.853 14.951 14.328 14.669 14.631 C 13.734 15.634 12.326 16.047 10.998 15.708 C 9.669 15.369 8.631 14.331 8.292 13.002 C 7.953 11.674 8.366 10.266 9.369 9.331 C 9.515 9.195 9.708 9.123 9.907 9.13 C 10.106 9.138 10.293 9.223 10.429 9.369 Z" ></path><path d="M 0.47 0.47 C 0.732 0.207 1.147 0.176 1.446 0.397 L 1.53 0.47 L 23.53 22.47 C 23.806 22.748 23.821 23.191 23.566 23.488 C 23.31 23.784 22.87 23.835 22.554 23.603 L 22.47 23.53 L 0.47 1.53 C 0.178 1.237 0.178 0.763 0.47 0.47 Z" ></path>',
    },
    {
        name: "show",
        svg: '<path d="M 12 3.25 C 8.7 3.25 5.8 4.85 3.328 7.487 C 2.251 8.641 1.313 9.917 0.532 11.289 L 0.355 11.614 L 0.329 11.664 C 0.223 11.875 0.223 12.124 0.329 12.335 L 0.476 12.612 L 0.532 12.712 C 1.313 14.084 2.251 15.36 3.328 16.514 C 5.8 19.15 8.7 20.749 12 20.749 C 15.3 20.749 18.2 19.149 20.672 16.512 C 21.749 15.358 22.687 14.082 23.468 12.71 L 23.645 12.385 L 23.671 12.335 C 23.777 12.124 23.777 11.875 23.671 11.664 L 23.524 11.387 L 23.468 11.287 C 22.687 9.915 21.749 8.639 20.672 7.485 C 18.2 4.85 15.3 3.251 12 3.251 Z M 12 4.75 C 14.825 4.75 17.363 6.15 19.578 8.513 C 20.341 9.331 21.03 10.216 21.636 11.157 L 21.783 11.389 C 21.877 11.54 21.965 11.685 22.045 11.823 L 22.147 12 L 22.161 11.976 C 21.439 13.243 20.572 14.421 19.578 15.487 C 17.363 17.849 14.825 19.25 12 19.25 C 9.175 19.25 6.637 17.85 4.422 15.487 C 3.659 14.669 2.97 13.784 2.364 12.843 L 2.217 12.611 C 2.127 12.468 2.04 12.323 1.955 12.177 L 1.852 12 L 1.839 12.024 C 2.561 10.757 3.428 9.579 4.422 8.513 C 6.637 6.151 9.175 4.75 12 4.75 Z"></path><path d="M 12 8.25 C 9.929 8.25 8.25 9.929 8.25 12 C 8.25 14.071 9.929 15.75 12 15.75 C 14.071 15.75 15.75 14.071 15.75 12 C 15.75 9.929 14.071 8.25 12 8.25 Z M 12 9.75 C 13.243 9.75 14.25 10.757 14.25 12 C 14.25 13.243 13.243 14.25 12 14.25 C 10.757 14.25 9.75 13.243 9.75 12 C 9.75 10.757 10.757 9.75 12 9.75 Z"></path>',
    },
    {
        name: "arrow-left",
        svg: '<path d="M 19 11.25 C 19.394 11.25 19.721 11.556 19.748 11.949 C 19.775 12.342 19.493 12.689 19.102 12.743 L 19 12.75 L 5 12.75 C 4.606 12.75 4.279 12.444 4.252 12.051 C 4.225 11.658 4.507 11.311 4.898 11.257 L 5 11.25 Z" ></path><path d="M 11.47 4.47 C 11.748 4.194 12.191 4.179 12.488 4.434 C 12.784 4.69 12.835 5.13 12.603 5.446 L 12.53 5.53 L 6.061 12 L 12.531 18.47 C 12.793 18.733 12.824 19.148 12.603 19.446 L 12.53 19.53 C 12.268 19.793 11.853 19.824 11.554 19.603 L 11.47 19.53 L 4.47 12.53 C 4.207 12.268 4.176 11.853 4.397 11.554 L 4.47 11.47 Z"></path>',
    },
    {
        name: "sun",
        svg: '<path d="M 11.75 6 C 8.574 6 6 8.574 6 11.75 C 6 14.926 8.574 17.5 11.75 17.5 C 14.925 17.5 17.5 14.926 17.5 11.75 C 17.5 8.574 14.925 6 11.75 6 Z M 11.75 7.5 C 14.097 7.5 16 9.403 16 11.75 C 16 14.097 14.097 16 11.75 16 C 9.403 16 7.5 14.097 7.5 11.75 C 7.5 9.403 9.403 7.5 11.75 7.5 Z M 11.75 0 C 12.125 0 12.442 0.277 12.493 0.648 L 12.5 0.75 L 12.5 2.75 C 12.5 3.144 12.194 3.471 11.801 3.498 C 11.408 3.525 11.061 3.243 11.007 2.852 L 11 2.75 L 11 0.75 C 11 0.336 11.336 0 11.75 0 Z M 11.75 20 C 12.125 20 12.442 20.277 12.493 20.648 L 12.5 20.75 L 12.5 22.75 C 12.5 23.144 12.194 23.471 11.801 23.498 C 11.408 23.525 11.061 23.243 11.007 22.852 L 11 22.75 L 11 20.75 C 11 20.336 11.336 20 11.75 20 Z M 3.44 3.44 C 3.702 3.177 4.117 3.146 4.416 3.367 L 4.5 3.44 L 5.92 4.86 C 6.196 5.138 6.211 5.581 5.956 5.878 C 5.7 6.174 5.259 6.225 4.944 5.993 L 4.86 5.92 L 3.44 4.5 C 3.147 4.207 3.147 3.733 3.44 3.44 Z M 17.58 17.58 C 17.842 17.317 18.257 17.286 18.556 17.507 L 18.64 17.58 L 20.06 19 C 20.336 19.278 20.351 19.721 20.096 20.018 C 19.84 20.314 19.399 20.365 19.084 20.133 L 19 20.06 L 17.58 18.64 C 17.287 18.347 17.287 17.873 17.58 17.58 Z M 2.75 11 C 3.144 11 3.471 11.306 3.498 11.699 C 3.525 12.092 3.242 12.439 2.852 12.493 L 2.75 12.5 L 0.75 12.5 C 0.356 12.5 0.029 12.194 0.002 11.801 C -0.025 11.408 0.257 11.061 0.648 11.007 L 0.75 11 Z M 22.75 11 C 23.144 11 23.471 11.306 23.498 11.699 C 23.525 12.092 23.242 12.439 22.852 12.493 L 22.75 12.5 L 20.75 12.5 C 20.356 12.5 20.029 12.194 20.002 11.801 C 19.975 11.408 20.257 11.061 20.648 11.007 L 20.75 11 Z M 4.86 17.58 C 5.138 17.304 5.581 17.289 5.878 17.544 C 6.174 17.8 6.224 18.24 5.993 18.556 L 5.92 18.64 L 4.5 20.06 C 4.222 20.336 3.779 20.351 3.482 20.096 C 3.185 19.84 3.135 19.4 3.367 19.084 L 3.44 19 Z M 19 3.44 C 19.278 3.164 19.721 3.149 20.018 3.404 C 20.314 3.66 20.364 4.1 20.133 4.416 L 20.06 4.5 L 18.64 5.92 C 18.362 6.196 17.919 6.211 17.622 5.956 C 17.325 5.7 17.275 5.26 17.507 4.944 L 17.58 4.86 Z" ></path></g>',
    },
    {
        name: "caret-up",
        svg: '<path d="M 11.47 8.47 C 11.732 8.207 12.147 8.176 12.446 8.397 L 12.53 8.47 L 18.53 14.47 C 18.806 14.748 18.821 15.191 18.566 15.488 C 18.31 15.784 17.87 15.835 17.554 15.603 L 17.47 15.53 L 12 10.061 L 6.53 15.531 C 6.267 15.793 5.852 15.824 5.554 15.603 L 5.47 15.53 C 5.207 15.268 5.176 14.853 5.397 14.554 L 5.47 14.47 Z" ></path>',
    },
    {
        name: "caret-right",
        svg: '<g id="chevron-right" transform="translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000) translate(6.000000, 9.000000)"><path d="M5.46966991,-0.530330086 C5.73593648,-0.796596648 6.15260016,-0.8208027 6.44621165,-0.602948239 L6.53033009,-0.530330086 L12.5303301,5.46966991 C12.8232233,5.76256313 12.8232233,6.23743687 12.5303301,6.53033009 C12.2640635,6.79659665 11.8473998,6.8208027 11.5537883,6.60294824 L11.4696699,6.53033009 L6,1.061 L0.530330086,6.53033009 C0.264063523,6.79659665 -0.152600159,6.8208027 -0.446211653,6.60294824 L-0.530330086,6.53033009 C-0.796596648,6.26406352 -0.8208027,5.84739984 -0.602948239,5.55378835 L-0.530330086,5.46966991 L5.46966991,-0.530330086 Z" id="Path"></path></g>',
    },
    {
        name: "caret-left",
        svg: '<g id="chevron-left" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) translate(6.000000, 9.000000)"><path d="M5.46966991,-0.530330086 C5.73593648,-0.796596648 6.15260016,-0.8208027 6.44621165,-0.602948239 L6.53033009,-0.530330086 L12.5303301,5.46966991 C12.8232233,5.76256313 12.8232233,6.23743687 12.5303301,6.53033009 C12.2640635,6.79659665 11.8473998,6.8208027 11.5537883,6.60294824 L11.4696699,6.53033009 L6,1.061 L0.530330086,6.53033009 C0.264063523,6.79659665 -0.152600159,6.8208027 -0.446211653,6.60294824 L-0.530330086,6.53033009 C-0.796596648,6.26406352 -0.8208027,5.84739984 -0.602948239,5.55378835 L-0.530330086,5.46966991 L5.46966991,-0.530330086 Z" id="Path"></path></g>',
    },
    {
        name: "bell",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g transform="translate(2.248 1.25)"><path d="M 9.752 0 C 13.479 0 16.502 3.022 16.502 6.75 C 16.502 9.69 17.035 11.91 17.91 13.516 C 18.207 14.06 18.52 14.488 18.828 14.812 L 18.981 14.967 C 19.049 15.031 19.102 15.077 19.138 15.104 L 19.168 15.126 C 19.756 15.518 19.52 16.41 18.855 16.494 L 18.752 16.5 L 0.752 16.5 C 0.045 16.5 -0.253 15.627 0.254 15.188 L 0.336 15.126 C 0.384 15.094 0.505 14.993 0.676 14.812 C 0.984 14.488 1.296 14.06 1.594 13.516 C 2.425 11.991 2.948 9.911 2.998 7.186 L 3.002 6.75 C 3.002 3.022 6.024 0 9.752 0 Z M 9.752 1.5 C 6.936 1.5 4.621 3.721 4.506 6.534 L 4.502 6.75 C 4.502 9.935 3.91 12.402 2.91 14.234 C 2.785 14.463 2.651 14.688 2.509 14.906 L 2.444 15 L 17.059 15 L 16.995 14.906 C 16.901 14.764 16.812 14.619 16.727 14.472 L 16.594 14.234 C 15.642 12.489 15.059 10.168 15.006 7.2 L 15.002 6.75 L 14.998 6.534 C 14.882 3.721 12.567 1.5 9.752 1.5 Z M 10.833 19.374 C 11.04 19.016 11.499 18.893 11.858 19.101 C 12.216 19.309 12.338 19.768 12.131 20.126 C 11.639 20.974 10.732 21.497 9.752 21.497 C 8.771 21.497 7.864 20.974 7.373 20.126 C 7.177 19.785 7.278 19.351 7.603 19.131 C 7.929 18.911 8.37 18.98 8.613 19.289 L 8.671 19.374 C 8.881 19.736 9.259 19.969 9.678 19.994 C 10.096 20.019 10.499 19.832 10.751 19.497 Z"></path></g></svg>',
    },
    {
        name: "question",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 12 1.25 C 6.063 1.25 1.25 6.063 1.25 12 C 1.25 17.937 6.063 22.75 12 22.75 C 17.937 22.75 22.75 17.937 22.75 12 C 22.75 6.063 17.937 1.25 12 1.25 Z M 12 2.75 C 17.109 2.75 21.25 6.891 21.25 12 C 21.25 17.109 17.109 21.25 12 21.25 C 6.891 21.25 2.75 17.109 2.75 12 C 2.75 6.891 6.891 2.75 12 2.75 Z"></path><path d="M 8.382 8.751 C 8.988 7.025 10.751 5.989 12.553 6.298 C 14.356 6.607 15.673 8.171 15.67 10 C 15.67 11.179 14.96 12.124 13.836 12.874 C 13.315 13.224 12.75 13.506 12.157 13.712 C 11.764 13.843 11.339 13.63 11.208 13.237 C 11.077 12.844 11.29 12.419 11.683 12.288 L 11.801 12.245 C 12.223 12.083 12.627 11.875 13.004 11.625 C 13.754 11.125 14.17 10.571 14.17 9.999 C 14.171 8.902 13.381 7.965 12.3 7.779 C 11.22 7.594 10.163 8.215 9.798 9.249 C 9.66 9.64 9.232 9.846 8.841 9.708 C 8.45 9.57 8.244 9.142 8.382 8.751 Z M 12.01 16.25 C 12.404 16.25 12.731 16.556 12.758 16.949 C 12.785 17.342 12.503 17.689 12.112 17.743 L 12 17.75 C 11.606 17.75 11.279 17.444 11.252 17.051 C 11.225 16.658 11.507 16.311 11.898 16.257 Z"></path></svg>',
    },
    {
        name: "send",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 21.47 1.47 C 21.748 1.194 22.191 1.179 22.488 1.434 C 22.784 1.69 22.835 2.13 22.603 2.446 L 22.53 2.53 L 11.53 13.53 C 11.252 13.806 10.809 13.821 10.512 13.566 C 10.216 13.31 10.165 12.87 10.397 12.554 L 10.47 12.47 Z"></path><path d="M 1.752 8.292 L 1.645 8.338 C 1.109 8.619 1.111 9.426 1.695 9.685 L 10.431 13.568 L 14.315 22.305 C 14.44 22.586 14.724 22.762 15.031 22.749 C 15.338 22.737 15.606 22.538 15.708 22.248 L 22.708 2.248 C 22.803 1.976 22.734 1.673 22.531 1.469 C 22.327 1.266 22.024 1.197 21.752 1.292 Z M 20.778 3.221 L 14.917 19.967 L 11.685 12.695 L 11.633 12.598 C 11.554 12.473 11.44 12.375 11.305 12.315 L 4.032 9.082 Z"></path></svg>',
    },
    {
        name: "sync",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 1 3.25 C 1.375 3.25 1.692 3.527 1.743 3.898 L 1.75 4 L 1.75 9.25 L 7 9.25 C 7.375 9.25 7.692 9.527 7.743 9.898 L 7.75 10 C 7.75 10.375 7.473 10.692 7.102 10.743 L 7 10.75 L 1 10.75 C 0.625 10.75 0.308 10.473 0.257 10.102 L 0.25 10 L 0.25 4 C 0.25 3.586 0.586 3.25 1 3.25 Z M 23 13.25 C 23.375 13.25 23.692 13.527 23.743 13.898 L 23.75 14 L 23.75 20 C 23.75 20.394 23.444 20.721 23.051 20.748 C 22.658 20.775 22.311 20.493 22.257 20.102 L 22.25 20 L 22.25 14.75 L 17 14.75 C 16.625 14.75 16.308 14.473 16.257 14.102 L 16.25 14 C 16.25 13.625 16.527 13.308 16.898 13.257 L 17 13.25 Z"></path><path d="M 23.547 13.486 C 23.802 13.757 23.82 14.173 23.589 14.465 L 23.514 14.547 L 18.89 18.89 C 16.523 21.258 13.108 22.245 9.843 21.507 C 6.578 20.768 3.92 18.406 2.803 15.25 C 2.709 14.996 2.758 14.711 2.933 14.504 C 3.108 14.297 3.381 14.201 3.647 14.252 C 3.913 14.303 4.131 14.493 4.217 14.75 C 5.146 17.375 7.336 19.354 10.042 20.013 C 12.747 20.671 15.602 19.921 17.634 18.018 L 17.846 17.813 L 22.486 13.453 C 22.788 13.169 23.262 13.184 23.546 13.486 Z M 14.157 2.493 C 17.422 3.232 20.08 5.594 21.197 8.75 C 21.327 9.138 21.122 9.559 20.736 9.696 C 20.35 9.832 19.926 9.634 19.783 9.25 C 18.854 6.625 16.664 4.646 13.958 3.987 C 11.253 3.329 8.398 4.079 6.366 5.982 L 6.154 6.187 L 1.514 10.547 C 1.229 10.825 0.777 10.832 0.484 10.563 C 0.19 10.294 0.158 9.843 0.41 9.535 L 0.485 9.453 L 5.11 5.11 C 7.476 2.742 10.892 1.754 14.157 2.493 Z"></path></svg>',
    },
    {
        name: "close",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 17.47 5.47 C 17.748 5.194 18.191 5.179 18.488 5.434 C 18.784 5.69 18.835 6.13 18.603 6.446 L 18.53 6.53 L 6.53 18.53 C 6.252 18.806 5.809 18.821 5.512 18.566 C 5.216 18.31 5.165 17.87 5.397 17.554 L 5.47 17.47 Z"></path><path d="M 5.47 5.47 C 5.732 5.207 6.147 5.176 6.446 5.397 L 6.53 5.47 L 18.53 17.47 C 18.806 17.748 18.821 18.191 18.566 18.488 C 18.31 18.784 17.87 18.835 17.554 18.603 L 17.47 18.53 L 5.47 6.53 C 5.178 6.237 5.178 5.763 5.47 5.47 Z"></path></svg>',
    },
    {
        name: "more-vertical",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 12 10.25 C 11.034 10.25 10.25 11.034 10.25 12 C 10.25 12.966 11.034 13.75 12 13.75 C 12.966 13.75 13.75 12.966 13.75 12 C 13.75 11.034 12.966 10.25 12 10.25 Z M 12 11.75 C 12.138 11.75 12.25 11.862 12.25 12 C 12.25 12.138 12.138 12.25 12 12.25 C 11.862 12.25 11.75 12.138 11.75 12 C 11.75 11.862 11.862 11.75 12 11.75 Z M 12 3.25 C 11.034 3.25 10.25 4.034 10.25 5 C 10.25 5.966 11.034 6.75 12 6.75 C 12.966 6.75 13.75 5.966 13.75 5 C 13.75 4.034 12.966 3.25 12 3.25 Z M 12 4.75 C 12.138 4.75 12.25 4.862 12.25 5 C 12.25 5.138 12.138 5.25 12 5.25 C 11.862 5.25 11.75 5.138 11.75 5 C 11.75 4.862 11.862 4.75 12 4.75 Z M 12 17.25 C 11.034 17.25 10.25 18.034 10.25 19 C 10.25 19.966 11.034 20.75 12 20.75 C 12.966 20.75 13.75 19.966 13.75 19 C 13.75 18.034 12.966 17.25 12 17.25 Z M 12 18.75 C 12.138 18.75 12.25 18.862 12.25 19 C 12.25 19.138 12.138 19.25 12 19.25 C 11.862 19.25 11.75 19.138 11.75 19 C 11.75 18.862 11.862 18.75 12 18.75 Z"></path></svg>',
    },
    {
        name: "clock",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 12 1.25 C 6.063 1.25 1.25 6.063 1.25 12 C 1.25 17.937 6.063 22.75 12 22.75 C 17.937 22.75 22.75 17.937 22.75 12 C 22.75 6.063 17.937 1.25 12 1.25 Z M 12 2.75 C 17.109 2.75 21.25 6.891 21.25 12 C 21.25 17.109 17.109 21.25 12 21.25 C 6.891 21.25 2.75 17.109 2.75 12 C 2.75 6.891 6.891 2.75 12 2.75 Z"></path><path d="M 12 5.25 C 12.375 5.25 12.692 5.527 12.743 5.898 L 12.75 6 L 12.75 11.537 L 16.335 13.329 C 16.67 13.497 16.831 13.886 16.71 14.241 L 16.67 14.335 C 16.503 14.67 16.114 14.83 15.759 14.71 L 15.665 14.67 L 11.665 12.67 C 11.444 12.56 11.292 12.349 11.257 12.105 L 11.25 12 L 11.25 6 C 11.25 5.586 11.586 5.25 12 5.25 Z"></path></svg>',
    },
    {
        name: "info",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 12 1.25 C 6.063 1.25 1.25 6.063 1.25 12 C 1.25 17.937 6.063 22.75 12 22.75 C 17.937 22.75 22.75 17.937 22.75 12 C 22.75 6.063 17.937 1.25 12 1.25 Z M 12 2.75 C 17.109 2.75 21.25 6.891 21.25 12 C 21.25 17.109 17.109 21.25 12 21.25 C 6.891 21.25 2.75 17.109 2.75 12 C 2.75 6.891 6.891 2.75 12 2.75 Z"></path><path d="M 12 11.25 C 12.375 11.25 12.692 11.527 12.743 11.898 L 12.75 12 L 12.75 16 C 12.75 16.394 12.444 16.721 12.051 16.748 C 11.658 16.775 11.311 16.493 11.257 16.102 L 11.25 16 L 11.25 12 C 11.25 11.586 11.586 11.25 12 11.25 Z M 12.01 7.25 C 12.404 7.25 12.731 7.556 12.758 7.949 C 12.785 8.342 12.503 8.689 12.112 8.743 L 12 8.75 C 11.606 8.75 11.279 8.444 11.252 8.051 C 11.225 7.658 11.507 7.311 11.898 7.257 Z"></path></svg>',
    },
    {
        name: "lock",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 19 10.25 L 5 10.25 C 3.481 10.25 2.25 11.481 2.25 13 L 2.25 20 C 2.25 21.519 3.481 22.75 5 22.75 L 19 22.75 C 20.519 22.75 21.75 21.519 21.75 20 L 21.75 13 C 21.75 11.481 20.519 10.25 19 10.25 Z M 5 11.75 L 19 11.75 C 19.69 11.75 20.25 12.31 20.25 13 L 20.25 20 C 20.25 20.69 19.69 21.25 19 21.25 L 5 21.25 C 4.31 21.25 3.75 20.69 3.75 20 L 3.75 13 C 3.75 12.31 4.31 11.75 5 11.75 Z"></path><path d="M 12 1.25 C 15.09 1.25 17.628 3.692 17.746 6.78 L 17.75 7 L 17.75 11 C 17.75 11.394 17.444 11.721 17.051 11.748 C 16.658 11.775 16.311 11.493 16.257 11.102 L 16.25 11 L 16.25 7 C 16.25 4.693 14.409 2.807 12.103 2.751 C 9.797 2.695 7.867 4.49 7.755 6.794 L 7.75 7 L 7.75 11 C 7.75 11.394 7.444 11.721 7.051 11.748 C 6.658 11.775 6.311 11.493 6.257 11.102 L 6.25 11 L 6.25 7 C 6.25 3.824 8.824 1.25 12 1.25 Z"></path></svg>',
    },
    {
        name: "face-id",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 24 20.109 C 24 22.255 22.255 24 20.109 24 L 17.414 24 C 17.078 24 16.805 23.727 16.805 23.391 C 16.805 23.054 17.078 22.781 17.414 22.781 L 20.109 22.781 C 21.583 22.781 22.781 21.583 22.781 20.109 L 22.781 17.414 C 22.781 17.078 23.054 16.805 23.391 16.805 C 23.727 16.805 24 17.078 24 17.414 Z M 7.195 23.391 C 7.195 23.727 6.922 24 6.586 24 L 3.891 24 C 1.745 24 0 22.255 0 20.109 L 0 17.414 C 0 17.078 0.273 16.805 0.609 16.805 C 0.946 16.805 1.219 17.078 1.219 17.414 L 1.219 20.109 C 1.219 21.583 2.417 22.781 3.891 22.781 L 6.586 22.781 C 6.922 22.781 7.195 23.054 7.195 23.391 Z M 1.219 6.586 C 1.219 6.922 0.946 7.195 0.609 7.195 C 0.273 7.195 0 6.922 0 6.586 L 0 3.891 C 0 1.745 1.745 0 3.891 0 L 6.586 0 C 6.922 0 7.195 0.273 7.195 0.609 C 7.195 0.946 6.922 1.219 6.586 1.219 L 3.891 1.219 C 2.417 1.219 1.219 2.417 1.219 3.891 Z M 24 6.586 C 24 6.922 23.727 7.195 23.391 7.195 C 23.054 7.195 22.781 6.922 22.781 6.586 L 22.781 3.891 C 22.781 2.417 21.583 1.219 20.109 1.219 L 17.414 1.219 C 17.078 1.219 16.805 0.946 16.805 0.609 C 16.805 0.273 17.078 0 17.414 0 L 20.109 0 C 22.255 0 24 1.745 24 3.891 Z M 16.205 17.738 C 15.057 18.799 13.564 19.383 12 19.383 C 10.436 19.383 8.943 18.799 7.795 17.738 C 7.538 17.501 7.522 17.101 7.759 16.844 C 7.996 16.587 8.397 16.572 8.653 16.809 C 9.567 17.652 10.755 18.117 12 18.117 C 13.245 18.117 14.433 17.652 15.347 16.809 C 15.603 16.572 16.004 16.587 16.241 16.844 C 16.478 17.101 16.462 17.501 16.205 17.738 Z M 13.266 13.547 C 13.266 14.439 12.54 15.164 11.648 15.164 L 11.133 15.164 C 10.783 15.164 10.5 14.881 10.5 14.531 C 10.5 14.182 10.783 13.898 11.133 13.898 L 11.648 13.898 C 11.842 13.898 12 13.741 12 13.547 L 12 9.047 C 12 8.697 12.283 8.414 12.633 8.414 C 12.982 8.414 13.266 8.697 13.266 9.047 Z M 17.625 10.816 C 17.625 11.146 17.357 11.414 17.027 11.414 C 16.697 11.414 16.43 11.146 16.43 10.816 L 16.43 9.012 C 16.43 8.682 16.697 8.414 17.027 8.414 C 17.357 8.414 17.625 8.682 17.625 9.012 Z M 6.516 10.816 L 6.516 9.012 C 6.516 8.682 6.783 8.414 7.113 8.414 C 7.443 8.414 7.711 8.682 7.711 9.012 L 7.711 10.816 C 7.711 11.146 7.443 11.414 7.113 11.414 C 6.783 11.414 6.516 11.146 6.516 10.816 Z" ></path></svg>',
    },
    {
        name: "blank",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 0 0 L 24 0 L 24 24 L 0 24 Z" fill="rgba(255, 255, 255, 0)"></path></svg>',
    },
];
const capitalize = (s) => {
    window["__checkBudget__"]();
    if (typeof s !== "string")
        return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};
exports.iconNames = [];
exports.iconOptions = [];
for (var index = 0; index < exports.Icons.length; index++) {
    window["__checkBudget__"]();
    exports.iconNames.push(exports.Icons[index]["name"]);
    exports.iconOptions.push(capitalize(exports.Icons[index]["name"].split("-")[0] + " " + capitalize(exports.Icons[index]["name"].split("-")[1])));
}
exports.__info__ = [];


/***/ }),

/***/ "../UF-Core.framerfx/code/ListItem.tsx":
/*!*********************************************!*\
  !*** ../UF-Core.framerfx/code/ListItem.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0xpc3RJdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBdUU7QUFDdkUscUNBQW9DO0FBQ3BDLDJDQUFzRDtBQUN0RCxpQ0FBNkI7QUFDN0IseUNBQW1EO0FBRW5ELHFDQUFxQztBQUVyQyxTQUFnQixRQUFRLENBQUMsS0FBSzs7SUFDMUIsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsS0FBYyxLQUFLLEVBQWpCLHdHQUFpQixDQUFBO0lBRTdGLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLG9CQUFLLElBQUksSUFBRSxVQUFVLEVBQUUsa0JBQU0sQ0FBQyxLQUFLLEVBQ3JDLEtBQUssRUFBRTtZQUNILFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLGtCQUFNLENBQUMsT0FBTztZQUMvRCxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsa0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDaEU7UUFFRCxvQkFBQyxjQUFLLG9CQUNFLElBQUksSUFDUixLQUFLLEVBQUUsS0FBSyxFQUNaLFdBQVcsRUFBRSxFQUFFLEVBQ2YsWUFBWSxFQUFFLEVBQUUsRUFDaEIsR0FBRyxFQUFFLEVBQUUsRUFDUCxTQUFTLEVBQUUsUUFBUSxFQUNuQixZQUFZLEVBQUUsWUFBWSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQ2pFLFNBQVMsRUFBRSxZQUFZO1lBRXRCLFlBQVksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFDLFdBQUksSUFDNUIsUUFBUSxFQUFFLElBQUksRUFDZCxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUNoRCxJQUFJLEVBQUUsa0JBQU0sQ0FBQyxVQUFVLEVBQ3ZCLElBQUksRUFBRSxFQUFFLEdBQ1YsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNULG9CQUFDLElBQUksQ0FBQyxLQUFLLFFBQUUsS0FBSyxDQUFjO1lBQy9CLFlBQVksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9CQUFDLFdBQUksSUFDN0IsUUFBUSxFQUFFLElBQUksRUFDZCxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxFQUMvQyxJQUFJLEVBQUUsa0JBQU0sQ0FBQyxVQUFVLEVBQ3ZCLElBQUksRUFBRSxFQUFFLEdBQ1YsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNMLENBQ0osQ0FDWCxDQUFBO0NBQ0o7QUFwQ0QsNEJBb0NDO0FBRUQsUUFBUSxDQUFDLFlBQVksR0FBRztJQUNwQixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxHQUFHO0lBQ1YsS0FBSyxFQUFFLFdBQVc7SUFDbEIsT0FBTyxFQUFFLElBQUk7Q0FDaEIsQ0FBQTtBQUVELHdEQUF3RDtBQUN4RCw0QkFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFDMUIsS0FBSyxFQUFFO1FBQ0gsS0FBSyxFQUFFLE9BQU87UUFDZCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxlQUFlO0tBQ2hDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsS0FBSyxFQUFFLFdBQVc7UUFDbEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztLQUM1QjtJQUNELElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixPQUFPLEVBQUUsb0JBQVM7UUFDbEIsWUFBWSxFQUFFLHNCQUFXO1FBQ3pCLE1BQU0sQ0FBQyxLQUFLOztZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1NBQ3hCO0tBQ0o7SUFDRCxZQUFZLEVBQUU7UUFDVixLQUFLLEVBQUUsZUFBZTtRQUN0QixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxhQUFhO1FBQy9CLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFDMUIsWUFBWSxFQUFFLE1BQU07UUFDcEIsTUFBTSxDQUFDLEtBQUs7O1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7U0FDeEI7S0FDSjtJQUNELFdBQVcsRUFBRTtRQUNULEtBQUssRUFBRSxlQUFlO1FBQ3RCLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsWUFBWSxFQUFFLElBQUk7S0FDckI7SUFDRCxVQUFVLEVBQUU7UUFDUixLQUFLLEVBQUUsY0FBYztRQUNyQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLG9CQUFXLENBQUMsWUFBWTtLQUNqQztDQUNKLENBQUMsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Type = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const Icon_1 = __webpack_require__(/*! ./Icon */ "../UF-Core.framerfx/code/Icon.tsx");
const IconList_1 = __webpack_require__(/*! ./IconList */ "../UF-Core.framerfx/code/IconList.tsx");
// Learn more: https://framer.com/api
function ListItem(props) {
    window["__checkComponentBudget__"]();
    const { label, icon, onTap, hasIcon, iconPosition, lastInList, firstInList } = props, rest = __rest(props, ["label", "icon", "onTap", "hasIcon", "iconPosition", "lastInList", "firstInList"]);
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { background: Variables_1.colors.white, style: {
            borderBottom: lastInList ? null : "1px solid " + Variables_1.colors.grey200,
            borderTop: firstInList ? "1px solid " + Variables_1.colors.grey200 : null
        } }),
        React.createElement(framer_1.Stack, Object.assign({}, rest, { onTap: onTap, paddingLeft: 16, paddingRight: 16, gap: 16, alignment: "center", distribution: iconPosition === "Left" ? "start" : "space-between", direction: "horizontal" }),
            iconPosition === "Left" ? React.createElement(Icon_1.Icon, { iconName: icon, style: { display: hasIcon ? "initial" : "none" }, fill: Variables_1.colors.primary600, size: 24 }) : null,
            React.createElement(Type.Body1, null, label),
            iconPosition === "Right" ? React.createElement(Icon_1.Icon, { iconName: icon, style: { display: hasIcon ? "initial" : "none" }, fill: Variables_1.colors.primary600, size: 24 }) : null)));
}
exports.ListItem = ListItem;
ListItem.defaultProps = {
    height: 48,
    width: 375,
    label: "List Item",
    hasIcon: true,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(ListItem, {
    label: {
        title: "Label",
        type: framer_1.ControlType.String,
        defaultValue: "Hello Framer!",
    },
    hasIcon: {
        title: "Show Icon",
        type: framer_1.ControlType.Boolean,
    },
    icon: {
        title: "Icon",
        type: framer_1.ControlType.Enum,
        options: IconList_1.iconNames,
        optionTitles: IconList_1.iconOptions,
        hidden(props) {
            window["__checkBudget__"]();
            return !props.hasIcon;
        },
    },
    iconPosition: {
        title: "Icon Position",
        type: framer_1.ControlType.SegmentedEnum,
        options: ["Left", "Right"],
        defaultValue: "Left",
        hidden(props) {
            window["__checkBudget__"]();
            return !props.hasIcon;
        }
    },
    firstInList: {
        title: "First in List",
        type: framer_1.ControlType.Boolean,
        defaultValue: true
    },
    lastInList: {
        title: "Last in List",
        type: framer_1.ControlType.Boolean,
        defaultValue: false
    },
    onTap: {
        type: framer_1.ControlType.EventHandler,
    },
});
exports.__info__ = [{ "name": "ListItem", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/LoadingAnimation.tsx":
/*!*****************************************************!*\
  !*** ../UF-Core.framerfx/code/LoadingAnimation.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZ0FuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTG9hZGluZ0FuaW1hdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBTWU7QUFDZixZQUFZO0FBQ1osOERBQTBEO0FBRTFELHFDQUFxQztBQUVyQyxTQUFnQixnQkFBZ0IsQ0FBQyxLQUFLOztJQUNsQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxLQUFjLEtBQUssRUFBakIsNkRBQWlCLENBQUE7SUFDeEQsTUFBTSxVQUFVLEdBQUcsc0JBQWEsRUFBRSxDQUFBO0lBRWxDLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLGtCQUNGLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsSUFDeEQsSUFBSSxJQUNSLFVBQVUsRUFBRSwwQkFBMEIsRUFDdEMsWUFBWSxFQUFFLFFBQVEsRUFDdEIsU0FBUyxFQUFFLFFBQVEsRUFDbkIsU0FBUyxFQUFFLFVBQVU7UUFFckIsb0JBQUMsY0FBSyxJQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLGFBQWE7WUFDekMsb0JBQUMsZUFBTSxJQUNILGFBQWEsRUFDVCxxRUFBcUUsR0FFM0UsQ0FDRTtRQUNSLG9CQUFDLGNBQUssSUFDRixLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFDeEMsVUFBVSxFQUFFLGFBQWEsRUFDekIsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsRUFBRSxJQUVULElBQUksQ0FDRCxDQUNKLENBQ1gsQ0FBQTtDQUNKO0FBOUJELDRDQThCQztBQUVELGdCQUFnQixDQUFDLFlBQVksR0FBRztJQUM1QixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxHQUFHO0lBQ1YsSUFBSSxFQUFFLFVBQVU7Q0FDbkIsQ0FBQTtBQUVELHdEQUF3RDtBQUN4RCw0QkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRTtJQUNsQyxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLFVBQVU7S0FDM0I7Q0FDSixDQUFDLENBQUEifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
//@ts-ignore
const Lottie_1 = __webpack_require__(/*! @framer/framer.lottie/code/Lottie */ "../UF-Core.framerfx/node_modules/@framer/framer.lottie/code/Lottie.tsx");
// Learn more: https://framer.com/api
function LoadingAnimation(props) {
    window["__checkComponentBudget__"]();
    const { text, tint, nextScreen, delay } = props, rest = __rest(props, ["text", "tint", "nextScreen", "delay"]);
    const navigation = framer_1.useNavigation();
    return (React.createElement(framer_1.Stack, Object.assign({ onLoad: setTimeout(() => navigation.fade(nextScreen), delay) }, rest, { background: "rgba(255, 255, 255, .75)", distribution: "center", alignment: "center", direction: "vertical" }),
        React.createElement(framer_1.Frame, { height: 100, background: "transparent" },
            React.createElement(Lottie_1.Lottie, { lottieJsonURL: "https://assets2.lottiefiles.com/datafiles/R3ENr7LCBV5JshA/data.json" })),
        React.createElement(framer_1.Frame, { style: { fontWeight: 600, fontSize: 20 }, background: "transparent", width: "100%", height: 24 }, text)));
}
exports.LoadingAnimation = LoadingAnimation;
LoadingAnimation.defaultProps = {
    height: 667,
    width: 375,
    text: "Loading!",
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(LoadingAnimation, {
    text: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "Loading!",
    },
});
exports.__info__ = [{ "name": "LoadingAnimation", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/Modal.tsx":
/*!******************************************!*\
  !*** ../UF-Core.framerfx/code/Modal.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL01vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBd0U7QUFDeEUscUNBQWlDO0FBQ2pDLDJDQUFvRTtBQUNwRSx5REFBdUM7QUFDdkMscUNBQXFDO0FBRXJDLHFDQUFxQztBQUVyQyxTQUFnQixLQUFLLENBQUMsS0FBSzs7SUFDdkIsTUFBTSxFQUNGLE1BQU0sRUFDTixJQUFJLEVBQ0osYUFBYSxFQUNiLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixLQUVsQixLQUFLLEVBREwsNklBQ0ssQ0FBQTtJQUVULE1BQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzJCQUNQLG1CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssbUJBQU8sQ0FBQyxJQUFJLENBQUM7OEJBQzVCLGtCQUFNLENBQUMsS0FBSzs7Ozt5QkFJakIsdUJBQVcsQ0FBQyxHQUFHLENBQUM7OzhCQUVYLG1CQUFPLENBQUMsRUFBRTtLQUNuQyxDQUFBO0lBQ0QsT0FBTyxDQUNILG9CQUFDLFdBQVc7UUFDUiw2QkFBSyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO1lBQzVCLDZCQUNJLEtBQUssRUFBRTtvQkFDSCxNQUFNLEVBQUUsRUFBRTtvQkFDVixZQUFZLEVBQUUsQ0FBQztvQkFDZixPQUFPLEVBQUUsTUFBTTtvQkFDZixhQUFhLEVBQUUsS0FBSztvQkFDcEIsWUFBWSxFQUFFLE9BQU87aUJBQ3hCO2dCQUVELG9CQUFDLElBQUksQ0FBQyxFQUFFLElBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFHLE1BQU0sQ0FBVyxDQUMvQztZQUVOLG9CQUFDLElBQUksQ0FBQyxLQUFLLElBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFHLElBQUksQ0FBYyxDQUNuRDtRQUNOLG9CQUFDLGVBQU0sSUFDSCxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQzFCLFdBQVcsRUFBRSxTQUFTLEVBQ3RCLElBQUksRUFBRSxhQUFhLEVBQ25CLEtBQUssRUFBRSxnQkFBZ0IsR0FDekI7UUFDRixvQkFBQyxlQUFNLElBQ0gsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUM1RCxXQUFXLEVBQUUsVUFBVSxFQUN2QixJQUFJLEVBQUUsZUFBZSxFQUNyQixLQUFLLEVBQUUsa0JBQWtCLEdBQzNCLENBQ1EsQ0FDakIsQ0FBQTtDQUNKO0FBckRELHNCQXFEQztBQUVELEtBQUssQ0FBQyxZQUFZLEdBQUc7SUFDakIsTUFBTSxFQUFFLEdBQUc7SUFDWCxLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLElBQUksRUFDQSwrRUFBK0U7SUFDbkYsbUJBQW1CLEVBQUUsSUFBSTtDQUM1QixDQUFBO0FBRUQsd0RBQXdEO0FBQ3hELDRCQUFtQixDQUFDLEtBQUssRUFBRTtJQUN2QixNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLGVBQWU7S0FDaEM7SUFDRCxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUNSLCtFQUErRTtLQUN0RjtJQUNELGFBQWEsRUFBRTtRQUNYLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLFNBQVM7S0FDMUI7SUFDRCxlQUFlLEVBQUU7UUFDYixLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxXQUFXO1FBQ3pCLE1BQU0sQ0FBQyxLQUFLOztZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUE7U0FDcEM7S0FDSjtJQUNELG1CQUFtQixFQUFFO1FBQ2pCLEtBQUssRUFBRSxxQkFBcUI7UUFDNUIsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztLQUM1QjtDQUNKLENBQUMsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Button_1 = __webpack_require__(/*! ./Button */ "../UF-Core.framerfx/code/Button.tsx");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../UF-Core.framerfx/node_modules/styled-components/dist/styled-components.browser.esm.js");
const Type = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
// Learn more: https://framer.com/api
function Modal(props) {
    window["__checkComponentBudget__"]();
    const { header, body, primaryAction, secondaryAction, showSecondaryAction, primaryActionTap, secondaryActionTap } = props, rest = __rest(props, ["header", "body", "primaryAction", "secondaryAction", "showSecondaryAction", "primaryActionTap", "secondaryActionTap"]);
    const StyledModal = styled_components_1.default.div `
                padding: ${Variables_1.spacing["2x"]}  ${Variables_1.spacing["3x"]};
                background: ${Variables_1.colors.white};
                display: flex;
                flex-direction: column;
                justify-content: left;
                width: ${Variables_1.converToREM(280)};
                border-radius: 4px;
                box-shadow: ${Variables_1.shadows.z5};
    `;
    return (React.createElement(StyledModal, null,
        React.createElement("div", { style: { marginBottom: 24 } },
            React.createElement("div", { style: {
                    height: 48,
                    marginBottom: 8,
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "start",
                } },
                React.createElement(Type.H6, { style: { margin: 0 } }, header)),
            React.createElement(Type.Body2, { style: { margin: 0 } }, body)),
        React.createElement(Button_1.Button, { style: { marginBottom: 8 }, buttonStyle: "primary", text: primaryAction, onTap: primaryActionTap }),
        React.createElement(Button_1.Button, { style: { display: showSecondaryAction ? "initial" : "none" }, buttonStyle: "tertiary", text: secondaryAction, onTap: secondaryActionTap })));
}
exports.Modal = Modal;
Modal.defaultProps = {
    height: 285,
    width: 280,
    header: "Dialog Header",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mauris dui.",
    showSecondaryAction: true,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(Modal, {
    header: {
        title: "Header",
        type: framer_1.ControlType.String,
        defaultValue: "Dialog Header",
    },
    body: {
        title: "Body",
        type: framer_1.ControlType.String,
        defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mauris dui.",
    },
    primaryAction: {
        title: "Primary",
        type: framer_1.ControlType.String,
        defaultValue: "Primary",
    },
    secondaryAction: {
        title: "Secondary",
        type: framer_1.ControlType.String,
        defaultValue: "Secondary",
        hidden(props) {
            window["__checkBudget__"]();
            return !props.showSecondaryAction;
        },
    },
    showSecondaryAction: {
        title: "Show Secondary Act.",
        type: framer_1.ControlType.Boolean,
    },
});
exports.__info__ = [{ "name": "Modal", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/NavBar.tsx":
/*!*******************************************!*\
  !*** ../UF-Core.framerfx/code/NavBar.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2QmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9OYXZCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQUN2RSwyQ0FBc0Q7QUFDdEQscUNBQW9DO0FBQ3BDLGlDQUE2QjtBQUM3Qix5Q0FBbUQ7QUFFbkQscUNBQXFDO0FBRXJDLFNBQWdCLE1BQU0sQ0FBQyxLQUFLOztJQUN4QixNQUFNLEVBQ0YsUUFBUSxFQUNSLFFBQVEsRUFDUixXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsS0FFVCxLQUFLLEVBREwsMEZBQ0ssQ0FBQTtJQUVULE9BQU8sQ0FDSCxvQkFBQyxjQUFLLGtCQUNGLFVBQVUsRUFBRSxrQkFBTSxDQUFDLEtBQUssSUFDcEIsSUFBSSxJQUNSLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxhQUFhLGtCQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFFdEQsb0JBQUMsY0FBSyxJQUNGLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQ1gsVUFBVSxFQUFFLGtCQUFNLENBQUMsS0FBSyxFQUN4QixNQUFNLEVBQUUsRUFBRSxFQUNWLE1BQU0sRUFBRSxDQUFDLEVBQ1QsS0FBSyxFQUFFLE1BQU07WUFFYixvQkFBQyxjQUFLLElBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDbkMsb0JBQUMsV0FBSSxJQUNELElBQUksRUFBRSxrQkFBTSxDQUFDLE9BQU8sRUFDcEIsS0FBSyxFQUFFLFdBQVcsRUFDbEIsUUFBUSxFQUFFLFFBQVEsR0FDcEI7Z0JBQ0Ysb0JBQUMsSUFBSSxDQUFDLEVBQUUsSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQU0sQ0FBQyxPQUFPLEVBQUUsSUFDcEMsUUFBUSxDQUNILENBQ047WUFFUixvQkFBQyxXQUFJLElBQ0QsS0FBSyxFQUFFLFlBQVksRUFDbkIsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUM3QixJQUFJLEVBQUUsa0JBQU0sQ0FBQyxPQUFPLEVBQ3BCLFFBQVEsRUFBRSxTQUFTLEdBQ3JCLENBQ0UsQ0FDSixDQUNYLENBQUE7Q0FDSjtBQTVDRCx3QkE0Q0M7QUFFRCxNQUFNLENBQUMsWUFBWSxHQUFHO0lBQ2xCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEdBQUc7SUFDVixRQUFRLEVBQUUsWUFBWTtJQUN0QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsT0FBTztDQUNwQixDQUFBO0FBRUQsd0RBQXdEO0FBQ3hELDRCQUFtQixDQUFDLE1BQU0sRUFBRTtJQUN4QixRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLE9BQU87S0FDeEI7SUFDRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sRUFBRSxvQkFBUztRQUNsQixZQUFZLEVBQUUsc0JBQVc7S0FDNUI7SUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxZQUFZO0tBQ2pDO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsSUFBSSxFQUFFLG9CQUFXLENBQUMsWUFBWTtLQUNqQztJQUNELFNBQVMsRUFBRTtRQUNQLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsT0FBTyxFQUFFLG9CQUFTO1FBQ2xCLFlBQVksRUFBRSxzQkFBVztLQUM1QjtDQUNKLENBQUMsQ0FBQSJ9

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const Text = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
const Icon_1 = __webpack_require__(/*! ./Icon */ "../UF-Core.framerfx/code/Icon.tsx");
const IconList_1 = __webpack_require__(/*! ./IconList */ "../UF-Core.framerfx/code/IconList.tsx");
// Learn more: https://framer.com/api
function NavBar(props) {
    window["__checkComponentBudget__"]();
    const { navTitle, iconLeft, iconLeftNav, iconRightNav, iconRight } = props, rest = __rest(props, ["navTitle", "iconLeft", "iconLeftNav", "iconRightNav", "iconRight"]);
    return (React.createElement(framer_1.Frame, Object.assign({ background: Variables_1.colors.white }, rest, { style: { borderBottom: `1px solid ${Variables_1.colors.grey200}` } }),
        React.createElement(framer_1.Stack, { direction: "horizontal", padding: 16, background: Variables_1.colors.white, height: 56, bottom: 0, width: "100%" },
            React.createElement(framer_1.Stack, { direction: "horizontal", gap: 32 },
                React.createElement(Icon_1.Icon, { fill: Variables_1.colors.grey900, onTap: iconLeftNav, iconName: iconLeft }),
                React.createElement(Text.H6, { style: { color: Variables_1.colors.grey900 } }, navTitle)),
            React.createElement(Icon_1.Icon, { onTap: iconRightNav, style: { marginLeft: "auto" }, fill: Variables_1.colors.grey900, iconName: iconRight }))));
}
exports.NavBar = NavBar;
NavBar.defaultProps = {
    height: 80,
    width: 375,
    iconLeft: "arrow-left",
    iconRight: "info",
    navTitle: "Title",
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(NavBar, {
    navTitle: {
        title: "Title",
        type: framer_1.ControlType.String,
        defaultValue: "Title",
    },
    iconLeft: {
        title: "Left Icon",
        type: framer_1.ControlType.Enum,
        options: IconList_1.iconNames,
        optionTitles: IconList_1.iconOptions,
    },
    iconLeftNav: {
        type: framer_1.ControlType.EventHandler,
    },
    iconRightNav: {
        type: framer_1.ControlType.EventHandler,
    },
    iconRight: {
        title: "Right Icon",
        type: framer_1.ControlType.Enum,
        options: IconList_1.iconNames,
        optionTitles: IconList_1.iconOptions,
    },
});
exports.__info__ = [{ "name": "NavBar", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/Radio.tsx":
/*!******************************************!*\
  !*** ../UF-Core.framerfx/code/Radio.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1JhZGlvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLDJDQUE4QztBQUM5Qyx5REFBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLG1DQUFrRTtBQU9sRSxNQUFNLFdBQVcsR0FBRywyQkFBTSxDQUFDLGVBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDNUQsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztRQUN0QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7S0FDbkIsQ0FBQztDQUNILENBQUMsQ0FBQTs7Ozs7Ozs7Ozs7a0JBV2dCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBTSxDQUFDLE9BQU8sQ0FBQzs7d0JBRXBELENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSzs7Ozs7OztvQkFPMUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLOzs7OztnQkFLMUIsbUJBQU8sQ0FBQyxJQUFJLENBQUM7YUFDaEIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLOztDQUVsQyxDQUFDO0FBRUYsU0FBZ0IsS0FBSyxDQUFDLEtBQVU7O0lBQzlCLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQztJQUN4QyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxHQUFHLGdCQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFaEQsT0FBTyxDQUNMLG9CQUFDLFdBQVcsSUFDVixLQUFLLEVBQUUsR0FBRyxFQUFFOztZQUNWLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QyxFQUNELE9BQU8sRUFBRSxPQUFPLEVBQ2hCLEtBQUssRUFBRSxLQUFLO1FBRVosNkJBQUssU0FBUyxFQUFDLFdBQVc7WUFDeEIsb0JBQUMsZUFBTSxDQUFDLEdBQUcsSUFDVCxPQUFPLEVBQUU7b0JBQ1AsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNCLEVBQ0QsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQixFQUNELFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUUsR0FBRztpQkFDZCxFQUNELFNBQVMsRUFBQyxZQUFZLEdBQ3RCLENBQ0U7UUFDTixvQkFBQyxJQUFJLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxPQUFPLElBQUUsS0FBSyxDQUFjLENBQ3RDLENBQ2YsQ0FBQztDQUNIO0FBL0JELHNCQStCQztBQUVELEtBQUssQ0FBQyxZQUFZLEdBQUc7SUFDbkIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxrQkFBTSxDQUFDLFVBQVU7SUFDeEIsT0FBTyxFQUFFLElBQUk7SUFDYixLQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7QUFFRiw0QkFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFDekIsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixZQUFZLEVBQUUsSUFBSTtLQUNuQjtJQUNELEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixZQUFZLEVBQUUsa0JBQU0sQ0FBQyxVQUFVO1FBQy9CLE1BQU0sQ0FBQyxLQUFLOztZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUNELEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixZQUFZLEVBQUUsT0FBTztLQUN0QjtDQUNGLENBQUMsQ0FBQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../UF-Core.framerfx/node_modules/styled-components/dist/styled-components.browser.esm.js");
const Type = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const StyledRadio = styled_components_1.default(framer_1.motion.div).attrs((props) => {
    window["__checkBudget__"]();
    return {
        enabled: props.enabled,
        color: props.color,
    };
}) `
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: start;
  align-content: flex-start;
  align-items: center;

  .container {
    width: 1.5rem;
    height: 1.5rem;
    background: ${(props) => (props.enabled ? Variables_1.colors.white : Variables_1.colors.grey200)};
    outline: none;
    border: 1px solid ${(props) => props.color};
    border-radius: 50%;

    > .background {
      width: 1rem;
      height: 1rem;
      margin: 3px auto;
      background: ${(props) => props.color};
      border-radius: 50%;
    }
  }
  > .label {
    margin: 0 ${Variables_1.spacing["2x"]};
    color: ${(props) => props.color};
  }
`;
function Radio(props) {
    window["__checkComponentBudget__"]();
    const { enabled, color, label } = props;
    const [isChecked, setChecked] = react_1.useState(false);
    return (React.createElement(StyledRadio, { onTap: () => {
            window["__checkBudget__"]();
            setChecked(enabled ? !isChecked : isChecked);
        }, enabled: enabled, color: color },
        React.createElement("div", { className: "container" },
            React.createElement(framer_1.motion.div, { initial: {
                    scale: isChecked ? 1 : 0,
                    opacity: isChecked ? 1 : 0,
                }, animate: {
                    scale: isChecked ? 1 : 0,
                    opacity: isChecked ? 1 : 0,
                }, transition: {
                    duration: 0.2,
                }, className: "background" })),
        React.createElement(Type.Body2, { className: "label" }, label)));
}
exports.Radio = Radio;
Radio.defaultProps = {
    width: 200,
    height: 40,
    color: Variables_1.colors.primary900,
    enabled: true,
    label: "Label",
};
framer_1.addPropertyControls(Radio, {
    enabled: {
        title: "Enabled",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    color: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: Variables_1.colors.primary900,
        hidden(props) {
            window["__checkBudget__"]();
            return true;
        },
    },
    label: {
        title: "Label",
        type: framer_1.ControlType.String,
        defaultValue: "Label",
    },
});
exports.__info__ = [{ "name": "Radio", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/StatusBar.tsx":
/*!**********************************************!*\
  !*** ../UF-Core.framerfx/code/StatusBar.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TdGF0dXNCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQUN2RSwyQ0FBc0Q7QUFDdEQscUNBQW9DO0FBSXBDLHFDQUFxQztBQUVyQyxTQUFnQixTQUFTLENBQUMsS0FBSzs7SUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtJQUN2QixNQUFNLFdBQVcsR0FDYixJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2YsR0FBRztRQUNILENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7SUFDMUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sS0FBYyxLQUFLLEVBQWpCLDhEQUFpQixDQUFBO0lBQ3pELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLGtCQUNGLFdBQVcsRUFBRSxFQUFFLEVBQ2YsWUFBWSxFQUFFLEVBQUUsRUFDaEIsU0FBUyxFQUFFLFFBQVEsRUFDbkIsWUFBWSxFQUFFLGVBQWUsRUFDN0IsU0FBUyxFQUFFLFlBQVksRUFDdkIsVUFBVSxFQUFFLE9BQU8sSUFDZixJQUFJO1FBRVIsb0JBQUMsY0FBSyxJQUNGLFNBQVMsRUFBRSxRQUFRLEVBQ25CLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLEVBQUUsRUFDVixVQUFVLEVBQUMsYUFBYTtZQUV4QixvQkFBQyxjQUFLLElBQ0YsYUFBYSxFQUFFLENBQUMsRUFDaEIsU0FBUyxFQUFFLFlBQVksRUFDdkIsU0FBUyxFQUFFLEtBQUssRUFDaEIsS0FBSyxFQUFFLE1B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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const Text = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
// Learn more: https://framer.com/api
function StatusBar(props) {
    window["__checkComponentBudget__"]();
    const date = new Date();
    const currentTime = date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
    const { carrier, tint, battery, signal } = props, rest = __rest(props, ["carrier", "tint", "battery", "signal"]);
    return (React.createElement(framer_1.Stack, Object.assign({ paddingLeft: 16, paddingRight: 16, alignment: "center", distribution: "space-between", direction: "horizontal", background: "white" }, rest),
        React.createElement(framer_1.Stack, { alignment: "center", direction: "horizontal", width: "1fr", height: 24, background: "transparent" },
            React.createElement(framer_1.Stack, { paddingBottom: 7, direction: "horizontal", alignment: "end", width: "auto", height: 24, gap: 2 },
                React.createElement(framer_1.Frame, { height: 4, width: 2, background: Variables_1.colors.grey900 }),
                React.createElement(framer_1.Frame, { height: 6, width: 2, background: signal > 1 ? Variables_1.colors.grey900 : Variables_1.colors.grey400 }),
                React.createElement(framer_1.Frame, { height: 8, width: 2, background: signal > 2 ? Variables_1.colors.grey900 : Variables_1.colors.grey400 }),
                React.createElement(framer_1.Frame, { height: 10, width: 2, background: signal > 3 ? Variables_1.colors.grey900 : Variables_1.colors.grey400 })),
            React.createElement(Text.Caption, { style: { margin: 0 } }, carrier)),
        React.createElement(framer_1.Stack, { alignment: "center", direction: "horizontal", distribution: "center", width: "1fr", height: 24 },
            React.createElement(Text.Caption, { style: { margin: 0 } }, currentTime)),
        React.createElement(framer_1.Stack, { direction: "horizontal", distribution: "end", width: "1fr", height: 24, background: "transparent" },
            React.createElement(Text.Caption, { style: { margin: 0 } }, battery + "%"),
            React.createElement(framer_1.Frame, { height: 12, width: 24, background: "transparent", border: `1px solid ${Variables_1.colors.grey700}`, borderRadius: 2 },
                React.createElement(framer_1.Frame, { top: 1, left: 1, height: 8, borderRadius: 1, width: battery - 9 + "%", background: battery < 75 && battery > 50
                        ? Variables_1.colors.warning
                        : battery < 50
                            ? Variables_1.colors.danger
                            : Variables_1.colors.grey900 })))));
}
exports.StatusBar = StatusBar;
StatusBar.defaultProps = {
    height: 24,
    width: 375,
    carrier: "LillyApp",
    battery: 100,
    signal: 2,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(StatusBar, {
    carrier: {
        title: "Carrier",
        type: framer_1.ControlType.String,
        defaultValue: "LillApp",
    },
    battery: {
        title: "Battery",
        type: framer_1.ControlType.Number,
        defaultValue: 100,
    },
    onTap: {
        type: framer_1.ControlType.EventHandler,
    },
    signal: {
        title: "Signal",
        type: framer_1.ControlType.Number,
        defaultValue: 4,
        max: 4,
        min: 1,
    },
});
exports.__info__ = [{ "name": "StatusBar", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/Switch.tsx":
/*!*******************************************!*\
  !*** ../UF-Core.framerfx/code/Switch.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Td2l0Y2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsMkNBQXVEO0FBQ3ZELHlEQUF1QztBQUN2QyxxQ0FBcUM7QUFDckMsbUNBQWtFO0FBT2xFLE1BQU0sWUFBWSxHQUFHLDJCQUFNLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFOztJQUM3RCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztLQUNuQixDQUFDO0NBQ0gsQ0FBQyxDQUFBOzs7Ozs7Ozs7YUFTVyxrQkFBTSxDQUFDLE9BQU87Ozs7bUJBSVIsbUJBQU8sQ0FBQyxJQUFJLENBQUM7OztlQUdqQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7c0JBYXRDLGtCQUFNLENBQUMsS0FBSztzQkFDWixtQkFBTyxDQUFDLEVBQUU7Ozs7Q0FJL0IsQ0FBQztBQUVGLFNBQWdCLE1BQU0sQ0FBQyxLQUFVOztJQUMvQixNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVuQyxTQUFTLFdBQVc7O1FBQ2xCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLENBQ0wsb0JBQUMsWUFBWSxJQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSztRQUM5RCxvQkFBQyxJQUFJLENBQUMsS0FBSyxJQUFDLEtBQUssRUFBRSxrQkFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsT0FBTyxJQUFFLEtBQUssQ0FBYztRQUN6RSw2QkFBSyxTQUFTLEVBQUMsV0FBVztZQUN4QixvQkFBQyxlQUFNLENBQUMsR0FBRyxJQUNULFNBQVMsRUFBQyxJQUFJLEVBQ2QsT0FBTyxFQUFFO29CQUNQLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQkFBTSxDQUFDLE9BQU87aUJBQ25ELEVBQ0QsT0FBTyxFQUFFO29CQUNQLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQkFBTSxDQUFDLE9BQU87aUJBQ25EO2dCQUVELG9CQUFDLGVBQU0sQ0FBQyxHQUFHLElBQ1QsT0FBTyxFQUFFO3dCQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckIsRUFDRCxPQUFPLEVBQUU7d0JBQ1AsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQixFQUNELFNBQVMsRUFBQyxNQUFNLEdBQ2hCLENBQ1MsQ0FDVCxDQUNPLENBQ2hCLENBQUM7Q0FDSDtBQW5DRCx3QkFtQ0M7QUFFRCxNQUFNLENBQUMsWUFBWSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixPQUFPLEVBQUUsSUFBSTtJQUNiLEVBQUUsRUFBRSxLQUFLO0lBQ1QsS0FBSyxFQUFFLGtCQUFNLENBQUMsVUFBVTtJQUN4QixLQUFLLEVBQUUsT0FBTztJQUNkLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO0NBQzFCLENBQUM7QUFFRiw0QkFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFDMUIsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixZQUFZLEVBQUUsSUFBSTtLQUNuQjtJQUNELEVBQUUsRUFBRTtRQUNGLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixZQUFZLEVBQUUsSUFBSTtLQUNuQjtJQUNELEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixZQUFZLEVBQUUsa0JBQU0sQ0FBQyxVQUFVO1FBQy9CLE1BQU0sQ0FBQyxLQUFLOztZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUNELEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtLQUN6QjtDQUNGLENBQUMsQ0FBQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../UF-Core.framerfx/node_modules/styled-components/dist/styled-components.browser.esm.js");
const Type = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const StyledSwitch = styled_components_1.default(framer_1.motion.div).attrs((props) => {
    window["__checkBudget__"]();
    return {
        enabled: props.enabled,
        color: props.color,
    };
}) `
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;

  > .label {
    color: ${Variables_1.colors.grey900};
  }

  .container {
    margin-left: ${Variables_1.spacing["2x"]};
    width: 2.5rem;
    height: 1rem;
    opacity: ${(props) => (props.enabled === true ? 1 : 0.5)};

    .bg {
      width: 2.25rem;
      height: 1rem;
      border-radius: 1rem;

      .knob {
        position: relative;
        top: -2px;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background: ${Variables_1.colors.white};
        box-shadow: ${Variables_1.shadows.z1};
      }
    }
  }
`;
function Switch(props) {
    window["__checkComponentBudget__"]();
    const { enabled, on, color, label } = props;
    const [isOn, setOn] = react_1.useState(on);
    function handleOnTap() {
        window["__checkBudget__"]();
        props.onValueChange(!isOn);
        setOn(enabled ? !isOn : isOn);
    }
    return (React.createElement(StyledSwitch, { onTap: handleOnTap, enabled: enabled, color: color },
        React.createElement(Type.Body2, { color: Variables_1.colors.grey900, className: "label" }, label),
        React.createElement("div", { className: "container" },
            React.createElement(framer_1.motion.div, { className: "bg", initial: {
                    background: isOn ? Variables_1.colors.success : Variables_1.colors.grey400,
                }, animate: {
                    background: isOn ? Variables_1.colors.success : Variables_1.colors.grey400,
                } },
                React.createElement(framer_1.motion.div, { initial: {
                        x: isOn ? "1rem" : 0,
                    }, animate: {
                        x: isOn ? "1rem" : 0,
                    }, className: "knob" })))));
}
exports.Switch = Switch;
Switch.defaultProps = {
    width: 40,
    height: 40,
    enabled: true,
    on: false,
    color: Variables_1.colors.primary900,
    label: "Label",
    onValueChange: () => null
};
framer_1.addPropertyControls(Switch, {
    enabled: {
        title: "Enabled",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    on: {
        title: "On",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    color: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: Variables_1.colors.primary900,
        hidden(props) {
            window["__checkBudget__"]();
            return true;
        },
    },
    label: {
        title: "Label",
        type: framer_1.ControlType.String,
    },
});
exports.__info__ = [{ "name": "Switch", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/TextField.tsx":
/*!**********************************************!*\
  !*** ../UF-Core.framerfx/code/TextField.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9UZXh0RmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLGlDQUFvRDtBQUNwRCwyQ0FBOEM7QUFDOUMseURBQXVDO0FBQ3ZDLG1DQUF5RTtBQUN6RSxxQ0FBcUM7QUFDckMsaUNBQThCO0FBUTlCLE1BQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsZUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFOztJQUMxRCxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDekMsT0FBTztRQUNILE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLE9BQU87S0FDbkIsQ0FBQztDQUNMLENBQUMsQ0FBQTs7O2VBR2EsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Ozs7O3FCQUs5QixtQkFBTyxDQUFDLElBQUksQ0FBQztrQkFDaEIsbUJBQU8sQ0FBQyxJQUFJLENBQUM7Ozs7NEJBSUgsa0JBQU0sQ0FBQyxPQUFPOztzQkFFcEIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQU0sQ0FBQyxPQUFPOzs7NEJBRzdCLGtCQUFNLENBQUMsVUFBVTs7Ozs0QkFJakIsa0JBQU0sQ0FBQyxNQUFNOzs7OztnQkFLekIsbUJBQU8sQ0FBQyxJQUFJLENBQUM7ZUFDZCxtQkFBTyxDQUFDLElBQUksQ0FBQzs7Ozs7O2lCQU1YLGtCQUFNLENBQUMsTUFBTTs7O2lC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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const Variables_1 = __webpack_require__(/*! ./Variables */ "../UF-Core.framerfx/code/Variables.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "../UF-Core.framerfx/node_modules/styled-components/dist/styled-components.browser.esm.js");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Type = __webpack_require__(/*! ./Typography */ "../UF-Core.framerfx/code/Typography.tsx");
const Icon_1 = __webpack_require__(/*! ./Icon */ "../UF-Core.framerfx/code/Icon.tsx");
const StyledField = styled_components_1.default(framer_1.motion.div).attrs((props) => {
    window["__checkBudget__"]();
    const { enabled, focused, type } = props;
    return {
        enabled: enabled,
        type: type,
        focused: focused,
    };
}) `
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.enabled ? 1 : 0.5)};
    margin-bottom: 1.5rem;

    > .input {
        width: 100%;
        padding: 0 ${Variables_1.spacing["2x"]};
        height: ${Variables_1.spacing["6x"]};
        padding-top: 12px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid ${Variables_1.colors.grey400};
        outline: none;
        background: ${(props) => props.enabled ? Variables_1.colors.white : Variables_1.colors.grey200};

        &:focus {
            border-color: ${Variables_1.colors.primary600};
        }

        &:invalid {
            border-color: ${Variables_1.colors.danger}
        }
    }
    > .label {
        position: absolute;
        left: ${Variables_1.spacing["2x"]};
        top: ${Variables_1.spacing["2x"]};
        font-family: Roboto, sans-serif;
        font-size: 16px;
        line-height: 19px;
    }
    > .input:focus:invalid + .label, > .input:focus:invalid ~ .assistive {
        color: ${Variables_1.colors.danger};
    }
    > .input:focus + .label, > .input:focus ~ .assistive {
        color: ${Variables_1.colors.primary600};
    }
    > .assistive {
        margin-top: 0px;
        height: ${Variables_1.spacing["2x"]};
        padding: 0 ${Variables_1.spacing["2x"]};
        padding-top: 4px;
    }
`;
function TextField(props) {
    window["__checkComponentBudget__"]();
    //********** Set Props **********//
    const { label, enabled, focused, type, empty, hasError, defaultValue = "", assistMessage = "Password must contain at least one letter, at least one number, and be longer than six charaters.", errorMessage = "You have included non-alphabetical characters", color } = props, rest = __rest(props, ["label", "enabled", "focused", "type", "empty", "hasError", "defaultValue", "assistMessage", "errorMessage", "color"]);
    //********** Set Variables **********//
    let showIcon = false;
    let activeColor, message;
    const inputRef = react_1.useRef();
    const id = Math.floor(Math.random() * 8888);
    //********** Set States **********//
    const [isFocused, setFocused] = react_1.useState(focused);
    const [value, setValue] = react_1.useState(defaultValue);
    const [isValid, setValid] = react_1.useState(hasError);
    const [showPassword, setShowPassword] = react_1.useState(false);
    //********** Validation Checks **********//
    // Check if email is valid
    function emailIsValid(email) {
        window["__checkBudget__"]();
        return /\S+@\S+\.\S+/.test(email);
    }
    // Check if password is valid
    function passwordIsValid(password) {
        window["__checkBudget__"]();
        return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password);
    }
    //********** Input Events **********//
    function onChange(e) {
        window["__checkBudget__"]();
        const value = e.target.value;
        if (props.onChange)
            props.onChange(value);
        setValue(value);
        if (props.onValueChange) {
            props.onValueChange(value);
        }
        setValue(value);
        if (type === "email") {
            setValid(emailIsValid(value));
        }
        else if (type === "password")
            setValid(passwordIsValid(value));
    }
    function toggleFocus() {
        window["__checkBudget__"]();
        setFocused(!isFocused);
    }
    function togglePassword() {
        window["__checkBudget__"]();
        setShowPassword(!showPassword);
        //@ts-ignore
        inputRef.current.focus();
    }
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (emailIsValid(defaultValue)) {
            setValid(true);
            if (value != defaultValue || defaultValue != "") {
                setValue(defaultValue);
            }
        }
    }, [defaultValue]);
    //********** Check Input State **********//
    if (isFocused) {
        activeColor = color;
        message = assistMessage;
    }
    else if ((!isValid && value.length > 0 && !isFocused) || hasError) {
        if (errorMessage === "") {
            activeColor = Variables_1.colors.grey400;
            message = assistMessage;
        }
        else {
            activeColor = Variables_1.colors.danger;
            message = errorMessage;
            showIcon = !showIcon;
        }
    }
    else if ((!isFocused && !empty) || defaultValue != "") {
        activeColor = Variables_1.colors.grey400;
        message = assistMessage;
    }
    else if (empty && !isFocused) {
        showIcon = !showIcon;
        activeColor = Variables_1.colors.danger;
        message = label + " cannot be empty";
    }
    return (React.createElement(StyledField, { enabled: enabled },
        React.createElement("input", { id: "renene" + id, ref: inputRef, className: "input", type: showPassword ? "text" : type, disabled: !enabled, defaultValue: defaultValue, onChange: onChange, onFocus: toggleFocus, onBlur: toggleFocus, onInvalid: () => setValid(false), style: { borderColor: activeColor } }),
        React.createElement(framer_1.motion.label, { className: "label", htmlFor: "renene" + id, style: {
                originX: 0,
            }, initial: {
                scale: 1,
                x: 0,
                y: 0,
                color: activeColor,
            }, animate: {
                scale: isFocused || value.length > 0 || defaultValue.length > 0
                    ? 0.65
                    : 1,
                x: isFocused || value.length > 0 || defaultValue.length > 0
                    ? 1
                    : 0,
                y: isFocused || value.length > 0 || defaultValue.length > 0
                    ? -15
                    : 0,
                color: activeColor,
            }, transition: {
                duration: 0.15,
            } }, label),
        React.createElement(Icon_1.Icon, { iconName: "warning", fill: Variables_1.colors.danger, style: {
                position: "absolute",
                right: "12px",
                top: "12px",
                display: showIcon ? "initial" : "none",
            } }),
        React.createElement(Icon_1.Icon, { onTap: togglePassword, style: {
                position: "absolute",
                right: "12px",
                top: "12px",
                display: type === "password" && !showIcon ? "initial" : "none",
            }, iconName: !showPassword ? "show" : "hide", fill: Variables_1.colors.grey700, size: "24px" }),
        React.createElement(framer_1.Frame, { style: { paddingLeft: 16 }, width: "100%", height: 32, background: "transparent" },
            React.createElement(Type.Caption, { color: activeColor }, message))));
}
exports.TextField = TextField;
TextField.defaultProps = {
    label: "Test",
    type: "text",
    enabled: true,
    focused: false,
    color: Variables_1.colors.primary900,
    width: 375,
    height: 70,
    hasError: false,
};
framer_1.addPropertyControls(TextField, {
    defaultValue: {
        title: "Default Value",
        type: framer_1.ControlType.String,
        defaultValue: "",
    },
    currentValue: {
        title: "Current Value",
        type: framer_1.ControlType.String,
        defaultValue: "",
        hidden() {
            window["__checkBudget__"]();
            return true;
        },
    },
    type: {
        title: "Input Type",
        type: framer_1.ControlType.Enum,
        options: ["text", "email", "password", "number"],
        optionTitles: ["Text", "Email", "Password", "Number"],
    },
    label: {
        title: "Label",
        type: framer_1.ControlType.String,
    },
    assistMessage: {
        title: "Assist Msg",
        type: framer_1.ControlType.String,
    },
    errorMessage: {
        title: "Error Msg",
        type: framer_1.ControlType.String,
    },
    enabled: {
        title: "Enabled",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
    },
    focused: {
        title: "Focused",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    },
    hasError: {
        title: "Error",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
    },
    empty: {
        title: "Empty",
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
        hidden() {
            window["__checkBudget__"]();
            return true;
        },
    },
    color: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: Variables_1.colors.primary900,
        hidden(props) {
            window["__checkBudget__"]();
            return true;
        },
    },
});
exports.__info__ = [{ "name": "TextField", "children": false, "type": "component" }];


/***/ }),

/***/ "../UF-Core.framerfx/code/Typography.tsx":
/*!***********************************************!*\
  !*** ../UF-Core.framerfx/code/Typography.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwb2dyYXBoeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVHlwb2dyYXBoeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEseURBQXNDO0FBRXpCLFFBQUEsRUFBRSxHQUFHLDJCQUFNLENBQUMsRUFBRSxDQUFBO2FBQ2QsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUzs7Ozs7O0NBTS9DLENBQUE7QUFFWSxRQUFBLEVBQUUsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FBQTthQUNkLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVM7Ozs7OztDQU0vQyxDQUFBO0FBRVksUUFBQSxFQUFFLEdBQUcsMkJBQU0sQ0FBQyxFQUFFLENBQUE7YUFDZCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTOzs7Ozs7Q0FNL0MsQ0FBQTtBQUVZLFFBQUEsRUFBRSxHQUFHLDJCQUFNLENBQUMsRUFBRSxDQUFBO2FBQ2QsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUzs7Ozs7O0NBTS9DLENBQUE7QUFFWSxRQUFBLEVBQUUsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FBQTthQUNkLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVM7Ozs7OztDQU0vQyxDQUFBO0FBRVksUUFBQSxFQUFFLEdBQUcsMkJBQU0sQ0FBQyxFQUFFLENBQUE7Ozs7OztDQU0xQixDQUFBO0FBRVksUUFBQSxPQUFPLEdBQUcsMkJBQU0sQ0FBQyxDQUFDLENBQUE7YUFDbEIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUzs7Ozs7OztDQU8vQyxDQUFBO0FBRVksUUFBQSxLQUFLLEdBQUcsMkJBQU0sQ0FBQyxDQUFDLENBQUE7YUFDaEIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUzs7Ozs7O0NBTS9DLENBQUE7QUFFWSxRQUFBLEtBQUssR0FBRywyQkFBTSxDQUFDLENBQUMsQ0FBQTthQUNoQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTOzs7Ozs7Q0FNL0MsQ0FBQTtBQUVZLFFBQUEsVUFBVSxHQUFHLDJCQUFNLENBQUMsSUFBSSxDQUFBO2FBQ3hCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVM7Ozs7OztDQU0vQyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const styled_components_1 = __webpack_require__(/*! styled-components */ "../UF-Core.framerfx/node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.H1 = styled_components_1.default.h1 `
    color: ${(props) => props.color || "#212121"};
    font-size: 96px;
    font-weight: 300;
    line-height: 0px;
    letterspacing: -1.5px;
    text-transform: none;
`;
exports.H2 = styled_components_1.default.h2 `
    color: ${(props) => props.color || "#212121"};
    font-size: 38px;
    font-weight: 300;
    line-height: 0px;
    letter-spacing: -0.5px;
    text-transform: none;
`;
exports.H3 = styled_components_1.default.h3 `
    color: ${(props) => props.color || "#212121"};
    font-size: 48px;
    font-weight: 500;
    line-height: 0px;
    letter-spacing: normal;
    text-transform: none;
`;
exports.H4 = styled_components_1.default.h4 `
    color: ${(props) => props.color || "#212121"};
    font-size: 34px;
    font-weight: 500;
    line-height: 0px;
    letter-spacing: 0.25px;
    text-transform: none;
`;
exports.H5 = styled_components_1.default.h5 `
    color: ${(props) => props.color || "#212121"};
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
`;
exports.H6 = styled_components_1.default.h6 `
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.01em;
    text-transform: none;
`;
exports.Caption = styled_components_1.default.p `
    color: ${(props) => props.color || "#212121"};
    margin-top: 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.4px;
    text-transform: none;
`;
exports.Body1 = styled_components_1.default.p `
    color: ${(props) => props.color || "#212121"};
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.44px;
    text-transform: none;
`;
exports.Body2 = styled_components_1.default.p `
    color: ${(props) => props.color || "#212121"};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: none;
`;
exports.ButtonText = styled_components_1.default.span `
    color: ${(props) => props.color || "#212121"};
    font-size: 14px;
    font-weight: 700;
    line-height: 0px;
    letter-spacing: normal;
    text-transform: none;
`;
exports.__info__ = [];


/***/ }),

/***/ "../UF-Core.framerfx/code/Variables.tsx":
/*!**********************************************!*\
  !*** ../UF-Core.framerfx/code/Variables.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9WYXJpYWJsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhLFFBQUEsTUFBTSxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEtBQUssRUFBRSxTQUFTO0NBQ25CLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFOztJQUNoQyxPQUFPLElBQUksR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO0NBQzVCLENBQUM7QUFFRixNQUFNLElBQUksR0FBRyxDQUFDLENBQUM7QUFFRixRQUFBLE9BQU8sR0FBRztJQUNuQixJQUFJLEVBQUUsbUJBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzNCLElBQUksRUFBRSxtQkFBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDM0IsSUFBSSxFQUFFLG1CQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMzQixJQUFJLEVBQUUsbUJBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzNCLElBQUksRUFBRSxtQkFBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDM0IsSUFBSSxFQUFFLG1CQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztDQUM5QixDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUc7SUFDeEIsS0FBSyxFQUFFLEtBQUs7SUFDWixHQUFHLEVBQUUsS0FBSztJQUNWLEVBQUUsRUFBRSxNQUFNO0lBQ1YsTUFBTSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHO0lBQ25CLEVBQUUsRUFDRSx1R0FBdUc7SUFDM0csRUFBRSxFQUNFLCtGQUErRjtDQUN0RyxDQUFDO0FBRVcsUUFBQSxVQUFVLEdBQUcsb0JBQW9CLENBQUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
exports.colors = {
    warning: "#f69a19",
    warningDark: "#c75200",
    success: "#45ba7f",
    successDark: "#31845b",
    danger: "#d52b1e",
    dangerDark: "#aa2218",
    grey200: "#eeeeee",
    grey900: "#212121",
    primary900: "#00384d",
    primary600: "#0081b3",
    grey400: "#bdbdbd",
    grey700: "#616161",
    primary400: "#00a1de",
    white: "#ffffff",
    black: "#000000",
};
exports.converToREM = (size) => {
    window["__checkBudget__"]();
    return size / 16 + "rem";
};
const base = 8;
exports.spacing = {
    "1x": exports.converToREM(1 * base),
    "2x": exports.converToREM(2 * base),
    "3x": exports.converToREM(3 * base),
    "4x": exports.converToREM(4 * base),
    "5x": exports.converToREM(5 * base),
    "6x": exports.converToREM(6 * base),
};
exports.borderRadius = {
    small: "4px",
    med: "8px",
    lg: "16px",
    circle: "50%",
};
exports.shadows = {
    z1: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)",
    z5: "0 3px 5px -1px rgba(0,0,0,0.20), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12)",
};
exports.fontFamily = "Roboto, sans-serif";
exports.__info__ = [];


/***/ }),

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.tsx": "./code/App.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./code/Button.tsx": "../UF-Core.framerfx/code/Button.tsx",
	"./code/Checkbox.tsx": "../UF-Core.framerfx/code/Checkbox.tsx",
	"./code/DateField.tsx": "../UF-Core.framerfx/code/DateField.tsx",
	"./code/Icon.tsx": "../UF-Core.framerfx/code/Icon.tsx",
	"./code/IconList.tsx": "../UF-Core.framerfx/code/IconList.tsx",
	"./code/ListItem.tsx": "../UF-Core.framerfx/code/ListItem.tsx",
	"./code/LoadingAnimation.tsx": "../UF-Core.framerfx/code/LoadingAnimation.tsx",
	"./code/Modal.tsx": "../UF-Core.framerfx/code/Modal.tsx",
	"./code/NavBar.tsx": "../UF-Core.framerfx/code/NavBar.tsx",
	"./code/Radio.tsx": "../UF-Core.framerfx/code/Radio.tsx",
	"./code/StatusBar.tsx": "../UF-Core.framerfx/code/StatusBar.tsx",
	"./code/Switch.tsx": "../UF-Core.framerfx/code/Switch.tsx",
	"./code/TextField.tsx": "../UF-Core.framerfx/code/TextField.tsx",
	"./code/Typography.tsx": "../UF-Core.framerfx/code/Typography.tsx",
	"./code/Variables.tsx": "../UF-Core.framerfx/code/Variables.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVUZfUmVnaXN0cmF0aW9uLmZyYW1lcmZ4L2NvZGUvQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQ0FBNkQ7QUFDN0QsK0JBQThCO0FBQzlCLGdEQUF5QztBQUN6QyxZQUFZO0FBQ1oscUNBQTZEO0FBRzdELE1BQU07QUFDTixNQUFNLElBQUksR0FBRyxhQUFJLENBQUM7SUFDZCxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsVUFBVTtJQUNwQixZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLGVBQWUsRUFBRSxXQUFXO0lBQzVCLGdCQUFnQixFQUFFLEVBQUU7SUFDcEIsZUFBZSxFQUFFLEVBQUU7SUFDbkIsWUFBWSxFQUFFLEVBQUU7SUFDaEIsZUFBZSxFQUFFLEVBQUU7SUFDbkIsaUJBQWlCLEVBQUUsRUFBRTtJQUNyQixVQUFVLEVBQUUsRUFBRTtJQUNkLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLE1BQU0sRUFBRSxDQUFDO0lBQ1QsaUJBQWlCLEVBQUU7UUFDZixXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztLQUNkO0lBQ0QsUUFBUSxFQUFFLENBQUM7Q0FDZCxDQUFDLENBQUE7QUFFRixTQUFTLE9BQU8sQ0FBQyxHQUFHOztJQUNoQixLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUc7UUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFBO0lBRTVDLE9BQU8sSUFBSSxDQUFBO0NBQ2Q7QUFFVSxRQUFBLHlCQUF5QixHQUFHO0lBQ25DLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsS0FBSztJQUNaLElBQUksRUFBRSxLQUFLO0lBQ1gsUUFBUSxFQUFFLEtBQUs7SUFDZixjQUFjLEVBQUUsS0FBSztDQUN4QixDQUFBO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLEtBQUs7O0lBQy9CLE9BQU87UUFDSCxhQUFhLENBQUMsWUFBWTs7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQTtZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtTQUMvQjtRQUNELFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1FBQ25DLEtBQUssRUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUN0RCxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxLQUFLO0tBQ2xCLENBQUE7Q0FDSjtBQVpELHNDQVlDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLEtBQUs7O0lBQzlCLE9BQU87UUFDSCxhQUFhLENBQUMsWUFBWTs7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUE7WUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUE7U0FDL0I7UUFDRCxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWU7UUFDbEMsS0FBSyxFQUNELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUNyRCxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxLQUFLO0tBQ2xCLENBQUE7Q0FDSjtBQVpELG9DQVlDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEtBQUs7O0lBQ3pCLE9BQU87UUFDSCxhQUFhLENBQUMsWUFBWTs7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUE7WUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUE7U0FDL0I7UUFDRCxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVU7UUFDN0IsS0FBSyxFQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7S0FDMUUsQ0FBQTtDQUNKO0FBVkQsMEJBVUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxLQUFLOztJQUNsQyxPQUFPO1FBQ0gsYUFBYSxDQUFDLFlBQVk7O1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFBO1lBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFBO1NBQy9CO1FBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1FBQy9CLEtBQUssRUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDbEQsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsS0FBSztLQUNsQixDQUFBO0NBQ0o7QUFaRCw0Q0FZQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxLQUFLOztJQUNqQyxPQUFPO1FBQ0gsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO0tBQ2xDLENBQUE7Q0FDSjtBQUpELDBDQUlDO0FBRUQsU0FBZ0IsU0FBUzs7SUFDckIsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hDLEtBQUs7O1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtTQUNqQztLQUNKLENBQUE7Q0FDSjtBQVBELDhCQU9DO0FBRUQsU0FBZ0IsTUFBTTs7SUFDbEIsTUFBTSxVQUFVLEdBQUcsc0JBQWEsRUFBRSxDQUFBO0lBQ2xDLE1BQU0sV0FBVyxHQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQy9CLE9BQU87UUFDSCxVQUFVLEVBQUUsV0FBVztRQUN2QixLQUFLOztZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2QsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBQyxvQkFBVyxPQUFHLENBQUMsQ0FBQTthQUNuQztTQUNKO0tBQ0osQ0FBQTtDQUNKO0FBaEJELHdCQWdCQztBQUVELFNBQWdCLFlBQVksQ0FBQyxLQUFLOztJQUM5QixPQUFPO1FBQ0gsYUFBYSxDQUFDLEtBQUs7O1lBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUE7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7WUFDcEQsaUNBQXlCLENBQUMsU0FBUztnQkFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFBO1lBQ3JDLGlDQUF5QixDQUFDLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ25ELEtBQUssQ0FBQyxDQUFDLENBQUE7WUFDWixpQ0FBeUIsQ0FBQyxLQUFLO2dCQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FDbEMsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUNaLGlDQUF5QixDQUFDLEtBQUs7Z0JBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzFELENBQUMsQ0FBQyxDQUFBO1lBQ04saUNBQXlCLENBQUMsSUFBSTtnQkFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1lBQ3BFLGlDQUF5QixDQUFDLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ2xFO1FBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhO0tBQzVCLENBQUE7Q0FDSjtBQXpCRCxvQ0F5QkM7QUFFRCxTQUFnQixxQkFBcUIsQ0FBQyxLQUFLOztJQUN2QyxPQUFPO1FBQ0gsYUFBYSxDQUFDLEtBQUs7O1lBQ2YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQTtZQUM5QixpQ0FBeUIsQ0FBQyxjQUFjO2dCQUNwQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQTtTQUN0RDtLQUNKLENBQUE7Q0FDSjtBQVJELHNEQVFDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsS0FBSzs7SUFDdEMsT0FBTztRQUNILFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7O1lBQ25ELElBQ0ksaUNBQXlCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxFQUM1QjtnQkFDRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBWSxFQUFFO29CQUNwQyxVQUFVLEVBQUUsa0JBQU0sQ0FBQyxPQUFPO2lCQUM3QixDQUFDLENBQUE7YUFDTDtpQkFBTSxJQUNILENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxFQUM1QjtnQkFDRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBWSxFQUFFO29CQUNwQyxVQUFVLEVBQUUsa0JBQU0sQ0FBQyxNQUFNO2lCQUM1QixDQUFDLENBQUE7YUFDTDtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssRUFBRSxFQUFFO2dCQUNwQyxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBWSxFQUFFO29CQUNwQyxVQUFVLEVBQUUsa0JBQU0sQ0FBQyxPQUFPO2lCQUM3QixDQUFDLENBQUE7YUFDTDtTQUNKLENBQUM7S0FDTCxDQUFBO0NBQ0o7QUF4QkQsb0RBd0JDO0FBRUQsU0FBZ0IsY0FBYyxDQUFDLEtBQUs7O0lBQ2hDLE9BQU87UUFDSCxVQUFVLEVBQ04sSUFBSSxDQUFDLGVBQWUsS0FBSyxFQUFFO1lBQ3ZCLENBQUMsQ0FBQyxrQkFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLGlCQUFpQjtnQkFDakQsQ0FBQyxDQUFDLGtCQUFNLENBQUMsT0FBTztnQkFDaEIsQ0FBQyxDQUFDLGtCQUFNLENBQUMsTUFBTTtLQUMxQixDQUFBO0NBQ0o7QUFURCx3Q0FTQztBQUVELFNBQWdCLGFBQWE7O0lBQ3pCLE9BQU87UUFDSCxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUM7S0FDbEQsQ0FBQTtDQUNKO0FBSkQsc0NBSUM7QUFFRCxTQUFnQixtQkFBbUI7O0lBQy9CLE9BQU87UUFDSCxPQUFPLEVBQUU7WUFDTCxLQUFLLEVBQUUsQ0FBQztTQUNYO0tBQ0osQ0FBQTtDQUNKO0FBTkQsa0RBTUM7QUFFRCxTQUFnQixrQkFBa0I7O0lBQzlCLE1BQU0sVUFBVSxHQUFHLHNCQUFhLEVBQUUsQ0FBQTtJQUNsQyxPQUFPO1FBQ0gsS0FBSzs7WUFDRCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsb0JBQUMsY0FBSyxPQUFHLEVBQUU7Z0JBQ25DLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQ2xELElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUM3QixLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQzdCLFNBQVMsRUFBRTtvQkFDUCxRQUFRLEVBQUUsR0FBRztpQkFDaEI7YUFDSixDQUFDLENBQUE7U0FDTDtLQUNKLENBQUE7Q0FDSjtBQWRELGdEQWNDO0FBRUQsU0FBZ0IsbUJBQW1COztJQUMvQixNQUFNLFVBQVUsR0FBRyxzQkFBYSxFQUFFLENBQUE7SUFDbEMsT0FBTztRQUNILEtBQUs7O1lBQ0QsVUFBVSxDQUFDLGdCQUFnQixDQUFDLG9CQUFDLHVCQUFjLE9BQUcsRUFBRTtnQkFDNUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtnQkFDbEQsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQzlCLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDNUIsU0FBUyxFQUFFO29CQUNQLFFBQVEsRUFBRSxHQUFHO2lCQUNoQjthQUNKLENBQUMsQ0FBQTtTQUNMO0tBQ0osQ0FBQTtDQUNKO0FBZEQsa0RBY0MifQ==

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const framer_1 = __webpack_require__(/*! framer */ "framer");
const React = __webpack_require__(/*! react */ "react");
const Variables_1 = __webpack_require__(/*! ./code/Variables */ "../UF-Core.framerfx/code/Variables.tsx");
//@ts-ignore
const canvas_1 = __webpack_require__(/*! ./canvas */ "./code/canvas.tsx");
// [1]
const data = framer_1.Data({
    firstName: "John",
    lastName: "Question",
    accountEmail: "JohnQ@gmail.com",
    accountPassword: "Password1",
    enteredFirstName: "",
    enteredLastName: "",
    enteredEmail: "",
    enteredPassword: "",
    reenteredPassword: "",
    enteredDOB: "",
    emptyFirstName: false,
    emptyLastName: false,
    emptyPassword: false,
    emptyEmail: false,
    rememberMe: "false",
    signInAttempted: false,
    rotate: 0,
    lastFivePasswords: [
        "Password3",
        "Password2",
        "Password1",
        "Password4",
        "Password6",
    ],
    attempts: 0,
});
function allTrue(obj) {
    window["__checkBudget__"]();
    for (var o in obj)
        if (!obj[o])
            return false;
    return true;
}
exports.meetsPasswordRequirements = {
    character: false,
    username: false,
    email: false,
    first: false,
    last: false,
    lastFive: false,
    passwordsMatch: false,
};
function saveFirstName(props) {
    window["__checkBudget__"]();
    return {
        onValueChange(defaultValue) {
            window["__checkBudget__"]();
            data.enteredFirstName = defaultValue;
            data.signInAttempted = false;
        },
        defaultValue: data.enteredFirstName,
        empty: data.enteredFirstName.length === 0 && data.signInAttempted
            ? true
            : false,
    };
}
exports.saveFirstName = saveFirstName;
function saveLastName(props) {
    window["__checkBudget__"]();
    return {
        onValueChange(defaultValue) {
            window["__checkBudget__"]();
            data.enteredLastName = defaultValue;
            data.signInAttempted = false;
        },
        defaultValue: data.enteredLastName,
        empty: data.enteredLastName.length === 0 && data.signInAttempted
            ? true
            : false,
    };
}
exports.saveLastName = saveLastName;
function saveDOB(props) {
    window["__checkBudget__"]();
    return {
        onValueChange(defaultValue) {
            window["__checkBudget__"]();
            data.enteredDOB = defaultValue;
            data.signInAttempted = false;
        },
        defaultValue: data.enteredDOB,
        empty: data.enteredDOB.length === 0 && data.signInAttempted ? true : false,
    };
}
exports.saveDOB = saveDOB;
function saveEmailAddress(props) {
    window["__checkBudget__"]();
    return {
        onValueChange(defaultValue) {
            window["__checkBudget__"]();
            data.enteredEmail = defaultValue;
            data.signInAttempted = false;
        },
        defaultValue: data.enteredEmail,
        empty: data.enteredEmail.length === 0 && data.signInAttempted
            ? true
            : false,
    };
}
exports.saveEmailAddress = saveEmailAddress;
function setEmailAddress(props) {
    window["__checkBudget__"]();
    return {
        defaultValue: data.enteredEmail,
    };
}
exports.setEmailAddress = setEmailAddress;
function funSignIn() {
    window["__checkBudget__"]();
    return {
        animate: { rotate: data.rotate },
        onTap() {
            window["__checkBudget__"]();
            data.rotate = data.rotate + 90;
        },
    };
}
exports.funSignIn = funSignIn;
function signIn() {
    window["__checkBudget__"]();
    const navigation = framer_1.useNavigation();
    const disabledVal = !(data.enteredFirstName.length > 0 &&
        data.enteredLastName.length > 0 &&
        data.enteredEmail.length > 0 &&
        data.enteredDOB.length > 0);
    return {
        isDisabled: disabledVal,
        onTap() {
            window["__checkBudget__"]();
            data.signInAttempted = true;
            if (!disabledVal) {
                navigation.push(React.createElement(canvas_1.SetPassword, null));
            }
        },
    };
}
exports.signIn = signIn;
function savePassword(props) {
    window["__checkBudget__"]();
    return {
        onValueChange(value) {
            window["__checkBudget__"]();
            data.enteredPassword = value;
            data.emptyPassword = data.enteredPassword.length < 0;
            exports.meetsPasswordRequirements.character =
                data.enteredPassword.length >= 10;
            exports.meetsPasswordRequirements.username =
                data.enteredPassword.indexOf(data.accountEmail.toLowerCase().split("@", 1)[0]) === -1;
            exports.meetsPasswordRequirements.email =
                data.enteredPassword.indexOf(data.accountEmail.toLowerCase()) === -1;
            exports.meetsPasswordRequirements.first =
                data.enteredPassword.indexOf(data.firstName.toLowerCase()) ===
                    -1;
            exports.meetsPasswordRequirements.last =
                data.enteredPassword.indexOf(data.lastName.toLowerCase()) === -1;
            exports.meetsPasswordRequirements.lastFive =
                data.lastFivePasswords.indexOf(data.enteredPassword) === -1;
        },
        empty: data.emptyPassword,
    };
}
exports.savePassword = savePassword;
function saveReenteredPassword(props) {
    window["__checkBudget__"]();
    return {
        onValueChange(value) {
            window["__checkBudget__"]();
            data.reenteredPassword = value;
            exports.meetsPasswordRequirements.passwordsMatch =
                data.reenteredPassword === data.enteredPassword;
        },
    };
}
exports.saveReenteredPassword = saveReenteredPassword;
function PasswordRequirements(props) {
    window["__checkBudget__"]();
    return {
        children: React.Children.map(props.children, (child) => {
            window["__checkBudget__"]();
            if (exports.meetsPasswordRequirements[child.props.name] &&
                data.enteredPassword != "") {
                return React.cloneElement(child, {
                    background: Variables_1.colors.success,
                });
            }
            else if (!exports.meetsPasswordRequirements[child.props.name] &&
                data.enteredPassword != "") {
                return React.cloneElement(child, {
                    background: Variables_1.colors.danger,
                });
            }
            else if (data.enteredPassword === "") {
                return React.cloneElement(child, {
                    background: Variables_1.colors.grey400,
                });
            }
        }),
    };
}
exports.PasswordRequirements = PasswordRequirements;
function PasswordsMatch(props) {
    window["__checkBudget__"]();
    return {
        background: data.enteredPassword === ""
            ? Variables_1.colors.grey400
            : data.enteredPassword === data.reenteredPassword
                ? Variables_1.colors.success
                : Variables_1.colors.danger,
    };
}
exports.PasswordsMatch = PasswordsMatch;
function ResetPassword() {
    window["__checkBudget__"]();
    return {
        isDisabled: !allTrue(exports.meetsPasswordRequirements),
    };
}
exports.ResetPassword = ResetPassword;
function EmailClientOverride() {
    window["__checkBudget__"]();
    return {
        animate: {
            scale: 1,
        },
    };
}
exports.EmailClientOverride = EmailClientOverride;
function OutofAppTransition() {
    window["__checkBudget__"]();
    const navigation = framer_1.useNavigation();
    return {
        onTap() {
            window["__checkBudget__"]();
            navigation.customTransition(React.createElement(canvas_1.Phone, null), {
                position: { top: 0, right: 0, bottom: 0, left: 0 },
                exit: { x: -375, scale: 0.5 },
                enter: { x: 375, scale: 0.5 },
                animation: {
                    duration: 0.4,
                },
            });
        },
    };
}
exports.OutofAppTransition = OutofAppTransition;
function BackToAppTransition() {
    window["__checkBudget__"]();
    const navigation = framer_1.useNavigation();
    return {
        onTap() {
            window["__checkBudget__"]();
            navigation.customTransition(React.createElement(canvas_1.Email_Verified, null), {
                position: { top: 0, right: 0, bottom: 0, left: 0 },
                enter: { x: -375, scale: 0.5 },
                exit: { x: 375, scale: 0.5 },
                animation: {
                    duration: 0.4,
                },
            });
        },
    };
}
exports.BackToAppTransition = BackToAppTransition;
exports.__info__ = [{ "name": "saveFirstName", "type": "override" }, { "name": "saveLastName", "type": "override" }, { "name": "saveDOB", "type": "override" }, { "name": "saveEmailAddress", "type": "override" }, { "name": "setEmailAddress", "type": "override" }, { "name": "funSignIn", "type": "override" }, { "name": "signIn", "type": "override" }, { "name": "savePassword", "type": "override" }, { "name": "saveReenteredPassword", "type": "override" }, { "name": "PasswordRequirements", "type": "override" }, { "name": "PasswordsMatch", "type": "override" }, { "name": "ResetPassword", "type": "override" }, { "name": "EmailClientOverride", "type": "override" }, { "name": "OutofAppTransition", "type": "override" }, { "name": "BackToAppTransition", "type": "override" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[{"componentClass":"Frame","props":{"key":"s85MmptS4","id":"id_s85MmptS4","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true,"intrinsicWidth":375,"intrinsicHeight":667},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","background":"var(--token-62d02b63-8da8-4fde-8c93-567876742301, rgb(250, 250, 250)) /* {\"name\":\"offwhite\"} */"},"background":"var(--token-62d02b63-8da8-4fde-8c93-567876742301, rgb(250, 250, 250)) /* {\"name\":\"offwhite\"} */","_overrideForwardingDescription":{"id_EHKgdJHv6":"stack","id_kPSobDXzM":"requirements","id_GCIvPRftT":"requirement","id_FedUqRbIi":"character","id_mKTlfgFGb":"requirement","id_urqdrQUkf":"username","id_SS46QTE6y":"requirement","id_SGqGX1Aju":"email","id_FKoQGLMjC":"requirement","id_iYky8KN44":"first","id_ikMuu5ceE":"requirement","id_h6tzmYUwp":"last","id_eQdWpvrIT":"requirement","id_VGKKD99av":"lastFive","id_pcLIRXvq1":"requirement","id_fqkegzWns":"passwordsMatch","id_Wz1WqDjsc":"Sign_in_to_your_acco"},"name":"SetPassword"},"children":[{"componentClass":"Stack","props":{"key":"B1f0h0PbQ","id":"id_B1f0h0PbQ","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":367,"left":24,"right":24,"top":152,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"direction":"vertical","distribution":"start","alignment":"center","gap":8,"padding":0,"paddingPerSide":true,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0},"children":[{"componentClass":"ComponentContainer","props":{"key":"R3r4ubyki","id":"id_R3r4ubyki","duplicatedFrom":["id_ojODv00Uj","id_wMq_HJCZ1"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":70,"componentIdentifier":"./code/TextField.tsx_TextField","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/TextField.tsx_TextField","props":{"width":327,"height":70,"defaultValue":"","currentValue":"","type":"password","label":"New Password*","assistMessage":"","errorMessage":"","enabled":true,"focused":false,"hasError":false,"empty":false,"color":"#00384d","placeholders":null,"id":"R3r4ubyki./code/TextField.tsx_TextField","key":"R3r4ubyki./code/TextField.tsx_TextField"},"children":[],"name":null}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"wMq_HJCZ1","id":"id_wMq_HJCZ1","duplicatedFrom":["id_ojODv00Uj"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":70,"componentIdentifier":"./code/TextField.tsx_TextField","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/TextField.tsx_TextField","props":{"width":327,"height":70,"defaultValue":"","currentValue":"","type":"password","label":"Repeat Password*","assistMessage":"","errorMessage":"","enabled":true,"focused":false,"hasError":false,"empty":false,"color":"#00384d","placeholders":null,"id":"wMq_HJCZ1./code/TextField.tsx_TextField","key":"wMq_HJCZ1./code/TextField.tsx_TextField"},"children":[],"name":null}],"name":null},{"componentClass":"Stack","props":{"key":"EHKgdJHv6","id":"id_EHKgdJHv6","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":176,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"rgba(255,255,255,1)","borderRadius":"4px","opacity":0,"boxShadow":"0px 2px 5px 0px rgba(0,0,0,0.25)"},"background":{"r":255,"g":255,"b":255,"a":1,"h":0,"s":0,"l":1,"initialValue":"rgba(255,255,255,1)","roundA":1,"format":"rgb"},"name":"stack","direction":"horizontal","distribution":"start","alignment":"center","gap":0,"padding":16,"paddingPerSide":false,"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"_index":2},"children":[{"componentClass":"Stack","props":{"key":"kPSobDXzM","id":"id_kPSobDXzM","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":291,"height":144,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"requirements","direction":"vertical","distribution":"space-between","alignment":"start","gap":8,"padding":0,"paddingPerSide":false,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"_index":0},"children":[{"componentClass":"Stack","props":{"key":"GCIvPRftT","id":"id_GCIvPRftT","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":14,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"requirement","direction":"horizontal","distribution":"start","alignment":"center","gap":8,"padding":0,"paddingPerSide":false,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"_index":0},"children":[{"componentClass":"Frame","props":{"key":"FedUqRbIi","id":"id_FedUqRbIi","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":10,"height":10,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"rgba(204, 204, 204, 1.00)","borderRadius":"100%"},"background":{"r":204,"g":204,"b":204,"a":1,"h":0,"s":0,"l":0.8,"initialValue":"rgba(204, 204, 204, 1.00)","roundA":1,"format":"rgb"},"name":"character","_index":0,"forceRender":2},"children":[],"name":"character"},{"componentClass":"Text","props":{"key":"R3ITqqy_T","id":"id_R3ITqqy_T","willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":124,"height":14,"rawHTML":"<div data-offset-key=\"9n2me-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"9n2me-0-0\" style=\"tab-size:4;font-family:&quot;Inter&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:12px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">at least 10 characters</span></span></div>","fonts":["Inter"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","_index":1,"isEditable":false,"forceRender":2},"name":null}],"name":"requirement"},{"componentClass":"Stack","props":{"key":"mKTlfgFGb","id":"id_mKTlfgFGb","duplicatedFrom":["id_GCIvPRftT"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":14,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"requirement","direction":"horizontal","distribution":"start","alignment":"center","gap":8,"padding":0,"paddingPerSide":false,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"_index":1},"children":[{"componentClass":"Frame","props":{"key":"urqdrQUkf","id":"id_urqdrQUkf","duplicatedFrom":["id_FedUqRbIi"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":10,"height":10,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 80%)","borderRadius":"100%"},"background":{"r":204,"g":204,"b":204,"a":1,"h":0,"s":0,"l":0.8,"initialValue":"hsl(0, 0%, 80%)","roundA":1,"format":"hsl"},"name":"username","_index":0,"forceRender":2},"children":[],"name":"username"},{"componentClass":"Text","props":{"key":"BcYQyxEQx","id":"id_BcYQyxEQx","duplicatedFrom":["id_R3ITqqy_T"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":156,"height":14,"rawHTML":"<div data-offset-key=\"9n2me-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"9n2me-0-0\" style=\"tab-size:4;font-family:&quot;Inter&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:12px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Does not inlcude username</span></span></div>","fonts":["Inter"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","_index":1,"isEditable":false,"forceRender":2},"name":null}],"name":"requirement"},{"componentClass":"Stack","props":{"key":"SS46QTE6y","id":"id_SS46QTE6y","duplicatedFrom":["id_GCIvPRftT","id_mKTlfgFGb"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":14,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"requirement","direction":"horizontal","distribution":"start","alignment":"center","gap":8,"padding":0,"paddingPerSide":false,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"_index":2},"children":[{"componentClass":"Frame","props":{"key":"SGqGX1Aju","id":"id_SGqGX1Aju","duplicatedFrom":["id_FedUqRbIi","id_urqdrQUkf"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":10,"height":10,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 80%)","borderRadius":"100%"},"background":{"r":204,"g":204,"b":204,"a":1,"h":0,"s":0,"l":0.8,"initialValue":"hsl(0, 0%, 80%)","roundA":1,"format":"hsl"},"name":"email","_index":0,"forceRender":2},"children":[],"name":"email"},{"componentClass":"Text","props":{"key":"Qs77XqWHK","id":"id_Qs77XqWHK","duplicatedFrom":["id_R3ITqqy_T","id_BcYQyxEQx"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":130,"height":14,"rawHTML":"<div data-offset-key=\"9n2me-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"9n2me-0-0\" style=\"tab-size:4;font-family:&quot;Inter&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:12px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Does not include email</span></span></div>","fonts":["Inter"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","_index":1,"isEditable":false,"forceRender":2},"name":null}],"name":"requirement"},{"componentClass":"Stack","props":{"key":"FKoQGLMjC","id":"id_FKoQGLMjC","duplicatedFrom":["id_GCIvPRftT","id_mKTlfgFGb","id_SS46QTE6y"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":14,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"requirement","direction":"horizontal","distribution":"start","alignment":"center","gap":8,"padding":0,"paddingPerSide":false,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"_index":3},"children":[{"componentClass":"Frame","props":{"key":"iYky8KN44","id":"id_iYky8KN44","duplicatedFrom":["id_FedUqRbIi","id_urqdrQUkf","id_SGqGX1Aju"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":10,"height":10,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 80%)","borderRadius":"100%"},"background":{"r":204,"g":204,"b":204,"a":1,"h":0,"s":0,"l":0.8,"initialValue":"hsl(0, 0%, 80%)","roundA":1,"format":"hsl"},"name":"first","_index":0,"forceRender":2},"children":[],"name":"first"},{"componentClass":"Text","props":{"key":"j4zes4CGF","id":"id_j4zes4CGF","duplicatedFrom":["id_R3ITqqy_T","id_BcYQyxEQx","id_Qs77XqWHK"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":157,"height":14,"rawHTML":"<div data-offset-key=\"9n2me-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"9n2me-0-0\" style=\"tab-size:4;font-family:&quot;Inter&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:12px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Does not include first name</span></span></div>","fonts":["Inter"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","_index":1,"isEditable":false,"forceRender":2},"name":null}],"name":"requirement"},{"componentClass":"Stack","props":{"key":"ikMuu5ceE","id":"id_ikMuu5ceE","duplicatedFrom":["id_GCIvPRftT","id_mKTlfgFGb","id_SS46QTE6y","id_FKoQGLMjC"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":14,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"requirement","direction":"horizontal","distribution":"start","alignment":"center","gap":8,"padding":0,"paddingPerSide":false,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"_index":4},"children":[{"componentClass":"Frame","props":{"key":"h6tzmYUwp","id":"id_h6tzmYUwp","duplicatedFrom":["id_FedUqRbIi","id_urqdrQUkf","id_SGqGX1Aju","id_iYky8KN44"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":10,"height":10,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 80%)","borderRadius":"100%"},"background":{"r":204,"g":204,"b":204,"a":1,"h":0,"s":0,"l":0.8,"initialValue":"hsl(0, 0%, 80%)","roundA":1,"format":"hsl"},"name":"last","_index":0,"forceRender":2},"children":[],"name":"last"},{"componentClass":"Text","props":{"key":"lyvI4INcu","id":"id_lyvI4INcu","duplicatedFrom":["id_R3ITqqy_T","id_BcYQyxEQx","id_Qs77XqWHK","id_j4zes4CGF"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":155,"height":14,"rawHTML":"<div data-offset-key=\"9n2me-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"9n2me-0-0\" style=\"tab-size:4;font-family:&quot;Inter&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:12px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Does not include last name</span></span></div>","fonts":["Inter"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","_index":1,"isEditable":false,"forceRender":2},"name":null}],"name":"requirement"},{"componentClass":"Stack","props":{"key":"eQdWpvrIT","id":"id_eQdWpvrIT","duplicatedFrom":["id_GCIvPRftT","id_mKTlfgFGb","id_SS46QTE6y","id_FKoQGLMjC","id_ikMuu5ceE"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":14,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"requirement","direction":"horizontal","distribution":"start","alignment":"center","gap":8,"padding":0,"paddingPerSide":false,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"_index":5},"children":[{"componentClass":"Frame","props":{"key":"VGKKD99av","id":"id_VGKKD99av","duplicatedFrom":["id_FedUqRbIi","id_urqdrQUkf","id_SGqGX1Aju","id_iYky8KN44","id_h6tzmYUwp"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":10,"height":10,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 80%)","borderRadius":"100%"},"background":{"r":204,"g":204,"b":204,"a":1,"h":0,"s":0,"l":0.8,"initialValue":"hsl(0, 0%, 80%)","roundA":1,"format":"hsl"},"name":"lastFive","_index":0,"forceRender":2},"children":[],"name":"lastFive"},{"componentClass":"Text","props":{"key":"Pfk5BD76u","id":"id_Pfk5BD76u","duplicatedFrom":["id_R3ITqqy_T","id_BcYQyxEQx","id_Qs77XqWHK","id_j4zes4CGF","id_lyvI4INcu"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":226,"height":14,"rawHTML":"<div data-offset-key=\"9n2me-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"9n2me-0-0\" style=\"tab-size:4;font-family:&quot;Inter&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:12px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Cannot be any of your last 5 passwords</span></span></div>","fonts":["Inter"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","_index":1,"isEditable":false,"forceRender":2},"name":null}],"name":"requirement"},{"componentClass":"Stack","props":{"key":"pcLIRXvq1","id":"id_pcLIRXvq1","duplicatedFrom":["id_GCIvPRftT","id_mKTlfgFGb","id_SS46QTE6y","id_FKoQGLMjC","id_ikMuu5ceE","id_eQdWpvrIT"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":"1fr","height":14,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"requirement","direction":"horizontal","distribution":"start","alignment":"center","gap":8,"padding":0,"paddingPerSide":false,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"_index":6},"children":[{"componentClass":"Frame","props":{"key":"fqkegzWns","id":"id_fqkegzWns","duplicatedFrom":["id_FedUqRbIi","id_urqdrQUkf","id_SGqGX1Aju","id_iYky8KN44","id_h6tzmYUwp","id_VGKKD99av"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":10,"height":10,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"hsl(0, 0%, 80%)","borderRadius":"100%"},"background":{"r":204,"g":204,"b":204,"a":1,"h":0,"s":0,"l":0.8,"initialValue":"hsl(0, 0%, 80%)","roundA":1,"format":"hsl"},"name":"passwordsMatch","_index":0,"forceRender":2},"children":[],"name":"passwordsMatch"},{"componentClass":"Text","props":{"key":"OeYYyseUD","id":"id_OeYYyseUD","duplicatedFrom":["id_R3ITqqy_T","id_BcYQyxEQx","id_Qs77XqWHK","id_j4zes4CGF","id_lyvI4INcu","id_Pfk5BD76u"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":102,"height":14,"rawHTML":"<div data-offset-key=\"9n2me-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"9n2me-0-0\" style=\"tab-size:4;font-family:&quot;Inter&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:12px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Passwords Match</span></span></div>","fonts":["Inter"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","_index":1,"isEditable":false,"forceRender":2},"name":null}],"name":"requirement"}],"name":"requirements"}],"name":"stack"}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"U_xoyLEYS","id":"id_U_xoyLEYS","duplicatedFrom":["id_YQ_6s5la8"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":40,"left":24,"right":24,"bottom":24,"componentIdentifier":"./code/Button.tsx_Button","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Button.tsx_Button","props":{"width":327,"height":40,"text":"Continue","buttonStyle":"primary","isDisabled":true,"hasIcon":false,"iconName":"check","fill":"#09F","placeholders":null,"id":"U_xoyLEYS./code/Button.tsx_Button","key":"U_xoyLEYS./code/Button.tsx_Button"},"children":[],"name":null}],"name":null},{"componentClass":"Text","props":{"key":"Wz1WqDjsc","id":"id_Wz1WqDjsc","duplicatedFrom":["id_r5Kcw7v9j"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":199,"height":28,"left":24,"top":76,"rawHTML":"<div data-offset-key=\"key-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"key-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Regular&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:rgba(0,0,0,1);font-size:24px;letter-spacing:0px;line-height:1.2;font-weight:400\"><span data-text=\"true\">Set your password</span></span></div>","fonts":["Roboto-Regular"],"opacity":0.87,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","name":"Sign in to your acco","isEditable":false,"forceRender":2},"name":"Sign_in_to_your_acco"},{"componentClass":"ComponentContainer","props":{"key":"EsP6d4j1g","id":"id_EsP6d4j1g","duplicatedFrom":["id_X3Vfc5T_Q","id_bv9YnUfDe"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":20,"left":0,"right":0,"top":8,"componentIdentifier":"@framer/framer.examples/./StatusBar.tsx_StatusBar","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"@framer/framer.examples/./StatusBar.tsx_StatusBar","props":{"placeholders":null,"id":"EsP6d4j1g@framer/framer.examples/./StatusBar.tsx_StatusBar","key":"EsP6d4j1g@framer/framer.examples/./StatusBar.tsx_StatusBar"},"children":[],"name":null}],"name":null}],"name":"SetPassword"},{"componentClass":"Frame","props":{"key":"DX6XoFzBE","id":"id_DX6XoFzBE","duplicatedFrom":["id_b9kosnp76"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true,"intrinsicWidth":375,"intrinsicHeight":667},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"rgba(255,255,255,1)"},"background":{"r":255,"g":255,"b":255,"a":1,"h":0,"s":0,"l":1,"initialValue":"rgba(255,255,255,1)","roundA":1,"format":"rgb"},"_overrideForwardingDescription":{"id_HSxsnOS5q":"Successful_Reset","id_Ifr8wz64J":"Reset_your_password","id_Vp8DfiXug":"Reset_your_password","id_j1qhn8kid":"Reset_your_password"},"name":"Phone"},"children":[{"componentClass":"Frame","props":{"key":"HSxsnOS5q","id":"id_HSxsnOS5q","duplicatedFrom":["id_L3To7Ntk7"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":375,"height":667,"left":0,"top":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"rgba(250, 250, 250, 1.00)"},"background":{"r":250,"g":250,"b":250,"a":1,"h":0,"s":0,"l":0.9803921568627451,"initialValue":"rgba(250, 250, 250, 1.00)","roundA":1,"format":"rgb"},"name":"Successful Reset","forceRender":2},"children":[{"componentClass":"Frame","props":{"key":"RfO6ft05N","id":"id_RfO6ft05N","duplicatedFrom":["id_gycAJa1ds"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":201,"left":0,"right":0,"top":0,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"rgb(255, 255, 255)"},"background":{"r":255,"g":255,"b":255,"a":1,"h":0,"s":0,"l":1,"initialValue":"rgb(255, 255, 255)","roundA":1,"format":"rgb"},"forceRender":2},"children":[{"componentClass":"ComponentContainer","props":{"key":"b4ai6MbCn","id":"id_b4ai6MbCn","duplicatedFrom":["id_T9hga7QaF","id_F8QNEC6ro","id_zeoLjLPgQ","id_M4FJMYLav"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":24,"height":24,"right":16,"top":57,"componentIdentifier":"./code/Icon.tsx_Icon","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Icon.tsx_Icon","props":{"width":24,"height":24,"iconName":"more-vertical","fill":"#212121","placeholders":null,"id":"b4ai6MbCn./code/Icon.tsx_Icon","key":"b4ai6MbCn./code/Icon.tsx_Icon"},"children":[],"name":null}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"loPPMiJF7","id":"id_loPPMiJF7","duplicatedFrom":["id_T9hga7QaF","id_F8QNEC6ro","id_zeoLjLPgQ","id_M4FJMYLav","id_RDa7RordA"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":24,"height":24,"right":56,"top":57,"componentIdentifier":"./code/Icon.tsx_Icon","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Icon.tsx_Icon","props":{"width":24,"height":24,"iconName":"blank","fill":"#212121","placeholders":null,"id":"loPPMiJF7./code/Icon.tsx_Icon","key":"loPPMiJF7./code/Icon.tsx_Icon"},"children":[],"name":null}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"E7OvcfGHy","id":"id_E7OvcfGHy","duplicatedFrom":["id_T9hga7QaF","id_F8QNEC6ro","id_zeoLjLPgQ","id_M4FJMYLav","id_RDa7RordA","id_wOTbV2dWw"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":24,"height":24,"right":96,"top":57,"componentIdentifier":"./code/Icon.tsx_Icon","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Icon.tsx_Icon","props":{"width":24,"height":24,"iconName":"blank","fill":"#212121","placeholders":null,"id":"E7OvcfGHy./code/Icon.tsx_Icon","key":"E7OvcfGHy./code/Icon.tsx_Icon"},"children":[],"name":null}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"RGRMiWiZJ","id":"id_RGRMiWiZJ","duplicatedFrom":["id_T9hga7QaF","id_F8QNEC6ro","id_zeoLjLPgQ"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":24,"height":24,"left":16,"top":57,"componentIdentifier":"./code/Icon.tsx_Icon","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Icon.tsx_Icon","props":{"width":24,"height":24,"iconName":"caret-left","fill":"#212121","placeholders":null,"id":"RGRMiWiZJ./code/Icon.tsx_Icon","key":"RGRMiWiZJ./code/Icon.tsx_Icon"},"children":[],"name":null}],"name":null},{"componentClass":"Text","props":{"key":"RJEW6kzeC","id":"id_RJEW6kzeC","duplicatedFrom":["id_SRDbvq66G"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":235,"height":24,"left":20,"top":97,"rawHTML":"<div class='DraftEditor-alignLeft'><div data-offset-key=\"362gu-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"362gu-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Medium&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:rgb(33, 33, 33);font-size:20px;letter-spacing:NaNpx;line-height:1.2;font-weight:500\"><span data-text=\"true\">LillyApp Email Verification</span></span></div></div>","alignment":"left","fonts":["Roboto-Medium"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","isEditable":false,"forceRender":2},"name":null},{"componentClass":"Frame","props":{"key":"iUpAf9JRq","id":"id_iUpAf9JRq","duplicatedFrom":["id_B4RMvJIAr"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":109,"height":34,"left":72,"top":148,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"forceRender":2},"children":[{"componentClass":"Text","props":{"key":"b4AcW8D7J","id":"id_b4AcW8D7J","duplicatedFrom":["id_dd8NZXETR"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":52,"height":16,"left":0,"top":0,"rawHTML":"<div data-offset-key=\"3655f-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"3655f-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Bold&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:#212121;font-size:14px;letter-spacing:NaNpx;line-height:1.2;font-weight:700\"><span data-text=\"true\">LillyApp</span></span></div>","fonts":["Roboto-Bold"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","isEditable":false,"forceRender":2},"name":null},{"componentClass":"Text","props":{"key":"ogPH1Jsao","id":"id_ogPH1Jsao","duplicatedFrom":["id_dd8NZXETR","id_yDSlOdPWj"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":32,"height":14,"left":0,"bottom":0,"rawHTML":"<div data-offset-key=\"3655f-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"3655f-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Regular&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:rgba(33, 33, 33, 0.48);font-size:12px;letter-spacing:NaNpx;line-height:1.2;font-weight:400\"><span data-text=\"true\">to me</span></span></div>","fonts":["Roboto-Regular"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","isEditable":false,"forceRender":2},"name":null},{"componentClass":"Text","props":{"key":"SzvaHCviR","id":"id_SzvaHCviR","duplicatedFrom":["id_dd8NZXETR","id_yDSlOdPWj","id_e59CrKNyD"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":53,"height":14,"right":0,"top":2,"rawHTML":"<div data-offset-key=\"3655f-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"3655f-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Regular&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:rgba(33, 33, 33, 0.48);font-size:12px;letter-spacing:NaNpx;line-height:1.2;font-weight:400\"><span data-text=\"true\">11:59 AM</span></span></div>","fonts":["Roboto-Regular"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","isEditable":false,"forceRender":2},"name":null}],"name":null},{"componentClass":"Frame","props":{"key":"uHvoy6JwO","id":"id_uHvoy6JwO","duplicatedFrom":["id_kH4cYKQc6"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true,"intrinsicWidth":40,"intrinsicHeight":40},"width":40,"height":40,"left":16,"top":145,"_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible","backgroundColor":"#D52B1E","borderRadius":"100%"},"background":{"r":213,"g":43,"b":30,"a":1,"h":4.262295081967214,"s":0.7530864197530864,"l":0.47647058823529415,"initialValue":"#D52B1E","roundA":1,"format":"rgb"},"forceRender":2},"children":[{"componentClass":"Text","props":{"key":"eoDTdJRfF","id":"id_eoDTdJRfF","duplicatedFrom":["id_A_WjgorTC"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":12,"height":24,"left":"50%","top":"50%","center":true,"rawHTML":"<div data-offset-key=\"6gqv4-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"6gqv4-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Medium&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:hsl(0, 0%, 100%);font-size:20px;letter-spacing:NaNpx;line-height:1.2;font-weight:500\"><span data-text=\"true\">L</span></span></div>","fonts":["Roboto-Medium"],"opacity":1,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","isEditable":false,"forceRender":2},"name":null}],"name":null}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"ivjfyJXPT","id":"id_ivjfyJXPT","duplicatedFrom":["id_\\.\\/code\\/Icon\\.tsx_Icon","id_Qo3Qh6I_5","id_NiivTf5Zd"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":40,"height":40,"left":"50.13333333333333%","top":245,"center":"x","componentIdentifier":"./code/Icon.tsx_Icon","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Icon.tsx_Icon","props":{"width":40,"height":40,"iconName":"check","fill":"hsl(0, 0%, 100%)","placeholders":null,"id":"ivjfyJXPT./code/Icon.tsx_Icon","key":"ivjfyJXPT./code/Icon.tsx_Icon"},"children":[],"name":null}],"name":null},{"componentClass":"Text","props":{"key":"Ifr8wz64J","id":"id_Ifr8wz64J","duplicatedFrom":["id_k0OnVuS3c","id_FF_Tyfecu"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":39,"height":16,"left":16,"top":225,"rawHTML":"<div class='DraftEditor-alignLeft'><div data-offset-key=\"key-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"key-0-0\" style=\"tab-size:4;font-family:&quot;Inter&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:14px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Hello,</span></span></div></div>","alignment":"left","fonts":[],"opacity":0.87,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","name":"Reset your password","isEditable":false,"forceRender":2},"name":"Reset_your_password"},{"componentClass":"Text","props":{"key":"Vp8DfiXug","id":"id_Vp8DfiXug","duplicatedFrom":["id_k0OnVuS3c","id_FF_Tyfecu","id_DTmqEq729"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":119,"height":19,"left":"20.133333333333333%","bottom":273,"center":"x","rawHTML":"<div class='DraftEditor-alignLeft'><div data-offset-key=\"key-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"key-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Medium&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:#212121;font-size:16px;letter-spacing:0px;line-height:1.2;font-weight:500\"><span data-text=\"true\">LillyApp Support</span></span></div></div>","alignment":"left","fonts":["Roboto-Medium"],"opacity":0.87,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","name":"Reset your password","isEditable":false,"forceRender":2},"name":"Reset_your_password"},{"componentClass":"Text","props":{"key":"j1qhn8kid","id":"id_j1qhn8kid","duplicatedFrom":["id_k0OnVuS3c","id_FF_Tyfecu","id_DTmqEq729","id_GizmqM_wW"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":117,"height":19,"left":"19.866666666666667%","bottom":238,"center":"x","rawHTML":"<div class='DraftEditor-alignLeft'><div data-offset-key=\"key-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"key-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Medium&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:rgba(10, 134, 182, 1.00);font-size:16px;letter-spacing:0px;line-height:1.2;font-weight:500\"><span data-text=\"true\">1-855-545-5983</span></span></div></div>","alignment":"left","fonts":["Roboto-Medium"],"opacity":0.87,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","name":"Reset your password","isEditable":false,"forceRender":2},"name":"Reset_your_password"},{"componentClass":"Text","props":{"key":"WYwLrTSOD","id":"id_WYwLrTSOD","duplicatedFrom":["id_Dk8764__I"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"hidden"},"_constraints":{"enabled":true,"autoSize":false},"width":287,"height":39,"right":72,"top":259,"alignment":"left","contentState":{"blocks":[{"key":"c3ig7","text":"Please, verify your email for LillyApp by clicking the link below. ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":67,"style":"LETTERSPACING:0"},{"offset":0,"length":67,"style":"LINEHEIGHT:1.2"},{"offset":0,"length":67,"style":"FONT:Roboto-Regular"},{"offset":0,"length":67,"style":"COLOR:#212121"},{"offset":0,"length":67,"style":"SIZE:14"},{"offset":0,"length":67,"style":"ALIGN:left"}],"entityRanges":[],"data":{"emptyStyle":["LETTERSPACING:0","LINEHEIGHT:1.2","FONT:Roboto-Regular","COLOR:#212121","SIZE:14","ALIGN:left"]}}],"entityMap":{}},"fonts":["Roboto-Regular"],"opacity":1,"rotation":0,"visible":true,"autoSize":false,"verticalAlignment":"top","isEditable":false,"forceRender":2},"name":null},{"componentClass":"ComponentContainer","props":{"key":"Qq3ylLyGu","id":"id_Qq3ylLyGu","duplicatedFrom":["id_DNuFUedaz","id_am3eeJ2fk"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":140,"height":40,"left":16,"bottom":308,"componentIdentifier":"./code/Button.tsx_Button","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Button.tsx_Button","props":{"width":140,"height":40,"text":"Verify Email","buttonStyle":"primary","isDisabled":false,"hasIcon":false,"iconName":"check","fill":"#09F","placeholders":null,"id":"Qq3ylLyGu./code/Button.tsx_Button","key":"Qq3ylLyGu./code/Button.tsx_Button"},"children":[],"name":null}],"name":null}],"name":"Successful_Reset"},{"componentClass":"ComponentContainer","props":{"key":"vJsIluxTI","id":"id_vJsIluxTI","duplicatedFrom":["id_X3Vfc5T_Q","id_bv9YnUfDe"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":20,"left":0,"right":0,"top":8,"componentIdentifier":"@framer/framer.examples/./StatusBar.tsx_StatusBar","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"@framer/framer.examples/./StatusBar.tsx_StatusBar","props":{"placeholders":null,"id":"vJsIluxTI@framer/framer.examples/./StatusBar.tsx_StatusBar","key":"vJsIluxTI@framer/framer.examples/./StatusBar.tsx_StatusBar"},"children":[],"name":null}],"name":null}],"name":"Phone"},{"componentClass":"Frame","props":{"key":"TMLSdyemw","id":"id_TMLSdyemw","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true,"intrinsicWidth":375,"intrinsicHeight":667},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"rgba(250,250,250,1)"},"background":{"r":250,"g":250,"b":250,"a":1,"h":0,"s":0,"l":0.9803921568627451,"initialValue":"rgba(250,250,250,1)","roundA":1,"format":"rgb"},"_overrideForwardingDescription":{"id_rj6oAhRhD":"Title","id_LGDzKPNgC":"Check_Message","id_RF8u8wPok":"Click_Message","id_Cw0pmVfx8":"Icon_Contained","id_PGvxFwzLc":"Oval"},"name":"Check-Email"},"children":[{"componentClass":"ComponentContainer","props":{"key":"PCsxCR_6F","id":"id_PCsxCR_6F","duplicatedFrom":["id_\\.\\/code\\/Button\\.tsx_Button"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":40,"left":24,"right":24,"bottom":80,"componentIdentifier":"./code/Button.tsx_Button","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Button.tsx_Button","props":{"width":327,"height":40,"text":"Open Email App","buttonStyle":"primary","isDisabled":false,"hasIcon":false,"iconName":"check","fill":"#09F","placeholders":null,"id":"PCsxCR_6F./code/Button.tsx_Button","key":"PCsxCR_6F./code/Button.tsx_Button"},"children":[],"name":null}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"HiJOmseaC","id":"id_HiJOmseaC","duplicatedFrom":["id_\\.\\/code\\/Button\\.tsx_Button"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":44,"left":53,"right":52,"bottom":18,"componentIdentifier":"./code/Button.tsx_Button","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Button.tsx_Button","props":{"width":270,"height":44,"text":"Resend password reset email","buttonStyle":"tertiary","isDisabled":false,"hasIcon":false,"iconName":"check","fill":"#09F","placeholders":null,"id":"HiJOmseaC./code/Button.tsx_Button","key":"HiJOmseaC./code/Button.tsx_Button"},"children":[],"name":null}],"name":null},{"componentClass":"Text","props":{"key":"rj6oAhRhD","id":"id_rj6oAhRhD","willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":188,"height":28,"left":"50%","top":204,"center":"x","rawHTML":"<div data-offset-key=\"key-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"key-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Regular&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:rgba(0,0,0,1);font-size:24px;letter-spacing:0px;line-height:1.2;font-weight:400\"><span data-text=\"true\">Check Your Email</span></span></div>","fonts":["Roboto-Regular"],"opacity":0.87,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","name":"Title","isEditable":false,"forceRender":2},"name":"Title"},{"componentClass":"Text","props":{"key":"LGDzKPNgC","id":"id_LGDzKPNgC","willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"hidden"},"_constraints":{"enabled":true,"autoSize":false},"width":327,"height":40,"left":24,"right":24,"top":256,"alignment":"center","contentState":{"blocks":[{"key":"key","text":"Please check your email inbox or spam folder for an email from noreply@lilly.com","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":80,"style":"SIZE:14"},{"offset":0,"length":80,"style":"FONT:Roboto-Regular"},{"offset":0,"length":80,"style":"LINEHEIGHT:1.4285714285714286"},{"offset":0,"length":80,"style":"ALIGN:center"},{"offset":0,"length":80,"style":"COLOR:rgba(0,0,0,1)"}],"entityRanges":[],"data":{"emptyStyle":["COLOR:rgba(0,0,0,1)"]}}],"entityMap":{}},"fonts":["Roboto-Regular"],"opacity":0.87,"rotation":0,"visible":true,"autoSize":false,"verticalAlignment":"top","name":"Check_Message","isEditable":false,"forceRender":2},"name":"Check_Message"},{"componentClass":"Text","props":{"key":"RF8u8wPok","id":"id_RF8u8wPok","willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"hidden"},"_constraints":{"enabled":true,"autoSize":false},"width":327,"height":40,"left":23.5,"right":24.5,"top":"49.77511244377811%","center":"y","alignment":"center","contentState":{"blocks":[{"key":"key","text":"Click on the link you were emailed to reset your LillyApp account password.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":75,"style":"SIZE:14"},{"offset":0,"length":75,"style":"FONT:Roboto-Regular"},{"offset":0,"length":75,"style":"LINEHEIGHT:1.4285714285714286"},{"offset":0,"length":75,"style":"ALIGN:center"},{"offset":0,"length":75,"style":"COLOR:rgba(0,0,0,1)"}],"entityRanges":[],"data":{"emptyStyle":["COLOR:rgba(0,0,0,1)"]}}],"entityMap":{}},"fonts":["Roboto-Regular"],"opacity":0.87,"rotation":0,"visible":true,"autoSize":false,"verticalAlignment":"top","name":"Click_Message","isEditable":false,"forceRender":2},"name":"Click_Message"},{"componentClass":"Frame","props":{"key":"Cw0pmVfx8","id":"id_Cw0pmVfx8","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":80,"height":80,"left":"50.13333333333333%","top":92,"center":"x","_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"Icon / Contained","forceRender":2},"children":[{"componentClass":"Frame","props":{"key":"aXMBqTfSW","id":"id_aXMBqTfSW","willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":80,"height":80,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_PGvxFwzLc","id":"PGvxFwzLc","willChangeTransform":false,"_canMagicMotion":true,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":40,"y":80,"handleMirroring":"symmetric","handleOutX":22.091389992000003,"handleOutY":0,"handleInX":-22.091389992,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":80,"y":40,"handleMirroring":"symmetric","handleOutX":0,"handleOutY":-22.091389992,"handleInX":0,"handleInY":22.091389992000003,"radius":0,"__class":"PathSegment"},{"x":40,"y":0,"handleMirroring":"symmetric","handleOutX":-22.091389992,"handleOutY":0,"handleInX":22.091389992000003,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0,"y":40,"handleMirroring":"symmetric","handleOutX":0,"handleOutY":22.091389992000003,"handleInX":0,"handleInY":-22.091389992,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_PGvxFwzLc","strokeEnabled":false,"strokeClipId":"id_PGvxFwzLc_clip","rect":{"x":0,"y":0,"width":80,"height":80},"frame":{"x":0,"y":0,"width":80,"height":80},"strokeAlpha":0,"name":"Oval","rotation":0,"fill":{"r":69,"g":186,"b":127,"a":1,"h":149.74358974358975,"s":0.4588235294117647,"l":0.5,"initialValue":"rgba(69,186,127,1)","roundA":1,"format":"rgb"},"forceRender":2},"name":"Oval"}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"qLbjSNffc","id":"id_qLbjSNffc","duplicatedFrom":["id_\\.\\/code\\/Icon\\.tsx_Icon"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":40,"height":40,"left":"49.375%","top":"50.625%","center":true,"componentIdentifier":"./code/Icon.tsx_Icon","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Icon.tsx_Icon","props":{"width":40,"height":40,"iconName":"check","fill":"hsl(0, 0%, 100%)","placeholders":null,"id":"qLbjSNffc./code/Icon.tsx_Icon","key":"qLbjSNffc./code/Icon.tsx_Icon"},"children":[],"name":null}],"name":null}],"name":"Icon_Contained"},{"componentClass":"ComponentContainer","props":{"key":"n09NpDdHB","id":"id_n09NpDdHB","duplicatedFrom":["id_X3Vfc5T_Q","id_bv9YnUfDe"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":20,"left":0,"right":0,"top":8,"componentIdentifier":"@framer/framer.examples/./StatusBar.tsx_StatusBar","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"@framer/framer.examples/./StatusBar.tsx_StatusBar","props":{"placeholders":null,"id":"n09NpDdHB@framer/framer.examples/./StatusBar.tsx_StatusBar","key":"n09NpDdHB@framer/framer.examples/./StatusBar.tsx_StatusBar"},"children":[],"name":null}],"name":null}],"name":"Check_Email"},{"componentClass":"Frame","props":{"key":"fur12vfw2","id":"id_fur12vfw2","duplicatedFrom":["id_TMLSdyemw"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true,"intrinsicWidth":375,"intrinsicHeight":667},"_border":{},"visible":true,"style":{"rotate":0,"overflow":"hidden","backgroundColor":"rgba(250,250,250,1)"},"background":{"r":250,"g":250,"b":250,"a":1,"h":0,"s":0,"l":0.9803921568627451,"initialValue":"rgba(250,250,250,1)","roundA":1,"format":"rgb"},"_overrideForwardingDescription":{"id_zLygnKMPx":"Check_Your_Email","id_YZgY8Nk3G":"Icon_Contained","id_hBEsL9tu7":"Oval"},"name":"Email_Verified"},"children":[{"componentClass":"ComponentContainer","props":{"key":"cJNFmkAYn","id":"id_cJNFmkAYn","duplicatedFrom":["id_\\.\\/code\\/Button\\.tsx_Button","id_HiJOmseaC"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":44,"left":24,"right":24,"bottom":18,"componentIdentifier":"./code/Button.tsx_Button","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Button.tsx_Button","props":{"width":327,"height":44,"text":"Log in and Get Started","buttonStyle":"primary","isDisabled":false,"hasIcon":false,"iconName":"check","fill":"#09F","placeholders":null,"id":"cJNFmkAYn./code/Button.tsx_Button","key":"cJNFmkAYn./code/Button.tsx_Button"},"children":[],"name":null}],"name":null},{"componentClass":"Text","props":{"key":"zLygnKMPx","id":"id_zLygnKMPx","duplicatedFrom":["id_rj6oAhRhD"],"willChangeTransform":false,"_canMagicMotion":true,"style":{"overflow":"visible"},"_constraints":{"enabled":true,"autoSize":true},"width":148,"height":28,"right":110,"bottom":285,"rawHTML":"<div data-offset-key=\"key-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"key-0-0\" style=\"tab-size:4;font-family:&quot;Roboto-Regular&quot;, &quot;Roboto&quot;, sans-serif;-webkit-text-fill-color:rgba(0,0,0,1);font-size:24px;letter-spacing:0px;line-height:1.2;font-weight:400\"><span data-text=\"true\">Email Verified</span></span></div>","fonts":["Roboto-Regular"],"opacity":0.87,"rotation":0,"visible":true,"autoSize":true,"verticalAlignment":"top","name":"Check Your Email","isEditable":false,"forceRender":2},"name":"Check_Your_Email"},{"componentClass":"Frame","props":{"key":"YZgY8Nk3G","id":"id_YZgY8Nk3G","duplicatedFrom":["id_Cw0pmVfx8"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":80,"height":80,"left":"50.13333333333333%","top":242,"center":"x","_border":{},"visible":true,"style":{"rotate":0,"overflow":"visible"},"background":null,"name":"Icon / Contained","forceRender":2},"children":[{"componentClass":"Frame","props":{"key":"gbBJRuMXH","id":"id_gbBJRuMXH","duplicatedFrom":["id_aXMBqTfSW"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":80,"height":80,"left":"50%","top":"50%","center":true,"_border":{},"visible":true,"overflow":"hidden","style":{},"background":null},"children":[{"componentClass":"Vector","props":{"key":"id_hBEsL9tu7","id":"hBEsL9tu7","duplicatedFrom":["id_PGvxFwzLc"],"willChangeTransform":false,"_canMagicMotion":true,"isRootVectorNode":true,"calculatedPath":[{"pathSegments":[{"x":40,"y":80,"handleMirroring":"symmetric","handleOutX":22.091389992000003,"handleOutY":0,"handleInX":-22.091389992,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":80,"y":40,"handleMirroring":"symmetric","handleOutX":0,"handleOutY":-22.091389992,"handleInX":0,"handleInY":22.091389992000003,"radius":0,"__class":"PathSegment"},{"x":40,"y":0,"handleMirroring":"symmetric","handleOutX":-22.091389992,"handleOutY":0,"handleInX":22.091389992000003,"handleInY":0,"radius":0,"__class":"PathSegment"},{"x":0,"y":40,"handleMirroring":"symmetric","handleOutX":0,"handleOutY":22.091389992000003,"handleInX":0,"handleInY":-22.091389992,"radius":0,"__class":"PathSegment"}],"pathClosed":true}],"insideStroke":false,"shapeId":"id_hBEsL9tu7","strokeEnabled":false,"strokeClipId":"id_hBEsL9tu7_clip","rect":{"x":0,"y":0,"width":80,"height":80},"frame":{"x":0,"y":0,"width":80,"height":80},"strokeAlpha":0,"name":"Oval","rotation":0,"fill":{"r":69,"g":186,"b":127,"a":1,"h":149.74358974358975,"s":0.4588235294117647,"l":0.5,"initialValue":"rgba(69,186,127,1)","roundA":1,"format":"rgb"},"forceRender":2},"name":"Oval"}],"name":null},{"componentClass":"ComponentContainer","props":{"key":"R9CCFcn1R","id":"id_R9CCFcn1R","duplicatedFrom":["id_\\.\\/code\\/Icon\\.tsx_Icon","id_qLbjSNffc"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"width":40,"height":40,"left":"49.375%","top":"50.625%","center":true,"componentIdentifier":"./code/Icon.tsx_Icon","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"./code/Icon.tsx_Icon","props":{"width":40,"height":40,"iconName":"check","fill":"hsl(0, 0%, 100%)","placeholders":null,"id":"R9CCFcn1R./code/Icon.tsx_Icon","key":"R9CCFcn1R./code/Icon.tsx_Icon"},"children":[],"name":null}],"name":null}],"name":"Icon_Contained"},{"componentClass":"ComponentContainer","props":{"key":"bQ8zqrEaN","id":"id_bQ8zqrEaN","duplicatedFrom":["id_X3Vfc5T_Q","id_bv9YnUfDe"],"willChangeTransform":false,"_canMagicMotion":true,"_constraints":{"enabled":true},"height":20,"left":0,"right":0,"top":8,"componentIdentifier":"@framer/framer.examples/./StatusBar.tsx_StatusBar","visible":true,"style":{"rotate":0,"opacity":1}},"children":[{"componentClass":"@framer/framer.examples/./StatusBar.tsx_StatusBar","props":{"placeholders":null,"id":"bQ8zqrEaN@framer/framer.examples/./StatusBar.tsx_StatusBar","key":"bQ8zqrEaN@framer/framer.examples/./StatusBar.tsx_StatusBar"},"children":[],"name":null}],"name":null}],"name":"Email_Verified"}]});
exports.Check_Email = framer_1.createDesignComponent(canvas, "id_TMLSdyemw", { Title: "string", Check_Message: "string", Click_Message: "string" }, 375, 667);
exports.Email_Verified = framer_1.createDesignComponent(canvas, "id_fur12vfw2", {}, 375, 667);
exports.Phone = framer_1.createDesignComponent(canvas, "id_DX6XoFzBE", {}, 375, 667);
exports.SetPassword = framer_1.createDesignComponent(canvas, "id_s85MmptS4", {}, 375, 667);
exports.colors = Object.freeze({
    /** #00384D */
    "primary900": "var(--token-0be4b1dd-a15e-4569-9e0b-c9b543f15347, rgb(0, 56, 77))",
    /** #0081B3 */
    "primary600": "var(--token-cadf69bc-2b1d-48a9-b961-16c5d91f5649, rgb(0, 129, 179))",
    /** #212121 */
    "grey900": "var(--token-967f243b-25f6-4060-a79e-0cbbf0d656b3, rgb(33, 33, 33))",
    /** #FAFAFA */
    "offwhite": "var(--token-62d02b63-8da8-4fde-8c93-567876742301, rgb(250, 250, 250))",
    /** #007AFF */
    "iOS blue": "var(--token-35b87460-2e70-4460-8636-cbd506e90ba2, rgb(0, 122, 255))",
});
exports.__info__ = [];


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.2.5","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.6.1","@testing-library/jest-dom":"^5.1.1","@testing-library/react":"^9.4.0","@testing-library/react-hooks":"^3.2.1","@types/chalk":"2.2.0","@types/css-font-loading-module":"^0.0.4","@types/draft-js":"0.10.38","@types/enzyme":"3.1.10","@types/enzyme-adapter-react-16":"1.0.3","@types/google.fonts":"1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"25.2.1","@types/node":"^12.12.12","@types/promise-queue":"2.2.0","@types/react":"16.9.19","@types/react-dom":"16.9.5","@types/webfontloader":"1.6.29","@typescript-eslint/eslint-plugin":"^1.10.3-alpha.2","@typescript-eslint/parser":"^1.10.2","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.11.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"2.0.0-beta.76","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^25.5.4","jest-diff":"^25.5.0","jest-junit":"^10.0.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.12.0","react-dev-utils":"^5.0.1","react-dom":"^16.12.0","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","terser-webpack-plugin":"^1.3.0","ts-jest":"^25.5.0","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","watch":"^1.0.2","webfontloader":"^1.6.28","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.12.0","react-dom":"^16.12.0"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: framer, peerDependencies, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"framer\":{\"id\":\"4557c3b4-d2eb-42b1-b7ff-49a404a364dd\"},\"peerDependencies\":{\"framer\":\"^1\"},\"author\":\"Ken Spry\"}");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});