'use strict';
/******/
(function (modules) {
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;    /******/
        }
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}    /******/
            };
        /******/
        /******/
        // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/
        // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/
        // Return the exports of the module
        /******/
        return module.exports;    /******/
    }
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/
    // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/
    // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });    /******/
        }    /******/
    };
    /******/
    /******/
    // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });    /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', { value: true });    /******/
    };
    /******/
    /******/
    // create a fake namespace object
    /******/
    // mode & 1: value is a module id, require it
    /******/
    // mode & 2: merge all properties of value into the ns
    /******/
    // mode & 4: return value when already ns object
    /******/
    // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1)
            value = __webpack_require__(value);
        /******/
        if (mode & 8)
            return value;
        /******/
        if (mode & 4 && typeof value === 'object' && value && value.__esModule)
            return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) {
                __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                }.bind(null, key));
            }
        /******/
        return ns;    /******/
    };
    /******/
    /******/
    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ? /******/
            function getDefault() {
                return module['default'];
            } : /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;    /******/
    };
    /******/
    /******/
    // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/
    // __webpack_public_path__
    /******/
    __webpack_require__.p = '';
    /******/
    /******/
    /******/
    // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);    /******/
}([
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _Valence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  height: 200px;\n  width: 100%;\n  margin-top: -130px;\n  padding: 30px;\n  color: blue;\n\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  /*
  ** valenceIO.jsx
  **
  ** Javascript entry-point file for the
  ** Valence framework project Web-Site
  **
  ** Eric J Foster, MIT License.
  **
  **/
  // import venus from '../../../js/src/Form/Venus'
  //


  var Thing = div(_templateObject()); //
  // const Input = input`
  //   width: 33%;
  //   height: 200px;
  //   margin: 0 auto;
  //   top: 0;
  //   bottom: 0;
  //   right: 0;
  //   left: 0;
  //   color: blue;
  // `

  var Box = function Box() {
    return x("div", null, x("p", null), x(Thing, null));
  };

  var MyName = function MyName() {
    return x("div", null, x(Box, {
      shadow: false
    }, x("h1", {
      className: "name"
    }, "Eric Foster")));
  };

  _Valence__WEBPACK_IMPORTED_MODULE_0__["default"].realize(x(MyName, {
    shadow: false
  }), el('#root'));
  /***/

},
/* 1 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _js_src_support_polyfillLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
  /* harmony import */


  var _js_src_support_polyfillLoader__WEBPACK_IMPORTED_MODULE_0___default =
  /*#__PURE__*/
  __webpack_require__.n(_js_src_support_polyfillLoader__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */
