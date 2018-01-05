/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(4), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(108), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && typeof DEBUG !== 'undefined' && DEBUG) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeStyles_1 = __webpack_require__(82);
exports.mergeStyles = mergeStyles_1.mergeStyles;
var mergeStyleSets_1 = __webpack_require__(88);
exports.mergeStyleSets = mergeStyleSets_1.mergeStyleSets;
var concatStyleSets_1 = __webpack_require__(38);
exports.concatStyleSets = concatStyleSets_1.concatStyleSets;
var fontFace_1 = __webpack_require__(89);
exports.fontFace = fontFace_1.fontFace;
var keyframes_1 = __webpack_require__(90);
exports.keyframes = keyframes_1.keyframes;
var Stylesheet_1 = __webpack_require__(12);
exports.InjectionMode = Stylesheet_1.InjectionMode;
exports.Stylesheet = Stylesheet_1.Stylesheet;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Icon_1 = __webpack_require__(15);
var ContextualMenu_1 = __webpack_require__(122);
var BaseButton_classNames_1 = __webpack_require__(152);
var SplitButton_classNames_1 = __webpack_require__(153);
var BaseButton = /** @class */ (function (_super) {
    tslib_1.__extends(BaseButton, _super);
    function BaseButton(props, rootClassName) {
        var _this = _super.call(this, props) || this;
        _this._warnConditionallyRequiredProps(['menuProps', 'onClick'], 'split', _this.props.split);
        _this._warnDeprecations({
            rootProps: undefined
        });
        _this._labelId = Utilities_1.getId();
        _this._descriptionId = Utilities_1.getId();
        _this._ariaDescriptionId = Utilities_1.getId();
        _this.state = {
            menuProps: null
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return (!!this.props.menuProps && !!this.props.onClick) && this.props.split === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseButton.prototype, "_isExpanded", {
        get: function () {
            return !!this.state.menuProps;
        },
        enumerable: true,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a = this.props, ariaDescription = _a.ariaDescription, ariaLabel = _a.ariaLabel, ariaHidden = _a.ariaHidden, className = _a.className, description = _a.description, disabled = _a.disabled, primaryDisabled = _a.primaryDisabled, href = _a.href, iconProps = _a.iconProps, menuIconProps = _a.menuIconProps, styles = _a.styles, text = _a.text, checked = _a.checked, variantClassName = _a.variantClassName, theme = _a.theme, getClassNames = _a.getClassNames;
        var menuProps = this.state.menuProps;
        // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = (disabled || primaryDisabled);
        this._classNames = getClassNames ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !!this.state.menuProps, this.props.split) : BaseButton_classNames_1.getBaseButtonClassNames(styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !!this.state.menuProps, this.props.split);
        var _b = this, _ariaDescriptionId = _b._ariaDescriptionId, _labelId = _b._labelId, _descriptionId = _b._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Utilities_1.getNativeProps(Utilities_1.assign(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? Utilities_1.anchorProperties : Utilities_1.buttonProperties, [
            'disabled' // Let disabled buttons be focused and styled as disabled.
        ]);
        // Check for ariaDescription, description or aria-describedby in the native props to determine source of aria-describedby
        // otherwise default to null.
        var ariaDescribedBy;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (description) {
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        else {
            ariaDescribedBy = null;
        }
        // If an explicit ariaLabel is given, use that as the label and we're done.
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute),
        // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
        // text on the button (if it exists). Never set both aria-label and aria-labelledby.
        var ariaLabelledBy = null;
        if (!ariaLabel) {
            if (nativeProps['aria-labelledby']) {
                ariaLabelledBy = nativeProps['aria-labelledby'];
            }
            else if (ariaDescribedBy) {
                ariaLabelledBy = text ? _labelId : null;
            }
        }
        var buttonProps = Utilities_1.assign(nativeProps, {
            className: this._classNames.root,
            ref: this._resolveRef('_buttonElement'),
            'disabled': isPrimaryButtonDisabled,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledBy,
            'aria-describedby': ariaDescribedBy,
            'data-is-focusable': (this.props['data-is-focusable'] === false || disabled) ? false : true,
            'aria-pressed': checked
        });
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return (this._onRenderSplitButtonContent(tag, buttonProps));
        }
        else if (this.props.menuProps) {
            Utilities_1.assign(buttonProps, {
                'onKeyDown': this._onMenuKeyDown,
                'onClick': this._onMenuClick,
                'aria-expanded': this._isExpanded,
                'aria-owns': this.state.menuProps ? this._labelId + '-menu' : null,
                'aria-haspopup': true
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If Button's menu was closed, run onAfterMenuDismiss
        if (this.props.onAfterMenuDismiss && prevState.menuProps && !this.state.menuProps) {
            this.props.onAfterMenuDismiss();
        }
    };
    BaseButton.prototype.focus = function () {
        if (this._buttonElement) {
            this._buttonElement.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this.setState({ menuProps: null });
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var props = this.props;
        var Tag = tag;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderAriaDescription, onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b, _c = props.onRenderChildren, onRenderChildren = _c === void 0 ? this._onRenderChildren : _c, _d = props.onRenderMenu, onRenderMenu = _d === void 0 ? this._onRenderMenu : _d, _e = props.onRenderMenuIcon, onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e;
        var Content = (React.createElement(Tag, tslib_1.__assign({}, buttonProps),
            React.createElement("div", { className: this._classNames.flexContainer },
                onRenderIcon(props, this._onRenderIcon),
                this._onRenderTextContents(),
                onRenderAriaDescription(props, this._onRenderAriaDescription),
                onRenderChildren(props, this._onRenderChildren),
                !this._isSplitButton && (menuProps || menuIconProps || this.props.onRenderMenuIcon) && onRenderMenuIcon(this.props, this._onRenderMenuIcon),
                this.state.menuProps && !this.state.menuProps.doNotLayer && onRenderMenu(menuProps, this._onRenderMenu))));
        if (menuProps && menuProps.doNotLayer) {
            return (React.createElement("div", { style: { display: 'inline-block' } },
                Content,
                this.state.menuProps && onRenderMenu(menuProps, this._onRenderMenu)));
        }
        return Content;
    };
    BaseButton.prototype._onRenderIcon = function (buttonProps, defaultRender) {
        var iconProps = this.props.iconProps;
        if (iconProps) {
            return Icon_1.Icon(tslib_1.__assign({}, iconProps, { className: this._classNames.icon }));
        }
        return null;
    };
    BaseButton.prototype._onRenderTextContents = function () {
        var _a = this.props, text = _a.text, children = _a.children, description = _a.description, _b = _a.onRenderText, onRenderText = _b === void 0 ? this._onRenderText : _b, _c = _a.onRenderDescription, onRenderDescription = _c === void 0 ? this._onRenderDescription : _c;
        if (text || typeof (children) === 'string' || description) {
            return (React.createElement("div", { className: this._classNames.textContainer },
                onRenderText(this.props, this._onRenderText),
                onRenderDescription(this.props, this._onRenderDescription)));
        }
        return ([
            onRenderText(this.props, this._onRenderText),
            onRenderDescription(this.props, this._onRenderDescription)
        ]);
    };
    BaseButton.prototype._onRenderText = function () {
        var _a = this.props, children = _a.children, text = _a.text;
        // For backwards compat, we should continue to take in the text content from children.
        if (text === undefined && typeof (children) === 'string') {
            text = children;
        }
        if (text) {
            return (React.createElement("div", { key: this._labelId, className: this._classNames.label, id: this._labelId }, text));
        }
        return null;
    };
    BaseButton.prototype._onRenderChildren = function () {
        var children = this.props.children;
        // If children is just a string, either it or the text will be rendered via onRenderLabel
        // If children is another component, it will be rendered after text
        if (typeof (children) === 'string') {
            return null;
        }
        return children;
    };
    BaseButton.prototype._onRenderDescription = function (props) {
        var description = this.props.description;
        // ms-Button-description is only shown when the button type is compound.
        // In other cases it will not be displayed.
        return description ? (React.createElement("div", { key: this._descriptionId, className: this._classNames.description, id: this._descriptionId }, description)) : (null);
    };
    BaseButton.prototype._onRenderAriaDescription = function () {
        var ariaDescription = this.props.ariaDescription;
        // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
        // otherwise it will be assigned to descriptionSpan.
        return ariaDescription ? (React.createElement("span", { className: this._classNames.screenReaderText, id: this._ariaDescriptionId }, ariaDescription)) : (null);
    };
    BaseButton.prototype._onRenderMenuIcon = function (props) {
        var menuIconProps = this.props.menuIconProps;
        return (React.createElement(Icon_1.Icon, tslib_1.__assign({ iconName: 'ChevronDown' }, menuIconProps, { className: this._classNames.menuIcon })));
    };
    BaseButton.prototype._onRenderMenu = function (menuProps) {
        var _a = menuProps.onDismiss, onDismiss = _a === void 0 ? this._dismissMenu : _a;
        return (React.createElement(ContextualMenu_1.ContextualMenu, tslib_1.__assign({ id: this._labelId + '-menu', directionalHint: 4 /* bottomLeftEdge */ }, menuProps, { className: 'ms-BaseButton-menuhost ' + menuProps.className, target: this._isSplitButton ? this._splitButtonContainer : this._buttonElement, labelElementId: this._labelId, onDismiss: onDismiss })));
    };
    BaseButton.prototype._dismissMenu = function () {
        this.setState({ menuProps: null });
    };
    BaseButton.prototype._onToggleMenu = function () {
        var menuProps = this.props.menuProps;
        var currentMenuProps = this.state.menuProps;
        this.setState({ menuProps: currentMenuProps ? null : menuProps });
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? {} : _b, disabled = _a.disabled, checked = _a.checked, getSplitButtonClassNames = _a.getSplitButtonClassNames;
        var classNames = getSplitButtonClassNames ? getSplitButtonClassNames(!!disabled, !!this.state.menuProps, !!checked) : styles && SplitButton_classNames_1.getClassNames(styles, !!disabled, !!this.state.menuProps, !!checked);
        return (React.createElement("div", { "aria-labelledby": buttonProps.ariaLabel, "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": this._isExpanded, "aria-pressed": this.props.checked, "aria-describedby": buttonProps.ariaDescription, className: classNames && classNames.splitButtonContainer, onKeyDown: this._onMenuKeyDown, ref: this._resolveRef('_splitButtonContainer') },
            React.createElement("span", { "aria-hidden": true, 
                // TODO: THIS SHOULD BE REMOVED!
                style: { 'display': 'flex' } },
                this._onRenderContent(tag, buttonProps),
                this._onRenderSplitButtonMenuButton(classNames),
                this._onRenderSplitButtonDivider(classNames))));
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            return React.createElement("span", { className: classNames.divider });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames) {
        var _a = this.props, menuIconProps = _a.menuIconProps, splitButtonAriaLabel = _a.splitButtonAriaLabel;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown'
            };
        }
        var splitButtonProps = {
            'styles': classNames,
            'checked': this.props.checked,
            'disabled': this.props.disabled,
            'onClick': this._onMenuClick,
            'menuProps': undefined,
            'iconProps': menuIconProps,
            'ariaLabel': splitButtonAriaLabel
        };
        return React.createElement(BaseButton, tslib_1.__assign({}, splitButtonProps));
    };
    BaseButton.prototype._onMenuKeyDown = function (ev) {
        if (ev.which === 40 /* down */) {
            var onMenuClick = this.props.onMenuClick;
            onMenuClick && onMenuClick(ev, this);
            !ev.defaultPrevented && this._onToggleMenu();
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    BaseButton.prototype._onMenuClick = function (ev) {
        var onMenuClick = this.props.onMenuClick;
        onMenuClick && onMenuClick(ev, this);
        !ev.defaultPrevented && this._onToggleMenu();
        ev.preventDefault();
        ev.stopPropagation();
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        classNames: {},
        styles: {},
        split: false,
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderIcon", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderTextContents", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderText", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderChildren", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderDescription", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderAriaDescription", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderMenuIcon", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_dismissMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onToggleMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onMenuKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onMenuClick", null);
    return BaseButton;
}(Utilities_1.BaseComponent));
exports.BaseButton = BaseButton;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
exports.setVirtualParent = setVirtualParent;
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
exports.getVirtualParent = getVirtualParent;
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && (allowVirtualParents && getVirtualParent(child) ||
        child.parentNode && child.parentNode);
}
exports.getParent = getParent;
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent
 * @param allowVirtualChildren
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
exports.getChildren = getChildren;
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
exports.elementContains = elementContains;
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
exports.setSSR = setSSR;
/**
 * Helper to get the window object.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return (rootElement &&
            rootElement.ownerDocument &&
            rootElement.ownerDocument.defaultView ?
            rootElement.ownerDocument.defaultView :
            window);
    }
}
exports.getWindow = getWindow;
/**
 * Helper to get the document object.
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
exports.getDocument = getDocument;
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
exports.getRect = getRect;
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var noOutline = {
    outline: 0
};
var iconStyle = {
    fontSize: Styling_1.FontSizes.icon,
    margin: '0 4px',
    height: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexShrink: 0
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */
exports.getStyles = Utilities_1.memoizeFunction(function (theme) {
    var semanticColors = theme.semanticColors;
    var border = semanticColors.buttonBorder;
    var disabledBackground = semanticColors.disabledBackground;
    var disabledText = semanticColors.disabledText;
    return {
        root: [
            Styling_1.getFocusStyle(theme, -1),
            theme.fonts.medium,
            {
                boxSizing: 'border-box',
                border: '1px solid ' + border,
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                padding: '0 16px',
                borderRadius: 0
            }
        ],
        rootDisabled: {
            backgroundColor: disabledBackground,
            color: disabledText,
            cursor: 'default',
            pointerEvents: 'none',
            selectors: {
                ':hover': noOutline,
                ':focus': noOutline
            }
        },
        iconDisabled: {
            color: disabledText
        },
        menuIconDisabled: {
            color: disabledText
        },
        flexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        textContainer: {
            flexGrow: 1
        },
        icon: iconStyle,
        menuIcon: [
            iconStyle,
            {
                fontSize: Styling_1.FontSizes.small
            }
        ],
        label: {
            margin: '0 4px',
            lineHeight: '100%'
        },
        screenReaderText: Styling_1.hiddenContentStyle
    };
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/**
 * Injection mode for the stylesheet.
 *
 * @public
 */
var InjectionMode;
(function (InjectionMode) {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    InjectionMode[InjectionMode["none"] = 0] = "none";
    /**
     * Inserts rules using the insertRule api.
     */
    InjectionMode[InjectionMode["insertNode"] = 1] = "insertNode";
    /**
     * Appends rules using appendChild.
     */
    InjectionMode[InjectionMode["appendChild"] = 2] = "appendChild";
})(InjectionMode = exports.InjectionMode || (exports.InjectionMode = {}));
var STYLESHEET_SETTING = '__stylesheet__';
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._config = tslib_1.__assign({ injectionMode: 1 /* insertNode */, defaultPrefix: 'css' }, config);
        this.reset();
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        var win = typeof window !== 'undefined' ? window : {};
        _stylesheet = win[STYLESHEET_SETTING];
        if (!_stylesheet) {
            // tslint:disable-next-line:no-string-literal
            var fabricConfig = (win && win['FabricConfig']) || {};
            _stylesheet = win[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib_1.__assign({}, this._config, config);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var prefix = displayName || this._config.defaultPrefix;
        return prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.args);
    };
    /**
   * Gets the arguments associated with a given classname which was
   * previously registered using cacheClassName.
   */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.rules);
    };
    /**
     * Inserts a css rule into the stylesheet.
     */
    Stylesheet.prototype.insertRule = function (rule) {
        var element = this._getElement();
        var injectionMode = element ? this._config.injectionMode : 0 /* none */;
        switch (injectionMode) {
            case 1 /* insertNode */:
                var sheet = element.sheet;
                try {
                    // tslint:disable-next-line:no-any
                    sheet.insertRule(rule, sheet.cssRules.length);
                }
                catch (e) {
                    /* no-op on errors */
                }
                break;
            case 2 /* appendChild */:
                _createStyleElement(rule);
                break;
            default:
                this._rules.push(rule);
                break;
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function () {
        return (this._rules.join('') || '') + (this._rulesToInsert.join('') || '');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        if (this._timerId) {
            clearTimeout(this._timerId);
            this._timerId = 0;
        }
    };
    Stylesheet.prototype._getElement = function () {
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = _createStyleElement();
        }
        return this._styleElement;
    };
    return Stylesheet;
}());
exports.Stylesheet = Stylesheet;
function _createStyleElement(content) {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('data-merge-styles', 'true');
    styleElement.type = 'text/css';
    if (content) {
        styleElement.appendChild(document.createTextNode(content));
    }
    document.head.appendChild(styleElement);
    return styleElement;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-string-literal */
Object.defineProperty(exports, "__esModule", { value: true });
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
        // tslint:disable-next-line:no-any
        target, eventName, 
        // tslint:disable-next-line:no-any
        eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                // tslint:disable-next-line:no-any
                ev['args'] = eventArgs;
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) {
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener ||
            (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                useCapture: useCapture || false
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] = events[eventName] || {
                count: 0
            };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, useCapture);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                    else if (eventRecord.target.detachEvent) {
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());
exports.EventGroup = EventGroup;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(12);
var kebabRules_1 = __webpack_require__(83);
var prefixRules_1 = __webpack_require__(84);
var provideUnits_1 = __webpack_require__(86);
var rtlifyRules_1 = __webpack_require__(87);
var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf('@media') === 0) {
                                newSelector = newSelector + '{' + currentSelector;
                            }
                            else if (newSelector.indexOf(':') === 0) {
                                newSelector = currentSelector + newSelector;
                            }
                            else if (newSelector.indexOf('&') < 0) {
                                newSelector = currentSelector + ' ' + newSelector;
                            }
                            extractRules([selectorValue], rules, newSelector);
                        }
                    }
                }
                else {
                    // Else, add the rule to the currentSelector.
                    if (prop === 'margin' || prop === 'padding') {
                        // tslint:disable-next-line:no-any
                        expandQuads(currentRules, prop, arg[prop]);
                    }
                    else {
                        // tslint:disable-next-line:no-any
                        currentRules[prop] = arg[prop];
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = (typeof value === 'string') ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName)) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        kebabRules_1.kebabRules(allEntries, i);
        provideUnits_1.provideUnits(allEntries, i);
        rtlifyRules_1.rtlifyRules(allEntries, i);
        prefixRules_1.prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
exports.serializeRuleEntries = serializeRuleEntries;
function styleToRegistration() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    if (key) {
        var stylesheet = Stylesheet_1.Stylesheet.getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
}
exports.styleToRegistration = styleToRegistration;
function applyRegistration(registration, classMap) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                // Fix selector using map.
                selector = selector.replace(/(&)|\$([\w-]+)\b/g, function (match, amp, cn) {
                    if (amp) {
                        return '.' + registration.className;
                    }
                    else if (cn) {
                        return '.' + ((classMap && classMap[cn]) || cn);
                    }
                    return '';
                });
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + ((selector.indexOf('@media') === 0) ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
exports.applyRegistration = applyRegistration;
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, args);
    if (registration) {
        applyRegistration(registration);
        return registration.className;
    }
    return '';
}
exports.styleToClassName = styleToClassName;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AnimationStyles_1 = __webpack_require__(112);
exports.AnimationStyles = AnimationStyles_1.AnimationStyles;
exports.AnimationVariables = AnimationStyles_1.AnimationVariables;
var DefaultPalette_1 = __webpack_require__(26);
exports.DefaultPalette = DefaultPalette_1.DefaultPalette;
var DefaultFontStyles_1 = __webpack_require__(46);
exports.DefaultFontStyles = DefaultFontStyles_1.DefaultFontStyles;
exports.registerDefaultFontFaces = DefaultFontStyles_1.registerDefaultFontFaces;
var fonts_1 = __webpack_require__(47);
exports.FontSizes = fonts_1.FontSizes;
exports.FontWeights = fonts_1.FontWeights;
exports.IconFontSizes = fonts_1.IconFontSizes;
exports.createFontStyles = fonts_1.createFontStyles;
var getFocusStyle_1 = __webpack_require__(113);
exports.getFocusStyle = getFocusStyle_1.getFocusStyle;
var hiddenContentStyle_1 = __webpack_require__(114);
exports.hiddenContentStyle = hiddenContentStyle_1.hiddenContentStyle;
var theme_1 = __webpack_require__(115);
exports.ThemeSettingName = theme_1.ThemeSettingName;
exports.getTheme = theme_1.getTheme;
exports.loadTheme = theme_1.loadTheme;
exports.createTheme = theme_1.createTheme;
exports.registerOnThemeChangeCallback = theme_1.registerOnThemeChangeCallback;
exports.removeOnThemeChangeCallback = theme_1.removeOnThemeChangeCallback;
tslib_1.__exportStar(__webpack_require__(116), exports);
var GeneralStyles_1 = __webpack_require__(117);
exports.normalize = GeneralStyles_1.normalize;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(7);
var Utilities_1 = __webpack_require__(1);
var DefaultButton_styles_1 = __webpack_require__(155);
var DefaultButton = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultButton, _super);
    function DefaultButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    DefaultButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: DefaultButton_styles_1.getStyles(theme, styles, primary), onRenderDescription: Utilities_1.nullRender })));
    };
    DefaultButton = tslib_1.__decorate([
        Utilities_1.customizable('DefaultButton', ['theme'])
    ], DefaultButton);
    return DefaultButton;
}(Utilities_1.BaseComponent));
exports.DefaultButton = DefaultButton;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var splitButtonStyles = {
        splitButtonContainer: {
            position: 'relative',
            display: 'inline-block',
            border: '1px solid transparent'
        },
        splitButtonContainerFocused: {
            outline: 'none!important',
            border: '1px solid'
        },
        splitButtonMenuButton: [
            Styling_1.getFocusStyle(theme, -1),
            {
                padding: 6,
                height: 'auto',
                boxSizing: 'border-box',
                border: '1px solid transparent',
                borderRadius: 0,
                outline: 'transparent',
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                width: 32,
                marginLeft: -1
            }
        ],
        splitButtonDivider: {
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8
        },
        splitButtonMenuButtonDisabled: {
            pointerEvents: 'none',
            selectors: {
                ':hover': {
                    cursor: 'default'
                }
            }
        },
        splitButtonFlexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
    };
    return Styling_1.concatStyleSets(splitButtonStyles, customStyles);
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _warningCallback = undefined;
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            warn(deprecationMessage);
        }
    }
}
exports.warnDeprecations = warnDeprecations;
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props) {
            var propInExclusiveMapValue = exclusiveMap[propName];
            if (propInExclusiveMapValue && propInExclusiveMapValue in props) {
                warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
            }
        }
    }
}
exports.warnMutuallyExclusive = warnMutuallyExclusive;
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
*/
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true) {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
exports.warnConditionallyRequiredProps = warnConditionallyRequiredProps;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback) {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
exports.warn = warn;
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
exports.setWarningCallback = setWarningCallback;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var GlobalSettings_1 = __webpack_require__(21);
var EventGroup_1 = __webpack_require__(13);
var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {} };
var _allSettings = GlobalSettings_1.GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {}
});
var _events = new EventGroup_1.EventGroup(_allSettings);
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib_1.__assign({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib_1.__assign({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
        // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] = (localScopedSettings[property] ||
                localSettings.settings[property] ||
                globalScopedSettings[property] ||
                _allSettings.settings[property]);
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.on(_allSettings, 'change', onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events.off(_allSettings, 'change', onChange);
    };
    Customizations._raiseChange = function () {
        _events.raise('change');
    };
    return Customizations;
}());
exports.Customizations = Customizations;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
// tslint:disable-next-line:no-any
var _globalSettings = {};
var _counter = 0;
if (typeof window !== 'undefined') {
    // tslint:disable-next-line:no-any
    var win = window;
    _globalSettings = win[GLOBAL_SETTINGS_PROP_NAME] = win[GLOBAL_SETTINGS_PROP_NAME] || (_a = {},
        _a[CALLBACK_STATE_PROP_NAME] = {},
        _a);
}
var _callbacks = _globalSettings[CALLBACK_STATE_PROP_NAME];
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        if (_globalSettings[key] === undefined) {
            _globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return _globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var oldValue = _globalSettings[key];
        if (value !== oldValue) {
            _globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in _callbacks) {
                if (_callbacks.hasOwnProperty(id)) {
                    _callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        _callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        delete _callbacks[cb.__id__];
    };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
var _a;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buildClassMap_1 = __webpack_require__(110);
exports.buildClassMap = buildClassMap_1.buildClassMap;
var icons_1 = __webpack_require__(45);
exports.getIcon = icons_1.getIcon;
exports.registerIcons = icons_1.registerIcons;
exports.registerIconAlias = icons_1.registerIconAlias;
exports.setIconOptions = icons_1.setIconOptions;
var getIconClassName_1 = __webpack_require__(111);
exports.getIconClassName = getIconClassName_1.getIconClassName;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d7',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    accent: '#0078d7',
    white: '#ffffff',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d7',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(31);
/* tslint:enable:no-unused-variable */
var Fabric_1 = __webpack_require__(143);
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(147);
var styles = stylesImport;
var _layersByHostId = {};
var _defaultHostSelector;
var Layer = /** @class */ (function (_super) {
    tslib_1.__extends(Layer, _super);
    function Layer(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            if (!_layersByHostId[_this.props.hostId]) {
                _layersByHostId[_this.props.hostId] = [];
            }
            _layersByHostId[_this.props.hostId].push(_this);
        }
        return _this;
    }
    /**
     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
     * care about the specific host.
     */
    Layer.notifyHostChanged = function (id) {
        if (_layersByHostId[id]) {
            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
        }
    };
    /**
     * Sets the default target selector to use when determining the host in which
     * Layered content will be injected into. If not provided, an element will be
     * created at the end of the document body.
     *
     * Passing in a falsey value will clear the default target and reset back to
     * using a created element at the end of document body.
     */
    Layer.setDefaultTarget = function (selector) {
        _defaultHostSelector = selector;
    };
    Layer.prototype.componentDidMount = function () {
        this.componentDidUpdate();
    };
    Layer.prototype.componentWillUnmount = function () {
        var _this = this;
        this._removeLayerElement();
        if (this.props.hostId) {
            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
            if (!_layersByHostId[this.props.hostId].length) {
                delete _layersByHostId[this.props.hostId];
            }
        }
    };
    Layer.prototype.componentDidUpdate = function () {
        var _this = this;
        var host = this._getHost();
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var doc = Utilities_1.getDocument(this._rootElement);
                this._layerElement = doc.createElement('div');
                this._layerElement.className = Utilities_1.css('ms-Layer', (_a = {},
                    _a['ms-Layer--fixed ' + styles.rootIsFixed] = !this.props.hostId,
                    _a));
                host.appendChild(this._layerElement);
                Utilities_1.setVirtualParent(this._layerElement, this._rootElement);
            }
            // Using this 'unstable' method allows us to retain the React context across the layer projection.
            ReactDOM.unstable_renderSubtreeIntoContainer(this, (React.createElement(Fabric_1.Fabric, { className: Utilities_1.css('ms-Layer-content', styles.content) }, this.props.children)), this._layerElement, function () {
                if (!_this._hasMounted) {
                    _this._hasMounted = true;
                    // TODO: @deprecated cleanup required.
                    if (_this.props.onLayerMounted) {
                        _this.props.onLayerMounted();
                    }
                    _this.props.onLayerDidMount();
                }
            });
        }
        var _a;
    };
    Layer.prototype.render = function () {
        return (React.createElement("span", { className: 'ms-Layer', ref: this._resolveRef('_rootElement') }));
    };
    Layer.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            ReactDOM.unmountComponentAtNode(this._layerElement);
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
            this._hasMounted = false;
        }
    };
    Layer.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Utilities_1.getDocument(this._rootElement);
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            return _defaultHostSelector ? doc.querySelector(_defaultHostSelector) : doc.body;
        }
    };
    Layer.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    return Layer;
}(Utilities_1.BaseComponent));
exports.Layer = Layer;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(7);
var Utilities_1 = __webpack_require__(1);
var ActionButton_styles_1 = __webpack_require__(156);
var ActionButton = /** @class */ (function (_super) {
    tslib_1.__extends(ActionButton, _super);
    function ActionButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    ActionButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: 'ms-Button--action ms-Button--command', styles: ActionButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    ActionButton = tslib_1.__decorate([
        Utilities_1.customizable('ActionButton', ['theme'])
    ], ActionButton);
    return ActionButton;
}(Utilities_1.BaseComponent));
exports.ActionButton = ActionButton;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(191);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () { };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () { return; };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = (new Date).getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var invokeFunction = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var cancel = function () {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
            }
        };
        var flush = function () {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame ?
                window.requestAnimationFrame(animationFrameCallback) :
                window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());
exports.Async = Async;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(8);
var styles = __webpack_require__(67);
var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = dom_1.getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(styles.scrollDisabled);
    }
    _bodyScrollDisabledCount++;
}
exports.disableBodyScroll = disableBodyScroll;
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = dom_1.getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(styles.scrollDisabled);
        }
        _bodyScrollDisabledCount--;
    }
}
exports.enableBodyScroll = enableBodyScroll;
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}
exports.findScrollableParent = findScrollableParent;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Async_1 = __webpack_require__(32);
var EventGroup_1 = __webpack_require__(13);
var warn_1 = __webpack_require__(19);
/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 */
var BaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._shouldUpdateComponentRef = true;
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentWillMount',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentWillReceiveProps',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component will receive props, make sure the componentRef is updated.
     */
    // tslint:disable-next-line:no-any
    BaseComponent.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this._updateComponentRef(this.props, newProps);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._updateComponentRef(undefined, this.props);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec((this).constructor.toString());
                this.__className = (results && results.length > 1) ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_1.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_1.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return _this[refName] = ref;
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        if (this._shouldUpdateComponentRef &&
            ((!currentProps && newProps.componentRef) ||
                (currentProps && currentProps.componentRef !== newProps.componentRef))) {
            if (currentProps && currentProps.componentRef) {
                currentProps.componentRef(null);
            }
            if (newProps.componentRef) {
                newProps.componentRef(this);
            }
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warn_1.warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warn_1.warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warn_1.warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    return BaseComponent;
}(React.Component));
exports.BaseComponent = BaseComponent;
/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            try {
                if (prototypeMethod) {
                    retVal = prototypeMethod.apply(this, arguments);
                }
                if (classMethod !== prototypeMethod) {
                    retVal = classMethod.apply(this, arguments);
                }
            }
            catch (e) {
                var errorMessage = "Exception in " + obj.className + "." + methodName + "(): " + (typeof e === 'string' ? e : e.stack);
                if (BaseComponent.onError) {
                    BaseComponent.onError(errorMessage, e);
                }
            }
            return retVal;
        };
    }
}
BaseComponent.onError = function (errorMessage) {
    console.error(errorMessage);
    throw errorMessage;
};
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() { return null; }
exports.nullRender = nullRender;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(70)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(73)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(22);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(12);
/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects
    };
}
exports.extractStyleParts = extractStyleParts;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Combine a set of styles together (but does not register css classes.)
 * @public
 */
function concatStyleSets() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var mergedSet = {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var currentSet = args_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    return mergedSet;
}
exports.concatStyleSets = concatStyleSets;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(8);
var localStorage_1 = __webpack_require__(96);
// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = dom_1.getDocument();
        var savedLanguage = localStorage_1.getItem('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
exports.getLanguage = getLanguage;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        localStorage_1.setItem('language', language);
    }
    _language = language;
}
exports.setLanguage = setLanguage;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
exports.shallowCompare = shallowCompare;
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
exports.assign = assign;
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) &&
                    (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
exports.filteredAssign = filteredAssign;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
exports.getId = getId;
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
    // tslint:disable-next-line:no-any
    theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum).map(function (p) {
        if (String(Number(p)) !== p) {
            return callback(p, theEnum[p]);
        }
    }).filter(function (v) { return !!v; }); // only return elements with values
}
exports.mapEnumByName = mapEnumByName;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use default.
     * @deprecated
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use image.
     * @deprecated
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType = exports.IconType || (exports.IconType = {}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var Image_types_1 = __webpack_require__(43);
var Styling_1 = __webpack_require__(3);
var stylesImport = __webpack_require__(120);
var styles = stylesImport;
exports.CoverStyleMap = (_a = {},
    _a[Image_types_1.ImageCoverStyle.landscape] = 'ms-Image-image--landscape ' + styles.imageIsLandscape,
    _a[Image_types_1.ImageCoverStyle.portrait] = 'ms-Image-image--portrait ' + styles.imageIsPortrait,
    _a);
exports.ImageFitMap = (_b = {},
    _b[Image_types_1.ImageFit.center] = 'ms-Image-image--center ' + styles.imageIsCenter,
    _b[Image_types_1.ImageFit.contain] = 'ms-Image-image--contain ' + styles.imageIsContain,
    _b[Image_types_1.ImageFit.cover] = 'ms-Image-image--cover ' + styles.imageIsCover,
    _b[Image_types_1.ImageFit.none] = 'ms-Image-image--none ' + styles.imageIsNone,
    _b);
var KEY_PREFIX = 'fabricImage';
var Image = /** @class */ (function (_super) {
    tslib_1.__extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = Image_types_1.ImageCoverStyle.portrait;
        _this.state = {
            loadState: Image_types_1.ImageLoadState.notLoaded
        };
        return _this;
    }
    Image.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: Image_types_1.ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === Image_types_1.ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    Image.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange
            && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    Image.prototype.render = function () {
        var imageProps = Utilities_1.getNativeProps(this.props, Utilities_1.imageProperties, ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var loaded = loadState === Image_types_1.ImageLoadState.loaded || (loadState === Image_types_1.ImageLoadState.notLoaded && this.props.shouldStartVisible);
        // If image dimensions aren't specified, the natural size of the image is used.
        return (React.createElement("div", { className: Utilities_1.css('ms-Image', styles.root, className, (_b = {},
                _b['ms-Image--maximizeFrame ' + styles.rootIsMaximizeFrame] = maximizeFrame,
                _b)), style: { width: width, height: height }, ref: this._resolveRef('_frameElement') },
            React.createElement("img", tslib_1.__assign({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: Utilities_1.css('ms-Image-image', styles.image, exports.CoverStyleMap[coverStyle], (imageFit !== undefined) && exports.ImageFitMap[imageFit], !loaded && 'is-notLoaded', loaded && 'is-loaded ' + styles.imageIsLoaded, shouldFadeIn && 'is-fadeIn', loadState === Image_types_1.ImageLoadState.error && 'is-error', loaded && shouldFadeIn && !shouldStartVisible && Styling_1.AnimationClassNames.fadeIn400, (_c = {},
                    _c['ms-Image-image--scaleWidth ' + styles.imageIsScaleWidth] = (imageFit === undefined && !!width && !height),
                    _c['ms-Image-image--scaleHeight ' + styles.imageIsScaleHeight] = (imageFit === undefined && !width && !!height),
                    _c['ms-Image-image--scaleWidthHeight ' + styles.imageIsScaleWidthHeight] = (imageFit === undefined && !!width && !!height),
                    _c)), ref: this._resolveRef('_imageElement'), src: src, alt: alt, role: role }))));
        var _b, _c;
    };
    Image.prototype._onImageLoaded = function (ev) {
        var _a = this.props, src = _a.src, onLoad = _a.onLoad;
        if (onLoad) {
            onLoad(ev);
        }
        this._computeCoverStyle(this.props);
        if (src) {
            this.setState({
                loadState: Image_types_1.ImageLoadState.loaded
            });
        }
    };
    Image.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === Image_types_1.ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = src && this._imageElement && (this._imageElement.naturalWidth > 0 && this._imageElement.naturalHeight > 0) ||
                (this._imageElement.complete && Image._svgRegex.test(src));
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: Image_types_1.ImageLoadState.loaded
                });
            }
        }
    };
    Image.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === Image_types_1.ImageFit.cover || imageFit === Image_types_1.ImageFit.contain) &&
            this.props.coverStyle === undefined &&
            this._imageElement) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.clientWidth / this._frameElement.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.naturalWidth / this._imageElement.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = Image_types_1.ImageCoverStyle.landscape;
            }
            else {
                this._coverStyle = Image_types_1.ImageCoverStyle.portrait;
            }
        }
    };
    Image.prototype._onImageError = function (ev) {
        if (this.props.onError) {
            this.props.onError(ev);
        }
        this.setState({
            loadState: Image_types_1.ImageLoadState.error
        });
    };
    Image.defaultProps = {
        shouldFadeIn: true
    };
    Image._svgRegex = /\.svg$/i;
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Image.prototype, "_onImageLoaded", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Image.prototype, "_onImageError", null);
    return Image;
}(Utilities_1.BaseComponent));
exports.Image = Image;
var _a, _b;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
})(ImageFit = exports.ImageFit || (exports.ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle = exports.ImageCoverStyle || (exports.ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use onLoadingStateChange instead
     * and rerender the Image with a difference src.
     * @deprecated
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState = exports.ImageLoadState || (exports.ImageLoadState = {}));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
exports.InjectionMode = index_1.InjectionMode;
exports.Stylesheet = index_1.Stylesheet;
exports.concatStyleSets = index_1.concatStyleSets;
exports.fontFace = index_1.fontFace;
exports.keyframes = index_1.keyframes;
exports.mergeStyleSets = index_1.mergeStyleSets;
exports.mergeStyles = index_1.mergeStyles;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var warn_1 = __webpack_require__(19);
var GlobalSettings_1 = __webpack_require__(21);
var index_1 = __webpack_require__(6);
var ICON_SETTING_NAME = 'icons';
var _iconSettings = GlobalSettings_1.GlobalSettings.getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true
    },
    __remapped: {}
});
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = tslib_1.__assign({}, iconSubset, { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? tslib_1.__assign({}, _iconSettings.__options, options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = iconName.toLowerCase();
            if (_iconSettings[normalizedIconName]) {
                if (!options.disableWarnings) {
                    warn_1.warn("Icon '" + iconName + " being re-registered. Ignoring duplicate registration.");
                }
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset
                };
            }
        }
    }
}
exports.registerIcons = registerIcons;
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[iconName.toLowerCase()] = mappedToName.toLowerCase();
}
exports.registerIconAlias = registerIconAlias;
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? name.toLowerCase() : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset.fontFace && !subset.isRegistered) {
                // Register font face for given icons.
                index_1.fontFace(subset.fontFace);
                // Generate a base class name for the given font.
                subset.className = index_1.mergeStyles(subset.style, {
                    fontFamily: subset.fontFace.fontFamily,
                    fontWeight: subset.fontFace.fontWeight || 'normal',
                    fontStyle: subset.fontFace.fontStyle || 'normal'
                }).toString();
                subset.isRegistered = true;
            }
        }
        else {
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                warn_1.warn("The icon \"" + name + "\" was used but not registered. See http://aka.ms/fabric-icon-usage for more information.");
            }
        }
    }
    return icon;
}
exports.getIcon = getIcon;
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = tslib_1.__assign({}, _iconSettings.__options, options);
}
exports.setIconOptions = setIconOptions;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var fonts_1 = __webpack_require__(47);
var language_1 = __webpack_require__(39);
// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
exports.DefaultFontStyles = fonts_1.createFontStyles(language_1.getLanguage());
function _registerFontFace(fontFamily, url, fontWeight) {
    fontFamily = "'" + fontFamily + "'";
    index_1.fontFace({
        fontFamily: fontFamily,
        src: "url('" + url + ".woff2') format('woff2')," +
            ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', fonts_1.FontWeights.light);
    _registerFontFace(fontFamily, urlBase + '-semilight', fonts_1.FontWeights.semilight);
    _registerFontFace(fontFamily, urlBase + '-regular', fonts_1.FontWeights.regular);
    _registerFontFace(fontFamily, urlBase + '-semibold', fonts_1.FontWeights.semibold);
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.WestEuropean, 'segoeui-westeuropean');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", fonts_1.FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", fonts_1.FontWeights.semibold);
    }
}
exports.registerDefaultFontFaces = registerDefaultFontFaces;
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable-next-line:no-string-literal no-any
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return (fabricConfig && fabricConfig.fontBaseUrl !== undefined) ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
})(LocalizedFontNames = exports.LocalizedFontNames || (exports.LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
})(LocalizedFontFamilies = exports.LocalizedFontFamilies || (exports.LocalizedFontFamilies = {}));
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    'ar': LocalizedFontFamilies.Arabic,
    'bg': LocalizedFontFamilies.Cyrillic,
    'cs': LocalizedFontFamilies.EastEuropean,
    'el': LocalizedFontFamilies.Greek,
    'et': LocalizedFontFamilies.EastEuropean,
    'he': LocalizedFontFamilies.Hebrew,
    'hi': LocalizedFontFamilies.Hindi,
    'hr': LocalizedFontFamilies.EastEuropean,
    'hu': LocalizedFontFamilies.EastEuropean,
    'ja': LocalizedFontFamilies.Japanese,
    'kk': LocalizedFontFamilies.EastEuropean,
    'ko': LocalizedFontFamilies.Korean,
    'lt': LocalizedFontFamilies.EastEuropean,
    'lv': LocalizedFontFamilies.EastEuropean,
    'pl': LocalizedFontFamilies.EastEuropean,
    'ru': LocalizedFontFamilies.Cyrillic,
    'sk': LocalizedFontFamilies.EastEuropean,
    'sr-latn': LocalizedFontFamilies.EastEuropean,
    'th': LocalizedFontFamilies.Thai,
    'tr': LocalizedFontFamilies.EastEuropean,
    'uk': LocalizedFontFamilies.Cyrillic,
    'vi': LocalizedFontFamilies.Vietnamese,
    'zh-hans': LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': LocalizedFontFamilies.ChineseTraditional,
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes = exports.FontSizes || (exports.FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights = exports.FontWeights || (exports.FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes = exports.IconFontSizes || (exports.IconFontSizes = {}));
function createFontStyles(localeCode) {
    return {
        tiny: _createFont(FontSizes.mini, FontWeights.semibold, localeCode),
        xSmall: _createFont(FontSizes.xSmall, FontWeights.regular, localeCode),
        small: _createFont(FontSizes.small, FontWeights.regular, localeCode),
        smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular, localeCode),
        medium: _createFont(FontSizes.medium, FontWeights.regular, localeCode),
        mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular, localeCode),
        large: _createFont(FontSizes.large, FontWeights.semilight, localeCode),
        xLarge: _createFont(FontSizes.xLarge, FontWeights.light, localeCode),
        xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light, localeCode),
        superLarge: _createFont(FontSizes.superLarge, FontWeights.light, localeCode),
        mega: _createFont(FontSizes.mega, FontWeights.light, localeCode)
    };
}
exports.createFontStyles = createFontStyles;
function _getFontFamily(language) {
    var fontFamily = LocalizedFontFamilies.WestEuropean;
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // tslint:disable-next-line:no-any
            fontFamily = LanguageToFontMap[lang];
            break;
        }
    }
    return fontFamily + ", " + FontFamilyFallbacks;
}
function _createFont(size, weight, localeCode) {
    return {
        fontFamily: _getFontFamily(localeCode),
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalHint_1 = __webpack_require__(49);
exports.DirectionalHint = DirectionalHint_1.DirectionalHint;
var ContextualMenuItemType;
(function (ContextualMenuItemType) {
    ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
    ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
    ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
    ContextualMenuItemType[ContextualMenuItemType["Section"] = 3] = "Section";
})(ContextualMenuItemType = exports.ContextualMenuItemType || (exports.ContextualMenuItemType = {}));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalHint;
(function (DirectionalHint) {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
})(DirectionalHint = exports.DirectionalHint || (exports.DirectionalHint = {}));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(125), exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection = exports.FocusZoneDirection || (exports.FocusZoneDirection = {}));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
exports.getDividerClassNames = Utilities_1.memoizeFunction(function (theme) {
    return Styling_1.mergeStyleSets({
        wrapper: {
            display: 'inline-flex',
            height: '100%',
            alignItems: 'center'
        },
        divider: {
            width: 1,
            height: '100%',
            backgroundColor: theme.palette.neutralTertiaryAlt
        }
    });
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge = exports.RectangleEdge || (exports.RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position = exports.Position || (exports.Position = {}));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(138), exports);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementType;
(function (ElementType) {
    /** <button> element. */
    ElementType[ElementType["button"] = 0] = "button";
    /** <a> element. */
    ElementType[ElementType["anchor"] = 1] = "anchor";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["normal"] = 0] = "normal";
    ButtonType[ButtonType["primary"] = 1] = "primary";
    ButtonType[ButtonType["hero"] = 2] = "hero";
    ButtonType[ButtonType["compound"] = 3] = "compound";
    ButtonType[ButtonType["command"] = 4] = "command";
    ButtonType[ButtonType["icon"] = 5] = "icon";
    ButtonType[ButtonType["default"] = 6] = "default";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
function standardStyles(theme) {
    var s = theme.semanticColors;
    var buttonBackground = s.buttonBackground;
    var buttonBackgroundChecked = s.buttonBackgroundChecked;
    var buttonBackgroundHovered = s.buttonBackgroundHovered;
    var buttonBackgroundCheckedHovered = s.buttonBackgroundCheckedHovered;
    var buttonText = s.buttonText;
    var buttonTextHovered = s.buttonTextHovered;
    var buttonTextChecked = s.buttonTextChecked;
    var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
    return {
        root: {
            backgroundColor: buttonBackground,
            color: buttonText
        },
        rootHovered: {
            backgroundColor: buttonBackgroundHovered,
            color: buttonTextHovered
        },
        rootPressed: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootExpanded: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootChecked: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: buttonTextCheckedHovered
        },
        // Split button styles
        splitButtonContainer: {},
        splitButtonMenuButton: {
            color: theme.palette.white,
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight
                }
            },
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter,
                }
            }
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themePrimary,
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralLight,
        },
        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        },
    };
}
exports.standardStyles = standardStyles;
function primaryStyles(theme) {
    return {
        root: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        rootHovered: {
            backgroundColor: theme.palette.themeDarkAlt,
            color: theme.palette.white,
            selectors: (_b = {},
                _b[Styling_1.HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _b)
        },
        rootPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white,
            selectors: (_c = {},
                _c[Styling_1.HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _c)
        },
        rootExpanded: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootChecked: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white,
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        rootDisabled: {
            selectors: (_d = {},
                _d[Styling_1.HighContrastSelector] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window'
                },
                _d),
        },
        // Split button styles
        splitButtonContainer: {},
        splitButtonDivider: {
            backgroundColor: theme.palette.themeLighter
        },
        splitButtonMenuButton: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.themeDark
                }
            },
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter,
                }
            }
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themeDark,
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.themeDark,
        },
        splitButtonMenuIcon: {
            color: theme.palette.white
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    var _a, _b, _c, _d;
}
exports.primaryStyles = primaryStyles;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(7);
var Utilities_1 = __webpack_require__(1);
var CompoundButton_styles_1 = __webpack_require__(157);
var CompoundButton = /** @class */ (function (_super) {
    tslib_1.__extends(CompoundButton, _super);
    function CompoundButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    CompoundButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: primary ? 'ms-Button--compoundPrimary' : 'ms-Button--compound', styles: CompoundButton_styles_1.getStyles(theme, styles, primary) })));
    };
    CompoundButton = tslib_1.__decorate([
        Utilities_1.customizable('CompoundButton', ['theme'])
    ], CompoundButton);
    return CompoundButton;
}(Utilities_1.BaseComponent));
exports.CompoundButton = CompoundButton;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(7);
var Utilities_1 = __webpack_require__(1);
var IconButton_styles_1 = __webpack_require__(158);
var IconButton = /** @class */ (function (_super) {
    tslib_1.__extends(IconButton, _super);
    function IconButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: 'ms-Button--icon', styles: IconButton_styles_1.getStyles(theme, styles), onRenderText: Utilities_1.nullRender, onRenderDescription: Utilities_1.nullRender })));
    };
    IconButton = tslib_1.__decorate([
        Utilities_1.customizable('IconButton', ['theme'])
    ], IconButton);
    return IconButton;
}(Utilities_1.BaseComponent));
exports.IconButton = IconButton;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var DefaultButton_1 = __webpack_require__(17);
var PrimaryButton = /** @class */ (function (_super) {
    tslib_1.__extends(PrimaryButton, _super);
    function PrimaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    PrimaryButton.prototype.render = function () {
        return (React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, this.props, { primary: true, onRenderDescription: Utilities_1.nullRender })));
    };
    PrimaryButton = tslib_1.__decorate([
        Utilities_1.customizable('PrimaryButton', ['theme'])
    ], PrimaryButton);
    return PrimaryButton;
}(Utilities_1.BaseComponent));
exports.PrimaryButton = PrimaryButton;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActionButton_1 = __webpack_require__(28);
exports.CommandButton = ActionButton_1.ActionButton;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PanelType;
(function (PanelType) {
    /**
     * Renders the panel in 'small' mode, anchored to the far side (right in LTR mode), and has a fluid width.
     * Only used on Small screen breakpoints.
     * Small: 320-479px width (full screen), 16px Left/Right padding
     * Medium: <unused>
     * Large: <unused>
     * XLarge: <unused>
     * XXLarge: <unused>
     */
    PanelType[PanelType["smallFluid"] = 0] = "smallFluid";
    /**
     * Renders the panel in 'small' mode, anchored to the far side (right in LTR mode), and has a fixed width.
     * Small: 272px width, 16px Left/Right padding
     * Medium: 340px width, 16px Left/Right padding
     * Large: 340px width, 32px Left/Right padding
     * XLarge: 340px width, 32px Left/Right padding
     * XXLarge: 340px width, 40px Left/Right padding
     */
    PanelType[PanelType["smallFixedFar"] = 1] = "smallFixedFar";
    /**
     * Renders the panel in 'small' mode, anchored to the near side (left in LTR mode), and has a fixed width.
     * Small: 272px width, 16px Left/Right padding
     * Medium: 272px width, 16px Left/Right padding
     * Large: 272px width, 32px Left/Right padding
     * XLarge: 272px width, 32px Left/Right padding
     * XXLarge: 272px width, 32px Left/Right padding
     */
    PanelType[PanelType["smallFixedNear"] = 2] = "smallFixedNear";
    /**
     * Renders the panel in 'medium' mode, anchored to the far side (right in LTR mode).
     * Small: <adapts to smallFluid>
     * Medium: <adapts to smallFixedFar>
     * Large: 48px fixed left margin, 32px Left/Right padding
     * XLarge: 644px width, 32px Left/Right padding
     * XXLarge: 643px width, 40px Left/Right padding
     */
    PanelType[PanelType["medium"] = 3] = "medium";
    /**
     * Renders the panel in 'large' mode, anchored to the far side (right in LTR mode), and is fluid at XXX-Large breakpoint.
     * Small: <adapts to smallFluid>
     * Medium:  <adapts to smallFixedFar>
     * Large: <adapts to medium>
     * XLarge: 48px fixed left margin, 32px Left/Right padding
     * XXLarge: 48px fixed left margin, 32px Left/Right padding
     * XXXLarge: 48px fixed left margin, (no redlines for padding, assuming previous breakpoint)
     */
    PanelType[PanelType["large"] = 4] = "large";
    /**
     * Renders the panel in 'large' mode, anchored to the far side (right in LTR mode), and is fixed at XXX-Large breakpoint.
     * Small: <adapts to smallFluid>
     * Medium:  <adapts to smallFixedFar>
     * Large: <adapts to medium>
     * XLarge: 48px fixed left margin, 32px Left/Right padding
     * XXLarge: 48px fixed left margin, 32px Left/Right padding
     * XXXLarge: 940px width, (no redlines for padding, assuming previous breakpoint)
     */
    PanelType[PanelType["largeFixed"] = 5] = "largeFixed";
    /**
     * Renders the panel in 'extra large' mode, anchored to the far side (right in LTR mode).
     * Small: <adapts to smallFluid>
     * Medium: <adapts to smallFixedFar>
     * Large: <adapts to medium>
     * XLarge: <adapts to large>
     * XXLarge: 176px fixed left margin, 40px Left/Right padding
     * XXXLarge: 176px fixed left margin, 40px Left/Right padding
     */
    PanelType[PanelType["extraLarge"] = 6] = "extraLarge";
    /**
     * Renders the panel in 'custom' mode using customWidth, anchored to the far side (right in LTR mode).
     * Small: <adapts to smallFluid>
     * Medium: <adapts to smallFixedFar>
     * Large: 48px fixed left margin, 32px Left/Right padding
     * XLarge: 644px width, 32px Left/Right padding
     * XXLarge: 643px width, 40px Left/Right padding
     */
    PanelType[PanelType["custom"] = 7] = "custom";
})(PanelType = exports.PanelType || (exports.PanelType = {}));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(31);
var MovieDB_1 = __webpack_require__(63);
var icons_1 = __webpack_require__(194);
__webpack_require__(209);
icons_1.initializeIcons();
/* ReactDOM.render(
    <MovieDB compiler="TypeScript" framework="React"/>,
    document.getElementById("content")
); */
ReactDOM.render(React.createElement(MovieDB_1.MovieDB, { compiler: "TypeScript", framework: "React" }), document.getElementById("content"));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var Button_1 = __webpack_require__(11);
var Utilities_1 = __webpack_require__(1);
var SearchBox_1 = __webpack_require__(163);
var Nav_1 = __webpack_require__(168);
var Panel_1 = __webpack_require__(172);
var MovieCard_1 = __webpack_require__(182);
__webpack_require__(192);
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var MovieDB = /** @class */ (function (_super) {
    __extends(MovieDB, _super);
    function MovieDB(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            showNavigation: false
        };
        return _this;
    }
    MovieDB.prototype.onSearch = function (value) {
        //TODO search movie
    };
    MovieDB.prototype.goToFavoritesPage = function () {
    };
    MovieDB.prototype.renderNavigation = function () {
        return React.createElement(Nav_1.Nav, { groups: [
                {
                    links: [
                        {
                            name: 'Home',
                            url: 'http://example.com',
                            links: [{
                                    name: 'Activity',
                                    url: 'http://msn.com',
                                    key: 'key1'
                                },
                                {
                                    name: 'News',
                                    url: 'http://msn.com',
                                    key: 'key2'
                                }],
                            isExpanded: true
                        },
                        { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                        { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                        { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                        { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
                        {
                            name: 'Favoriten',
                            url: 'http://cnn.com',
                            onClick: this.goToFavoritesPage,
                            icon: 'Edit',
                            key: 'key8'
                        }
                    ]
                }
            ], expandedStateText: 'expanded', collapsedStateText: 'collapsed', selectedKey: 'key3' });
    };
    MovieDB.prototype.renderPage = function () {
        var cards = [];
        for (var i = 0; i < 100; i++) {
            cards.push(React.createElement(MovieCard_1.MovieCard, { key: 'MovieCard-' + i }));
        }
        return cards;
    };
    MovieDB.prototype.onOpenCloseNavigation = function () {
        this.setState({
            showNavigation: !this.state.showNavigation
        });
    };
    MovieDB.prototype.closeNavigation = function () {
        this.setState({
            showNavigation: false
        });
    };
    MovieDB.prototype.render = function () {
        return React.createElement("div", { className: "MovieDB" },
            React.createElement(Panel_1.Panel, { isOpen: this.state.showNavigation, type: Panel_1.PanelType.smallFixedNear, onDismiss: this.closeNavigation }, this.renderNavigation()),
            React.createElement("header", null,
                React.createElement(Button_1.IconButton, { iconProps: { iconName: 'GlobalNavButton', styles: { root: 'MovieDB-Menu-Icon' } }, className: "MovieDB-Menu", onClick: this.onOpenCloseNavigation }),
                React.createElement("h1", { className: "MovieDB-Title" }, "Movie DB"),
                React.createElement(SearchBox_1.SearchBox, { className: "MovieDB-SearchBox", onSearch: this.onSearch })),
            React.createElement("main", null, this.renderPage()));
    };
    __decorate([
        Utilities_1.autobind
    ], MovieDB.prototype, "onSearch", null);
    __decorate([
        Utilities_1.autobind
    ], MovieDB.prototype, "goToFavoritesPage", null);
    __decorate([
        Utilities_1.autobind
    ], MovieDB.prototype, "onOpenCloseNavigation", null);
    __decorate([
        Utilities_1.autobind
    ], MovieDB.prototype, "closeNavigation", null);
    return MovieDB;
}(React.Component));
exports.MovieDB = MovieDB;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(154), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(159), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(57), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(161), exports);
tslib_1.__exportStar(__webpack_require__(59), exports);
tslib_1.__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(66), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(69), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(75), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(76), exports);
tslib_1.__exportStar(__webpack_require__(77), exports);
tslib_1.__exportStar(__webpack_require__(78), exports);
tslib_1.__exportStar(__webpack_require__(79), exports);
tslib_1.__exportStar(__webpack_require__(80), exports);
tslib_1.__exportStar(__webpack_require__(81), exports);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(92), exports);
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(93), exports);
tslib_1.__exportStar(__webpack_require__(94), exports);
tslib_1.__exportStar(__webpack_require__(95), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(97), exports);
tslib_1.__exportStar(__webpack_require__(98), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(99), exports);
tslib_1.__exportStar(__webpack_require__(100), exports);
tslib_1.__exportStar(__webpack_require__(101), exports);
tslib_1.__exportStar(__webpack_require__(102), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(104), exports);
tslib_1.__exportStar(__webpack_require__(105), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventGroup_1 = __webpack_require__(13);
var scroll_1 = __webpack_require__(33);
var dom_1 = __webpack_require__(8);
var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_1.EventGroup(this);
        this._scrollableParent = scroll_1.findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = dom_1.getRect(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < (scrollRectTop + SCROLL_GUTTER_HEIGHT)) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());
exports.AutoScroll = AutoScroll;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(5);
load_themed_styles_1.loadStyles([{ "rawString": ".scrollDisabled_2d80166b{overflow:hidden !important}\n" }]);
exports.scrollDisabled = "scrollDisabled_2d80166b";


/***/ }),
/* 68 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var PropTypes = __webpack_require__(35);
var BaseComponent_1 = __webpack_require__(34);
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator. This enables injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop, which should be a json map which contains 1 or more
 * name/value pairs representing injectable props.
 *
 * @public
 */
var Customizer = /** @class */ (function (_super) {
    tslib_1.__extends(Customizer, _super);
    // tslint:disable-next-line:no-any
    function Customizer(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getCustomizations(props, context);
        return _this;
    }
    Customizer.prototype.getChildContext = function () {
        return this.state;
    };
    // tslint:disable-next-line:no-any
    Customizer.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this.setState(this._getCustomizations(newProps, newContext));
    };
    Customizer.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    Customizer.prototype._getCustomizations = function (props, context) {
        var _a = props.settings, settings = _a === void 0 ? {} : _a, _b = props.scopedSettings, scopedSettings = _b === void 0 ? {} : _b;
        var _c = context.customizations, customizations = _c === void 0 ? { settings: {}, scopedSettings: {} } : _c;
        var newScopedSettings = tslib_1.__assign({}, scopedSettings);
        for (var name_1 in customizations.scopedSettings) {
            if (customizations.scopedSettings.hasOwnProperty(name_1)) {
                newScopedSettings[name_1] = tslib_1.__assign({}, scopedSettings[name_1], customizations.scopedSettings[name_1]);
            }
        }
        return {
            customizations: {
                settings: tslib_1.__assign({}, settings, customizations.settings),
                scopedSettings: newScopedSettings
            }
        };
    };
    Customizer.contextTypes = {
        customizations: PropTypes.object
    };
    Customizer.childContextTypes = Customizer.contextTypes;
    return Customizer;
}(BaseComponent_1.BaseComponent));
exports.Customizer = Customizer;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(22);
var invariant = __webpack_require__(23);
var warning = __webpack_require__(36);
var assign = __webpack_require__(71);

var ReactPropTypesSecret = __webpack_require__(24);
var checkPropTypes = __webpack_require__(72);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(23);
  var warning = __webpack_require__(36);
  var ReactPropTypesSecret = __webpack_require__(24);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(22);
var invariant = __webpack_require__(23);
var ReactPropTypesSecret = __webpack_require__(24);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 */
var DelayedRender = /** @class */ (function (_super) {
    tslib_1.__extends(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? React.Children.only(this.props.children) : null;
    };
    // tslint:disable-next-line:typedef
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(React.Component));
exports.DelayedRender = DelayedRender;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (Number.isInteger(FabricPerformance._timeoutId)) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());
exports.FabricPerformance = FabricPerformance;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Const enum for keycodes.
 *
 * @public
 */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["a"] = 65] = "a";
    KeyCodes[KeyCodes["c"] = 67] = "c";
    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["del"] = 46] = "del";
    KeyCodes[KeyCodes["down"] = 40] = "down";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["left"] = 37] = "left";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["right"] = 39] = "right";
    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["up"] = 38] = "up";
})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rectangle helper class.
 *
 * @public
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
exports.findIndex = findIndex;
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
exports.find = find;
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
exports.createArray = createArray;
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns {any[][]} - A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
exports.toMatrix = toMatrix;
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
exports.removeIndex = removeIndex;
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
exports.replaceElement = replaceElement;
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
exports.addElementAtIndex = addElementAtIndex;
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
exports.flatten = flatten;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
exports.assertNever = assertNever;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 */
// tslint:disable-next-line:no-any
function autobind(target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}
exports.autobind = autobind;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 */
function classNamesFunction() {
    // TODO: memoize.
    return function (getStyles, styleProps) { return index_1.mergeStyleSets(getStyles && getStyles(styleProps)); };
}
exports.classNamesFunction = classNamesFunction;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styleToClassName_1 = __webpack_require__(14);
var extractStyleParts_1 = __webpack_require__(37);
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = extractStyleParts_1.extractStyleParts(args), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(styleToClassName_1.styleToClassName(objects));
    }
    return classes.join(' ');
}
exports.mergeStyles = mergeStyles;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function kebabRules(rulePairs, index) {
    rulePairs[index] = rulePairs[index].replace(/([A-Z])/g, '-$1').toLowerCase();
}
exports.kebabRules = kebabRules;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getVendorSettings_1 = __webpack_require__(85);
var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = getVendorSettings_1.getVendorSettings();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
exports.prefixRules = prefixRules;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
exports.getVendorSettings = getVendorSettings;
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
exports.setVendorSettings = setVendorSettings;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var unit = (NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1) ? 'px' : '';
        rulePairs[index + 1] = "" + value + unit;
    }
}
exports.provideUnits = provideUnits;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _nameReplacements = {
    'left': 'right',
    'right': 'left'
};
var _valueReplacements = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var NO_FLIP = '@noflip';
var _rtl = getRTL();
function setRTL(isRTL) {
    _rtl = isRTL;
}
exports.setRTL = setRTL;
function getRTL() {
    if (_rtl === undefined) {
        _rtl = (typeof document !== 'undefined' &&
            !!document.documentElement &&
            document.documentElement.getAttribute('dir') === 'rtl');
    }
    return _rtl;
}
exports.getRTL = getRTL;
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        var value = rulePairs[index + 1];
        if (value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf('left') >= 0) {
            rulePairs[index] = name_1.replace('left', 'right');
        }
        else if (name_1.indexOf('right') >= 0) {
            rulePairs[index] = name_1.replace('right', 'left');
        }
        else if (String(value).indexOf('left') >= 0) {
            rulePairs[index + 1] = value.replace('left', 'right');
        }
        else if (String(value).indexOf('right') >= 0) {
            rulePairs[index + 1] = value.replace('right', 'left');
        }
        else if (_nameReplacements[name_1]) {
            rulePairs[index] = _nameReplacements[name_1];
        }
        else if (_valueReplacements[value]) {
            rulePairs[index + 1] = _valueReplacements[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
exports.rtlifyRules = rtlifyRules;
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extractStyleParts_1 = __webpack_require__(37);
var concatStyleSets_1 = __webpack_require__(38);
var styleToClassName_1 = __webpack_require__(14);
/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
function mergeStyleSets() {
    var cssSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cssSets[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var classNameSet = {};
    var classMap = {};
    var cssSet = cssSets[0];
    if (cssSet) {
        if (cssSets.length > 1) {
            cssSet = concatStyleSets_1.concatStyleSets.apply(void 0, cssSets);
        }
        var registrations = [];
        for (var prop in cssSet) {
            if (cssSet.hasOwnProperty(prop)) {
                var args = cssSet[prop];
                // tslint:disable-next-line:no-any
                var _a = extractStyleParts_1.extractStyleParts(args), classes = _a.classes, objects = _a.objects;
                var registration = styleToClassName_1.styleToRegistration({ displayName: prop }, objects);
                registrations.push(registration);
                if (registration) {
                    classMap[prop] = registration.className;
                    classNameSet[prop] = classes.concat([registration.className]).join(' ');
                }
            }
        }
        for (var _b = 0, registrations_1 = registrations; _b < registrations_1.length; _b++) {
            var registration = registrations_1[_b];
            if (registration) {
                styleToClassName_1.applyRegistration(registration, classMap);
            }
        }
    }
    return classNameSet;
}
exports.mergeStyleSets = mergeStyleSets;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(12);
var styleToClassName_1 = __webpack_require__(14);
/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    Stylesheet_1.Stylesheet.getInstance().insertRule("@font-face{" + styleToClassName_1.serializeRuleEntries(font) + "}");
}
exports.fontFace = fontFace;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(12);
var styleToClassName_1 = __webpack_require__(14);
/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', styleToClassName_1.serializeRuleEntries(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}");
    // If needed later, we would add vendor prefixes here.
    return name;
}
exports.keyframes = keyframes;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if ((arg.hasOwnProperty('toString') && typeof (arg.toString) === 'function')) {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
exports.css = css;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var PropTypes = __webpack_require__(35);
var Customizations_1 = __webpack_require__(20);
function customizable(scope, fields
    // tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
        // tslint:disable-next-line:no-any
        ComposedComponent
        // tslint:disable-next-line:no-any
    ) {
        return _a = /** @class */ (function (_super) {
                tslib_1.__extends(ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_1.Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_1.Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var defaultProps = Customizations_1.Customizations.getSettings(fields, scope, this.context.customizations);
                    return (
                    // tslint:disable-next-line:no-any
                    React.createElement(ComposedComponent, tslib_1.__assign({}, defaultProps, this.props)));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(React.Component)),
            _a.displayName = 'Customized' + scope,
            _a.contextTypes = {
                customizations: PropTypes.object
            },
            _a;
        var _a;
    };
}
exports.customizable = customizable;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-string-literal */
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(8);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
}
exports.getFirstFocusable = getFirstFocusable;
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
}
exports.getLastFocusable = getLastFocusable;
/**
 * Gets the last tabbable element.
 *
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones, false, true);
}
exports.getLastTabbable = getLastTabbable;
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        element.focus();
        return true;
    }
    return false;
}
exports.focusFirstChild = focusFirstChild;
/**
 * Traverse to find the previous element.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement ||
        (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch && ((tabbable && (isElementTabbable(childMatch, true))) || !tabbable)) {
            return childMatch;
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
exports.getPreviousElement = getPreviousElement;
/**
 * Traverse to find the next focusable element.
 *
 * @public
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot) {
    if (!currentElement ||
        (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot);
    }
    return null;
}
exports.getNextElement = getNextElement;
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
exports.isElementVisible = isElementVisible;
/**
 * Determines if an element can receive focus.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            (element.tagName === 'BUTTON') ||
            (element.tagName === 'INPUT') ||
            (element.tagName === 'TEXTAREA') ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet ||
            element.getAttribute && element.getAttribute('role') === 'button');
    return checkTabIndex ? (tabIndex !== -1) && result : result;
}
exports.isElementTabbable = isElementTabbable;
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
exports.isElementFocusZone = isElementFocusZone;
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
exports.isElementFocusSubZone = isElementFocusSubZone;
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = dom_1.getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && dom_1.elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
exports.doesElementContainFocus = doesElementContainFocus;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
// tslint:disable-next-line:no-any
function hoistMethods(destination, source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () { source[methodName].apply(source, arguments); };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
exports.hoistMethods = hoistMethods;
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames
        .forEach(function (methodName) { return delete source[methodName]; });
}
exports.unhoistMethods = unhoistMethods;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    if (UNSUPPORTED_TEXT_REGEX.test(displayName)) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
exports.getInitials = getInitials;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.localStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        window.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
exports.getDistanceBetweenPoints = getDistanceBetweenPoints;
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
exports.fitContentToBounds = fitContentToBounds;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = (typeof WeakMap === 'undefined') ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
exports.setMemoizeWeakMap = setMemoizeWeakMap;
/**
 * Memoize decorator to be used on class methods. Note that the "this" reference
 * will be inaccessible within a memoized method, given that a cached method's this
 * would not be instance specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
exports.memoize = memoize;
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    var rootNode;
    var cacheSize = 0;
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
exports.memoizeFunction = memoizeFunction;
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
exports.hasHorizontalOverflow = hasHorizontalOverflow;
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
exports.hasVerticalOverflow = hasVerticalOverflow;
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
exports.hasOverflow = hasOverflow;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(40);
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
exports.baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
exports.baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
exports.htmlElementProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
exports.anchorProperties = exports.htmlElementProperties.concat([
    'href',
    'target'
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
exports.buttonProperties = exports.htmlElementProperties.concat([
    'disabled'
]);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
exports.divProperties = exports.htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
exports.inputProperties = exports.buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
exports.textAreaProperties = exports.buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
exports.imageProperties = exports.divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return object_1.filteredAssign(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && ((propName.indexOf('data-') === 0) ||
            (propName.indexOf('aria-') === 0) ||
            (allowedPropNames.indexOf(propName) >= 0)));
    }, {}, props);
}
exports.getNativeProps = getNativeProps;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
exports.getResourceUrl = getResourceUrl;
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
exports.setBaseUrl = setBaseUrl;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(8);
var sessionStorage_1 = __webpack_require__(103);
var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_1.getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = dom_1.getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        }
    }
    return !!_isRTL;
}
exports.getRTL = getRTL;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_1.setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
}
exports.setRTL = setRTL;
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === 37 /* left */) {
            key = 39 /* right */;
        }
        else if (key === 39 /* right */) {
            key = 37 /* left */;
        }
    }
    return key;
}
exports.getRTLSafeKeyCode = getRTLSafeKeyCode;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return (s.replace(FORMAT_REGEX, replace_func));
}
exports.format = format;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var index_1 = __webpack_require__(6);
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets. Example:
 *
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   {
 *     getStyles: props => ({ root: { background: 'red' }})
 *   }
 * );
 * ```
 *
 */
function styled(Component, getBaseStyles, getProps) {
    return function (componentProps) {
        var getStyles = function (styleProps) { return index_1.concatStyleSets(getBaseStyles && getBaseStyles(styleProps), componentProps && componentProps.getStyles && componentProps.getStyles(styleProps)); };
        var additionalProps = getProps ? getProps(componentProps) : {};
        return (React.createElement(Component, tslib_1.__assign({}, additionalProps, componentProps, { getStyles: getStyles })));
    };
}
exports.styled = styled;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(107), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable */
var React = __webpack_require__(2);
/* tslint:enable */
var Icon_types_1 = __webpack_require__(41);
var Image_1 = __webpack_require__(42);
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var Icon_classNames_1 = __webpack_require__(121);
exports.Icon = function (props) {
    var ariaLabel = props.ariaLabel, className = props.className, styles = props.styles, iconName = props.iconName;
    var classNames = Icon_classNames_1.getClassNames(styles);
    if (props.iconType === Icon_types_1.IconType.image || props.iconType === Icon_types_1.IconType.Image) {
        var containerClassName = Utilities_1.css('ms-Icon', 'ms-Icon-imageContainer', classNames.root, classNames.imageContainer, className);
        return (React.createElement("div", { className: Utilities_1.css(containerClassName, classNames.root) },
            React.createElement(Image_1.Image, tslib_1.__assign({}, props.imageProps))));
    }
    else if (typeof iconName === 'string' && iconName.length === 0) {
        return (React.createElement("i", tslib_1.__assign({ "aria-label": ariaLabel }, (ariaLabel ? {} : {
            role: 'presentation',
            'aria-hidden': true
        }), Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: Utilities_1.css('ms-Icon ms-Icon-placeHolder', classNames.rootHasPlaceHolder, props.className) })));
    }
    else {
        var iconDefinition = Styling_1.getIcon(iconName) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return (React.createElement("i", tslib_1.__assign({ "aria-label": ariaLabel }, (ariaLabel ? {} : {
            role: 'presentation',
            'aria-hidden': true,
            'data-icon-name': iconName,
        }), Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: Utilities_1.css('ms-Icon', // dangerous?
            iconDefinition.subset.className, classNames.root, props.className) }), iconDefinition.code));
    }
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationClassNames_1 = __webpack_require__(109);
exports.AnimationClassNames = AnimationClassNames_1.AnimationClassNames;
var FontClassNames_1 = __webpack_require__(118);
exports.FontClassNames = FontClassNames_1.FontClassNames;
var ColorClassNames_1 = __webpack_require__(119);
exports.ColorClassNames = ColorClassNames_1.ColorClassNames;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(25);
var index_2 = __webpack_require__(16);
exports.AnimationClassNames = index_1.buildClassMap(index_2.AnimationStyles);


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MergeStyles_1 = __webpack_require__(44);
/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // tslint:disable-next-line:no-any
                        className_1 = MergeStyles_1.mergeStyles(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}
exports.buildClassMap = buildClassMap;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var icons_1 = __webpack_require__(45);
var defaultIconStyles = {
    display: 'inline-block'
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = icons_1.getIcon(name);
    if (icon) {
        className = index_1.mergeStyles(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\""
                }
            }
        });
    }
    return className;
}
exports.getIconClassName = getIconClassName;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = index_1.keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = index_1.keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = index_1.keyframes({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = index_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = index_1.keyframes({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = index_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = index_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = index_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
exports.AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
exports.AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return index_1.keyframes({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return index_1.keyframes({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return index_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return index_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param color - The color for the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @returns The style object.
 */
function getFocusStyle(theme, inset, position) {
    if (inset === void 0) { inset = 0; }
    if (position === void 0) { position = 'relative'; }
    return {
        outline: 'transparent',
        position: position,
        selectors: {
            '::-moz-focus-inner': {
                border: '0'
            },
            '.ms-Fabric.is-focusVisible &:focus:after': {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: '1px solid ' + theme.palette.white,
                outline: '1px solid ' + theme.palette.neutralSecondary,
                zIndex: 1
            }
        }
    };
}
exports.getFocusStyle = getFocusStyle;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Customizations_1 = __webpack_require__(20);
var DefaultFontStyles_1 = __webpack_require__(46);
var DefaultPalette_1 = __webpack_require__(26);
var load_themed_styles_1 = __webpack_require__(5);
var _theme = {
    palette: DefaultPalette_1.DefaultPalette,
    semanticColors: _makeSemanticColorsFromPalette(DefaultPalette_1.DefaultPalette, false),
    fonts: DefaultFontStyles_1.DefaultFontStyles,
    isInverted: false
};
var _onThemeChangeCallbacks = [];
exports.ThemeSettingName = 'theme';
if (!Customizations_1.Customizations.getSettings([exports.ThemeSettingName]).theme) {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable:no-string-literal no-any
    if (win && win['FabricConfig'] && win['FabricConfig'].theme) {
        _theme = createTheme(win['FabricConfig'].theme);
    }
    // tslint:enable:no-string-literal no-any
    // Set the default theme.
    Customizations_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
}
/**
 * Gets the theme object.
 */
function getTheme() {
    return _theme;
}
exports.getTheme = getTheme;
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
exports.registerOnThemeChangeCallback = registerOnThemeChangeCallback;
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
exports.removeOnThemeChangeCallback = removeOnThemeChangeCallback;
/**
 * Applies the theme, while filling in missing slots.
 */
function loadTheme(theme) {
    _theme = createTheme(theme);
    // Invoke the legacy method of theming the page as well.
    load_themed_styles_1.loadTheme(tslib_1.__assign({}, _theme.palette, _theme.semanticColors));
    Customizations_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
    var _a;
}
exports.loadTheme = loadTheme;
/**
 * Creates a custom theme definition which can be used with the Customizer.
 */
function createTheme(theme) {
    var newPalette = tslib_1.__assign({}, DefaultPalette_1.DefaultPalette, theme.palette);
    if (!theme.palette || !theme.palette.accent) {
        newPalette.accent = newPalette.themePrimary;
    }
    return {
        palette: newPalette,
        fonts: tslib_1.__assign({}, DefaultFontStyles_1.DefaultFontStyles, theme.fonts),
        semanticColors: tslib_1.__assign({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted), theme.semanticColors),
        isInverted: !!theme.isInverted
    };
}
exports.createTheme = createTheme;
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
function _makeSemanticColorsFromPalette(p, isInverted) {
    return {
        bodyBackground: p.white,
        bodyText: p.neutralPrimary,
        bodyTextChecked: p.black,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralLight,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiaryAlt,
        disabledSubtext: p.neutralQuaternary,
        focusBorder: p.black,
        errorText: !isInverted ? p.redDark : '#ff5f5f',
        warningText: !isInverted ? '#333333' : '#ffffff',
        errorBackground: !isInverted ? 'rgba(232, 17, 35, .2)' : 'rgba(232, 17, 35, .5)',
        blockingBackground: !isInverted ? 'rgba(234, 67, 0, .2)' : 'rgba(234, 67, 0, .5)',
        warningBackground: !isInverted ? 'rgba(255, 185, 0, .2)' : 'rgba(255, 251, 0, .6)',
        warningHighlight: !isInverted ? '#ffb900' : '#fff100',
        successBackground: !isInverted ? 'rgba(186, 216, 10, .2)' : 'rgba(186, 216, 10, .4)',
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralDark,
        inputBackgroundChecked: p.themePrimary,
        inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.white,
        inputFocusBorderAlt: p.themePrimary,
        buttonBackground: p.neutralLighter,
        buttonBackgroundChecked: p.neutralTertiaryAlt,
        buttonBackgroundHovered: p.neutralLight,
        buttonBackgroundCheckedHovered: p.neutralLight,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.black,
        buttonTextChecked: p.neutralDark,
        buttonTextCheckedHovered: p.black,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundChecked: p.neutralLight,
        menuIcon: p.themePrimary,
        menuHeader: p.themePrimary,
        listBackground: p.white,
        listTextColor: p.neutralPrimary,
        listItemBackgroundHovered: p.neutralLighter,
        listItemBackgroundChecked: p.neutralLight,
        listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt
    };
}
var _a;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
exports.ScreenWidthMinSmall = 320;
exports.ScreenWidthMinMedium = 480;
exports.ScreenWidthMinLarge = 640;
exports.ScreenWidthMinXLarge = 1024;
exports.ScreenWidthMinXXLarge = 1366;
exports.ScreenWidthMinXXXLarge = 1920;
exports.ScreenWidthMaxSmall = exports.ScreenWidthMinMedium - 1;
exports.ScreenWidthMaxMedium = exports.ScreenWidthMinLarge - 1;
exports.ScreenWidthMaxLarge = exports.ScreenWidthMinXLarge - 1;
exports.ScreenWidthMaxXLarge = exports.ScreenWidthMinXXLarge - 1;
exports.ScreenWidthMaxXXLarge = exports.ScreenWidthMinXXXLarge - 1;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file mimics styles and mixins from _General.Mixins.scss
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(25);
var index_2 = __webpack_require__(16);
exports.FontClassNames = index_1.buildClassMap(index_2.DefaultFontStyles);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var DefaultPalette_1 = __webpack_require__(26);
var index_2 = __webpack_require__(16);
exports.ColorClassNames = {};
for (var colorName in DefaultPalette_1.DefaultPalette) {
    if (DefaultPalette_1.DefaultPalette.hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(exports.ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(exports.ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(exports.ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(exports.ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(exports.ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(exports.ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            // tslint:disable-next-line:no-any
            var style = (_a = {}, _a[cssProperty] = index_2.getTheme().palette[colorName], _a);
            return index_1.mergeStyles(isHover ? { selectors: { ':hover': style } } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(5);
load_themed_styles_1.loadStyles([{ "rawString": ".root_e7b134f9{overflow:hidden}.rootIsMaximizeFrame_e7b134f9{height:100%;width:100%}.image_e7b134f9{display:block;opacity:0}.image_e7b134f9.imageIsLoaded_e7b134f9{opacity:1}.imageIsCenter_e7b134f9,.imageIsContain_e7b134f9,.imageIsCover_e7b134f9{position:relative;top:50%}[dir='ltr'] .imageIsCenter_e7b134f9,[dir='ltr'] .imageIsContain_e7b134f9,[dir='ltr'] .imageIsCover_e7b134f9{left:50%}[dir='rtl'] .imageIsCenter_e7b134f9,[dir='rtl'] .imageIsContain_e7b134f9,[dir='rtl'] .imageIsCover_e7b134f9{right:50%}html[dir='ltr'] .imageIsCenter_e7b134f9,html[dir='ltr'] .imageIsContain_e7b134f9,html[dir='ltr'] .imageIsCover_e7b134f9{-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}html[dir='rtl'] .imageIsCenter_e7b134f9,html[dir='rtl'] .imageIsContain_e7b134f9,html[dir='rtl'] .imageIsCover_e7b134f9{-webkit-transform:translate(50%, -50%);transform:translate(50%, -50%)}.imageIsContain_e7b134f9.imageIsLandscape_e7b134f9{width:100%;height:auto}.imageIsContain_e7b134f9.imageIsPortrait_e7b134f9{height:100%;width:auto}.imageIsCover_e7b134f9.imageIsLandscape_e7b134f9{height:100%;width:auto}.imageIsCover_e7b134f9.imageIsPortrait_e7b134f9{width:100%;height:auto}.imageIsNone_e7b134f9{height:auto;width:auto}.imageIsScaleWidthHeight_e7b134f9{height:100%;width:100%}.imageIsScaleWidth_e7b134f9{height:auto;width:100%}.imageIsScaleHeight_e7b134f9{height:100%;width:auto}\n" }]);
exports.root = "root_e7b134f9";
exports.rootIsMaximizeFrame = "rootIsMaximizeFrame_e7b134f9";
exports.image = "image_e7b134f9";
exports.imageIsLoaded = "imageIsLoaded_e7b134f9";
exports.imageIsCenter = "imageIsCenter_e7b134f9";
exports.imageIsContain = "imageIsContain_e7b134f9";
exports.imageIsCover = "imageIsCover_e7b134f9";
exports.imageIsLandscape = "imageIsLandscape_e7b134f9";
exports.imageIsPortrait = "imageIsPortrait_e7b134f9";
exports.imageIsNone = "imageIsNone_e7b134f9";
exports.imageIsScaleWidthHeight = "imageIsScaleWidthHeight_e7b134f9";
exports.imageIsScaleWidth = "imageIsScaleWidth_e7b134f9";
exports.imageIsScaleHeight = "imageIsScaleHeight_e7b134f9";


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
exports.getClassNames = Utilities_1.memoizeFunction(function (customStyles) {
    return Styling_1.mergeStyleSets({
        root: {
            display: 'inline-block'
        },
        rootHasPlaceHolder: {
            width: '1em'
        },
        imageContainer: {
            overflow: 'hidden'
        }
    }, customStyles);
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(123), exports);


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(124), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var ContextualMenu_types_1 = __webpack_require__(48);
var FocusZone_1 = __webpack_require__(50);
var ContextualMenu_classNames_1 = __webpack_require__(127);
var Utilities_1 = __webpack_require__(1);
var withResponsiveMode_1 = __webpack_require__(129);
var Callout_1 = __webpack_require__(131);
var Icon_1 = __webpack_require__(15);
var Divider_1 = __webpack_require__(149);
function hasSubmenuItems(item) {
    var submenuItems = getSubmenuItems(item);
    return !!(submenuItems && submenuItems.length);
}
exports.hasSubmenuItems = hasSubmenuItems;
function getSubmenuItems(item) {
    return item.subMenuProps ? item.subMenuProps.items : item.items;
}
exports.getSubmenuItems = getSubmenuItems;
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
    if (item.canCheck) {
        return !!(item.isChecked || item.checked);
    }
    if (typeof item.isChecked === 'boolean') {
        return item.isChecked;
    }
    if (typeof item.checked === 'boolean') {
        return item.checked;
    }
    // Item is not checkable.
    return null;
}
/**
 * Returns true if a list of menu items can contain a checkbox
 */
function canAnyMenuItemsCheck(items) {
    return items.some(function (item) {
        if (item.canCheck) {
            return true;
        }
        // If the item is a section, check if any of the items in the section can check.
        if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) { return submenuItem.canCheck === true; })) {
            return true;
        }
        return false;
    });
}
exports.canAnyMenuItemsCheck = canAnyMenuItemsCheck;
var ContextualMenu = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenu, _super);
    function ContextualMenu(props) {
        var _this = _super.call(this, props) || this;
        _this._scrollIdleDelay = 250 /* ms */;
        _this.state = {
            contextualMenuItems: undefined,
            subMenuId: Utilities_1.getId('ContextualMenu')
        };
        _this._warnDeprecations({
            'targetPoint': 'target',
            'useTargetPoint': 'target',
        });
        _this._isFocusingPreviousElement = false;
        _this._isScrollIdle = true;
        return _this;
    }
    ContextualMenu_1 = ContextualMenu;
    ContextualMenu.prototype.dismiss = function (ev, dismissAll) {
        var onDismiss = this.props.onDismiss;
        if (onDismiss) {
            onDismiss(ev, dismissAll);
        }
    };
    ContextualMenu.prototype.componentWillUpdate = function (newProps) {
        if (newProps.target !== this.props.target) {
            var newTarget = newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
    };
    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
    ContextualMenu.prototype.componentWillMount = function () {
        var target = this.props.target;
        this._setTargetWindowAndElement(target);
        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
    };
    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    ContextualMenu.prototype.componentDidMount = function () {
        this._events.on(this._targetWindow, 'resize', this.dismiss);
        if (this.props.onMenuOpened) {
            this.props.onMenuOpened(this.props);
        }
    };
    // Invoked immediately before a component is unmounted from the DOM.
    ContextualMenu.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this._isFocusingPreviousElement && this._previousActiveElement) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            setTimeout(function () { return _this._previousActiveElement.focus(); }, 0);
        }
        if (this.props.onMenuDismissed) {
            this.props.onMenuDismissed(this.props);
        }
        this._events.dispose();
        this._async.dispose();
    };
    ContextualMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, items = _a.items, isBeakVisible = _a.isBeakVisible, labelElementId = _a.labelElementId, id = _a.id, targetPoint = _a.targetPoint, useTargetPoint = _a.useTargetPoint, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, arrowDirection = _a.arrowDirection, target = _a.target, bounds = _a.bounds, useTargetWidth = _a.useTargetWidth, useTargetAsMinWidth = _a.useTargetAsMinWidth, directionalHintFixed = _a.directionalHintFixed, shouldFocusOnMount = _a.shouldFocusOnMount, title = _a.title, customStyles = _a.styles, theme = _a.theme, calloutProps = _a.calloutProps, _b = _a.onRenderSubMenu, onRenderSubMenu = _b === void 0 ? this._onRenderSubMenu : _b;
        var menuClassNames = this.props.getMenuClassNames || ContextualMenu_classNames_1.getContextualMenuClassNames;
        this._classNames = menuClassNames(theme, className);
        var hasIcons = itemsHaveIcons(items);
        function itemsHaveIcons(contextualMenuItems) {
            for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
                var item = contextualMenuItems_1[_i];
                if (!!item.icon || !!item.iconProps) {
                    return true;
                }
                if (item.itemType === ContextualMenu_types_1.ContextualMenuItemType.Section && item.sectionProps && itemsHaveIcons(item.sectionProps.items)) {
                    return true;
                }
            }
            return false;
        }
        var hasCheckmarks = canAnyMenuItemsCheck(items);
        var submenuProps = this.state.expandedMenuItemKey ? this._getSubmenuProps() : null;
        isBeakVisible = isBeakVisible === undefined ? this.props.responsiveMode <= withResponsiveMode_1.ResponsiveMode.medium : isBeakVisible;
        /**
         * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
         */
        var contextMenuStyle;
        var targetAsHtmlElement = this._target;
        if ((useTargetWidth || useTargetAsMinWidth) && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
            var targetWidth = targetAsHtmlElement.offsetWidth;
            if (useTargetWidth) {
                contextMenuStyle = {
                    width: targetWidth
                };
            }
            else if (useTargetAsMinWidth) {
                contextMenuStyle = {
                    minWidth: targetWidth
                };
            }
        }
        // The menu should only return if items were provided, if no items were provided then it should not appear.
        if (items && items.length > 0) {
            var indexCorrection_1 = 0;
            var totalItemCount_1 = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (item.itemType !== ContextualMenu_types_1.ContextualMenuItemType.Divider &&
                    item.itemType !== ContextualMenu_types_1.ContextualMenuItemType.Header) {
                    totalItemCount_1++;
                }
            }
            return (React.createElement(Callout_1.Callout, tslib_1.__assign({}, calloutProps, { target: useTargetPoint ? targetPoint : target, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: 'ms-ContextualMenu-Callout', setInitialFocus: shouldFocusOnMount, onDismiss: this.props.onDismiss, onScroll: this._onScroll, bounds: bounds, directionalHintFixed: directionalHintFixed }),
                React.createElement("div", { role: 'menu', style: contextMenuStyle, ref: function (host) { return _this._host = host; }, id: id, className: this._classNames.container, tabIndex: 0, onKeyDown: this._onMenuKeyDown },
                    title && React.createElement("div", { className: this._classNames.title, role: 'heading', "aria-level": 1 },
                        " ",
                        title,
                        " "),
                    (items && items.length) ? (React.createElement(FocusZone_1.FocusZone, { className: this._classNames.root, direction: arrowDirection, isCircularNavigation: true, allowTabKey: true },
                        React.createElement("ul", { "aria-label": ariaLabel, "aria-labelledby": labelElementId, className: this._classNames.list, onKeyDown: this._onKeyDown }, items.map(function (item, index) {
                            if (item.itemType === ContextualMenu_types_1.ContextualMenuItemType.Divider ||
                                item.itemType === ContextualMenu_types_1.ContextualMenuItemType.Header) {
                                indexCorrection_1++;
                            }
                            return _this._renderMenuItem(item, index, index - indexCorrection_1, totalItemCount_1, hasCheckmarks, hasIcons);
                        })))) : (null),
                    submenuProps && onRenderSubMenu(submenuProps, this._onRenderSubMenu))));
        }
        else {
            return null;
        }
    };
    ContextualMenu.prototype._onRenderSubMenu = function (subMenuProps) {
        return React.createElement(ContextualMenu_1, tslib_1.__assign({}, subMenuProps));
    };
    ContextualMenu.prototype._renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var renderedItems = [];
        var iconProps = this._getIconProps(item);
        // We only send a dividerClassName when the item to be rendered is a divider. For all other cases, the default divider style is used.
        var dividerClassName = item.itemType === ContextualMenu_types_1.ContextualMenuItemType.Divider ? item.className : undefined;
        var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : '';
        var getClassNames = item.getItemClassNames || ContextualMenu_classNames_1.getItemClassNames;
        var itemClassNames = getClassNames(this.props.theme, this._isItemDisabled(item), (this.state.expandedMenuItemKey === item.key), !!getIsChecked(item), !!item.href, (iconProps.iconName !== 'None'), item.className, dividerClassName, iconProps.className, subMenuIconClassName);
        if (item.name === '-') {
            item.itemType = ContextualMenu_types_1.ContextualMenuItemType.Divider;
        }
        switch (item.itemType) {
            case ContextualMenu_types_1.ContextualMenuItemType.Divider:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                break;
            case ContextualMenu_types_1.ContextualMenuItemType.Header:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                var headerItem = this._renderHeaderMenuItem(item, itemClassNames, index, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(headerItem, item.key || index, itemClassNames, item.title));
                break;
            case ContextualMenu_types_1.ContextualMenuItemType.Section:
                renderedItems.push(this._renderSectionItem(item, itemClassNames, index, hasCheckmarks, hasIcons));
                break;
            default:
                var menuItem = this._renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(menuItem, item.key || index, itemClassNames, item.title));
                break;
        }
        return renderedItems;
    };
    ContextualMenu.prototype._renderSectionItem = function (item, menuClassNames, index, hasCheckmarks, hasIcons) {
        var _this = this;
        var section = item.sectionProps;
        if (!section) {
            return;
        }
        var headerItem;
        if (section.title) {
            var headerContextualMenuItem = {
                key: "section-" + section.title + "-title",
                itemType: ContextualMenu_types_1.ContextualMenuItemType.Header,
                name: section.title,
            };
            headerItem = this._renderHeaderMenuItem(headerContextualMenuItem, menuClassNames, index, hasCheckmarks, hasIcons);
        }
        if (section.items && section.items.length > 0) {
            return (React.createElement("li", { role: 'presentation', key: section.key },
                React.createElement("div", { role: 'group' },
                    React.createElement("ul", { className: this._classNames.list },
                        section.topDivider && this._renderSeparator(index, menuClassNames, true, true),
                        headerItem && this._renderListItem(headerItem, item.key || index, menuClassNames, item.title),
                        section.items.map(function (contextualMenuItem, itemsIndex) { return (_this._renderMenuItem(contextualMenuItem, itemsIndex, itemsIndex, section.items.length, hasCheckmarks, hasIcons)); }),
                        section.bottomDivider && this._renderSeparator(index, menuClassNames, false, true)))));
        }
    };
    ContextualMenu.prototype._renderListItem = function (content, key, classNames, title) {
        return (React.createElement("li", { role: 'presentation', title: title, key: key, className: classNames.item }, content));
    };
    ContextualMenu.prototype._renderSeparator = function (index, classNames, top, fromSection) {
        if (fromSection || index > 0) {
            return (React.createElement("li", { role: 'separator', key: 'separator-' + index + (top === undefined ? '' : (top ? '-top' : '-bottom')), className: classNames.divider }));
        }
        return null;
    };
    ContextualMenu.prototype._renderNormalItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return [item.onRender(item, this.dismiss)];
        }
        if (item.href) {
            return this._renderAnchorMenuItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        if (item.split && hasSubmenuItems(item)) {
            return this._renderSplitButton(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        return this._renderButtonItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    };
    ContextualMenu.prototype._renderHeaderMenuItem = function (item, classNames, index, hasCheckmarks, hasIcons) {
        return (React.createElement("div", { className: this._classNames.header, style: item.style, role: 'heading', "aria-level": this.props.title ? 2 : 1 }, this._renderMenuItemChildren(item, classNames, index, hasCheckmarks, hasIcons)));
    };
    ContextualMenu.prototype._renderAnchorMenuItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        return (React.createElement("div", null,
            React.createElement("a", tslib_1.__assign({}, Utilities_1.getNativeProps(item, Utilities_1.anchorProperties), { href: item.href, target: item.target, className: classNames.root, role: 'menuitem', "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, "aria-disabled": this._isItemDisabled(item), style: item.style, onClick: this._onAnchorClick.bind(this, item) }), this._renderMenuItemChildren(item, classNames, index, hasCheckmarks, hasIcons))));
    };
    ContextualMenu.prototype._renderButtonItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var _this = this;
        var _a = this.state, expandedMenuItemKey = _a.expandedMenuItemKey, subMenuId = _a.subMenuId;
        var ariaLabel = '';
        if (item.ariaLabel) {
            ariaLabel = item.ariaLabel;
        }
        else if (item.name) {
            ariaLabel = item.name;
        }
        var isChecked = getIsChecked(item);
        var canCheck = isChecked !== null;
        var defaultRole = canCheck ? 'menuitemcheckbox' : 'menuitem';
        var itemButtonProperties = {
            className: classNames.root,
            onClick: this._onItemClick.bind(this, item),
            onKeyDown: hasSubmenuItems(item) ? this._onItemKeyDown.bind(this, item) : null,
            onMouseEnter: this._onItemMouseEnter.bind(this, item),
            onMouseLeave: this._onMouseItemLeave.bind(this, item),
            onMouseDown: function (ev) { return _this._onItemMouseDown(item, ev); },
            onMouseMove: this._onItemMouseMove.bind(this, item),
            disabled: this._isItemDisabled(item),
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': hasSubmenuItems(item) || null,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null,
            'aria-expanded': hasSubmenuItems(item) ? item.key === expandedMenuItemKey : null,
            'aria-checked': isChecked,
            'aria-posinset': focusableElementIndex + 1,
            'aria-setsize': totalItemCount,
            'aria-disabled': this._isItemDisabled(item),
            role: item.role || defaultRole,
            style: item.style
        };
        return (React.createElement("button", tslib_1.__assign({}, Utilities_1.getNativeProps(item, Utilities_1.buttonProperties), itemButtonProperties, { children: this._renderMenuItemChildren(item, classNames, index, hasCheckmarks, hasIcons) })));
    };
    ContextualMenu.prototype._renderSplitButton = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        return (React.createElement("div", { "aria-labelledby": item.ariaLabel, "aria-disabled": this._isItemDisabled(item), "aria-haspopup": true, "aria-describedby": item.ariaDescription, "aria-checked": item.isChecked || item.checked },
            React.createElement("span", { "aria-hidden": true, className: classNames.splitContainer },
                this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons),
                this._renderSplitDivider(item),
                this._renderSplitIconButton(item, classNames, index))));
    };
    ContextualMenu.prototype._renderSplitPrimaryButton = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var isChecked = getIsChecked(item);
        var canCheck = isChecked !== null;
        var defaultRole = canCheck ? 'menuitemcheckbox' : 'menuitem';
        var itemProps = {
            key: item.key,
            onClick: this._executeItemClick.bind(this, item),
            disabled: this._isItemDisabled(item) || item.primaryDisabled,
            name: item.name,
            className: classNames.splitPrimary,
            role: item.role || defaultRole,
            canCheck: item.canCheck,
            isChecked: item.isChecked,
            checked: item.checked,
            icon: item.icon,
            iconProps: item.iconProps
        };
        return React.createElement('button', Utilities_1.getNativeProps(itemProps, Utilities_1.buttonProperties), this._renderMenuItemChildren(itemProps, classNames, index, hasCheckmarks, hasIcons));
    };
    ContextualMenu.prototype._renderSplitIconButton = function (item, classNames, index) {
        var _this = this;
        var itemProps = {
            onClick: this._onItemClick.bind(this, item),
            disabled: this._isItemDisabled(item),
            className: classNames.splitMenu,
            subMenuProps: item.subMenuProps,
            submenuIconProps: item.submenuIconProps,
            split: true,
        };
        return React.createElement('button', Utilities_1.assign({}, Utilities_1.getNativeProps(itemProps, Utilities_1.buttonProperties), {
            onKeyDown: this._onItemKeyDown.bind(this, item),
            onMouseEnter: this._onItemMouseEnter.bind(this, item),
            onMouseLeave: this._onMouseItemLeave.bind(this, item),
            onMouseDown: function (ev) { return _this._onItemMouseDown(item, ev); },
            onMouseMove: this._onItemMouseMove.bind(this, item)
        }), this._renderMenuItemChildren(itemProps, classNames, index, false, false));
    };
    ContextualMenu.prototype._renderSplitDivider = function (item) {
        var getDividerClassnames = item.getSplitButtonVerticalDividerClassNames || ContextualMenu_classNames_1.getSplitButtonVerticalDividerClassNames;
        return React.createElement(Divider_1.VerticalDivider, { getClassNames: getDividerClassnames });
    };
    ContextualMenu.prototype._renderMenuItemChildren = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var isItemChecked = getIsChecked(item);
        return (React.createElement("div", { className: item.split ? classNames.linkContentMenu : classNames.linkContent },
            (hasCheckmarks) ? (React.createElement(Icon_1.Icon, { iconName: isItemChecked === true ? 'CheckMark' : '', className: classNames.checkmarkIcon, onClick: this._onItemClick.bind(this, item) })) : (null),
            (hasIcons) ? (this._renderIcon(item, classNames)) : (null),
            item.name ? (React.createElement("span", { className: classNames.label }, item.name)) : null,
            hasSubmenuItems(item) ? (React.createElement(Icon_1.Icon, tslib_1.__assign({ iconName: Utilities_1.getRTL() ? 'ChevronLeft' : 'ChevronRight' }, item.submenuIconProps, { className: classNames.subMenuIcon }))) : (null)));
    };
    ContextualMenu.prototype._getIconProps = function (item) {
        var iconProps = item.iconProps ? item.iconProps : {
            iconName: item.icon
        };
        return iconProps;
    };
    ContextualMenu.prototype._renderIcon = function (item, classNames) {
        // Only present to allow continued use of item.icon which is deprecated.
        var iconProps = this._getIconProps(item);
        return React.createElement(Icon_1.Icon, tslib_1.__assign({}, iconProps, { className: classNames.icon }));
    };
    ContextualMenu.prototype._onKeyDown = function (ev) {
        var submenuCloseKey = Utilities_1.getRTL() ? 39 /* right */ : 37 /* left */;
        if (ev.which === 27 /* escape */
            || (ev.which === submenuCloseKey && this.props.isSubMenu && this.props.arrowDirection === FocusZone_1.FocusZoneDirection.vertical)) {
            // When a user presses escape, we will try to refocus the previous focused element.
            this._isFocusingPreviousElement = true;
            ev.preventDefault();
            ev.stopPropagation();
            this.dismiss(ev);
        }
    };
    ContextualMenu.prototype._onMenuKeyDown = function (ev) {
        if (ev.which === 27 /* escape */) {
            this._isFocusingPreviousElement = true;
            ev.preventDefault();
            ev.stopPropagation();
            this.dismiss(ev);
            return;
        }
        if (!this._host) {
            return;
        }
        var elementToFocus = ev.which === 38 /* up */ ?
            Utilities_1.getLastFocusable(this._host, this._host.lastChild, true) :
            ev.which === 40 /* down */ ?
                Utilities_1.getFirstFocusable(this._host, this._host.firstChild, true) :
                null;
        if (elementToFocus) {
            elementToFocus.focus();
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    /**
     * Scroll handler for the callout to make sure the mouse events
     * for updating focus are not interacting during scroll
     */
    ContextualMenu.prototype._onScroll = function () {
        var _this = this;
        if (!this._isScrollIdle && this._scrollIdleTimeoutId !== undefined) {
            this._async.clearTimeout(this._scrollIdleTimeoutId);
            this._scrollIdleTimeoutId = undefined;
        }
        else {
            this._isScrollIdle = false;
        }
        this._scrollIdleTimeoutId = this._async.setTimeout(function () { _this._isScrollIdle = true; }, this._scrollIdleDelay);
    };
    ContextualMenu.prototype._onItemMouseEnter = function (item, ev) {
        var _this = this;
        if (!this._isScrollIdle) {
            return;
        }
        var targetElement = ev.currentTarget;
        if (item.key !== this.state.expandedMenuItemKey) {
            if (hasSubmenuItems(item)) {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onItemSubMenuExpand(item, targetElement); }, 500);
            }
            else {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
            }
        }
        targetElement.focus();
    };
    ContextualMenu.prototype._onItemMouseMove = function (item, ev) {
        var _this = this;
        var targetElement = ev.currentTarget;
        if (!this._isScrollIdle || targetElement === this._targetWindow.document.activeElement) {
            return;
        }
        if (item.key !== this.state.expandedMenuItemKey) {
            if (hasSubmenuItems(item)) {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onItemSubMenuExpand(item, targetElement); }, 500);
            }
            else {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
            }
        }
        targetElement.focus();
    };
    ContextualMenu.prototype._onMouseItemLeave = function (item, ev) {
        if (!this._isScrollIdle) {
            return;
        }
        if (this._enterTimerId !== undefined) {
            this._async.clearTimeout(this._enterTimerId);
            this._enterTimerId = undefined;
        }
        if (item.key === this.state.expandedMenuItemKey && hasSubmenuItems(item)) {
            return;
        }
        /**
         * IE11 focus() method forces parents to scroll to top of element.
         * Edge and IE expose a setActive() function for focusable divs that
         * sets the page focus but does not scroll the parent element.
         */
        if (this._host.setActive) {
            this._host.setActive();
        }
        else {
            this._host.focus();
        }
    };
    ContextualMenu.prototype._onItemMouseDown = function (item, ev) {
        if (item.onMouseDown) {
            item.onMouseDown(item, ev);
        }
    };
    ContextualMenu.prototype._onItemClick = function (item, ev) {
        var items = getSubmenuItems(item);
        if (!items || !items.length) {
            this._executeItemClick(item, ev);
        }
        else {
            if (item.key === this.state.expandedMenuItemKey) {
                this._onSubMenuDismiss(ev);
            }
            else {
                this._onItemSubMenuExpand(item, ev.currentTarget);
            }
        }
        ev.stopPropagation();
        ev.preventDefault();
    };
    ContextualMenu.prototype._onAnchorClick = function (item, ev) {
        this._executeItemClick(item, ev);
        ev.stopPropagation();
    };
    ContextualMenu.prototype._executeItemClick = function (item, ev) {
        if (item.onClick) {
            item.onClick(ev, item);
        }
        else if (this.props.onItemClick) {
            this.props.onItemClick(ev, item);
        }
        !ev.defaultPrevented && this.dismiss(ev, true);
    };
    ContextualMenu.prototype._onItemKeyDown = function (item, ev) {
        var openKey = Utilities_1.getRTL() ? 37 /* left */ : 39 /* right */;
        if (ev.which === openKey) {
            this._onItemSubMenuExpand(item, ev.currentTarget);
            ev.preventDefault();
        }
    };
    ContextualMenu.prototype._onItemSubMenuExpand = function (item, target) {
        if (this.state.expandedMenuItemKey !== item.key) {
            if (this.state.expandedMenuItemKey) {
                this._onSubMenuDismiss();
            }
            this.setState({
                expandedMenuItemKey: item.key,
                submenuTarget: target
            });
        }
    };
    ContextualMenu.prototype._getSubmenuProps = function () {
        var _a = this.state, submenuTarget = _a.submenuTarget, expandedMenuItemKey = _a.expandedMenuItemKey;
        var item = this._findItemByKey(expandedMenuItemKey);
        var submenuProps = null;
        if (item) {
            submenuProps = {
                items: getSubmenuItems(item),
                target: submenuTarget,
                onDismiss: this._onSubMenuDismiss,
                isSubMenu: true,
                id: this.state.subMenuId,
                shouldFocusOnMount: true,
                directionalHint: Utilities_1.getRTL() ? 8 /* leftTopEdge */ : 11 /* rightTopEdge */,
                className: this.props.className,
                gapSpace: 0,
                isBeakVisible: false
            };
            if (item.subMenuProps) {
                Utilities_1.assign(submenuProps, item.subMenuProps);
            }
        }
        return submenuProps;
    };
    ContextualMenu.prototype._findItemByKey = function (key) {
        var items = this.props.items;
        return this._findItemByKeyFromItems(key, items);
    };
    /**
     * Returns the item that mathes a given key if any.
     * @param key The key of the item to match
     * @param items The items to look for the key
     */
    ContextualMenu.prototype._findItemByKeyFromItems = function (key, items) {
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (item.itemType === ContextualMenu_types_1.ContextualMenuItemType.Section && item.sectionProps) {
                var match = this._findItemByKeyFromItems(key, item.sectionProps.items);
                if (match) {
                    return match;
                }
            }
            else if (item.key && item.key === key) {
                return item;
            }
        }
    };
    ContextualMenu.prototype._onSubMenuDismiss = function (ev, dismissAll) {
        if (dismissAll) {
            this.dismiss(ev, dismissAll);
        }
        else {
            this.setState({
                dismissedMenuItemKey: this.state.expandedMenuItemKey,
                expandedMenuItemKey: undefined,
                submenuTarget: undefined
            });
        }
    };
    ContextualMenu.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Utilities_1.getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Utilities_1.getWindow();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Utilities_1.getWindow(target.toElement);
                this._target = target;
            }
            else if (target.x !== undefined && target.y !== undefined) {
                this._targetWindow = Utilities_1.getWindow();
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Utilities_1.getWindow(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Utilities_1.getWindow();
        }
    };
    ContextualMenu.prototype._isItemDisabled = function (item) {
        return !!(item.isDisabled || item.disabled);
    };
    // The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.
    ContextualMenu.defaultProps = {
        items: [],
        shouldFocusOnMount: true,
        gapSpace: 0,
        directionalHint: 7 /* bottomAutoEdge */,
        beakWidth: 16,
        arrowDirection: FocusZone_1.FocusZoneDirection.vertical,
        getMenuClassNames: ContextualMenu_classNames_1.getContextualMenuClassNames,
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "dismiss", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onMenuKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onScroll", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onMouseItemLeave", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ContextualMenu.prototype, "_onSubMenuDismiss", null);
    ContextualMenu = ContextualMenu_1 = tslib_1.__decorate([
        Utilities_1.customizable('ContextualMenu', ['theme']),
        withResponsiveMode_1.withResponsiveMode
    ], ContextualMenu);
    return ContextualMenu;
    var ContextualMenu_1;
}(Utilities_1.BaseComponent));
exports.ContextualMenu = ContextualMenu;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(126), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var FocusZone_types_1 = __webpack_require__(51);
var Utilities_1 = __webpack_require__(1);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var _allInstances = {};
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone = /** @class */ (function (_super) {
    tslib_1.__extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({ rootProps: undefined });
        _this._id = Utilities_1.getId('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0
        };
        return _this;
    }
    FocusZone.prototype.componentDidMount = function () {
        _allInstances[this._id] = this;
        if (this._root) {
            var windowElement = this._root.ownerDocument.defaultView;
            var parentElement = Utilities_1.getParent(this._root, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement &&
                parentElement !== document.body &&
                parentElement.nodeType === 1) {
                if (Utilities_1.isElementFocusZone(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = Utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
            }
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultActiveElement) {
                this._activeElement = Utilities_1.getDocument().querySelector(this.props.defaultActiveElement);
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        var Tag = this.props.elementType || 'div';
        return (React.createElement(Tag, tslib_1.__assign({ role: 'presentation' }, divProps, rootProps, { className: Utilities_1.css('ms-FocusZone', className), ref: this._resolveRef('_root'), "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root) {
            if (!forceIntoFirstElement && this._root.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' && this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root);
                if (ownerZoneElement !== this._root) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root);
                }
                return false;
            }
            else if (this._activeElement && Utilities_1.elementContains(this._root, this._activeElement)
                && Utilities_1.isElementTabbable(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.firstChild;
                return this.focusElement(Utilities_1.getNextElement(this._root, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param {HTMLElement} element The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            this._setActiveElement(element);
            if (this._activeElement) {
                this._activeElement.focus();
            }
            return true;
        }
        return false;
    };
    FocusZone.prototype._onFocus = function (ev) {
        var onActiveElementChanged = this.props.onActiveElementChanged;
        if (this._isImmediateDescendantOfZone(ev.target)) {
            this._activeElement = ev.target;
            this._setFocusAlignment(this._activeElement);
        }
        else {
            var parentElement = ev.target;
            while (parentElement && parentElement !== this._root) {
                if (Utilities_1.isElementTabbable(parentElement) && this._isImmediateDescendantOfZone(parentElement)) {
                    this._activeElement = parentElement;
                    break;
                }
                parentElement = Utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
        }
        if (onActiveElementChanged) {
            onActiveElementChanged(this._activeElement, ev);
        }
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */
    FocusZone.prototype._onKeyDownCapture = function (ev) {
        if (ev.which === 9 /* tab */) {
            this._updateTabIndexes();
        }
    };
    FocusZone.prototype._onMouseDown = function (ev) {
        var disabled = this.props.disabled;
        if (disabled) {
            return;
        }
        var target = ev.target;
        var path = [];
        while (target && target !== this._root) {
            path.push(target);
            target = Utilities_1.getParent(target, ALLOW_VIRTUAL_ELEMENTS);
        }
        while (path.length) {
            target = path.pop();
            if (target && Utilities_1.isElementTabbable(target)) {
                this._setActiveElement(target);
            }
            if (Utilities_1.isElementFocusZone(target)) {
                // Stop here since the focus zone will take care of its own children.
                break;
            }
        }
    };
    FocusZone.prototype._setActiveElement = function (element) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (Utilities_1.isElementFocusZone(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
        }
    };
    /**
     * Handle the keystrokes.
     */
    FocusZone.prototype._onKeyDown = function (ev) {
        var _a = this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
        if (disabled) {
            return;
        }
        if (document.activeElement === this._root && this._isInnerZone) {
            // If this element has focus, it is being controlled by a parent.
            // Ignore the keystroke.
            return;
        }
        if (this.props.onKeyDown) {
            this.props.onKeyDown(ev);
            if (ev.isDefaultPrevented()) {
                return;
            }
        }
        if (isInnerZoneKeystroke &&
            isInnerZoneKeystroke(ev) &&
            this._isImmediateDescendantOfZone(ev.target)) {
            // Try to focus
            var innerZone = this._getFirstInnerZone();
            if (innerZone) {
                if (!innerZone.focus(true)) {
                    return;
                }
            }
            else if (Utilities_1.isElementFocusSubZone(ev.target)) {
                if (!this.focusElement(Utilities_1.getNextElement(ev.target, ev.target.firstChild, true))) {
                    return;
                }
            }
            else {
                return;
            }
        }
        else if (ev.altKey) {
            return;
        }
        else {
            switch (ev.which) {
                case 32 /* space */:
                    if (this._tryInvokeClickForFocusable(ev.target)) {
                        break;
                    }
                    return;
                case 37 /* left */:
                    if (direction !== FocusZone_types_1.FocusZoneDirection.vertical && this._moveFocusLeft()) {
                        break;
                    }
                    return;
                case 39 /* right */:
                    if (direction !== FocusZone_types_1.FocusZoneDirection.vertical && this._moveFocusRight()) {
                        break;
                    }
                    return;
                case 38 /* up */:
                    if (direction !== FocusZone_types_1.FocusZoneDirection.horizontal && this._moveFocusUp()) {
                        break;
                    }
                    return;
                case 40 /* down */:
                    if (direction !== FocusZone_types_1.FocusZoneDirection.horizontal && this._moveFocusDown()) {
                        break;
                    }
                    return;
                case 9 /* tab */:
                    if (this.props.allowTabKey) {
                        if (direction === FocusZone_types_1.FocusZoneDirection.vertical) {
                            if (ev.shiftKey) {
                                this._moveFocusUp();
                            }
                            else {
                                this._moveFocusDown();
                            }
                            break;
                        }
                        else if (direction === FocusZone_types_1.FocusZoneDirection.horizontal || direction === FocusZone_types_1.FocusZoneDirection.bidirectional) {
                            if (ev.shiftKey) {
                                this._moveFocusLeft();
                            }
                            else {
                                this._moveFocusRight();
                            }
                            break;
                        }
                    }
                    return;
                case 36 /* home */:
                    if (this._isElementInput(ev.target) &&
                        !this._shouldInputLoseFocus(ev.target, false)) {
                        return false;
                    }
                    var firstChild = this._root.firstChild;
                    if (this.focusElement(Utilities_1.getNextElement(this._root, firstChild, true))) {
                        break;
                    }
                    return;
                case 35 /* end */:
                    if (this._isElementInput(ev.target) &&
                        !this._shouldInputLoseFocus(ev.target, true)) {
                        return false;
                    }
                    var lastChild = this._root.lastChild;
                    if (this.focusElement(Utilities_1.getPreviousElement(this._root, lastChild, true, true, true))) {
                        break;
                    }
                    return;
                case 13 /* enter */:
                    if (this._tryInvokeClickForFocusable(ev.target)) {
                        break;
                    }
                    return;
                default:
                    return;
            }
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                Utilities_1.EventGroup.raise(target, 'click', null, true);
                return true;
            }
            target = Utilities_1.getParent(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root;
        if (Utilities_1.isElementFocusZone(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (Utilities_1.isElementFocusZone(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev) {
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === FocusZone_types_1.FocusZoneDirection.bidirectional;
        if (!element) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward ?
                Utilities_1.getNextElement(this._root, element) :
                Utilities_1.getPreviousElement(this._root, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation) {
            if (isForward) {
                return this.focusElement(Utilities_1.getNextElement(this._root, this._root.firstElementChild, true));
            }
            else {
                return this.focusElement(Utilities_1.getPreviousElement(this._root, this._root.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                return 999999999;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) ||
                (targetRectTop === targetTop)) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
                    distance = 0;
                }
                else {
                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                return 999999999;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) ||
                (targetRectTop === targetTop)) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
                    distance = 0;
                }
                else {
                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        if (this._moveFocus(Utilities_1.getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.bottom > activeRect.top &&
                targetRect.right <= activeRect.right &&
                _this.props.direction !== FocusZone_types_1.FocusZoneDirection.vertical) {
                distance = activeRect.right - targetRect.right;
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        if (this._moveFocus(!Utilities_1.getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.top < activeRect.bottom &&
                targetRect.left >= activeRect.left &&
                _this.props.direction !== FocusZone_types_1.FocusZoneDirection.vertical) {
                distance = targetRect.left - activeRect.left;
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === FocusZone_types_1.FocusZoneDirection.bidirectional &&
            (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + (rect.width / 2);
            var top_1 = rect.top + (rect.height / 2);
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = Utilities_1.getParent(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root && parentElement !== document.body) {
            if (Utilities_1.isElementFocusZone(parentElement)) {
                return parentElement;
            }
            parentElement = Utilities_1.getParent(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return this._root;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!element) {
            this._defaultFocusElement = null;
            element = this._root;
            if (this._activeElement && !Utilities_1.elementContains(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !Utilities_1.isElementTabbable(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!Utilities_1.isElementFocusZone(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (Utilities_1.isElementTabbable(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone && ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                        this._defaultFocusElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone && ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                    this._defaultFocusElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element && element.tagName && (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        if (element &&
            element.type &&
            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of lenght and it is forward.
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward)) {
                return false;
            }
        }
        return true;
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: FocusZone_types_1.FocusZoneDirection.bidirectional
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onMouseDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onKeyDown", null);
    return FocusZone;
}(Utilities_1.BaseComponent));
exports.FocusZone = FocusZone;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var ContextualMenu_styles_1 = __webpack_require__(128);
var VerticalDivider_classNames_1 = __webpack_require__(52);
exports.getSplitButtonVerticalDividerClassNames = Utilities_1.memoizeFunction(function (theme) {
    var semanticColors = theme.semanticColors;
    var ContextualMenuDividerColor = semanticColors.bodyDivider;
    return Styling_1.mergeStyleSets(VerticalDivider_classNames_1.getDividerClassNames(theme), {
        divider: {
            height: 16,
            width: 1,
        }
    });
});
exports.getContextualMenuClassNames = Utilities_1.memoizeFunction(function (theme, className) {
    var styles = ContextualMenu_styles_1.getStyles(theme);
    return Styling_1.mergeStyleSets({
        container: [
            'ms-ContextualMenu-container',
            styles.container,
            className,
            [{
                    selectors: {
                        ':focus': { outline: 0 }
                    }
                }]
        ],
        root: [
            'ms-ContextualMenu is-open',
            styles.root
        ],
        list: [
            'ms-ContextualMenu-list is-open',
            styles.list
        ],
        header: [
            'ms-ContextualMenu-header',
            styles.header
        ],
        title: styles.title
    });
});
exports.getItemClassNames = Utilities_1.memoizeFunction(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName) {
    var semanticColors = theme.semanticColors;
    var ContextualMenuIconColor = semanticColors.menuIcon;
    var styles = ContextualMenu_styles_1.getMenuItemStyles(theme);
    return Styling_1.mergeStyleSets({
        item: [
            'ms-ContextualMenu-item',
            styles.item,
            itemClassName,
        ],
        divider: [
            'ms-ContextualMenu-divider',
            styles.divider,
            dividerClassName,
        ],
        root: [
            'ms-ContextualMenu-link',
            styles.root,
            checked && [
                'is-checked',
                styles.rootChecked
            ],
            isAnchorLink && styles.anchorLink,
            expanded && [
                'is-expanded',
                styles.rootExpanded
            ],
            disabled && [
                'is-disabled',
                styles.rootDisabled
            ],
            !disabled && !expanded && [{
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric.is-focusVisible &:focus, .ms-Fabric.is-focusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric.is-focusVisible &:hover': { background: 'inherit;' }
                    }
                }],
        ],
        splitPrimary: [
            styles.root,
            checked && [
                'is-checked',
                styles.rootChecked
            ],
            disabled && [
                'is-disabled',
                styles.rootDisabled
            ],
            !disabled && !checked && [{
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric.is-focusVisible &:focus, .ms-Fabric.is-focusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric.is-focusVisible &:hover': { background: 'inherit;' }
                    }
                }]
        ],
        splitMenu: [
            styles.root,
            {
                width: 32
            },
            expanded && [
                'is-expanded',
                styles.rootExpanded
            ],
            disabled && [
                'is-disabled',
                styles.rootDisabled
            ],
            !disabled && !expanded && [{
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric.is-focusVisible &:focus, .ms-Fabric.is-focusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric.is-focusVisible &:hover': { background: 'inherit;' }
                    }
                }]
        ],
        linkContent: [
            'ms-ContextualMenu-linkContent',
            styles.linkContent
        ],
        linkContentMenu: [
            'ms-ContextualMenu-linkContent',
            styles.linkContent,
            {
                justifyContent: 'center',
            }
        ],
        icon: [
            'ms-ContextualMenu-icon',
            knownIcon && 'ms-ContextualMenu-iconColor ' && styles.iconColor,
            styles.icon,
            iconClassName,
        ],
        checkmarkIcon: [
            'ms-ContextualMenu-checkmarkIcon',
            knownIcon && 'ms-ContextualMenu-checkmarkIcon ' && styles.checkmarkIcon,
            styles.icon,
            iconClassName,
        ],
        subMenuIcon: [
            'ms-ContextualMenu-submenuIcon',
            styles.subMenuIcon,
            subMenuClassName,
        ],
        label: [
            'ms-ContextualMenu-itemText',
            styles.label
        ],
        splitContainer: styles.splitButtonFlexContainer,
    });
});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var ContextualMenuItemHeight = '32px';
var getItemHighContrastStyles = Utilities_1.memoizeFunction(function () {
    return {
        selectors: (_a = {},
            _a[Styling_1.HighContrastSelector] = {
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
                color: 'HighlightText',
                MsHighContrastAdjust: 'none'
            },
            _a),
    };
    var _a;
});
exports.getMenuItemStyles = Utilities_1.memoizeFunction(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
    var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundChecked;
    var menuItemStyles = {
        item: [
            fonts.medium,
            {
                color: semanticColors.bodyText,
                position: 'relative',
                boxSizing: 'border-box',
            }
        ],
        divider: {
            display: 'block',
            height: '1px',
            backgroundColor: semanticColors.bodyDivider,
            position: 'relative'
        },
        root: [
            Styling_1.getFocusStyle(theme),
            {
                font: 'inherit',
                color: 'inherit',
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                height: ContextualMenuItemHeight,
                lineHeight: ContextualMenuItemHeight,
                display: 'block',
                cursor: 'pointer',
                padding: '0px 6px',
                textAlign: 'left',
            },
        ],
        rootDisabled: {
            color: semanticColors.disabledBodyText,
            cursor: 'default',
            pointerEvents: 'none',
        },
        rootHovered: tslib_1.__assign({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootFocused: tslib_1.__assign({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootChecked: tslib_1.__assign({}, getItemHighContrastStyles()),
        rootPressed: tslib_1.__assign({ backgroundColor: ContextualMenuItemBackgroundSelectedColor }, getItemHighContrastStyles()),
        rootExpanded: tslib_1.__assign({ backgroundColor: ContextualMenuItemBackgroundSelectedColor, color: semanticColors.bodyTextChecked }, getItemHighContrastStyles()),
        linkContent: {
            whiteSpace: 'nowrap',
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%'
        },
        anchorLink: {
            padding: '0px 6px',
            textRendering: 'auto',
            color: 'inherit',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textTransform: 'none',
            textIndent: '0px',
            textShadow: 'none',
            textDecoration: 'none',
            boxSizing: 'border-box'
        },
        label: {
            margin: '0 4px',
            verticalAlign: 'middle',
            display: 'inline-block',
            flexGrow: '1',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        icon: {
            display: 'inline-block',
            minHeight: '1px',
            maxHeight: ContextualMenuItemHeight,
            width: '14px',
            margin: '0 4px',
            verticalAlign: 'middle',
            flexShrink: '0',
        },
        iconColor: {
            color: semanticColors.menuIcon,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    color: 'HighlightText',
                },
                _a)
        },
        checkmarkIcon: {
            color: semanticColors.bodySubtext,
            selectors: (_b = {},
                _b[Styling_1.HighContrastSelector] = {
                    color: 'HighlightText',
                },
                _b)
        },
        subMenuIcon: {
            height: ContextualMenuItemHeight,
            lineHeight: ContextualMenuItemHeight,
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: '0',
            fontSize: Styling_1.FontSizes.mini
        },
        splitButtonFlexContainer: {
            display: 'flex',
            height: ContextualMenuItemHeight,
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        splitButtonSeparator: {}
    };
    return Styling_1.concatStyleSets(menuItemStyles);
    var _a, _b;
});
exports.getStyles = Utilities_1.memoizeFunction(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var ContextualMenuBackground = semanticColors.bodyBackground;
    var ContextualMenuHeaderColor = semanticColors.menuHeader;
    var styles = {
        root: {
            backgroundColor: ContextualMenuBackground,
            minWidth: '180px',
        },
        container: {},
        list: {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            lineHeight: '0',
        },
        title: {
            fontSize: '16px',
            paddingRight: '14px',
            paddingLeft: '14px',
            paddingBottom: '5px',
            paddingTop: '5px',
            backgroundColor: theme.palette.neutralLight
        },
        header: [
            fonts.small,
            {
                fontWeight: Styling_1.FontWeights.semibold,
                color: ContextualMenuHeaderColor,
                background: 'none',
                border: 'none',
                height: ContextualMenuItemHeight,
                lineHeight: ContextualMenuItemHeight,
                cursor: 'default',
                padding: '0px 6px',
                userSelect: 'none',
                textAlign: 'left',
            }
        ],
    };
    return Styling_1.concatStyleSets(styles);
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseDecorator_1 = __webpack_require__(130);
var Utilities_1 = __webpack_require__(1);
var ResponsiveMode;
(function (ResponsiveMode) {
    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
})(ResponsiveMode = exports.ResponsiveMode || (exports.ResponsiveMode = {}));
var RESPONSIVE_MAX_CONSTRAINT = [
    479,
    639,
    1023,
    1365,
    1919,
    99999999
];
var _defaultMode;
/**
 * Allows a server rendered scenario to provide a default responsive mode.
 */
function setResponsiveMode(responsiveMode) {
    _defaultMode = responsiveMode;
}
exports.setResponsiveMode = setResponsiveMode;
function withResponsiveMode(ComposedComponent) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithResponsiveMode, _super);
        function WithResponsiveMode(props) {
            var _this = _super.call(this, props) || this;
            _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
            _this.state = {
                responsiveMode: _this._getResponsiveMode()
            };
            return _this;
        }
        WithResponsiveMode.prototype.componentDidMount = function () {
            var _this = this;
            this._events.on(window, 'resize', function () {
                var responsiveMode = _this._getResponsiveMode();
                if (responsiveMode !== _this.state.responsiveMode) {
                    _this.setState({
                        responsiveMode: responsiveMode
                    });
                }
            });
        };
        WithResponsiveMode.prototype.componentWillUnmount = function () {
            this._events.dispose();
        };
        WithResponsiveMode.prototype.render = function () {
            var responsiveMode = this.state.responsiveMode;
            return (React.createElement(ComposedComponent, tslib_1.__assign({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props)));
        };
        WithResponsiveMode.prototype._getResponsiveMode = function () {
            var responsiveMode = ResponsiveMode.small;
            var win = Utilities_1.getWindow();
            if (typeof win !== 'undefined') {
                try {
                    while (win.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
                        responsiveMode++;
                    }
                }
                catch (e) {
                    // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
                    responsiveMode = ResponsiveMode.large;
                }
            }
            else {
                if (_defaultMode !== undefined) {
                    responsiveMode = _defaultMode;
                }
                else {
                    throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
                        'Call setResponsiveMode to define what the responsive mode is.');
                }
            }
            return responsiveMode;
        };
        return WithResponsiveMode;
    }(BaseDecorator_1.BaseDecorator));
}
exports.withResponsiveMode = withResponsiveMode;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var BaseDecorator = /** @class */ (function (_super) {
    tslib_1.__extends(BaseDecorator, _super);
    function BaseDecorator(props) {
        var _this = _super.call(this, props) || this;
        _this._shouldUpdateComponentRef = false;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = Utilities_1.hoistMethods(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            Utilities_1.unhoistMethods(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(Utilities_1.BaseComponent));
exports.BaseDecorator = BaseDecorator;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(132), exports);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(133), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var CalloutContent_1 = __webpack_require__(134);
var Layer_1 = __webpack_require__(141);
var Callout = /** @class */ (function (_super) {
    tslib_1.__extends(Callout, _super);
    function Callout(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({
            'targetPoint': 'target',
            'useTargetPoint': 'target',
        });
        return _this;
    }
    Callout.prototype.render = function () {
        var content = (React.createElement(CalloutContent_1.CalloutContent, tslib_1.__assign({}, this.props)));
        return this.props.doNotLayer ? content : (React.createElement(Layer_1.Layer, null, content));
    };
    return Callout;
}(Utilities_1.BaseComponent));
exports.Callout = Callout;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var positioning_1 = __webpack_require__(135);
var Popup_1 = __webpack_require__(54);
var stylesImport = __webpack_require__(140);
var Styling_1 = __webpack_require__(3);
var styles = stylesImport;
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
// Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.
var OFF_SCREEN_STYLE = { opacity: 0, filter: 'opacity(0)' };
var BORDER_WIDTH = 1;
var SLIDE_ANIMATIONS = (_a = {},
    _a[positioning_1.RectangleEdge.top] = 'slideUpIn20',
    _a[positioning_1.RectangleEdge.bottom] = 'slideDownIn20',
    _a[positioning_1.RectangleEdge.left] = 'slideLeftIn20',
    _a[positioning_1.RectangleEdge.right] = 'slideRightIn20',
    _a);
var CalloutContent = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutContent, _super);
    function CalloutContent(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({ 'beakStyle': 'beakWidth' });
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: undefined,
            slideDirectionalClassName: undefined,
            // @TODO it looks like this is not even being used anymore.
            calloutElementRect: undefined,
            heightOffset: 0
        };
        _this._positionAttempts = 0;
        return _this;
    }
    CalloutContent.prototype.componentDidUpdate = function () {
        this._setInitialFocus();
        this._updateAsyncPosition();
    };
    CalloutContent.prototype.componentWillMount = function () {
        this._setTargetWindowAndElement(this._getTarget());
    };
    CalloutContent.prototype.componentWillUpdate = function (newProps) {
        // If the target element changed, find the new one. If we are tracking target with class name, always find element because we do not know if fabric has rendered a new element and disposed the old element.
        var newTarget = this._getTarget(newProps);
        var oldTarget = this._getTarget();
        if (newTarget !== oldTarget || typeof (newTarget) === 'string' || newTarget instanceof String) {
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
            this._maxHeight = undefined;
        }
        if (newProps.finalHeight !== this.props.finalHeight) {
            this._setHeightOffsetEveryFrame();
        }
    };
    CalloutContent.prototype.componentDidMount = function () {
        this._onComponentDidMount();
    };
    CalloutContent.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var _a = this.props, role = _a.role, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className, target = _a.target, isBeakVisible = _a.isBeakVisible, beakStyle = _a.beakStyle, children = _a.children, beakWidth = _a.beakWidth, calloutWidth = _a.calloutWidth, finalHeight = _a.finalHeight, backgroundColor = _a.backgroundColor, calloutMaxHeight = _a.calloutMaxHeight, onScroll = _a.onScroll;
        target = this._getTarget();
        var positions = this.state.positions;
        var directionalClassName = (positions && positions.targetEdge)
            ? Styling_1.AnimationClassNames[SLIDE_ANIMATIONS[positions.targetEdge]]
            : '';
        var getContentMaxHeight = this._getMaxHeight() + this.state.heightOffset;
        var contentMaxHeight = calloutMaxHeight && (calloutMaxHeight < getContentMaxHeight) ? calloutMaxHeight : getContentMaxHeight;
        var beakReactStyle = this._getBeakPosition(positions, beakWidth, backgroundColor, beakStyle);
        var beakVisible = isBeakVisible && (!!target);
        var content = (React.createElement("div", { ref: this._resolveRef('_hostElement'), className: Utilities_1.css('ms-Callout-container', styles.container) },
            React.createElement("div", { className: Styling_1.mergeStyles('ms-Callout', styles.root, className, directionalClassName, !!calloutWidth && { width: calloutWidth }), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, tabIndex: -1, 
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                ref: this._resolveRef('_calloutElement') },
                beakVisible && (React.createElement("div", { className: Utilities_1.css('ms-Callout-beak', styles.beak), style: beakReactStyle })),
                beakVisible &&
                    (React.createElement("div", { className: Utilities_1.css('ms-Callout-beakCurtain', styles.beakCurtain) })),
                React.createElement(Popup_1.Popup, { role: role, ariaLabel: ariaLabel, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: Utilities_1.css('ms-Callout-main', styles.main, (_b = {},
                        _b[styles.overFlowYHidden] = !!finalHeight,
                        _b)), onDismiss: this.dismiss, onScroll: onScroll, shouldRestoreFocus: true, style: { maxHeight: contentMaxHeight, backgroundColor: backgroundColor } }, children))));
        return content;
        var _b;
    };
    CalloutContent.prototype.dismiss = function (ev) {
        var onDismiss = this.props.onDismiss;
        if (onDismiss) {
            onDismiss(ev);
        }
    };
    CalloutContent.prototype._dismissOnScroll = function (ev) {
        var preventDismissOnScroll = this.props.preventDismissOnScroll;
        if (this.state.positions && !preventDismissOnScroll) {
            this._dismissOnLostFocus(ev);
        }
    };
    CalloutContent.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = this._hostElement && !Utilities_1.elementContains(this._hostElement, target);
        if ((!this._target && clickedOutsideCallout) ||
            ev.target !== this._targetWindow &&
                clickedOutsideCallout &&
                (this._target.stopPropagation ||
                    (!this._target || (target !== this._target && !Utilities_1.elementContains(this._target, target))))) {
            this.dismiss(ev);
        }
    };
    CalloutContent.prototype._setInitialFocus = function () {
        if (this.props.setInitialFocus && !this._didSetInitialFocus && this.state.positions) {
            this._didSetInitialFocus = true;
            Utilities_1.focusFirstChild(this._calloutElement);
        }
    };
    CalloutContent.prototype._onComponentDidMount = function () {
        var _this = this;
        // This is added so the callout will dismiss when the window is scrolled
        // but not when something inside the callout is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the callout.
        this._async.setTimeout(function () {
            _this._events.on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true);
            _this._events.on(_this._targetWindow, 'resize', _this.dismiss, true);
            _this._events.on(_this._targetWindow.document.body, 'focus', _this._dismissOnLostFocus, true);
            _this._events.on(_this._targetWindow.document.body, 'click', _this._dismissOnLostFocus, true);
        }, 0);
        if (this.props.onLayerMounted) {
            this.props.onLayerMounted();
        }
        this._updateAsyncPosition();
        this._setHeightOffsetEveryFrame();
    };
    CalloutContent.prototype._updateAsyncPosition = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () { return _this._updatePosition(); });
    };
    CalloutContent.prototype._updatePosition = function () {
        var positions = this.state.positions;
        var hostElement = this._hostElement;
        var calloutElement = this._calloutElement;
        if (hostElement && calloutElement) {
            var currentProps = void 0;
            currentProps = Utilities_1.assign(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            currentProps.target = this._target;
            var newPositions = positioning_1.positionCallout(currentProps, hostElement, calloutElement);
            // Set the new position only when the positions are not exists or one of the new callout positions are different.
            // The position should not change if the position is within 2 decimal places.
            if ((!positions && newPositions) ||
                (positions && newPositions && !this._arePositionsEqual(positions, newPositions)
                    && this._positionAttempts < 5)) {
                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                // and we should stop trying to reposition to prevent a stack overflow.
                this._positionAttempts++;
                this.setState({
                    positions: newPositions
                });
            }
            else {
                this._positionAttempts = 0;
                if (this.props.onPositioned) {
                    this.props.onPositioned(this.state.positions);
                }
            }
        }
    };
    CalloutContent.prototype._getBeakPosition = function (positions, beakWidth, backgroundColor, beakStyle) {
        var beakStyleWidth = beakWidth;
        // This is here to support the old way of setting the beak size until version 1.0.0.
        // beakStyle is now deprecated and will be be removed at version 1.0.0
        if (beakStyle === 'ms-Callout-smallbeak') {
            beakStyleWidth = 16;
        }
        var beakReactStyle = tslib_1.__assign({}, (positions && positions.beakPosition ? positions.beakPosition.elementPosition : null));
        beakReactStyle.height = beakStyleWidth;
        beakReactStyle.width = beakStyleWidth;
        beakReactStyle.backgroundColor = backgroundColor;
        if (!beakReactStyle.top && !beakReactStyle.bottom && !beakReactStyle.left && !beakReactStyle.right) {
            beakReactStyle.left = BEAK_ORIGIN_POSITION.left;
            beakReactStyle.top = BEAK_ORIGIN_POSITION.top;
        }
        return beakReactStyle;
    };
    CalloutContent.prototype._getBounds = function () {
        if (!this._bounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
                };
            }
            this._bounds = currentBounds;
        }
        return this._bounds;
    };
    CalloutContent.prototype._getMaxHeight = function () {
        if (!this._maxHeight) {
            if (this.props.directionalHintFixed && this._target) {
                var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
                var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0;
                // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
                // overlap with the target.
                var totalGap = gapSpace + beakWidth + BORDER_WIDTH * 2;
                this._maxHeight = positioning_1.getMaxHeight(this._target, this.props.directionalHint, totalGap, this._getBounds());
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    CalloutContent.prototype._arePositionsEqual = function (positions, newPosition) {
        return this._comparePositions(positions.elementPosition, newPosition.elementPosition) &&
            this._comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition);
    };
    CalloutContent.prototype._comparePositions = function (oldPositions, newPositions) {
        for (var key in newPositions) {
            // This needs to be checked here and below because there is a linting error if for in does not immediately have an if statement
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    CalloutContent.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Utilities_1.getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Utilities_1.getWindow();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Utilities_1.getWindow(target.toElement);
                this._target = target;
            }
            else if (target.x !== undefined && target.y !== undefined) {
                this._targetWindow = Utilities_1.getWindow();
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Utilities_1.getWindow(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Utilities_1.getWindow();
        }
    };
    CalloutContent.prototype._setHeightOffsetEveryFrame = function () {
        var _this = this;
        if (this._calloutElement && this.props.finalHeight) {
            this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                var calloutMainElem = _this._calloutElement.lastChild;
                var cardScrollHeight = calloutMainElem.scrollHeight;
                var cardCurrHeight = calloutMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                _this.setState({
                    heightOffset: _this.state.heightOffset + scrollDiff
                });
                if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
                    _this._setHeightOffsetEveryFrame();
                }
                else {
                    _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer);
                }
            });
        }
    };
    CalloutContent.prototype._getTarget = function (props) {
        if (props === void 0) { props = this.props; }
        var useTargetPoint = props.useTargetPoint, targetPoint = props.targetPoint, target = props.target;
        return useTargetPoint ? targetPoint : target;
    };
    CalloutContent.defaultProps = {
        preventDismissOnScroll: false,
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 0,
        minPagePadding: 8,
        directionalHint: 7 /* bottomAutoEdge */
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], CalloutContent.prototype, "dismiss", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], CalloutContent.prototype, "_setInitialFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], CalloutContent.prototype, "_onComponentDidMount", null);
    return CalloutContent;
}(Utilities_1.BaseComponent));
exports.CalloutContent = CalloutContent;
var _a;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(136), exports);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(137), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var positioning_types_1 = __webpack_require__(53);
var Rectangle = /** @class */ (function (_super) {
    tslib_1.__extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(Utilities_1.Rectangle));
exports.Rectangle = Rectangle;
function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_a = {},
    _a[0 /* topLeftEdge */] = _createPositionData(positioning_types_1.RectangleEdge.top, positioning_types_1.RectangleEdge.left),
    _a[1 /* topCenter */] = _createPositionData(positioning_types_1.RectangleEdge.top),
    _a[2 /* topRightEdge */] = _createPositionData(positioning_types_1.RectangleEdge.top, positioning_types_1.RectangleEdge.right),
    _a[3 /* topAutoEdge */] = _createPositionData(positioning_types_1.RectangleEdge.top, undefined, true),
    _a[4 /* bottomLeftEdge */] = _createPositionData(positioning_types_1.RectangleEdge.bottom, positioning_types_1.RectangleEdge.left),
    _a[5 /* bottomCenter */] = _createPositionData(positioning_types_1.RectangleEdge.bottom),
    _a[6 /* bottomRightEdge */] = _createPositionData(positioning_types_1.RectangleEdge.bottom, positioning_types_1.RectangleEdge.right),
    _a[7 /* bottomAutoEdge */] = _createPositionData(positioning_types_1.RectangleEdge.bottom, undefined, true),
    _a[8 /* leftTopEdge */] = _createPositionData(positioning_types_1.RectangleEdge.left, positioning_types_1.RectangleEdge.top),
    _a[9 /* leftCenter */] = _createPositionData(positioning_types_1.RectangleEdge.left),
    _a[10 /* leftBottomEdge */] = _createPositionData(positioning_types_1.RectangleEdge.left, positioning_types_1.RectangleEdge.bottom),
    _a[11 /* rightTopEdge */] = _createPositionData(positioning_types_1.RectangleEdge.right, positioning_types_1.RectangleEdge.top),
    _a[12 /* rightCenter */] = _createPositionData(positioning_types_1.RectangleEdge.right),
    _a[13 /* rightBottomEdge */] = _createPositionData(positioning_types_1.RectangleEdge.right, positioning_types_1.RectangleEdge.bottom),
    _a);
/**
 * @deprecated will be removed in 6.0.
 */
var SLIDE_ANIMATIONS = (_b = {},
    _b[positioning_types_1.RectangleEdge.top] = 'slideUpIn20',
    _b[positioning_types_1.RectangleEdge.bottom] = 'slideDownIn20',
    _b[positioning_types_1.RectangleEdge.left] = 'slideLeftIn20',
    _b[positioning_types_1.RectangleEdge.right] = 'slideRightIn20',
    _b);
/**
 * Do not call methods from this directly, use either positionCallout or positionElement or make another function that
 * utilizes them.
 */
var positioningFunctions;
(function (positioningFunctions) {
    function _isRectangleWithinBounds(rect, boundingRect) {
        if (rect.top < boundingRect.top) {
            return false;
        }
        if (rect.bottom > boundingRect.bottom) {
            return false;
        }
        if (rect.left < boundingRect.left) {
            return false;
        }
        if (rect.right > boundingRect.right) {
            return false;
        }
        return true;
    }
    /**
     * Gets all of the edges of a rectangle that are outside of the given bounds.
     * If there are no out of bounds edges it returns an empty array.
     */
    function _getOutOfBoundsEdges(rect, boundingRect) {
        var outOfBounds = new Array();
        if (rect.top < boundingRect.top) {
            outOfBounds.push(positioning_types_1.RectangleEdge.top);
        }
        if (rect.bottom > boundingRect.bottom) {
            outOfBounds.push(positioning_types_1.RectangleEdge.bottom);
        }
        if (rect.left < boundingRect.left) {
            outOfBounds.push(positioning_types_1.RectangleEdge.left);
        }
        if (rect.right > boundingRect.right) {
            outOfBounds.push(positioning_types_1.RectangleEdge.right);
        }
        return outOfBounds;
    }
    function _getEdgeValue(rect, edge) {
        return rect[positioning_types_1.RectangleEdge[edge]];
    }
    function _setEdgeValue(rect, edge, value) {
        rect[positioning_types_1.RectangleEdge[edge]] = value;
        return rect;
    }
    /**
     * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
     * the itself already contains the other coordinate.
     * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
     *
     * @param {Rectangle} rect
     * @param {RectangleEdge} edge
     * @returns {number}
     */
    function _getCenterValue(rect, edge) {
        var edges = _getFlankingEdges(edge);
        return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
    }
    /**
     * Flips the value depending on the edge.
     * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
     * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
     * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the "negative" edges.
     * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2.
     * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
     * If top edge 1 is less than edge 2 then it is out of bounds.
     *
     *
     * @param {RectangleEdge} edge
     * @param {number} value
     * @returns {number}
     */
    function _getRelativeEdgeValue(edge, value) {
        if (edge > 0) {
            return value;
        }
        else {
            return value * -1;
        }
    }
    function _getRelativeRectEdgeValue(edge, rect) {
        return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
    }
    function _getRelativeEdgeDifference(rect, hostRect, edge) {
        var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
        return _getRelativeEdgeValue(edge, edgeDifference);
    }
    /**
     * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
     * For example, if it's a bottom edge it will only change y coordinates.
     *
     * @param {Rectangle} rect
     * @param {RectangleEdge} edge
     * @param {number} newValue
     * @returns {Rectangle}
     */
    function _moveEdge(rect, edge, newValue) {
        var difference = _getEdgeValue(rect, edge) - newValue;
        rect = _setEdgeValue(rect, edge, newValue);
        rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
        return rect;
    }
    /**
     * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
     *
     * @param {Rectangle} rect
     * @param {Rectangle} target
     * @param {RectangleEdge} edge
     * @param {number} [gap=0]
     * @returns {Rectangle}
     */
    function _alignEdges(rect, target, edge, gap) {
        if (gap === void 0) { gap = 0; }
        return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
    }
    /**
     * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
     * For instance if targetEdge is bottom, then the rects top will be moved to match it.
     *
     * @param {Rectangle} rect
     * @param {Rectangle} target
     * @param {RectangleEdge} targetEdge
     * @param {number} [gap=0]
     * @returns {Rectangle}
     */
    function _alignOppositeEdges(rect, target, targetEdge, gap) {
        if (gap === void 0) { gap = 0; }
        var oppositeEdge = targetEdge * -1;
        var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
        return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
    }
    /**
     * Tests to see if the given edge is within the bounds of the given rectangle.
     *
     * @param {Rectangle} rect
     * @param {Rectangle} bounds
     * @param {RectangleEdge} edge
     * @returns {boolean}
     */
    function _isEdgeInBounds(rect, bounds, edge) {
        var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
        return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
    }
    /**
     * Attempts to move the rectangle through various sides of the target to find a place to fit.
     * If no fit is found, the original position should be returned.
     *
     * @param {Rectangle} rect
     * @param {Rectangle} target
     * @param {Rectangle} bounding
     * @param {IPositionDirectionalHintData} positionData
     * @param {number} [gap=0]
     * @returns {IElementPosition}
     */
    function _flipToFit(rect, target, bounding, positionData, gap) {
        if (gap === void 0) { gap = 0; }
        var directions = [positioning_types_1.RectangleEdge.left, positioning_types_1.RectangleEdge.right, positioning_types_1.RectangleEdge.bottom, positioning_types_1.RectangleEdge.top];
        var currentEstimate = rect;
        var currentEdge = positionData.targetEdge;
        var currentAlignment = positionData.alignmentEdge;
        // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified element.
        for (var i = 0; i < 4; i++) {
            if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
                directions.splice(directions.indexOf(currentEdge), 1);
                if (directions.indexOf(currentEdge * -1) > -1) {
                    currentEdge = currentEdge * -1;
                }
                else {
                    currentAlignment = currentEdge;
                    currentEdge = directions.slice(-1)[0];
                }
                currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
            }
            else {
                return {
                    elementRectangle: currentEstimate,
                    targetEdge: currentEdge,
                    alignmentEdge: currentAlignment
                };
            }
        }
        return {
            elementRectangle: rect,
            targetEdge: positionData.targetEdge,
            alignmentEdge: currentAlignment
        };
    }
    /**
     * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
     * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
     *
     * @param {Rectangle} element
     * @param {Rectangle} target
     * @param {Rectangle} bounding
     * @param {IPositionDirectionalHintData} positionData
     * @param {number} [gap=0]
     * @param {boolean} [directionalHintFixed]
     * @param {boolean} [coverTarget]
     * @returns {IElementPosition}
     */
    function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
        if (gap === void 0) { gap = 0; }
        var alignmentEdge = positionData.alignmentEdge;
        var elementEstimate = {
            elementRectangle: element,
            targetEdge: positionData.targetEdge,
            alignmentEdge: alignmentEdge
        };
        if (!directionalHintFixed && !coverTarget) {
            elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
        }
        var outOfBounds = _getOutOfBoundsEdges(element, bounding);
        for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
            var direction = outOfBounds_1[_i];
            elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
        }
        return elementEstimate;
    }
    /**
     * Moves the middle point on an edge to the point given.
     * Only moves in one direction. For instance if a bottom edge is passed in, then
     * the bottom edge will be moved in the x axis to match the point.
     *
     * @param {Rectangle} rect
     * @param {RectangleEdge} edge
     * @param {number} point
     * @returns {Rectangle}
     */
    function _centerEdgeToPoint(rect, edge, point) {
        var positiveEdge = _getFlankingEdges(edge).positiveEdge;
        var elementMiddle = _getCenterValue(rect, edge);
        var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
        return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
    }
    /**
     * Moves the element rectangle to be appropriately positioned relative to a given target.
     * Does not flip or adjust the element.
     *
     * @param {Rectangle} elementToPosition
     * @param {Rectangle} target
     * @param {IPositionDirectionalHintData} positionData
     * @param {number} [gap=0]
     * @param {boolean} [coverTarget]
     * @returns {Rectangle}
     */
    function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
        if (gap === void 0) { gap = 0; }
        var estimatedElementPosition;
        var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
        var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
        estimatedElementPosition = coverTarget ? _alignEdges(elementToPosition, target, targetEdge, gap) :
            _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
        // if no alignment edge is provided it's supposed to be centered.
        if (!alignmentEdge) {
            var targetMiddlePoint = _getCenterValue(target, targetEdge);
            estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
        }
        else {
            estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
        }
        return estimatedElementPosition;
    }
    /**
     * Returns the non-opposite edges of the target edge.
     * For instance if bottom is passed in then left and right will be returned.
     *
     * @param {RectangleEdge} edge
     * @returns {{ firstEdge: RectangleEdge, secondEdge: RectangleEdge }}
     */
    function _getFlankingEdges(edge) {
        if (edge === positioning_types_1.RectangleEdge.top || edge === positioning_types_1.RectangleEdge.bottom) {
            return {
                positiveEdge: positioning_types_1.RectangleEdge.left,
                negativeEdge: positioning_types_1.RectangleEdge.right
            };
        }
        else {
            return {
                positiveEdge: positioning_types_1.RectangleEdge.top,
                negativeEdge: positioning_types_1.RectangleEdge.bottom
            };
        }
    }
    /**
     * Finalizes the element positon based on the hostElement. Only returns the
     * rectangle values to position such that they are anchored to the target.
     * This helps prevent resizing from looking very strange.
     * For instance, if the target edge is top and aligned with the left side then
     * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
     *
     * @param {Rectangle} elementRectangle
     * @param {HTMLElement} hostElement
     * @param {RectangleEdge} targetEdge
     * @param {RectangleEdge} [alignmentEdge]
     * @returns {IPartialIRectangle}
     */
    function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, alignmentEdge) {
        var returnValue = {};
        var hostRect = _getRectangleFromHTMLElement(hostElement);
        var elementEdge = targetEdge * -1;
        var elementEdgeString = positioning_types_1.RectangleEdge[elementEdge];
        var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
        returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
        returnValue[positioning_types_1.RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
        return returnValue;
    }
    // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
    // We still want to position the beak based on it's midpoint which does not change. It will
    // be at (beakwidth / 2, beakwidth / 2)
    function _calculateActualBeakWidthInPixels(beakWidth) {
        return Math.sqrt(beakWidth * beakWidth * 2);
    }
    positioningFunctions._calculateActualBeakWidthInPixels = _calculateActualBeakWidthInPixels;
    /**
     * Returns the appropriate IPositionData based on the props altered for RTL.
     * If directionalHintForRTL is passed in that is used if the page is RTL.
     * If a directionalHint is specified and no directionalHintForRTL is available and the page is RTL the hint will be flipped.
     * For instance bottomLeftEdge would become bottomRightEdge.
     * If there is no directionalHint passed in bottomAutoEdge is chosen automatically.
     *
     * @param {IPositionProps} props
     * @returns {IPositionDirectionalHintData}
     */
    function _getPositionData(directionalHint, directionalHintForRTL) {
        if (directionalHint === void 0) { directionalHint = 7 /* bottomAutoEdge */; }
        var positionInformation = tslib_1.__assign({}, DirectionalDictionary[directionalHint]);
        if (Utilities_1.getRTL()) {
            // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
            positionInformation.alignmentEdge = positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0
                ? positionInformation.alignmentEdge * -1 : undefined;
            return directionalHintForRTL !== undefined ?
                DirectionalDictionary[directionalHintForRTL] :
                positionInformation;
        }
        return positionInformation;
    }
    positioningFunctions._getPositionData = _getPositionData;
    /**
     * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
     * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
     * the center of the page.
     *
     * @param {IPositionDirectionalHintData} positionData
     * @param {Rectangle} target
     * @param {Rectangle} boundingRect
     * @param {boolean} [coverTarget]
     * @returns {IPositionDirectionalHintData}
     */
    function _getAlignmentData(positionData, target, boundingRect, coverTarget) {
        if (positionData.isAuto) {
            positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
        }
        return positionData;
    }
    function getClosestEdge(targetEdge, target, boundingRect) {
        var targetCenter = _getCenterValue(target, targetEdge);
        var boundingCenter = _getCenterValue(boundingRect, targetEdge);
        var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
        if (targetCenter <= boundingCenter) {
            return positiveEdge;
        }
        else {
            return negativeEdge;
        }
    }
    function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
        var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
        if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
            return {
                elementRectangle: estimatedElementPosition,
                targetEdge: positionData.targetEdge,
                alignmentEdge: positionData.alignmentEdge
            };
        }
        else {
            return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
        }
    }
    positioningFunctions._positionElementWithinBounds = _positionElementWithinBounds;
    function _finalizeBeakPosition(elementPosition, positionedBeak) {
        var targetEdge = elementPosition.targetEdge * -1;
        // The "host" element that we will use to help position the beak.
        var actualElement = new Rectangle(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
        var returnEdge = elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
        var returnValue = {};
        returnValue[positioning_types_1.RectangleEdge[targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
        returnValue[positioning_types_1.RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
        return {
            elementPosition: tslib_1.__assign({}, returnValue),
            closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
            targetEdge: targetEdge
        };
    }
    positioningFunctions._finalizeBeakPosition = _finalizeBeakPosition;
    function _positionBeak(beakWidth, elementPosition) {
        var target = elementPosition.targetRectangle;
        /** Note about beak positioning: The actual beak width only matters for getting the gap between the callout and target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8, then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.*/
        var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
        var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
        var elementBounds = new Rectangle(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
        var beakPositon = new Rectangle(0, beakWidth, 0, beakWidth);
        beakPositon = _moveEdge(beakPositon, (elementPosition.targetEdge * -1), -beakWidth / 2);
        beakPositon = _centerEdgeToPoint(beakPositon, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
        if (!_isEdgeInBounds(beakPositon, elementBounds, positiveEdge)) {
            beakPositon = _alignEdges(beakPositon, elementBounds, positiveEdge);
        }
        else if (!_isEdgeInBounds(beakPositon, elementBounds, negativeEdge)) {
            beakPositon = _alignEdges(beakPositon, elementBounds, negativeEdge);
        }
        return beakPositon;
    }
    positioningFunctions._positionBeak = _positionBeak;
    function _getRectangleFromHTMLElement(element) {
        var clientRect = element.getBoundingClientRect();
        return new Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
    }
    positioningFunctions._getRectangleFromHTMLElement = _getRectangleFromHTMLElement;
    function _getRectangleFromIRect(rect) {
        return new Rectangle(rect.left, rect.right, rect.top, rect.bottom);
    }
    positioningFunctions._getRectangleFromIRect = _getRectangleFromIRect;
    function _getTargetRect(bounds, target) {
        var targetRectangle;
        if (target) {
            if (target.preventDefault) {
                var ev = target;
                targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
            }
            else if (target.x !== undefined) {
                var point = target;
                targetRectangle = new Rectangle(point.x, point.x, point.y, point.y);
            }
            else {
                targetRectangle = _getRectangleFromHTMLElement(target);
            }
            if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
                var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
                for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
                    var direction = outOfBounds_2[_i];
                    targetRectangle[positioning_types_1.RectangleEdge[direction]] = bounds[positioning_types_1.RectangleEdge[direction]];
                }
            }
        }
        else {
            targetRectangle = new Rectangle(0, 0, 0, 0);
        }
        return targetRectangle;
    }
    positioningFunctions._getTargetRect = _getTargetRect;
    /**
     * If max height is less than zero it returns the bounds height instead.
     */
    function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds) {
        var maxHeight = 0;
        switch (targetEdge) {
            case 7 /* bottomAutoEdge */:
            case 5 /* bottomCenter */:
            case 4 /* bottomLeftEdge */:
            case 6 /* bottomRightEdge */:
                maxHeight = bounds.bottom - targetRectangle.bottom - gapSpace;
                break;
            case 3 /* topAutoEdge */:
            case 1 /* topCenter */:
            case 0 /* topLeftEdge */:
            case 2 /* topRightEdge */:
                maxHeight = targetRectangle.top - bounds.top - gapSpace;
                break;
            default:
                maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
                break;
        }
        return maxHeight > 0 ? maxHeight : bounds.height;
    }
    positioningFunctions._getMaxHeightFromTargetRectangle = _getMaxHeightFromTargetRectangle;
    function _positionElementRelative(props, hostElement, elementToPosition) {
        var gap = props.gapSpace ? props.gapSpace : 0;
        var boundingRect = props.bounds ?
            _getRectangleFromIRect(props.bounds) :
            new Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
        var targetRect = _getTargetRect(boundingRect, props.target);
        var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL), targetRect, boundingRect, props.coverTarget);
        var positionedElement = _positionElementWithinBounds(_getRectangleFromHTMLElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
        return tslib_1.__assign({}, positionedElement, { targetRectangle: targetRect });
    }
    positioningFunctions._positionElementRelative = _positionElementRelative;
    function _finalizePositionData(positionedElement, hostElement) {
        var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, positionedElement.alignmentEdge);
        return {
            elementPosition: finalizedElement,
            targetEdge: positionedElement.targetEdge
        };
    }
    positioningFunctions._finalizePositionData = _finalizePositionData;
    function _positionElement(props, hostElement, elementToPosition) {
        var positionedElement = _positionElementRelative(props, hostElement, elementToPosition);
        return _finalizePositionData(positionedElement, hostElement);
    }
    positioningFunctions._positionElement = _positionElement;
    function _positionCallout(props, hostElement, callout) {
        var beakWidth = !props.isBeakVisible ? 0 : (props.beakWidth || 0);
        var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
        var positionProps = props;
        positionProps.gapSpace = gap;
        var positionedElement = _positionElementRelative(positionProps, hostElement, callout);
        var beakPositioned = _positionBeak(beakWidth, positionedElement);
        var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned);
        return tslib_1.__assign({}, _finalizePositionData(positionedElement, hostElement), { beakPosition: finalizedBeakPosition });
    }
    positioningFunctions._positionCallout = _positionCallout;
    /**
     * @deprecated Do not use, this will be removed in 6.0
     * use either _positionCallout or _positionElement.
     * @export
     * @param {IPositionProps} props
     * @param {HTMLElement} hostElement
     * @param {HTMLElement} elementToPosition
     * @returns
     */
    function _getRelativePositions(props, hostElement, elementToPosition) {
        var positions = _positionCallout(props, hostElement, elementToPosition);
        var beakPosition = positions && positions.beakPosition ? positions.beakPosition.elementPosition : undefined;
        return {
            calloutPosition: positions.elementPosition,
            beakPosition: { position: tslib_1.__assign({}, beakPosition), display: 'block' },
            directionalClassName: SLIDE_ANIMATIONS[positions.targetEdge],
            submenuDirection: (positions.targetEdge * -1) === positioning_types_1.RectangleEdge.right ? 10 /* leftBottomEdge */ : 13 /* rightBottomEdge */
        };
    }
    positioningFunctions._getRelativePositions = _getRelativePositions;
})(positioningFunctions = exports.positioningFunctions || (exports.positioningFunctions = {}));
/**
 * @deprecated Do not use, this will be removed in 6.0.
 * Use either positionElement, or positionCallout
 *
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} calloutElement
 * @returns
 */
function getRelativePositions(props, hostElement, calloutElement) {
    return positioningFunctions._getRelativePositions(props, hostElement, calloutElement);
}
exports.getRelativePositions = getRelativePositions;
/**
 * Used to position an element relative to the given positioning props.
 *
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} elementToPosition
 * @returns
 */
function positionElement(props, hostElement, elementToPosition) {
    return positioningFunctions._positionElement(props, hostElement, elementToPosition);
}
exports.positionElement = positionElement;
function positionCallout(props, hostElement, elementToPosition) {
    return positioningFunctions._positionCallout(props, hostElement, elementToPosition);
}
exports.positionCallout = positionCallout;
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var pointTarget = target;
    var targetRect;
    var boundingRectangle = bounds ?
        positioningFunctions._getRectangleFromIRect(bounds) :
        new Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
    if (mouseTarget.stopPropagation) {
        targetRect = new Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (pointTarget.x !== undefined && pointTarget.y !== undefined) {
        targetRect = new Rectangle(pointTarget.x, pointTarget.x, pointTarget.y, pointTarget.y);
    }
    else {
        targetRect = positioningFunctions._getRectangleFromHTMLElement(elementTarget);
    }
    return positioningFunctions._getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle);
}
exports.getMaxHeight = getMaxHeight;
var _a, _b;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(139), exports);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup = /** @class */ (function (_super) {
    tslib_1.__extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.componentWillMount = function () {
        this._originalFocusedElement = Utilities_1.getDocument().activeElement;
    };
    Popup.prototype.componentDidMount = function () {
        this._events.on(this.refs.root, 'focus', this._onFocus, true);
        this._events.on(this.refs.root, 'blur', this._onBlur, true);
        if (Utilities_1.doesElementContainFocus(this.refs.root)) {
            this._containsFocus = true;
        }
    };
    Popup.prototype.componentWillUnmount = function () {
        if (this.props.shouldRestoreFocus &&
            this._originalFocusedElement &&
            this._containsFocus &&
            this._originalFocusedElement !== window) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            if (this._originalFocusedElement) {
                this._originalFocusedElement.focus();
            }
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, role = _a.role, className = _a.className, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy;
        return (React.createElement("div", tslib_1.__assign({ ref: 'root' }, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown }), this.props.children));
    };
    Popup.prototype._onKeyDown = function (ev) {
        switch (ev.which) {
            case 27 /* escape */:
                if (this.props.onDismiss) {
                    this.props.onDismiss(ev);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                break;
        }
    };
    Popup.prototype._onFocus = function () {
        this._containsFocus = true;
    };
    Popup.prototype._onBlur = function () {
        this._containsFocus = false;
    };
    Popup.defaultProps = {
        shouldRestoreFocus: true
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Popup.prototype, "_onKeyDown", null);
    return Popup;
}(Utilities_1.BaseComponent));
exports.Popup = Popup;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(5);
load_themed_styles_1.loadStyles([{ "rawString": ".root_fcaa28b3{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}[dir='ltr'] .root_fcaa28b3{-webkit-box-shadow:0 0 5px 0px rgba(0,0,0,0.4);box-shadow:0 0 5px 0px rgba(0,0,0,0.4)}[dir='rtl'] .root_fcaa28b3{-webkit-box-shadow:0 0 5px 0px rgba(0,0,0,0.4);box-shadow:0 0 5px 0px rgba(0,0,0,0.4)}.root_fcaa28b3::-moz-focus-inner{border:0}.root_fcaa28b3{outline:transparent}@media screen and (-ms-high-contrast: active){.root_fcaa28b3{border:1px solid WindowText}}.container_fcaa28b3{position:relative}.main_fcaa28b3{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";overflow-x:hidden;overflow-y:auto;position:relative}.overFlowYHidden_fcaa28b3{overflow-y:hidden}.beak_fcaa28b3{position:absolute;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";-webkit-box-shadow:inherit;box-shadow:inherit;border:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.beakCurtain_fcaa28b3{position:absolute;top:0;right:0;bottom:0;left:0;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}\n" }]);
exports.root = "root_fcaa28b3";
exports.container = "container_fcaa28b3";
exports.main = "main_fcaa28b3";
exports.overFlowYHidden = "overFlowYHidden_fcaa28b3";
exports.beak = "beak_fcaa28b3";
exports.beakCurtain = "beakCurtain_fcaa28b3";


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(142), exports);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(148), exports);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(144), exports);


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(145), exports);


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Fabric_classNames_1 = __webpack_require__(146);
var DIRECTIONAL_KEY_CODES = [
    38 /* up */,
    40 /* down */,
    37 /* left */,
    39 /* right */,
    36 /* home */,
    35 /* end */,
    9 /* tab */,
    33 /* pageUp */,
    34 /* pageDown */
];
// We will track the last focus visibility state so that if we tear down and recreate
// the Fabric component, we will use the last known value as the default.
var _lastIsFocusVisible = false;
// Ensure that the HTML element has a dir specified. This helps to ensure RTL/LTR macros in css for all components will work.
if (typeof (document) === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
    document.documentElement.setAttribute('dir', 'ltr');
}
var Fabric = /** @class */ (function (_super) {
    tslib_1.__extends(Fabric, _super);
    function Fabric(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isFocusVisible: _lastIsFocusVisible
        };
        return _this;
    }
    Fabric.prototype.componentDidMount = function () {
        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
        this._events.on(document.body, 'keydown', this._onKeyDown, true);
    };
    Fabric.prototype.render = function () {
        var isFocusVisible = this.state.isFocusVisible;
        var className = this.props.className;
        var classNames = Fabric_classNames_1.getClassNames(this.props.theme, className, isFocusVisible);
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        return (React.createElement("div", tslib_1.__assign({}, divProps, { className: classNames.root, ref: this._resolveRef('_root') })));
    };
    Fabric.prototype._onMouseDown = function () {
        if (this.state.isFocusVisible) {
            this.setState({
                isFocusVisible: false
            });
            _lastIsFocusVisible = false;
        }
    };
    Fabric.prototype._onKeyDown = function (ev) {
        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
            this.setState({
                isFocusVisible: true
            });
            _lastIsFocusVisible = true;
        }
    };
    Fabric = tslib_1.__decorate([
        Utilities_1.customizable('Fabric', ['theme'])
    ], Fabric);
    return Fabric;
}(Utilities_1.BaseComponent));
exports.Fabric = Fabric;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
var inheritFont = { fontFamily: 'inherit' };
exports.getClassNames = Utilities_1.memoizeFunction(function (theme, className, isFocusVisible) {
    return {
        root: Styling_1.mergeStyles([
            'ms-Fabric',
            isFocusVisible && 'is-focusVisible',
            className,
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                selectors: {
                    '& button': inheritFont,
                    '& input': inheritFont,
                    '& textarea': inheritFont
                }
            }
        ])
    };
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(5);
load_themed_styles_1.loadStyles([{ "rawString": ".rootIsFixed_6d9ef549{position:fixed;z-index:1000000;top:0;left:0;width:100vw;height:100vh;visibility:hidden}.content_6d9ef549{visibility:visible}\n" }]);
exports.rootIsFixed = "rootIsFixed_6d9ef549";
exports.content = "content_6d9ef549";


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Layer_1 = __webpack_require__(27);
var LayerHost = /** @class */ (function (_super) {
    tslib_1.__extends(LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        Layer_1.Layer.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        Layer_1.Layer.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return (React.createElement("div", tslib_1.__assign({}, this.props, { className: Utilities_1.css('ms-LayerHost', this.props.className) })));
    };
    return LayerHost;
}(Utilities_1.BaseComponent));
exports.LayerHost = LayerHost;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(150), exports);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(151), exports);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var VerticalDivider_classNames_1 = __webpack_require__(52);
var Styling_1 = __webpack_require__(3);
exports.VerticalDivider = function (props) {
    var theme = Styling_1.getTheme();
    var classNames = props.getClassNames ? props.getClassNames(theme) : VerticalDivider_classNames_1.getDividerClassNames(theme);
    return (React.createElement("span", { className: classNames.wrapper },
        React.createElement("span", { className: classNames.divider })));
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
exports.getBaseButtonClassNames = Utilities_1.memoizeFunction(function (styles, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
    var isExpanded = expanded && !isSplit;
    return Styling_1.mergeStyleSets({
        root: [
            'ms-Button',
            styles.root,
            variantClassName,
            className,
            checked && [
                'is-checked',
                styles.rootChecked
            ],
            isExpanded && [
                'is-expanded',
                styles.rootExpanded,
                {
                    selectors: {
                        ':hover .ms-Button-icon': styles.iconExpandedHovered,
                        ':hover .ms-Button-menuIcon': styles.rootExpandedHovered,
                        ':hover': styles.rootExpandedHovered
                    }
                }
            ],
            disabled && [
                'is-disabled',
                styles.rootDisabled
            ],
            !disabled && !isExpanded && !checked && {
                selectors: {
                    ':hover': styles.rootHovered,
                    ':hover .ms-Button-icon': styles.iconHovered,
                    ':hover .ms-Button-description': styles.descriptionHovered,
                    ':hover .ms-Button-menuIcon': styles.menuIconHovered,
                    ':focus': styles.rootFocused,
                    ':active': styles.rootPressed,
                    ':active .ms-Button-icon': styles.iconPressed,
                    ':active .ms-Button-description': styles.descriptionPressed,
                    ':active .ms-Button-menuIcon': styles.menuIconPressed
                }
            },
            disabled && checked && [
                styles.rootCheckedDisabled
            ],
            !disabled && checked && {
                selectors: {
                    ':hover': styles.rootCheckedHovered,
                    ':active': styles.rootCheckedPressed
                }
            }
        ],
        flexContainer: [
            'ms-Button-flexContainer',
            styles.flexContainer
        ],
        textContainer: [
            'ms-Button-textContainer',
            styles.textContainer
        ],
        icon: [
            'ms-Button-icon',
            iconClassName,
            styles.icon,
            isExpanded && styles.iconExpanded,
            checked && styles.iconChecked,
            disabled && styles.iconDisabled,
        ],
        label: [
            'ms-Button-label',
            styles.label,
            checked && styles.labelChecked,
            disabled && styles.labelDisabled,
        ],
        menuIcon: [
            'ms-Button-menuIcon',
            menuIconClassName,
            styles.menuIcon,
            checked && styles.menuIconChecked,
            disabled && styles.menuIconDisabled,
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: {
                    ':hover': styles.menuIconHovered,
                    ':active': styles.menuIconPressed,
                },
            },
            isExpanded && [
                'is-expanded',
                styles.menuIconExpanded,
                {
                    selectors: {
                        ':hover': styles.menuIconExpandedHovered,
                    },
                },
            ]
        ],
        description: [
            'ms-Button-description',
            styles.description,
            checked && styles.descriptionChecked,
            disabled && styles.descriptionDisabled
        ],
        screenReaderText: [
            'ms-Button-screenReaderText',
            styles.screenReaderText
        ]
    });
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
exports.getClassNames = Utilities_1.memoizeFunction(function (styles, disabled, expanded, checked) {
    return {
        root: Styling_1.mergeStyles(styles.splitButtonMenuButton, expanded && [
            styles.splitButtonMenuButtonExpanded
        ], disabled && [
            styles.splitButtonMenuButtonDisabled
        ], checked && !disabled && [
            styles.splitButtonMenuButtonChecked
        ]),
        splitButtonContainer: Styling_1.mergeStyles(styles.splitButtonContainer, checked && !disabled && [
            styles.splitButtonContainerChecked,
            {
                selectors: {
                    ':hover': styles.splitButtonContainerCheckedHovered
                }
            }
        ], !disabled && !checked && [{
                selectors: {
                    ':hover': styles.splitButtonContainerHovered,
                    ':focus': styles.splitButtonContainerFocused
                }
            }], disabled && styles.splitButtonContainerDisabled),
        icon: Styling_1.mergeStyles(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled),
        flexContainer: Styling_1.mergeStyles(styles.splitButtonFlexContainer),
        divider: Styling_1.mergeStyles(styles.splitButtonDivider)
    };
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var Button_types_1 = __webpack_require__(55);
var DefaultButton_1 = __webpack_require__(17);
var ActionButton_1 = __webpack_require__(28);
var CompoundButton_1 = __webpack_require__(57);
var IconButton_1 = __webpack_require__(58);
var PrimaryButton_1 = __webpack_require__(59);
/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated
 */
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        Utilities_1.warn("The Button component has been deprecated. Use specific variants instead. " +
            "(PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)");
        return _this;
    }
    Button.prototype.render = function () {
        var props = this.props;
        switch (props.buttonType) {
            case Button_types_1.ButtonType.command:
                return React.createElement(ActionButton_1.ActionButton, tslib_1.__assign({}, props));
            case Button_types_1.ButtonType.compound:
                return React.createElement(CompoundButton_1.CompoundButton, tslib_1.__assign({}, props));
            case Button_types_1.ButtonType.icon:
                return React.createElement(IconButton_1.IconButton, tslib_1.__assign({}, props));
            case Button_types_1.ButtonType.primary:
                return React.createElement(PrimaryButton_1.PrimaryButton, tslib_1.__assign({}, props));
            default:
                return React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, props));
        }
    };
    return Button;
}(Utilities_1.BaseComponent));
exports.Button = Button;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(10);
var SplitButton_styles_1 = __webpack_require__(18);
var ButtonThemes_1 = __webpack_require__(56);
var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, primary) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MINWIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
        },
        label: {
            fontWeight: Styling_1.FontWeights.semibold
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, defaultButtonStyles, primary ? ButtonThemes_1.primaryStyles(theme) : ButtonThemes_1.standardStyles(theme), splitButtonStyles, customStyles);
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(10);
var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var actionButtonStyles = {
        root: {
            padding: DEFAULT_PADDING,
            height: DEFAULT_BUTTON_HEIGHT,
            color: theme.palette.neutralPrimary,
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: theme.palette.themePrimary,
        },
        iconHovered: {
            color: theme.palette.themePrimary
        },
        rootPressed: {
            color: theme.palette.black,
        },
        rootExpanded: {
            color: theme.palette.themePrimary
        },
        iconPressed: {
            color: theme.palette.themeDarker
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary,
            backgroundColor: 'transparent'
        },
        rootChecked: {
            color: theme.palette.black,
        },
        iconChecked: {
            color: theme.palette.themeDarker
        },
        flexContainer: {
            justifyContent: 'flex-start'
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        iconDisabled: {
            color: 'inherit'
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        },
        textContainer: {
            flexGrow: 0
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, actionButtonStyles, customStyles);
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(10);
var SplitButton_styles_1 = __webpack_require__(18);
var ButtonThemes_1 = __webpack_require__(56);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, primary) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var compoundButtonStyles = {
        root: {
            maxWidth: '280px',
            minHeight: '72px',
            height: 'auto',
            padding: '20px'
        },
        flexContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            minWidth: '100%',
            margin: ''
        },
        textContainer: {
            textAlign: 'left'
        },
        icon: {
            fontSize: '2em',
            lineHeight: '1em',
            height: '1em',
            margin: '0px 8px 0px 0px',
            flexBasis: '1em',
            flexShrink: '0'
        },
        label: {
            margin: '0 0 5px',
            lineHeight: '100%',
            fontWeight: Styling_1.FontWeights.semibold
        },
        description: [
            theme.fonts.small,
            {
                lineHeight: '100%'
            }
        ],
    };
    var standardCompoundTheme = {
        description: {
            color: theme.palette.neutralSecondary,
        },
        descriptionHovered: {
            color: theme.palette.neutralDark
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    var primaryCompoundTheme = {
        description: {
            color: theme.palette.white,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        descriptionHovered: {
            color: theme.palette.white,
            selectors: (_b = {},
                _b[Styling_1.HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _b)
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, compoundButtonStyles, primary ? ButtonThemes_1.primaryStyles(theme) : ButtonThemes_1.standardStyles(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
    var _a, _b;
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(10);
var SplitButton_styles_1 = __webpack_require__(18);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: theme.palette.themeDarker
        },
        rootPressed: {
            color: theme.palette.themePrimary
        },
        rootExpanded: {
            color: theme.palette.themePrimary
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var BaseButton_1 = __webpack_require__(7);
var Utilities_1 = __webpack_require__(1);
var CommandBarButton_styles_1 = __webpack_require__(160);
var CommandBarButton = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarButton, _super);
    function CommandBarButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    CommandBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: 'ms-Button--commandBar', styles: CommandBarButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    CommandBarButton = tslib_1.__decorate([
        Utilities_1.customizable('CommandBarButton', ['theme'])
    ], CommandBarButton);
    return CommandBarButton;
}(Utilities_1.BaseComponent));
exports.CommandBarButton = CommandBarButton;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(10);
var SplitButton_styles_1 = __webpack_require__(18);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var baseSplitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var commandButtonStyles = {
        root: {
            minWidth: '40px',
            backgroundColor: theme.palette.neutralLighter,
            color: theme.palette.neutralPrimary,
            padding: '0 4px'
        },
        rootHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: theme.palette.neutralDark
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralQuaternary,
            color: theme.palette.black,
        },
        label: {
            fontWeight: 'normal' // theme.fontWeights.semibold,
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, commandButtonStyles, baseSplitButtonStyles, customStyles);
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var DefaultButton_1 = __webpack_require__(17);
var Utilities_1 = __webpack_require__(1);
var MessageBarButton_styles_1 = __webpack_require__(162);
var MessageBarButton = /** @class */ (function (_super) {
    tslib_1.__extends(MessageBarButton, _super);
    function MessageBarButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, this.props, { styles: MessageBarButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    MessageBarButton = tslib_1.__decorate([
        Utilities_1.customizable('MessageBarButton', ['theme'])
    ], MessageBarButton);
    return MessageBarButton;
}(Utilities_1.BaseComponent));
exports.MessageBarButton = MessageBarButton;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(10);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var messageBarButtonStyles = {
        root: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.neutralPrimary
        },
        rootHovered: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            color: theme.palette.neutralDark
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralTertiary,
            color: theme.palette.neutralDark
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, messageBarButtonStyles, customStyles);
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(164), exports);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(165), exports);


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var SearchBox_base_1 = __webpack_require__(166);
var SearchBox_styles_1 = __webpack_require__(167);
exports.SearchBox = Utilities_1.styled(SearchBox_base_1.SearchBoxBase, SearchBox_styles_1.getStyles);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Button_1 = __webpack_require__(11);
var Icon_1 = __webpack_require__(15);
var getClassNames = Utilities_1.classNamesFunction();
var SearchBoxBase = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBoxBase, _super);
    function SearchBoxBase(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: props.value || '',
            hasFocus: false,
            id: Utilities_1.getId('SearchBox')
        };
        return _this;
    }
    SearchBoxBase.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            this._latestValue = newProps.value;
            this.setState({
                value: newProps.value
            });
        }
    };
    SearchBoxBase.prototype.render = function () {
        var _a = this.props, labelText = _a.labelText, className = _a.className, disabled = _a.disabled, underlined = _a.underlined, getStyles = _a.getStyles, theme = _a.theme;
        var _b = this.state, value = _b.value, hasFocus = _b.hasFocus, id = _b.id;
        var classNames = getClassNames(getStyles, {
            theme: theme,
            className: className,
            underlined: underlined,
            hasFocus: hasFocus,
            disabled: disabled,
            hasInput: value.length > 0
        });
        return (React.createElement("div", { ref: this._resolveRef('_rootElement'), className: classNames.root, onFocusCapture: this._onFocusCapture },
            React.createElement("div", { className: classNames.iconContainer },
                React.createElement(Icon_1.Icon, { className: classNames.icon, iconName: 'Search' })),
            React.createElement("input", { id: id, className: classNames.field, placeholder: labelText, onChange: this._onInputChange, onInput: this._onInputChange, onKeyDown: this._onKeyDown, value: value, disabled: this.props.disabled, "aria-label": this.props.ariaLabel ? this.props.ariaLabel : this.props.labelText, ref: this._resolveRef('_inputElement') }),
            value.length > 0 &&
                React.createElement("div", { className: classNames.clearButton },
                    React.createElement(Button_1.IconButton, { styles: { root: { height: 'auto' }, icon: { fontSize: '12px' } }, onClick: this._onClearClick, iconProps: { iconName: 'Clear' } }))));
    };
    /**
     * Sets focus to the search box input field
     */
    SearchBoxBase.prototype.focus = function () {
        if (this._inputElement) {
            this._inputElement.focus();
        }
    };
    SearchBoxBase.prototype._onClear = function (ev) {
        this.props.onClear && this.props.onClear(ev);
        if (!ev.defaultPrevented) {
            this._latestValue = '';
            this.setState({
                value: ''
            });
            this._callOnChange('');
            ev.stopPropagation();
            ev.preventDefault();
            this._inputElement.focus();
        }
    };
    SearchBoxBase.prototype._onFocusCapture = function (ev) {
        this.setState({
            hasFocus: true
        });
        this._events.on(this._rootElement, 'blur', this._onBlur, true);
        if (this.props.onFocus) {
            this.props.onFocus(ev);
        }
    };
    SearchBoxBase.prototype._onClearClick = function (ev) {
        this._onClear(ev);
    };
    SearchBoxBase.prototype._onKeyDown = function (ev) {
        switch (ev.which) {
            case 27 /* escape */:
                this.props.onEscape && this.props.onEscape(ev);
                if (!ev.defaultPrevented) {
                    this._onClear(ev);
                }
                break;
            case 13 /* enter */:
                if (this.props.onSearch && this.state.value.length > 0) {
                    this.props.onSearch(this.state.value);
                }
                break;
            default:
                this.props.onKeyDown && this.props.onKeyDown(ev);
                if (!ev.defaultPrevented) {
                    return;
                }
        }
        // We only get here if the keypress has been handled,
        // or preventDefault was called in case of default keyDown handler
        ev.preventDefault();
        ev.stopPropagation();
    };
    SearchBoxBase.prototype._onBlur = function (ev) {
        this._events.off(this._rootElement, 'blur');
        this.setState({
            hasFocus: false
        });
        if (this.props.onBlur) {
            this.props.onBlur(ev);
        }
    };
    SearchBoxBase.prototype._onInputChange = function (ev) {
        var value = this._inputElement.value;
        if (value === this._latestValue) {
            return;
        }
        this._latestValue = value;
        this.setState({ value: value });
        this._callOnChange(value);
    };
    SearchBoxBase.prototype._callOnChange = function (newValue) {
        var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
        // Call @deprecated method.
        if (onChanged) {
            onChanged(newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    SearchBoxBase.defaultProps = {
        labelText: 'Search',
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBoxBase.prototype, "_onFocusCapture", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBoxBase.prototype, "_onClearClick", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBoxBase.prototype, "_onKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBoxBase.prototype, "_onBlur", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBoxBase.prototype, "_onInputChange", null);
    SearchBoxBase = tslib_1.__decorate([
        Utilities_1.customizable('SearchBox', ['theme'])
    ], SearchBoxBase);
    return SearchBoxBase;
}(Utilities_1.BaseComponent));
exports.SearchBoxBase = SearchBoxBase;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(3);
function getStyles(props) {
    var theme = props.theme, underlined = props.underlined, disabled = props.disabled, hasFocus = props.hasFocus, className = props.className, hasInput = props.hasInput;
    var palette = theme.palette, fonts = theme.fonts;
    return {
        root: [
            'ms-SearchBox',
            fonts.medium,
            Styling_1.normalize,
            {
                color: palette.neutralPrimary,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'stretch',
                padding: '0 0 0 8px',
                border: "1px solid " + palette.neutralTertiary,
                height: 32,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        border: '1px solid WindowText'
                    },
                    _a[':hover'] = {
                        borderColor: palette.neutralDark,
                        $label: {
                            color: palette.black,
                            $iconContainer: {
                                color: palette.themeDark
                            }
                        }
                    },
                    _a)
            },
            hasFocus && [
                'is-active',
                {
                    borderColor: palette.themePrimary,
                    selectors: (_b = {
                            ':hover': {
                                borderColor: palette.themePrimary,
                            }
                        },
                        _b[Styling_1.HighContrastSelector] = {
                            borderColor: 'Highlight'
                        },
                        _b)
                }
            ],
            disabled && [
                'is-disabled',
                {
                    borderColor: palette.neutralLighter,
                    backgroundColor: palette.neutralLighter,
                    pointerEvents: 'none',
                    cursor: 'default',
                }
            ],
            underlined && [
                'is-underlined',
                {
                    borderWidth: '0 0 1px 0'
                }
            ],
            underlined && disabled && {
                backgroundColor: 'transparent'
            },
            hasInput && 'can-clear',
            className
        ],
        iconContainer: [
            'ms-SearchBox-iconContainer',
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: 16,
                width: 32,
                textAlign: 'center',
                transition: "width " + Styling_1.AnimationVariables.durationValue1,
                color: palette.themePrimary
            },
            hasFocus && {
                width: 4,
                transition: "width  " + Styling_1.AnimationVariables.durationValue1
            },
            disabled && {
                color: palette.neutralTertiary
            }
        ],
        icon: [
            'ms-SearchBox-icon',
            {
                opacity: 1,
                transition: "opacity " + Styling_1.AnimationVariables.durationValue1 + " 0s"
            },
            hasFocus && {
                opacity: 0,
                transition: "opacity 0 " + Styling_1.AnimationVariables.durationValue1
            }
        ],
        clearButton: [
            'ms-SearchBox-clearButton',
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                cursor: 'pointer',
                flexBasis: '32px',
                flexShrink: 0,
                padding: 1,
                color: palette.themePrimary,
            }
        ],
        field: [
            'ms-SearchBox-field',
            Styling_1.normalize,
            {
                border: 'none',
                outline: 'none',
                fontWeight: 'inherit',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                color: palette.neutralPrimary,
                backgroundColor: 'transparent',
                flex: '1 1 0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // This padding forces the text placement to round up.
                paddingBottom: 0.5,
                // This removes the IE specific clear button in the input since we implimented our own
                selectors: {
                    '::-ms-clear': {
                        display: 'none'
                    }
                }
            },
            disabled && {
                color: palette.neutralTertiary
            }
        ]
    };
    var _a, _b;
}
exports.getStyles = getStyles;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(169), exports);


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(170), exports);


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var FocusZone_1 = __webpack_require__(50);
var Button_1 = __webpack_require__(11);
var Icon_1 = __webpack_require__(15);
var stylesImport = __webpack_require__(171);
var styles = stylesImport;
var Styling_1 = __webpack_require__(3);
// The number pixels per indentation level for Nav links.
var _indentationSize = 14;
// The number of pixels of left margin
var _baseIndent = 3;
// The number of pixels of padding to add to the far side of the button (allows ellipsis to happen)
var _farSidePadding = 20;
// global var used in _isLinkSelectedKey
var _urlResolver;
function isRelativeUrl(url) {
    // A URL is relative if it has no protocol.
    return !!url && !/^[a-z0-9+-.]:\/\//i.test(url);
}
exports.isRelativeUrl = isRelativeUrl;
var Nav = /** @class */ (function (_super) {
    tslib_1.__extends(Nav, _super);
    function Nav(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isGroupCollapsed: {},
            isLinkExpandStateChanged: false,
            selectedKey: props.initialSelectedKey || props.selectedKey,
        };
        if (props.groups) {
            for (var _i = 0, _a = props.groups; _i < _a.length; _i++) {
                var group = _a[_i];
                if (group.collapseByDefault && group.name) {
                    _this.state.isGroupCollapsed[group.name] = true;
                }
            }
        }
        _this._hasExpandButton = false;
        return _this;
    }
    Nav.prototype.componentWillReceiveProps = function (newProps) {
        var newGroups = newProps.groups || [];
        var isGroupCollapsed = this.state.isGroupCollapsed;
        // If the component's props were updated, new groups may have been added, which may have
        // collapseByDefault set. Ensure that setting is respected for any new groups.
        // (If isGroupCollapsed is already set for a group, don't overwrite that.)
        var hasUpdated = false;
        for (var _i = 0, newGroups_1 = newGroups; _i < newGroups_1.length; _i++) {
            var newGroup = newGroups_1[_i];
            if (newGroup.name && newGroup.collapseByDefault && !isGroupCollapsed.hasOwnProperty(newGroup.name)) {
                isGroupCollapsed[newGroup.name] = true;
                hasUpdated = true;
            }
        }
        if (hasUpdated) {
            this.setState({
                isGroupCollapsed: isGroupCollapsed
            });
        }
    };
    Nav.prototype.render = function () {
        var _a = this.props, groups = _a.groups, className = _a.className, isOnTop = _a.isOnTop;
        if (!groups) {
            return null;
        }
        // When groups[x].name is specified or any of the links have children, the expand/collapse
        // chevron button is shown and different padding is needed. _hasExpandButton marks this condition.
        this._hasExpandButton = groups.some(function (group) {
            return group ? !!group.name || (group.links && group.links.some(function (link) {
                return !!(link && link.links && link.links.length);
            })) : false;
        });
        var groupElements = groups.map(this._renderGroup);
        return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical },
            React.createElement("nav", { role: 'navigation', className: Utilities_1.css('ms-Nav', styles.root, className, isOnTop && Utilities_1.css('is-onTop', styles.rootIsOnTop, Styling_1.AnimationClassNames.slideRightIn40)) }, groupElements)));
    };
    Object.defineProperty(Nav.prototype, "selectedKey", {
        get: function () {
            return this.state.selectedKey;
        },
        enumerable: true,
        configurable: true
    });
    Nav.prototype._onRenderLink = function (link) {
        return (React.createElement("div", { className: Utilities_1.css('ms-Nav-linkText', styles.linkText) }, link.name));
    };
    Nav.prototype._renderNavLink = function (link, linkIndex, nestingLevel) {
        var isRtl = Utilities_1.getRTL();
        var paddingBefore = _indentationSize * nestingLevel + _baseIndent;
        var buttonStyles = {
            root: (_a = {},
                _a[isRtl ? 'paddingRight' : 'paddingLeft'] = paddingBefore,
                _a[isRtl ? 'paddingLeft' : 'paddingRight'] = _farSidePadding,
                _a),
            textContainer: {
                overflow: 'hidden',
            },
            label: {
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                lineHeight: '36px'
            }
        };
        var _b = this.props.onRenderLink, onRenderLink = _b === void 0 ? this._onRenderLink : _b;
        // Prevent hijacking of the parent window if link.target is defined
        var rel = link.url && link.target && !isRelativeUrl(link.url) ? 'noopener noreferrer' : undefined;
        return (React.createElement(Button_1.ActionButton, { className: Styling_1.mergeStyles('ms-Nav-link' + link.onClick && 'ms-Nav-linkButton', styles.link, link.onClick && !link.forceAnchor && styles.buttonEntry, this._hasExpandButton && 'isOnExpanded'), styles: buttonStyles, href: link.url || (link.forceAnchor ? 'javascript:' : undefined), iconProps: { iconName: link.icon || '' }, description: link.title || link.name, onClick: link.onClick ? this._onNavButtonLinkClicked.bind(this, link) : this._onNavAnchorLinkClicked.bind(this, link), title: link.title || link.name, target: link.target, rel: rel, "aria-label": link.ariaLabel }, onRenderLink(link, this._onRenderLink)));
        var _a;
    };
    Nav.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
        var isLinkSelected = this._isLinkSelected(link);
        var isRtl = Utilities_1.getRTL();
        var absolutePositionString = _indentationSize * nestingLevel + 1 + "px";
        return (React.createElement("div", tslib_1.__assign({}, Utilities_1.getNativeProps(link, Utilities_1.divProperties), { key: link.key || linkIndex, className: Utilities_1.css('ms-Nav-compositeLink', styles.compositeLink, !!link.isExpanded && 'is-expanded', isLinkSelected && 'is-selected', !!link.isExpanded && styles.compositeLinkIsExpanded, isLinkSelected && styles.compositeLinkIsSelected) }),
            (link.links && link.links.length > 0 ?
                React.createElement("button", { className: Styling_1.mergeStyles('ms-Nav-chevronButton ms-Nav-chevronButton--link', styles.chevronButton, styles.chevronButtonLink, isRtl && {
                        right: absolutePositionString,
                    }, !isRtl && {
                        left: absolutePositionString,
                    }), onClick: this._onLinkExpandClicked.bind(this, link), "aria-label": this.props.expandButtonAriaLabel, "aria-expanded": link.isExpanded ? 'true' : 'false' },
                    React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-Nav-chevron', styles.chevronIcon, link.isExpanded), iconName: 'ChevronDown' })) : null),
            this._renderNavLink(link, linkIndex, nestingLevel)));
    };
    Nav.prototype._renderLink = function (link, linkIndex, nestingLevel) {
        return (React.createElement("li", { key: link.key || linkIndex, role: 'listitem', className: Utilities_1.css(styles.navItem) },
            this._renderCompositeLink(link, linkIndex, nestingLevel),
            (link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null)));
    };
    Nav.prototype._renderLinks = function (links, nestingLevel) {
        var _this = this;
        if (!links || !links.length) {
            return null;
        }
        var linkElements = links.map(function (link, linkIndex) { return _this._renderLink(link, linkIndex, nestingLevel); });
        return (React.createElement("ul", { role: 'list', "aria-label": this.props.ariaLabel, className: Utilities_1.css(styles.navItems) }, linkElements));
    };
    Nav.prototype._renderGroup = function (group, groupIndex) {
        var isGroupExpanded = !this.state.isGroupCollapsed[group.name];
        return (React.createElement("div", { key: groupIndex, className: Utilities_1.css('ms-Nav-group', styles.group, isGroupExpanded && ('is-expanded ' + styles.groupIsExpanded)) },
            (group.name ?
                React.createElement("button", { className: Utilities_1.css('ms-Nav-chevronButton ms-Nav-chevronButton--group ms-Nav-groupHeaderFontSize', styles.chevronButton, styles.chevronButtonIsGroup, styles.groupHeaderFontSize), onClick: this._onGroupHeaderClicked.bind(this, group) },
                    React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-Nav-chevron', styles.chevronIcon, isGroupExpanded && styles.chevronIsExpanded), iconName: 'ChevronDown' }),
                    group.name) : null),
            React.createElement("div", { className: Utilities_1.css('ms-Nav-groupContent', Styling_1.AnimationClassNames.slideDownIn20, styles.groupContent) }, this._renderLinks(group.links, 0 /* nestingLevel */))));
    };
    Nav.prototype._onGroupHeaderClicked = function (group, ev) {
        var isGroupCollapsed = this.state.isGroupCollapsed;
        var groupKey = group.name;
        var isCollapsed = !isGroupCollapsed[groupKey];
        if (group.onHeaderClick) {
            group.onHeaderClick(ev, isCollapsed);
        }
        isGroupCollapsed[groupKey] = isCollapsed;
        this.setState({ isGroupCollapsed: isGroupCollapsed });
        ev.preventDefault();
        ev.stopPropagation();
    };
    Nav.prototype._onLinkExpandClicked = function (link, ev) {
        var onLinkExpandClick = this.props.onLinkExpandClick;
        if (onLinkExpandClick) {
            onLinkExpandClick(ev, link);
        }
        if (!ev.defaultPrevented) {
            link.isExpanded = !link.isExpanded;
            this.setState({ isLinkExpandStateChanged: true });
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    Nav.prototype._onNavAnchorLinkClicked = function (link, ev) {
        if (this.props.onLinkClick) {
            this.props.onLinkClick(ev, link);
        }
        this.setState({ selectedKey: link.key });
    };
    Nav.prototype._onNavButtonLinkClicked = function (link, ev) {
        if (link.onClick) {
            link.onClick(ev, link);
        }
        this.setState({ selectedKey: link.key });
    };
    Nav.prototype._isLinkSelected = function (link) {
        // if caller passes in selectedKey, use it as first choice or
        // if current state.selectedKey (from addressbar) is match to the link
        if (this.props.selectedKey !== undefined) {
            return link.key === this.props.selectedKey;
        }
        else if (this.state.selectedKey !== undefined && link.key === this.state.selectedKey) {
            return true;
        }
        // resolve is not supported for ssr
        if (typeof (window) === 'undefined') {
            return false;
        }
        if (!link.url) {
            return false;
        }
        _urlResolver = _urlResolver || document.createElement('a');
        _urlResolver.href = link.url || '';
        var target = _urlResolver.href;
        if (location.href === target) {
            return true;
        }
        if (location.protocol + '//' + location.host + location.pathname === target) {
            return true;
        }
        if (location.hash) {
            // Match the hash to the url.
            if (location.hash === link.url) {
                return true;
            }
            // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
            _urlResolver.href = location.hash.substring(1);
            return _urlResolver.href === target;
        }
        return false;
    };
    Nav.defaultProps = {
        groups: null
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Nav.prototype, "_renderGroup", null);
    return Nav;
}(Utilities_1.BaseComponent));
exports.Nav = Nav;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(5);
load_themed_styles_1.loadStyles([{ "rawString": ".root_4781cc33{overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rootIsOnTop_4781cc33{position:absolute}.navItems_4781cc33{list-style-type:none}.navItems_4781cc33,.navItems_4781cc33>.navItem_4781cc33{padding:0}.groupContent_4781cc33{display:none;margin-bottom:40px}.group_4781cc33.groupIsExpanded_4781cc33 .groupContent_4781cc33{display:block}.icon_4781cc33{padding:0px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear, -webkit-transform .1s linear}[dir='ltr'] .iconLink_4781cc33{margin-right:4px}[dir='rtl'] .iconLink_4781cc33{margin-left:4px}.chevronButton_4781cc33{display:block;font-weight:400;font-size:12px;line-height:36px;margin:5px 0;padding:0px 20px 0px 28px;background:none;border:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;cursor:pointer;color:" }, { "theme": "bodyText", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "bodyBackground", "defaultValue": "#ffffff" }, { "rawString": "}html[dir='ltr'] .chevronButton_4781cc33{text-align:left}html[dir='rtl'] .chevronButton_4781cc33{text-align:right}html[dir='rtl'] .chevronButton_4781cc33{padding:0px 28px 0px 20px}.chevronButton_4781cc33:visited{color:inherit}.chevronButton_4781cc33:hover{color:" }, { "theme": "bodyText", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": "}.chevronButton_4781cc33.chevronButtonIsGroup_4781cc33{width:100%;height:36px;border-bottom:1px solid " }, { "theme": "bodyDivider", "defaultValue": "#eaeaea" }, { "rawString": "}.chevronIcon_4781cc33{position:absolute;height:36px;line-height:36px;font-size:12px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear, -webkit-transform .1s linear}[dir='ltr'] .chevronIcon_4781cc33{left:8px}[dir='rtl'] .chevronIcon_4781cc33{right:8px}.chevronIsExpanded_4781cc33{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.linkText_4781cc33{margin:0 4px;overflow:hidden;vertical-align:middle;text-overflow:ellipsis}.compositeLink_4781cc33{display:block;position:relative;color:" }, { "theme": "bodyText", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "bodyBackground", "defaultValue": "#ffffff" }, { "rawString": "}.compositeLink_4781cc33 .chevronButton_4781cc33.chevronButtonLink_4781cc33{display:block;width:26px;height:34px;position:absolute;top:1px;z-index:1;padding:0;margin:0}.compositeLink_4781cc33 .chevronButton_4781cc33.chevronButtonLink_4781cc33 .chevronIcon_4781cc33{top:0}.compositeLink_4781cc33:hover .link_4781cc33,.compositeLink_4781cc33:hover .chevronButton_4781cc33{background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": ";color:" }, { "theme": "bodyText", "defaultValue": "#333333" }, { "rawString": "}.compositeLink_4781cc33.compositeLinkIsExpanded_4781cc33 .chevronIcon_4781cc33{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .link_4781cc33,.compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .chevronButton_4781cc33{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .link_4781cc33:after,.compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .chevronButton_4781cc33:after{content:'';position:absolute;top:0;bottom:0}html[dir='ltr'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .link_4781cc33:after,html[dir='ltr'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .chevronButton_4781cc33:after{border-left:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}html[dir='rtl'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .link_4781cc33:after,html[dir='rtl'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .chevronButton_4781cc33:after{border-right:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}[dir='ltr'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .link_4781cc33:after,[dir='ltr'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .chevronButton_4781cc33:after{right:0}[dir='rtl'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .link_4781cc33:after,[dir='rtl'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .chevronButton_4781cc33:after{left:0}[dir='ltr'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .link_4781cc33:after,[dir='ltr'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .chevronButton_4781cc33:after{left:0}[dir='rtl'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .link_4781cc33:after,[dir='rtl'] .compositeLink_4781cc33.compositeLinkIsSelected_4781cc33 .chevronButton_4781cc33:after{right:0}.link_4781cc33{display:block;position:relative;height:36px;width:100%;line-height:36px;text-decoration:none;cursor:pointer;text-overflow:ellipsis;text-decoration:none;white-space:nowrap;overflow:hidden}.buttonEntry_4781cc33{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.groupHeaderFontSize_4781cc33{font-size:17px;font-weight:300}.chevronButton_4781cc33::-moz-focus-inner,.chevronButtonGroup_4781cc33::-moz-focus-inner,.chevronButtonLink_4781cc33::-moz-focus-inner,.link_4781cc33::-moz-focus-inner{border:0}.chevronButton_4781cc33,.chevronButtonGroup_4781cc33,.chevronButtonLink_4781cc33,.link_4781cc33{outline:transparent}.chevronButton_4781cc33,.chevronButtonGroup_4781cc33,.chevronButtonLink_4781cc33,.link_4781cc33{position:relative}.ms-Fabric.is-focusVisible .chevronButton_4781cc33:focus:after,.ms-Fabric.is-focusVisible .chevronButtonGroup_4781cc33:focus:after,.ms-Fabric.is-focusVisible .chevronButtonLink_4781cc33:focus:after,.ms-Fabric.is-focusVisible .link_4781cc33:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "focusBorder", "defaultValue": "#000000" }, { "rawString": "}.root_4781cc33 .link_4781cc33 .ms-Button-label{font-size:14px;font-weight:400}\n" }]);
exports.root = "root_4781cc33";
exports.rootIsOnTop = "rootIsOnTop_4781cc33";
exports.navItems = "navItems_4781cc33";
exports.navItem = "navItem_4781cc33";
exports.groupContent = "groupContent_4781cc33";
exports.group = "group_4781cc33";
exports.groupIsExpanded = "groupIsExpanded_4781cc33";
exports.icon = "icon_4781cc33";
exports.iconLink = "iconLink_4781cc33";
exports.chevronButton = "chevronButton_4781cc33";
exports.chevronButtonIsGroup = "chevronButtonIsGroup_4781cc33";
exports.chevronIcon = "chevronIcon_4781cc33";
exports.chevronIsExpanded = "chevronIsExpanded_4781cc33";
exports.linkText = "linkText_4781cc33";
exports.compositeLink = "compositeLink_4781cc33";
exports.chevronButtonLink = "chevronButtonLink_4781cc33";
exports.link = "link_4781cc33";
exports.compositeLinkIsExpanded = "compositeLinkIsExpanded_4781cc33";
exports.compositeLinkIsSelected = "compositeLinkIsSelected_4781cc33";
exports.buttonEntry = "buttonEntry_4781cc33";
exports.groupHeaderFontSize = "groupHeaderFontSize_4781cc33";
exports.chevronButtonGroup = "chevronButtonGroup_4781cc33";


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(173), exports);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(174), exports);
tslib_1.__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var index_1 = __webpack_require__(175);
var Panel_types_1 = __webpack_require__(61);
var Layer_1 = __webpack_require__(27);
var Overlay_1 = __webpack_require__(177);
var Popup_1 = __webpack_require__(54);
var Button_1 = __webpack_require__(11);
var Styling_1 = __webpack_require__(3);
var stylesImport = __webpack_require__(181);
var styles = stylesImport;
var theme = Styling_1.getTheme();
var Panel = /** @class */ (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isFooterSticky: false,
            isOpen: false,
            isAnimating: false,
            id: Utilities_1.getId('Panel')
        };
        return _this;
    }
    Panel.prototype.componentDidMount = function () {
        this._events.on(window, 'resize', this._updateFooterPosition);
        if (this.props.isOpen) {
            this.open();
        }
    };
    Panel.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.isOpen !== this.state.isOpen) {
            if (newProps.isOpen) {
                this.open();
            }
            else {
                this.dismiss();
            }
        }
    };
    Panel.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, hasCloseButton = _a.hasCloseButton, headerText = _a.headerText, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isLightDismiss = _a.isLightDismiss, isHiddenOnDismiss = _a.isHiddenOnDismiss, layerProps = _a.layerProps, type = _a.type, customWidth = _a.customWidth, _c = _a.onLightDismissClick, onLightDismissClick = _c === void 0 ? this._onPanelClick : _c, _d = _a.onRenderNavigation, onRenderNavigation = _d === void 0 ? this._onRenderNavigation : _d, _e = _a.onRenderHeader, onRenderHeader = _e === void 0 ? this._onRenderHeader : _e, _f = _a.onRenderBody, onRenderBody = _f === void 0 ? this._onRenderBody : _f, _g = _a.onRenderFooter, onRenderFooter = _g === void 0 ? this._onRenderFooter : _g;
        var _h = this.state, isOpen = _h.isOpen, isAnimating = _h.isAnimating, id = _h.id;
        var isLeft = type === Panel_types_1.PanelType.smallFixedNear ? true : false;
        var isRTL = Utilities_1.getRTL();
        var isOnRightSide = isRTL ? isLeft : !isLeft;
        var headerTextId = id + '-headerText';
        var customWidthStyles = (type === Panel_types_1.PanelType.custom) ? { width: customWidth } : {};
        var renderProps = tslib_1.__assign({}, this.props, { componentId: id });
        if (!isOpen && !isAnimating && !isHiddenOnDismiss) {
            return null;
        }
        var overlay;
        if (isBlocking && isOpen) {
            overlay = (React.createElement(Overlay_1.Overlay, { className: Utilities_1.css(styles.overlay, isOpen && isAnimating && Styling_1.AnimationClassNames.fadeIn200, !isOpen && isAnimating && Styling_1.AnimationClassNames.fadeOut200), isDarkThemed: false, onClick: isLightDismiss ? onLightDismissClick : undefined }));
        }
        return (React.createElement(Layer_1.Layer, tslib_1.__assign({}, layerProps),
            React.createElement(Popup_1.Popup, { role: 'dialog', ariaLabelledBy: headerText && headerTextId, onDismiss: this.dismiss, className: Utilities_1.css(!isOpen && !isAnimating && isHiddenOnDismiss && styles.hiddenPanel) },
                React.createElement("div", { className: Utilities_1.css('ms-Panel', styles.root, className, 
                    // because the RTL animations are not being used, we need to set a class
                    isOpen && ('is-open ' + styles.rootIsOpen), type === Panel_types_1.PanelType.smallFluid && ('ms-Panel--smFluid ' + styles.rootIsSmallFluid), type === Panel_types_1.PanelType.smallFixedNear && ('ms-Panel--smLeft ' + styles.rootIsSmallLeft), type === Panel_types_1.PanelType.smallFixedFar && ('ms-Panel--sm ' + styles.rootIsSmall), type === Panel_types_1.PanelType.medium && ('ms-Panel--md ' + styles.rootIsMedium), (type === Panel_types_1.PanelType.large || type === Panel_types_1.PanelType.largeFixed) && ('ms-Panel--lg ' + styles.rootIsLarge), type === Panel_types_1.PanelType.largeFixed && ('ms-Panel--fixed ' + styles.rootIsFixed), type === Panel_types_1.PanelType.extraLarge && ('ms-Panel--xl ' + styles.rootIsXLarge), type === Panel_types_1.PanelType.custom && ('ms-Panel--custom ' + styles.rootIsCustom), hasCloseButton && ('ms-Panel--hasCloseButton ' + styles.rootHasCloseButton), !isOpen && !isAnimating && isHiddenOnDismiss && styles.hiddenPanel) },
                    overlay,
                    React.createElement(index_1.FocusTrapZone, { className: Utilities_1.css('ms-Panel-main', styles.main, isOpen && isAnimating && !isOnRightSide && Styling_1.AnimationClassNames.slideRightIn40, isOpen && isAnimating && isOnRightSide && Styling_1.AnimationClassNames.slideLeftIn40, !isOpen && isAnimating && !isOnRightSide && Styling_1.AnimationClassNames.slideLeftOut40, !isOpen && isAnimating && isOnRightSide && Styling_1.AnimationClassNames.slideRightOut40), style: customWidthStyles, elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isLightDismiss || isHiddenOnDismiss, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector },
                        React.createElement("div", { className: Utilities_1.css('ms-Panel-commands'), "data-is-visible": true }, onRenderNavigation(renderProps, this._onRenderNavigation)),
                        React.createElement("div", { className: Utilities_1.css('ms-Panel-contentInner', styles.contentInner) },
                            onRenderHeader(renderProps, this._onRenderHeader),
                            onRenderBody(renderProps, this._onRenderBody),
                            onRenderFooter(renderProps, this._onRenderFooter)))))));
    };
    Panel.prototype.open = function () {
        var _this = this;
        if (!this.state.isOpen) {
            this.setState({
                isOpen: true,
                isAnimating: true
            }, function () {
                _this._async.setTimeout(_this._onTransitionComplete, 200);
            });
        }
    };
    Panel.prototype.dismiss = function () {
        var _this = this;
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                isAnimating: true
            }, function () {
                _this._async.setTimeout(_this._onTransitionComplete, 200);
            });
            if (this.props.onDismiss) {
                this.props.onDismiss();
            }
        }
    };
    Panel.prototype._onRenderNavigation = function (props) {
        var closeButtonAriaLabel = props.closeButtonAriaLabel, hasCloseButton = props.hasCloseButton;
        if (hasCloseButton) {
            return (React.createElement("div", { className: Utilities_1.css('ms-Panel-navigation', styles.navigation) },
                React.createElement(Button_1.IconButton, { styles: {
                        root: {
                            height: 'auto',
                            width: '44px',
                            color: theme.palette.neutralSecondary,
                            fontSize: Styling_1.IconFontSizes.large,
                        },
                        rootHovered: {
                            color: theme.palette.neutralPrimary
                        }
                    }, className: Utilities_1.css('ms-Panel-closeButton ms-PanelAction-close'), onClick: this._onPanelClick, ariaLabel: closeButtonAriaLabel, "data-is-visible": true, iconProps: { iconName: 'Cancel' } })));
        }
        return null;
    };
    Panel.prototype._onRenderHeader = function (props) {
        var headerText = props.headerText, componentId = props.componentId, _a = props.headerClassName, headerClassName = _a === void 0 ? '' : _a;
        if (headerText) {
            return (React.createElement("div", { className: Utilities_1.css('ms-Panel-header', styles.header) },
                React.createElement("p", { className: Utilities_1.css('ms-Panel-headerText', styles.headerText, headerClassName), id: componentId + '-headerText', role: 'heading' }, headerText)));
        }
        return null;
    };
    Panel.prototype._onRenderBody = function (props) {
        var contentClass = Utilities_1.css('ms-Panel-content', styles.content, props.isFooterAtBottom && styles.contentGrow);
        return (React.createElement("div", { ref: this._resolveRef('_content'), className: contentClass }, props.children));
    };
    Panel.prototype._onRenderFooter = function (props) {
        var isFooterSticky = this.state.isFooterSticky;
        var _a = this.props.onRenderFooterContent, onRenderFooterContent = _a === void 0 ? null : _a;
        if (onRenderFooterContent) {
            return (React.createElement("div", { className: Utilities_1.css('ms-Panel-footer', styles.footer, isFooterSticky && styles.footerIsSticky) },
                React.createElement("div", { className: Utilities_1.css('ms-Panel-footerInner', styles.footerInner) }, onRenderFooterContent())));
        }
        return null;
    };
    Panel.prototype._updateFooterPosition = function () {
        var _content = this._content;
        if (_content) {
            var height = _content.clientHeight;
            var innerHeight_1 = _content.scrollHeight;
            this.setState({
                isFooterSticky: height < innerHeight_1 ? true : false
            });
        }
    };
    Panel.prototype._onPanelClick = function () {
        this.dismiss();
    };
    Panel.prototype._onTransitionComplete = function () {
        this.setState({
            isAnimating: false
        });
        if (!this.state.isOpen && this.props.onDismissed) {
            this.props.onDismissed();
        }
    };
    Panel.defaultProps = {
        isHiddenOnDismiss: false,
        isOpen: false,
        isBlocking: true,
        hasCloseButton: true,
        type: Panel_types_1.PanelType.smallFixedFar,
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "dismiss", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onRenderNavigation", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onRenderHeader", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onRenderBody", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onRenderFooter", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onPanelClick", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Panel.prototype, "_onTransitionComplete", null);
    return Panel;
}(Utilities_1.BaseComponent));
exports.Panel = Panel;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(176), exports);


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var FocusTrapZone = /** @class */ (function (_super) {
    tslib_1.__extends(FocusTrapZone, _super);
    function FocusTrapZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isInFocusStack = false;
        _this._isInClickStack = false;
        return _this;
    }
    FocusTrapZone.prototype.componentWillMount = function () {
        var _a = this.props, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c;
        if (forceFocusInsideTrap) {
            this._isInFocusStack = true;
            FocusTrapZone._focusStack.push(this);
        }
        if (!isClickableOutsideFocusTrap) {
            this._isInClickStack = true;
            FocusTrapZone._clickStack.push(this);
        }
    };
    FocusTrapZone.prototype.componentDidMount = function () {
        var _a = this.props, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, _d = _a.disableFirstFocus, disableFirstFocus = _d === void 0 ? false : _d;
        this._previouslyFocusedElement = elementToFocusOnDismiss ? elementToFocusOnDismiss : document.activeElement;
        if (!Utilities_1.elementContains(this.refs.root, this._previouslyFocusedElement) && !disableFirstFocus) {
            this.focus();
        }
        if (forceFocusInsideTrap) {
            this._events.on(window, 'focus', this._forceFocusInTrap, true);
        }
        if (!isClickableOutsideFocusTrap) {
            this._events.on(window, 'click', this._forceClickInTrap, true);
        }
    };
    FocusTrapZone.prototype.componentWillReceiveProps = function (nextProps) {
        var elementToFocusOnDismiss = nextProps.elementToFocusOnDismiss;
        if (elementToFocusOnDismiss && this._previouslyFocusedElement !== elementToFocusOnDismiss) {
            this._previouslyFocusedElement = elementToFocusOnDismiss;
        }
    };
    FocusTrapZone.prototype.componentWillUnmount = function () {
        var _this = this;
        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
        this._events.dispose();
        if (this._isInFocusStack || this._isInClickStack) {
            var filter = function (value) {
                return _this !== value;
            };
            if (this._isInFocusStack) {
                FocusTrapZone._focusStack = FocusTrapZone._focusStack.filter(filter);
            }
            if (this._isInClickStack) {
                FocusTrapZone._clickStack = FocusTrapZone._clickStack.filter(filter);
            }
        }
        if (!ignoreExternalFocusing && this._previouslyFocusedElement && typeof this._previouslyFocusedElement.focus === 'function') {
            this._previouslyFocusedElement.focus();
        }
    };
    FocusTrapZone.prototype.render = function () {
        var _a = this.props, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        return (React.createElement("div", tslib_1.__assign({}, divProps, { className: className, ref: 'root', "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyboardHandler, tabIndex: -1, onFocus: this._onRootFocus }), this.props.children));
    };
    /**
     * Need to expose this method in case of popups since focus needs to be set when popup is opened
     */
    FocusTrapZone.prototype.focus = function () {
        var firstFocusableSelector = this.props.firstFocusableSelector;
        var focusSelector = typeof firstFocusableSelector === 'string'
            ? firstFocusableSelector
            : firstFocusableSelector && firstFocusableSelector();
        var _firstFocusableChild;
        var root = this.refs.root;
        if (focusSelector) {
            _firstFocusableChild = root.querySelector('.' + focusSelector);
        }
        else {
            _firstFocusableChild = Utilities_1.getNextElement(root, root.firstChild, true, false, false, true);
        }
        if (_firstFocusableChild) {
            _firstFocusableChild.focus();
        }
    };
    FocusTrapZone.prototype._onRootFocus = function (ev) {
        if (ev.target === this.refs.root) {
            this.focus();
        }
    };
    FocusTrapZone.prototype._onKeyboardHandler = function (ev) {
        if (ev.which !== 9 /* tab */) {
            return;
        }
        var root = this.refs.root;
        var _firstFocusableChild = Utilities_1.getFirstFocusable(root, root.firstChild, true);
        var _lastFocusableChild = Utilities_1.getLastTabbable(root, root.lastChild, true);
        if (ev.shiftKey && _firstFocusableChild === ev.target) {
            _lastFocusableChild.focus();
            ev.preventDefault();
            ev.stopPropagation();
        }
        else if (!ev.shiftKey && _lastFocusableChild === ev.target) {
            _firstFocusableChild.focus();
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    FocusTrapZone.prototype._forceFocusInTrap = function (ev) {
        if (FocusTrapZone._focusStack.length && this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
            var focusedElement = document.activeElement;
            if (!Utilities_1.elementContains(this.refs.root, focusedElement)) {
                this.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    FocusTrapZone.prototype._forceClickInTrap = function (ev) {
        if (FocusTrapZone._clickStack.length && this === FocusTrapZone._clickStack[FocusTrapZone._clickStack.length - 1]) {
            var clickedElement = ev.target;
            if (clickedElement && !Utilities_1.elementContains(this.refs.root, clickedElement)) {
                this.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    FocusTrapZone._focusStack = [];
    FocusTrapZone._clickStack = [];
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusTrapZone.prototype, "_onRootFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusTrapZone.prototype, "_onKeyboardHandler", null);
    return FocusTrapZone;
}(Utilities_1.BaseComponent));
exports.FocusTrapZone = FocusTrapZone;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(178), exports);


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(179), exports);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(180);
var styles = stylesImport;
var Overlay = /** @class */ (function (_super) {
    tslib_1.__extends(Overlay, _super);
    function Overlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Overlay.prototype.componentDidMount = function () {
        Utilities_1.disableBodyScroll();
    };
    Overlay.prototype.componentWillUnmount = function () {
        Utilities_1.enableBodyScroll();
    };
    Overlay.prototype.render = function () {
        var _a = this.props, isDarkThemed = _a.isDarkThemed, className = _a.className;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        var modifiedClassName = Utilities_1.css('ms-Overlay', styles.root, className, (_b = {},
            _b['ms-Overlay--dark ' + styles.rootIsDark] = isDarkThemed,
            _b));
        return (React.createElement("div", tslib_1.__assign({}, divProps, { className: modifiedClassName })));
        var _b;
    };
    return Overlay;
}(Utilities_1.BaseComponent));
exports.Overlay = Overlay;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(5);
load_themed_styles_1.loadStyles([{ "rawString": ".root_f8052f0e{background-color:" }, { "theme": "whiteTranslucent40", "defaultValue": "rgba(255,255,255,.4)" }, { "rawString": ";position:absolute;bottom:0;left:0;right:0;top:0}.root_f8052f0e.rootIsNone_f8052f0e{visibility:hidden}.root_f8052f0e.rootIsDark_f8052f0e{background-color:" }, { "theme": "blackTranslucent40", "defaultValue": "rgba(0,0,0,.4)" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_f8052f0e{border:1px solid WindowText}}\n" }]);
exports.root = "root_f8052f0e";
exports.rootIsNone = "rootIsNone_f8052f0e";
exports.rootIsDark = "rootIsDark_f8052f0e";


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(5);
load_themed_styles_1.loadStyles([{ "rawString": ".hiddenPanel_cb20db42{visibility:hidden}.root_cb20db42{pointer-events:none;position:absolute;top:0;left:0;right:0;bottom:0}.root_cb20db42 .overlay_cb20db42{pointer-events:none;opacity:1;cursor:pointer;-webkit-transition:opacity .367s cubic-bezier(0.1, 0.9, 0.2, 1);transition:opacity .367s cubic-bezier(0.1, 0.9, 0.2, 1)}.main_cb20db42{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";position:absolute;width:100%;bottom:0;top:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}[dir='ltr'] .main_cb20db42{right:0}[dir='rtl'] .main_cb20db42{left:0}@media (min-width: 480px){.main_cb20db42{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";pointer-events:auto;width:340px}[dir='ltr'] .main_cb20db42{-webkit-box-shadow:-30px 0px 30px -30px rgba(0,0,0,0.2);box-shadow:-30px 0px 30px -30px rgba(0,0,0,0.2)}[dir='rtl'] .main_cb20db42{-webkit-box-shadow:30px 0px 30px -30px rgba(0,0,0,0.2);box-shadow:30px 0px 30px -30px rgba(0,0,0,0.2)}[dir='ltr'] .main_cb20db42{left:auto}[dir='rtl'] .main_cb20db42{right:auto}}.root_cb20db42.rootIsSmall_cb20db42 .main_cb20db42{width:272px}@media (min-width: 480px){.root_cb20db42.rootIsSmall_cb20db42 .main_cb20db42{width:340px}}.root_cb20db42.rootIsSmallLeft_cb20db42 .main_cb20db42{width:272px}[dir='ltr'] .root_cb20db42.rootIsSmallLeft_cb20db42 .main_cb20db42{right:auto}[dir='rtl'] .root_cb20db42.rootIsSmallLeft_cb20db42 .main_cb20db42{left:auto}[dir='ltr'] .root_cb20db42.rootIsSmallLeft_cb20db42 .main_cb20db42{left:0}[dir='rtl'] .root_cb20db42.rootIsSmallLeft_cb20db42 .main_cb20db42{right:0}[dir='ltr'] .root_cb20db42.rootIsSmallLeft_cb20db42 .main_cb20db42{-webkit-box-shadow:30px 0px 30px -30px rgba(0,0,0,0.2);box-shadow:30px 0px 30px -30px rgba(0,0,0,0.2)}[dir='rtl'] .root_cb20db42.rootIsSmallLeft_cb20db42 .main_cb20db42{-webkit-box-shadow:-30px 0px 30px -30px rgba(0,0,0,0.2);box-shadow:-30px 0px 30px -30px rgba(0,0,0,0.2)}.root_cb20db42.rootIsSmallFluid_cb20db42 .main_cb20db42{width:100%}@media (min-width: 768px){.root_cb20db42.rootIsMedium_cb20db42 .main_cb20db42,.root_cb20db42.rootIsLarge_cb20db42 .main_cb20db42,.root_cb20db42.rootIsXLarge_cb20db42 .main_cb20db42,.root_cb20db42.rootIsCustom_cb20db42 .main_cb20db42{width:auto}[dir='ltr'] .root_cb20db42.rootIsMedium_cb20db42 .main_cb20db42,[dir='ltr'] .root_cb20db42.rootIsLarge_cb20db42 .main_cb20db42,[dir='ltr'] .root_cb20db42.rootIsXLarge_cb20db42 .main_cb20db42,[dir='ltr'] .root_cb20db42.rootIsCustom_cb20db42 .main_cb20db42{left:48px}[dir='rtl'] .root_cb20db42.rootIsMedium_cb20db42 .main_cb20db42,[dir='rtl'] .root_cb20db42.rootIsLarge_cb20db42 .main_cb20db42,[dir='rtl'] .root_cb20db42.rootIsXLarge_cb20db42 .main_cb20db42,[dir='rtl'] .root_cb20db42.rootIsCustom_cb20db42 .main_cb20db42{right:48px}}@media (min-width: 1024px){.root_cb20db42.rootIsMedium_cb20db42 .main_cb20db42{width:643px}[dir='ltr'] .root_cb20db42.rootIsMedium_cb20db42 .main_cb20db42{left:auto}[dir='rtl'] .root_cb20db42.rootIsMedium_cb20db42 .main_cb20db42{right:auto}}@media (min-width: 1366px){[dir='ltr'] .root_cb20db42.rootIsLarge_cb20db42 .main_cb20db42{left:428px}[dir='rtl'] .root_cb20db42.rootIsLarge_cb20db42 .main_cb20db42{right:428px}}@media (min-width: 1366px){.root_cb20db42.rootIsLarge_cb20db42.rootIsFixed_cb20db42 .main_cb20db42{width:940px}[dir='ltr'] .root_cb20db42.rootIsLarge_cb20db42.rootIsFixed_cb20db42 .main_cb20db42{left:auto}[dir='rtl'] .root_cb20db42.rootIsLarge_cb20db42.rootIsFixed_cb20db42 .main_cb20db42{right:auto}}@media (min-width: 1366px){[dir='ltr'] .root_cb20db42.rootIsXLarge_cb20db42 .main_cb20db42{left:176px}[dir='rtl'] .root_cb20db42.rootIsXLarge_cb20db42 .main_cb20db42{right:176px}}@media (min-width: 1024px){[dir='ltr'] .root_cb20db42.rootIsCustom_cb20db42 .main_cb20db42{left:auto}[dir='rtl'] .root_cb20db42.rootIsCustom_cb20db42 .main_cb20db42{right:auto}}.root_cb20db42.rootIsOpen_cb20db42 .main_cb20db42{pointer-events:auto}.root_cb20db42.rootIsOpen_cb20db42 .overlay_cb20db42{cursor:pointer;pointer-events:auto}@media screen and (-ms-high-contrast: active){.root_cb20db42.rootIsOpen_cb20db42 .overlay_cb20db42{opacity:0}}.navigation_cb20db42{padding:0 5px;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.contentInner_cb20db42{position:absolute;top:0;bottom:0;left:0;right:0;overflow-y:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(0);transform:translateZ(0)}.rootHasCloseButton_cb20db42 .contentInner_cb20db42{top:44px}.header_cb20db42,.content_cb20db42,.footerInner_cb20db42{padding-left:16px;padding-right:16px}@media (min-width: 768px){.header_cb20db42,.content_cb20db42,.footerInner_cb20db42{padding-left:32px;padding-right:32px}}@media (min-width: 1366px){.header_cb20db42,.content_cb20db42,.footerInner_cb20db42{padding-left:40px;padding-right:40px}}.header_cb20db42{margin:14px 0;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}@media (min-width: 1024px){.header_cb20db42{margin-top:30px}}.content_cb20db42{margin-bottom:0;padding-bottom:20px;overflow-y:auto}.contentGrow_cb20db42{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.footer_cb20db42{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;border-top:1px solid transparent;-webkit-transition:border .367s cubic-bezier(0.1, 0.25, 0.75, 0.9);transition:border .367s cubic-bezier(0.1, 0.25, 0.75, 0.9)}.footerInner_cb20db42{padding-bottom:20px;padding-top:20px}.footerIsSticky_cb20db42{background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border-top-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.headerText_cb20db42{font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";line-height:32px;margin:0}\n" }]);
exports.hiddenPanel = "hiddenPanel_cb20db42";
exports.root = "root_cb20db42";
exports.overlay = "overlay_cb20db42";
exports.main = "main_cb20db42";
exports.rootIsSmall = "rootIsSmall_cb20db42";
exports.rootIsSmallLeft = "rootIsSmallLeft_cb20db42";
exports.rootIsSmallFluid = "rootIsSmallFluid_cb20db42";
exports.rootIsMedium = "rootIsMedium_cb20db42";
exports.rootIsLarge = "rootIsLarge_cb20db42";
exports.rootIsXLarge = "rootIsXLarge_cb20db42";
exports.rootIsCustom = "rootIsCustom_cb20db42";
exports.rootIsFixed = "rootIsFixed_cb20db42";
exports.rootIsOpen = "rootIsOpen_cb20db42";
exports.navigation = "navigation_cb20db42";
exports.contentInner = "contentInner_cb20db42";
exports.rootHasCloseButton = "rootHasCloseButton_cb20db42";
exports.header = "header_cb20db42";
exports.content = "content_cb20db42";
exports.footerInner = "footerInner_cb20db42";
exports.contentGrow = "contentGrow_cb20db42";
exports.footer = "footer_cb20db42";
exports.footerIsSticky = "footerIsSticky_cb20db42";
exports.headerText = "headerText_cb20db42";


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var Button_1 = __webpack_require__(11);
var Image_1 = __webpack_require__(183);
var Label_1 = __webpack_require__(185);
__webpack_require__(189);
var MovieCard = /** @class */ (function (_super) {
    __extends(MovieCard, _super);
    function MovieCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MovieCard.prototype.render = function () {
        var imageProps = {
            src: this.props.imgUrl,
            imageFit: Image_1.ImageFit.cover
        };
        return React.createElement(Button_1.CompoundButton, { className: "MovieCardContainer", onClick: this.props.onOpenMovie, width: 150, height: 150 },
            React.createElement(Image_1.Image, __assign({ className: "MovieCardContainer-Cover" }, imageProps, { width: 150, height: 150 })),
            React.createElement(Label_1.Label, { className: "MovieCardContainer-Title" }, this.props.description));
    };
    MovieCard.defaultProps = {
        imgUrl: 'http://placehold.it/500x500',
        description: 'No title',
        onOpenMovie: function () { },
        onFavorite: function () { }
    };
    return MovieCard;
}(React.Component));
exports.MovieCard = MovieCard;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(184), exports);


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(186), exports);


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(187), exports);


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Label_classNames_1 = __webpack_require__(188);
var Label = /** @class */ (function (_super) {
    tslib_1.__extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, required = _a.required, children = _a.children, className = _a.className, theme = _a.theme;
        return (React.createElement("label", tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { className: Label_classNames_1.getLabelClassNames(theme, className, !!disabled, !!required).root }), children));
    };
    Label = tslib_1.__decorate([
        Utilities_1.customizable('Label', ['theme'])
    ], Label);
    return Label;
}(Utilities_1.BaseComponent));
exports.Label = Label;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(3);
exports.getLabelClassNames = Utilities_1.memoizeFunction(function (theme, className, disabled, required) {
    return Styling_1.mergeStyleSets({
        root: ['ms-Label',
            {
                color: theme.semanticColors.bodyText,
                boxSizing: 'border-box',
                boxShadow: 'none',
                margin: 0,
                display: 'block',
                padding: '5px 0',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
            },
            disabled && {
                color: theme.semanticColors.disabledBodyText,
                selectors: (_a = {},
                    _a[Styling_1.HighContrastSelector] = {
                        color: 'GrayText'
                    },
                    _a)
            },
            required && {
                selectors: {
                    '::after': {
                        content: "' *'",
                        color: theme.semanticColors.errorText,
                        paddingRight: 12
                    }
                }
            },
            className]
    });
    var _a;
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(30)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./MovieCard.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./MovieCard.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(undefined);
// imports


// module
exports.push([module.i, ".MovieCardContainer {\n  display: flex;\n  background: cadetblue;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n}\n.MovieCardContainer-Cover {\n  flex: none;\n}\n.MovieCardContainer-Title {\n  flex: none;\n}\n", ""]);

// exports


/***/ }),
/* 191 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(30)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./MovieDB.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./MovieDB.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(undefined);
// imports


// module
exports.push([module.i, ".MovieDB {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.MovieDB header {\n  flex: 0 0 50px;\n  background: gold;\n  overflow: hidden;\n  display: flex;\n}\n.MovieDB main {\n  background: yellowgreen;\n  flex: 1 0 100px;\n  overflow: auto;\n}\n.MovieDB-Menu {\n  flex: 0 0 50px;\n}\n.MovieDB-Menu-Icon {\n  font-size: 30px;\n  font-weight: bold;\n}\n.MovieDB-Title {\n  color: red;\n  flex: 3 0 120px;\n  margin: 0;\n}\n.MovieDB-SearchBox {\n  float: right;\n  flex-grow: 1 0 150px;\n  margin: 5px;\n}\n", ""]);

// exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fabric_icons_1 = __webpack_require__(195);
var fabric_icons_0_1 = __webpack_require__(196);
var fabric_icons_1_1 = __webpack_require__(197);
var fabric_icons_2_1 = __webpack_require__(198);
var fabric_icons_3_1 = __webpack_require__(199);
var fabric_icons_4_1 = __webpack_require__(200);
var fabric_icons_5_1 = __webpack_require__(201);
var fabric_icons_6_1 = __webpack_require__(202);
var fabric_icons_7_1 = __webpack_require__(203);
var fabric_icons_8_1 = __webpack_require__(204);
var fabric_icons_9_1 = __webpack_require__(205);
var fabric_icons_10_1 = __webpack_require__(206);
var fabric_icons_11_1 = __webpack_require__(207);
__webpack_require__(208);
var DEFAULT_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric/assets/icons/';
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = DEFAULT_BASE_URL; }
    [fabric_icons_1.initializeIcons, fabric_icons_0_1.initializeIcons, fabric_icons_1_1.initializeIcons, fabric_icons_2_1.initializeIcons, fabric_icons_3_1.initializeIcons, fabric_icons_4_1.initializeIcons, fabric_icons_5_1.initializeIcons, fabric_icons_6_1.initializeIcons, fabric_icons_7_1.initializeIcons, fabric_icons_8_1.initializeIcons, fabric_icons_9_1.initializeIcons, fabric_icons_10_1.initializeIcons, fabric_icons_11_1.initializeIcons].forEach(function (initialize) { return initialize(baseUrl, options); });
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons\"",
            src: "url('" + baseUrl + "fabric-icons-4ac62dd2.woff') format('woff')",
        },
        icons: {
            'GlobalNavButton': '\uE700',
            'ChevronDown': '\uE70D',
            'ChevronUp': '\uE70E',
            'Edit': '\uE70F',
            'Add': '\uE710',
            'Cancel': '\uE711',
            'More': '\uE712',
            'Settings': '\uE713',
            'Mail': '\uE715',
            'Filter': '\uE71C',
            'Search': '\uE721',
            'Share': '\uE72D',
            'FavoriteStar': '\uE734',
            'FavoriteStarFill': '\uE735',
            'CheckMark': '\uE73E',
            'Delete': '\uE74D',
            'ChevronLeft': '\uE76B',
            'ChevronRight': '\uE76C',
            'Calendar': '\uE787',
            'Undo': '\uE7A7',
            'Flag': '\uE7C1',
            'Page': '\uE7C3',
            'View': '\uE890',
            'Clear': '\uE894',
            'Download': '\uE896',
            'Upload': '\uE898',
            'Folder': '\uE8B7',
            'Sort': '\uE8CB',
            'AlignRight': '\uE8E2',
            'AlignLeft': '\uE8E4',
            'Tag': '\uE8EC',
            'AddFriend': '\uE8FA',
            'Info': '\uE946',
            'Pinned': '\uE840',
            'SortLines': '\uE9D0',
            'List': '\uEA37',
            'CircleRing': '\uEA3A',
            'Heart': '\uEB51',
            'HeartFill': '\uEB52',
            'Tiles': '\uECA5',
            'Embed': '\uECCE',
            'Ascending': '\uEDC0',
            'Descending': '\uEDC1',
            'SortUp': '\uEE68',
            'SortDown': '\uEE69',
            'SyncToPC': '\uEE6E',
            'LargeGrid': '\uEECB',
            'SkypeCheck': '\uEF80',
            'SkypeClock': '\uEF81',
            'SkypeMinus': '\uEF82',
            'ClearFilter': '\uEF8F',
            'Flow': '\uEF90',
            'StatusCircleCheckmark': '\uF13E',
            'MoreVertical': '\uF2BC'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-0\"",
            src: "url('" + baseUrl + "fabric-icons-0-8a1666a2.woff') format('woff')",
        },
        icons: {
            'DecreaseIndentLegacy': '\uE290',
            'IncreaseIndentLegacy': '\uE291',
            'InternetSharing': '\uE704',
            'Brightness': '\uE706',
            'MapPin': '\uE707',
            'Airplane': '\uE709',
            'Tablet': '\uE70A',
            'QuickNote': '\uE70B',
            'Video': '\uE714',
            'People': '\uE716',
            'Phone': '\uE717',
            'Pin': '\uE718',
            'Shop': '\uE719',
            'Stop': '\uE71A',
            'Link': '\uE71B',
            'Zoom': '\uE71E',
            'ZoomOut': '\uE71F',
            'Microphone': '\uE720',
            'Camera': '\uE722',
            'Attach': '\uE723',
            'Send': '\uE724',
            'FavoriteList': '\uE728',
            'PageSolid': '\uE729',
            'Forward': '\uE72A',
            'Back': '\uE72B',
            'Refresh': '\uE72C',
            'Lock': '\uE72E',
            'EMI': '\uE731',
            'MiniLink': '\uE732',
            'Blocked': '\uE733',
            'ReadingMode': '\uE736',
            'Favicon': '\uE737',
            'Remove': '\uE738',
            'Checkbox': '\uE739',
            'CheckboxComposite': '\uE73A',
            'CheckboxIndeterminate': '\uE73C',
            'CheckboxCompositeReversed': '\uE73D',
            'BackToWindow': '\uE73F',
            'FullScreen': '\uE740',
            'Print': '\uE749',
            'Up': '\uE74A',
            'Down': '\uE74B',
            'Save': '\uE74E',
            'Cloud': '\uE753',
            'CommandPrompt': '\uE756',
            'Sad': '\uE757',
            'SIPMove': '\uE759',
            'EraseTool': '\uE75C',
            'GripperTool': '\uE75E',
            'Dialpad': '\uE75F',
            'PageLeft': '\uE760',
            'PageRight': '\uE761',
            'MultiSelect': '\uE762',
            'Play': '\uE768',
            'Pause': '\uE769',
            'Emoji2': '\uE76E',
            'GripperBarHorizontal': '\uE76F',
            'System': '\uE770',
            'Personalize': '\uE771',
            'SearchAndApps': '\uE773',
            'Globe': '\uE774',
            'ContactInfo': '\uE779',
            'Unpin': '\uE77A',
            'Contact': '\uE77B',
            'Memo': '\uE77C',
            'Paste': '\uE77F',
            'WindowsLogo': '\uE782',
            'Error': '\uE783',
            'GripperBarVertical': '\uE784',
            'Unlock': '\uE785',
            'Megaphone': '\uE789',
            'AutoEnhanceOn': '\uE78D',
            'AutoEnhanceOff': '\uE78E',
            'Color': '\uE790',
            'SaveAs': '\uE792',
            'Light': '\uE793',
            'Filters': '\uE795',
            'AspectRatio': '\uE799',
            'Contrast': '\uE7A1',
            'Redo': '\uE7A6',
            'PhotoCollection': '\uE7AA',
            'Album': '\uE7AB',
            'Rotate': '\uE7AD',
            'PanoIndicator': '\uE7B0',
            'RedEye': '\uE7B3',
            'ThumbnailView': '\uE7B6',
            'Package': '\uE7B8',
            'Warning': '\uE7BA',
            'Financial': '\uE7BB',
            'Education': '\uE7BE',
            'ShoppingCart': '\uE7BF',
            'Train': '\uE7C0',
            'Move': '\uE7C2',
            'TouchPointer': '\uE7C9',
            'Merge': '\uE7D5',
            'TurnRight': '\uE7DB',
            'Ferry': '\uE7E3',
            'Highlight': '\uE7E6',
            'Tab': '\uE7E9',
            'Admin': '\uE7EF'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-1\"",
            src: "url('" + baseUrl + "fabric-icons-1-a961c249.woff') format('woff')",
        },
        icons: {
            'TVMonitor': '\uE7F4',
            'Speakers': '\uE7F5',
            'Nav2DMapView': '\uE800',
            'Car': '\uE804',
            'Bus': '\uE806',
            'EatDrink': '\uE807',
            'LocationCircle': '\uE80E',
            'Home': '\uE80F',
            'SwitcherStartEnd': '\uE810',
            'ParkingLocation': '\uE811',
            'IncidentTriangle': '\uE814',
            'Touch': '\uE815',
            'MapDirections': '\uE816',
            'History': '\uE81C',
            'Location': '\uE81D',
            'Work': '\uE821',
            'Recent': '\uE823',
            'Hotel': '\uE824',
            'LocationDot': '\uE827',
            'News': '\uE900',
            'Chat': '\uE901',
            'Group': '\uE902',
            'Previous': '\uE892',
            'Next': '\uE893',
            'Sync': '\uE895',
            'Help': '\uE897',
            'Emoji': '\uE899',
            'MailForward': '\uE89C',
            'ClosePane': '\uE89F',
            'OpenPane': '\uE8A0',
            'PreviewLink': '\uE8A1',
            'ZoomIn': '\uE8A3',
            'Bookmarks': '\uE8A4',
            'Document': '\uE8A5',
            'ProtectedDocument': '\uE8A6',
            'OpenInNewWindow': '\uE8A7',
            'MailFill': '\uE8A8',
            'ViewAll': '\uE8A9',
            'Switch': '\uE8AB',
            'Rename': '\uE8AC',
            'Import': '\uE8B5',
            'Picture': '\uE8B9',
            'ShowResults': '\uE8BC',
            'Message': '\uE8BD',
            'CalendarDay': '\uE8BF',
            'CalendarWeek': '\uE8C0',
            'MailReplyAll': '\uE8C2',
            'Read': '\uE8C3',
            'Cut': '\uE8C6',
            'PaymentCard': '\uE8C7',
            'Copy': '\uE8C8',
            'Important': '\uE8C9',
            'MailReply': '\uE8CA',
            'GotoToday': '\uE8D1',
            'Font': '\uE8D2',
            'FontColor': '\uE8D3',
            'FolderFill': '\uE8D5',
            'Permissions': '\uE8D7',
            'DisableUpdates': '\uE8D8',
            'Unfavorite': '\uE8D9',
            'Italic': '\uE8DB',
            'Underline': '\uE8DC',
            'Bold': '\uE8DD',
            'MoveToFolder': '\uE8DE',
            'Dislike': '\uE8E0',
            'Like': '\uE8E1',
            'AlignCenter': '\uE8E3',
            'OpenFile': '\uE8E5',
            'FontDecrease': '\uE8E7',
            'FontIncrease': '\uE8E8',
            'FontSize': '\uE8E9',
            'CellPhone': '\uE8EA',
            'Library': '\uE8F1',
            'PostUpdate': '\uE8F3',
            'NewFolder': '\uE8F4',
            'CalendarReply': '\uE8F5',
            'UnsyncFolder': '\uE8F6',
            'SyncFolder': '\uE8F7',
            'BlockContact': '\uE8F8',
            'BulletedList': '\uE8FD',
            'Preview': '\uE8FF',
            'World': '\uE909',
            'Comment': '\uE90A',
            'DockLeft': '\uE90C',
            'DockRight': '\uE90D',
            'Repair': '\uE90F',
            'Accounts': '\uE910',
            'RadioBullet': '\uE915',
            'Stopwatch': '\uE916',
            'Clock': '\uE917',
            'WorldClock': '\uE918',
            'AlarmClock': '\uE919',
            'Hospital': '\uE91D',
            'Timer': '\uE91E',
            'FullCircleMask': '\uE91F',
            'LocationFill': '\uE920',
            'ChromeMinimize': '\uE921',
            'Annotation': '\uE924',
            'ChromeClose': '\uE8BB',
            'Accept': '\uE8FB'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-2\"",
            src: "url('" + baseUrl + "fabric-icons-2-2be8dca9.woff') format('woff')",
        },
        icons: {
            'Fingerprint': '\uE928',
            'Handwriting': '\uE929',
            'StackIndicator': '\uE7FF',
            'Completed': '\uE930',
            'Label': '\uE932',
            'FlickDown': '\uE935',
            'FlickUp': '\uE936',
            'FlickLeft': '\uE937',
            'FlickRight': '\uE938',
            'Streaming': '\uE93E',
            'MusicInCollection': '\uE940',
            'OneDrive': '\uE941',
            'CompassNW': '\uE942',
            'Code': '\uE943',
            'LightningBolt': '\uE945',
            'CalculatorMultiply': '\uE947',
            'CalculatorAddition': '\uE948',
            'CalculatorSubtract': '\uE949',
            'CalculatorEqualTo': '\uE94E',
            'PrintfaxPrinterFile': '\uE956',
            'Communications': '\uE95A',
            'Headset': '\uE95B',
            'Health': '\uE95E',
            'ChevronUpSmall': '\uE96D',
            'ChevronDownSmall': '\uE96E',
            'ChevronLeftSmall': '\uE96F',
            'ChevronRightSmall': '\uE970',
            'ChevronUpMed': '\uE971',
            'ChevronDownMed': '\uE972',
            'ChevronLeftMed': '\uE973',
            'ChevronRightMed': '\uE974',
            'Dictionary': '\uE82D',
            'ChromeBack': '\uE830',
            'PC1': '\uE977',
            'PresenceChickletVideo': '\uE979',
            'Reply': '\uE97A',
            'HalfAlpha': '\uE97E',
            'LockSolid': '\uE9A2',
            'ConstructionCone': '\uE98F',
            'DoubleChevronLeftMed': '\uE991',
            'Volume0': '\uE992',
            'Volume1': '\uE993',
            'Volume2': '\uE994',
            'Volume3': '\uE995',
            'CaretHollow': '\uE817',
            'CaretSolid': '\uE818',
            'FolderOpen': '\uE838',
            'PinnedFill': '\uE842',
            'Chart': '\uE999',
            'Robot': '\uE99A',
            'BidiLtr': '\uE9AA',
            'BidiRtl': '\uE9AB',
            'RevToggleKey': '\uE845',
            'RightDoubleQuote': '\uE9B1',
            'Sunny': '\uE9BD',
            'CloudWeather': '\uE9BE',
            'Cloudy': '\uE9BF',
            'PartlyCloudyDay': '\uE9C0',
            'PartlyCloudyNight': '\uE9C1',
            'ClearNight': '\uE9C2',
            'RainShowersDay': '\uE9C3',
            'Rain': '\uE9C4',
            'Thunderstorms': '\uE9C6',
            'RainSnow': '\uE9C7',
            'Snow': '\uE9C8',
            'BlowingSnow': '\uE9C9',
            'Frigid': '\uE9CA',
            'Fog': '\uE9CB',
            'Squalls': '\uE9CC',
            'Duststorm': '\uE9CD',
            'Unknown': '\uE9CE',
            'Precipitation': '\uE9CF',
            'Ringer': '\uEA8F',
            'PDF': '\uEA90',
            'Ribbon': '\uE9D1',
            'AreaChart': '\uE9D2',
            'Assign': '\uE9D3',
            'CheckList': '\uE9D5',
            'Diagnostic': '\uE9D9',
            'Generate': '\uE9DA',
            'LineChart': '\uE9E6',
            'Equalizer': '\uE9E9',
            'BarChartHorizontal': '\uE9EB',
            'BarChartVertical': '\uE9EC',
            'Freezing': '\uE9EF',
            'Processing': '\uE9F5',
            'SnowShowerDay': '\uE9FD',
            'HailDay': '\uEA00',
            'WorkFlow': '\uEA01',
            'StoreLogoMed': '\uEA04',
            'TriangleSolid': '\uEA08',
            'RainShowersNight': '\uEA0F',
            'SnowShowerNight': '\uEA11',
            'HailNight': '\uEA13',
            'Info2': '\uEA1F',
            'StoreLogo': '\uEA96',
            'MultiSelectMirrored': '\uEA98',
            'Broom': '\uEA99',
            'MusicInCollectionFill': '\uEA36',
            'Asterisk': '\uEA38'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-3\"",
            src: "url('" + baseUrl + "fabric-icons-3-80b6008d.woff') format('woff')",
        },
        icons: {
            'ErrorBadge': '\uEA39',
            'CircleFill': '\uEA3B',
            'Record2': '\uEA3F',
            'BookmarksMirrored': '\uEA41',
            'BulletedListMirrored': '\uEA42',
            'CaretHollowMirrored': '\uEA45',
            'CaretSolidMirrored': '\uEA46',
            'ChromeBackMirrored': '\uEA47',
            'ClosePaneMirrored': '\uEA49',
            'DockLeftMirrored': '\uEA4C',
            'DoubleChevronLeftMedMirrored': '\uEA4D',
            'HelpMirrored': '\uEA51',
            'ImportMirrored': '\uEA52',
            'ListMirrored': '\uEA55',
            'MailForwardMirrored': '\uEA56',
            'MailReplyMirrored': '\uEA57',
            'MailReplyAllMirrored': '\uEA58',
            'OpenPaneMirrored': '\uEA5B',
            'ParkingLocationMirrored': '\uEA5E',
            'SendMirrored': '\uEA63',
            'ShowResultsMirrored': '\uEA65',
            'ThumbnailViewMirrored': '\uEA67',
            'Devices3': '\uEA6C',
            'Lightbulb': '\uEA80',
            'StatusTriangle': '\uEA82',
            'VolumeDisabled': '\uEA85',
            'Puzzle': '\uEA86',
            'EmojiNeutral': '\uEA87',
            'EmojiDisappointed': '\uEA88',
            'HomeSolid': '\uEA8A',
            'Cocktails': '\uEA9D',
            'Wines': '\uEABF',
            'Articles': '\uEAC1',
            'Cycling': '\uEAC7',
            'DietPlanNotebook': '\uEAC8',
            'Pill': '\uEACB',
            'ExerciseTracker': '\uEACC',
            'Medical': '\uEAD4',
            'Running': '\uEADA',
            'Weights': '\uEADB',
            'BarChart4': '\uEAE7',
            'CirclePlus': '\uEAEE',
            'Coffee': '\uEAEF',
            'Cotton': '\uEAF3',
            'Market': '\uEAFC',
            'Money': '\uEAFD',
            'PieDouble': '\uEB04',
            'PieSingle': '\uEB05',
            'RemoveFilter': '\uEB08',
            'Savings': '\uEB0B',
            'StockDown': '\uEB0F',
            'StockUp': '\uEB11',
            'MSNVideos': '\uEB1C',
            'Cricket': '\uEB1E',
            'Golf': '\uEB1F',
            'Baseball': '\uEB20',
            'Soccer': '\uEB21',
            'MoreSports': '\uEB22',
            'AutoRacing': '\uEB24',
            'CollegeHoops': '\uEB25',
            'CollegeFootball': '\uEB26',
            'ProFootball': '\uEB27',
            'ProHockey': '\uEB28',
            'Rugby': '\uEB2D',
            'Tennis': '\uEB33',
            'Arrivals': '\uEB34',
            'Design': '\uEB3C',
            'Website': '\uEB41',
            'Drop': '\uEB42',
            'SkiResorts': '\uEB45',
            'Snowflake': '\uEB46',
            'BusSolid': '\uEB47',
            'FerrySolid': '\uEB48',
            'AirplaneSolid': '\uEB4C',
            'TrainSolid': '\uEB4D',
            'Ticket': '\uEB54',
            'Devices4': '\uEB66',
            'AzureLogo': '\uEB6A',
            'BingLogo': '\uEB6B',
            'MSNLogo': '\uEB6C',
            'OutlookLogoInverse': '\uEB6D',
            'OfficeLogo': '\uEB6E',
            'SkypeLogo': '\uEB6F',
            'Door': '\uEB75',
            'EditMirrored': '\uEB7E',
            'GiftCard': '\uEB8E',
            'DoubleBookmark': '\uEB8F',
            'StatusErrorFull': '\uEB90',
            'Certificate': '\uEB95',
            'FastForward': '\uEB9D',
            'Rewind': '\uEB9E',
            'Photo2': '\uEB9F',
            'OpenSource': '\uEBC2',
            'CloudDownload': '\uEBD3',
            'WindDirection': '\uEBE6',
            'Family': '\uEBDA',
            'CSS': '\uEBEF',
            'JS': '\uEBF0',
            'DeliveryTruck': '\uEBF4',
            'ReminderPerson': '\uEBF7'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-4\"",
            src: "url('" + baseUrl + "fabric-icons-4-46fbc7bc.woff') format('woff')",
        },
        icons: {
            'ReminderGroup': '\uEBF8',
            'Umbrella': '\uEC04',
            'NetworkTower': '\uEC05',
            'CityNext': '\uEC06',
            'Section': '\uEC0C',
            'OneNoteLogoInverse': '\uEC0D',
            'ToggleFilled': '\uEC11',
            'ToggleBorder': '\uEC12',
            'SliderThumb': '\uEC13',
            'ToggleThumb': '\uEC14',
            'Documentation': '\uEC17',
            'Badge': '\uEC1B',
            'Giftbox': '\uEC1F',
            'VisualStudioLogo': '\uEC22',
            'ExcelLogoInverse': '\uEC28',
            'WordLogoInverse': '\uEC29',
            'PowerPointLogoInverse': '\uEC2A',
            'Cafe': '\uEC32',
            'SpeedHigh': '\uEC4A',
            'ThisPC': '\uEC4E',
            'MusicNote': '\uEC4F',
            'MicOff': '\uEC54',
            'EdgeLogo': '\uEC60',
            'CompletedSolid': '\uEC61',
            'AlbumRemove': '\uEC62',
            'MessageFill': '\uEC70',
            'TabletSelected': '\uEC74',
            'MobileSelected': '\uEC75',
            'LaptopSelected': '\uEC76',
            'TVMonitorSelected': '\uEC77',
            'DeveloperTools': '\uEC7A',
            'InsertTextBox': '\uEC7D',
            'LowerBrightness': '\uEC8A',
            'CloudUpload': '\uEC8E',
            'ScrollUpDown': '\uEC8F',
            'DateTime': '\uEC92',
            'Event': '\uECA3',
            'Cake': '\uECA4',
            'Org': '\uECA6',
            'PartyLeader': '\uECA7',
            'DRM': '\uECA8',
            'CloudAdd': '\uECA9',
            'AppIconDefault': '\uECAA',
            'Photo2Add': '\uECAB',
            'Photo2Remove': '\uECAC',
            'POI': '\uECAF',
            'AddTo': '\uECC8',
            'RadioBtnOff': '\uECCA',
            'RadioBtnOn': '\uECCB',
            'ExploreContent': '\uECCD',
            'VideoSolid': '\uEA0C',
            'Teamwork': '\uEA12',
            'PeopleAdd': '\uEA15',
            'Glasses': '\uEA16',
            'DateTime2': '\uEA17',
            'Shield': '\uEA18',
            'Header1': '\uEA19',
            'PageAdd': '\uEA1A',
            'NumberedList': '\uEA1C',
            'PowerBILogo': '\uEA1E',
            'Product': '\uECDC',
            'ProgressLoopInner': '\uECDE',
            'ProgressLoopOuter': '\uECDF',
            'Blocked2': '\uECE4',
            'FangBody': '\uECEB',
            'Glimmer': '\uECF4',
            'ChatInviteFriend': '\uECFE',
            'Crown': '\uED01',
            'Feedback': '\uED15',
            'SharepointLogoInverse': '\uED18',
            'YammerLogo': '\uED19',
            'Hide': '\uED1A',
            'Uneditable': '\uED1D',
            'ReturnToSession': '\uED24',
            'OpenFolderHorizontal': '\uED25',
            'CalendarMirrored': '\uED28',
            'SwayLogoInverse': '\uED29',
            'OutOfOffice': '\uED34',
            'Trophy': '\uED3F',
            'ReopenPages': '\uED50',
            'AADLogo': '\uED68',
            'AccessLogo': '\uED69',
            'AdminALogoInverse32': '\uED6A',
            'AdminCLogoInverse32': '\uED6B',
            'AdminDLogoInverse32': '\uED6C',
            'AdminELogoInverse32': '\uED6D',
            'AdminLLogoInverse32': '\uED6E',
            'AdminMLogoInverse32': '\uED6F',
            'AdminOLogoInverse32': '\uED70',
            'AdminPLogoInverse32': '\uED71',
            'AdminSLogoInverse32': '\uED72',
            'AdminYLogoInverse32': '\uED73',
            'DelveLogoInverse': '\uED76',
            'ExchangeLogoInverse': '\uED78',
            'LyncLogo': '\uED79',
            'OfficeVideoLogoInverse': '\uED7A'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-5\"",
            src: "url('" + baseUrl + "fabric-icons-5-5bc71068.woff') format('woff')",
        },
        icons: {
            'SocialListeningLogo': '\uED7C',
            'VisioLogoInverse': '\uED7D',
            'Balloons': '\uED7E',
            'Cat': '\uED7F',
            'MailAlert': '\uED80',
            'MailCheck': '\uED81',
            'MailLowImportance': '\uED82',
            'MailPause': '\uED83',
            'MailRepeat': '\uED84',
            'SecurityGroup': '\uED85',
            'Table': '\uED86',
            'VoicemailForward': '\uED87',
            'VoicemailReply': '\uED88',
            'Waffle': '\uED89',
            'RemoveEvent': '\uED8A',
            'EventInfo': '\uED8B',
            'ForwardEvent': '\uED8C',
            'WipePhone': '\uED8D',
            'AddOnlineMeeting': '\uED8E',
            'JoinOnlineMeeting': '\uED8F',
            'RemoveLink': '\uED90',
            'PeopleBlock': '\uED91',
            'PeopleRepeat': '\uED92',
            'PeopleAlert': '\uED93',
            'PeoplePause': '\uED94',
            'TransferCall': '\uED95',
            'AddPhone': '\uED96',
            'UnknownCall': '\uED97',
            'NoteReply': '\uED98',
            'NoteForward': '\uED99',
            'NotePinned': '\uED9A',
            'RemoveOccurrence': '\uED9B',
            'Timeline': '\uED9C',
            'EditNote': '\uED9D',
            'CircleHalfFull': '\uED9E',
            'Room': '\uED9F',
            'Unsubscribe': '\uEDA0',
            'Subscribe': '\uEDA1',
            'RecurringTask': '\uEDB2',
            'TaskManager': '\uEDB7',
            'TaskManagerMirrored': '\uEDB8',
            'Combine': '\uEDBB',
            'Split': '\uEDBC',
            'DoubleChevronUp': '\uEDBD',
            'DoubleChevronLeft': '\uEDBE',
            'DoubleChevronRight': '\uEDBF',
            'TextBox': '\uEDC2',
            'TextField': '\uEDC3',
            'NumberField': '\uEDC4',
            'Dropdown': '\uEDC5',
            'BookingsLogo': '\uEDC7',
            'ClassNotebookLogoInverse': '\uEDC8',
            'DelveAnalyticsLogo': '\uEDCA',
            'DocsLogoInverse': '\uEDCB',
            'Dynamics365Logo': '\uEDCC',
            'DynamicSMBLogo': '\uEDCD',
            'OfficeAssistantLogo': '\uEDCE',
            'OfficeStoreLogo': '\uEDCF',
            'OneNoteEduLogoInverse': '\uEDD0',
            'PlannerLogo': '\uEDD1',
            'PowerApps': '\uEDD2',
            'Suitcase': '\uEDD3',
            'ProjectLogoInverse': '\uEDD4',
            'CaretLeft8': '\uEDD5',
            'CaretRight8': '\uEDD6',
            'CaretUp8': '\uEDD7',
            'CaretDown8': '\uEDD8',
            'CaretLeftSolid8': '\uEDD9',
            'CaretRightSolid8': '\uEDDA',
            'CaretUpSolid8': '\uEDDB',
            'CaretDownSolid8': '\uEDDC',
            'ClearFormatting': '\uEDDD',
            'Superscript': '\uEDDE',
            'Subscript': '\uEDDF',
            'Strikethrough': '\uEDE0',
            'Export': '\uEDE1',
            'ExportMirrored': '\uEDE2',
            'SingleBookmark': '\uEDFF',
            'DoubleChevronDown': '\uEE04',
            'ReplyAll': '\uEE0A',
            'Questionnaire': '\uEE19',
            'ReplyMirrored': '\uEE35',
            'ReplyAllMirrored': '\uEE36',
            'AddGroup': '\uEE3D',
            'QuestionnaireMirrored': '\uEE4B',
            'TemporaryUser': '\uEE58',
            'CaretSolid16': '\uEE62',
            'GroupedDescending': '\uEE66',
            'GroupedAscending': '\uEE67',
            'AwayStatus': '\uEE6A',
            'MyMoviesTV': '\uEE6C',
            'AustralianRules': '\uEE70',
            'WifiEthernet': '\uEE77',
            'DateTimeMirrored': '\uEE93',
            'StopSolid': '\uEE95',
            'DoubleChevronUp12': '\uEE96',
            'DoubleChevronDown12': '\uEE97',
            'DoubleChevronLeft12': '\uEE98',
            'DoubleChevronRight12': '\uEE99'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-6\"",
            src: "url('" + baseUrl + "fabric-icons-6-328cd253.woff') format('woff')",
        },
        icons: {
            'CalendarAgenda': '\uEE9A',
            'AddEvent': '\uEEB5',
            'AssetLibrary': '\uEEB6',
            'DataConnectionLibrary': '\uEEB7',
            'DocLibrary': '\uEEB8',
            'FormLibrary': '\uEEB9',
            'FormLibraryMirrored': '\uEEBA',
            'ReportLibrary': '\uEEBB',
            'ReportLibraryMirrored': '\uEEBC',
            'ContactCard': '\uEEBD',
            'CustomList': '\uEEBE',
            'CustomListMirrored': '\uEEBF',
            'IssueTracking': '\uEEC0',
            'IssueTrackingMirrored': '\uEEC1',
            'PictureLibrary': '\uEEC2',
            'OfficeAddinsLogo': '\uEEC7',
            'OfflineOneDriveParachute': '\uEEC8',
            'OfflineOneDriveParachuteDisabled': '\uEEC9',
            'TriangleSolidUp12': '\uEECC',
            'TriangleSolidDown12': '\uEECD',
            'TriangleSolidLeft12': '\uEECE',
            'TriangleSolidRight12': '\uEECF',
            'TriangleUp12': '\uEED0',
            'TriangleDown12': '\uEED1',
            'TriangleLeft12': '\uEED2',
            'TriangleRight12': '\uEED3',
            'ArrowUpRight8': '\uEED4',
            'ArrowDownRight8': '\uEED5',
            'DocumentSet': '\uEED6',
            'DelveAnalytics': '\uEEEE',
            'ArrowUpRightMirrored8': '\uEEEF',
            'ArrowDownRightMirrored8': '\uEEF0',
            'OneDriveAdd': '\uEF32',
            'Header2': '\uEF36',
            'Header3': '\uEF37',
            'Header4': '\uEF38',
            'MarketDown': '\uEF42',
            'CalendarWorkWeek': '\uEF51',
            'SidePanel': '\uEF52',
            'GlobeFavorite': '\uEF53',
            'CaretTopLeftSolid8': '\uEF54',
            'CaretTopRightSolid8': '\uEF55',
            'ViewAll2': '\uEF56',
            'DocumentReply': '\uEF57',
            'PlayerSettings': '\uEF58',
            'ReceiptForward': '\uEF59',
            'ReceiptReply': '\uEF5A',
            'ReceiptCheck': '\uEF5B',
            'Fax': '\uEF5C',
            'RecurringEvent': '\uEF5D',
            'ReplyAlt': '\uEF5E',
            'ReplyAllAlt': '\uEF5F',
            'EditStyle': '\uEF60',
            'EditMail': '\uEF61',
            'Lifesaver': '\uEF62',
            'LifesaverLock': '\uEF63',
            'InboxCheck': '\uEF64',
            'FolderSearch': '\uEF65',
            'CollapseMenu': '\uEF66',
            'ExpandMenu': '\uEF67',
            'Boards': '\uEF68',
            'SunAdd': '\uEF69',
            'SunQuestionMark': '\uEF6A',
            'LandscapeOrientation': '\uEF6B',
            'DocumentSearch': '\uEF6C',
            'PublicCalendar': '\uEF6D',
            'PublicContactCard': '\uEF6E',
            'PublicEmail': '\uEF6F',
            'PublicFolder': '\uEF70',
            'WordDocument': '\uEF71',
            'PowerPointDocument': '\uEF72',
            'ExcelDocument': '\uEF73',
            'GroupedList': '\uEF74',
            'ClassroomLogo': '\uEF75',
            'Sections': '\uEF76',
            'EditPhoto': '\uEF77',
            'Starburst': '\uEF78',
            'ShareiOS': '\uEF79',
            'AirTickets': '\uEF7A',
            'PencilReply': '\uEF7B',
            'Tiles2': '\uEF7C',
            'SkypeCircleCheck': '\uEF7D',
            'SkypeCircleClock': '\uEF7E',
            'SkypeCircleMinus': '\uEF7F',
            'SkypeMessage': '\uEF83',
            'ClosedCaption': '\uEF84',
            'ATPLogo': '\uEF85',
            'OfficeFormsLogoInverse': '\uEF86',
            'RecycleBin': '\uEF87',
            'EmptyRecycleBin': '\uEF88',
            'Hide2': '\uEF89',
            'Breadcrumb': '\uEF8C',
            'PageEdit': '\uEFB6',
            'Database': '\uEFC7',
            'DocumentManagement': '\uEFFC',
            'CRMReport': '\uEFFE',
            'ZipFolder': '\uF012',
            'TextDocument': '\uF029'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-7\"",
            src: "url('" + baseUrl + "fabric-icons-7-1bae3315.woff') format('woff')",
        },
        icons: {
            'PageCheckedOut': '\uF02C',
            'SaveAndClose': '\uF038',
            'Script': '\uF03A',
            'Archive': '\uF03F',
            'ActivityFeed': '\uF056',
            'EventDate': '\uF059',
            'CaretRight': '\uF06B',
            'SetAction': '\uF071',
            'CaretSolidLeft': '\uF08D',
            'CaretSolidDown': '\uF08E',
            'CaretSolidRight': '\uF08F',
            'CaretSolidUp': '\uF090',
            'PowerAppsLogo': '\uF091',
            'PowerApps2Logo': '\uF092',
            'SearchIssue': '\uF09A',
            'SearchIssueMirrored': '\uF09B',
            'FabricAssetLibrary': '\uF09C',
            'FabricDataConnectionLibrary': '\uF09D',
            'FabricDocLibrary': '\uF09E',
            'FabricFormLibrary': '\uF09F',
            'FabricFormLibraryMirrored': '\uF0A0',
            'FabricReportLibrary': '\uF0A1',
            'FabricReportLibraryMirrored': '\uF0A2',
            'FabricPublicFolder': '\uF0A3',
            'FabricFolderSearch': '\uF0A4',
            'FabricMovetoFolder': '\uF0A5',
            'FabricUnsyncFolder': '\uF0A6',
            'FabricSyncFolder': '\uF0A7',
            'FabricOpenFolderHorizontal': '\uF0A8',
            'FabricFolder': '\uF0A9',
            'FabricFolderFill': '\uF0AA',
            'FabricNewFolder': '\uF0AB',
            'FabricPictureLibrary': '\uF0AC',
            'AddFavorite': '\uF0C8',
            'AddFavoriteFill': '\uF0C9',
            'BufferTimeBefore': '\uF0CF',
            'BufferTimeAfter': '\uF0D0',
            'BufferTimeBoth': '\uF0D1',
            'CannedChat': '\uF0F2',
            'SkypeForBusinessLogo': '\uF0FC',
            'PageCheckedin': '\uF104',
            'CaretBottomLeftSolid8': '\uF121',
            'CaretBottomRightSolid8': '\uF122',
            'FolderHorizontal': '\uF12B',
            'MicrosoftStaffhubLogo': '\uF130',
            'GiftboxOpen': '\uF133',
            'StatusCircleOuter': '\uF136',
            'StatusCircleInner': '\uF137',
            'ExploreContentSingle': '\uF164',
            'CollapseContent': '\uF165',
            'CollapseContentSingle': '\uF166',
            'InfoSolid': '\uF167',
            'ProgressRingDots': '\uF16A',
            'CaloriesAdd': '\uF172',
            'BranchFork': '\uF173',
            'HardDriveGroup': '\uF18F',
            'BucketColor': '\uF1B6',
            'BucketColorFill': '\uF1B7',
            'Taskboard': '\uF1C2',
            'SingleColumn': '\uF1D3',
            'DoubleColumn': '\uF1D4',
            'TripleColumn': '\uF1D5',
            'ColumnLeftTwoThirds': '\uF1D6',
            'ColumnRightTwoThirds': '\uF1D7',
            'AccessLogoFill': '\uF1DB',
            'AnalyticsLogo': '\uF1DE',
            'AnalyticsQuery': '\uF1DF',
            'NewAnalyticsQuery': '\uF1E0',
            'AnalyticsReport': '\uF1E1',
            'WordLogo': '\uF1E3',
            'WordLogoFill': '\uF1E4',
            'ExcelLogo': '\uF1E5',
            'ExcelLogoFill': '\uF1E6',
            'OneNoteLogo': '\uF1E7',
            'OneNoteLogoFill': '\uF1E8',
            'OutlookLogo': '\uF1E9',
            'OutlookLogoFill': '\uF1EA',
            'PowerPointLogo': '\uF1EB',
            'PowerPointLogoFill': '\uF1EC',
            'PublisherLogo': '\uF1ED',
            'PublisherLogoFill': '\uF1EE',
            'ScheduleEventAction': '\uF1EF',
            'FlameSolid': '\uF1F3',
            'ServerProcesses': '\uF1FE',
            'Server': '\uF201',
            'SaveAll': '\uF203',
            'LinkedInLogo': '\uF20A',
            'SidePanelMirrored': '\uF221',
            'ProtectRestrict': '\uF22A',
            'GridViewSmall': '\uF232',
            'GridViewMedium': '\uF233',
            'GridViewLarge': '\uF234',
            'Step': '\uF241',
            'StepInsert': '\uF242',
            'StepShared': '\uF243',
            'StepSharedAdd': '\uF244',
            'StepSharedInsert': '\uF245',
            'ViewDashboard': '\uF246',
            'ViewList': '\uF247',
            'ViewListGroup': '\uF248'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-8\"",
            src: "url('" + baseUrl + "fabric-icons-8-bf5c8e0c.woff') format('woff')",
        },
        icons: {
            'ViewListTree': '\uF249',
            'TriggerAuto': '\uF24A',
            'TriggerUser': '\uF24B',
            'PivotChart': '\uF24C',
            'StackedBarChart': '\uF24D',
            'StackedLineChart': '\uF24E',
            'BuildQueue': '\uF24F',
            'BuildQueueNew': '\uF250',
            'UserFollowed': '\uF25C',
            'VennDiagram': '\uF273',
            'FiveTileGrid': '\uF274',
            'FocalPoint': '\uF277',
            'TeamsLogoInverse': '\uF27A',
            'TeamsLogo': '\uF27B',
            'TeamsLogoFill': '\uF27C',
            'SkypeForBusinessLogoFill': '\uF27D',
            'SharepointLogo': '\uF27E',
            'SharepointLogoFill': '\uF27F',
            'DelveLogo': '\uF280',
            'DelveLogoFill': '\uF281',
            'OfficeVideoLogo': '\uF282',
            'OfficeVideoLogoFill': '\uF283',
            'ExchangeLogo': '\uF284',
            'ExchangeLogoFill': '\uF285',
            'DocumentApproval': '\uF28B',
            'CloneToDesktop': '\uF28C',
            'InstallToDrive': '\uF28D',
            'Blur': '\uF28E',
            'Build': '\uF28F',
            'ProcessMetaTask': '\uF290',
            'BranchFork2': '\uF291',
            'BranchLocked': '\uF292',
            'BranchCommit': '\uF293',
            'BranchCompare': '\uF294',
            'BranchMerge': '\uF295',
            'BranchPullRequest': '\uF296',
            'BranchSearch': '\uF297',
            'BranchShelveset': '\uF298',
            'RawSource': '\uF299',
            'MergeDuplicate': '\uF29A',
            'RowsGroup': '\uF29B',
            'RowsChild': '\uF29C',
            'Deploy': '\uF29D',
            'Redeploy': '\uF29E',
            'ServerEnviroment': '\uF29F',
            'Plug': '\uF300',
            'PlugSolid': '\uF301',
            'PlugConnected': '\uF302',
            'PlugDisconnected': '\uF303',
            'UnlockSolid': '\uF304',
            'Variable': '\uF305',
            'Parameter': '\uF306',
            'CommentUrgent': '\uF307',
            'Storyboard': '\uF308',
            'DiffInline': '\uF309',
            'DiffSideBySide': '\uF30A',
            'ImageDiff': '\uF30B',
            'ImagePixel': '\uF30C',
            'FileBug': '\uF30D',
            'FileCode': '\uF30E',
            'FileComment': '\uF30F',
            'FileImage': '\uF311',
            'FileSymlink': '\uF312',
            'AutoFillTemplate': '\uF313',
            'WorkItem': '\uF314',
            'WorkItemBug': '\uF315',
            'LogRemove': '\uF316',
            'ColumnOptions': '\uF317',
            'Packages': '\uF318',
            'BuildIssue': '\uF319',
            'AssessmentGroup': '\uF31A',
            'VariableGroup': '\uF31B',
            'FullHistory': '\uF31C',
            'BusinessHoursSign': '\uF310',
            'VisioDiagram': '\uF2A0',
            'HighlightMappedShapes': '\uF2A1',
            'TextCallout': '\uF2A2',
            'IconSetsFlag': '\uF2A4',
            'VisioLogo': '\uF2A7',
            'VisioLogoFill': '\uF2A8',
            'VisioDocument': '\uF2A9',
            'TimelineProgress': '\uF2AA',
            'TimelineDelivery': '\uF2AB',
            'Backlog': '\uF2AC',
            'TeamFavorite': '\uF2AD',
            'TaskGroup': '\uF2AE',
            'TaskGroupMirrored': '\uF2AF',
            'ScopeTemplate': '\uF2B0',
            'AssessmentGroupTemplate': '\uF2B1',
            'NewTeamProject': '\uF2B2',
            'CommentAdd': '\uF2B3',
            'CommentNext': '\uF2B4',
            'CommentPrevious': '\uF2B5',
            'ShopServer': '\uF2B6',
            'LocaleLanguage': '\uF2B7',
            'QueryList': '\uF2B8',
            'UserSync': '\uF2B9',
            'UserPause': '\uF2BA',
            'StreamingOff': '\uF2BB',
            'ArrowTallUpLeft': '\uF2BD'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-9\"",
            src: "url('" + baseUrl + "fabric-icons-9-a362212c.woff') format('woff')",
        },
        icons: {
            'ArrowTallUpRight': '\uF2BE',
            'ArrowTallDownLeft': '\uF2BF',
            'ArrowTallDownRight': '\uF2C0',
            'FieldEmpty': '\uF2C1',
            'FieldFilled': '\uF2C2',
            'FieldChanged': '\uF2C3',
            'FieldNotChanged': '\uF2C4',
            'RingerOff': '\uF2C5',
            'PlayResume': '\uF2C6',
            'BulletedList2': '\uF2C7',
            'BulletedList2Mirrored': '\uF2C8',
            'ImageCrosshair': '\uF2C9',
            'GitGraph': '\uF2CA',
            'Repo': '\uF2CB',
            'RepoSolid': '\uF2CC',
            'FolderQuery': '\uF2CD',
            'FolderList': '\uF2CE',
            'FolderListMirrored': '\uF2CF',
            'LocationOutline': '\uF2D0',
            'POISolid': '\uF2D1',
            'CalculatorNotEqualTo': '\uF2D2',
            'BoxSubtractSolid': '\uF2D3',
            'BoxAdditionSolid': '\uF2D4',
            'BoxMultiplySolid': '\uF2D5',
            'BoxPlaySolid': '\uF2D6',
            'BoxCheckmarkSolid': '\uF2D7',
            'CirclePauseSolid': '\uF2D8',
            'CirclePause': '\uF2D9',
            'MSNVideosSolid': '\uF2DA',
            'CircleStopSolid': '\uF2DB',
            'CircleStop': '\uF2DC',
            'NavigateBack': '\uF2DD',
            'NavigateBackMirrored': '\uF2DE',
            'NavigateForward': '\uF2DF',
            'NavigateForwardMirrored': '\uF2E0',
            'UnknownSolid': '\uF2E1',
            'UnknownMirroredSolid': '\uF2E2',
            'CircleAddition': '\uF2E3',
            'CircleAdditionSolid': '\uF2E4',
            'FilePDB': '\uF2E5',
            'FileTemplate': '\uF2E6',
            'FileSQL': '\uF2E7',
            'FileJAVA': '\uF2E8',
            'FileASPX': '\uF2E9',
            'FileCSS': '\uF2EA',
            'FileSass': '\uF2EB',
            'FileLess': '\uF2EC',
            'FileHTML': '\uF2ED',
            'JavaScriptLanguage': '\uF2EE',
            'CSharpLanguage': '\uF2EF',
            'CSharp': '\uF2F0',
            'VisualBasicLanguage': '\uF2F1',
            'VB': '\uF2F2',
            'CPlusPlusLanguage': '\uF2F3',
            'CPlusPlus': '\uF2F4',
            'FSharpLanguage': '\uF2F5',
            'FSharp': '\uF2F6',
            'TypeScriptLanguage': '\uF2F7',
            'PythonLanguage': '\uF2F8',
            'PY': '\uF2F9',
            'CoffeeScript': '\uF2FA',
            'MarkDownLanguage': '\uF2FB',
            'FullWidth': '\uF2FE',
            'FullWidthEdit': '\uF2FF',
            'SingleColumnEdit': '\uF321',
            'DoubleColumnEdit': '\uF322',
            'TripleColumnEdit': '\uF323',
            'ColumnLeftTwoThirdsEdit': '\uF324',
            'ColumnRightTwoThirdsEdit': '\uF325',
            'StreamLogo': '\uF329',
            'AlertSolid': '\uF331',
            'MegaphoneSolid': '\uF332',
            'TaskSolid': '\uF333',
            'ConfigurationSolid': '\uF334',
            'BugSolid': '\uF335',
            'CrownSolid': '\uF336',
            'Trophy2Solid': '\uF337',
            'QuickNoteSolid': '\uF338',
            'ConstructionConeSolid': '\uF339',
            'PageListSolid': '\uF33A',
            'PageListMirroredSolid': '\uF33B',
            'StarburstSolid': '\uF33C',
            'ReadingModeSolid': '\uF33D',
            'SadSolid': '\uF33E',
            'HealthSolid': '\uF33F',
            'ShieldSolid': '\uF340',
            'GiftBoxSolid': '\uF341',
            'ShoppingCartSolid': '\uF342',
            'MailSolid': '\uF343',
            'ChatSolid': '\uF344',
            'RibbonSolid': '\uF345',
            'FinancialSolid': '\uF346',
            'FinancialMirroredSolid': '\uF347',
            'HeadsetSolid': '\uF348',
            'PermissionsSolid': '\uF349',
            'ParkingSolid': '\uF34A',
            'ParkingMirroredSolid': '\uF34B',
            'DiamondSolid': '\uF34C',
            'AsteriskSolid': '\uF34D',
            'OfflineStorageSolid': '\uF34E'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var iconSubset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-10\"",
            src: "url('" + baseUrl + "fabric-icons-10-a9486bb8.woff') format('woff')",
        },
        icons: {
            'BankSolid': '\uF34F',
            'DecisionSolid': '\uF350',
            'Parachute': '\uF351',
            'ParachuteSolid': '\uF352',
            'FiltersSolid': '\uF353',
            'ColorSolid': '\uF354',
            'ReviewSolid': '\uF355',
            'ReviewRequestSolid': '\uF356',
            'ReviewRequestMirroredSolid': '\uF357',
            'ReviewResponseSolid': '\uF358',
            'FeedbackRequestSolid': '\uF359',
            'FeedbackRequestMirroredSolid': '\uF35A',
            'FeedbackResponseSolid': '\uF35B',
            'WorkItemBar': '\uF35C',
            'WorkItemBarSolid': '\uF35D',
            'Separator': '\uF35E',
            'NavigateExternalInline': '\uF35F',
            'PlanView': '\uF360',
            'TimelineMatrixView': '\uF361',
            'EngineeringGroup': '\uF362',
            'ProjectCollection': '\uF363',
            'CaretBottomRightCenter8': '\uF364',
            'CaretBottomLeftCenter8': '\uF365',
            'CaretTopRightCenter8': '\uF366',
            'CaretTopLeftCenter8': '\uF367',
            'DonutChart': '\uF368',
            'ChevronUnfold10': '\uF369',
            'ChevronFold10': '\uF36A',
            'DoubleChevronDown8': '\uF36B',
            'DoubleChevronUp8': '\uF36C',
            'DoubleChevronLeft8': '\uF36D',
            'DoubleChevronRight8': '\uF36E',
            'ChevronDownEnd6': '\uF36F',
            'ChevronUpEnd6': '\uF370',
            'ChevronLeftEnd6': '\uF371',
            'ChevronRightEnd6': '\uF372',
            'AzureAPIManagement': '\uF37F',
            'AzureServiceEndpoint': '\uF380',
            'VSTSLogo': '\uF381',
            'VSTSAltLogo1': '\uF382',
            'VSTSAltLogo2': '\uF383',
            'FileTypeSolution': '\uF387',
            'WordLogoInverse16': '\uF390',
            'WordLogo16': '\uF391',
            'WordLogoFill16': '\uF392',
            'PowerPointLogoInverse16': '\uF393',
            'PowerPointLogo16': '\uF394',
            'PowerPointLogoFill16': '\uF395',
            'ExcelLogoInverse16': '\uF396',
            'ExcelLogo16': '\uF397',
            'ExcelLogoFill16': '\uF398',
            'OneNoteLogoInverse16': '\uF399',
            'OneNoteLogo16': '\uF39A',
            'OneNoteLogoFill16': '\uF39B',
            'OutlookLogoInverse16': '\uF39C',
            'OutlookLogo16': '\uF39D',
            'OutlookLogoFill16': '\uF39E',
            'PublisherLogoInverse16': '\uF39F',
            'PublisherLogo16': '\uF3A0',
            'PublisherLogoFill16': '\uF3A1',
            'VisioLogoInverse16': '\uF3A2',
            'VisioLogo16': '\uF3A3',
            'VisioLogoFill16': '\uF3A4',
            'TestBeaker': '\uF3A5',
            'TestBeakerSolid': '\uF3A6',
            'TestExploreSolid': '\uF3A7',
            'TestAutoSolid': '\uF3A8',
            'TestUserSolid': '\uF3A9',
            'TestImpactSolid': '\uF3AA',
            'TestPlan': '\uF3AB',
            'TestStep': '\uF3AC',
            'TestParameter': '\uF3AD',
            'TestSuite': '\uF3AE',
            'TestCase': '\uF3AF',
            'Sprint': '\uF3B0',
            'SignOut': '\uF3B1',
            'TriggerApproval': '\uF3B2',
            'Rocket': '\uF3B3',
            'AzureKeyVault': '\uF3B4',
            'LikeSolid': '\uF3BF',
            'DislikeSolid': '\uF3C0',
            'DeclineCall': '\uF405',
            'Spacer': '\uF40D',
            'SkypeLogo16': '\uF40E',
            'SkypeForBusinessLogo16': '\uF40F',
            'SkypeForBusinessLogoFill16': '\uF410',
            'FilterSolid': '\uF412',
            'MailUndelivered': '\uF415',
            'MailTentative': '\uF416',
            'MailTentativeMirrored': '\uF417',
            'MailReminder': '\uF418',
            'ReceiptUndelivered': '\uF419',
            'ReceiptTentative': '\uF41A',
            'ReceiptTentativeMirrored': '\uF41B',
            'Inbox': '\uF41C',
            'IRMReply': '\uF41D'
        }
    };
    index_1.registerIcons(iconSubset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-11\"",
            src: "url('" + baseUrl + "fabric-icons-11-c0dbf638.woff') format('woff')",
        },
        icons: {
            'IRMReplyMirrored': '\uF41E',
            'IRMForward': '\uF41F',
            'IRMForwardMirrored': '\uF420',
            'VoicemailIRM': '\uF421',
            'EventAccepted': '\uF422',
            'EventTentative': '\uF423',
            'EventTentativeMirrored': '\uF424',
            'EventDeclined': '\uF425',
            'IDBadge': '\uF427',
            'OfficeFormsLogoInverse16': '\uF433',
            'OfficeFormsLogo': '\uF434',
            'OfficeFormsLogoFill': '\uF435',
            'OfficeFormsLogo16': '\uF436',
            'OfficeFormsLogoFill16': '\uF437',
            'OfficeFormsLogoInverse24': '\uF43A',
            'OfficeFormsLogo24': '\uF43B',
            'OfficeFormsLogoFill24': '\uF43C',
            'PageLock': '\uF43F',
            'NotExecuted': '\uF440',
            'NotImpactedSolid': '\uF441',
            'FieldReadOnly': '\uF442',
            'FieldRequired': '\uF443',
            'BacklogBoard': '\uF444',
            'ExternalBuild': '\uF445',
            'ExternalTFVC': '\uF446',
            'ExternalXAML': '\uF447',
            'IssueSolid': '\uF448',
            'DefectSolid': '\uF449',
            'LadybugSolid': '\uF44A',
            'MTMLogo': '\uF44B',
            'NugetLogo': '\uF44C',
            'TFVCLogo': '\uF44D',
            'ProjectLogo32': '\uF47E',
            'ProjectLogoFill32': '\uF47F',
            'ProjectLogo16': '\uF480',
            'ProjectLogoFill16': '\uF481',
            'SwayLogo32': '\uF482',
            'SwayLogoFill32': '\uF483',
            'SwayLogo16': '\uF484',
            'SwayLogoFill16': '\uF485',
            'ClassNotebookLogo32': '\uF486',
            'ClassNotebookLogoFill32': '\uF487',
            'ClassNotebookLogo16': '\uF488',
            'ClassNotebookLogoFill16': '\uF489',
            'ClassNotebookLogoInverse32': '\uF48A',
            'ClassNotebookLogoInverse16': '\uF48B',
            'StaffNotebookLogo32': '\uF48C',
            'StaffNotebookLogoFill32': '\uF48D',
            'StaffNotebookLogo16': '\uF48E',
            'StaffNotebookLogoFill16': '\uF48F',
            'StaffNotebookLogoInverted32': '\uF490',
            'StaffNotebookLogoInverted16': '\uF491',
            'KaizalaLogo': '\uF492',
            'TaskLogo': '\uF493',
            'ProtectionCenterLogo32': '\uF494',
            'NonprofitLogo32': '\uF495',
            'GallatinLogo': '\uF496',
            'Globe2': '\uF49A',
            'Guitar': '\uF49B',
            'Breakfast': '\uF49C',
            'Brunch': '\uF49D',
            'BeerMug': '\uF49E',
            'Vacation': '\uF49F',
            'Teeth': '\uF4A0',
            'Taxi': '\uF4A1',
            'Chopsticks': '\uF4A2',
            'SyncOccurence': '\uF4A3',
            'UnsyncOccurence': '\uF4A4',
            'PrimaryCalendar': '\uF4AE',
            'SearchCalendar': '\uF4AF',
            'VideoOff': '\uF4B0',
            'MicrosoftFlowLogo': '\uF4B1',
            'BusinessCenterLogo': '\uF4B2',
            'ToDoLogoBottom': '\uF4B3',
            'ToDoLogoTop': '\uF4B4',
            'EditSolid12': '\uF4B5',
            'EditSolidMirrored12': '\uF4B6',
            'UneditableSolid12': '\uF4B7',
            'UneditableSolidMirrored12': '\uF4B8',
            'UneditableMirrored': '\uF4B9',
            'AdminALogo32': '\uF4BA',
            'AdminALogoFill32': '\uF4BB',
            'ToDoLogoInverse': '\uF4BC',
            'Snooze': '\uF4BD'
        }
    };
    index_1.registerIcons(subset, options);
}
exports.initializeIcons = initializeIcons;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
index_1.registerIconAlias('trash', 'delete');


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(30)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./index.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(undefined);
// imports


// module
exports.push([module.i, "html,\nbody {\n  background: gold;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n#content {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map