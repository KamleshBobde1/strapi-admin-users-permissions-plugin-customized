"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["codemirror-addon-lint-js"],{

/***/ "./node_modules/codemirror/addon/lint/javascript-lint.js":
/*!***************************************************************!*\
  !*** ./node_modules/codemirror/addon/lint/javascript-lint.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE
// Depends on jshint.js from https://github.com/jshint/jshint
(function (mod) {
  if (( false ? 0 : (0, _typeof2["default"])(exports)) == "object" && ( false ? 0 : (0, _typeof2["default"])(module)) == "object") // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./node_modules/codemirror/lib/codemirror.js"));else if (true) // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../lib/codemirror */ "./node_modules/codemirror/lib/codemirror.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env
    {}
})(function (CodeMirror) {
  "use strict"; // declare global: JSHINT

  function validator(text, options) {
    if (!window.JSHINT) {
      if (window.console) {
        window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run.");
      }

      return [];
    }

    if (!options.indent) // JSHint error.character actually is a column index, this fixes underlining on lines using tabs for indentation
      options.indent = 1; // JSHint default value is 4

    JSHINT(text, options, options.globals);
    var errors = JSHINT.data().errors,
        result = [];
    if (errors) parseErrors(errors, result);
    return result;
  }

  CodeMirror.registerHelper("lint", "javascript", validator);

  function parseErrors(errors, output) {
    for (var i = 0; i < errors.length; i++) {
      var error = errors[i];

      if (error) {
        if (error.line <= 0) {
          if (window.console) {
            window.console.warn("Cannot display JSHint error (invalid line " + error.line + ")", error);
          }

          continue;
        }

        var start = error.character - 1,
            end = start + 1;

        if (error.evidence) {
          var index = error.evidence.substring(start).search(/.\b/);

          if (index > -1) {
            end += index;
          }
        } // Convert to format expected by validation service


        var hint = {
          message: error.reason,
          severity: error.code ? error.code.startsWith('W') ? "warning" : "error" : "error",
          from: CodeMirror.Pos(error.line - 1, start),
          to: CodeMirror.Pos(error.line - 1, end)
        };
        output.push(hint);
      }
    }
  }
});

/***/ })

}]);