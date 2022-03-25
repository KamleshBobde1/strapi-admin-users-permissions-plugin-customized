"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["i18n-settings-page"],{

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _IconButton = __webpack_require__(/*! @strapi/design-system/IconButton */ "./node_modules/@strapi/design-system/IconButton.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _VisuallyHidden = __webpack_require__(/*! @strapi/design-system/VisuallyHidden */ "./node_modules/@strapi/design-system/VisuallyHidden.js");

var _Table = __webpack_require__(/*! @strapi/design-system/Table */ "./node_modules/@strapi/design-system/Table.js");

var _Pencil = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Pencil */ "./node_modules/@strapi/icons/Pencil.js"));

var _Trash = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Trash */ "./node_modules/@strapi/icons/Trash.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var LocaleTable = function LocaleTable(_ref) {
  var locales = _ref.locales,
      onDeleteLocale = _ref.onDeleteLocale,
      onEditLocale = _ref.onEditLocale;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Table.Table, {
    colCount: 4,
    rowCount: locales.length + 1
  }, /*#__PURE__*/_react["default"].createElement(_Table.Thead, null, /*#__PURE__*/_react["default"].createElement(_Table.Tr, null, /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.row.id')
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.row.displayName')
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.row.default-locale')
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, "Actions")))), /*#__PURE__*/_react["default"].createElement(_Table.Tbody, null, locales.map(function (locale) {
    return /*#__PURE__*/_react["default"].createElement(_Table.Tr, (0, _extends2["default"])({
      key: locale.id
    }, (0, _helperPlugin.onRowClick)({
      fn: function fn() {
        return onEditLocale(locale);
      },
      condition: onEditLocale
    })), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      textColor: "neutral800"
    }, locale.id)), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      textColor: "neutral800"
    }, locale.name)), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      textColor: "neutral800"
    }, locale.isDefault ? formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.default')
    }) : null)), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, (0, _extends2["default"])({
      horizontal: true,
      spacing: 1,
      style: {
        justifyContent: 'flex-end'
      }
    }, _helperPlugin.stopPropagation), onEditLocale && /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
      onClick: function onClick() {
        return onEditLocale(locale);
      },
      label: formatMessage({
        id: (0, _utils.getTrad)('Settings.list.actions.edit')
      }),
      icon: /*#__PURE__*/_react["default"].createElement(_Pencil["default"], null),
      noBorder: true
    }), onDeleteLocale && !locale.isDefault && /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
      onClick: function onClick() {
        return onDeleteLocale(locale);
      },
      label: formatMessage({
        id: (0, _utils.getTrad)('Settings.list.actions.delete')
      }),
      icon: /*#__PURE__*/_react["default"].createElement(_Trash["default"], null),
      noBorder: true
    }))));
  })));
};

LocaleTable.defaultProps = {
  locales: [],
  onDeleteLocale: undefined,
  onEditLocale: undefined
};
LocaleTable.propTypes = {
  locales: _propTypes["default"].array,
  onDeleteLocale: _propTypes["default"].func,
  onEditLocale: _propTypes["default"].func
};
var _default = LocaleTable;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Plus = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Plus */ "./node_modules/@strapi/icons/Plus.js"));

var _EmptyDocuments = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/EmptyDocuments */ "./node_modules/@strapi/icons/EmptyDocuments.js"));

var _useLocales2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useLocales */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useLocales/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var _ModalEdit = _interopRequireDefault(__webpack_require__(/*! ../ModalEdit */ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js"));

var _ModalDelete = _interopRequireDefault(__webpack_require__(/*! ../ModalDelete */ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js"));

var _ModalCreate = _interopRequireDefault(__webpack_require__(/*! ../ModalCreate */ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js"));

var _LocaleTable = _interopRequireDefault(__webpack_require__(/*! ./LocaleTable */ "./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LocaleList = function LocaleList(_ref) {
  var canUpdateLocale = _ref.canUpdateLocale,
      canDeleteLocale = _ref.canDeleteLocale,
      onToggleCreateModal = _ref.onToggleCreateModal,
      isCreating = _ref.isCreating;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      localeToDelete = _useState2[0],
      setLocaleToDelete = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      localeToEdit = _useState4[0],
      setLocaleToEdit = _useState4[1];

  var _useLocales = (0, _useLocales2["default"])(),
      locales = _useLocales.locales;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  (0, _helperPlugin.useFocusWhenNavigate)(); // Delete actions

  var closeModalToDelete = function closeModalToDelete() {
    return setLocaleToDelete(undefined);
  };

  var handleDeleteLocale = canDeleteLocale ? setLocaleToDelete : undefined; // Edit actions

  var closeModalToEdit = function closeModalToEdit() {
    return setLocaleToEdit(undefined);
  };

  var handleEditLocale = canUpdateLocale ? setLocaleToEdit : undefined;
  return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    primaryAction: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      startIcon: /*#__PURE__*/_react["default"].createElement(_Plus["default"], null),
      onClick: onToggleCreateModal,
      size: "L"
    }, formatMessage({
      id: (0, _utils.getTrad)('Settings.list.actions.add')
    })),
    title: formatMessage({
      id: (0, _utils.getTrad)('plugin.name')
    }),
    subtitle: formatMessage({
      id: (0, _utils.getTrad)('Settings.list.description')
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, (locales === null || locales === void 0 ? void 0 : locales.length) > 0 ? /*#__PURE__*/_react["default"].createElement(_LocaleTable["default"], {
    locales: locales,
    onDeleteLocale: handleDeleteLocale,
    onEditLocale: handleEditLocale
  }) : /*#__PURE__*/_react["default"].createElement(_Layout.EmptyStateLayout, {
    icon: /*#__PURE__*/_react["default"].createElement(_EmptyDocuments["default"], {
      width: undefined,
      height: undefined
    }),
    content: formatMessage({
      id: (0, _utils.getTrad)('Settings.list.empty.title')
    }),
    action: onToggleCreateModal ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      variant: "secondary",
      startIcon: /*#__PURE__*/_react["default"].createElement(_Plus["default"], null),
      onClick: onToggleCreateModal
    }, formatMessage({
      id: (0, _utils.getTrad)('Settings.list.actions.add')
    })) : null
  })), isCreating && /*#__PURE__*/_react["default"].createElement(_ModalCreate["default"], {
    onClose: onToggleCreateModal
  }), localeToEdit && /*#__PURE__*/_react["default"].createElement(_ModalEdit["default"], {
    onClose: closeModalToEdit,
    locale: localeToEdit
  }), /*#__PURE__*/_react["default"].createElement(_ModalDelete["default"], {
    localeToDelete: localeToDelete,
    onClose: closeModalToDelete
  }));
};

LocaleList.defaultProps = {
  onToggleCreateModal: undefined
};
LocaleList.propTypes = {
  canUpdateLocale: _propTypes["default"].bool.isRequired,
  canDeleteLocale: _propTypes["default"].bool.isRequired,
  onToggleCreateModal: _propTypes["default"].func,
  isCreating: _propTypes["default"].bool.isRequired
};
var _default = LocaleList;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _Combobox = __webpack_require__(/*! @strapi/design-system/Combobox */ "./node_modules/@strapi/design-system/Combobox.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _useLocales2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useLocales */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useLocales/index.js"));

var _useDefaultLocales2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useDefaultLocales */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

/* eslint-disable react/jsx-indent */

/**
 * The component is memoized and needs a useCallback over the onLocaleChange and
 * onClear props to prevent the Select from re-rendering N times when typing on a specific
 * key in a formik form
 */
var LocaleSelect = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var value = _ref.value,
      onClear = _ref.onClear,
      onLocaleChange = _ref.onLocaleChange,
      error = _ref.error;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useDefaultLocales = (0, _useDefaultLocales2["default"])(),
      defaultLocales = _useDefaultLocales.defaultLocales,
      isLoading = _useDefaultLocales.isLoading;

  var _useLocales = (0, _useLocales2["default"])(),
      locales = _useLocales.locales;

  var options = (defaultLocales || []).map(function (locale) {
    return {
      label: locale.name,
      value: locale.code
    };
  }).filter(function (_ref2) {
    var v = _ref2.value;
    var foundLocale = locales.find(function (_ref3) {
      var code = _ref3.code;
      return code === v;
    });
    return !foundLocale || foundLocale.code === value;
  });
  var computedValue = value || '';
  return /*#__PURE__*/_react["default"].createElement(_Combobox.Combobox, {
    "aria-busy": isLoading,
    error: error,
    label: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.locales.label'),
      defaultMessage: 'Locales'
    }),
    value: computedValue,
    onClear: value ? onClear : undefined,
    onChange: function onChange(selectedLocaleKey) {
      var selectedLocale = options.find(function (locale) {
        return locale.value === selectedLocaleKey;
      });

      if (selectedLocale) {
        onLocaleChange({
          code: selectedLocale.value,
          displayName: selectedLocale.label
        });
      }
    },
    placeholder: formatMessage({
      id: 'components.placeholder.select',
      defaultMessage: 'Select'
    })
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_Combobox.ComboboxOption, {
      value: option.value,
      key: option.value
    }, option.label);
  }));
});

LocaleSelect.defaultProps = {
  error: undefined,
  value: undefined,
  onClear: function onClear() {},
  onLocaleChange: function onLocaleChange() {
    return undefined;
  }
};
LocaleSelect.propTypes = {
  error: _propTypes["default"].string,
  onClear: _propTypes["default"].func,
  onLocaleChange: _propTypes["default"].func,
  value: _propTypes["default"].string
};
var _default = LocaleSelect;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Checkbox = __webpack_require__(/*! @strapi/design-system/Checkbox */ "./node_modules/@strapi/design-system/Checkbox.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var AdvancedForm = function AdvancedForm() {
  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      setFieldValue = _useFormikContext.setFieldValue;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Checkbox.Checkbox, {
    hint: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.advanced.setAsDefault.hint'),
      defaultMessage: 'One default locale is required, change it by selecting another one'
    }),
    onChange: function onChange() {
      return setFieldValue('isDefault', !values.isDefault);
    },
    value: values.isDefault
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.modal.advanced.setAsDefault'),
    defaultMessage: 'Set as default locale'
  }));
};

var _default = AdvancedForm;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _TextInput = __webpack_require__(/*! @strapi/design-system/TextInput */ "./node_modules/@strapi/design-system/TextInput.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var _LocaleSelect = _interopRequireDefault(__webpack_require__(/*! ../LocaleSelect */ "./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BaseForm = function BaseForm() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      handleChange = _useFormikContext.handleChange,
      setFieldValue = _useFormikContext.setFieldValue,
      errors = _useFormikContext.errors;
  /**
   * This is needed because the LocaleSelect component is a memoized component
   * since it renders ~500 locales and that formik would trigger a re-render on it without
   * it
   */


  var handleLocaleChange = (0, _react.useCallback)(function (nextLocale) {
    setFieldValue('displayName', nextLocale.displayName);
    setFieldValue('code', nextLocale.code);
  }, [setFieldValue]);
  /**
   * This is needed because the LocaleSelect component is a memoized component
   * since it renders ~500 locales and that formik would trigger a re-render on it without
   * it
   */

  var handleClear = (0, _react.useCallback)(function () {
    setFieldValue('displayName', '');
    setFieldValue('code', '');
  }, [setFieldValue]);
  return /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    gap: 4
  }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6
  }, /*#__PURE__*/_react["default"].createElement(_LocaleSelect["default"], {
    error: errors.code,
    value: values.code,
    onLocaleChange: handleLocaleChange,
    onClear: handleClear
  })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6
  }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    name: "displayName",
    label: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.locales.displayName'),
      defaultMessage: 'Locale display name'
    }),
    hint: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.locales.displayName.description'),
      defaultMessage: 'Locale will be displayed under that name in the administration panel'
    }),
    error: errors.displayName ? formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.locales.displayName.error'),
      defaultMessage: 'The locale display name can only be less than 50 characters.'
    }) : undefined,
    value: values.displayName,
    onChange: handleChange
  })));
};

var _default = BaseForm;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _ModalLayout = __webpack_require__(/*! @strapi/design-system/ModalLayout */ "./node_modules/@strapi/design-system/ModalLayout.js");

var _Tabs = __webpack_require__(/*! @strapi/design-system/Tabs */ "./node_modules/@strapi/design-system/Tabs.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Divider = __webpack_require__(/*! @strapi/design-system/Divider */ "./node_modules/@strapi/design-system/Divider.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Check = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Check */ "./node_modules/@strapi/icons/Check.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _schemas = _interopRequireDefault(__webpack_require__(/*! ../../schemas */ "./node_modules/@strapi/plugin-i18n/admin/src/schemas.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var _useAddLocale2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useAddLocale */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js"));

var _BaseForm = _interopRequireDefault(__webpack_require__(/*! ./BaseForm */ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js"));

var _AdvancedForm = _interopRequireDefault(__webpack_require__(/*! ./AdvancedForm */ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js"));

var initialFormValues = {
  code: '',
  displayName: '',
  isDefault: false
};

var ModalCreate = function ModalCreate(_ref) {
  var onClose = _ref.onClose;

  var _useAddLocale = (0, _useAddLocale2["default"])(),
      isAdding = _useAddLocale.isAdding,
      addLocale = _useAddLocale.addLocale;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useRBACProvider = (0, _helperPlugin.useRBACProvider)(),
      refetchPermissions = _useRBACProvider.refetchPermissions;
  /**
   * No need to explicitly call the onClose prop here
   * since the all tree (from the root of the page) is destroyed and re-mounted
   * because of the RBAC refreshing and the potential move of the default locale
   */


  var handleLocaleAdd = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(values) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return addLocale({
                code: values.code,
                name: values.displayName,
                isDefault: values.isDefault
              });

            case 2:
              _context.next = 4;
              return refetchPermissions();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLocaleAdd(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalLayout, {
    onClose: onClose,
    labelledBy: "add-locale-title"
  }, /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    initialValues: initialFormValues,
    onSubmit: handleLocaleAdd,
    validationSchema: _schemas["default"],
    validateOnChange: false
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.Form, null, /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalHeader, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "add-locale-title"
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.list.actions.add'),
    defaultMessage: 'Add new locale'
  }))), /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Tabs.TabGroup, {
    label: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.title'),
      defaultMessage: 'Configurations'
    }),
    id: "tabs",
    variant: "simple"
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    as: "h2",
    variant: "beta"
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.modal.title'),
    defaultMessage: 'Configurations'
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, null, /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.modal.base'),
    defaultMessage: 'Base settings'
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.modal.advanced'),
    defaultMessage: 'Advanced settings'
  })))), /*#__PURE__*/_react["default"].createElement(_Divider.Divider, null), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 7,
    paddingBottom: 7
  }, /*#__PURE__*/_react["default"].createElement(_Tabs.TabPanels, null, /*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel, null, /*#__PURE__*/_react["default"].createElement(_BaseForm["default"], null)), /*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel, null, /*#__PURE__*/_react["default"].createElement(_AdvancedForm["default"], null)))))), /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalFooter, {
    startActions: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      variant: "tertiary",
      onClick: onClose
    }, formatMessage({
      id: 'app.components.Button.cancel',
      defaultMessage: 'Cancel'
    })),
    endActions: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
      disabled: isAdding
    }, formatMessage({
      id: 'app.components.Button.save',
      defaultMessage: 'Save'
    }))
  }))));
};

ModalCreate.propTypes = {
  onClose: _propTypes["default"].func.isRequired
};
var _default = ModalCreate;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _useDeleteLocale2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useDeleteLocale */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js"));

var ModalDelete = function ModalDelete(_ref) {
  var localeToDelete = _ref.localeToDelete,
      onClose = _ref.onClose;

  var _useDeleteLocale = (0, _useDeleteLocale2["default"])(),
      isDeleting = _useDeleteLocale.isDeleting,
      deleteLocale = _useDeleteLocale.deleteLocale;

  var isOpened = Boolean(localeToDelete);

  var handleDelete = function handleDelete() {
    return deleteLocale(localeToDelete.id).then(onClose);
  };

  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.ConfirmDialog, {
    isConfirmButtonLoading: isDeleting,
    onConfirm: handleDelete,
    onToggleDialog: onClose,
    isOpen: isOpened
  });
};

ModalDelete.defaultProps = {
  localeToDelete: undefined
};
ModalDelete.propTypes = {
  localeToDelete: _propTypes["default"].shape({
    id: _propTypes["default"].number.isRequired
  }),
  onClose: _propTypes["default"].func.isRequired
};
var _default = ModalDelete;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Checkbox = __webpack_require__(/*! @strapi/design-system/Checkbox */ "./node_modules/@strapi/design-system/Checkbox.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var AdvancedForm = function AdvancedForm(_ref) {
  var isDefaultLocale = _ref.isDefaultLocale;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      setFieldValue = _useFormikContext.setFieldValue;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Checkbox.Checkbox, {
    name: "isDefault",
    hint: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.advanced.setAsDefault.hint'),
      defaultMessage: 'One default locale is required, change it by selecting another one'
    }),
    onChange: function onChange() {
      return setFieldValue('isDefault', !values.isDefault);
    },
    value: values.isDefault,
    disabled: isDefaultLocale
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.modal.advanced.setAsDefault'),
    defaultMessage: 'Set as default locale'
  }));
};

AdvancedForm.propTypes = {
  isDefaultLocale: _propTypes["default"].bool.isRequired
};
var _default = AdvancedForm;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _TextInput = __webpack_require__(/*! @strapi/design-system/TextInput */ "./node_modules/@strapi/design-system/TextInput.js");

var _Select = __webpack_require__(/*! @strapi/design-system/Select */ "./node_modules/@strapi/design-system/Select.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var BaseForm = function BaseForm(_ref) {
  var locale = _ref.locale;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      handleChange = _useFormikContext.handleChange,
      errors = _useFormikContext.errors;

  return /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    gap: 4
  }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6
  }, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    label: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.locales.label'),
      defaultMessage: 'Locales'
    }),
    value: locale.code,
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement(_Select.Option, {
    value: locale.code
  }, locale.name))), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6
  }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    name: "displayName",
    label: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.locales.displayName'),
      defaultMessage: 'Locale display name'
    }),
    hint: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.locales.displayName.description'),
      defaultMessage: 'Locale will be displayed under that name in the administration panel'
    }),
    error: errors.displayName ? formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.locales.displayName.error'),
      defaultMessage: 'The locale display name can only be less than 50 characters.'
    }) : undefined,
    value: values.displayName,
    onChange: handleChange
  })));
};

var _default = BaseForm;
exports["default"] = _default;
BaseForm.propTypes = {
  locale: _propTypes["default"].shape({
    id: _propTypes["default"].number.isRequired,
    name: _propTypes["default"].string.isRequired,
    code: _propTypes["default"].string.isRequired,
    isDefault: _propTypes["default"].bool.isRequired
  }).isRequired
};

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _Check = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Check */ "./node_modules/@strapi/icons/Check.js"));

var _ModalLayout = __webpack_require__(/*! @strapi/design-system/ModalLayout */ "./node_modules/@strapi/design-system/ModalLayout.js");

var _Tabs = __webpack_require__(/*! @strapi/design-system/Tabs */ "./node_modules/@strapi/design-system/Tabs.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Divider = __webpack_require__(/*! @strapi/design-system/Divider */ "./node_modules/@strapi/design-system/Divider.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _schemas = _interopRequireDefault(__webpack_require__(/*! ../../schemas */ "./node_modules/@strapi/plugin-i18n/admin/src/schemas.js"));

var _useEditLocale2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useEditLocale */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var _BaseForm = _interopRequireDefault(__webpack_require__(/*! ./BaseForm */ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js"));

var _AdvancedForm = _interopRequireDefault(__webpack_require__(/*! ./AdvancedForm */ "./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js"));

var ModalEdit = function ModalEdit(_ref) {
  var locale = _ref.locale,
      onClose = _ref.onClose;

  var _useRBACProvider = (0, _helperPlugin.useRBACProvider)(),
      refetchPermissions = _useRBACProvider.refetchPermissions;

  var _useEditLocale = (0, _useEditLocale2["default"])(),
      isEditing = _useEditLocale.isEditing,
      editLocale = _useEditLocale.editLocale;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
      var displayName, isDefault;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              displayName = _ref2.displayName, isDefault = _ref2.isDefault;
              _context.next = 3;
              return editLocale(locale.id, {
                name: displayName,
                isDefault: isDefault
              });

            case 3:
              _context.next = 5;
              return refetchPermissions();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalLayout, {
    onClose: onClose,
    labelledBy: "edit-locale-title"
  }, /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    initialValues: {
      code: locale === null || locale === void 0 ? void 0 : locale.code,
      displayName: (locale === null || locale === void 0 ? void 0 : locale.name) || '',
      isDefault: Boolean(locale === null || locale === void 0 ? void 0 : locale.isDefault)
    },
    onSubmit: handleSubmit,
    validationSchema: _schemas["default"]
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.Form, null, /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalHeader, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "edit-locale-title"
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.list.actions.edit'),
    defaultMessage: 'Edit a locale'
  }))), /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Tabs.TabGroup, {
    label: formatMessage({
      id: (0, _utils.getTrad)('Settings.locales.modal.title'),
      defaultMessage: 'Configurations'
    }),
    id: "tabs",
    variant: "simple"
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    as: "h2"
  }, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.modal.title'),
    defaultMessage: 'Configurations'
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, null, /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.modal.base'),
    defaultMessage: 'Base settings'
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, formatMessage({
    id: (0, _utils.getTrad)('Settings.locales.modal.advanced'),
    defaultMessage: 'Advanced settings'
  })))), /*#__PURE__*/_react["default"].createElement(_Divider.Divider, null), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 7,
    paddingBottom: 7
  }, /*#__PURE__*/_react["default"].createElement(_Tabs.TabPanels, null, /*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel, null, /*#__PURE__*/_react["default"].createElement(_BaseForm["default"], {
    locale: locale
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel, null, /*#__PURE__*/_react["default"].createElement(_AdvancedForm["default"], {
    isDefaultLocale: Boolean(locale && locale.isDefault)
  })))))), /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalFooter, {
    startActions: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      variant: "tertiary",
      onClick: onClose
    }, formatMessage({
      id: 'app.components.Button.cancel'
    })),
    endActions: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      type: "submit",
      startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
      disabled: isEditing
    }, formatMessage({
      id: 'app.components.Button.save'
    }))
  }))));
};

ModalEdit.defaultProps = {
  locale: undefined
};
ModalEdit.propTypes = {
  locale: _propTypes["default"].shape({
    id: _propTypes["default"].number.isRequired,
    name: _propTypes["default"].string.isRequired,
    code: _propTypes["default"].string.isRequired,
    isDefault: _propTypes["default"].bool.isRequired
  }),
  onClose: _propTypes["default"].func.isRequired
};
var _default = ModalEdit;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./src/admin/node_modules/react-redux/lib/index.js");

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js");

var addLocale = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, toggleNotification) {
    var code, name, isDefault, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            code = _ref.code, name = _ref.name, isDefault = _ref.isDefault;
            _context.next = 3;
            return (0, _helperPlugin.request)("/i18n/locales", {
              method: 'POST',
              body: {
                name: name,
                code: code,
                isDefault: isDefault
              }
            });

          case 3:
            data = _context.sent;
            toggleNotification({
              type: 'success',
              message: {
                id: (0, _utils.getTrad)('Settings.locales.modal.create.success')
              }
            });
            return _context.abrupt("return", data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addLocale(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var useAddLocale = function useAddLocale() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var persistLocale = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(locale) {
      var newLocale, message;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              _context2.prev = 1;
              _context2.next = 4;
              return addLocale(locale, toggleNotification);

            case 4:
              newLocale = _context2.sent;
              dispatch({
                type: _constants.ADD_LOCALE,
                newLocale: newLocale
              });
              _context2.next = 13;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              message = (0, _get["default"])(_context2.t0, 'response.payload.message', null);

              if (message && message.includes('already exists')) {
                toggleNotification({
                  type: 'warning',
                  message: {
                    id: (0, _utils.getTrad)('Settings.locales.modal.create.alreadyExist')
                  }
                });
              } else {
                toggleNotification({
                  type: 'warning',
                  message: {
                    id: 'notification.error'
                  }
                });
              }

              throw _context2.t0;

            case 13:
              _context2.prev = 13;
              setLoading(false);
              return _context2.finish(13);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8, 13, 16]]);
    }));

    return function persistLocale(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    isAdding: isLoading,
    addLocale: persistLocale
  };
};

var _default = useAddLocale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var fetchDefaultLocalesList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(toggleNotification) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _helperPlugin.request)('/i18n/iso-locales', {
              method: 'GET'
            });

          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            toggleNotification({
              type: 'warning',
              message: {
                id: 'notification.error'
              }
            });
            return _context.abrupt("return", []);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function fetchDefaultLocalesList(_x) {
    return _ref.apply(this, arguments);
  };
}();

var useDefaultLocales = function useDefaultLocales() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useQuery = (0, _reactQuery.useQuery)('default-locales', function () {
    return fetchDefaultLocalesList(toggleNotification).then(function (data) {
      notifyStatus(formatMessage({
        id: (0, _utils.getTrad)('Settings.locales.modal.locales.loaded'),
        defaultMessage: 'The locales have been successfully loaded.'
      }));
      return data;
    });
  }),
      isLoading = _useQuery.isLoading,
      data = _useQuery.data;

  return {
    defaultLocales: data,
    isLoading: isLoading
  };
};

var _default = useDefaultLocales;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./src/admin/node_modules/react-redux/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js");

var deleteLocale = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id, toggleNotification) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _helperPlugin.request)("/i18n/locales/".concat(id), {
              method: 'DELETE'
            });

          case 3:
            data = _context.sent;
            toggleNotification({
              type: 'success',
              message: {
                id: (0, _utils.getTrad)('Settings.locales.modal.delete.success')
              }
            });
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
            return _context.abrupt("return", _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function deleteLocale(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var useDeleteLocale = function useDeleteLocale() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var removeLocale = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              _context2.next = 3;
              return deleteLocale(id, toggleNotification);

            case 3:
              dispatch({
                type: _constants.DELETE_LOCALE,
                id: id
              });
              setLoading(false);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function removeLocale(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    isDeleting: isLoading,
    deleteLocale: removeLocale
  };
};

var _default = useDeleteLocale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./src/admin/node_modules/react-redux/lib/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js");

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js");

var editLocale = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id, payload, toggleNotification) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _helperPlugin.request)("/i18n/locales/".concat(id), {
              method: 'PUT',
              body: payload
            });

          case 3:
            data = _context.sent;
            toggleNotification({
              type: 'success',
              message: {
                id: (0, _utils.getTrad)('Settings.locales.modal.edit.success')
              }
            });
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
            return _context.abrupt("return", null);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function editLocale(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var useEditLocale = function useEditLocale() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var modifyLocale = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, payload) {
      var editedLocale;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              _context2.next = 3;
              return editLocale(id, payload, toggleNotification);

            case 3:
              editedLocale = _context2.sent;
              dispatch({
                type: _constants.UPDATE_LOCALE,
                editedLocale: editedLocale
              });
              setLoading(false);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function modifyLocale(_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    isEditing: isLoading,
    editLocale: modifyLocale
  };
};

var _default = useEditLocale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _LocaleList = _interopRequireDefault(__webpack_require__(/*! ../../components/LocaleList */ "./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LocaleSettingsPage = function LocaleSettingsPage(_ref) {
  var canReadLocale = _ref.canReadLocale,
      canCreateLocale = _ref.canCreateLocale,
      canDeleteLocale = _ref.canDeleteLocale,
      canUpdateLocale = _ref.canUpdateLocale;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpenedCreateModal = _useState2[0],
      setIsOpenedCreateModal = _useState2[1];

  var handleToggleModalCreate = canCreateLocale ? function () {
    return setIsOpenedCreateModal(function (s) {
      return !s;
    });
  } : undefined;
  return canReadLocale ? /*#__PURE__*/_react["default"].createElement(_LocaleList["default"], {
    canUpdateLocale: canUpdateLocale,
    canDeleteLocale: canDeleteLocale,
    onToggleCreateModal: handleToggleModalCreate,
    isCreating: isOpenedCreateModal
  }) : null;
};

LocaleSettingsPage.propTypes = {
  canReadLocale: _propTypes["default"].bool.isRequired,
  canCreateLocale: _propTypes["default"].bool.isRequired,
  canUpdateLocale: _propTypes["default"].bool.isRequired,
  canDeleteLocale: _propTypes["default"].bool.isRequired
};
var _default = LocaleSettingsPage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _LocaleSettingsPage = _interopRequireDefault(__webpack_require__(/*! ./LocaleSettingsPage */ "./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js"));

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./node_modules/@strapi/plugin-i18n/admin/src/permissions.js"));

var ProtectedLocaleSettingsPage = function ProtectedLocaleSettingsPage() {
  var _useRBAC = (0, _helperPlugin.useRBAC)(_permissions["default"]),
      isLoading = _useRBAC.isLoading,
      _useRBAC$allowedActio = _useRBAC.allowedActions,
      canRead = _useRBAC$allowedActio.canRead,
      canUpdate = _useRBAC$allowedActio.canUpdate,
      canCreate = _useRBAC$allowedActio.canCreate,
      canDelete = _useRBAC$allowedActio.canDelete;

  if (isLoading) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_LocaleSettingsPage["default"], {
    canReadLocale: canRead,
    canCreateLocale: canCreate,
    canUpdateLocale: canUpdate,
    canDeleteLocale: canDelete
  });
};

var _default = ProtectedLocaleSettingsPage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-i18n/admin/src/schemas.js":
/*!***************************************************************!*\
  !*** ./node_modules/@strapi/plugin-i18n/admin/src/schemas.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _yup = __webpack_require__(/*! yup */ "./src/admin/node_modules/yup/lib/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var localeFormSchema = (0, _yup.object)().shape({
  code: (0, _yup.string)().required(),
  displayName: (0, _yup.string)().max(50, 'Settings.locales.modal.locales.displayName.error').required(_helperPlugin.translatedErrors.required)
});
var _default = localeFormSchema;
exports["default"] = _default;

/***/ })

}]);