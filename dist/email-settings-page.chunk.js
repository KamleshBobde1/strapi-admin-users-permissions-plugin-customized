"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["email-settings-page"],{

/***/ "./node_modules/@strapi/icons/Envelop.js":
/*!***********************************************!*\
  !*** ./node_modules/@strapi/icons/Envelop.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

!function (e, t) {
  "object" == ( false ? 0 : (0, _typeof2["default"])(exports)) && "object" == ( false ? 0 : (0, _typeof2["default"])(module)) ? module.exports = t(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(void 0, function (e) {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == (0, _typeof2["default"])(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 67);
  }({
    0: function _(t, r) {
      t.exports = e;
    },
    67: function _(e, t, r) {
      "use strict";

      r.r(t);
      var n = r(0);

      function o() {
        return (o = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];

            for (var n in r) {
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
          }

          return e;
        }).apply(this, arguments);
      }

      t["default"] = function (e) {
        return n.createElement("svg", o({
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, e), n.createElement("path", {
          d: "M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",
          fill: "#32324D"
        }), n.createElement("path", {
          d: "M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",
          fill: "#32324D"
        }), n.createElement("path", {
          d: "M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",
          fill: "#32324D"
        }));
      };
    }
  });
});

/***/ }),

/***/ "./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/Configuration.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/Configuration.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _TextInput = __webpack_require__(/*! @strapi/design-system/TextInput */ "./node_modules/@strapi/design-system/TextInput.js");

var _Select = __webpack_require__(/*! @strapi/design-system/Select */ "./node_modules/@strapi/design-system/Select.js");

var _getTrad = _interopRequireDefault(__webpack_require__(/*! ../../../utils/getTrad */ "./node_modules/@strapi/plugin-email/admin/src/utils/getTrad.js"));

/* eslint-disable no-useless-escape */
var Configuration = function Configuration(_ref) {
  var config = _ref.config;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "delta",
    as: "h2"
  }, formatMessage({
    id: (0, _getTrad["default"])('Settings.email.plugin.title.config'),
    defaultMessage: 'Configuration'
  })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, null, formatMessage({
    id: (0, _getTrad["default"])('Settings.email.plugin.text.configuration'),
    defaultMessage: 'The plugin is configured through the {file} file, checkout this {link} for the documentation.'
  }, {
    file: './config/plugins.js',
    link: /*#__PURE__*/_react["default"].createElement("a", {
      href: "https://docs.strapi.io/developer-docs/latest/plugins/email.html",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "link")
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    gap: 5
  }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    name: "shipper-email",
    label: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.label.defaultFrom'),
      defaultMessage: 'Default sender email'
    }),
    placeholder: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.placeholder.defaultFrom'),
      defaultMessage: "ex: Strapi No-Reply <no-reply@strapi.io>"
    }),
    disabled: true,
    onChange: function onChange() {},
    value: config.settings.defaultFrom
  })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    name: "response-email",
    label: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.label.defaultReplyTo'),
      defaultMessage: 'Default response email'
    }),
    placeholder: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.placeholder.defaultReplyTo'),
      defaultMessage: "ex: Strapi <example@strapi.io>"
    }),
    disabled: true,
    onChange: function onChange() {},
    value: config.settings.defaultReplyTo
  })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    name: "email-provider",
    label: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.label.provider'),
      defaultMessage: 'Email provider'
    }),
    disabled: true,
    onChange: function onChange() {},
    value: config.provider
  }, /*#__PURE__*/_react["default"].createElement(_Select.Option, {
    value: config.provider
  }, config.provider)))));
};

Configuration.propTypes = {
  config: _propTypes["default"].shape({
    provider: _propTypes["default"].string,
    settings: _propTypes["default"].shape({
      defaultFrom: _propTypes["default"].string,
      defaultReplyTo: _propTypes["default"].string
    })
  }).isRequired
};
var _default = Configuration;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/EmailHeader.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/EmailHeader.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _getTrad = _interopRequireDefault(__webpack_require__(/*! ../../../utils/getTrad */ "./node_modules/@strapi/plugin-email/admin/src/utils/getTrad.js"));

var EmailHeader = function EmailHeader() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle, {
    name: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.title'),
      defaultMessage: 'Configuration'
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    id: "title",
    title: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.title'),
      defaultMessage: 'Configuration'
    }),
    subtitle: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.subTitle'),
      defaultMessage: 'Test the settings for the Email plugin'
    })
  }));
};

var _default = EmailHeader;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-email/admin/src/pages/Settings/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _TextInput = __webpack_require__(/*! @strapi/design-system/TextInput */ "./node_modules/@strapi/design-system/TextInput.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _Envelop = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Envelop */ "./node_modules/@strapi/icons/Envelop.js"));

var _Configuration = _interopRequireDefault(__webpack_require__(/*! ./components/Configuration */ "./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/Configuration.js"));

var _schema = _interopRequireDefault(__webpack_require__(/*! ../../utils/schema */ "./node_modules/@strapi/plugin-email/admin/src/utils/schema.js"));

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./node_modules/@strapi/plugin-email/admin/src/permissions.js"));

var _api = __webpack_require__(/*! ./utils/api */ "./node_modules/@strapi/plugin-email/admin/src/pages/Settings/utils/api.js");

var _EmailHeader = _interopRequireDefault(__webpack_require__(/*! ./components/EmailHeader */ "./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/EmailHeader.js"));

var _getTrad = _interopRequireDefault(__webpack_require__(/*! ../../utils/getTrad */ "./node_modules/@strapi/plugin-email/admin/src/utils/getTrad.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProtectedSettingsPage = function ProtectedSettingsPage() {
  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions, {
    permissions: _permissions["default"].settings
  }, /*#__PURE__*/_react["default"].createElement(SettingsPage, null));
};

var SettingsPage = function SettingsPage() {
  var _formErrors$email, _formErrors$email2;

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useOverlayBlocker = (0, _helperPlugin.useOverlayBlocker)(),
      lockApp = _useOverlayBlocker.lockApp,
      unlockApp = _useOverlayBlocker.unlockApp;

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  (0, _helperPlugin.useFocusWhenNavigate)();

  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      formErrors = _useState2[0],
      setFormErrors = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isSubmitting = _useState6[0],
      setIsSubmitting = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      testAddress = _useState8[0],
      setTestAddress = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      isTestAddressValid = _useState10[0],
      setIsTestAddressValid = _useState10[1];

  var _useState11 = (0, _react.useState)({
    provider: '',
    settings: {
      defaultFrom: '',
      defaultReplyTo: '',
      testAddress: ''
    }
  }),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      config = _useState12[0],
      setConfig = _useState12[1];

  (0, _react.useEffect)(function () {
    setIsLoading(true);
    (0, _api.fetchEmailSettings)().then(function (config) {
      notifyStatus(formatMessage({
        id: (0, _getTrad["default"])('Settings.email.plugin.notification.data.loaded'),
        defaultMessage: 'Email settings data has been loaded'
      }));
      setConfig(config);
      var testAddressFound = (0, _lodash.get)(config, 'settings.testAddress');

      if (testAddressFound) {
        setTestAddress(testAddressFound);
      }
    })["catch"](function () {
      return toggleNotification({
        type: 'warning',
        message: formatMessage({
          id: (0, _getTrad["default"])('Settings.email.plugin.notification.config.error'),
          defaultMessage: 'Failed to retrieve the email config'
        })
      });
    })["finally"](function () {
      return setIsLoading(false);
    });
  }, [formatMessage, toggleNotification, notifyStatus]);
  (0, _react.useEffect)(function () {
    if (formErrors.email) {
      var input = document.querySelector('#test-address-input');
      input.focus();
    }
  }, [formErrors]);
  (0, _react.useEffect)(function () {
    _schema["default"].validate({
      email: testAddress
    }, {
      abortEarly: false
    }).then(function () {
      return setIsTestAddressValid(true);
    })["catch"](function () {
      return setIsTestAddressValid(false);
    });
  }, [testAddress]);

  var handleChange = function handleChange(e) {
    setTestAddress(function () {
      return e.target.value;
    });
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return _schema["default"].validate({
                email: testAddress
              }, {
                abortEarly: false
              });

            case 4:
              setIsSubmitting(true);
              lockApp();
              (0, _api.postEmailTest)({
                to: testAddress
              }).then(function () {
                toggleNotification({
                  type: 'success',
                  message: formatMessage({
                    id: (0, _getTrad["default"])('Settings.email.plugin.notification.test.success'),
                    defaultMessage: 'Email test succeeded, check the {to} mailbox'
                  }, {
                    to: testAddress
                  })
                });
              })["catch"](function () {
                toggleNotification({
                  type: 'warning',
                  message: formatMessage({
                    id: (0, _getTrad["default"])('Settings.email.plugin.notification.test.error'),
                    defaultMessage: 'Failed to send a test mail to {to}'
                  }, {
                    to: testAddress
                  })
                });
              })["finally"](function () {
                setIsSubmitting(false);
                unlockApp();
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              setFormErrors((0, _helperPlugin.getYupInnerErrors)(_context.t0));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
      labelledBy: "title",
      "aria-busy": "true"
    }, /*#__PURE__*/_react["default"].createElement(_EmailHeader["default"], null), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null)));
  }

  return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    labelledBy: "title",
    "aria-busy": isSubmitting
  }, /*#__PURE__*/_react["default"].createElement(_EmailHeader["default"], null), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 7
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    background: "neutral0",
    hasRadius: true,
    shadow: "filterShadow",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7
  }, /*#__PURE__*/_react["default"].createElement(_Configuration["default"], {
    config: config
  })), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    background: "neutral0",
    hasRadius: true,
    shadow: "filterShadow",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "delta",
    as: "h2"
  }, formatMessage({
    id: (0, _getTrad["default"])('Settings.email.plugin.title.test'),
    defaultMessage: 'Test email delivery'
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    gap: 5,
    alignItems: "end"
  }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    id: "test-address-input",
    name: "test-address",
    onChange: handleChange,
    label: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.label.testAddress'),
      defaultMessage: 'Recipient email'
    }),
    value: testAddress,
    error: ((_formErrors$email = formErrors.email) === null || _formErrors$email === void 0 ? void 0 : _formErrors$email.id) && formatMessage({
      id: (0, _getTrad["default"])("".concat((_formErrors$email2 = formErrors.email) === null || _formErrors$email2 === void 0 ? void 0 : _formErrors$email2.id)),
      defaultMessage: 'This is an invalid email'
    }),
    placeholder: formatMessage({
      id: (0, _getTrad["default"])('Settings.email.plugin.placeholder.testAddress'),
      defaultMessage: 'ex: developer@example.com'
    })
  })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 7,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    loading: isSubmitting,
    disabled: !isTestAddressValid,
    type: "submit",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Envelop["default"], null)
  }, formatMessage({
    id: (0, _getTrad["default"])('Settings.email.plugin.button.test-email'),
    defaultMessage: 'Send test email'
  }))))))))));
};

var _default = ProtectedSettingsPage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-email/admin/src/pages/Settings/utils/api.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/utils/api.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.postEmailTest = exports.fetchEmailSettings = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _axiosInstance = _interopRequireDefault(__webpack_require__(/*! ../../../utils/axiosInstance */ "./node_modules/@strapi/plugin-email/admin/src/utils/axiosInstance.js"));

var fetchEmailSettings = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$axiosInstance$, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axiosInstance["default"].get('/email/settings');

          case 2:
            _yield$axiosInstance$ = _context.sent;
            data = _yield$axiosInstance$.data;
            return _context.abrupt("return", data.config);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchEmailSettings() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchEmailSettings = fetchEmailSettings;

var postEmailTest = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axiosInstance["default"].post('/email/test', body);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postEmailTest(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postEmailTest = postEmailTest;

/***/ }),

/***/ "./node_modules/@strapi/plugin-email/admin/src/utils/axiosInstance.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-email/admin/src/utils/axiosInstance.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var instance = _axios["default"].create({
  baseURL: "http://localhost:1337"
});

instance.interceptors.request.use( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(config) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config.headers = {
              Authorization: "Bearer ".concat(_helperPlugin.auth.getToken()),
              Accept: 'application/json',
              'Content-Type': 'application/json'
            };
            return _context.abrupt("return", config);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), function (error) {
  Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var _error$response;

  // whatever you want to do with the error
  if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401) {
    _helperPlugin.auth.clearAppStorage();

    window.location.reload();
  }

  throw error;
});
var _default = instance;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-email/admin/src/utils/schema.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@strapi/plugin-email/admin/src/utils/schema.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var yup = _interopRequireWildcard(__webpack_require__(/*! yup */ "./src/admin/node_modules/yup/lib/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var schema = yup.object().shape({
  email: yup.string().email(_helperPlugin.translatedErrors.email).required(_helperPlugin.translatedErrors.required)
});
var _default = schema;
exports["default"] = _default;

/***/ })

}]);