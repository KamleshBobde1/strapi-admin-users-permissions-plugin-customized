"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["Admin_pluginsPage"],{

/***/ "./.cache/admin/src/hooks/useFetchInstalledPlugins/index.js":
/*!******************************************************************!*\
  !*** ./.cache/admin/src/hooks/useFetchInstalledPlugins/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _api = __webpack_require__(/*! ./utils/api */ "./.cache/admin/src/hooks/useFetchInstalledPlugins/utils/api.js");

var useFetchInstalledPlugins = function useFetchInstalledPlugins(notifyLoad) {
  var toggleNotification = (0, _helperPlugin.useNotification)();
  return (0, _reactQuery.useQuery)('list-installed-plugins', function () {
    return (0, _api.fetchInstalledPlugins)();
  }, {
    onSuccess: function onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
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
  });
};

var _default = useFetchInstalledPlugins;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useFetchInstalledPlugins/utils/api.js":
/*!**********************************************************************!*\
  !*** ./.cache/admin/src/hooks/useFetchInstalledPlugins/utils/api.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fetchInstalledPlugins = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _utils = __webpack_require__(/*! ../../../core/utils */ "./.cache/admin/src/core/utils/index.js");

var fetchInstalledPlugins = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$axiosInstance$, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utils.axiosInstance.get('/admin/plugins');

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

  return function fetchInstalledPlugins() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchInstalledPlugins = fetchInstalledPlugins;

/***/ }),

/***/ "./.cache/admin/src/pages/InstalledPluginsPage/Plugins.js":
/*!****************************************************************!*\
  !*** ./.cache/admin/src/pages/InstalledPluginsPage/Plugins.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Table = __webpack_require__(/*! @strapi/design-system/Table */ "./node_modules/@strapi/design-system/Table.js");

var _useFetchInstalledPlugins = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useFetchInstalledPlugins */ "./.cache/admin/src/hooks/useFetchInstalledPlugins/index.js"));

var Plugins = function Plugins() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  (0, _helperPlugin.useFocusWhenNavigate)();
  var title = formatMessage({
    id: 'app.components.ListPluginsPage.title',
    defaultMessage: 'Plugins'
  });

  var notifyPluginPageLoad = function notifyPluginPageLoad() {
    notifyStatus(formatMessage({
      id: 'app.utils.notify.data-loaded',
      defaultMessage: 'The {target} has loaded'
    }, {
      target: title
    }));
  };

  var _useFetchInstalledPlu = (0, _useFetchInstalledPlugins["default"])(notifyPluginPageLoad),
      status = _useFetchInstalledPlu.status,
      data = _useFetchInstalledPlu.data;

  var isLoading = status !== 'success' && status !== 'error';

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_Main.Main, {
      "aria-busy": true
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null)));
  }

  return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_Main.Main, null, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    title: title,
    subtitle: formatMessage({
      id: 'app.components.ListPluginsPage.description',
      defaultMessage: 'List of the installed plugins in the project.'
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_Table.Table, {
    colCount: 2,
    rowCount: (data === null || data === void 0 ? void 0 : data.plugins.length) + 1
  }, /*#__PURE__*/_react["default"].createElement(_Table.Thead, null, /*#__PURE__*/_react["default"].createElement(_Table.Tr, null, /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: 'Settings.roles.list.header.name',
    defaultMessage: 'Name'
  }))), /*#__PURE__*/_react["default"].createElement(_Table.Th, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: 'Settings.roles.list.header.description',
    defaultMessage: 'description'
  }))))), /*#__PURE__*/_react["default"].createElement(_Table.Tbody, null, data.plugins.map(function (_ref) {
    var name = _ref.name,
        displayName = _ref.displayName,
        description = _ref.description;
    return /*#__PURE__*/_react["default"].createElement(_Table.Tr, {
      key: name
    }, /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      textColor: "neutral800",
      variant: "omega",
      fontWeight: "bold"
    }, displayName)), /*#__PURE__*/_react["default"].createElement(_Table.Td, null, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      textColor: "neutral800"
    }, description)));
  }))))));
};

var _default = Plugins;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/InstalledPluginsPage/index.js":
/*!**************************************************************!*\
  !*** ./.cache/admin/src/pages/InstalledPluginsPage/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./src/admin/node_modules/react-helmet/lib/Helmet.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./.cache/admin/src/permissions/index.js"));

var _Plugins = _interopRequireDefault(__webpack_require__(/*! ./Plugins */ "./.cache/admin/src/pages/InstalledPluginsPage/Plugins.js"));

var InstalledPluginsPage = function InstalledPluginsPage() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var title = formatMessage({
    id: 'app.components.ListPluginsPage.title',
    defaultMessage: 'Plugins'
  });
  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions, {
    permissions: _permissions["default"].marketplace.main
  }, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
    title: title
  }), /*#__PURE__*/_react["default"].createElement(_Plugins["default"], null));
};

var _default = InstalledPluginsPage;
exports["default"] = _default;

/***/ })

}]);