(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["Admin_settingsPage"],{

/***/ "./.cache/admin/src/pages/SettingsPage/components/SettingsNav/index.js":
/*!*****************************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/components/SettingsNav/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _SubNav = __webpack_require__(/*! @strapi/design-system/SubNav */ "./node_modules/@strapi/design-system/SubNav.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./.cache/admin/src/pages/SettingsPage/utils/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SettingsNav = function SettingsNav(_ref) {
  var menu = _ref.menu;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var filteredMenu = (0, _utils.getSectionsToDisplay)(menu);
  var sections = filteredMenu.map(function (section) {
    return _objectSpread(_objectSpread({}, section), {}, {
      title: section.intlLabel,
      links: section.links.map(function (link) {
        return _objectSpread(_objectSpread({}, link), {}, {
          title: link.intlLabel,
          name: link.id
        });
      })
    });
  });
  var label = formatMessage({
    id: 'app.components.LeftMenuLinkContainer.settings',
    defaultMessage: 'Settings'
  });
  return /*#__PURE__*/_react["default"].createElement(_SubNav.SubNav, {
    ariaLabel: label
  }, /*#__PURE__*/_react["default"].createElement(_SubNav.SubNavHeader, {
    label: label
  }), /*#__PURE__*/_react["default"].createElement(_SubNav.SubNavSections, null, sections.map(function (section) {
    return /*#__PURE__*/_react["default"].createElement(_SubNav.SubNavSection, {
      key: section.id,
      label: formatMessage(section.intlLabel)
    }, section.links.map(function (link) {
      return /*#__PURE__*/_react["default"].createElement(_SubNav.SubNavLink, {
        withBullet: link.hasNotification,
        to: link.to,
        key: link.id
      }, formatMessage(link.intlLabel));
    }));
  })));
};

SettingsNav.propTypes = {
  menu: _propTypes["default"].array.isRequired
};
var _default = SettingsNav;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/index.js":
/*!******************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SettingsPage = SettingsPage;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./src/admin/node_modules/react-helmet/lib/Helmet.js");

var _hooks = __webpack_require__(/*! ../../hooks */ "./.cache/admin/src/hooks/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./.cache/admin/src/utils/index.js");

var _ApplicationInfosPage = _interopRequireDefault(__webpack_require__(/*! ./pages/ApplicationInfosPage */ "./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/index.js"));

var _utils2 = __webpack_require__(/*! ./utils */ "./.cache/admin/src/pages/SettingsPage/utils/index.js");

var _SettingsNav = _interopRequireDefault(__webpack_require__(/*! ./components/SettingsNav */ "./.cache/admin/src/pages/SettingsPage/components/SettingsNav/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 * SettingsPage
 *
 */
// NOTE TO PLUGINS DEVELOPERS:
// If you modify this file you also need to update the documentation accordingly
// Here's the file: strapi/docs/3.0.0-beta.x/plugin-development/frontend-settings-api.md
// IF THE DOC IS NOT UPDATED THE PULL REQUEST WILL NOT BE MERGED
function SettingsPage() {
  var _useParams = (0, _reactRouterDom.useParams)(),
      settingId = _useParams.settingId;

  var _useStrapiApp = (0, _helperPlugin.useStrapiApp)(),
      settings = _useStrapiApp.settings;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useSettingsMenu = (0, _hooks.useSettingsMenu)(),
      isLoading = _useSettingsMenu.isLoading,
      menu = _useSettingsMenu.menu; // Creates the admin routes


  var adminRoutes = (0, _react.useMemo)(function () {
    return (0, _utils.makeUniqueRoutes)(_utils2.routes.map(function (_ref) {
      var to = _ref.to,
          Component = _ref.Component,
          exact = _ref.exact;
      return (0, _utils.createRoute)(Component, to, exact);
    }));
  }, []);
  var pluginsRoutes = (0, _utils2.createSectionsRoutes)(settings); // Since the useSettingsMenu hook can make API calls in order to check the links permissions
  // We need to add a loading state to prevent redirecting the user while permissions are being checked

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null);
  }

  if (!settingId) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
      to: "/settings/application-infos"
    });
  }

  var settingTitle = formatMessage({
    id: 'app.components.LeftMenuLinkContainer.settings',
    defaultMessage: 'Settings'
  });
  return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, {
    sideNav: /*#__PURE__*/_react["default"].createElement(_SettingsNav["default"], {
      menu: menu
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
    title: settingTitle
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/settings/application-infos",
    component: _ApplicationInfosPage["default"],
    exact: true
  }), adminRoutes, pluginsRoutes));
}

var _default = /*#__PURE__*/(0, _react.memo)(SettingsPage);

exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/index.js":
/*!*********************************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/pages/ApplicationInfosPage/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Link = __webpack_require__(/*! @strapi/design-system/Link */ "./node_modules/@strapi/design-system/Link.js");

var _ExternalLink = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/ExternalLink */ "./node_modules/@strapi/icons/ExternalLink.js"));

var ApplicationInfosPage = function ApplicationInfosPage() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  (0, _helperPlugin.useFocusWhenNavigate)();
  var appInfos = (0, _helperPlugin.useAppInfos)();
  var shouldUpdateStrapi = appInfos.shouldUpdateStrapi,
      latestStrapiReleaseTag = appInfos.latestStrapiReleaseTag,
      strapiVersion = appInfos.strapiVersion;
  var currentPlan = appInfos.communityEdition ? 'app.components.UpgradePlanModal.text-ce' : 'app.components.UpgradePlanModal.text-ee';
  return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle, {
    name: "Application"
  }), /*#__PURE__*/_react["default"].createElement(_Main.Main, null, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    title: formatMessage({
      id: 'Settings.application.title',
      defaultMessage: 'Overview'
    }),
    subtitle: formatMessage({
      id: 'Settings.application.description',
      defaultMessage: 'Administration panel’s global information'
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    hasRadius: true,
    background: "neutral0",
    shadow: "tableShadow",
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 6,
    paddingLeft: 6
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 5
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "delta",
    as: "h3"
  }, formatMessage({
    id: 'Settings.application.details',
    defaultMessage: 'Details'
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    paddingTop: 1
  }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: 'Settings.application.strapiVersion',
    defaultMessage: 'strapi version'
  })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    as: "p"
  }, "v", strapiVersion), /*#__PURE__*/_react["default"].createElement(_Link.Link, {
    href: appInfos.communityEdition ? 'https://discord.strapi.io' : 'https://support.strapi.io/support/home',
    endIcon: /*#__PURE__*/_react["default"].createElement(_ExternalLink["default"], null)
  }, formatMessage({
    id: 'Settings.application.get-help',
    defaultMessage: 'Get help'
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: 'Settings.application.edition-title',
    defaultMessage: 'current plan'
  })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    as: "p"
  }, formatMessage({
    id: currentPlan,
    defaultMessage: "".concat(appInfos.communityEdition ? 'Community Edition' : 'Enterprise Edition')
  })))), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    paddingTop: 1
  }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, shouldUpdateStrapi && /*#__PURE__*/_react["default"].createElement(_Link.Link, {
    href: "https://github.com/strapi/strapi/releases/tag/".concat(latestStrapiReleaseTag),
    endIcon: /*#__PURE__*/_react["default"].createElement(_ExternalLink["default"], null)
  }, formatMessage({
    id: 'Settings.application.link-upgrade',
    defaultMessage: 'Upgrade your admin panel'
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 6,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_Link.Link, {
    href: "https://strapi.io/pricing-self-hosted",
    endIcon: /*#__PURE__*/_react["default"].createElement(_ExternalLink["default"], null)
  }, formatMessage({
    id: 'Settings.application.link-pricing',
    defaultMessage: 'See all pricing plans'
  })))), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 1
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: 'Settings.application.node-version',
    defaultMessage: 'node version'
  })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    as: "p"
  }, appInfos.nodeVersion)))))));
};

var _default = ApplicationInfosPage;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/utils/createSectionsRoutes.js":
/*!***************************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/utils/createSectionsRoutes.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _flatMap = _interopRequireDefault(__webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js"));

var _utils = __webpack_require__(/*! ../../../utils */ "./.cache/admin/src/utils/index.js");

var createSectionsRoutes = function createSectionsRoutes(settings) {
  var allLinks = (0, _flatMap["default"])(settings, function (section) {
    return section.links;
  });
  return allLinks.map(function (link) {
    return (0, _utils.createRoute)(link.Component, link.to, link.exact || false);
  });
};

var _default = createSectionsRoutes;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/utils/getSectionsToDisplay.js":
/*!***************************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/utils/getSectionsToDisplay.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var getSectionsToDisplay = function getSectionsToDisplay(menu) {
  return menu.filter(function (section) {
    return !section.links.every(function (link) {
      return link.isDisplayed === false;
    });
  });
};

var _default = getSectionsToDisplay;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/utils/index.js":
/*!************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/utils/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "createSectionsRoutes", ({
  enumerable: true,
  get: function get() {
    return _createSectionsRoutes["default"];
  }
}));
Object.defineProperty(exports, "getSectionsToDisplay", ({
  enumerable: true,
  get: function get() {
    return _getSectionsToDisplay["default"];
  }
}));
Object.defineProperty(exports, "routes", ({
  enumerable: true,
  get: function get() {
    return _routes["default"];
  }
}));

var _createSectionsRoutes = _interopRequireDefault(__webpack_require__(/*! ./createSectionsRoutes */ "./.cache/admin/src/pages/SettingsPage/utils/createSectionsRoutes.js"));

var _getSectionsToDisplay = _interopRequireDefault(__webpack_require__(/*! ./getSectionsToDisplay */ "./.cache/admin/src/pages/SettingsPage/utils/getSectionsToDisplay.js"));

var _routes = _interopRequireDefault(__webpack_require__(/*! ./routes */ "./.cache/admin/src/pages/SettingsPage/utils/routes.js"));

/***/ }),

/***/ "./.cache/admin/src/pages/SettingsPage/utils/routes.js":
/*!*************************************************************!*\
  !*** ./.cache/admin/src/pages/SettingsPage/utils/routes.js ***!
  \*************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./src/admin/node_modules/babel-loader/lib/index.js):\nTypeError [ERR_INVALID_ARG_TYPE]: The \"path\" argument must be of type string. Received null\n    at validateString (internal/validators.js:122:11)\n    at Object.extname (path.js:1229:5)\n    at getRelativePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:11:40)\n    at resolvePathFromRootConfig (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:43:26)\n    at resolvePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:66:25)\n    at PluginPass.transformImport (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/transformers/import.js:17:25)\n    at NodePath._call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:100:31)\n    at TraversalContext.visitQueue (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:103:16)\n    at TraversalContext.visitMultiple (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:72:17)\n    at TraversalContext.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:129:19)\n    at traverseNode (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/traverse-node.js:24:17)\n    at traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/index.js:62:34)\n    at NodePath.traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/index.js:147:24)\n    at PluginPass.enter (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/index.js:15:19)");

/***/ }),

/***/ "./node_modules/lodash/flatMap.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatMap.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    map = __webpack_require__(/*! ./map */ "./node_modules/lodash/map.js");
/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */


function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");
/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */


function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;

/***/ })

}]);