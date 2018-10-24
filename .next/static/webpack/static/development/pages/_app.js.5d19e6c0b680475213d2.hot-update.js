webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");



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
  primaryDiagonosis: ''
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
        primaryDiagonosis: action.payload
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
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
}

/***/ })

})
//# sourceMappingURL=_app.js.5d19e6c0b680475213d2.hot-update.js.map