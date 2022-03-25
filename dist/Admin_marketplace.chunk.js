"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["Admin_marketplace"],{

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

/***/ "./.cache/admin/src/hooks/useFetchMarketplacePlugins/index.js":
/*!********************************************************************!*\
  !*** ./.cache/admin/src/hooks/useFetchMarketplacePlugins/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _api = __webpack_require__(/*! ./utils/api */ "./.cache/admin/src/hooks/useFetchMarketplacePlugins/utils/api.js");

var useFetchMarketplacePlugins = function useFetchMarketplacePlugins(notifyLoad) {
  var toggleNotification = (0, _helperPlugin.useNotification)();
  return (0, _reactQuery.useQuery)('list-marketplace-plugins', function () {
    return (0, _api.fetchMarketplacePlugins)();
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

var _default = useFetchMarketplacePlugins;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useFetchMarketplacePlugins/utils/api.js":
/*!************************************************************************!*\
  !*** ./.cache/admin/src/hooks/useFetchMarketplacePlugins/utils/api.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fetchMarketplacePlugins = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var MARKETPLACE_API_URL = 'https://market-api.strapi.io';

var fetchMarketplacePlugins = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$axios$get, response, filteredResponse;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get("".concat(MARKETPLACE_API_URL, "/plugins"));

          case 2:
            _yield$axios$get = _context.sent;
            response = _yield$axios$get.data;
            // Only keep v4 plugins
            filteredResponse = _objectSpread(_objectSpread({}, response), {}, {
              data: response.data.filter(function (plugin) {
                return plugin.attributes.strapiCompatibility === 'v4';
              })
            });
            return _context.abrupt("return", filteredResponse);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchMarketplacePlugins() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchMarketplacePlugins = fetchMarketplacePlugins;

/***/ }),

/***/ "./.cache/admin/src/pages/MarketplacePage/components/EmptyPluginSearch/EmptyPluginGrid.js":
/*!************************************************************************************************!*\
  !*** ./.cache/admin/src/pages/MarketplacePage/components/EmptyPluginSearch/EmptyPluginGrid.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EmptyPluginGrid = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var EmptyPluginCard = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "EmptyPluginGrid__EmptyPluginCard",
  componentId: "sc-lmx01e-0"
})(["background:", ";opacity:0.33;"], function (_ref) {
  var theme = _ref.theme;
  return "linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ".concat(theme.colors.neutral150, " 100%)");
});

var EmptyPluginGrid = function EmptyPluginGrid() {
  return /*#__PURE__*/_react["default"].createElement(_Layout.GridLayout, null, Array(12).fill(null).map(function (_, idx) {
    return /*#__PURE__*/_react["default"].createElement(EmptyPluginCard // eslint-disable-next-line react/no-array-index-key
    , {
      key: "empty-plugin-card-".concat(idx),
      height: "234px",
      hasRadius: true
    });
  }));
};

exports.EmptyPluginGrid = EmptyPluginGrid;

/***/ }),

/***/ "./.cache/admin/src/pages/MarketplacePage/components/EmptyPluginSearch/index.js":
/*!**************************************************************************************!*\
  !*** ./.cache/admin/src/pages/MarketplacePage/components/EmptyPluginSearch/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EmptyPluginSearch = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Icon = __webpack_require__(/*! @strapi/design-system/Icon */ "./node_modules/@strapi/design-system/Icon.js");

var _EmptyDocuments = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/EmptyDocuments */ "./node_modules/@strapi/icons/EmptyDocuments.js"));

var _EmptyPluginGrid = __webpack_require__(/*! ./EmptyPluginGrid */ "./.cache/admin/src/pages/MarketplacePage/components/EmptyPluginSearch/EmptyPluginGrid.js");

var EmptyPluginSearch = function EmptyPluginSearch(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    position: "relative"
  }, /*#__PURE__*/_react["default"].createElement(_EmptyPluginGrid.EmptyPluginGrid, null), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    position: "absolute",
    top: 11,
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "center",
    justifyContent: "center",
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    as: _EmptyDocuments["default"],
    color: "",
    width: "160px",
    height: "88px"
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 6
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "delta",
    as: "p",
    textColor: "neutral600"
  }, content)))));
};

exports.EmptyPluginSearch = EmptyPluginSearch;
EmptyPluginSearch.propTypes = {
  content: _propTypes["default"].string.isRequired
};

/***/ }),

/***/ "./.cache/admin/src/pages/MarketplacePage/components/PluginCard/index.js":
/*!*******************************************************************************!*\
  !*** ./.cache/admin/src/pages/MarketplacePage/components/PluginCard/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _LinkButton = __webpack_require__(/*! @strapi/design-system/LinkButton */ "./node_modules/@strapi/design-system/LinkButton.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Icon = __webpack_require__(/*! @strapi/design-system/Icon */ "./node_modules/@strapi/design-system/Icon.js");

var _Tooltip = __webpack_require__(/*! @strapi/design-system/Tooltip */ "./node_modules/@strapi/design-system/Tooltip.js");

var _ExternalLink = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/ExternalLink */ "./node_modules/@strapi/icons/ExternalLink.js"));

var _Duplicate = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Duplicate */ "./node_modules/@strapi/icons/Duplicate.js"));

var _Check = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Check */ "./node_modules/@strapi/icons/Check.js"));

var _CheckCircle = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/CheckCircle */ "./node_modules/@strapi/icons/CheckCircle.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./src/admin/node_modules/react-copy-to-clipboard/lib/index.js");

var _icon_madeByStrapi = _interopRequireDefault(__webpack_require__(/*! ../../../../assets/images/icon_made-by-strapi.svg */ "./.cache/admin/src/assets/images/icon_made-by-strapi.svg"));

// Custom component to have an ellipsis after the 2nd line
var EllipsisText = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  displayName: "PluginCard__EllipsisText",
  componentId: "sc-1mq536v-0"
})(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;"]);

var PluginCard = function PluginCard(_ref) {
  var plugin = _ref.plugin,
      installedPluginNames = _ref.installedPluginNames,
      useYarn = _ref.useYarn;
  var attributes = plugin.attributes;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useTracking = (0, _helperPlugin.useTracking)(),
      trackUsage = _useTracking.trackUsage;

  var isInstalled = installedPluginNames.includes(attributes.npmPackageName);
  var commandToCopy = useYarn ? "yarn add ".concat(attributes.npmPackageName) : "npm install ".concat(attributes.npmPackageName);
  var madeByStrapiMessage = formatMessage({
    id: 'admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi',
    defaultMessage: 'Made by Strapi'
  });
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    direction: "column",
    justifyContent: "space-between",
    paddingTop: 4,
    paddingRight: 6,
    paddingBottom: 4,
    paddingLeft: 6,
    hasRadius: true,
    background: "neutral0",
    shadow: "tableShadow",
    height: "100%",
    alignItems: "normal"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    as: "img",
    src: attributes.logo.url,
    alt: "".concat(attributes.name, " logo"),
    hasRadius: true,
    width: 11,
    height: 11
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 4
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    as: "h3",
    variant: "delta"
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "center"
  }, attributes.name, attributes.validated && !attributes.madeByStrapi && /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, {
    description: formatMessage({
      id: 'admin.pages.MarketPlacePage.plugin.tooltip.verified',
      defaultMessage: 'Plugin verified by Strapi'
    })
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    as: _CheckCircle["default"],
    marginLeft: 2,
    color: "success600"
  }))), attributes.madeByStrapi && /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, {
    description: madeByStrapiMessage
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    as: "img",
    src: _icon_madeByStrapi["default"],
    alt: madeByStrapiMessage,
    marginLeft: 1,
    width: 6,
    height: "auto"
  })))))), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 2
  }, /*#__PURE__*/_react["default"].createElement(EllipsisText, {
    as: "p",
    variant: "omega",
    textColor: "neutral600"
  }, attributes.description))), /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    horizontal: true,
    spacing: 2,
    style: {
      alignSelf: 'flex-end'
    },
    paddingTop: 6
  }, /*#__PURE__*/_react["default"].createElement(_LinkButton.LinkButton, {
    size: "S",
    href: "https://market.strapi.io/plugins/".concat(attributes.slug),
    endIcon: /*#__PURE__*/_react["default"].createElement(_ExternalLink["default"], null),
    "aria-label": formatMessage({
      id: 'admin.pages.MarketPlacePage.plugin.info.label',
      defaultMessage: 'Learn more about {pluginName}'
    }, {
      pluginName: attributes.name
    }),
    variant: "tertiary",
    onClick: function onClick() {
      return trackUsage('didPluginLearnMore');
    }
  }, formatMessage({
    id: 'admin.pages.MarketPlacePage.plugin.info.text',
    defaultMessage: 'Learn more'
  })), isInstalled ? /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingLeft: 4
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    as: _Check["default"],
    marginRight: 2,
    width: 12,
    height: 12,
    color: "success600"
  }), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "omega",
    textColor: "success600",
    fontWeight: "bold"
  }, formatMessage({
    id: 'admin.pages.MarketPlacePage.plugin.installed',
    defaultMessage: 'Installed'
  }))) : /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    onCopy: function onCopy() {
      trackUsage('willInstallPlugin');
      toggleNotification({
        type: 'success',
        message: {
          id: 'admin.pages.MarketPlacePage.plugin.copy.success'
        }
      });
    },
    text: commandToCopy
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "S",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Duplicate["default"], null),
    variant: "secondary"
  }, formatMessage({
    id: 'admin.pages.MarketPlacePage.plugin.copy',
    defaultMessage: 'Copy install command'
  })))));
};

PluginCard.propTypes = {
  plugin: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    attributes: _propTypes["default"].shape({
      name: _propTypes["default"].string.isRequired,
      description: _propTypes["default"].string.isRequired,
      slug: _propTypes["default"].string.isRequired,
      npmPackageName: _propTypes["default"].string.isRequired,
      npmPackageUrl: _propTypes["default"].string.isRequired,
      repositoryUrl: _propTypes["default"].string.isRequired,
      logo: _propTypes["default"].object.isRequired,
      developerName: _propTypes["default"].string.isRequired,
      validated: _propTypes["default"].bool.isRequired,
      madeByStrapi: _propTypes["default"].bool.isRequired,
      strapiCompatibility: _propTypes["default"].oneOf(['v3', 'v4']).isRequired
    }).isRequired
  }).isRequired,
  installedPluginNames: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  useYarn: _propTypes["default"].bool.isRequired
};
var _default = PluginCard;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/MarketplacePage/index.js":
/*!*********************************************************!*\
  !*** ./.cache/admin/src/pages/MarketplacePage/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.MarketPlacePage = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./src/admin/node_modules/react-helmet/lib/Helmet.js");

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _matchSorter = _interopRequireDefault(__webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.cjs.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Searchbar = __webpack_require__(/*! @strapi/design-system/Searchbar */ "./node_modules/@strapi/design-system/Searchbar.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _LinkButton = __webpack_require__(/*! @strapi/design-system/LinkButton */ "./node_modules/@strapi/design-system/LinkButton.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _Upload = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Upload */ "./node_modules/@strapi/icons/Upload.js"));

var _PluginCard = _interopRequireDefault(__webpack_require__(/*! ./components/PluginCard */ "./.cache/admin/src/pages/MarketplacePage/components/PluginCard/index.js"));

var _EmptyPluginSearch = __webpack_require__(/*! ./components/EmptyPluginSearch */ "./.cache/admin/src/pages/MarketplacePage/components/EmptyPluginSearch/index.js");

var _api = __webpack_require__(/*! ./utils/api */ "./.cache/admin/src/pages/MarketplacePage/utils/api.js");

var _useFetchInstalledPlugins = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useFetchInstalledPlugins */ "./.cache/admin/src/hooks/useFetchInstalledPlugins/index.js"));

var _useFetchMarketplacePlugins = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useFetchMarketplacePlugins */ "./.cache/admin/src/hooks/useFetchMarketplacePlugins/index.js"));

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./.cache/admin/src/permissions/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var matchSearch = function matchSearch(plugins, search) {
  return (0, _matchSorter["default"])(plugins, search, {
    keys: [{
      threshold: _matchSorter["default"].rankings.WORD_STARTS_WITH,
      key: 'attributes.name'
    }, {
      threshold: _matchSorter["default"].rankings.WORD_STARTS_WITH,
      key: 'attributes.description'
    }]
  });
};

var MarketPlacePage = function MarketPlacePage() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useTracking = (0, _helperPlugin.useTracking)(),
      trackUsage = _useTracking.trackUsage;

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  var trackUsageRef = (0, _react.useRef)(trackUsage);
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  (0, _helperPlugin.useFocusWhenNavigate)();
  var marketplaceTitle = formatMessage({
    id: 'admin.pages.MarketPlacePage.title',
    defaultMessage: 'Marketplace'
  });

  var notifyMarketplaceLoad = function notifyMarketplaceLoad() {
    notifyStatus(formatMessage({
      id: 'app.utils.notify.data-loaded',
      defaultMessage: 'The {target} has loaded'
    }, {
      target: marketplaceTitle
    }));
  };

  var _useFetchMarketplaceP = (0, _useFetchMarketplacePlugins["default"])(notifyMarketplaceLoad),
      marketplacePluginsStatus = _useFetchMarketplaceP.status,
      marketplacePluginsResponse = _useFetchMarketplaceP.data;

  var _useFetchInstalledPlu = (0, _useFetchInstalledPlugins["default"])(),
      installedPluginsStatus = _useFetchInstalledPlu.status,
      installedPluginsResponse = _useFetchInstalledPlu.data;

  var _useQuery = (0, _reactQuery.useQuery)('app-information', _api.fetchAppInformation, {
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
      appInfoResponse = _useQuery.data,
      appInfoStatus = _useQuery.status;

  var isLoading = [marketplacePluginsStatus, installedPluginsStatus, appInfoStatus].includes('loading');
  var hasFailed = [marketplacePluginsStatus, installedPluginsStatus, appInfoStatus].includes('error');
  (0, _react.useEffect)(function () {
    trackUsageRef.current('didGoToMarketplace');
  }, []);

  if (hasFailed) {
    return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      paddingTop: 8
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.AnErrorOccurred, null))));
  }

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_Main.Main, {
      "aria-busy": true
    }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null)));
  }

  var searchResults = matchSearch(marketplacePluginsResponse.data, searchQuery);
  var installedPluginNames = installedPluginsResponse.plugins.map(function (plugin) {
    return plugin.packageName;
  });
  return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_Main.Main, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
    title: formatMessage({
      id: 'admin.pages.MarketPlacePage.helmet',
      defaultMessage: 'Marketplace - Plugins'
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    title: formatMessage({
      id: 'admin.pages.MarketPlacePage.title',
      defaultMessage: 'Marketplace'
    }),
    subtitle: formatMessage({
      id: 'admin.pages.MarketPlacePage.subtitle',
      defaultMessage: 'Get more out of Strapi'
    }),
    primaryAction: /*#__PURE__*/_react["default"].createElement(_LinkButton.LinkButton, {
      startIcon: /*#__PURE__*/_react["default"].createElement(_Upload["default"], null),
      variant: "tertiary",
      href: "https://market.strapi.io/submit-plugin",
      onClick: function onClick() {
        return trackUsage('didSubmitPlugin');
      }
    }, formatMessage({
      id: 'admin.pages.MarketPlacePage.submit.plugin.link',
      defaultMessage: 'Submit your plugin'
    }))
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: "25%",
    paddingBottom: 4
  }, /*#__PURE__*/_react["default"].createElement(_Searchbar.Searchbar, {
    name: "searchbar",
    onClear: function onClear() {
      return setSearchQuery('');
    },
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    },
    clearLabel: formatMessage({
      id: 'admin.pages.MarketPlacePage.search.clear',
      defaultMessage: 'Clear the plugin search'
    }),
    placeholder: formatMessage({
      id: 'admin.pages.MarketPlacePage.search.placeholder',
      defaultMessage: 'Search for a plugin'
    })
  }, formatMessage({
    id: 'admin.pages.MarketPlacePage.search.placeholder',
    defaultMessage: 'Search for a plugin'
  }))), searchQuery.length > 0 && !searchResults.length ? /*#__PURE__*/_react["default"].createElement(_EmptyPluginSearch.EmptyPluginSearch, {
    content: formatMessage({
      id: 'admin.pages.MarketPlacePage.search.empty',
      defaultMessage: 'No result for "{target}"'
    }, {
      target: searchQuery
    })
  }) : /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    gap: 4
  }, searchResults.map(function (plugin) {
    return /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      col: 4,
      s: 6,
      xs: 12,
      style: {
        height: '100%'
      },
      key: plugin.id
    }, /*#__PURE__*/_react["default"].createElement(_PluginCard["default"], {
      plugin: plugin,
      installedPluginNames: installedPluginNames,
      useYarn: appInfoResponse.data.useYarn
    }));
  })))));
};

exports.MarketPlacePage = MarketPlacePage;

var ProtectedMarketPlace = function ProtectedMarketPlace() {
  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions, {
    permissions: _permissions["default"].marketplace.main
  }, /*#__PURE__*/_react["default"].createElement(MarketPlacePage, null));
};

var _default = ProtectedMarketPlace;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/MarketplacePage/utils/api.js":
/*!*************************************************************!*\
  !*** ./.cache/admin/src/pages/MarketplacePage/utils/api.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fetchAppInformation = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _utils = __webpack_require__(/*! ../../../core/utils */ "./.cache/admin/src/core/utils/index.js");

var fetchAppInformation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$axiosInstance$, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utils.axiosInstance.get('/admin/information');

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

  return function fetchAppInformation() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchAppInformation = fetchAppInformation;

/***/ }),

/***/ "./node_modules/@strapi/icons/Upload.js":
/*!**********************************************!*\
  !*** ./node_modules/@strapi/icons/Upload.js ***!
  \**********************************************/
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
    }, r.p = "", r(r.s = 187);
  }({
    0: function _(t, r) {
      t.exports = e;
    },
    187: function _(e, t, r) {
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
          viewBox: "0 0 24 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, e), n.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.571 18.272H10.43v-8.47H2.487a.2.2 0 01-.14-.343L11.858.058a.2.2 0 01.282 0l9.513 9.4a.2.2 0 01-.14.343H13.57v8.47zM2.2 21.095a.2.2 0 00-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 00.2-.2v-2.424a.2.2 0 00-.2-.2H2.2z",
          fill: "#212134"
        }));
      };
    }
  });
});

/***/ }),

/***/ "./.cache/admin/src/assets/images/icon_made-by-strapi.svg":
/*!****************************************************************!*\
  !*** ./.cache/admin/src/assets/images/icon_made-by-strapi.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90f49a385afb000fb1d4.svg";

/***/ })

}]);