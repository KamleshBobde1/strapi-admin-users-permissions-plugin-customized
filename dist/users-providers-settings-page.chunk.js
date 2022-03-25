"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["users-providers-settings-page"],{

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/Input/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/Input/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _ToggleInput = __webpack_require__(/*! @strapi/design-system/ToggleInput */ "./node_modules/@strapi/design-system/ToggleInput.js");

var _TextInput = __webpack_require__(/*! @strapi/design-system/TextInput */ "./node_modules/@strapi/design-system/TextInput.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Input = function Input(_ref) {
  var description = _ref.description,
      disabled = _ref.disabled,
      intlLabel = _ref.intlLabel,
      error = _ref.error,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      providerToEditName = _ref.providerToEditName,
      type = _ref.type,
      value = _ref.value;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var inputValue = name === 'noName' ? "".concat(strapi.backendURL, "/api/connect/").concat(providerToEditName, "/callback") : value;
  var label = formatMessage({
    id: intlLabel.id,
    defaultMessage: intlLabel.defaultMessage
  }, _objectSpread({
    provider: providerToEditName
  }, intlLabel.values));
  var hint = description ? formatMessage({
    id: description.id,
    defaultMessage: description.defaultMessage
  }, _objectSpread({
    provider: providerToEditName
  }, description.values)) : '';

  if (type === 'bool') {
    return /*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput, {
      "aria-label": name,
      checked: value,
      disabled: disabled,
      hint: hint,
      label: label,
      name: name,
      offLabel: formatMessage({
        id: 'app.components.ToggleCheckbox.off-label',
        defaultMessage: 'Off'
      }),
      onLabel: formatMessage({
        id: 'app.components.ToggleCheckbox.on-label',
        defaultMessage: 'On'
      }),
      onChange: function onChange(e) {
        _onChange({
          target: {
            name: name,
            value: e.target.checked
          }
        });
      }
    });
  }

  var formattedPlaceholder = placeholder ? formatMessage({
    id: placeholder.id,
    defaultMessage: placeholder.defaultMessage
  }, _objectSpread({}, placeholder.values)) : '';
  var errorMessage = error ? formatMessage({
    id: error,
    defaultMessage: error
  }) : '';
  return /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    "aria-label": name,
    disabled: disabled,
    error: errorMessage,
    label: label,
    name: name,
    onChange: _onChange,
    placeholder: formattedPlaceholder,
    type: type,
    value: inputValue
  });
};

Input.defaultProps = {
  description: null,
  disabled: false,
  error: '',
  placeholder: null,
  value: ''
};
Input.propTypes = {
  description: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    defaultMessage: _propTypes["default"].string.isRequired,
    values: _propTypes["default"].object
  }),
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].string,
  intlLabel: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    defaultMessage: _propTypes["default"].string.isRequired,
    values: _propTypes["default"].object
  }).isRequired,
  name: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  placeholder: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    defaultMessage: _propTypes["default"].string.isRequired,
    values: _propTypes["default"].object
  }),
  providerToEditName: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string])
};
var _default = Input;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Breadcrumbs = __webpack_require__(/*! @strapi/design-system/Breadcrumbs */ "./node_modules/@strapi/design-system/Breadcrumbs.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _ModalLayout = __webpack_require__(/*! @strapi/design-system/ModalLayout */ "./node_modules/@strapi/design-system/ModalLayout.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/Input/index.js"));

/**
 *
 * FormModal
 *
 */
var FormModal = function FormModal(_ref) {
  var headerBreadcrumbs = _ref.headerBreadcrumbs,
      initialData = _ref.initialData,
      isSubmiting = _ref.isSubmiting,
      layout = _ref.layout,
      isOpen = _ref.isOpen,
      _onSubmit = _ref.onSubmit,
      onToggle = _ref.onToggle,
      providerToEditName = _ref.providerToEditName;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalLayout, {
    onClose: onToggle,
    labelledBy: "title"
  }, /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalHeader, null, /*#__PURE__*/_react["default"].createElement(_Breadcrumbs.Breadcrumbs, {
    label: headerBreadcrumbs.join(', ')
  }, headerBreadcrumbs.map(function (crumb) {
    return /*#__PURE__*/_react["default"].createElement(_Breadcrumbs.Crumb, {
      key: crumb
    }, crumb);
  }))), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    onSubmit: function onSubmit(values) {
      return _onSubmit(values);
    },
    initialValues: initialData,
    validationSchema: layout.schema,
    validateOnChange: false
  }, function (_ref2) {
    var errors = _ref2.errors,
        handleChange = _ref2.handleChange,
        values = _ref2.values;
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.Form, null, /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
      spacing: 1
    }, /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
      gap: 5
    }, layout.form.map(function (row) {
      return row.map(function (input) {
        return /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
          key: input.name,
          col: input.size,
          xs: 12
        }, /*#__PURE__*/_react["default"].createElement(_Input["default"], (0, _extends2["default"])({}, input, {
          error: errors[input.name],
          onChange: handleChange,
          value: values[input.name],
          providerToEditName: providerToEditName
        })));
      });
    })))), /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalFooter, {
      startActions: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        variant: "tertiary",
        onClick: onToggle,
        type: "button"
      }, formatMessage({
        id: 'app.components.Button.cancel',
        defaultMessage: 'Cancel'
      })),
      endActions: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        type: "submit",
        loading: isSubmiting
      }, formatMessage({
        id: 'app.components.Button.save',
        defaultMessage: 'Save'
      })))
    }));
  }));
};

FormModal.defaultProps = {
  initialData: null,
  providerToEditName: null
};
FormModal.propTypes = {
  headerBreadcrumbs: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  initialData: _propTypes["default"].object,
  layout: _propTypes["default"].shape({
    form: _propTypes["default"].arrayOf(_propTypes["default"].array),
    schema: _propTypes["default"].object
  }).isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  isSubmiting: _propTypes["default"].bool.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  onToggle: _propTypes["default"].func.isRequired,
  providerToEditName: _propTypes["default"].string
};
var _default = FormModal;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ProvidersPage = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _has = _interopRequireDefault(__webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js"));

var _upperFirst = _interopRequireDefault(__webpack_require__(/*! lodash/upperFirst */ "./node_modules/lodash/upperFirst.js"));

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _Table = __webpack_require__(/*! @strapi/design-system/Table */ "./node_modules/@strapi/design-system/Table.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _VisuallyHidden = __webpack_require__(/*! @strapi/design-system/VisuallyHidden */ "./node_modules/@strapi/design-system/VisuallyHidden.js");

var _IconButton = __webpack_require__(/*! @strapi/design-system/IconButton */ "./node_modules/@strapi/design-system/IconButton.js");

var _Pencil = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Pencil */ "./node_modules/@strapi/icons/Pencil.js"));

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _forms = _interopRequireDefault(__webpack_require__(/*! ./utils/forms */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/forms.js"));

var _api = __webpack_require__(/*! ./utils/api */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/api.js");

var _createProvidersArray = _interopRequireDefault(__webpack_require__(/*! ./utils/createProvidersArray */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/createProvidersArray.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js"));

var _FormModal = _interopRequireDefault(__webpack_require__(/*! ../../components/FormModal */ "./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ProvidersPage = function ProvidersPage() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  (0, _helperPlugin.useFocusWhenNavigate)();

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  var queryClient = (0, _reactQuery.useQueryClient)();

  var _useTracking = (0, _helperPlugin.useTracking)(),
      trackUsage = _useTracking.trackUsage;

  var trackUsageRef = (0, _react.useRef)(trackUsage);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isSubmiting = _useState4[0],
      setIsSubmiting = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      providerToEditName = _useState6[0],
      setProviderToEditName = _useState6[1];

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useOverlayBlocker = (0, _helperPlugin.useOverlayBlocker)(),
      lockApp = _useOverlayBlocker.lockApp,
      unlockApp = _useOverlayBlocker.unlockApp;

  var updatePermissions = (0, _react.useMemo)(function () {
    return {
      update: _permissions["default"].updateProviders
    };
  }, []);

  var _useRBAC = (0, _helperPlugin.useRBAC)(updatePermissions),
      isLoadingForPermissions = _useRBAC.isLoading,
      canUpdate = _useRBAC.allowedActions.canUpdate;

  var _useQuery = (0, _reactQuery.useQuery)('get-providers', function () {
    return (0, _api.fetchData)(toggleNotification);
  }, {
    onSuccess: function onSuccess() {
      notifyStatus(formatMessage({
        id: (0, _utils.getTrad)('Providers.data.loaded'),
        defaultMessage: 'Providers have been loaded'
      }));
    },
    initialData: {}
  }),
      isLoadingForData = _useQuery.isLoading,
      modifiedData = _useQuery.data,
      isFetching = _useQuery.isFetching;

  var isLoading = isLoadingForData || isFetching;
  var submitMutation = (0, _reactQuery.useMutation)(_api.putProvider, {
    onSuccess: function () {
      var _onSuccess = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryClient.invalidateQueries('get-providers');

              case 2:
                toggleNotification({
                  type: 'info',
                  message: {
                    id: (0, _utils.getTrad)('notification.success.submit')
                  }
                });
                trackUsageRef.current('didEditAuthenticationProvider');
                setIsSubmiting(false);
                handleToggleModal();
                unlockApp();

              case 7:
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
          id: 'notification.error'
        }
      });
      unlockApp();
      setIsSubmiting(false);
    },
    refetchActive: false
  });
  var providers = (0, _react.useMemo)(function () {
    return (0, _createProvidersArray["default"])(modifiedData);
  }, [modifiedData]);
  var rowCount = providers.length;
  var isProviderWithSubdomain = (0, _react.useMemo)(function () {
    if (!providerToEditName) {
      return false;
    }

    var providerToEdit = providers.find(function (obj) {
      return obj.name === providerToEditName;
    });
    return (0, _has["default"])(providerToEdit, 'subdomain');
  }, [providers, providerToEditName]);
  var pageTitle = formatMessage({
    id: (0, _utils.getTrad)('HeaderNav.link.providers'),
    defaultMessage: 'Providers'
  });
  var layoutToRender = (0, _react.useMemo)(function () {
    if (providerToEditName === 'email') {
      return _forms["default"].email;
    }

    if (isProviderWithSubdomain) {
      return _forms["default"].providersWithSubdomain;
    }

    return _forms["default"].providers;
  }, [providerToEditName, isProviderWithSubdomain]);

  var handleToggleModal = function handleToggleModal() {
    setIsOpen(function (prev) {
      return !prev;
    });
  };

  var handleClickEdit = function handleClickEdit(provider) {
    if (canUpdate) {
      setProviderToEditName(provider.name);
      handleToggleModal();
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(values) {
      var body;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsSubmiting(true);
              lockApp();
              trackUsageRef.current('willEditAuthenticationProvider');
              body = _objectSpread(_objectSpread({}, modifiedData), {}, (0, _defineProperty2["default"])({}, providerToEditName, values));
              submitMutation.mutate({
                providers: body
              });

            case 5:
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

  return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle, {
    name: pageTitle
  }), /*#__PURE__*/_react["default"].createElement(_Main.Main, null, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    title: formatMessage({
      id: (0, _utils.getTrad)('HeaderNav.link.providers'),
      defaultMessage: 'Providers'
    })
  }), isLoading || isLoadingForPermissions ? /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null) : /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_Table.Table, {
    colCount: 4,
    rowCount: rowCount + 1
  }, /*#__PURE__*/_react["default"].createElement(_Table.Thead, null, /*#__PURE__*/_react["default"].createElement(_Table.Tr, null, /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, /*#__PURE__*/_react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, formatMessage({
    id: (0, _utils.getTrad)('Providers.image'),
    defaultMessage: 'Image'
  })))), /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: (0, _utils.getTrad)('Providers.name'),
    defaultMessage: 'Name'
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: (0, _utils.getTrad)('Providers.status'),
    defaultMessage: 'Status'
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma"
  }, /*#__PURE__*/_react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, formatMessage({
    id: (0, _utils.getTrad)('Providers.settings'),
    defaultMessage: 'Settings'
  })))))), /*#__PURE__*/_react["default"].createElement(_Table.Tbody, null, providers.map(function (provider) {
    return /*#__PURE__*/_react["default"].createElement(_Table.Tr, (0, _extends2["default"])({
      key: provider.name
    }, (0, _helperPlugin.onRowClick)({
      fn: function fn() {
        return handleClickEdit(provider);
      },
      condition: canUpdate
    })), /*#__PURE__*/_react["default"].createElement(_Table.Td, {
      width: ""
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: provider.icon
    })), /*#__PURE__*/_react["default"].createElement(_Table.Td, {
      width: "45%"
    }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      fontWeight: "semiBold",
      textColor: "neutral800"
    }, provider.name)), /*#__PURE__*/_react["default"].createElement(_Table.Td, {
      width: "65%"
    }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      textColor: provider.enabled ? 'success600' : 'danger600',
      "data-testid": "enable-".concat(provider.name)
    }, provider.enabled ? formatMessage({
      id: (0, _utils.getTrad)('Providers.enabled'),
      defaultMessage: 'Enabled'
    }) : formatMessage({
      id: (0, _utils.getTrad)('Providers.disabled'),
      defaultMessage: 'Disabled'
    }))), /*#__PURE__*/_react["default"].createElement(_Table.Td, _helperPlugin.stopPropagation, canUpdate && /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
      onClick: function onClick() {
        return handleClickEdit(provider);
      },
      noBorder: true,
      icon: /*#__PURE__*/_react["default"].createElement(_Pencil["default"], null),
      label: "Edit"
    })));
  }))))), /*#__PURE__*/_react["default"].createElement(_FormModal["default"], {
    initialData: modifiedData[providerToEditName],
    isOpen: isOpen,
    isSubmiting: isSubmiting,
    layout: layoutToRender,
    headerBreadcrumbs: [formatMessage({
      id: (0, _utils.getTrad)('PopUpForm.header.edit.providers'),
      defaultMessage: 'Edit Provider'
    }), (0, _upperFirst["default"])(providerToEditName)],
    onToggle: handleToggleModal,
    onSubmit: handleSubmit,
    providerToEditName: providerToEditName
  }));
};

exports.ProvidersPage = ProvidersPage;

var ProtectedProvidersPage = function ProtectedProvidersPage() {
  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions, {
    permissions: _permissions["default"].readProviders
  }, /*#__PURE__*/_react["default"].createElement(ProvidersPage, null));
};

var _default = ProtectedProvidersPage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/api.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/api.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.putProvider = exports.fetchData = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _utils = __webpack_require__(/*! ../../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

// eslint-disable-next-line import/prefer-default-export
var fetchData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(toggleNotification) {
    var _yield$axiosInstance$, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _utils.axiosInstance.get((0, _utils.getRequestURL)('providers'));

          case 3:
            _yield$axiosInstance$ = _context.sent;
            data = _yield$axiosInstance$.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            toggleNotification({
              type: 'warning',
              message: {
                id: 'notification.error'
              }
            });
            throw new Error('error');

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function fetchData(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchData = fetchData;

var putProvider = function putProvider(body) {
  return _utils.axiosInstance.put((0, _utils.getRequestURL)('providers'), body);
};

exports.putProvider = putProvider;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/createProvidersArray.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/createProvidersArray.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

var createProvidersArray = function createProvidersArray(data) {
  return (0, _lodash.sortBy)(Object.keys(data).reduce(function (acc, current) {
    var _data$current = data[current],
        iconName = _data$current.icon,
        enabled = _data$current.enabled,
        subdomain = _data$current.subdomain;
    var icon = iconName === 'envelope' ? ['fas', 'envelope'] : ['fab', iconName];

    if (subdomain !== undefined) {
      acc.push({
        name: current,
        icon: icon,
        enabled: enabled,
        subdomain: subdomain
      });
    } else {
      acc.push({
        name: current,
        icon: icon,
        enabled: enabled
      });
    }

    return acc;
  }, []), 'name');
};

var _default = createProvidersArray;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/forms.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/forms.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var yup = _interopRequireWildcard(__webpack_require__(/*! yup */ "./src/admin/node_modules/yup/lib/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _utils = __webpack_require__(/*! ../../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var callbackLabel = {
  id: (0, _utils.getTrad)('PopUpForm.Providers.redirectURL.front-end.label'),
  defaultMessage: 'The redirect URL to your front-end app'
};
var callbackPlaceholder = {
  id: 'http://www.client-app.com',
  defaultMessage: 'http://www.client-app.com'
};
var enabledDescription = {
  id: (0, _utils.getTrad)('PopUpForm.Providers.enabled.description'),
  defaultMessage: "If disabled, users won't be able to use this provider."
};
var enabledLabel = {
  id: (0, _utils.getTrad)('PopUpForm.Providers.enabled.label'),
  defaultMessage: 'Enable'
};
var keyLabel = {
  id: (0, _utils.getTrad)('PopUpForm.Providers.key.label'),
  defaultMessage: 'Client ID'
};
var hintLabel = {
  id: (0, _utils.getTrad)('PopUpForm.Providers.redirectURL.label'),
  defaultMessage: 'The redirect URL to add in your {provider} application configurations'
};
var textPlaceholder = {
  id: (0, _utils.getTrad)('PopUpForm.Providers.key.placeholder'),
  defaultMessage: 'TEXT'
};
var secretLabel = {
  id: (0, _utils.getTrad)('PopUpForm.Providers.secret.label'),
  defaultMessage: 'Client Secret'
};
var forms = {
  email: {
    form: [[{
      intlLabel: enabledLabel,
      name: 'enabled',
      type: 'bool',
      description: enabledDescription,
      size: 6 // TODO check if still needed
      // validations: {
      //   required: true,
      // },

    }]],
    schema: yup.object().shape({
      enabled: yup.bool().required(_helperPlugin.translatedErrors.required)
    })
  },
  providers: {
    form: [[{
      intlLabel: enabledLabel,
      name: 'enabled',
      type: 'bool',
      description: enabledDescription,
      size: 6,
      validations: {
        required: true
      }
    }], [{
      intlLabel: keyLabel,
      name: 'key',
      type: 'text',
      placeholder: textPlaceholder,
      size: 12,
      validations: {
        required: true
      }
    }], [{
      intlLabel: secretLabel,
      name: 'secret',
      type: 'text',
      placeholder: textPlaceholder,
      size: 12,
      validations: {
        required: true
      }
    }], [{
      intlLabel: callbackLabel,
      placeholder: callbackPlaceholder,
      name: 'callback',
      type: 'text',
      size: 12,
      validations: {
        required: true
      }
    }], [{
      intlLabel: hintLabel,
      name: 'noName',
      type: 'text',
      validations: {},
      size: 12,
      disabled: true
    }]],
    schema: yup.object().shape({
      enabled: yup.bool().required(_helperPlugin.translatedErrors.required),
      key: yup.string().when('enabled', {
        is: true,
        then: yup.string().required(_helperPlugin.translatedErrors.required),
        otherwise: yup.string()
      }),
      secret: yup.string().when('enabled', {
        is: true,
        then: yup.string().required(_helperPlugin.translatedErrors.required),
        otherwise: yup.string()
      }),
      callback: yup.string().when('enabled', {
        is: true,
        then: yup.string().required(_helperPlugin.translatedErrors.required),
        otherwise: yup.string()
      })
    })
  },
  providersWithSubdomain: {
    form: [[{
      intlLabel: enabledLabel,
      name: 'enabled',
      type: 'bool',
      description: enabledDescription,
      size: 6,
      validations: {
        required: true
      }
    }], [{
      intlLabel: keyLabel,
      name: 'key',
      type: 'text',
      placeholder: textPlaceholder,
      size: 12,
      validations: {
        required: true
      }
    }], [{
      intlLabel: secretLabel,
      name: 'secret',
      type: 'text',
      placeholder: textPlaceholder,
      size: 12,
      validations: {
        required: true
      }
    }], [{
      intlLabel: {
        id: (0, _utils.getTrad)('PopUpForm.Providers.subdomain.label'),
        defaultMessage: 'Host URI (Subdomain)'
      },
      name: 'subdomain',
      type: 'text',
      placeholder: {
        id: (0, _utils.getTrad)('PopUpForm.Providers.subdomain.placeholder'),
        defaultMessage: 'my.subdomain.com'
      },
      size: 12,
      validations: {
        required: true
      }
    }], [{
      intlLabel: callbackLabel,
      placeholder: callbackPlaceholder,
      name: 'callback',
      type: 'text',
      size: 12,
      validations: {
        required: true
      }
    }], [{
      intlLabel: hintLabel,
      name: 'noName',
      type: 'text',
      validations: {},
      size: 12,
      disabled: true
    }]],
    schema: yup.object().shape({
      enabled: yup.bool().required(_helperPlugin.translatedErrors.required),
      key: yup.string().when('enabled', {
        is: true,
        then: yup.string().required(_helperPlugin.translatedErrors.required),
        otherwise: yup.string()
      }),
      secret: yup.string().when('enabled', {
        is: true,
        then: yup.string().required(_helperPlugin.translatedErrors.required),
        otherwise: yup.string()
      }),
      subdomain: yup.string().when('enabled', {
        is: true,
        then: yup.string().required(_helperPlugin.translatedErrors.required),
        otherwise: yup.string()
      }),
      callback: yup.string().when('enabled', {
        is: true,
        then: yup.string().required(_helperPlugin.translatedErrors.required),
        otherwise: yup.string()
      })
    })
  }
};
var _default = forms;
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