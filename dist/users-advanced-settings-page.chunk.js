"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["users-advanced-settings-page"],{

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Select = __webpack_require__(/*! @strapi/design-system/Select */ "./node_modules/@strapi/design-system/Select.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _Check = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Check */ "./node_modules/@strapi/icons/Check.js"));

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

var _layout = _interopRequireDefault(__webpack_require__(/*! ./utils/layout */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/layout.js"));

var _schema = _interopRequireDefault(__webpack_require__(/*! ./utils/schema */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/schema.js"));

var _api = __webpack_require__(/*! ./utils/api */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/api.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ProtectedAdvancedSettingsPage = function ProtectedAdvancedSettingsPage() {
  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions, {
    permissions: _permissions["default"].readAdvancedSettings
  }, /*#__PURE__*/_react["default"].createElement(AdvancedSettingsPage, null));
};

var AdvancedSettingsPage = function AdvancedSettingsPage() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useOverlayBlocker = (0, _helperPlugin.useOverlayBlocker)(),
      lockApp = _useOverlayBlocker.lockApp,
      unlockApp = _useOverlayBlocker.unlockApp;

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  var queryClient = (0, _reactQuery.useQueryClient)();
  (0, _helperPlugin.useFocusWhenNavigate)();
  var updatePermissions = (0, _react.useMemo)(function () {
    return {
      update: _permissions["default"].updateAdvancedSettings
    };
  }, []);

  var _useRBAC = (0, _helperPlugin.useRBAC)(updatePermissions),
      isLoadingForPermissions = _useRBAC.isLoading,
      canUpdate = _useRBAC.allowedActions.canUpdate;

  var _useQuery = (0, _reactQuery.useQuery)('advanced', function () {
    return (0, _api.fetchData)();
  }, {
    onSuccess: function onSuccess() {
      notifyStatus(formatMessage({
        id: (0, _utils.getTrad)('Form.advancedSettings.data.loaded'),
        defaultMessage: 'Advanced settings data has been loaded'
      }));
    },
    onError: function onError() {
      toggleNotification({
        type: 'warning',
        message: {
          id: (0, _utils.getTrad)('notification.error'),
          defaultMessage: 'An error occured'
        }
      });
    }
  }),
      isLoadingData = _useQuery.status,
      data = _useQuery.data;

  var isLoading = isLoadingForPermissions || isLoadingData !== 'success';
  var submitMutation = (0, _reactQuery.useMutation)(function (body) {
    return (0, _api.putAdvancedSettings)(body);
  }, {
    onSuccess: function () {
      var _onSuccess = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryClient.invalidateQueries('advanced');

              case 2:
                toggleNotification({
                  type: 'success',
                  message: {
                    id: (0, _utils.getTrad)('notification.success.saved'),
                    defaultMessage: 'Saved'
                  }
                });
                unlockApp();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSuccess() {
        return _onSuccess.apply(this, arguments);
      }

      return onSuccess;
    }(),
    onError: function onError() {
      toggleNotification({
        type: 'warning',
        message: {
          id: (0, _utils.getTrad)('notification.error'),
          defaultMessage: 'An error occured'
        }
      });
      unlockApp();
    },
    refetchActive: true
  });
  var isSubmittingForm = submitMutation.isLoading;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
      var urlConfirmation;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              lockApp();
              urlConfirmation = body.email_confirmation ? body.email_confirmation_redirection : '';
              _context2.next = 4;
              return submitMutation.mutateAsync(_objectSpread(_objectSpread({}, body), {}, {
                email_confirmation_redirection: urlConfirmation
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
      "aria-busy": "true"
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle, {
      name: formatMessage({
        id: (0, _utils.getTrad)('HeaderNav.link.advancedSettings'),
        defaultMessage: 'Advanced Settings'
      })
    }), /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
      title: formatMessage({
        id: (0, _utils.getTrad)('HeaderNav.link.advancedSettings'),
        defaultMessage: 'Advanced Settings'
      })
    }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null)));
  }

  return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    "aria-busy": isSubmittingForm
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle, {
    name: formatMessage({
      id: (0, _utils.getTrad)('HeaderNav.link.advancedSettings'),
      defaultMessage: 'Advanced Settings'
    })
  }), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    onSubmit: handleSubmit,
    initialValues: data.settings,
    validateOnChange: false,
    validationSchema: _schema["default"],
    enableReinitialize: true
  }, function (_ref2) {
    var errors = _ref2.errors,
        values = _ref2.values,
        handleChange = _ref2.handleChange,
        isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.Form, null, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
      title: formatMessage({
        id: (0, _utils.getTrad)('HeaderNav.link.advancedSettings'),
        defaultMessage: 'Advanced Settings'
      }),
      primaryAction: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        loading: isSubmitting,
        type: "submit",
        disabled: !canUpdate,
        startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
        size: "L"
      }, formatMessage({
        id: (0, _utils.getTrad)('Form.save'),
        defaultMessage: 'Save'
      }))
    }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
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
      id: (0, _utils.getTrad)('Form.title.advancedSettings'),
      defaultMessage: 'Settings'
    })), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
      gap: 6
    }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      col: 6,
      s: 12
    }, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
      label: formatMessage({
        id: (0, _utils.getTrad)('EditForm.inputSelect.label.role'),
        defaultMessage: 'Default role for authenticated users'
      }),
      value: values.default_role,
      hint: formatMessage({
        id: (0, _utils.getTrad)('EditForm.inputSelect.description.role'),
        defaultMessage: 'It will attach the new authenticated user to the selected role.'
      }),
      onChange: function onChange(e) {
        return handleChange({
          target: {
            name: 'default_role',
            value: e
          }
        });
      }
    }, data.roles.map(function (role) {
      return /*#__PURE__*/_react["default"].createElement(_Select.Option, {
        key: role.type,
        value: role.type
      }, role.name);
    }))), _layout["default"].map(function (input) {
      var value = values[input.name];

      if (!value) {
        value = input.type === 'bool' ? false : '';
      }

      return /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, (0, _extends2["default"])({
        key: input.name
      }, input.size), /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, (0, _extends2["default"])({}, input, {
        value: value,
        error: errors[input.name],
        disabled: input.name === 'email_confirmation_redirection' && values.email_confirmation === false,
        onChange: handleChange
      })));
    }))))));
  }));
};

var _default = ProtectedAdvancedSettingsPage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/api.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/api.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.putAdvancedSettings = exports.fetchData = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _utils = __webpack_require__(/*! ../../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

var fetchData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$axiosInstance$, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utils.axiosInstance.get((0, _utils.getRequestURL)('advanced'));

          case 2:
            _yield$axiosInstance$ = _context.sent;
            data = _yield$axiosInstance$.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchData() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchData = fetchData;

var putAdvancedSettings = function putAdvancedSettings(body) {
  return _utils.axiosInstance.put((0, _utils.getRequestURL)('advanced'), body);
};

exports.putAdvancedSettings = putAdvancedSettings;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/layout.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/layout.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(/*! ../../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

var layout = [{
  intlLabel: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.label.email'),
    defaultMessage: 'One account per email address'
  },
  description: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.description.email'),
    defaultMessage: 'Disallow the user to create multiple accounts using the same email address with different authentication providers.'
  },
  name: 'unique_email',
  type: 'bool',
  size: {
    col: 12,
    xs: 12
  }
}, {
  intlLabel: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.label.sign-up'),
    defaultMessage: 'Enable sign-ups'
  },
  description: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.description.sign-up'),
    defaultMessage: 'When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider.'
  },
  name: 'allow_register',
  type: 'bool',
  size: {
    col: 12,
    xs: 12
  }
}, {
  intlLabel: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.label.email-reset-password'),
    defaultMessage: 'Reset password page'
  },
  description: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.description.email-reset-password'),
    defaultMessage: "URL of your application's reset password page."
  },
  placeholder: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.placeholder.email-reset-password'),
    defaultMessage: 'ex: https://youtfrontend.com/reset-password'
  },
  name: 'email_reset_password',
  type: 'text',
  size: {
    col: 6,
    xs: 12
  }
}, {
  intlLabel: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.label.email-confirmation'),
    defaultMessage: 'Enable email confirmation'
  },
  description: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.description.email-confirmation'),
    defaultMessage: 'When enabled (ON), new registered users receive a confirmation email.'
  },
  name: 'email_confirmation',
  type: 'bool',
  size: {
    col: 12,
    xs: 12
  }
}, {
  intlLabel: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.label.email-confirmation-redirection'),
    defaultMessage: 'Redirection url'
  },
  description: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.description.email-confirmation-redirection'),
    defaultMessage: 'After you confirmed your email, choose where you will be redirected.'
  },
  placeholder: {
    id: (0, _utils.getTrad)('EditForm.inputToggle.placeholder.email-reset-password'),
    defaultMessage: 'ex: https://youtfrontend.com/reset-password'
  },
  name: 'email_confirmation_redirection',
  type: 'text',
  size: {
    col: 6,
    xs: 12
  }
}];
var _default = layout;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/schema.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/schema.js ***!
  \********************************************************************************************************/
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

var URL_REGEX = new RegExp('(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))');
var schema = yup.object().shape({
  email_confirmation_redirection: yup.mixed().when('email_confirmation', {
    is: true,
    then: yup.string().matches(URL_REGEX).required(),
    otherwise: yup.string().nullable()
  }),
  email_reset_password: yup.string(_helperPlugin.translatedErrors.string).matches(URL_REGEX, _helperPlugin.translatedErrors.regex).nullable()
});
var _default = schema;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/axiosInstance.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/axiosInstance.js ***!
  \****************************************************************************************/
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

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

var cleanPermissions = function cleanPermissions(permissions) {
  return Object.keys(permissions).reduce(function (acc, current) {
    var currentPermission = permissions[current].controllers;
    var cleanedControllers = Object.keys(currentPermission).reduce(function (acc2, curr) {
      if ((0, _lodash.isEmpty)(currentPermission[curr])) {
        return acc2;
      }

      acc2[curr] = currentPermission[curr];
      return acc2;
    }, {});

    if ((0, _lodash.isEmpty)(cleanedControllers)) {
      return acc;
    }

    acc[current] = {
      controllers: cleanedControllers
    };
    return acc;
  }, {});
};

var _default = cleanPermissions;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/formatPolicies.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/formatPolicies.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var formatPolicies = function formatPolicies(policies) {
  return policies.reduce(function (acc, current) {
    acc.push({
      label: current,
      value: current
    });
    return acc;
  }, []);
};

var _default = formatPolicies;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getRequestURL.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getRequestURL.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _pluginId = _interopRequireDefault(__webpack_require__(/*! ../pluginId */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pluginId.js"));

var getRequestURL = function getRequestURL(endPoint) {
  return "/".concat(_pluginId["default"], "/").concat(endPoint);
};

var _default = getRequestURL;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "axiosInstance", ({
  enumerable: true,
  get: function get() {
    return _axiosInstance["default"];
  }
}));
Object.defineProperty(exports, "cleanPermissions", ({
  enumerable: true,
  get: function get() {
    return _cleanPermissions["default"];
  }
}));
Object.defineProperty(exports, "formatPolicies", ({
  enumerable: true,
  get: function get() {
    return _formatPolicies["default"];
  }
}));
Object.defineProperty(exports, "getRequestURL", ({
  enumerable: true,
  get: function get() {
    return _getRequestURL["default"];
  }
}));
Object.defineProperty(exports, "getTrad", ({
  enumerable: true,
  get: function get() {
    return _getTrad["default"];
  }
}));

var _axiosInstance = _interopRequireDefault(__webpack_require__(/*! ./axiosInstance */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/axiosInstance.js"));

var _cleanPermissions = _interopRequireDefault(__webpack_require__(/*! ./cleanPermissions */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js"));

var _getRequestURL = _interopRequireDefault(__webpack_require__(/*! ./getRequestURL */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getRequestURL.js"));

var _getTrad = _interopRequireDefault(__webpack_require__(/*! ./getTrad */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js"));

var _formatPolicies = _interopRequireDefault(__webpack_require__(/*! ./formatPolicies */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/formatPolicies.js"));

/***/ })

}]);