"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["Admin_profilePage"],{

/***/ "./.cache/admin/src/pages/ProfilePage/index.js":
/*!*****************************************************!*\
  !*** ./.cache/admin/src/pages/ProfilePage/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./src/admin/node_modules/react-helmet/lib/Helmet.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _Select = __webpack_require__(/*! @strapi/design-system/Select */ "./node_modules/@strapi/design-system/Select.js");

var _Field = __webpack_require__(/*! @strapi/design-system/Field */ "./node_modules/@strapi/design-system/Field.js");

var _TextInput = __webpack_require__(/*! @strapi/design-system/TextInput */ "./node_modules/@strapi/design-system/TextInput.js");

var _Eye = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Eye */ "./node_modules/@strapi/icons/Eye.js"));

var _EyeStriked = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/EyeStriked */ "./node_modules/@strapi/icons/EyeStriked.js"));

var _Check = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Check */ "./node_modules/@strapi/icons/Check.js"));

var _useLocalesProvider2 = _interopRequireDefault(__webpack_require__(/*! ../../components/LocalesProvider/useLocalesProvider */ "./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js"));

var _api = __webpack_require__(/*! ./utils/api */ "./.cache/admin/src/pages/ProfilePage/utils/api.js");

var _schema = _interopRequireDefault(__webpack_require__(/*! ./utils/schema */ "./.cache/admin/src/pages/ProfilePage/utils/schema.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./.cache/admin/src/utils/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var PasswordInput = /*#__PURE__*/(0, _styledComponents["default"])(_TextInput.TextInput).withConfig({
  displayName: "ProfilePage__PasswordInput",
  componentId: "sc-1fhx3cm-0"
})(["::-ms-reveal{display:none;}"]);
var FieldActionWrapper = /*#__PURE__*/(0, _styledComponents["default"])(_Field.FieldAction).withConfig({
  displayName: "ProfilePage__FieldActionWrapper",
  componentId: "sc-1fhx3cm-1"
})(["svg{height:1rem;width:1rem;path{fill:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral600;
});

var ProfilePage = function ProfilePage() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      passwordShown = _useState2[0],
      setPasswordShown = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      passwordConfirmShown = _useState4[0],
      setPasswordConfirmShown = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      currentPasswordShown = _useState6[0],
      setCurrentPasswordShown = _useState6[1];

  var _useLocalesProvider = (0, _useLocalesProvider2["default"])(),
      changeLocale = _useLocalesProvider.changeLocale,
      localeNames = _useLocalesProvider.localeNames;

  var _useAppInfos = (0, _helperPlugin.useAppInfos)(),
      setUserDisplayName = _useAppInfos.setUserDisplayName;

  var queryClient = (0, _reactQuery.useQueryClient)();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useOverlayBlocker = (0, _helperPlugin.useOverlayBlocker)(),
      lockApp = _useOverlayBlocker.lockApp,
      unlockApp = _useOverlayBlocker.unlockApp;

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  (0, _helperPlugin.useFocusWhenNavigate)();

  var _useQuery = (0, _reactQuery.useQuery)('user', function () {
    return (0, _api.fetchUser)();
  }, {
    onSuccess: function onSuccess() {
      notifyStatus(formatMessage({
        id: 'Settings.profile.form.notify.data.loaded',
        defaultMessage: 'Your profile data has been loaded'
      }));
    },
    onError: function onError() {
      toggleNotification({
        type: 'warning',
        message: {
          id: 'notification.error',
          defaultMessage: 'An error occured'
        }
      });
    }
  }),
      status = _useQuery.status,
      data = _useQuery.data;

  var isLoading = status !== 'success';
  var submitMutation = (0, _reactQuery.useMutation)(function (body) {
    return (0, _api.putUser)((0, _omit["default"])(body, 'confirmPassword'));
  }, {
    onSuccess: function () {
      var _onSuccess = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var userDisplayName;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryClient.invalidateQueries('user');

              case 2:
                _helperPlugin.auth.setUserInfo(data);

                userDisplayName = data.username || (0, _utils.getFullName)(data.firstname, data.lastname);
                setUserDisplayName(userDisplayName);
                changeLocale(data.preferedLanguage);
                toggleNotification({
                  type: 'success',
                  message: {
                    id: 'notification.success.saved',
                    defaultMessage: 'Saved'
                  }
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSuccess(_x) {
        return _onSuccess.apply(this, arguments);
      }

      return onSuccess;
    }(),
    onSettled: function onSettled() {
      unlockApp();
    },
    refetchActive: true
  });
  var isSubmittingForm = submitMutation.isLoading;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body, _ref2) {
      var setErrors, username;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setErrors = _ref2.setErrors;
              lockApp();
              username = body.username || null;
              submitMutation.mutate(_objectSpread(_objectSpread({}, body), {}, {
                username: username
              }), {
                onError: function onError(error) {
                  var _error$response;

                  var res = error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data;

                  if (res !== null && res !== void 0 && res.data) {
                    return setErrors(res.data);
                  }

                  return toggleNotification({
                    type: 'warning',
                    message: {
                      id: 'notification.error',
                      defaultMessage: 'An error occured'
                    }
                  });
                }
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var fieldsToPick = ['email', 'firstname', 'lastname', 'username', 'preferedLanguage'];
  var initialData = (0, _pick["default"])(data, fieldsToPick);

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
      "aria-busy": "true"
    }, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
      title: formatMessage({
        id: 'Settings.profile.form.section.helmet.title',
        defaultMessage: 'User profile'
      })
    }), /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
      title: formatMessage({
        id: 'Settings.profile.form.section.profile.page.title',
        defaultMessage: 'Profile page'
      })
    }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null)));
  }

  return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    "aria-busy": isSubmittingForm
  }, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
    title: formatMessage({
      id: 'Settings.profile.form.section.helmet.title',
      defaultMessage: 'User profile'
    })
  }), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    onSubmit: handleSubmit,
    initialValues: initialData,
    validateOnChange: false,
    validationSchema: _schema["default"],
    enableReinitialize: true
  }, function (_ref4) {
    var errors = _ref4.errors,
        values = _ref4.values,
        handleChange = _ref4.handleChange,
        isSubmitting = _ref4.isSubmitting;
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.Form, null, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
      title: data.username || (0, _utils.getFullName)(data.firstname, data.lastname),
      primaryAction: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
        loading: isSubmitting,
        type: "submit"
      }, formatMessage({
        id: 'form.button.save',
        defaultMessage: 'Save'
      }))
    }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      paddingBottom: 10
    }, /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
      spacing: 6
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
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
      id: 'Settings.profile.form.section.profile.title',
      defaultMessage: 'Profile'
    })), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
      gap: 5
    }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      s: 12,
      col: 6
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, {
      intlLabel: {
        id: 'Auth.form.firstname.label',
        defaultMessage: 'First name'
      },
      error: errors.firstname,
      onChange: handleChange,
      value: values.firstname || '',
      type: "text",
      name: "firstname",
      required: true
    })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      s: 12,
      col: 6
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, {
      intlLabel: {
        id: 'Auth.form.lastname.label',
        defaultMessage: 'Last name'
      },
      error: errors.lastname,
      onChange: handleChange,
      value: values.lastname || '',
      type: "text",
      name: "lastname"
    })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      s: 12,
      col: 6
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, {
      intlLabel: {
        id: 'Auth.form.email.label',
        defaultMessage: 'Email'
      },
      error: errors.email,
      onChange: handleChange,
      value: values.email || '',
      type: "email",
      name: "email",
      required: true
    })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      s: 12,
      col: 6
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, {
      intlLabel: {
        id: 'Auth.form.username.label',
        defaultMessage: 'Username'
      },
      error: errors.username,
      onChange: handleChange,
      value: values.username || '',
      type: "text",
      name: "username"
    }))))), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
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
      id: 'Settings.profile.form.section.password.title',
      defaultMessage: 'Change password'
    })), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
      gap: 5
    }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      s: 12,
      col: 6
    }, /*#__PURE__*/_react["default"].createElement(PasswordInput, {
      error: errors.currentPassword ? formatMessage({
        id: errors.currentPassword,
        defaultMessage: errors.currentPassword
      }) : '',
      onChange: handleChange,
      value: values.currentPassword || '',
      label: formatMessage({
        id: 'Auth.form.currentPassword.label',
        defaultMessage: 'Current Password'
      }),
      name: "currentPassword",
      type: currentPasswordShown ? 'text' : 'password',
      endAction: /*#__PURE__*/_react["default"].createElement(FieldActionWrapper, {
        onClick: function onClick(e) {
          e.stopPropagation();
          setCurrentPasswordShown(function (prev) {
            return !prev;
          });
        },
        label: formatMessage(currentPasswordShown ? {
          id: 'Auth.form.password.show-password',
          defaultMessage: 'Show password'
        } : {
          id: 'Auth.form.password.hide-password',
          defaultMessage: 'Hide password'
        })
      }, currentPasswordShown ? /*#__PURE__*/_react["default"].createElement(_Eye["default"], null) : /*#__PURE__*/_react["default"].createElement(_EyeStriked["default"], null))
    }))), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
      gap: 5
    }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      s: 12,
      col: 6
    }, /*#__PURE__*/_react["default"].createElement(PasswordInput, {
      error: errors.password ? formatMessage({
        id: errors.password,
        defaultMessage: errors.password
      }) : '',
      onChange: handleChange,
      value: values.password || '',
      label: formatMessage({
        id: 'Auth.form.password.label',
        defaultMessage: 'Password'
      }),
      name: "password",
      type: passwordShown ? 'text' : 'password',
      endAction: /*#__PURE__*/_react["default"].createElement(FieldActionWrapper, {
        onClick: function onClick(e) {
          e.stopPropagation();
          setPasswordShown(function (prev) {
            return !prev;
          });
        },
        label: formatMessage(passwordShown ? {
          id: 'Auth.form.password.show-password',
          defaultMessage: 'Show password'
        } : {
          id: 'Auth.form.password.hide-password',
          defaultMessage: 'Hide password'
        })
      }, passwordShown ? /*#__PURE__*/_react["default"].createElement(_Eye["default"], null) : /*#__PURE__*/_react["default"].createElement(_EyeStriked["default"], null))
    })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      s: 12,
      col: 6
    }, /*#__PURE__*/_react["default"].createElement(PasswordInput, {
      error: errors.confirmPassword ? formatMessage({
        id: errors.confirmPassword,
        defaultMessage: errors.confirmPassword
      }) : '',
      onChange: handleChange,
      value: values.confirmPassword || '',
      label: formatMessage({
        id: 'Auth.form.confirmPassword.label',
        defaultMessage: 'Password confirmation'
      }),
      name: "confirmPassword",
      type: passwordConfirmShown ? 'text' : 'password',
      endAction: /*#__PURE__*/_react["default"].createElement(FieldActionWrapper, {
        onClick: function onClick(e) {
          e.stopPropagation();
          setPasswordConfirmShown(function (prev) {
            return !prev;
          });
        },
        label: formatMessage(passwordConfirmShown ? {
          id: 'Auth.form.password.show-password',
          defaultMessage: 'Show password'
        } : {
          id: 'Auth.form.password.hide-password',
          defaultMessage: 'Hide password'
        })
      }, passwordConfirmShown ? /*#__PURE__*/_react["default"].createElement(_Eye["default"], null) : /*#__PURE__*/_react["default"].createElement(_EyeStriked["default"], null))
    }))))), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
      spacing: 4
    }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
      spacing: 1
    }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      variant: "delta",
      as: "h2"
    }, formatMessage({
      id: 'Settings.profile.form.section.experience.title',
      defaultMessage: 'Experience'
    })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, null, formatMessage({
      id: 'Settings.profile.form.section.experience.interfaceLanguageHelp',
      defaultMessage: 'Selection will change the interface language only for you. Please refer to this {documentation} to make other languages available for your team.'
    }, {
      documentation: /*#__PURE__*/_react["default"].createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"
      }, formatMessage({
        id: 'Settings.profile.form.section.experience.documentation',
        defaultMessage: 'documentation'
      }))
    }))), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
      gap: 5
    }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      s: 12,
      col: 6
    }, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
      label: formatMessage({
        id: 'Settings.profile.form.section.experience.interfaceLanguage',
        defaultMessage: 'Interface language'
      }),
      placeholder: formatMessage({
        id: 'components.Select.placeholder',
        defaultMessage: 'Select'
      }),
      hint: formatMessage({
        id: 'Settings.profile.form.section.experience.interfaceLanguage.hint',
        defaultMessage: 'This will only display your own interface in the chosen language.'
      }),
      onClear: function onClear() {
        handleChange({
          target: {
            name: 'preferedLanguage',
            value: null
          }
        });
      },
      clearLabel: formatMessage({
        id: 'Settings.profile.form.section.experience.clear.select',
        defaultMessage: 'Clear the interface language selected'
      }),
      value: values.preferedLanguage,
      onChange: function onChange(e) {
        handleChange({
          target: {
            name: 'preferedLanguage',
            value: e
          }
        });
      }
    }, Object.keys(localeNames).map(function (language) {
      var langName = localeNames[language];
      return /*#__PURE__*/_react["default"].createElement(_Select.Option, {
        value: language,
        key: language
      }, langName);
    }))))))))));
  }));
};

var _default = ProfilePage;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/ProfilePage/utils/api.js":
/*!*********************************************************!*\
  !*** ./.cache/admin/src/pages/ProfilePage/utils/api.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.putUser = exports.fetchUser = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _utils = __webpack_require__(/*! ../../../core/utils */ "./.cache/admin/src/core/utils/index.js");

var fetchUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$axiosInstance$, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utils.axiosInstance.get('/admin/users/me');

          case 2:
            _yield$axiosInstance$ = _context.sent;
            data = _yield$axiosInstance$.data;
            return _context.abrupt("return", data.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchUser() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchUser = fetchUser;

var putUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var _yield$axiosInstance$2, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _utils.axiosInstance.put('/admin/users/me', body);

          case 2:
            _yield$axiosInstance$2 = _context2.sent;
            data = _yield$axiosInstance$2.data;
            return _context2.abrupt("return", data.data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function putUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.putUser = putUser;

/***/ }),

/***/ "./.cache/admin/src/pages/ProfilePage/utils/schema.js":
/*!************************************************************!*\
  !*** ./.cache/admin/src/pages/ProfilePage/utils/schema.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var yup = _interopRequireWildcard(__webpack_require__(/*! yup */ "./src/admin/node_modules/yup/lib/index.js"));

var _users = __webpack_require__(/*! ../../SettingsPage/pages/Users/utils/validations/users */ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var schema = yup.object().shape(_users.profileValidation);
var _default = schema;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js":
/*!*****************************************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var yup = _interopRequireWildcard(__webpack_require__(/*! yup */ "./src/admin/node_modules/yup/lib/index.js"));

var _profile = __webpack_require__(/*! ./profile */ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js");

var _roles = _interopRequireDefault(__webpack_require__(/*! ./roles */ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var schema = yup.object().shape(_objectSpread(_objectSpread({}, _profile.commonUserSchema), {}, {
  isActive: yup.bool()
}, _roles["default"]));
var _default = schema;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js":
/*!******************************************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "editValidation", ({
  enumerable: true,
  get: function get() {
    return _edit["default"];
  }
}));
Object.defineProperty(exports, "profileValidation", ({
  enumerable: true,
  get: function get() {
    return _profile["default"];
  }
}));
Object.defineProperty(exports, "rolesValidation", ({
  enumerable: true,
  get: function get() {
    return _roles["default"];
  }
}));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js"));

var _profile = _interopRequireDefault(__webpack_require__(/*! ./profile */ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js"));

var _roles = _interopRequireDefault(__webpack_require__(/*! ./roles */ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js"));

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js":
/*!********************************************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.commonUserSchema = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var yup = _interopRequireWildcard(__webpack_require__(/*! yup */ "./src/admin/node_modules/yup/lib/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var commonUserSchema = {
  firstname: yup.mixed().required(_helperPlugin.translatedErrors.required),
  lastname: yup.mixed(),
  email: yup.string().email(_helperPlugin.translatedErrors.email).lowercase().required(_helperPlugin.translatedErrors.required),
  username: yup.string().nullable(),
  password: yup.string().min(8, _helperPlugin.translatedErrors.minLength).matches(/[a-z]/, 'components.Input.error.contain.lowercase').matches(/[A-Z]/, 'components.Input.error.contain.uppercase').matches(/\d/, 'components.Input.error.contain.number'),
  confirmPassword: yup.string().min(8, _helperPlugin.translatedErrors.minLength).oneOf([yup.ref('password'), null], 'components.Input.error.password.noMatch').when('password', function (password, passSchema) {
    return password ? passSchema.required(_helperPlugin.translatedErrors.required) : passSchema;
  })
};
exports.commonUserSchema = commonUserSchema;

var schema = _objectSpread(_objectSpread({}, commonUserSchema), {}, {
  currentPassword: yup.string().when(['password', 'confirmPassword'], function (password, confirmPassword, passSchema) {
    return password || confirmPassword ? passSchema.required(_helperPlugin.translatedErrors.required) : passSchema;
  }),
  preferedLanguage: yup.string().nullable()
});

var _default = schema;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js":
/*!******************************************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js ***!
  \******************************************************************************************/
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

var schema = {
  roles: yup.array().min(1, _helperPlugin.translatedErrors.required).required(_helperPlugin.translatedErrors.required)
};
var _default = schema;
exports["default"] = _default;

/***/ })

}]);