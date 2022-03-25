"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["Admin_homePage"],{

/***/ "./.cache/admin/src/components/GuidedTour/Homepage/components/Step.js":
/*!****************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Homepage/components/Step.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _StepNumber = _interopRequireDefault(__webpack_require__(/*! ../../Stepper/StepNumber */ "./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js"));

var _StepLine = _interopRequireDefault(__webpack_require__(/*! ../../Stepper/StepLine */ "./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js"));

var _constants = __webpack_require__(/*! ../../constants */ "./.cache/admin/src/components/GuidedTour/constants.js");

var StepHomepage = function StepHomepage(_ref) {
  var type = _ref.type,
      title = _ref.title,
      number = _ref.number,
      content = _ref.content,
      hasLine = _ref.hasLine;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    minWidth: (0, _helperPlugin.pxToRem)(30),
    marginRight: 5
  }, /*#__PURE__*/_react["default"].createElement(_StepNumber["default"], {
    type: type,
    number: number
  })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "delta",
    as: "h3"
  }, formatMessage(title))), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    justifyContent: "center",
    minWidth: (0, _helperPlugin.pxToRem)(30),
    marginBottom: 3,
    marginTop: 3,
    marginRight: 5
  }, hasLine && /*#__PURE__*/_react["default"].createElement(_StepLine["default"], {
    type: type,
    minHeight: type === _constants.IS_ACTIVE ? (0, _helperPlugin.pxToRem)(85) : (0, _helperPlugin.pxToRem)(65)
  })), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    marginTop: 2
  }, type === _constants.IS_ACTIVE && content)));
};

StepHomepage.defaultProps = {
  content: undefined,
  number: undefined,
  type: _constants.IS_NOT_DONE,
  hasLine: true
};
StepHomepage.propTypes = {
  content: _propTypes["default"].node,
  number: _propTypes["default"].number,
  title: _propTypes["default"].shape({
    id: _propTypes["default"].string,
    defaultMessage: _propTypes["default"].string
  }).isRequired,
  type: _propTypes["default"].oneOf([_constants.IS_ACTIVE, _constants.IS_DONE, _constants.IS_NOT_DONE]),
  hasLine: _propTypes["default"].bool
};
var _default = StepHomepage;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Homepage/components/Stepper.js":
/*!*******************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Homepage/components/Stepper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Step = _interopRequireDefault(__webpack_require__(/*! ./Step */ "./.cache/admin/src/components/GuidedTour/Homepage/components/Step.js"));

var _constants = __webpack_require__(/*! ../../constants */ "./.cache/admin/src/components/GuidedTour/constants.js");

var getType = function getType(activeSectionIndex, index) {
  if (activeSectionIndex === -1) {
    return _constants.IS_DONE;
  }

  if (index < activeSectionIndex) {
    return _constants.IS_DONE;
  }

  if (index > activeSectionIndex) {
    return _constants.IS_NOT_DONE;
  }

  return _constants.IS_ACTIVE;
};

var StepperHomepage = function StepperHomepage(_ref) {
  var sections = _ref.sections,
      currentSectionKey = _ref.currentSectionKey;
  var activeSectionIndex = sections.findIndex(function (section) {
    return section.key === currentSectionKey;
  });
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, null, sections.map(function (section, index) {
    return /*#__PURE__*/_react["default"].createElement(_Step["default"], {
      key: section.key,
      title: section.title,
      content: section.content,
      number: index + 1,
      type: getType(activeSectionIndex, index),
      hasLine: index !== sections.length - 1
    });
  }));
};

StepperHomepage.defaultProps = {
  currentSectionKey: undefined
};
StepperHomepage.propTypes = {
  sections: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    key: _propTypes["default"].string.isRequired,
    title: _propTypes["default"].shape({
      id: _propTypes["default"].string,
      defaultMessage: _propTypes["default"].string
    }).isRequired,
    content: _propTypes["default"].node
  })).isRequired,
  currentSectionKey: _propTypes["default"].string
};
var _default = StepperHomepage;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/Homepage/index.js":
/*!******************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/Homepage/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _LinkButton = __webpack_require__(/*! @strapi/design-system/LinkButton */ "./node_modules/@strapi/design-system/LinkButton.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _ArrowRight = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/ArrowRight */ "./node_modules/@strapi/icons/ArrowRight.js"));

var _Stepper = _interopRequireDefault(__webpack_require__(/*! ./components/Stepper */ "./.cache/admin/src/components/GuidedTour/Homepage/components/Stepper.js"));

var _layout = _interopRequireDefault(__webpack_require__(/*! ../layout */ "./.cache/admin/src/components/GuidedTour/layout.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var GuidedTourHomepage = function GuidedTourHomepage() {
  var _enrichedSections$fin;

  var _useGuidedTour = (0, _helperPlugin.useGuidedTour)(),
      guidedTourState = _useGuidedTour.guidedTourState,
      setSkipped = _useGuidedTour.setSkipped;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useTracking = (0, _helperPlugin.useTracking)(),
      trackUsage = _useTracking.trackUsage;

  var sections = Object.entries(_layout["default"]).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return {
      key: key,
      title: val.home.title,
      content: /*#__PURE__*/_react["default"].createElement(_LinkButton.LinkButton, {
        onClick: function onClick() {
          return trackUsage(val.home.trackingEvent);
        },
        to: val.home.cta.target,
        endIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], null)
      }, formatMessage(val.home.cta.title))
    };
  });
  var enrichedSections = sections.map(function (section) {
    return _objectSpread({
      isDone: Object.entries(guidedTourState[section.key]).every(function (_ref3) {
        var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
            value = _ref4[1];

        return value;
      })
    }, section);
  });
  var activeSection = (_enrichedSections$fin = enrichedSections.find(function (section) {
    return !section.isDone;
  })) === null || _enrichedSections$fin === void 0 ? void 0 : _enrichedSections$fin.key;

  var handleSkip = function handleSkip() {
    setSkipped(true);
    trackUsage('didSkipGuidedtour');
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    hasRadius: true,
    shadow: "tableShadow",
    paddingTop: 7,
    paddingRight: 4,
    paddingLeft: 7,
    paddingBottom: 4,
    background: "neutral0"
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 6
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "beta",
    as: "h2"
  }, formatMessage({
    id: 'app.components.GuidedTour.title',
    defaultMessage: '3 steps to get started'
  })), /*#__PURE__*/_react["default"].createElement(_Stepper["default"], {
    sections: sections,
    currentSectionKey: activeSection
  })), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "tertiary",
    onClick: handleSkip
  }, formatMessage({
    id: 'app.components.GuidedTour.skip',
    defaultMessage: 'Skip the tour'
  }))));
};

var _default = GuidedTourHomepage;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/utils/isGuidedTourCompleted.js":
/*!*******************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/utils/isGuidedTourCompleted.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var isGuidedTourCompleted = function isGuidedTourCompleted(guidedTourState) {
  return Object.entries(guidedTourState).every(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        section = _ref2[1];

    return Object.entries(section).every(function (_ref3) {
      var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
          step = _ref4[1];

      return step;
    });
  });
};

var _default = isGuidedTourCompleted;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/HomePage/ContentBlocks.js":
/*!**********************************************************!*\
  !*** ./.cache/admin/src/pages/HomePage/ContentBlocks.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _InformationSquare = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/InformationSquare */ "./node_modules/@strapi/icons/InformationSquare.js"));

var _CodeSquare = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/CodeSquare */ "./node_modules/@strapi/icons/CodeSquare.js"));

var _PlaySquare = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/PlaySquare */ "./node_modules/@strapi/icons/PlaySquare.js"));

var _FeatherSquare = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/FeatherSquare */ "./node_modules/@strapi/icons/FeatherSquare.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var BlockLink = /*#__PURE__*/_styledComponents["default"].a.withConfig({
  displayName: "ContentBlocks__BlockLink",
  componentId: "sc-8gdh0l-0"
})(["text-decoration:none;"]);

var ContentBlocks = function ContentBlocks() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 5
  }, /*#__PURE__*/_react["default"].createElement(BlockLink, {
    href: "https://strapi.io/resource-center",
    target: "_blank",
    rel: "noopener noreferrer nofollow"
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.ContentBox, {
    title: formatMessage({
      id: 'app.components.BlockLink.documentation',
      defaultMessage: 'Documentation'
    }),
    subtitle: formatMessage({
      id: 'app.components.BlockLink.documentation.content',
      defaultMessage: 'Discover the essential concepts, guides and instructions.'
    }),
    icon: /*#__PURE__*/_react["default"].createElement(_InformationSquare["default"], null),
    iconBackground: "primary100"
  })), /*#__PURE__*/_react["default"].createElement(BlockLink, {
    href: "https://strapi.io/starters",
    target: "_blank",
    rel: "noopener noreferrer nofollow"
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.ContentBox, {
    title: formatMessage({
      id: 'app.components.BlockLink.code',
      defaultMessage: 'Code example'
    }),
    subtitle: formatMessage({
      id: 'app.components.BlockLink.code.content',
      defaultMessage: 'Learn by using ready-made starters for your projects.'
    }),
    icon: /*#__PURE__*/_react["default"].createElement(_CodeSquare["default"], null),
    iconBackground: "warning100"
  })), /*#__PURE__*/_react["default"].createElement(BlockLink, {
    href: "https://strapi.io/blog/categories/tutorials",
    target: "_blank",
    rel: "noopener noreferrer nofollow"
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.ContentBox, {
    title: formatMessage({
      id: 'app.components.BlockLink.tutorial',
      defaultMessage: 'Tutorials'
    }),
    subtitle: formatMessage({
      id: 'app.components.BlockLink.tutorial.content',
      defaultMessage: 'Follow step-by-step instructions to use and customize Strapi.'
    }),
    icon: /*#__PURE__*/_react["default"].createElement(_PlaySquare["default"], null),
    iconBackground: "secondary100"
  })), /*#__PURE__*/_react["default"].createElement(BlockLink, {
    href: "https://strapi.io/blog",
    target: "_blank",
    rel: "noopener noreferrer nofollow"
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.ContentBox, {
    title: formatMessage({
      id: 'app.components.BlockLink.blog',
      defaultMessage: 'Blog'
    }),
    subtitle: formatMessage({
      id: 'app.components.BlockLink.blog.content',
      defaultMessage: 'Read the latest news about Strapi and the ecosystem.'
    }),
    icon: /*#__PURE__*/_react["default"].createElement(_FeatherSquare["default"], null),
    iconBackground: "alternative100"
  })));
};

var _default = ContentBlocks;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/HomePage/HomeHeader.js":
/*!*******************************************************!*\
  !*** ./.cache/admin/src/pages/HomePage/HomeHeader.js ***!
  \*******************************************************/
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

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Link = __webpack_require__(/*! @strapi/design-system/Link */ "./node_modules/@strapi/design-system/Link.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _ArrowRight = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/ArrowRight */ "./node_modules/@strapi/icons/ArrowRight.js"));

var WordWrap = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  displayName: "HomeHeader__WordWrap",
  componentId: "sc-12uw7de-0"
})(["word-break:break-word;"]);
var StackCustom = /*#__PURE__*/(0, _styledComponents["default"])(_Stack.Stack).withConfig({
  displayName: "HomeHeader__StackCustom",
  componentId: "sc-12uw7de-1"
})(["align-items:flex-start;"]);

var HomeHeader = function HomeHeader(_ref) {
  var hasCreatedContentType = _ref.hasCreatedContentType,
      onCreateCT = _ref.onCreateCT;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingLeft: 6,
    paddingBottom: 10
  }, /*#__PURE__*/_react["default"].createElement(StackCustom, {
    spacing: 5
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    as: "h1",
    variant: "alpha"
  }, hasCreatedContentType ? formatMessage({
    id: 'app.components.HomePage.welcome.again',
    defaultMessage: 'Welcome 👋'
  }) : formatMessage({
    id: 'app.components.HomePage.welcome',
    defaultMessage: 'Welcome on board!'
  })), /*#__PURE__*/_react["default"].createElement(WordWrap, {
    textColor: "neutral600",
    variant: "epsilon"
  }, hasCreatedContentType ? formatMessage({
    id: 'app.components.HomePage.welcomeBlock.content.again',
    defaultMessage: 'We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback.'
  }) : formatMessage({
    id: 'app.components.HomePage.welcomeBlock.content',
    defaultMessage: 'Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!'
  })), hasCreatedContentType ? /*#__PURE__*/_react["default"].createElement(_Link.Link, {
    href: "https://strapi.io/blog"
  }, formatMessage({
    id: 'app.components.HomePage.button.blog',
    defaultMessage: 'See more on the blog'
  })) : /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "L",
    onClick: onCreateCT,
    endIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], null)
  }, formatMessage({
    id: 'app.components.HomePage.create',
    defaultMessage: 'Create your first Content type'
  })))));
};

HomeHeader.defaultProps = {
  hasCreatedContentType: undefined,
  onCreateCT: undefined
};
HomeHeader.propTypes = {
  hasCreatedContentType: _propTypes["default"].bool,
  onCreateCT: _propTypes["default"].func
};
var _default = HomeHeader;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/HomePage/SocialLinks.js":
/*!********************************************************!*\
  !*** ./.cache/admin/src/pages/HomePage/SocialLinks.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _LinkButton = __webpack_require__(/*! @strapi/design-system/LinkButton */ "./node_modules/@strapi/design-system/LinkButton.js");

var _Link = __webpack_require__(/*! @strapi/design-system/Link */ "./node_modules/@strapi/design-system/Link.js");

var _ExternalLink = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/ExternalLink */ "./node_modules/@strapi/icons/ExternalLink.js"));

var _Github = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Github */ "./node_modules/@strapi/icons/Github.js"));

var _Discord = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Discord */ "./node_modules/@strapi/icons/Discord.js"));

var _Reddit = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Reddit */ "./node_modules/@strapi/icons/Reddit.js"));

var _Strapi = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Strapi */ "./node_modules/@strapi/icons/Strapi.js"));

var _Twitter = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Twitter */ "./node_modules/@strapi/icons/Twitter.js"));

var _Discourse = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Discourse */ "./node_modules/@strapi/icons/Discourse.js"));

/**
 *
 * SocialLink
 */
var StyledDiscord = /*#__PURE__*/(0, _styledComponents["default"])(_Discord["default"]).withConfig({
  displayName: "SocialLinks__StyledDiscord",
  componentId: "sc-1ck3zd4-0"
})(["path{fill:#7289da !important;}"]);
var StyledReddit = /*#__PURE__*/(0, _styledComponents["default"])(_Reddit["default"]).withConfig({
  displayName: "SocialLinks__StyledReddit",
  componentId: "sc-1ck3zd4-1"
})(["> path:first-child{fill:#ff4500;}"]);
var StyledStrapi = /*#__PURE__*/(0, _styledComponents["default"])(_Strapi["default"]).withConfig({
  displayName: "SocialLinks__StyledStrapi",
  componentId: "sc-1ck3zd4-2"
})(["> path:first-child{fill:#8e75ff;}> path:nth-child(2){fill:#8e75ff;}> path:nth-child(3){fill:#8e75ff;}"]);
var StyledTwitter = /*#__PURE__*/(0, _styledComponents["default"])(_Twitter["default"]).withConfig({
  displayName: "SocialLinks__StyledTwitter",
  componentId: "sc-1ck3zd4-3"
})(["path{fill:#1da1f2 !important;}"]);
var StyledDiscourse = /*#__PURE__*/(0, _styledComponents["default"])(_Discourse["default"]).withConfig({
  displayName: "SocialLinks__StyledDiscourse",
  componentId: "sc-1ck3zd4-4"
})(["> path:first-child{fill:#231f20;}> path:nth-child(2){fill:#fff9ae;}> path:nth-child(3){fill:#00aeef;}> path:nth-child(4){fill:#00a94f;}> path:nth-child(5){fill:#f15d22;}> path:nth-child(6){fill:#e31b23;}"]);
var socialLinks = [{
  name: 'Github',
  link: 'https://github.com/strapi/strapi/',
  icon: /*#__PURE__*/_react["default"].createElement(_Github["default"], {
    fill: "#7289DA"
  }),
  alt: 'github'
}, {
  name: 'Discord',
  link: 'https://slack.strapi.io/',
  icon: /*#__PURE__*/_react["default"].createElement(StyledDiscord, null),
  alt: 'discord'
}, {
  name: 'Reddit',
  link: 'https://www.reddit.com/r/Strapi/',
  icon: /*#__PURE__*/_react["default"].createElement(StyledReddit, null),
  alt: 'reddit'
}, {
  name: 'Twitter',
  link: 'https://twitter.com/strapijs',
  icon: /*#__PURE__*/_react["default"].createElement(StyledTwitter, null),
  alt: 'twitter'
}, {
  name: 'Forum',
  link: 'https://forum.strapi.io',
  icon: /*#__PURE__*/_react["default"].createElement(StyledDiscourse, null),
  alt: 'forum'
}, {
  name: 'Blog',
  link: 'https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page',
  icon: /*#__PURE__*/_react["default"].createElement(StyledStrapi, null),
  alt: 'blog'
}, {
  name: 'We are hiring!',
  link: 'https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog',
  icon: /*#__PURE__*/_react["default"].createElement(StyledStrapi, null),
  alt: 'career'
}];
var LinkCustom = /*#__PURE__*/(0, _styledComponents["default"])(_LinkButton.LinkButton).withConfig({
  displayName: "SocialLinks__LinkCustom",
  componentId: "sc-1ck3zd4-5"
})(["display:flex;align-items:center;border:none;svg{width:", ";height:", ";}span{word-break:keep-all;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[6];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[6];
});
var GridGap = /*#__PURE__*/(0, _styledComponents["default"])(_Grid.Grid).withConfig({
  displayName: "SocialLinks__GridGap",
  componentId: "sc-1ck3zd4-6"
})(["row-gap:", ";column-gap:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[2];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spaces[4];
});

var SocialLinks = function SocialLinks() {
  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    as: "aside",
    "aria-labelledby": "join-the-community",
    background: "neutral0",
    hasRadius: true,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 6,
    paddingBottom: 6,
    shadow: "tableShadow"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingBottom: 7
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 5
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 3
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "delta",
    as: "h2",
    id: "join-the-community"
  }, formatMessage({
    id: 'app.components.HomePage.community',
    defaultMessage: 'Join the community'
  })), /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    textColor: "neutral600"
  }, formatMessage({
    id: 'app.components.HomePage.community.content',
    defaultMessage: 'Discuss with team members, contributors and developers on different channels'
  }))), /*#__PURE__*/_react["default"].createElement(_Link.Link, {
    href: "https://portal.productboard.com/strapi/1-roadmap/tabs/2-under-consideration",
    endIcon: /*#__PURE__*/_react["default"].createElement(_ExternalLink["default"], null)
  }, formatMessage({
    id: 'app.components.HomePage.roadmap',
    defaultMessage: 'See our road map'
  })))), /*#__PURE__*/_react["default"].createElement(GridGap, null, socialLinks.map(function (socialLink) {
    return /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
      col: 6,
      s: 12,
      key: socialLink.name
    }, /*#__PURE__*/_react["default"].createElement(LinkCustom, {
      size: "L",
      startIcon: socialLink.icon,
      variant: "tertiary",
      href: socialLink.link
    }, socialLink.name));
  })));
};

var _default = SocialLinks;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/HomePage/index.js":
/*!**************************************************!*\
  !*** ./.cache/admin/src/pages/HomePage/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./src/admin/node_modules/react-helmet/lib/Helmet.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Grid = __webpack_require__(/*! @strapi/design-system/Grid */ "./node_modules/@strapi/design-system/Grid.js");

var _homepageLogo = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/homepage-logo.png */ "./.cache/admin/src/assets/images/homepage-logo.png"));

var _hooks = __webpack_require__(/*! ../../hooks */ "./.cache/admin/src/hooks/index.js");

var _isGuidedTourCompleted = _interopRequireDefault(__webpack_require__(/*! ../../components/GuidedTour/utils/isGuidedTourCompleted */ "./.cache/admin/src/components/GuidedTour/utils/isGuidedTourCompleted.js"));

var _Homepage = _interopRequireDefault(__webpack_require__(/*! ../../components/GuidedTour/Homepage */ "./.cache/admin/src/components/GuidedTour/Homepage/index.js"));

var _SocialLinks = _interopRequireDefault(__webpack_require__(/*! ./SocialLinks */ "./.cache/admin/src/pages/HomePage/SocialLinks.js"));

var _HomeHeader = _interopRequireDefault(__webpack_require__(/*! ./HomeHeader */ "./.cache/admin/src/pages/HomePage/HomeHeader.js"));

var _ContentBlocks = _interopRequireDefault(__webpack_require__(/*! ./ContentBlocks */ "./.cache/admin/src/pages/HomePage/ContentBlocks.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * HomePage
 *
 */
var LogoContainer = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "HomePage__LogoContainer",
  componentId: "sc-1md9zz4-0"
})(["position:absolute;top:0;right:0;img{width:", "rem;}"], 150 / 16);

var HomePage = function HomePage() {
  // // Temporary until we develop the menu API
  var _useModels = (0, _hooks.useModels)(),
      collectionTypes = _useModels.collectionTypes,
      singleTypes = _useModels.singleTypes,
      isLoadingForModels = _useModels.isLoading;

  var _useGuidedTour = (0, _helperPlugin.useGuidedTour)(),
      guidedTourState = _useGuidedTour.guidedTourState,
      isGuidedTourVisible = _useGuidedTour.isGuidedTourVisible,
      isSkipped = _useGuidedTour.isSkipped;

  var showGuidedTour = !(0, _isGuidedTourCompleted["default"])(guidedTourState) && isGuidedTourVisible && !isSkipped;

  var _useHistory = (0, _reactRouterDom.useHistory)(),
      push = _useHistory.push;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    push('/plugins/content-type-builder/content-types/create-content-type');
  };

  var hasAlreadyCreatedContentTypes = (0, _react.useMemo)(function () {
    var filterContentTypes = function filterContentTypes(contentTypes) {
      return contentTypes.filter(function (c) {
        return c.isDisplayed;
      });
    };

    return filterContentTypes(collectionTypes).length > 1 || filterContentTypes(singleTypes).length > 0;
  }, [collectionTypes, singleTypes]);

  if (isLoadingForModels) {
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "HomePage.helmet.title",
    defaultMessage: "Homepage"
  }, function (title) {
    return /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
      title: title[0]
    });
  }), /*#__PURE__*/_react["default"].createElement(_Main.Main, null, /*#__PURE__*/_react["default"].createElement(LogoContainer, null, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    "aria-hidden": true,
    src: _homepageLogo["default"]
  })), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    padding: 10
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Grid, null, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 8,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_HomeHeader["default"], {
    onCreateCT: handleClick,
    hasCreatedContentType: hasAlreadyCreatedContentTypes
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Grid, {
    gap: 6
  }, /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 8,
    s: 12
  }, showGuidedTour ? /*#__PURE__*/_react["default"].createElement(_Homepage["default"], null) : /*#__PURE__*/_react["default"].createElement(_ContentBlocks["default"], null)), /*#__PURE__*/_react["default"].createElement(_Grid.GridItem, {
    col: 4,
    s: 12
  }, /*#__PURE__*/_react["default"].createElement(_SocialLinks["default"], null))))));
};

var _default = /*#__PURE__*/(0, _react.memo)(HomePage);

exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/assets/images/homepage-logo.png":
/*!**********************************************************!*\
  !*** ./.cache/admin/src/assets/images/homepage-logo.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a9e9ef5c4c775bb7c7b.png";

/***/ })

}]);