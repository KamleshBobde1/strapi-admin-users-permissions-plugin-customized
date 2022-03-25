"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["users-email-settings-page"],{

/***/ "./node_modules/@strapi/icons/Refresh.js":
/*!***********************************************!*\
  !*** ./node_modules/@strapi/icons/Refresh.js ***!
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
    }, r.p = "", r(r.s = 154);
  }({
    0: function _(t, r) {
      t.exports = e;
    },
    154: function _(e, t, r) {
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
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",
          fill: "#212134"
        }));
      };
    }
  });
});

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailForm.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailForm.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");

var _ModalLayout = __webpack_require__(/*! @strapi/design-system/ModalLayout */ "./node_modules/@strapi/design-system/ModalLayout.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Breadcrumbs = __webpack_require__(/*! @strapi/design-system/Breadcrumbs */ "./node_modules/@strapi/design-system/Breadcrumbs.js");

var _Textarea = __webpack_require__(/*! @strapi/design-system/Textarea */ "./node_modules/@strapi/design-system/Textarea.js");

var _utils = __webpack_require__(/*! ../../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

var _schema = _interopRequireDefault(__webpack_require__(/*! ../utils/schema */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/schema.js"));

var EmailForm = function EmailForm(_ref) {
  var template = _ref.template,
      onToggle = _ref.onToggle,
      onSubmit = _ref.onSubmit;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalLayout, {
    onClose: onToggle,
    labelledBy: "".concat(formatMessage({
      id: (0, _utils.getTrad)('PopUpForm.header.edit.email-templates'),
      defaultMessage: 'Edit email template'
    }), ", ").concat(formatMessage({
      id: (0, _utils.getTrad)(template.display),
      defaultMessage: template.display
    }))
  }, /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalHeader, null, /*#__PURE__*/_react["default"].createElement(_Breadcrumbs.Breadcrumbs, {
    label: "".concat(formatMessage({
      id: (0, _utils.getTrad)('PopUpForm.header.edit.email-templates'),
      defaultMessage: 'Edit email template'
    }), ", ").concat(formatMessage({
      id: (0, _utils.getTrad)(template.display),
      defaultMessage: template.display
    }))
  }, /*#__PURE__*/_react["default"].createElement(_Breadcrumbs.Crumb, null, formatMessage({
    id: (0, _utils.getTrad)('PopUpForm.header.edit.email-templates'),
    defaultMessage: 'Edit email template'
  })), /*#__PURE__*/_react["default"].createElement(_Breadcrumbs.Crumb, null, formatMessage({
    id: (0, _utils.getTrad)(template.display),
    defaultMessage: template.display
  })))), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    onSubmit: onSubmit,
    initialValues: template,
    validateOnChange: false,
    validationSchema: _schema["default"],
    enableReinitialize: true
  }, function (_ref2) {
    var _errors$options, _errors$options$from, _errors$options2, _errors$options2$from, _errors$options3, _errors$options4, _errors$options5;

    var errors = _ref2.errors,
        values = _ref2.values,
        handleChange = _ref2.handleChange,
        isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.Form, null, /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalBody, null, /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
      gap: 5
    }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      col: 6,
      s: 12
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, {
      intlLabel: {
        id: (0, _utils.getTrad)('PopUpForm.Email.options.from.name.label'),
        defaultMessage: 'Shipper name'
      },
      name: "options.from.name",
      onChange: handleChange,
      value: values.options.from.name,
      error: errors === null || errors === void 0 ? void 0 : (_errors$options = errors.options) === null || _errors$options === void 0 ? void 0 : (_errors$options$from = _errors$options.from) === null || _errors$options$from === void 0 ? void 0 : _errors$options$from.name,
      type: "text"
    })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      col: 6,
      s: 12
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, {
      intlLabel: {
        id: (0, _utils.getTrad)('PopUpForm.Email.options.from.email.label'),
        defaultMessage: 'Shipper email'
      },
      name: "options.from.email",
      onChange: handleChange,
      value: values.options.from.email,
      error: errors === null || errors === void 0 ? void 0 : (_errors$options2 = errors.options) === null || _errors$options2 === void 0 ? void 0 : (_errors$options2$from = _errors$options2.from) === null || _errors$options2$from === void 0 ? void 0 : _errors$options2$from.email,
      type: "text"
    })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      col: 6,
      s: 12
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, {
      intlLabel: {
        id: (0, _utils.getTrad)('PopUpForm.Email.options.response_email.label'),
        defaultMessage: 'Response email'
      },
      name: "options.response_email",
      onChange: handleChange,
      value: values.options.response_email,
      error: errors === null || errors === void 0 ? void 0 : (_errors$options3 = errors.options) === null || _errors$options3 === void 0 ? void 0 : _errors$options3.response_email,
      type: "text"
    })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      col: 6,
      s: 12
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput, {
      intlLabel: {
        id: (0, _utils.getTrad)('PopUpForm.Email.options.object.label'),
        defaultMessage: 'Subject'
      },
      name: "options.object",
      onChange: handleChange,
      value: values.options.object,
      error: errors === null || errors === void 0 ? void 0 : (_errors$options4 = errors.options) === null || _errors$options4 === void 0 ? void 0 : _errors$options4.object,
      type: "text"
    })), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      col: 12,
      s: 12
    }, /*#__PURE__*/_react["default"].createElement(_Textarea.Textarea, {
      label: formatMessage({
        id: (0, _utils.getTrad)('PopUpForm.Email.options.message.label'),
        defaultMessage: 'Message'
      }),
      name: "options.message",
      onChange: handleChange,
      value: values.options.message,
      error: (errors === null || errors === void 0 ? void 0 : (_errors$options5 = errors.options) === null || _errors$options5 === void 0 ? void 0 : _errors$options5.message) && formatMessage({
        id: errors.options.message,
        defaultMessage: errors.options.message
      })
    })))), /*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalFooter, {
      startActions: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        onClick: onToggle,
        variant: "tertiary"
      }, "Cancel"),
      endActions: /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        loading: isSubmitting,
        type: "submit"
      }, "Finish")
    }));
  }));
};

EmailForm.propTypes = {
  template: _propTypes["default"].shape({
    display: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    options: _propTypes["default"].shape({
      from: _propTypes["default"].shape({
        name: _propTypes["default"].string,
        email: _propTypes["default"].string
      }),
      message: _propTypes["default"].string,
      object: _propTypes["default"].string,
      response_email: _propTypes["default"].string
    })
  }).isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  onToggle: _propTypes["default"].func.isRequired
};
var _default = EmailForm;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailTable.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailTable.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Table = __webpack_require__(/*! @strapi/design-system/Table */ "./node_modules/@strapi/design-system/Table.js");

var _VisuallyHidden = __webpack_require__(/*! @strapi/design-system/VisuallyHidden */ "./node_modules/@strapi/design-system/VisuallyHidden.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _IconButton = __webpack_require__(/*! @strapi/design-system/IconButton */ "./node_modules/@strapi/design-system/IconButton.js");

var _Pencil = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Pencil */ "./node_modules/@strapi/icons/Pencil.js"));

var _Refresh = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Refresh */ "./node_modules/@strapi/icons/Refresh.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Check = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Check */ "./node_modules/@strapi/icons/Check.js"));

var _utils = __webpack_require__(/*! ../../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

var EmailTable = function EmailTable(_ref) {
  var canUpdate = _ref.canUpdate,
      onEditClick = _ref.onEditClick;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Table.Table, {
    colCount: 3,
    rowCount: 3
  }, /*#__PURE__*/_react["default"].createElement(_Table.Thead, null, /*#__PURE__*/_react["default"].createElement(_Table.Tr, null, /*#__PURE__*/_react["default"].createElement(_Table.Th, {
    width: "1%"
  }, /*#__PURE__*/_react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, formatMessage({
    id: (0, _utils.getTrad)('Email.template.table.icon.label'),
    defaultMessage: 'icon'
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: (0, _utils.getTrad)('Email.template.table.name.label'),
    defaultMessage: 'name'
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Th, {
    width: "1%"
  }, /*#__PURE__*/_react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, formatMessage({
    id: (0, _utils.getTrad)('Email.template.table.action.label'),
    defaultMessage: 'action'
  }))))), /*#__PURE__*/_react["default"].createElement(_Table.Tbody, null, /*#__PURE__*/_react["default"].createElement(_Table.Tr, (0, _helperPlugin.onRowClick)({
    fn: function fn() {
      return onEditClick('reset_password');
    }
  }), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Refresh["default"], {
    "aria-label": formatMessage({
      id: (0, _utils.getTrad)('Email.template.reset_password'),
      defaultMessage: 'Reset password'
    })
  })), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, null, formatMessage({
    id: (0, _utils.getTrad)('Email.template.reset_password'),
    defaultMessage: 'Reset password'
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Td, _helperPlugin.stopPropagation, /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
    onClick: function onClick() {
      return onEditClick('reset_password');
    },
    label: formatMessage({
      id: (0, _utils.getTrad)('Email.template.form.edit.label'),
      defaultMessage: 'Edit a template'
    }),
    noBorder: true,
    icon: canUpdate && /*#__PURE__*/_react["default"].createElement(_Pencil["default"], null)
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Tr, (0, _helperPlugin.onRowClick)({
    fn: function fn() {
      return onEditClick('email_confirmation');
    }
  }), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Check["default"], {
    "aria-label": formatMessage({
      id: (0, _utils.getTrad)('Email.template.email_confirmation'),
      defaultMessage: 'Email address confirmation'
    })
  })), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, null, formatMessage({
    id: (0, _utils.getTrad)('Email.template.email_confirmation'),
    defaultMessage: 'Email address confirmation'
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Td, _helperPlugin.stopPropagation, /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
    onClick: function onClick() {
      return onEditClick('email_confirmation');
    },
    label: formatMessage({
      id: (0, _utils.getTrad)('Email.template.form.edit.label'),
      defaultMessage: 'Edit a template'
    }),
    noBorder: true,
    icon: canUpdate && /*#__PURE__*/_react["default"].createElement(_Pencil["default"], null)
  })))));
};

EmailTable.propTypes = {
  canUpdate: _propTypes["default"].bool.isRequired,
  onEditClick: _propTypes["default"].func.isRequired
};
var _default = EmailTable;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/index.js ***!
  \***********************************************************************************************/
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

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js");

var _api = __webpack_require__(/*! ./utils/api */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/api.js");

var _EmailTable = _interopRequireDefault(__webpack_require__(/*! ./components/EmailTable */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailTable.js"));

var _EmailForm = _interopRequireDefault(__webpack_require__(/*! ./components/EmailForm */ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailForm.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ProtectedEmailTemplatesPage = function ProtectedEmailTemplatesPage() {
  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions, {
    permissions: _permissions["default"].readEmailTemplates
  }, /*#__PURE__*/_react["default"].createElement(EmailTemplatesPage, null));
};

var EmailTemplatesPage = function EmailTemplatesPage() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useTracking = (0, _helperPlugin.useTracking)(),
      trackUsage = _useTracking.trackUsage;

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useOverlayBlocker = (0, _helperPlugin.useOverlayBlocker)(),
      lockApp = _useOverlayBlocker.lockApp,
      unlockApp = _useOverlayBlocker.unlockApp;

  var trackUsageRef = (0, _react.useRef)(trackUsage);
  var queryClient = (0, _reactQuery.useQueryClient)();
  (0, _helperPlugin.useFocusWhenNavigate)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      templateToEdit = _useState4[0],
      setTemplateToEdit = _useState4[1];

  var updatePermissions = (0, _react.useMemo)(function () {
    return {
      update: _permissions["default"].updateEmailTemplates
    };
  }, []);

  var _useRBAC = (0, _helperPlugin.useRBAC)(updatePermissions),
      isLoadingForPermissions = _useRBAC.isLoading,
      canUpdate = _useRBAC.allowedActions.canUpdate;

  var _useQuery = (0, _reactQuery.useQuery)('email-templates', function () {
    return (0, _api.fetchData)();
  }, {
    onSuccess: function onSuccess() {
      notifyStatus(formatMessage({
        id: (0, _utils.getTrad)('Email.template.data.loaded'),
        defaultMessage: 'Email templates has been loaded'
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
      isLoadingData = _useQuery.status,
      data = _useQuery.data;

  var isLoading = isLoadingForPermissions || isLoadingData !== 'success';

  var handleToggle = function handleToggle() {
    setIsModalOpen(function (prev) {
      return !prev;
    });
  };

  var handleEditClick = function handleEditClick(template) {
    setTemplateToEdit(template);
    handleToggle();
  };

  var submitMutation = (0, _reactQuery.useMutation)(function (body) {
    return (0, _api.putEmailTemplate)({
      'email-templates': body
    });
  }, {
    onSuccess: function () {
      var _onSuccess = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryClient.invalidateQueries('email-templates');

              case 2:
                toggleNotification({
                  type: 'success',
                  message: {
                    id: 'notification.success.saved',
                    defaultMessage: 'Saved'
                  }
                });
                trackUsageRef.current('didEditEmailTemplates');
                unlockApp();
                handleToggle();

              case 6:
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
          id: 'notification.error',
          defaultMessage: 'An error occured'
        }
      });
      unlockApp();
    },
    refetchActive: true
  });
  var isSubmittingForm = submitMutation.isLoading;

  var handleSubmit = function handleSubmit(body) {
    lockApp();
    trackUsageRef.current('willEditEmailTemplates');

    var editedTemplates = _objectSpread(_objectSpread({}, data), {}, (0, _defineProperty2["default"])({}, templateToEdit, body));

    submitMutation.mutate(editedTemplates);
  };

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
      "aria-busy": "true"
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle, {
      name: formatMessage({
        id: (0, _utils.getTrad)('HeaderNav.link.emailTemplates'),
        defaultMessage: 'Email templates'
      })
    }), /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
      title: formatMessage({
        id: (0, _utils.getTrad)('HeaderNav.link.emailTemplates'),
        defaultMessage: 'Email templates'
      })
    }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null)));
  }

  return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    "aria-busy": isSubmittingForm
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle, {
    name: formatMessage({
      id: (0, _utils.getTrad)('HeaderNav.link.emailTemplates'),
      defaultMessage: 'Email templates'
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    title: formatMessage({
      id: (0, _utils.getTrad)('HeaderNav.link.emailTemplates'),
      defaultMessage: 'Email templates'
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_EmailTable["default"], {
    onEditClick: handleEditClick,
    canUpdate: canUpdate
  }), isModalOpen && /*#__PURE__*/_react["default"].createElement(_EmailForm["default"], {
    template: data[templateToEdit],
    onToggle: handleToggle,
    onSubmit: handleSubmit
  })));
};

var _default = ProtectedEmailTemplatesPage;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/api.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/api.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.putEmailTemplate = exports.fetchData = void 0;

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
            return _utils.axiosInstance.get((0, _utils.getRequestURL)('email-templates'));

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

var putEmailTemplate = function putEmailTemplate(body) {
  return _utils.axiosInstance.put((0, _utils.getRequestURL)('email-templates'), body);
};

exports.putEmailTemplate = putEmailTemplate;

/***/ }),

/***/ "./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/schema.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/schema.js ***!
  \******************************************************************************************************/
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
  options: yup.object().shape({
    from: yup.object().shape({
      name: yup.string().required(_helperPlugin.translatedErrors.required),
      email: yup.string().email(_helperPlugin.translatedErrors.email).required(_helperPlugin.translatedErrors.required)
    }).required(),
    response_email: yup.string().email(_helperPlugin.translatedErrors.email),
    object: yup.string().required(_helperPlugin.translatedErrors.required),
    message: yup.string().required(_helperPlugin.translatedErrors.required)
  }).required(_helperPlugin.translatedErrors.required)
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