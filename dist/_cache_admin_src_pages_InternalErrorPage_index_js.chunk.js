"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["_cache_admin_src_pages_InternalErrorPage_index_js"],{

/***/ "./.cache/admin/src/pages/InternalErrorPage/index.js":
/*!***********************************************************!*\
  !*** ./.cache/admin/src/pages/InternalErrorPage/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _LinkButton = __webpack_require__(/*! @strapi/design-system/LinkButton */ "./node_modules/@strapi/design-system/LinkButton.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _EmptyStateLayout = __webpack_require__(/*! @strapi/design-system/EmptyStateLayout */ "./node_modules/@strapi/design-system/EmptyStateLayout.js");

var _EmptyPictures = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/EmptyPictures */ "./node_modules/@strapi/icons/EmptyPictures.js"));

var _ArrowRight = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/ArrowRight */ "./node_modules/@strapi/icons/ArrowRight.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

/**
 * InternalErrorPage
 *
 * This is the page we show when the user gets a 500 error
 *
 */
var InternalErrorPage = function InternalErrorPage() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  (0, _helperPlugin.useFocusWhenNavigate)();
  return /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    labelledBy: "title"
  }, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    id: "title",
    title: formatMessage({
      id: 'content-manager.pageNotFound',
      defaultMessage: 'Page not found'
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, /*#__PURE__*/_react["default"].createElement(_EmptyStateLayout.EmptyStateLayout, {
    action: /*#__PURE__*/_react["default"].createElement(_LinkButton.LinkButton, {
      variant: "secondary",
      endIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], null),
      to: "/"
    }, formatMessage({
      id: 'app.components.NotFoundPage.back',
      defaultMessage: 'Back to homepage'
    })),
    content: formatMessage({
      id: 'notification.error',
      defaultMessage: 'An error occured'
    }),
    hasRadius: true,
    icon: /*#__PURE__*/_react["default"].createElement(_EmptyPictures["default"], {
      width: "10rem"
    }),
    shadow: "tableShadow"
  })));
};

var _default = InternalErrorPage;
exports["default"] = _default;

/***/ })

}]);