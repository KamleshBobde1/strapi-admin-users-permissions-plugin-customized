"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["Admin-authenticatedApp"],{

/***/ "./.cache/admin/src/components/AuthenticatedApp/index.js":
/*!***************************************************************!*\
  !*** ./.cache/admin/src/components/AuthenticatedApp/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _package = _interopRequireDefault(__webpack_require__(/*! ../../../../package.json */ "./.cache/package.json"));

var _hooks = __webpack_require__(/*! ../../hooks */ "./.cache/admin/src/hooks/index.js");

var _PluginsInitializer = _interopRequireDefault(__webpack_require__(/*! ../PluginsInitializer */ "./.cache/admin/src/components/PluginsInitializer/index.js"));

var _RBACProvider = _interopRequireDefault(__webpack_require__(/*! ../RBACProvider */ "./.cache/admin/src/components/RBACProvider/index.js"));

var _api = __webpack_require__(/*! ./utils/api */ "./.cache/admin/src/components/AuthenticatedApp/utils/api.js");

var _checkLatestStrapiVersion = _interopRequireDefault(__webpack_require__(/*! ./utils/checkLatestStrapiVersion */ "./.cache/admin/src/components/AuthenticatedApp/utils/checkLatestStrapiVersion.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./.cache/admin/src/utils/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var strapiVersion = _package["default"].version;

var AuthenticatedApp = function AuthenticatedApp() {
  var _useGuidedTour = (0, _helperPlugin.useGuidedTour)(),
      setGuidedTourVisibility = _useGuidedTour.setGuidedTourVisibility;

  var toggleNotification = (0, _helperPlugin.useNotification)();
  var setGuidedTourVisibilityRef = (0, _react.useRef)(setGuidedTourVisibility);

  var userInfo = _helperPlugin.auth.getUserInfo();

  var userName = (0, _get["default"])(userInfo, 'username') || (0, _utils.getFullName)(userInfo.firstname, userInfo.lastname);

  var _useState = (0, _react.useState)(userName),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      userDisplayName = _useState2[0],
      setUserDisplayName = _useState2[1];

  var _useConfigurations = (0, _hooks.useConfigurations)(),
      showReleaseNotification = _useConfigurations.showReleaseNotification;

  var _useQueries = (0, _reactQuery.useQueries)([{
    queryKey: 'app-infos',
    queryFn: _api.fetchAppInfo
  }, {
    queryKey: 'strapi-release',
    queryFn: function queryFn() {
      return (0, _api.fetchStrapiLatestRelease)(toggleNotification);
    },
    enabled: showReleaseNotification,
    initialData: strapiVersion
  }, {
    queryKey: 'admin-users-permission',
    queryFn: _api.fetchCurrentUserPermissions,
    initialData: []
  }, {
    queryKey: 'user-roles',
    queryFn: _api.fetchUserRoles
  }]),
      _useQueries2 = (0, _slicedToArray2["default"])(_useQueries, 4),
      _useQueries2$ = _useQueries2[0],
      appInfos = _useQueries2$.data,
      status = _useQueries2$.status,
      _useQueries2$2 = _useQueries2[1],
      tag_name = _useQueries2$2.data,
      isLoading = _useQueries2$2.isLoading,
      _useQueries2$3 = _useQueries2[2],
      permissions = _useQueries2$3.data,
      fetchPermissionsStatus = _useQueries2$3.status,
      refetch = _useQueries2$3.refetch,
      isFetched = _useQueries2$3.isFetched,
      isFetching = _useQueries2$3.isFetching,
      userRoles = _useQueries2[3].data;

  var shouldUpdateStrapi = (0, _react.useMemo)(function () {
    return (0, _checkLatestStrapiVersion["default"])(strapiVersion, tag_name);
  }, [tag_name]);
  (0, _react.useEffect)(function () {
    if (userRoles) {
      var isUserSuperAdmin = userRoles.find(function (_ref) {
        var code = _ref.code;
        return code === 'strapi-super-admin';
      });

      if (isUserSuperAdmin) {
        setGuidedTourVisibilityRef.current(true);
      }
    }
  }, [userRoles]); // We don't need to wait for the release query to be fetched before rendering the plugins
  // however, we need the appInfos and the permissions

  var shouldShowNotDependentQueriesLoader = isFetching && isFetched || status === 'loading' || fetchPermissionsStatus === 'loading';
  var shouldShowLoader = isLoading || shouldShowNotDependentQueriesLoader;

  if (shouldShowLoader) {
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null);
  } // TODO add error state


  if (status === 'error') {
    return /*#__PURE__*/_react["default"].createElement("div", null, "error...");
  }

  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.AppInfosContext.Provider, {
    value: _objectSpread(_objectSpread({}, appInfos), {}, {
      latestStrapiReleaseTag: tag_name,
      setUserDisplayName: setUserDisplayName,
      shouldUpdateStrapi: shouldUpdateStrapi,
      userDisplayName: userDisplayName
    })
  }, /*#__PURE__*/_react["default"].createElement(_RBACProvider["default"], {
    permissions: permissions,
    refetchPermissions: refetch
  }, /*#__PURE__*/_react["default"].createElement(_PluginsInitializer["default"], null)));
};

var _default = AuthenticatedApp;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/AuthenticatedApp/utils/api.js":
/*!*******************************************************************!*\
  !*** ./.cache/admin/src/components/AuthenticatedApp/utils/api.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fetchUserRoles = exports.fetchStrapiLatestRelease = exports.fetchCurrentUserPermissions = exports.fetchAppInfo = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _checkLatestStrapiVersion = _interopRequireDefault(__webpack_require__(/*! ./checkLatestStrapiVersion */ "./.cache/admin/src/components/AuthenticatedApp/utils/checkLatestStrapiVersion.js"));

var _utils = __webpack_require__(/*! ../../../core/utils */ "./.cache/admin/src/core/utils/index.js");

var _package = _interopRequireDefault(__webpack_require__(/*! ../../../../../package.json */ "./.cache/package.json"));

var strapiVersion = _package["default"].version;
var showUpdateNotif = !JSON.parse(localStorage.getItem('STRAPI_UPDATE_NOTIF'));

var fetchStrapiLatestRelease = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(toggleNotification) {
    var _yield$axios$get, tag_name, shouldUpdateStrapi;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios["default"].get('https://api.github.com/repos/strapi/strapi/releases/latest');

          case 3:
            _yield$axios$get = _context.sent;
            tag_name = _yield$axios$get.data.tag_name;
            shouldUpdateStrapi = (0, _checkLatestStrapiVersion["default"])(strapiVersion, tag_name);

            if (shouldUpdateStrapi && showUpdateNotif) {
              toggleNotification({
                type: 'info',
                message: {
                  id: 'notification.version.update.message'
                },
                link: {
                  url: "https://github.com/strapi/strapi/releases/tag/".concat(tag_name),
                  label: {
                    id: 'notification.version.update.link'
                  }
                },
                blockTransition: true,
                onClose: function onClose() {
                  return localStorage.setItem('STRAPI_UPDATE_NOTIF', true);
                }
              });
            }

            return _context.abrupt("return", tag_name);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", strapiVersion);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function fetchStrapiLatestRelease(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchStrapiLatestRelease = fetchStrapiLatestRelease;

var fetchAppInfo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var _yield$axiosInstance$, data, headers;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _utils.axiosInstance.get('/admin/information');

          case 3:
            _yield$axiosInstance$ = _context2.sent;
            data = _yield$axiosInstance$.data;
            headers = _yield$axiosInstance$.headers;

            if (headers['content-type'].includes('application/json')) {
              _context2.next = 8;
              break;
            }

            throw new Error('Not found');

          case 8:
            return _context2.abrupt("return", data.data);

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            throw new Error(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function fetchAppInfo() {
    return _ref2.apply(this, arguments);
  };
}();

exports.fetchAppInfo = fetchAppInfo;

var fetchCurrentUserPermissions = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var _yield$axiosInstance$2, data, headers;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _utils.axiosInstance.get('/admin/users/me/permissions');

          case 3:
            _yield$axiosInstance$2 = _context3.sent;
            data = _yield$axiosInstance$2.data;
            headers = _yield$axiosInstance$2.headers;

            if (headers['content-type'].includes('application/json')) {
              _context3.next = 8;
              break;
            }

            throw new Error('Not found');

          case 8:
            return _context3.abrupt("return", data.data);

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            throw new Error(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function fetchCurrentUserPermissions() {
    return _ref3.apply(this, arguments);
  };
}();

exports.fetchCurrentUserPermissions = fetchCurrentUserPermissions;

var fetchUserRoles = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var _yield$axiosInstance$3, roles;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _utils.axiosInstance.get('/admin/users/me');

          case 3:
            _yield$axiosInstance$3 = _context4.sent;
            roles = _yield$axiosInstance$3.data.data.roles;
            return _context4.abrupt("return", roles);

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            throw new Error(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function fetchUserRoles() {
    return _ref4.apply(this, arguments);
  };
}();

exports.fetchUserRoles = fetchUserRoles;

/***/ }),

/***/ "./.cache/admin/src/components/AuthenticatedApp/utils/checkLatestStrapiVersion.js":
/*!****************************************************************************************!*\
  !*** ./.cache/admin/src/components/AuthenticatedApp/utils/checkLatestStrapiVersion.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _semver = _interopRequireDefault(__webpack_require__(/*! semver */ "./node_modules/semver/semver.js"));

var checkLatestStrapiVersion = function checkLatestStrapiVersion(currentPackageVersion, latestPublishedVersion) {
  if (!_semver["default"].valid(currentPackageVersion) || !_semver["default"].valid(latestPublishedVersion)) {
    return false;
  }

  return _semver["default"].lt(currentPackageVersion, latestPublishedVersion);
};

var _default = checkLatestStrapiVersion;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Modal/components/Content.js":
/*!****************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Modal/components/Content.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var LiStyled = /*#__PURE__*/_styledComponents["default"].li.withConfig({
  displayName: "Content__LiStyled",
  componentId: "sc-1wjpbzg-0"
})(["list-style:disc;"]);

var Content = function Content(_ref) {
  var id = _ref.id,
      defaultMessage = _ref.defaultMessage;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 4,
    paddingBottom: 6
  }, formatMessage({
    id: id,
    defaultMessage: defaultMessage
  }, {
    documentationLink: function documentationLink(children) {
      return /*#__PURE__*/_react["default"].createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"
      }, children);
    },
    b: function b(children) {
      return /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
        fontWeight: "semiBold"
      }, children);
    },
    p: function p(children) {
      return /*#__PURE__*/_react["default"].createElement(_Typography.Typography, null, children);
    },
    light: function light(children) {
      return /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
        textColor: "neutral600"
      }, children);
    },
    ul: function ul(children) {
      return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
        paddingLeft: 6
      }, /*#__PURE__*/_react["default"].createElement("ul", null, children));
    },
    li: function li(children) {
      return /*#__PURE__*/_react["default"].createElement(LiStyled, null, children);
    }
  }));
};

Content.propTypes = {
  id: _propTypes["default"].string.isRequired,
  defaultMessage: _propTypes["default"].string.isRequired
};
var _default = Content;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Modal/components/Modal.js":
/*!**************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Modal/components/Modal.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Portal = __webpack_require__(/*! @strapi/design-system/Portal */ "./node_modules/@strapi/design-system/Portal.js");

var _FocusTrap = __webpack_require__(/*! @strapi/design-system/FocusTrap */ "./node_modules/@strapi/design-system/FocusTrap.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _IconButton = __webpack_require__(/*! @strapi/design-system/IconButton */ "./node_modules/@strapi/design-system/IconButton.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Cross = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Cross */ "./node_modules/@strapi/icons/Cross.js"));

var ModalWrapper = /*#__PURE__*/(0, _styledComponents["default"])(_Flex.Flex).withConfig({
  displayName: "Modal__ModalWrapper",
  componentId: "sc-1mxx2cs-0"
})(["position:fixed;z-index:4;inset:0;background:", ";"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.colors.neutral800, "33");
});

var Modal = function Modal(_ref2) {
  var onClose = _ref2.onClose,
      onSkip = _ref2.onSkip,
      children = _ref2.children,
      hideSkip = _ref2.hideSkip;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Portal.Portal, null, /*#__PURE__*/_react["default"].createElement(ModalWrapper, {
    onClick: onClose,
    padding: 8,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_FocusTrap.FocusTrap, {
    onEscape: onClose
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    background: "neutral0",
    width: (0, _helperPlugin.pxToRem)(660),
    shadow: "popupShadow",
    hasRadius: true,
    padding: 4,
    spacing: 8,
    role: "dialog",
    "aria-modal": true,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
    onClick: onClose,
    "aria-label": formatMessage({
      id: 'app.utils.close-label',
      defaultMessage: 'Close'
    }),
    icon: /*#__PURE__*/_react["default"].createElement(_Cross["default"], null)
  })), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: hideSkip ? 8 : 0
  }, children), !hideSkip && /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "tertiary",
    onClick: onSkip
  }, formatMessage({
    id: 'app.components.GuidedTour.skip',
    defaultMessage: 'Skip the tour'
  })))))));
};

Modal.propTypes = {
  children: _propTypes["default"].node.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onSkip: _propTypes["default"].func.isRequired,
  hideSkip: _propTypes["default"].bool.isRequired
};
var _default = Modal;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Modal/components/StepNumberWithPadding.js":
/*!******************************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Modal/components/StepNumberWithPadding.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _StepNumber = _interopRequireDefault(__webpack_require__(/*! ../../Stepper/StepNumber */ "./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js"));

var StepNumberWithPadding = function StepNumberWithPadding(_ref) {
  var number = _ref.number,
      last = _ref.last,
      type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 3,
    paddingBottom: last ? 0 : 3
  }, /*#__PURE__*/_react["default"].createElement(_StepNumber["default"], {
    number: number,
    type: type
  }));
};

StepNumberWithPadding.defaultProps = {
  number: undefined,
  last: false,
  type: ''
};
StepNumberWithPadding.propTypes = {
  number: _propTypes["default"].number,
  last: _propTypes["default"].bool,
  type: _propTypes["default"].string
};
var _default = StepNumberWithPadding;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Modal/components/Stepper.js":
/*!****************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Modal/components/Stepper.js ***!
  \****************************************************************************/
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

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _LinkButton = __webpack_require__(/*! @strapi/design-system/LinkButton */ "./node_modules/@strapi/design-system/LinkButton.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _ArrowRight = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/ArrowRight */ "./node_modules/@strapi/icons/ArrowRight.js"));

var _Content = _interopRequireDefault(__webpack_require__(/*! ./Content */ "./.cache/admin/src/components/GuidedTour/Modal/components/Content.js"));

var _StepLine = _interopRequireDefault(__webpack_require__(/*! ../../Stepper/StepLine */ "./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js"));

var _StepNumberWithPadding = _interopRequireDefault(__webpack_require__(/*! ./StepNumberWithPadding */ "./.cache/admin/src/components/GuidedTour/Modal/components/StepNumberWithPadding.js"));

var _constants = __webpack_require__(/*! ../../constants */ "./.cache/admin/src/components/GuidedTour/constants.js");

var StepperModal = function StepperModal(_ref) {
  var title = _ref.title,
      content = _ref.content,
      cta = _ref.cta,
      onCtaClick = _ref.onCtaClick,
      sectionIndex = _ref.sectionIndex,
      stepIndex = _ref.stepIndex,
      hasSectionAfter = _ref.hasSectionAfter;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var hasSectionBefore = sectionIndex > 0;
  var hasStepsBefore = stepIndex > 0;
  var nextSectionIndex = sectionIndex + 1;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "stretch"
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    marginRight: 8,
    justifyContent: "center",
    minWidth: (0, _helperPlugin.pxToRem)(30)
  }, hasSectionBefore && /*#__PURE__*/_react["default"].createElement(_StepLine["default"], {
    type: _constants.IS_DONE,
    minHeight: (0, _helperPlugin.pxToRem)(24)
  })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "sigma",
    textColor: "primary600"
  }, formatMessage({
    id: 'app.components.GuidedTour.title',
    defaultMessage: '3 steps to get started'
  }))), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, null, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    marginRight: 8,
    minWidth: (0, _helperPlugin.pxToRem)(30)
  }, /*#__PURE__*/_react["default"].createElement(_StepNumberWithPadding["default"], {
    number: sectionIndex + 1,
    type: hasStepsBefore ? _constants.IS_DONE : _constants.IS_ACTIVE
  })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "alpha",
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h3",
    id: "title"
  }, formatMessage(title))), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "stretch"
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    marginRight: 8,
    direction: "column",
    justifyContent: "center",
    minWidth: (0, _helperPlugin.pxToRem)(30)
  }, hasSectionAfter && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_StepLine["default"], {
    type: _constants.IS_DONE
  }), hasStepsBefore && /*#__PURE__*/_react["default"].createElement(_StepNumberWithPadding["default"], {
    number: nextSectionIndex + 1,
    type: _constants.IS_ACTIVE,
    last: true
  }))), /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_Content["default"], content), cta && (cta.target ? /*#__PURE__*/_react["default"].createElement(_LinkButton.LinkButton, {
    endIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], null),
    onClick: onCtaClick,
    to: cta.target
  }, formatMessage(cta.title)) : /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    endIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], null),
    onClick: onCtaClick
  }, formatMessage(cta.title))))), hasStepsBefore && hasSectionAfter && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 3
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    marginRight: 8,
    justifyContent: "center",
    width: (0, _helperPlugin.pxToRem)(30)
  }, /*#__PURE__*/_react["default"].createElement(_StepLine["default"], {
    type: _constants.IS_DONE,
    minHeight: (0, _helperPlugin.pxToRem)(24)
  }))));
};

StepperModal.defaultProps = {
  currentStep: null,
  cta: undefined
};
StepperModal.propTypes = {
  sectionIndex: _propTypes["default"].number.isRequired,
  stepIndex: _propTypes["default"].number.isRequired,
  hasSectionAfter: _propTypes["default"].bool.isRequired,
  content: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    defaultMessage: _propTypes["default"].string.isRequired
  }).isRequired,
  cta: _propTypes["default"].shape({
    target: _propTypes["default"].string,
    title: _propTypes["default"].shape({
      id: _propTypes["default"].string.isRequired,
      defaultMessage: _propTypes["default"].string.isRequired
    })
  }),
  currentStep: _propTypes["default"].string,
  onCtaClick: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    defaultMessage: _propTypes["default"].string.isRequired
  }).isRequired
};
var _default = StepperModal;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Modal/index.js":
/*!***************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Modal/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _at5 = _interopRequireDefault(__webpack_require__(/*! lodash/at */ "./node_modules/lodash/at.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _layout = _interopRequireDefault(__webpack_require__(/*! ../layout */ "./.cache/admin/src/components/GuidedTour/layout.js"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! ./components/Modal */ "./.cache/admin/src/components/GuidedTour/Modal/components/Modal.js"));

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/components/GuidedTour/Modal/reducer.js"));

var _Stepper = _interopRequireDefault(__webpack_require__(/*! ./components/Stepper */ "./.cache/admin/src/components/GuidedTour/Modal/components/Stepper.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GuidedTourModal = function GuidedTourModal() {
  var _useGuidedTour = (0, _helperPlugin.useGuidedTour)(),
      currentStep = _useGuidedTour.currentStep,
      guidedTourState = _useGuidedTour.guidedTourState,
      setCurrentStep = _useGuidedTour.setCurrentStep,
      setStepState = _useGuidedTour.setStepState,
      isGuidedTourVisible = _useGuidedTour.isGuidedTourVisible,
      setSkipped = _useGuidedTour.setSkipped;

  var _useState = (0, _react.useState)(currentStep),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      stepContent = _useReducer2$.stepContent,
      sectionIndex = _useReducer2$.sectionIndex,
      stepIndex = _useReducer2$.stepIndex,
      hasSectionAfter = _useReducer2$.hasSectionAfter,
      hasStepAfter = _useReducer2$.hasStepAfter,
      dispatch = _useReducer2[1];

  var _useTracking = (0, _helperPlugin.useTracking)(),
      trackUsage = _useTracking.trackUsage;

  (0, _react.useEffect)(function () {
    if (!currentStep) {
      setIsVisible(false);
      return;
    }

    var _at = (0, _at5["default"])(guidedTourState, currentStep),
        _at2 = (0, _slicedToArray2["default"])(_at, 1),
        isStepDone = _at2[0];

    setIsVisible(!isStepDone && isGuidedTourVisible);
  }, [currentStep, guidedTourState, isGuidedTourVisible]);
  (0, _react.useEffect)(function () {
    if (currentStep) {
      var _at3 = (0, _at5["default"])(_layout["default"], currentStep),
          _at4 = (0, _slicedToArray2["default"])(_at3, 1),
          content = _at4[0];

      var sectionKeys = Object.keys(guidedTourState);

      var _currentStep$split = currentStep.split('.'),
          _currentStep$split2 = (0, _slicedToArray2["default"])(_currentStep$split, 2),
          sectionName = _currentStep$split2[0],
          stepName = _currentStep$split2[1];

      var newSectionIndex = sectionKeys.indexOf(sectionName);
      var newStepIndex = Object.keys(guidedTourState[sectionName]).indexOf(stepName);
      var newHasSectionAfter = newSectionIndex < sectionKeys.length - 1;
      var newHasStepAfter = newStepIndex < Object.keys(guidedTourState[sectionName]).length - 1;
      dispatch({
        type: 'UPDATE_MODAL',
        content: content,
        newSectionIndex: newSectionIndex,
        newStepIndex: newStepIndex,
        newHasSectionAfter: newHasSectionAfter,
        newHasStepAfter: newHasStepAfter
      });
    }
  }, [currentStep, guidedTourState]);

  var handleCtaClick = function handleCtaClick() {
    setStepState(currentStep, true);
    trackUsage(stepContent.trackingEvent);
    setCurrentStep(null);
  };

  var handleSkip = function handleSkip() {
    setSkipped(true);
    setCurrentStep(null);
    trackUsage('didSkipGuidedtour');
  };

  if (isVisible && stepContent) {
    return /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
      hideSkip: !hasStepAfter && !hasSectionAfter,
      onSkip: handleSkip,
      onClose: handleCtaClick
    }, /*#__PURE__*/_react["default"].createElement(_Stepper["default"], (0, _extends2["default"])({}, stepContent, {
      onCtaClick: handleCtaClick,
      currentStep: currentStep,
      sectionIndex: sectionIndex,
      stepIndex: stepIndex,
      hasSectionAfter: hasSectionAfter
    })));
  }

  return null;
};

var _default = GuidedTourModal;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Modal/reducer.js":
/*!*****************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Modal/reducer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

/* eslint-disable consistent-return */
var initialState = {
  stepContent: null,
  sectionIndex: null,
  stepIndex: null,
  hasSectionAfter: false,
  hasStepAfter: false
};
exports.initialState = initialState;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer["default"])(state, function (draftState) {
    switch (action.type) {
      case 'UPDATE_MODAL':
        {
          draftState.stepContent = action.content;
          draftState.sectionIndex = action.newSectionIndex;
          draftState.stepIndex = action.newStepIndex;
          draftState.hasSectionAfter = action.newHasSectionAfter;
          draftState.hasStepAfter = action.newHasStepAfter;
          break;
        }

      default:
        {
          return draftState;
        }
    }
  });
};

var _default = reducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js":
/*!********************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _constants = __webpack_require__(/*! ../constants */ "./.cache/admin/src/components/GuidedTour/constants.js");

var _excluded = ["type"];

var StepLine = function StepLine(_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, (0, _extends2["default"])({
    width: (0, _helperPlugin.pxToRem)(2),
    height: "100%",
    background: type === _constants.IS_NOT_DONE ? 'neutral300' : 'primary500',
    hasRadius: true
  }, props));
};

StepLine.defaultProps = {
  type: _constants.IS_NOT_DONE
};
StepLine.propTypes = {
  type: _propTypes["default"].oneOf([_constants.IS_ACTIVE, _constants.IS_DONE, _constants.IS_NOT_DONE])
};
var _default = StepLine;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js":
/*!**********************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Icon = __webpack_require__(/*! @strapi/design-system/Icon */ "./node_modules/@strapi/design-system/Icon.js");

var _Check = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Check */ "./node_modules/@strapi/icons/Check.js"));

var _constants = __webpack_require__(/*! ../constants */ "./.cache/admin/src/components/GuidedTour/constants.js");

var StepNumber = function StepNumber(_ref) {
  var type = _ref.type,
      number = _ref.number;

  if (type === _constants.IS_DONE) {
    return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
      background: "primary600",
      padding: 2,
      borderRadius: "50%",
      width: (0, _helperPlugin.pxToRem)(30),
      height: (0, _helperPlugin.pxToRem)(30),
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
      as: _Check["default"],
      "aria-hidden": true,
      width: (0, _helperPlugin.pxToRem)(16),
      color: "neutral0"
    }));
  }

  if (type === _constants.IS_ACTIVE) {
    return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
      background: "primary600",
      padding: 2,
      borderRadius: "50%",
      width: (0, _helperPlugin.pxToRem)(30),
      height: (0, _helperPlugin.pxToRem)(30),
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      fontWeight: "semiBold",
      textColor: "neutral0"
    }, number));
  }

  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    borderColor: "neutral500",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: 2,
    borderRadius: "50%",
    width: (0, _helperPlugin.pxToRem)(30),
    height: (0, _helperPlugin.pxToRem)(30),
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    fontWeight: "semiBold",
    textColor: "neutral600"
  }, number));
};

StepNumber.defaultProps = {
  number: undefined,
  type: _constants.IS_NOT_DONE
};
StepNumber.propTypes = {
  number: _propTypes["default"].number,
  type: _propTypes["default"].oneOf([_constants.IS_ACTIVE, _constants.IS_DONE, _constants.IS_NOT_DONE])
};
var _default = StepNumber;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/constants.js":
/*!*************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/constants.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.IS_NOT_DONE = exports.IS_DONE = exports.IS_ACTIVE = void 0;
var IS_ACTIVE = 'isActive';
exports.IS_ACTIVE = IS_ACTIVE;
var IS_DONE = 'isDone';
exports.IS_DONE = IS_DONE;
var IS_NOT_DONE = 'isNotDone';
exports.IS_NOT_DONE = IS_NOT_DONE;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/layout.js":
/*!**********************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/layout.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var layout = {
  contentTypeBuilder: {
    home: {
      title: {
        id: 'app.components.GuidedTour.home.CTB.title',
        defaultMessage: '🧠 Build the content structure'
      },
      cta: {
        title: {
          id: 'app.components.GuidedTour.home.CTB.cta.title',
          defaultMessage: 'Go to the Content type Builder'
        },
        type: 'REDIRECT',
        target: '/plugins/content-type-builder'
      },
      trackingEvent: 'didClickGuidedTourHomepageContentTypeBuilder'
    },
    create: {
      title: {
        id: 'app.components.GuidedTour.CTB.create.title',
        defaultMessage: '🧠 Create a first Collection type'
      },
      content: {
        id: 'app.components.GuidedTour.CTB.create.content',
        defaultMessage: '<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>'
      },
      cta: {
        title: {
          id: 'app.components.GuidedTour.CTB.create.cta.title',
          defaultMessage: 'Build a Collection type'
        },
        type: 'CLOSE'
      },
      trackingEvent: 'didClickGuidedTourStep1CollectionType'
    },
    success: {
      title: {
        id: 'app.components.GuidedTour.CTB.success.title',
        defaultMessage: 'Step 1: Completed ✅'
      },
      content: {
        id: 'app.components.GuidedTour.CTB.success.content',
        defaultMessage: '<p>Good going!</p><b>⚡️ What would you like to share with the world?</b>'
      },
      cta: {
        title: {
          id: 'app.components.GuidedTour.create-content',
          defaultMessage: 'Create content'
        },
        type: 'REDIRECT',
        target: '/content-manager'
      },
      trackingEvent: 'didCreateGuidedTourCollectionType'
    }
  },
  contentManager: {
    home: {
      title: {
        id: 'app.components.GuidedTour.home.CM.title',
        defaultMessage: '⚡️ What would you like to share with the world?'
      },
      cta: {
        title: {
          id: 'app.components.GuidedTour.create-content',
          defaultMessage: 'Create content'
        },
        type: 'REDIRECT',
        target: '/content-manager'
      },
      trackingEvent: 'didClickGuidedTourHomepageContentManager'
    },
    create: {
      title: {
        id: 'app.components.GuidedTour.CM.create.title',
        defaultMessage: '⚡️ Create content'
      },
      content: {
        id: 'app.components.GuidedTour.CM.create.content',
        defaultMessage: "<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>💡 Quick tip - Don't forget to hit publish on the content you create.</p>"
      },
      cta: {
        title: {
          id: 'app.components.GuidedTour.create-content',
          defaultMessage: 'Create content'
        },
        type: 'CLOSE'
      },
      trackingEvent: 'didClickGuidedTourStep2ContentManager'
    },
    success: {
      title: {
        id: 'app.components.GuidedTour.CM.success.title',
        defaultMessage: 'Step 2: Completed ✅'
      },
      content: {
        id: 'app.components.GuidedTour.CM.success.content',
        defaultMessage: '<p>Awesome, one last step to go!</p><b>🚀  See content in action</b>'
      },
      cta: {
        title: {
          id: 'app.components.GuidedTour.CM.success.cta.title',
          defaultMessage: 'Test the API'
        },
        type: 'REDIRECT',
        target: '/settings/api-tokens'
      },
      trackingEvent: 'didCreateGuidedTourEntry'
    }
  },
  apiTokens: {
    home: {
      title: {
        id: 'app.components.GuidedTour.apiTokens.create.title',
        defaultMessage: '🚀 See content in action'
      },
      cta: {
        title: {
          id: 'app.components.GuidedTour.home.apiTokens.cta.title',
          defaultMessage: 'Test the API'
        },
        type: 'REDIRECT',
        target: '/settings/api-tokens'
      },
      trackingEvent: 'didClickGuidedTourHomepageApiTokens'
    },
    create: {
      title: {
        id: 'app.components.GuidedTour.apiTokens.create.title',
        defaultMessage: '🚀 See content in action'
      },
      content: {
        id: 'app.components.GuidedTour.apiTokens.create.content',
        defaultMessage: '<p>Generate an authentication token here and retrieve the content you just created.</p>'
      },
      cta: {
        title: {
          id: 'app.components.GuidedTour.apiTokens.create.cta.title',
          defaultMessage: 'Generate an API Token'
        },
        type: 'CLOSE'
      },
      trackingEvent: 'didClickGuidedTourStep3ApiTokens'
    },
    success: {
      title: {
        id: 'app.components.GuidedTour.apiTokens.success.title',
        defaultMessage: 'Step 3: Completed ✅'
      },
      content: {
        id: 'app.components.GuidedTour.apiTokens.success.content',
        defaultMessage: "<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"
      },
      trackingEvent: 'didGenerateGuidedTourApiTokens'
    }
  }
};
var _default = layout;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/LeftMenu/index.js":
/*!*******************************************************!*\
  !*** ./.cache/admin/src/components/LeftMenu/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _Divider = __webpack_require__(/*! @strapi/design-system/Divider */ "./node_modules/@strapi/design-system/Divider.js");

var _MainNav = __webpack_require__(/*! @strapi/design-system/MainNav */ "./node_modules/@strapi/design-system/MainNav.js");

var _FocusTrap = __webpack_require__(/*! @strapi/design-system/FocusTrap */ "./node_modules/@strapi/design-system/FocusTrap.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Write = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Write */ "./node_modules/@strapi/icons/Write.js"));

var _Exit = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Exit */ "./node_modules/@strapi/icons/Exit.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _useConfigurations2 = _interopRequireDefault(__webpack_require__(/*! ../../hooks/useConfigurations */ "./.cache/admin/src/hooks/useConfigurations/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LinkUserWrapper = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "LeftMenu__LinkUserWrapper",
  componentId: "sc-d3fut-0"
})(["width:", "rem;position:absolute;bottom:", ";left:", ";"], 150 / 16, function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[9];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[5];
});
var LinkUser = /*#__PURE__*/(0, _styledComponents["default"])(_reactRouterDom.NavLink).withConfig({
  displayName: "LeftMenu__LinkUser",
  componentId: "sc-d3fut-1"
})(["display:flex;justify-content:space-between;align-items:center;text-decoration:none;padding:", ";border-radius:", ";&:hover{background:", ";text-decoration:none;}svg{path{fill:", ";}}"], function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.spaces[2], " ").concat(theme.spaces[4]);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spaces[1];
}, function (_ref5) {
  var theme = _ref5.theme,
      logout = _ref5.logout;
  return logout ? theme.colors.danger100 : theme.colors.primary100;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.danger600;
});

var LeftMenu = function LeftMenu(_ref7) {
  var generalSectionLinks = _ref7.generalSectionLinks,
      pluginsSectionLinks = _ref7.pluginsSectionLinks;
  var buttonRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      userLinksVisible = _useState2[0],
      setUserLinksVisible = _useState2[1];

  var _useConfigurations = (0, _useConfigurations2["default"])(),
      menuLogo = _useConfigurations.menuLogo;

  var _usePersistentState = (0, _helperPlugin.usePersistentState)('navbar-condensed', false),
      _usePersistentState2 = (0, _slicedToArray2["default"])(_usePersistentState, 2),
      condensed = _usePersistentState2[0],
      setCondensed = _usePersistentState2[1];

  var _useAppInfos = (0, _helperPlugin.useAppInfos)(),
      userDisplayName = _useAppInfos.userDisplayName;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var initials = userDisplayName.split(' ').map(function (name) {
    return name.substring(0, 1);
  }).join('').substring(0, 2);

  var handleToggleUserLinks = function handleToggleUserLinks() {
    return setUserLinksVisible(function (prev) {
      return !prev;
    });
  };

  var handleLogout = function handleLogout() {
    _helperPlugin.auth.clearAppStorage();

    handleToggleUserLinks();
  };

  var handleBlur = function handleBlur(e) {
    var _e$relatedTarget, _e$relatedTarget$pare;

    if (!e.currentTarget.contains(e.relatedTarget) && ((_e$relatedTarget = e.relatedTarget) === null || _e$relatedTarget === void 0 ? void 0 : (_e$relatedTarget$pare = _e$relatedTarget.parentElement) === null || _e$relatedTarget$pare === void 0 ? void 0 : _e$relatedTarget$pare.id) !== 'main-nav-user-button') {
      setUserLinksVisible(false);
    }
  };

  var menuTitle = formatMessage({
    id: 'app.components.LeftMenu.navbrand.title',
    defaultMessage: 'Strapi Dashboard'
  });
  return /*#__PURE__*/_react["default"].createElement(_MainNav.MainNav, {
    condensed: condensed
  }, /*#__PURE__*/_react["default"].createElement(_MainNav.NavBrand, {
    workplace: formatMessage({
      id: 'app.components.LeftMenu.navbrand.workplace',
      defaultMessage: 'Workplace'
    }),
    title: menuTitle,
    icon: /*#__PURE__*/_react["default"].createElement("img", {
      src: menuLogo,
      alt: menuTitle
    })
  }), /*#__PURE__*/_react["default"].createElement(_Divider.Divider, null), /*#__PURE__*/_react["default"].createElement(_MainNav.NavSections, null, /*#__PURE__*/_react["default"].createElement(_MainNav.NavLink, {
    to: "/content-manager",
    icon: /*#__PURE__*/_react["default"].createElement(_Write["default"], null)
  }, formatMessage({
    id: 'content-manager.plugin.name',
    defaultMessage: 'Content manager'
  })), pluginsSectionLinks.length > 0 ? /*#__PURE__*/_react["default"].createElement(_MainNav.NavSection, {
    label: "Plugins"
  }, pluginsSectionLinks.map(function (link) {
    var Icon = link.icon;
    return /*#__PURE__*/_react["default"].createElement(_MainNav.NavLink, {
      to: link.to,
      key: link.to,
      icon: /*#__PURE__*/_react["default"].createElement(Icon, null)
    }, formatMessage(link.intlLabel));
  })) : null, generalSectionLinks.length > 0 ? /*#__PURE__*/_react["default"].createElement(_MainNav.NavSection, {
    label: "General"
  }, generalSectionLinks.map(function (link) {
    var LinkIcon = link.icon;
    return /*#__PURE__*/_react["default"].createElement(_MainNav.NavLink, {
      badgeContent: link.notificationsCount > 0 && link.notificationsCount.toString() || undefined,
      to: link.to,
      key: link.to,
      icon: /*#__PURE__*/_react["default"].createElement(LinkIcon, null)
    }, formatMessage(link.intlLabel));
  })) : null), /*#__PURE__*/_react["default"].createElement(_MainNav.NavUser, {
    id: "main-nav-user-button",
    ref: buttonRef,
    onClick: handleToggleUserLinks,
    initials: initials
  }, userDisplayName), userLinksVisible && /*#__PURE__*/_react["default"].createElement(LinkUserWrapper, {
    onBlur: handleBlur,
    padding: 1,
    shadow: "tableShadow",
    background: "neutral0",
    hasRadius: true
  }, /*#__PURE__*/_react["default"].createElement(_FocusTrap.FocusTrap, {
    onEscape: handleToggleUserLinks
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 0
  }, /*#__PURE__*/_react["default"].createElement(LinkUser, {
    tabIndex: 0,
    onClick: handleToggleUserLinks,
    to: "/me"
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, null, formatMessage({
    id: 'app.components.LeftMenu.profile',
    defaultMessage: 'Profile'
  }))), /*#__PURE__*/_react["default"].createElement(LinkUser, {
    tabIndex: 0,
    onClick: handleLogout,
    logout: "logout",
    to: "/auth/login"
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    textColor: "danger600"
  }, formatMessage({
    id: 'app.components.LeftMenu.logout',
    defaultMessage: 'Logout'
  })), /*#__PURE__*/_react["default"].createElement(_Exit["default"], null))))), /*#__PURE__*/_react["default"].createElement(_MainNav.NavCondense, {
    onClick: function onClick() {
      return setCondensed(function (s) {
        return !s;
      });
    }
  }, condensed ? formatMessage({
    id: 'app.components.LeftMenu.expand',
    defaultMessage: 'Expand the navbar'
  }) : formatMessage({
    id: 'app.components.LeftMenu.collapse',
    defaultMessage: 'Collapse the navbar'
  })));
};

LeftMenu.propTypes = {
  generalSectionLinks: _propTypes["default"].array.isRequired,
  pluginsSectionLinks: _propTypes["default"].array.isRequired
};
var _default = LeftMenu;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/PluginsInitializer/index.js":
/*!*****************************************************************!*\
  !*** ./.cache/admin/src/components/PluginsInitializer/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Admin = _interopRequireDefault(__webpack_require__(/*! ../../pages/Admin */ "./.cache/admin/src/pages/Admin/index.js"));

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./.cache/admin/src/components/PluginsInitializer/init.js"));

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/components/PluginsInitializer/reducer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PluginsInitializer = function PluginsInitializer() {
  var _useStrapiApp = (0, _helperPlugin.useStrapiApp)(),
      appPlugins = _useStrapiApp.plugins;

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState, function () {
    return (0, _init["default"])(appPlugins);
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      plugins = _useReducer2[0].plugins,
      dispatch = _useReducer2[1];

  var setPlugin = (0, _react.useRef)(function (pluginId) {
    dispatch({
      type: 'SET_PLUGIN_READY',
      pluginId: pluginId
    });
  });
  var hasApluginNotReady = Object.keys(plugins).some(function (plugin) {
    return plugins[plugin].isReady === false;
  });

  if (hasApluginNotReady) {
    var initializers = Object.keys(plugins).reduce(function (acc, current) {
      var InitializerComponent = plugins[current].initializer;

      if (InitializerComponent) {
        var key = plugins[current].pluginId;
        acc.push( /*#__PURE__*/_react["default"].createElement(InitializerComponent, {
          key: key,
          setPlugin: setPlugin.current
        }));
      }

      return acc;
    }, []);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, initializers, /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null));
  }

  return /*#__PURE__*/_react["default"].createElement(_Admin["default"], null);
};

var _default = PluginsInitializer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/PluginsInitializer/init.js":
/*!****************************************************************!*\
  !*** ./.cache/admin/src/components/PluginsInitializer/init.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var init = function init(plugins) {
  return {
    plugins: Object.keys(plugins).reduce(function (acc, current) {
      acc[current] = _objectSpread({}, plugins[current]);
      return acc;
    }, {})
  };
};

var _default = init;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/PluginsInitializer/reducer.js":
/*!*******************************************************************!*\
  !*** ./.cache/admin/src/components/PluginsInitializer/reducer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js"));

var initialState = {
  plugins: null
};
exports.initialState = initialState;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (
    /* eslint-disable-next-line consistent-return */
    (0, _immer["default"])(state, function (draftState) {
      switch (action.type) {
        case 'SET_PLUGIN_READY':
          {
            (0, _set["default"])(draftState, ['plugins', action.pluginId, 'isReady'], true);
            break;
          }

        default:
          return draftState;
      }
    })
  );
};

var _default = reducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/RBACProvider/actions.js":
/*!*************************************************************!*\
  !*** ./.cache/admin/src/components/RBACProvider/actions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setPermissions = exports.resetStore = void 0;

var _constants = __webpack_require__(/*! ./constants */ "./.cache/admin/src/components/RBACProvider/constants.js");

var resetStore = function resetStore() {
  return {
    type: _constants.RESET_STORE
  };
};

exports.resetStore = resetStore;

var setPermissions = function setPermissions(permissions) {
  return {
    type: _constants.SET_PERMISSIONS,
    permissions: permissions
  };
};

exports.setPermissions = setPermissions;

/***/ }),

/***/ "./.cache/admin/src/components/RBACProvider/index.js":
/*!***********************************************************!*\
  !*** ./.cache/admin/src/components/RBACProvider/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./src/admin/node_modules/react-redux/lib/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _actions = __webpack_require__(/*! ./actions */ "./.cache/admin/src/components/RBACProvider/actions.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RBACProvider = function RBACProvider(_ref) {
  var children = _ref.children,
      permissions = _ref.permissions,
      refetchPermissions = _ref.refetchPermissions;

  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
    return state.rbacProvider;
  }),
      allPermissions = _useSelector.allPermissions;

  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    dispatch((0, _actions.setPermissions)(permissions));
    return function () {
      dispatch((0, _actions.resetStore)());
    };
  }, [permissions, dispatch]);

  if (!allPermissions) {
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.RBACProviderContext.Provider, {
    value: {
      allPermissions: allPermissions,
      refetchPermissions: refetchPermissions
    }
  }, children);
};

RBACProvider.propTypes = {
  children: _propTypes["default"].element.isRequired,
  permissions: _propTypes["default"].array.isRequired,
  refetchPermissions: _propTypes["default"].func.isRequired
};
var _default = RBACProvider;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/layouts/AppLayout/index.js":
/*!*****************************************************!*\
  !*** ./.cache/admin/src/layouts/AppLayout/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var FlexBox = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "AppLayout__FlexBox",
  componentId: "sc-116lvdi-0"
})(["flex:1;"]);

var AppLayout = function AppLayout(_ref) {
  var children = _ref.children,
      sideNav = _ref.sideNav;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    background: "neutral100"
  }, /*#__PURE__*/_react["default"].createElement(_Main.SkipToContent, null, formatMessage({
    id: 'skipToContent',
    defaultMessage: 'Skip to content'
  })), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "flex-start"
  }, sideNav, /*#__PURE__*/_react["default"].createElement(FlexBox, null, children)));
};

AppLayout.propTypes = {
  children: _propTypes["default"].node.isRequired,
  sideNav: _propTypes["default"].node.isRequired
};
var _default = AppLayout;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/Admin/Onboarding/index.js":
/*!**********************************************************!*\
  !*** ./.cache/admin/src/pages/Admin/Onboarding/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _freeSolidSvgIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./src/admin/node_modules/@fortawesome/free-solid-svg-icons/index.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _FocusTrap = __webpack_require__(/*! @strapi/design-system/FocusTrap */ "./node_modules/@strapi/design-system/FocusTrap.js");

var _hooks = __webpack_require__(/*! ../../../hooks */ "./.cache/admin/src/hooks/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OnboardingWrapper = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "Onboarding__OnboardingWrapper",
  componentId: "sc-1rm9k8f-0"
})(["position:fixed;bottom:", ";right:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[2];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[2];
});

var Button = /*#__PURE__*/_styledComponents["default"].button.withConfig({
  displayName: "Onboarding__Button",
  componentId: "sc-1rm9k8f-1"
})(["width:", ";height:", ";background:", ";box-shadow:", ";border-radius:50%;svg{color:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[8];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spaces[8];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary600;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.shadows.tableShadow;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.neutral0;
});

var LinksWrapper = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "Onboarding__LinksWrapper",
  componentId: "sc-1rm9k8f-2"
})(["position:absolute;bottom:", ";right:0;width:", "rem;"], function (_ref8) {
  var theme = _ref8.theme;
  return "".concat(theme.spaces[9]);
}, 200 / 16);

var StyledLink = /*#__PURE__*/_styledComponents["default"].a.withConfig({
  displayName: "Onboarding__StyledLink",
  componentId: "sc-1rm9k8f-3"
})(["display:flex;align-items:center;text-decoration:none;padding:", ";padding-left:", ";svg{color:", ";margin-right:", ";}&:hover{background:", ";color:", ";svg{color:", ";}", "{color:", ";}}", "{color:", ";}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.spaces[2];
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.spaces[5];
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.neutral600;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.spaces[2];
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.neutral100;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.neutral500;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.neutral700;
}, [_Typography.Typography], function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.neutral700;
}, [_Typography.Typography], function (_ref17) {
  var theme = _ref17.theme;
  return theme.colors.neutral600;
});

var Onboarding = function Onboarding() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useConfigurations = (0, _hooks.useConfigurations)(),
      showTutorials = _useConfigurations.showTutorials;

  if (!showTutorials) {
    return null;
  }

  var staticLinks = [{
    icon: 'book',
    label: formatMessage({
      id: 'app.components.LeftMenuFooter.documentation',
      defaultMessage: 'Documentation'
    }),
    destination: 'https://docs.strapi.io'
  }, {
    icon: 'file',
    label: formatMessage({
      id: 'app.static.links.cheatsheet',
      defaultMessage: 'CheatSheet'
    }),
    destination: 'https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf'
  }];

  var handleClick = function handleClick() {
    setIsOpen(function (prev) {
      return !prev;
    });
  };

  return /*#__PURE__*/_react["default"].createElement(OnboardingWrapper, {
    as: "aside"
  }, /*#__PURE__*/_react["default"].createElement(Button, {
    id: "onboarding",
    "aria-label": formatMessage({
      id: 'app.components.Onboarding.help.button',
      defaultMessage: 'Help button'
    }),
    onClick: handleClick
  }, !isOpen && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faQuestion
  }), isOpen && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimes
  })), isOpen && /*#__PURE__*/_react["default"].createElement(_FocusTrap.FocusTrap, {
    onEscape: handleClick
  }, /*#__PURE__*/_react["default"].createElement(LinksWrapper, {
    background: "neutral0",
    hasRadius: true,
    shadow: "tableShadow",
    paddingBottom: 2,
    paddingTop: 2
  }, staticLinks.map(function (link) {
    return /*#__PURE__*/_react["default"].createElement(StyledLink, {
      key: link.label,
      rel: "nofollow noreferrer noopener",
      target: "_blank",
      href: link.destination
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: link.icon
    }), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, null, link.label));
  }))));
};

var _default = Onboarding;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/Admin/index.js":
/*!***********************************************!*\
  !*** ./.cache/admin/src/pages/Admin/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTrackUsage = exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactDnd = __webpack_require__(/*! react-dnd */ "./src/admin/node_modules/react-dnd/dist/cjs/index.js");

var _reactDndHtml5Backend = __webpack_require__(/*! react-dnd-html5-backend */ "./src/admin/node_modules/react-dnd-html5-backend/dist/cjs/index.js");

var _LeftMenu = _interopRequireDefault(__webpack_require__(/*! ../../components/LeftMenu */ "./.cache/admin/src/components/LeftMenu/index.js"));

var _AppLayout = _interopRequireDefault(__webpack_require__(/*! ../../layouts/AppLayout */ "./.cache/admin/src/layouts/AppLayout/index.js"));

var _hooks = __webpack_require__(/*! ../../hooks */ "./.cache/admin/src/hooks/index.js");

var _Onboarding = _interopRequireDefault(__webpack_require__(/*! ./Onboarding */ "./.cache/admin/src/pages/Admin/Onboarding/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./.cache/admin/src/utils/index.js");

var _Modal = _interopRequireDefault(__webpack_require__(/*! ../../components/GuidedTour/Modal */ "./.cache/admin/src/components/GuidedTour/Modal/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 * Admin
 *
 */
// Components from @strapi/helper-plugin
var CM = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.all(/*! import() | content-manager */[__webpack_require__.e("vendors-node_modules_match-sorter_dist_match-sorter_cjs_js"), __webpack_require__.e("vendors-node_modules_strapi_design-system_SubNav_js"), __webpack_require__.e("vendors-node_modules_strapi_design-system_Accordion_js-node_modules_strapi_icons_ArrowLeft_js-09897a"), __webpack_require__.e("vendors-node_modules_strapi_icons_Boolean_js-node_modules_strapi_icons_Component_js-node_modu-8d66e5"), __webpack_require__.e("vendors-node_modules_strapi_design-system_Avatar_js-node_modules_strapi_design-system_BaseBut-dd0192"), __webpack_require__.e("content-manager")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../content-manager/pages/App */ "./.cache/admin/src/content-manager/pages/App/index.js"));
});
var HomePage = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.all(/*! import() | Admin_homePage */[__webpack_require__.e("vendors-node_modules_strapi_icons_CodeSquare_js-node_modules_strapi_icons_Discord_js-node_mod-54c53b"), __webpack_require__.e("Admin_homePage")]).then(__webpack_require__.bind(__webpack_require__, /*! ../HomePage */ "./.cache/admin/src/pages/HomePage/index.js"));
});
var InstalledPluginsPage = /*#__PURE__*/(0, _react.lazy)(function () {
  return __webpack_require__.e(/*! import() | Admin_pluginsPage */ "Admin_pluginsPage").then(__webpack_require__.bind(__webpack_require__, /*! ../InstalledPluginsPage */ "./.cache/admin/src/pages/InstalledPluginsPage/index.js"));
});
var MarketplacePage = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.all(/*! import() | Admin_marketplace */[__webpack_require__.e("vendors-node_modules_match-sorter_dist_match-sorter_cjs_js"), __webpack_require__.e("Admin_marketplace")]).then(__webpack_require__.bind(__webpack_require__, /*! ../MarketplacePage */ "./.cache/admin/src/pages/MarketplacePage/index.js"));
});
var NotFoundPage = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../NotFoundPage */ "./.cache/admin/src/pages/NotFoundPage/index.js"));
});
var InternalErrorPage = /*#__PURE__*/(0, _react.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "_cache_admin_src_pages_InternalErrorPage_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../InternalErrorPage */ "./.cache/admin/src/pages/InternalErrorPage/index.js"));
});
var ProfilePage = /*#__PURE__*/(0, _react.lazy)(function () {
  return __webpack_require__.e(/*! import() | Admin_profilePage */ "Admin_profilePage").then(__webpack_require__.bind(__webpack_require__, /*! ../ProfilePage */ "./.cache/admin/src/pages/ProfilePage/index.js"));
});
var SettingsPage = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.all(/*! import() | Admin_settingsPage */[__webpack_require__.e("vendors-node_modules_strapi_design-system_SubNav_js"), __webpack_require__.e("Admin_settingsPage")]).then(__webpack_require__.bind(__webpack_require__, /*! ../SettingsPage */ "./.cache/admin/src/pages/SettingsPage/index.js"));
}); // Simple hook easier for testing

var useTrackUsage = function useTrackUsage() {
  var _useTracking = (0, _helperPlugin.useTracking)(),
      trackUsage = _useTracking.trackUsage;

  (0, _react.useEffect)(function () {
    trackUsage('didAccessAuthenticatedAdministration'); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

exports.useTrackUsage = useTrackUsage;

var Admin = function Admin() {
  useTrackUsage();

  var _useMenu = (0, _hooks.useMenu)(),
      isLoading = _useMenu.isLoading,
      generalSectionLinks = _useMenu.generalSectionLinks,
      pluginsSectionLinks = _useMenu.pluginsSectionLinks;

  var _useStrapiApp = (0, _helperPlugin.useStrapiApp)(),
      menu = _useStrapiApp.menu;

  var routes = (0, _react.useMemo)(function () {
    return menu.filter(function (link) {
      return link.Component;
    }).map(function (_ref) {
      var to = _ref.to,
          Component = _ref.Component,
          exact = _ref.exact;
      return (0, _utils.createRoute)(Component, to, exact);
    });
  }, [menu]);

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_reactDnd.DndProvider, {
    backend: _reactDndHtml5Backend.HTML5Backend
  }, /*#__PURE__*/_react["default"].createElement(_AppLayout["default"], {
    sideNav: /*#__PURE__*/_react["default"].createElement(_LeftMenu["default"], {
      generalSectionLinks: generalSectionLinks,
      pluginsSectionLinks: pluginsSectionLinks
    })
  }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    component: HomePage,
    exact: true
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/me",
    component: ProfilePage,
    exact: true
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/content-manager",
    component: CM
  }), routes, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/settings/:settingId",
    component: SettingsPage
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/settings",
    component: SettingsPage,
    exact: true
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/marketplace"
  }, /*#__PURE__*/_react["default"].createElement(MarketplacePage, null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/list-plugins",
    exact: true
  }, /*#__PURE__*/_react["default"].createElement(InstalledPluginsPage, null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/404",
    component: NotFoundPage
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/500",
    component: InternalErrorPage
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "",
    component: NotFoundPage
  }))), /*#__PURE__*/_react["default"].createElement(_Modal["default"], null), /*#__PURE__*/_react["default"].createElement(_Onboarding["default"], null)));
};

var _default = Admin;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/package.json":
/*!*****************************!*\
  !*** ./.cache/package.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"_args":[["@strapi/admin@4.1.5","/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions"]],"_from":"@strapi/admin@4.1.5","_id":"@strapi/admin@4.1.5","_inBundle":false,"_integrity":"sha512-vT7FEvoKCyHE+QgMSoDoc6HV/cvAGjOsh7I+tTbKvhHpbp4tja/KLB1Pd4v6kWBSvOOEfFz0PuqMPchw69oRQw==","_location":"/@strapi/admin","_phantomChildren":{"follow-redirects":"1.14.9","get-stream":"4.1.0","history":"4.10.1","hoist-non-react-statics":"3.3.2","is-stream":"1.1.0","isexe":"2.0.0","loose-envify":"1.4.0","lru-cache":"6.0.0","mini-create-react-context":"0.4.1","nice-try":"1.0.5","npm-run-path":"2.0.2","p-finally":"1.0.0","path-to-regexp":"1.8.0","prop-types":"15.8.1","react-is":"16.13.1","regenerator-runtime":"0.13.9","side-channel":"1.0.4","signal-exit":"3.0.7","strip-eof":"1.0.0","tiny-invariant":"1.2.0","tiny-warning":"1.0.3"},"_requested":{"type":"version","registry":true,"raw":"@strapi/admin@4.1.5","name":"@strapi/admin","escapedName":"@strapi%2fadmin","scope":"@strapi","rawSpec":"4.1.5","saveSpec":null,"fetchSpec":"4.1.5"},"_requiredBy":["/@strapi/strapi"],"_resolved":"https://registry.npmjs.org/@strapi/admin/-/admin-4.1.5.tgz","_spec":"4.1.5","_where":"/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions","author":{"name":"Strapi Solutions SAS","email":"hi@strapi.io","url":"https://strapi.io"},"bugs":{"url":"https://github.com/strapi/strapi/issues"},"dependencies":{"@babel/core":"7.16.7","@babel/plugin-proposal-async-generator-functions":"7.16.7","@babel/plugin-proposal-class-properties":"7.16.7","@babel/plugin-syntax-dynamic-import":"7.8.3","@babel/plugin-transform-modules-commonjs":"7.16.7","@babel/plugin-transform-runtime":"7.16.7","@babel/preset-env":"7.16.7","@babel/preset-react":"7.16.7","@babel/runtime":"7.16.7","@casl/ability":"^5.4.3","@fingerprintjs/fingerprintjs":"3.3.2","@fortawesome/fontawesome-free":"^5.15.3","@fortawesome/fontawesome-svg-core":"^1.2.35","@fortawesome/free-brands-svg-icons":"^5.15.3","@fortawesome/free-solid-svg-icons":"^5.15.3","@fortawesome/react-fontawesome":"^0.1.14","@strapi/babel-plugin-switch-ee-ce":"4.1.5","@strapi/design-system":"0.0.1-alpha.79","@strapi/helper-plugin":"4.1.5","@strapi/icons":"0.0.1-alpha.79","@strapi/utils":"4.1.5","axios":"0.24.0","babel-loader":"8.2.3","babel-plugin-styled-components":"2.0.2","bcryptjs":"2.4.3","chalk":"^4.1.1","chokidar":"^3.5.1","codemirror":"^5.61.0","cross-env":"^7.0.3","css-loader":"6.5.1","date-fns":"2.22.1","dotenv":"8.5.1","execa":"^1.0.0","fast-deep-equal":"3.1.3","font-awesome":"^4.7.0","formik":"^2.2.6","fs-extra":"10.0.0","highlight.js":"^10.4.1","history":"^4.9.0","hoist-non-react-statics":"^3.3.0","html-loader":"3.0.1","html-webpack-plugin":"5.5.0","immer":"9.0.6","invariant":"^2.2.4","is-wsl":"2.2.0","js-cookie":"2.2.1","jsonwebtoken":"8.5.1","koa-compose":"4.1.0","koa-passport":"4.1.4","koa-static":"5.0.0","lodash":"4.17.21","markdown-it":"^12.3.2","markdown-it-abbr":"^1.0.4","markdown-it-container":"^3.0.0","markdown-it-deflist":"^2.1.0","markdown-it-emoji":"^2.0.0","markdown-it-footnote":"^3.0.3","markdown-it-ins":"^3.0.1","markdown-it-mark":"^3.0.1","markdown-it-sub":"^1.0.0","markdown-it-sup":"1.0.0","match-sorter":"^4.0.2","mini-css-extract-plugin":"2.4.4","moment":"^2.29.1","node-polyfill-webpack-plugin":"1.1.4","p-map":"4.0.0","passport-local":"1.0.0","prop-types":"^15.7.2","qs":"6.10.1","react":"^17.0.2","react-copy-to-clipboard":"^5.0.3","react-dnd":"^14.0.2","react-dnd-html5-backend":"^14.0.0","react-dom":"^17.0.2","react-error-boundary":"3.1.1","react-fast-compare":"^3.2.0","react-helmet":"^6.1.0","react-intl":"5.20.2","react-query":"3.24.3","react-redux":"7.2.3","react-router":"5.2.0","react-router-dom":"5.2.0","react-select":"^4.0.2","react-virtualized":"^9.22.3","redux":"^4.0.1","redux-saga":"^0.16.0","reselect":"^4.0.0","rimraf":"3.0.2","sanitize-html":"2.4.0","semver":"7.3.5","sift":"13.5.0","style-loader":"3.3.1","styled-components":"^5.2.3","terser-webpack-plugin":"5.3.0","webpack":"5.65.0","webpack-cli":"4.9.1","webpack-dev-server":"4.7.3","webpackbar":"5.0.0-3","yup":"^0.32.9"},"description":"Strapi Admin","devDependencies":{"duplicate-dependencies-webpack-plugin":"0.2.0","webpack-bundle-analyzer":"4.4.1"},"engines":{"node":">=12.22.0 <=16.x.x","npm":">=6.0.0"},"gitHead":"f1859f03756a5feb888583dba85bcec7745ce21f","homepage":"https://github.com/strapi/strapi#readme","license":"SEE LICENSE IN LICENSE","main":"index.js","maintainers":[{"name":"Strapi Solutions SAS","email":"hi@strapi.io","url":"https://strapi.io"}],"name":"@strapi/admin","repository":{"type":"git","url":"git://github.com/strapi/strapi.git"},"scripts":{"analyze:bundle":"ANALYZE_BUNDLE=true webpack --config webpack.config.dev.js","analyze:deps":"ANALYZE_DEPS=true webpack serve --config webpack.config.dev.js --progress profile","build":"rimraf build && node ./scripts/build.js","create:plugin-file":"node ./scripts/create-dev-plugins-file.js","develop":"yarn create:plugin-file && yarn develop:webpack","develop:webpack":"cross-env NODE_ENV=development webpack serve --config webpack.config.dev.js --progress profile","prepublishOnly":"yarn build","test":"echo \\"no tests yet\\"","test:front":"cross-env IS_EE=true jest --config ./jest.config.front.js","test:front:ce":"cross-env IS_EE=false jest --config ./jest.config.front.js","test:front:watch":"cross-env IS_EE=true jest --config ./jest.config.front.js --watchAll","test:front:watch:ce":"cross-env IS_EE=false jest --config ./jest.config.front.js --watchAll","test:unit":"jest --verbose"},"version":"4.1.5"}');

/***/ })

}]);