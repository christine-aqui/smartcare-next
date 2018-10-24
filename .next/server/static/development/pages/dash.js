module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Forms/GeneralInfo.js":
/*!*****************************************!*\
  !*** ./components/Forms/GeneralInfo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./store.js");
var _jsxFileName = "/Users/shadidhaque/Desktop/shadid/care2/shadid2/with-redux-app/components/Forms/GeneralInfo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // store



var GeneralInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GeneralInfo, _React$Component);

  function GeneralInfo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GeneralInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GeneralInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: 'female'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["changeGender"])(event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "firstNameHadle", function (event) {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["changeName"])(event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastNameHadle", function (event) {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["changeLastName"])(event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ageHadle", function (event) {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["changeAge"])(event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAllergies", function (event) {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["changeAllergies"])(event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePhysician", function (event) {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["changePhysician"])(event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleprimaryDiagonosis", function (event) {
      var dispatch = _this.props.dispatch;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["changePrimaryDiagonosis"])(event.target.value));
    });

    return _this;
  }

  _createClass(GeneralInfo, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.row,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "First Name",
        margin: "normal",
        className: classes.textField,
        onChange: this.firstNameHadle,
        value: this.props.firstName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Last Name",
        margin: "normal",
        className: classes.textField,
        onChange: this.lastNameHadle,
        value: this.props.lastName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Age",
        margin: "normal",
        type: "number",
        onChange: this.ageHadle,
        value: this.props.age,
        className: classes.textField,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(classes.row, " ").concat(classes.gender),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
        component: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Gender"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_5___default.a, {
        "aria-label": "Gender",
        name: "gender1",
        className: classes.group,
        value: this.props.gender,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        value: "female",
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }),
        label: "Female",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        value: "male",
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }),
        label: "Male",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        value: "other",
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }),
        label: "Other",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.row,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Allergies",
        margin: "normal",
        multiline: true,
        className: classes.textField,
        value: this.props.allergies,
        onChange: this.handleAllergies,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Physician",
        margin: "normal",
        multiline: true,
        className: classes.textField,
        value: this.props.physician,
        onChange: this.handlePhysician,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Primary Diagonosis",
        margin: "normal",
        multiline: true,
        className: classes.textField,
        value: this.props.primaryDiagonosis,
        onChange: this.handleprimaryDiagonosis,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })));
    }
  }]);

  return GeneralInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  var firstName = state.firstName,
      lastName = state.lastName,
      age = state.age,
      gender = state.gender,
      allergies = state.allergies,
      physician = state.physician,
      primaryDiagonosis = state.primaryDiagonosis;
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    allergies: allergies,
    physician: physician,
    primaryDiagonosis: primaryDiagonosis
  };
}

var styles = function styles(theme) {
  return {
    textField: {
      marginRight: '10px'
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    gender: {
      paddingTop: '20px'
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(GeneralInfo)));

/***/ }),

/***/ "./components/Forms/Vitals.js":
/*!************************************!*\
  !*** ./components/Forms/Vitals.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/shadidhaque/Desktop/shadid/care2/shadid2/with-redux-app/components/Forms/Vitals.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var VitalSigns =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VitalSigns, _React$Component);

  function VitalSigns() {
    _classCallCheck(this, VitalSigns);

    return _possibleConstructorReturn(this, _getPrototypeOf(VitalSigns).apply(this, arguments));
  }

  _createClass(VitalSigns, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.row,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "blood-preasure",
        label: "Blood Preasure",
        margin: "normal",
        multiline: true,
        className: classes.textField,
        fullWidth: true,
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Heart Rate",
        margin: "normal",
        multiline: true,
        className: classes.textField,
        fullWidth: true,
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Respirations",
        margin: "normal",
        multiline: true,
        className: classes.textField,
        fullWidth: true,
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.row,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Oxygen",
        margin: "normal",
        multiline: true,
        className: classes.textField,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Temperature",
        margin: "normal",
        multiline: true,
        className: classes.textField,
        fullWidth: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })));
    }
  }]);

  return VitalSigns;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

VitalSigns.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var styles = function styles(theme) {
  return {
    row: {
      display: 'flex',
      width: '60vw'
    },
    textField: {
      marginRight: '10px'
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(VitalSigns));

/***/ }),

/***/ "./components/MainForm.js":
/*!********************************!*\
  !*** ./components/MainForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Stepper */ "@material-ui/core/Stepper");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Step */ "@material-ui/core/Step");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "@material-ui/core/StepLabel");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/StepContent */ "@material-ui/core/StepContent");
/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Forms_GeneralInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Forms/GeneralInfo */ "./components/Forms/GeneralInfo.js");
/* harmony import */ var _Forms_Vitals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Forms/Vitals */ "./components/Forms/Vitals.js");
var _jsxFileName = "/Users/shadidhaque/Desktop/shadid/care2/shadid2/with-redux-app/components/MainForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // Components




var styles = function styles(theme) {
  return {
    root: {
      width: '90%',
      overflowY: 'scroll',
      height: '85vh'
    },
    button: {
      marginTop: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    actionsContainer: {
      marginBottom: theme.spacing.unit * 2
    },
    resetContainer: {
      padding: theme.spacing.unit * 3
    }
  };
};

function getSteps() {
  return ['Patient Info', 'Vitals', 'Other Info'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms_GeneralInfo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      });

    case 1:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Forms_Vitals__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });

    case 2:
      return "Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues.";

    default:
      return 'Unknown step';
  }
}

var VerticalLinearStepper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VerticalLinearStepper, _React$Component);

  function VerticalLinearStepper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VerticalLinearStepper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VerticalLinearStepper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeStep: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNext", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleReset", function () {
      _this.setState({
        activeStep: 0
      });
    });

    return _this;
  }

  _createClass(VerticalLinearStepper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var steps = getSteps();
      var activeStep = this.state.activeStep;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3___default.a, {
        activeStep: activeStep,
        orientation: "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, steps.map(function (label, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4___default.a, {
          key: label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, getStepContent(index)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.actionsContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          disabled: activeStep === 0,
          onClick: _this2.handleBack,
          className: classes.button,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          variant: "contained",
          color: "primary",
          onClick: _this2.handleNext,
          className: classes.button,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, activeStep === steps.length - 1 ? 'Finish' : 'Next')))));
      })), activeStep === steps.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
        square: true,
        elevation: 0,
        className: classes.resetContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "All steps completed - you\"re finished"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        onClick: this.handleReset,
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Reset")));
    }
  }]);

  return VerticalLinearStepper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

VerticalLinearStepper.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(VerticalLinearStepper));

/***/ }),

/***/ "./components/MiniDrawer.js":
/*!**********************************!*\
  !*** ./components/MiniDrawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_MainForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/MainForm */ "./components/MainForm.js");
var _jsxFileName = "/Users/shadidhaque/Desktop/shadid/care2/shadid2/with-redux-app/components/MiniDrawer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      height: '100vh'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: _defineProperty({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 9
    }),
    toolbar: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    }
  };
};

var MiniDrawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MiniDrawer, _React$Component);

  function MiniDrawer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MiniDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MiniDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDrawerOpen", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDrawerClose", function () {
      _this.setState({
        open: false
      });
    });

    return _this;
  }

  _createClass(MiniDrawer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        position: "fixed",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.appBar, _defineProperty({}, classes.appBarShift, this.state.open)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        disableGutters: !this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.menuButton, _defineProperty({}, classes.hide, this.state.open)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        variant: "h6",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Smart Care"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "permanent",
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
        },
        open: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onClick: this.handleDrawerClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, theme.direction === 'rtl' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
          button: true,
          key: text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, index % 2 === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_19___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
          primary: text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, ['All mail', 'Trash', 'Spam'].map(function (text, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
          button: true,
          key: text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, index % 2 === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_18___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_19___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_17___default.a, {
          primary: text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: classes.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainForm__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })));
    }
  }]);

  return MiniDrawer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MiniDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(MiniDrawer));

/***/ }),

/***/ "./pages/dash.js":
/*!***********************!*\
  !*** ./pages/dash.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MiniDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MiniDrawer */ "./components/MiniDrawer.js");
var _jsxFileName = "/Users/shadidhaque/Desktop/shadid/care2/shadid2/with-redux-app/pages/dash.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // Compoents



var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MiniDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Index));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, serverRenderClock, startClock, incrementCount, decrementCount, resetCount, changeName, changeLastName, changeAge, changeGender, changeAllergies, changePrimaryDiagonosis, changePhysician, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCount", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCount", function() { return decrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCount", function() { return resetCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeName", function() { return changeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLastName", function() { return changeLastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeAge", function() { return changeAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeGender", function() { return changeGender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeAllergies", function() { return changeAllergies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePrimaryDiagonosis", function() { return changePrimaryDiagonosis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePhysician", function() { return changePhysician; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);



var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  firstName: '',
  lastName: '',
  age: '',
  gender: 'female',
  allergies: '',
  physician: '',
  primayDiagonosis: ''
};
var actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  FIRSTNAME: 'FIRSTNAME',
  LASTNAME: 'LASTNAME',
  AGE: 'AGE',
  GENDER: 'GENDER',
  PHYSICIAN: 'PHYSICIAN',
  ALLERGIES: 'ALLERGIES',
  PRIMARYDIAGONOSIS: 'PRIMARYDIAGONOSIS' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });

    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      });

    case actionTypes.FIRSTNAME:
      return Object.assign({}, state, {
        firstName: action.payload
      });

    case actionTypes.LASTNAME:
      return Object.assign({}, state, {
        lastName: action.payload
      });

    case actionTypes.PHYSICIAN:
      return Object.assign({}, state, {
        physician: action.payload
      });

    case actionTypes.ALLERGIES:
      return Object.assign({}, state, {
        allergies: action.payload
      });

    case actionTypes.PRIMARYDIAGONOSIS:
      return Object.assign({}, state, {
        primayDiagonosis: action.payload
      });

    case actionTypes.GENDER:
      return Object.assign({}, state, {
        gender: action.payload
      });

    case actionTypes.AGE:
      return Object.assign({}, state, {
        age: action.payload
      });

    default:
      return state;
  }
}; // ACTIONS

var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.TICK,
      light: !isServer,
      ts: Date.now()
    });
  };
};
var startClock = function startClock(dispatch) {
  return setInterval(function () {
    // Dispatch `TICK` every 1 second
    dispatch({
      type: actionTypes.TICK,
      light: true,
      ts: Date.now()
    });
  }, 1000);
};
var incrementCount = function incrementCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.INCREMENT
    });
  };
};
var decrementCount = function decrementCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.DECREMENT
    });
  };
};
var resetCount = function resetCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RESET
    });
  };
};
var changeName = function changeName(payload) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.FIRSTNAME,
      payload: payload
    });
  };
};
var changeLastName = function changeLastName(payload) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.LASTNAME,
      payload: payload
    });
  };
};
var changeAge = function changeAge(payload) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.AGE,
      payload: payload
    });
  };
};
var changeGender = function changeGender(payload) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.GENDER,
      payload: payload
    });
  };
};
var changeAllergies = function changeAllergies(payload) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.ALLERGIES,
      payload: payload
    });
  };
};
var changePrimaryDiagonosis = function changePrimaryDiagonosis(payload) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.PRIMARYDIAGONOSIS,
      payload: payload
    });
  };
};
var changePhysician = function changePhysician(payload) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.PHYSICIAN,
      payload: payload
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
}

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/dash.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/dash.js */"./pages/dash.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Step":
/*!*****************************************!*\
  !*** external "@material-ui/core/Step" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Step");

/***/ }),

/***/ "@material-ui/core/StepContent":
/*!************************************************!*\
  !*** external "@material-ui/core/StepContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepContent");

/***/ }),

/***/ "@material-ui/core/StepLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/StepLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepLabel");

/***/ }),

/***/ "@material-ui/core/Stepper":
/*!********************************************!*\
  !*** external "@material-ui/core/Stepper" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Stepper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=dash.js.map