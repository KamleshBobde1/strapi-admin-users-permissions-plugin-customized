"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["upload-settings"],{

/***/ "./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(/*! ./src/admin/node_modules/console-browserify/index.js */ "./src/admin/node_modules/console-browserify/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.SettingsPage = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./src/admin/node_modules/react-helmet/lib/Helmet.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Check = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Check */ "./node_modules/@strapi/icons/Check.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _ToggleInput = __webpack_require__(/*! @strapi/design-system/ToggleInput */ "./node_modules/@strapi/design-system/ToggleInput.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _isEqual = _interopRequireDefault(__webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-upload/admin/src/utils/index.js");

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/init.js"));

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/reducer.js"));

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./node_modules/@strapi/plugin-upload/admin/src/permissions.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SettingsPage = function SettingsPage() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useOverlayBlocker = (0, _helperPlugin.useOverlayBlocker)(),
      lockApp = _useOverlayBlocker.lockApp,
      unlockApp = _useOverlayBlocker.unlockApp;

  var toggleNotification = (0, _helperPlugin.useNotification)();
  (0, _helperPlugin.useFocusWhenNavigate)();

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState, _init["default"]),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      initialData = _useReducer2$.initialData,
      isLoading = _useReducer2$.isLoading,
      isSubmiting = _useReducer2$.isSubmiting,
      modifiedData = _useReducer2$.modifiedData,
      dispatch = _useReducer2[1];

  var isMounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    var CancelToken = _axios["default"].CancelToken;
    var source = CancelToken.source();

    var getData = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$axiosInstance$, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _utils.axiosInstance.get((0, _utils.getRequestUrl)('settings'), {
                  cancelToken: source.token
                });

              case 3:
                _yield$axiosInstance$ = _context.sent;
                data = _yield$axiosInstance$.data.data;
                dispatch({
                  type: 'GET_DATA_SUCCEEDED',
                  data: data
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function getData() {
        return _ref.apply(this, arguments);
      };
    }();

    if (isMounted.current) {
      getData();
    }

    return function () {
      source.cancel('Operation canceled by the user.');
      isMounted.current = false;
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var isSaveButtonDisabled = (0, _isEqual["default"])(initialData, modifiedData);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();

              if (!isSaveButtonDisabled) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              lockApp();
              dispatch({
                type: 'ON_SUBMIT'
              });
              _context2.prev = 5;
              _context2.next = 8;
              return _utils.axiosInstance.put((0, _utils.getRequestUrl)('settings'), modifiedData);

            case 8:
              dispatch({
                type: 'SUBMIT_SUCCEEDED'
              });
              toggleNotification({
                type: 'success',
                message: {
                  id: 'notification.form.success.fields'
                }
              });
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](5);
              console.error(_context2.t0);
              dispatch({
                type: 'ON_SUBMIT_ERROR'
              });

            case 16:
              unlockApp();

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 12]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(_ref3) {
    var _ref3$target = _ref3.target,
        name = _ref3$target.name,
        value = _ref3$target.value;
    dispatch({
      type: 'ON_CHANGE',
      keys: name,
      value: value
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
    title: formatMessage({
      id: (0, _utils.getTrad)('page.title'),
      defaultMessage: 'Settings - Media Libray'
    })
  }), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    title: formatMessage({
      id: (0, _utils.getTrad)('settings.header.label'),
      defaultMessage: 'Media Library'
    }),
    primaryAction: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      disabled: isSaveButtonDisabled,
      "data-testid": "save-button",
      loading: isSubmiting,
      type: "submit",
      startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
      size: "L"
    }, formatMessage({
      id: 'app.components.Button.save',
      defaultMessage: 'Save'
    })),
    subtitle: formatMessage({
      id: (0, _utils.getTrad)('settings.sub-header.label'),
      defaultMessage: 'Configure the settings for the Media Library'
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, isLoading ? /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null) : /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 12
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    background: "neutral0",
    padding: 6,
    shadow: "filterShadow",
    hasRadius: true
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "delta",
    as: "h2"
  }, formatMessage({
    id: (0, _utils.getTrad)('settings.blockTitle'),
    defaultMessage: 'Asset management'
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    gap: 6
  }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput, {
    "aria-label": "responsiveDimensions",
    "data-testid": "responsiveDimensions",
    checked: modifiedData.responsiveDimensions,
    hint: formatMessage({
      id: (0, _utils.getTrad)('settings.form.responsiveDimensions.description'),
      defaultMessage: 'Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset.'
    }),
    label: formatMessage({
      id: (0, _utils.getTrad)('settings.form.responsiveDimensions.label'),
      defaultMessage: 'Responsive friendly upload'
    }),
    name: "responsiveDimensions",
    offLabel: formatMessage({
      id: 'app.components.ToggleCheckbox.off-label',
      defaultMessage: 'Off'
    }),
    onLabel: formatMessage({
      id: 'app.components.ToggleCheckbox.on-label',
      defaultMessage: 'On'
    }),
    onChange: function onChange(e) {
      handleChange({
        target: {
          name: 'responsiveDimensions',
          value: e.target.checked
        }
      });
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput, {
    "aria-label": "sizeOptimization",
    "data-testid": "sizeOptimization",
    checked: modifiedData.sizeOptimization,
    hint: formatMessage({
      id: (0, _utils.getTrad)('settings.form.sizeOptimization.description'),
      defaultMessage: 'Enabling this option will reduce the image size and slightly reduce its quality.'
    }),
    label: formatMessage({
      id: (0, _utils.getTrad)('settings.form.sizeOptimization.label'),
      defaultMessage: 'Size optimization'
    }),
    name: "sizeOptimization",
    offLabel: formatMessage({
      id: 'app.components.ToggleCheckbox.off-label',
      defaultMessage: 'Off'
    }),
    onLabel: formatMessage({
      id: 'app.components.ToggleCheckbox.on-label',
      defaultMessage: 'On'
    }),
    onChange: function onChange(e) {
      handleChange({
        target: {
          name: 'sizeOptimization',
          value: e.target.checked
        }
      });
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput, {
    "aria-label": "autoOrientation",
    "data-testid": "autoOrientation",
    checked: modifiedData.autoOrientation,
    hint: formatMessage({
      id: (0, _utils.getTrad)('settings.form.autoOrientation.description'),
      defaultMessage: 'Enabling this option will automatically rotate the image according to EXIF orientation tag.'
    }),
    label: formatMessage({
      id: (0, _utils.getTrad)('settings.form.autoOrientation.label'),
      defaultMessage: 'Auto orientation'
    }),
    name: "autoOrientation",
    offLabel: formatMessage({
      id: 'app.components.ToggleCheckbox.off-label',
      defaultMessage: 'Off'
    }),
    onLabel: formatMessage({
      id: 'app.components.ToggleCheckbox.on-label',
      defaultMessage: 'On'
    }),
    onChange: function onChange(e) {
      handleChange({
        target: {
          name: 'autoOrientation',
          value: e.target.checked
        }
      });
    }
  }))))))))));
};

exports.SettingsPage = SettingsPage;

var ProtectedSettingsPage = function ProtectedSettingsPage() {
  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions, {
    permissions: _permissions["default"].settings
  }, /*#__PURE__*/_react["default"].createElement(SettingsPage, null));
};

var _default = ProtectedSettingsPage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/init.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/init.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var init = function init(initialState) {
  return initialState;
};

var _default = init;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/reducer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/reducer.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js"));

var initialState = {
  isLoading: true,
  isSubmiting: false,
  initialData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  },
  modifiedData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  }
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  return (// eslint-disable-next-line consistent-return
    (0, _immer["default"])(state, function (drafState) {
      switch (action.type) {
        case 'CANCEL_CHANGES':
          {
            drafState.modifiedData = state.initialData;
            break;
          }

        case 'GET_DATA_SUCCEEDED':
          {
            drafState.isLoading = false;
            drafState.initialData = action.data;
            drafState.modifiedData = action.data;
            break;
          }

        case 'ON_CHANGE':
          {
            (0, _set["default"])(drafState, ['modifiedData'].concat((0, _toConsumableArray2["default"])(action.keys.split('.'))), action.value);
            break;
          }

        case 'ON_SUBMIT':
          {
            drafState.isSubmiting = true;
            break;
          }

        case 'SUBMIT_SUCCEEDED':
          {
            drafState.initialData = state.modifiedData;
            drafState.isSubmiting = false;
            break;
          }

        case 'ON_SUBMIT_ERROR':
          {
            drafState.isSubmiting = false;
            break;
          }

        default:
          return state;
      }
    })
  );
};

var _default = reducer;
exports["default"] = _default;

/***/ })

}]);