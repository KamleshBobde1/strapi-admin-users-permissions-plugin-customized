(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["_cache_admin_src_StrapiApp_js"],{

/***/ "./.cache/admin/src/translations lazy recursive ^\\.\\/.*\\.json$":
/*!**************************************************************************************************!*\
  !*** ./.cache/admin/src/translations/ lazy ^\.\/.*\.json$ chunkName: [request] namespace object ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.json": [
		"./.cache/admin/src/translations/ar.json",
		"ar-json"
	],
	"./cs.json": [
		"./.cache/admin/src/translations/cs.json",
		"cs-json"
	],
	"./de.json": [
		"./.cache/admin/src/translations/de.json",
		"de-json"
	],
	"./dk.json": [
		"./.cache/admin/src/translations/dk.json",
		"dk-json"
	],
	"./en.json": [
		"./.cache/admin/src/translations/en.json",
		"en-json"
	],
	"./es.json": [
		"./.cache/admin/src/translations/es.json",
		"es-json"
	],
	"./fr.json": [
		"./.cache/admin/src/translations/fr.json",
		"fr-json"
	],
	"./he.json": [
		"./.cache/admin/src/translations/he.json",
		"he-json"
	],
	"./hu.json": [
		"./.cache/admin/src/translations/hu.json",
		"hu-json"
	],
	"./id.json": [
		"./.cache/admin/src/translations/id.json",
		"id-json"
	],
	"./it.json": [
		"./.cache/admin/src/translations/it.json",
		"it-json"
	],
	"./ja.json": [
		"./.cache/admin/src/translations/ja.json",
		"ja-json"
	],
	"./ko.json": [
		"./.cache/admin/src/translations/ko.json",
		"ko-json"
	],
	"./ms.json": [
		"./.cache/admin/src/translations/ms.json",
		"ms-json"
	],
	"./nl.json": [
		"./.cache/admin/src/translations/nl.json",
		"nl-json"
	],
	"./no.json": [
		"./.cache/admin/src/translations/no.json",
		"no-json"
	],
	"./pl.json": [
		"./.cache/admin/src/translations/pl.json",
		"pl-json"
	],
	"./pt-BR.json": [
		"./.cache/admin/src/translations/pt-BR.json",
		"pt-BR-json"
	],
	"./pt.json": [
		"./.cache/admin/src/translations/pt.json",
		"pt-json"
	],
	"./ru.json": [
		"./.cache/admin/src/translations/ru.json",
		"ru-json"
	],
	"./sk.json": [
		"./.cache/admin/src/translations/sk.json",
		"sk-json"
	],
	"./sv.json": [
		"./.cache/admin/src/translations/sv.json",
		"sv-json"
	],
	"./th.json": [
		"./.cache/admin/src/translations/th.json",
		"th-json"
	],
	"./tr.json": [
		"./.cache/admin/src/translations/tr.json",
		"tr-json"
	],
	"./uk.json": [
		"./.cache/admin/src/translations/uk.json",
		"uk-json"
	],
	"./vi.json": [
		"./.cache/admin/src/translations/vi.json",
		"vi-json"
	],
	"./zh-Hans.json": [
		"./.cache/admin/src/translations/zh-Hans.json",
		"zh-Hans-json"
	],
	"./zh.json": [
		"./.cache/admin/src/translations/zh.json",
		"zh-json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./.cache/admin/src/translations lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./.cache/admin/src/StrapiApp.js":
/*!***************************************!*\
  !*** ./.cache/admin/src/StrapiApp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./src/admin/node_modules/console-browserify/index.js */ "./src/admin/node_modules/console-browserify/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _themes = __webpack_require__(/*! @strapi/design-system/themes */ "./node_modules/@strapi/design-system/themes.js");

var _merge = _interopRequireDefault(__webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js"));

var _pick = _interopRequireDefault(__webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js"));

var _isFunction = _interopRequireDefault(__webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "./src/admin/node_modules/invariant/invariant.js"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./src/admin/node_modules/react-helmet/lib/Helmet.js");

var _utils = __webpack_require__(/*! ./core/utils */ "./.cache/admin/src/core/utils/index.js");

var _configureStore = _interopRequireDefault(__webpack_require__(/*! ./core/store/configureStore */ "./.cache/admin/src/core/store/configureStore.js"));

var _apis = __webpack_require__(/*! ./core/apis */ "./.cache/admin/src/core/apis/index.js");

var _App = _interopRequireDefault(__webpack_require__(/*! ./pages/App */ "./.cache/admin/src/pages/App/index.js"));

var _logo_strapi_auth_v = _interopRequireDefault(__webpack_require__(/*! ./assets/images/logo_strapi_auth_v4.png */ "./.cache/admin/src/assets/images/logo_strapi_auth_v4.png"));

var _logo_strapi_menu = _interopRequireDefault(__webpack_require__(/*! ./assets/images/logo_strapi_menu.png */ "./.cache/admin/src/assets/images/logo_strapi_menu.png"));

var _Providers = _interopRequireDefault(__webpack_require__(/*! ./components/Providers */ "./.cache/admin/src/components/Providers/index.js"));

var _Theme = _interopRequireDefault(__webpack_require__(/*! ./components/Theme */ "./.cache/admin/src/components/Theme/index.js"));

var _languageNativeNames = _interopRequireDefault(__webpack_require__(/*! ./translations/languageNativeNames */ "./.cache/admin/src/translations/languageNativeNames.js"));

var _exposedHooks = __webpack_require__(/*! ./exposedHooks */ "./.cache/admin/src/exposedHooks.js");

var _injectionZones = _interopRequireDefault(__webpack_require__(/*! ./injectionZones */ "./.cache/admin/src/injectionZones.js"));

var _favicon = _interopRequireDefault(__webpack_require__(/*! ./favicon.ico */ "./.cache/admin/src/favicon.ico"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var StrapiApp = /*#__PURE__*/function () {
  function StrapiApp(_ref) {
    var _this = this;

    var adminConfig = _ref.adminConfig,
        appPlugins = _ref.appPlugins,
        library = _ref.library,
        _middlewares = _ref.middlewares,
        _reducers = _ref.reducers;
    (0, _classCallCheck2["default"])(this, StrapiApp);
    (0, _defineProperty2["default"])(this, "addComponents", function (components) {
      if (Array.isArray(components)) {
        components.map(function (compo) {
          return _this.library.components.add(compo);
        });
      } else {
        _this.library.components.add(components);
      }
    });
    (0, _defineProperty2["default"])(this, "addCorePluginMenuLink", function (link) {
      var _link$intlLabel, _link$intlLabel2;

      var stringifiedLink = JSON.stringify(link);
      (0, _invariant["default"])(link.to, "link.to should be defined for ".concat(stringifiedLink));
      (0, _invariant["default"])(typeof link.to === 'string', "Expected link.to to be a string instead received ".concat((0, _typeof2["default"])(link.to)));
      (0, _invariant["default"])(['/plugins/content-type-builder', '/plugins/upload'].includes(link.to), 'This method is not available for your plugin');
      (0, _invariant["default"])(((_link$intlLabel = link.intlLabel) === null || _link$intlLabel === void 0 ? void 0 : _link$intlLabel.id) && ((_link$intlLabel2 = link.intlLabel) === null || _link$intlLabel2 === void 0 ? void 0 : _link$intlLabel2.defaultMessage), "link.intlLabel.id & link.intlLabel.defaultMessage for ".concat(stringifiedLink));

      _this.menu.push(link);
    });
    (0, _defineProperty2["default"])(this, "addFields", function (fields) {
      if (Array.isArray(fields)) {
        fields.map(function (field) {
          return _this.library.fields.add(field);
        });
      } else {
        _this.library.fields.add(fields);
      }
    });
    (0, _defineProperty2["default"])(this, "addMenuLink", function (link) {
      var _link$intlLabel3, _link$intlLabel4;

      var stringifiedLink = JSON.stringify(link);
      (0, _invariant["default"])(link.to, "link.to should be defined for ".concat(stringifiedLink));
      (0, _invariant["default"])(typeof link.to === 'string', "Expected link.to to be a string instead received ".concat((0, _typeof2["default"])(link.to)));
      (0, _invariant["default"])(((_link$intlLabel3 = link.intlLabel) === null || _link$intlLabel3 === void 0 ? void 0 : _link$intlLabel3.id) && ((_link$intlLabel4 = link.intlLabel) === null || _link$intlLabel4 === void 0 ? void 0 : _link$intlLabel4.defaultMessage), "link.intlLabel.id & link.intlLabel.defaultMessage for ".concat(stringifiedLink));
      (0, _invariant["default"])(link.Component && typeof link.Component === 'function', "link.Component should be a valid React Component");
      (0, _invariant["default"])(link.icon && typeof link.icon === 'function', "link.Icon should be a valid React Component");

      _this.menu.push(link);
    });
    (0, _defineProperty2["default"])(this, "addMiddlewares", function (middlewares) {
      middlewares.forEach(function (middleware) {
        _this.middlewares.add(middleware);
      });
    });
    (0, _defineProperty2["default"])(this, "addReducers", function (reducers) {
      Object.keys(reducers).forEach(function (reducerName) {
        _this.reducers.add(reducerName, reducers[reducerName]);
      });
    });
    (0, _defineProperty2["default"])(this, "addSettingsLink", function (sectionId, link) {
      var _link$intlLabel5, _link$intlLabel6;

      (0, _invariant["default"])(_this.settings[sectionId], 'The section does not exist');
      var stringifiedLink = JSON.stringify(link);
      (0, _invariant["default"])(link.id, "link.id should be defined for ".concat(stringifiedLink));
      (0, _invariant["default"])(((_link$intlLabel5 = link.intlLabel) === null || _link$intlLabel5 === void 0 ? void 0 : _link$intlLabel5.id) && ((_link$intlLabel6 = link.intlLabel) === null || _link$intlLabel6 === void 0 ? void 0 : _link$intlLabel6.defaultMessage), "link.intlLabel.id & link.intlLabel.defaultMessage for ".concat(stringifiedLink));
      (0, _invariant["default"])(link.to, "link.to should be defined for ".concat(stringifiedLink));
      (0, _invariant["default"])(link.Component && typeof link.Component === 'function', "link.Component should be a valid React Component");

      _this.settings[sectionId].links.push(link);
    });
    (0, _defineProperty2["default"])(this, "addSettingsLinks", function (sectionId, links) {
      (0, _invariant["default"])(_this.settings[sectionId], 'The section does not exist');
      (0, _invariant["default"])(Array.isArray(links), 'TypeError expected links to be an array');
      links.forEach(function (link) {
        _this.addSettingsLink(sectionId, link);
      });
    });
    (0, _defineProperty2["default"])(this, "bootstrapAdmin", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.createCustomConfigurations();

            case 2:
              _this.createHook(_exposedHooks.INJECT_COLUMN_IN_TABLE);

              _this.createHook(_exposedHooks.MUTATE_COLLECTION_TYPES_LINKS);

              _this.createHook(_exposedHooks.MUTATE_SINGLE_TYPES_LINKS);

              _this.createHook(_exposedHooks.MUTATE_EDIT_VIEW_LAYOUT);

              return _context.abrupt("return", Promise.resolve());

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0, _defineProperty2["default"])(this, "createCustomConfigurations", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var _this$customConfigura, _this$customConfigura3, _this$customConfigura4, _this$customConfigura5, _this$customConfigura6, _this$customConfigura7, _this$customConfigura8, _this$customConfigura9, _this$customConfigura10, _this$customConfigura11, _this$customConfigura12;

      var _this$customConfigura2;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if ((_this$customConfigura = _this.customConfigurations) !== null && _this$customConfigura !== void 0 && _this$customConfigura.locales) {
                _this.configurations.locales = ['en'].concat((0, _toConsumableArray2["default"])((_this$customConfigura2 = _this.customConfigurations.locales) === null || _this$customConfigura2 === void 0 ? void 0 : _this$customConfigura2.filter(function (loc) {
                  return loc !== 'en';
                })));
              }

              if ((_this$customConfigura3 = _this.customConfigurations) !== null && _this$customConfigura3 !== void 0 && (_this$customConfigura4 = _this$customConfigura3.auth) !== null && _this$customConfigura4 !== void 0 && _this$customConfigura4.logo) {
                _this.configurations.authLogo = _this.customConfigurations.auth.logo;
              }

              if ((_this$customConfigura5 = _this.customConfigurations) !== null && _this$customConfigura5 !== void 0 && (_this$customConfigura6 = _this$customConfigura5.menu) !== null && _this$customConfigura6 !== void 0 && _this$customConfigura6.logo) {
                _this.configurations.menuLogo = _this.customConfigurations.menu.logo;
              }

              if ((_this$customConfigura7 = _this.customConfigurations) !== null && _this$customConfigura7 !== void 0 && (_this$customConfigura8 = _this$customConfigura7.head) !== null && _this$customConfigura8 !== void 0 && _this$customConfigura8.favicon) {
                _this.configurations.head.favicon = _this.customConfigurations.head.favicon;
              }

              if ((_this$customConfigura9 = _this.customConfigurations) !== null && _this$customConfigura9 !== void 0 && _this$customConfigura9.theme) {
                _this.configurations.theme = (0, _merge["default"])(_this.configurations.theme, _this.customConfigurations.theme);
              }

              if (((_this$customConfigura10 = _this.customConfigurations) === null || _this$customConfigura10 === void 0 ? void 0 : (_this$customConfigura11 = _this$customConfigura10.notifications) === null || _this$customConfigura11 === void 0 ? void 0 : _this$customConfigura11.releases) !== undefined) {
                _this.configurations.notifications.releases = _this.customConfigurations.notifications.releases;
              }

              if (((_this$customConfigura12 = _this.customConfigurations) === null || _this$customConfigura12 === void 0 ? void 0 : _this$customConfigura12.tutorials) !== undefined) {
                _this.configurations.tutorials = _this.customConfigurations.tutorials;
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    (0, _defineProperty2["default"])(this, "createHook", function (name) {
      _this.hooksDict[name] = (0, _utils.createHook)();
    });
    (0, _defineProperty2["default"])(this, "createSettingSection", function (section, links) {
      var _section$intlLabel, _section$intlLabel2;

      (0, _invariant["default"])(section.id, 'section.id should be defined');
      (0, _invariant["default"])(((_section$intlLabel = section.intlLabel) === null || _section$intlLabel === void 0 ? void 0 : _section$intlLabel.id) && ((_section$intlLabel2 = section.intlLabel) === null || _section$intlLabel2 === void 0 ? void 0 : _section$intlLabel2.defaultMessage), 'section.intlLabel should be defined');
      (0, _invariant["default"])(Array.isArray(links), 'TypeError expected links to be an array');
      (0, _invariant["default"])(_this.settings[section.id] === undefined, 'A similar section already exists');
      _this.settings[section.id] = _objectSpread(_objectSpread({}, section), {}, {
        links: []
      });
      links.forEach(function (link) {
        _this.addSettingsLink(section.id, link);
      });
    });
    (0, _defineProperty2["default"])(this, "createStore", function () {
      var store = (0, _configureStore["default"])(_this.middlewares.middlewares, _this.reducers.reducers);
      return store;
    });
    (0, _defineProperty2["default"])(this, "getAdminInjectedComponents", function (moduleName, containerName, blockName) {
      try {
        return _this.admin.injectionZones[moduleName][containerName][blockName] || [];
      } catch (err) {
        console.error('Cannot get injected component', err);
        return err;
      }
    });
    (0, _defineProperty2["default"])(this, "getPlugin", function (pluginId) {
      return _this.plugins[pluginId];
    });
    (0, _defineProperty2["default"])(this, "injectContentManagerComponent", function (containerName, blockName, component) {
      var _this$admin$injection;

      (0, _invariant["default"])((_this$admin$injection = _this.admin.injectionZones.contentManager[containerName]) === null || _this$admin$injection === void 0 ? void 0 : _this$admin$injection[blockName], "The ".concat(containerName, " ").concat(blockName, " zone is not defined in the content manager"));
      (0, _invariant["default"])(component, 'A Component must be provided');

      _this.admin.injectionZones.contentManager[containerName][blockName].push(component);
    });
    (0, _defineProperty2["default"])(this, "injectAdminComponent", function (containerName, blockName, component) {
      var _this$admin$injection2;

      (0, _invariant["default"])((_this$admin$injection2 = _this.admin.injectionZones.admin[containerName]) === null || _this$admin$injection2 === void 0 ? void 0 : _this$admin$injection2[blockName], "The ".concat(containerName, " ").concat(blockName, " zone is not defined in the admin"));
      (0, _invariant["default"])(component, 'A Component must be provided');

      _this.admin.injectionZones.admin[containerName][blockName].push(component);
    });
    (0, _defineProperty2["default"])(this, "registerHook", function (name, fn) {
      (0, _invariant["default"])(_this.hooksDict[name], "The hook ".concat(name, " is not defined. You are trying to register a hook that does not exist in the application."));

      _this.hooksDict[name].register(fn);
    });
    (0, _defineProperty2["default"])(this, "registerPlugin", function (pluginConf) {
      var plugin = (0, _apis.Plugin)(pluginConf);
      _this.plugins[plugin.pluginId] = plugin;
    });
    (0, _defineProperty2["default"])(this, "runHookSeries", function (name) {
      var asynchronous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return asynchronous ? _this.hooksDict[name].runSeriesAsync() : _this.hooksDict[name].runSeries();
    });
    (0, _defineProperty2["default"])(this, "runHookWaterfall", function (name, initialValue) {
      var asynchronous = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var store = arguments.length > 3 ? arguments[3] : undefined;
      return asynchronous ? _this.hooksDict[name].runWaterfallAsync(initialValue, store) : _this.hooksDict[name].runWaterfall(initialValue, store);
    });
    (0, _defineProperty2["default"])(this, "runHookParallel", function (name) {
      return _this.hooksDict[name].runParallel();
    });
    this.customConfigurations = adminConfig.config;
    this.customBootstrapConfiguration = adminConfig.bootstrap;
    this.configurations = {
      authLogo: _logo_strapi_auth_v["default"],
      head: {
        favicon: _favicon["default"]
      },
      locales: ['en'],
      menuLogo: _logo_strapi_menu["default"],
      notifications: {
        releases: true
      },
      theme: _themes.lightTheme,
      translations: {},
      tutorials: true
    };
    this.appPlugins = appPlugins || {};
    this.library = library;
    this.middlewares = _middlewares;
    this.plugins = {};
    this.reducers = _reducers;
    this.translations = {};
    this.hooksDict = {};
    this.admin = {
      injectionZones: _injectionZones["default"]
    };
    this.menu = [];
    this.settings = {
      global: {
        id: 'global',
        intlLabel: {
          id: 'Settings.global',
          defaultMessage: 'Global Settings'
        },
        links: []
      }
    };
  }

  (0, _createClass2["default"])(StrapiApp, [{
    key: "bootstrap",
    value: function () {
      var _bootstrap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Object.keys(this.appPlugins).forEach(function (plugin) {
                  var bootstrap = _this2.appPlugins[plugin].bootstrap;

                  if (bootstrap) {
                    bootstrap({
                      addSettingsLink: _this2.addSettingsLink,
                      addSettingsLinks: _this2.addSettingsLinks,
                      getPlugin: _this2.getPlugin,
                      injectContentManagerComponent: _this2.injectContentManagerComponent,
                      injectAdminComponent: _this2.injectAdminComponent,
                      registerHook: _this2.registerHook
                    });
                  }
                });

                if ((0, _isFunction["default"])(this.customBootstrapConfiguration)) {
                  this.customBootstrapConfiguration({
                    addComponents: this.addComponents,
                    addFields: this.addFields,
                    addMenuLink: this.addMenuLink,
                    addReducers: this.addReducers,
                    addSettingsLink: this.addSettingsLink,
                    addSettingsLinks: this.addSettingsLinks,
                    getPlugin: this.getPlugin,
                    injectContentManagerComponent: this.injectContentManagerComponent,
                    injectAdminComponent: this.injectAdminComponent,
                    registerHook: this.registerHook
                  });
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function bootstrap() {
        return _bootstrap.apply(this, arguments);
      }

      return bootstrap;
    }()
  }, {
    key: "initialize",
    value: function () {
      var _initialize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                Object.keys(this.appPlugins).forEach(function (plugin) {
                  _this3.appPlugins[plugin].register({
                    addComponents: _this3.addComponents,
                    addCorePluginMenuLink: _this3.addCorePluginMenuLink,
                    addFields: _this3.addFields,
                    addMenuLink: _this3.addMenuLink,
                    addMiddlewares: _this3.addMiddlewares,
                    addReducers: _this3.addReducers,
                    createHook: _this3.createHook,
                    createSettingSection: _this3.createSettingSection,
                    registerPlugin: _this3.registerPlugin
                  });
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function initialize() {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }, {
    key: "loadAdminTrads",
    value:
    /**
     * Load the admin translations
     * @returns {Object} The imported admin translations
     */
    function () {
      var _loadAdminTrads = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var arrayOfPromises, adminLocales, translations;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                arrayOfPromises = this.configurations.locales.map(function (locale) {
                  return __webpack_require__("./.cache/admin/src/translations lazy recursive ^\\.\\/.*\\.json$")("./".concat(locale, ".json")).then(function (_ref4) {
                    var data = _ref4["default"];
                    return {
                      data: data,
                      locale: locale
                    };
                  })["catch"](function () {
                    return {
                      data: null,
                      locale: locale
                    };
                  });
                });
                _context5.next = 3;
                return Promise.all(arrayOfPromises);

              case 3:
                adminLocales = _context5.sent;
                translations = adminLocales.reduce(function (acc, current) {
                  if (current.data) {
                    acc[current.locale] = current.data;
                  }

                  return acc;
                }, {});
                return _context5.abrupt("return", translations);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function loadAdminTrads() {
        return _loadAdminTrads.apply(this, arguments);
      }

      return loadAdminTrads;
    }()
    /**
     * Load the application's translations and merged the custom translations
     * with the default ones.
     *
     */

  }, {
    key: "loadTrads",
    value: function () {
      var _loadTrads = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _this4 = this;

        var adminTranslations, arrayOfPromises, pluginsTrads, mergedTrads, translations;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.loadAdminTrads();

              case 2:
                adminTranslations = _context6.sent;
                arrayOfPromises = Object.keys(this.appPlugins).map(function (plugin) {
                  var registerTrads = _this4.appPlugins[plugin].registerTrads;

                  if (registerTrads) {
                    return registerTrads({
                      locales: _this4.configurations.locales
                    });
                  }

                  return null;
                }).filter(function (a) {
                  return a;
                });
                _context6.next = 6;
                return Promise.all(arrayOfPromises);

              case 6:
                pluginsTrads = _context6.sent;
                mergedTrads = pluginsTrads.reduce(function (acc, currentPluginTrads) {
                  var pluginTrads = currentPluginTrads.reduce(function (acc1, current) {
                    acc1[current.locale] = current.data;
                    return acc1;
                  }, {});
                  Object.keys(pluginTrads).forEach(function (locale) {
                    acc[locale] = _objectSpread(_objectSpread({}, acc[locale]), pluginTrads[locale]);
                  });
                  return acc;
                }, {});
                translations = this.configurations.locales.reduce(function (acc, current) {
                  var _this4$customConfigur, _this4$customConfigur2;

                  acc[current] = _objectSpread(_objectSpread(_objectSpread({}, adminTranslations[current]), mergedTrads[current] || {}), (_this4$customConfigur = _this4.customConfigurations) === null || _this4$customConfigur === void 0 ? void 0 : (_this4$customConfigur2 = _this4$customConfigur.translations) === null || _this4$customConfigur2 === void 0 ? void 0 : _this4$customConfigur2[current]);
                  return acc;
                }, {});
                this.configurations.translations = translations;
                return _context6.abrupt("return", Promise.resolve());

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function loadTrads() {
        return _loadTrads.apply(this, arguments);
      }

      return loadTrads;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var store = this.createStore();
      var localeNames = (0, _pick["default"])(_languageNativeNames["default"], this.configurations.locales || []);
      var _this$library = this.library,
          components = _this$library.components.components,
          fields = _this$library.fields.fields;
      return /*#__PURE__*/_react["default"].createElement(_Theme["default"], {
        theme: this.configurations.theme
      }, /*#__PURE__*/_react["default"].createElement(_Providers["default"], {
        authLogo: this.configurations.authLogo,
        components: components,
        fields: fields,
        localeNames: localeNames,
        getAdminInjectedComponents: this.getAdminInjectedComponents,
        getPlugin: this.getPlugin,
        messages: this.configurations.translations,
        menu: this.menu,
        menuLogo: this.configurations.menuLogo,
        plugins: this.plugins,
        runHookParallel: this.runHookParallel,
        runHookWaterfall: function runHookWaterfall(name, initialValue) {
          var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return _this5.runHookWaterfall(name, initialValue, async, store);
        },
        runHookSeries: this.runHookSeries,
        settings: this.settings,
        showTutorials: this.configurations.tutorials,
        showReleaseNotification: this.configurations.notifications.releases,
        store: store
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
        link: [{
          rel: 'icon',
          type: 'image/png',
          href: this.configurations.head.favicon
        }]
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, {
        basename: _utils.basename
      }, /*#__PURE__*/_react["default"].createElement(_App["default"], {
        store: store
      })))));
    }
  }]);
  return StrapiApp;
}();

var _default = function _default(_ref5) {
  var _ref5$adminConfig = _ref5.adminConfig,
      adminConfig = _ref5$adminConfig === void 0 ? {} : _ref5$adminConfig,
      appPlugins = _ref5.appPlugins,
      library = _ref5.library,
      middlewares = _ref5.middlewares,
      reducers = _ref5.reducers;
  return new StrapiApp({
    adminConfig: adminConfig,
    appPlugins: appPlugins,
    library: library,
    middlewares: middlewares,
    reducers: reducers
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/Blocker.js":
/*!*********************************************************************************!*\
  !*** ./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/Blocker.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./src/admin/node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Clock = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Clock */ "./node_modules/@strapi/icons/Clock.js"));

var _Refresh = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Refresh */ "./node_modules/@strapi/icons/Refresh.js"));

var _Link = __webpack_require__(/*! @strapi/design-system/Link */ "./node_modules/@strapi/design-system/Link.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Overlay = __webpack_require__(/*! ./Overlay */ "./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/Overlay.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var overlayContainer = document.createElement('div');
var ID = 'autoReloadOverlayBlocker';
overlayContainer.setAttribute('id', ID);
var rotation = /*#__PURE__*/(0, _styledComponents.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]);
var LoaderReload = /*#__PURE__*/(0, _styledComponents["default"])(_Refresh["default"]).withConfig({
  displayName: "Blocker__LoaderReload",
  componentId: "sc-1kwosq1-0"
})(["animation:", " 1s infinite linear;"], rotation);

var Blocker = function Blocker(_ref) {
  var displayedIcon = _ref.displayedIcon,
      description = _ref.description,
      title = _ref.title,
      isOpen = _ref.isOpen;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  (0, _react.useEffect)(function () {
    document.body.appendChild(overlayContainer);
    return function () {
      document.body.removeChild(overlayContainer);
    };
  }, []);

  if (isOpen) {
    return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_Overlay.Overlay, null, /*#__PURE__*/_react["default"].createElement(_Overlay.Content, {
      spacing: 6
    }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      as: "h1",
      variant: "alpha"
    }, formatMessage(title))), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
      as: "h2",
      textColor: "neutral600",
      fontSize: 4,
      fontWeight: "regular"
    }, formatMessage(description)))), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
      justifyContent: "center"
    }, displayedIcon === 'reload' && /*#__PURE__*/_react["default"].createElement(_Overlay.IconBox, {
      padding: 6,
      background: "primary100",
      borderColor: "primary200"
    }, /*#__PURE__*/_react["default"].createElement(LoaderReload, {
      width: (0, _helperPlugin.pxToRem)(36),
      height: (0, _helperPlugin.pxToRem)(36)
    })), displayedIcon === 'time' && /*#__PURE__*/_react["default"].createElement(_Overlay.IconBox, {
      padding: 6,
      background: "primary100",
      borderColor: "primary200"
    }, /*#__PURE__*/_react["default"].createElement(_Clock["default"], {
      width: (0, _helperPlugin.pxToRem)(40),
      height: (0, _helperPlugin.pxToRem)(40)
    }))), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      paddingTop: 2
    }, /*#__PURE__*/_react["default"].createElement(_Link.Link, {
      href: "https://docs.strapi.io",
      target: "_blank",
      rel: "noopener noreferrer nofollow"
    }, formatMessage({
      id: 'app.components.BlockLink.documentation',
      defaultMessage: 'Read the documentation'
    })))))), overlayContainer);
  }

  return null;
};

Blocker.propTypes = {
  displayedIcon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]).isRequired,
  description: _propTypes["default"].object.isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  title: _propTypes["default"].object.isRequired
};
var _default = Blocker;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/Overlay.js":
/*!*********************************************************************************!*\
  !*** ./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/Overlay.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Overlay = exports.IconBox = exports.Content = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var Overlay = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "Overlay",
  componentId: "sc-ckbb9y-0"
})(["position:fixed;top:0;right:0;bottom:0;left:0;z-index:1140;&:before{content:'';position:fixed;top:0;right:0;bottom:0;left:0;background:", ";opacity:0.9;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral0;
});
exports.Overlay = Overlay;
var Content = /*#__PURE__*/(0, _styledComponents["default"])(_Stack.Stack).withConfig({
  displayName: "Overlay__Content",
  componentId: "sc-ckbb9y-1"
})(["position:fixed;top:0;right:0;bottom:0;left:0;padding-top:", ";"], (0, _helperPlugin.pxToRem)(160));
exports.Content = Content;
var IconBox = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "Overlay__IconBox",
  componentId: "sc-ckbb9y-2"
})(["border-radius:50%;svg{> path{fill:", " !important;}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary600;
});
exports.IconBox = IconBox;

/***/ }),

/***/ "./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/index.js":
/*!*******************************************************************************!*\
  !*** ./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Blocker = _interopRequireDefault(__webpack_require__(/*! ./Blocker */ "./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/Blocker.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ELAPSED = 30;

var AutoReloadOverlayBlockerProvider = function AutoReloadOverlayBlockerProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)({
    elapsed: 0,
    start: 0
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      elapsed = _useState4[0].elapsed,
      setState = _useState4[1];

  var _useState5 = (0, _react.useState)(undefined),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      config = _useState6[0],
      setConfig = _useState6[1];

  var lockAppWithAutoreload = function lockAppWithAutoreload() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    setIsOpen(true);
    setConfig(config);
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        start: Date.now()
      });
    });
  };

  var unlockAppWithAutoreload = function unlockAppWithAutoreload() {
    setIsOpen(false);
    setState({
      start: 0,
      elapsed: 0
    });
    setConfig(undefined);
  };

  var lockApp = (0, _react.useRef)(lockAppWithAutoreload);
  var unlockApp = (0, _react.useRef)(unlockAppWithAutoreload);
  (0, _react.useEffect)(function () {
    var timer = null;

    if (isOpen) {
      timer = setInterval(function () {
        if (elapsed > ELAPSED) {
          clearInterval(timer);
          return null;
        }

        setState(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            elapsed: Math.round(Date.now() - prev.start) / 1000
          });
        });
        return null;
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return function () {
      clearInterval(timer);
    };
  }, [isOpen, elapsed]);
  var displayedIcon = (config === null || config === void 0 ? void 0 : config.icon) || 'reload';
  var description = {
    id: (config === null || config === void 0 ? void 0 : config.description) || 'components.OverlayBlocker.description',
    defaultMessage: "You're using a feature that needs the server to restart. Please wait until the server is up."
  };
  var title = {
    id: (config === null || config === void 0 ? void 0 : config.title) || 'components.OverlayBlocker.title',
    defaultMessage: 'Waiting for restart'
  };

  if (elapsed > ELAPSED) {
    displayedIcon = 'time';
    description = {
      id: 'components.OverlayBlocker.description.serverError',
      defaultMessage: 'The server should have restarted, please check your logs in the terminal.'
    };
    title = {
      id: 'components.OverlayBlocker.title.serverError',
      defaultMessage: 'The restart is taking longer than expected'
    };
  }

  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.AutoReloadOverlayBockerContext.Provider, {
    value: {
      lockApp: lockApp.current,
      unlockApp: unlockApp.current
    }
  }, /*#__PURE__*/_react["default"].createElement(_Blocker["default"], {
    displayedIcon: displayedIcon,
    isOpen: isOpen,
    description: description,
    title: title
  }), children);
};

AutoReloadOverlayBlockerProvider.propTypes = {
  children: _propTypes["default"].element.isRequired
};
var _default = AutoReloadOverlayBlockerProvider;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GlobalStyle/index.js":
/*!**********************************************************!*\
  !*** ./.cache/admin/src/components/GlobalStyle/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _styledComponents = __webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js");

var loadCss = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/*! import() | fontawesome-css */ "fontawesome-css").then(__webpack_require__.bind(__webpack_require__, /*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css"));

          case 2:
            _context.next = 4;
            return __webpack_require__.e(/*! import() | fontawesome-css-all */ "fontawesome-css-all").then(__webpack_require__.bind(__webpack_require__, /*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css"));

          case 4:
            _context.next = 6;
            return __webpack_require__.e(/*! import() | fontawesome-js */ "fontawesome-js").then(__webpack_require__.t.bind(__webpack_require__, /*! @fortawesome/fontawesome-free/js/all.min */ "./node_modules/@fortawesome/fontawesome-free/js/all.min.js", 23));

          case 6:
            _context.next = 8;
            return Promise.all(/*! import() | cropper-css */[__webpack_require__.e("vendors-node_modules_cropperjs_dist_cropper_css"), __webpack_require__.e("cropper-css")]).then(__webpack_require__.bind(__webpack_require__, /*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css"));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadCss() {
    return _ref.apply(this, arguments);
  };
}();

loadCss();
var GlobalStyle = /*#__PURE__*/(0, _styledComponents.createGlobalStyle)(["body{background:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.neutral100;
});
var _default = GlobalStyle;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/index.js":
/*!*********************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _persistStateToLocaleStorage = _interopRequireDefault(__webpack_require__(/*! ./utils/persistStateToLocaleStorage */ "./.cache/admin/src/components/GuidedTour/utils/persistStateToLocaleStorage.js"));

var _arePreviousSectionsDone = _interopRequireDefault(__webpack_require__(/*! ./utils/arePreviousSectionsDone */ "./.cache/admin/src/components/GuidedTour/utils/arePreviousSectionsDone.js"));

var _arePreviousStepsDone = _interopRequireDefault(__webpack_require__(/*! ./utils/arePreviousStepsDone */ "./.cache/admin/src/components/GuidedTour/utils/arePreviousStepsDone.js"));

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/components/GuidedTour/reducer.js"));

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./.cache/admin/src/components/GuidedTour/init.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GuidedTour = function GuidedTour(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState, _init["default"]),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      currentStep = _useReducer2$.currentStep,
      guidedTourState = _useReducer2$.guidedTourState,
      isGuidedTourVisible = _useReducer2$.isGuidedTourVisible,
      isSkipped = _useReducer2$.isSkipped,
      dispatch = _useReducer2[1];

  var setCurrentStep = function setCurrentStep(step) {
    // if step is null it is intentional, we need to dispatch it
    if (step !== null) {
      var isStepAlreadyDone = (0, _get["default"])(guidedTourState, step);
      var isStepToShow = (0, _arePreviousStepsDone["default"])(step, guidedTourState);

      if (isStepAlreadyDone || isSkipped || !isStepToShow) {
        return null;
      }
    }

    _persistStateToLocaleStorage["default"].addCurrentStep(step);

    return dispatch({
      type: 'SET_CURRENT_STEP',
      step: step
    });
  };

  var setGuidedTourVisibility = function setGuidedTourVisibility(value) {
    dispatch({
      type: 'SET_GUIDED_TOUR_VISIBILITY',
      value: value
    });
  };

  var setStepState = function setStepState(currentStep, value) {
    _persistStateToLocaleStorage["default"].addCompletedStep(currentStep);

    dispatch({
      type: 'SET_STEP_STATE',
      currentStep: currentStep,
      value: value
    });
  };

  var startSection = function startSection(sectionName) {
    var sectionSteps = guidedTourState[sectionName];

    if (sectionSteps) {
      var isSectionToShow = (0, _arePreviousSectionsDone["default"])(sectionName, guidedTourState);
      var firstStep = Object.keys(sectionSteps)[0];
      var isFirstStepDone = sectionSteps[firstStep];

      if (isSectionToShow && !currentStep && !isFirstStepDone) {
        return setCurrentStep("".concat(sectionName, ".").concat(firstStep));
      }
    }

    return null;
  };

  var setSkipped = function setSkipped(value) {
    _persistStateToLocaleStorage["default"].setSkipped(value);

    dispatch({
      type: 'SET_SKIPPED',
      value: value
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.GuidedTourProvider, {
    guidedTourState: guidedTourState,
    currentStep: currentStep,
    setCurrentStep: setCurrentStep,
    setGuidedTourVisibility: setGuidedTourVisibility,
    setSkipped: setSkipped,
    setStepState: setStepState,
    startSection: startSection,
    isGuidedTourVisible: isGuidedTourVisible,
    isSkipped: isSkipped
  }, children);
};

GuidedTour.propTypes = {
  children: _propTypes["default"].element.isRequired
};
var _default = GuidedTour;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/init.js":
/*!********************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/init.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js"));

var _persistStateToLocaleStorage = _interopRequireWildcard(__webpack_require__(/*! ./utils/persistStateToLocaleStorage */ "./.cache/admin/src/components/GuidedTour/utils/persistStateToLocaleStorage.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var init = function init(initialState) {
  var copyInitialState = _objectSpread({}, initialState);

  var guidedTourLocaleStorage = _persistStateToLocaleStorage["default"].get(_persistStateToLocaleStorage.COMPLETED_STEPS);

  var currentStepLocaleStorage = _persistStateToLocaleStorage["default"].get(_persistStateToLocaleStorage.CURRENT_STEP);

  var skippedLocaleStorage = _persistStateToLocaleStorage["default"].get(_persistStateToLocaleStorage.SKIPPED);

  if (guidedTourLocaleStorage) {
    guidedTourLocaleStorage.forEach(function (step) {
      var _step$split = step.split('.'),
          _step$split2 = (0, _slicedToArray2["default"])(_step$split, 2),
          sectionName = _step$split2[0],
          stepName = _step$split2[1];

      (0, _set["default"])(copyInitialState, ['guidedTourState', sectionName, stepName], true);
    });
  } // if current step when initializing mark it as done


  if (currentStepLocaleStorage) {
    var _currentStepLocaleSto = currentStepLocaleStorage.split('.'),
        _currentStepLocaleSto2 = (0, _slicedToArray2["default"])(_currentStepLocaleSto, 2),
        sectionName = _currentStepLocaleSto2[0],
        stepName = _currentStepLocaleSto2[1];

    (0, _set["default"])(copyInitialState, ['guidedTourState', sectionName, stepName], true);

    _persistStateToLocaleStorage["default"].addCompletedStep(currentStepLocaleStorage);

    _persistStateToLocaleStorage["default"].addCurrentStep(null);
  }

  if (skippedLocaleStorage !== null) {
    (0, _set["default"])(copyInitialState, 'isSkipped', skippedLocaleStorage);
  }

  return copyInitialState;
};

var _default = init;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/reducer.js":
/*!***********************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/reducer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

/* eslint-disable consistent-return */
var initialState = {
  currentStep: null,
  guidedTourState: {
    contentTypeBuilder: {
      create: false,
      success: false
    },
    contentManager: {
      create: false,
      success: false
    },
    apiTokens: {
      create: false,
      success: false
    }
  },
  isGuidedTourVisible: false,
  isSkipped: true
};
exports.initialState = initialState;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer["default"])(state, function (draftState) {
    switch (action.type) {
      case 'SET_CURRENT_STEP':
        {
          draftState.currentStep = action.step;
          break;
        }

      case 'SET_STEP_STATE':
        {
          var _action$currentStep$s = action.currentStep.split('.'),
              _action$currentStep$s2 = (0, _slicedToArray2["default"])(_action$currentStep$s, 2),
              section = _action$currentStep$s2[0],
              step = _action$currentStep$s2[1];

          draftState.guidedTourState[section][step] = action.value;
          break;
        }

      case 'SET_SKIPPED':
        {
          draftState.isSkipped = action.value;
          break;
        }

      case 'SET_GUIDED_TOUR_VISIBILITY':
        {
          draftState.isGuidedTourVisible = action.value;
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

/***/ "./.cache/admin/src/components/GuidedTour/utils/arePreviousSectionsDone.js":
/*!*********************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/utils/arePreviousSectionsDone.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var arePreviousSectionsDone = function arePreviousSectionsDone(sectionName, guidedTourState) {
  var guidedTourArray = Object.entries(guidedTourState); // Find current section position in the guidedTourArray
  // Get only previous sections based on current section position

  var currentSectionIndex = guidedTourArray.findIndex(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
        key = _ref2[0];

    return key === sectionName;
  });
  var previousSections = guidedTourArray.slice(0, currentSectionIndex); // Check if every steps from previous section are done

  return previousSections.every(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        sectionValue = _ref4[1];

    return Object.values(sectionValue).every(Boolean);
  });
};

var _default = arePreviousSectionsDone;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/utils/arePreviousStepsDone.js":
/*!******************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/utils/arePreviousStepsDone.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var arePreviousStepsDone = function arePreviousStepsDone(step, guidedTourState) {
  var stepSplit = step.split('.');
  var stepName = stepSplit[1];
  var sectionArray = Object.entries(guidedTourState[stepSplit[0]]);
  var currentStepIndex = sectionArray.findIndex(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
        key = _ref2[0];

    return key === stepName;
  });
  var previousSteps = sectionArray.slice(0, currentStepIndex);
  return previousSteps.every(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        sectionValue = _ref4[1];

    return sectionValue;
  });
};

var _default = arePreviousStepsDone;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/GuidedTour/utils/persistStateToLocaleStorage.js":
/*!*************************************************************************************!*\
  !*** ./.cache/admin/src/components/GuidedTour/utils/persistStateToLocaleStorage.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.SKIPPED = exports.CURRENT_STEP = exports.COMPLETED_STEPS = void 0;
var CURRENT_STEP = 'GUIDED_TOUR_CURRENT_STEP';
exports.CURRENT_STEP = CURRENT_STEP;
var COMPLETED_STEPS = 'GUIDED_TOUR_COMPLETED_STEPS';
exports.COMPLETED_STEPS = COMPLETED_STEPS;
var SKIPPED = 'GUIDED_TOUR_SKIPPED';
exports.SKIPPED = SKIPPED;
var parse = JSON.parse;
var stringify = JSON.stringify;
var persistStateToLocaleStorage = {
  clear: function clear() {
    localStorage.removeItem(CURRENT_STEP);
    localStorage.removeItem(COMPLETED_STEPS);
  },
  addCompletedStep: function addCompletedStep(completedStep) {
    var _parse;

    var currentSteps = ((_parse = parse(localStorage.getItem(COMPLETED_STEPS))) === null || _parse === void 0 ? void 0 : _parse.slice()) || [];
    var isAlreadyStored = currentSteps.includes(completedStep);

    if (isAlreadyStored) {
      return;
    }

    currentSteps.push(completedStep);
    localStorage.setItem(COMPLETED_STEPS, stringify(currentSteps));
  },
  addCurrentStep: function addCurrentStep(currentStep) {
    localStorage.setItem(CURRENT_STEP, stringify(currentStep));
  },
  setSkipped: function setSkipped(value) {
    localStorage.setItem(SKIPPED, stringify(value));
  },
  get: function get(item) {
    return parse(localStorage.getItem(item));
  }
};
var _default = persistStateToLocaleStorage;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/LanguageProvider/index.js":
/*!***************************************************************!*\
  !*** ./.cache/admin/src/components/LanguageProvider/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _defaultsDeep = _interopRequireDefault(__webpack_require__(/*! lodash/defaultsDeep */ "./node_modules/lodash/defaultsDeep.js"));

var _LocalesProvider = _interopRequireDefault(__webpack_require__(/*! ../LocalesProvider */ "./.cache/admin/src/components/LocalesProvider/index.js"));

var _localStorageKey = _interopRequireDefault(__webpack_require__(/*! ./utils/localStorageKey */ "./.cache/admin/src/components/LanguageProvider/utils/localStorageKey.js"));

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./.cache/admin/src/components/LanguageProvider/init.js"));

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/components/LanguageProvider/reducer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */
var LanguageProvider = function LanguageProvider(_ref) {
  var children = _ref.children,
      localeNames = _ref.localeNames,
      messages = _ref.messages;

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState, function () {
    return (0, _init["default"])(localeNames);
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      locale = _useReducer2[0].locale,
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    // Set user language in local storage.
    window.localStorage.setItem(_localStorageKey["default"], locale);
  }, [locale]);

  var changeLocale = function changeLocale(locale) {
    dispatch({
      type: 'CHANGE_LOCALE',
      locale: locale
    });
  };

  var appMessages = (0, _defaultsDeep["default"])(messages[locale], messages.en);
  return /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
    locale: locale,
    defaultLocale: "en",
    messages: appMessages,
    textComponent: "span"
  }, /*#__PURE__*/_react["default"].createElement(_LocalesProvider["default"], {
    changeLocale: changeLocale,
    localeNames: localeNames,
    messages: appMessages
  }, children));
};

LanguageProvider.propTypes = {
  children: _propTypes["default"].element.isRequired,
  localeNames: _propTypes["default"].objectOf(_propTypes["default"].string).isRequired,
  messages: _propTypes["default"].object.isRequired
};
var _default = LanguageProvider;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/LanguageProvider/init.js":
/*!**************************************************************!*\
  !*** ./.cache/admin/src/components/LanguageProvider/init.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _localStorageKey = _interopRequireDefault(__webpack_require__(/*! ./utils/localStorageKey */ "./.cache/admin/src/components/LanguageProvider/utils/localStorageKey.js"));

var init = function init(localeNames) {
  var languageFromLocaleStorage = window.localStorage.getItem(_localStorageKey["default"]);
  var appLanguage = localeNames[languageFromLocaleStorage] ? languageFromLocaleStorage : 'en';
  return {
    locale: appLanguage,
    localeNames: localeNames
  };
};

var _default = init;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/LanguageProvider/reducer.js":
/*!*****************************************************************!*\
  !*** ./.cache/admin/src/components/LanguageProvider/reducer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/*
 *
 * LanguageProvider reducer
 *
 */
var initialState = {
  localeNames: {
    en: 'English'
  },
  locale: 'en'
};
exports.initialState = initialState;

var languageProviderReducer = function languageProviderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CHANGE_LOCALE':
      {
        var locale = action.locale;

        if (!state.localeNames[locale]) {
          return state;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          locale: locale
        });
      }

    default:
      {
        return state;
      }
  }
};

var _default = languageProviderReducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/LanguageProvider/utils/localStorageKey.js":
/*!*******************************************************************************!*\
  !*** ./.cache/admin/src/components/LanguageProvider/utils/localStorageKey.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var localStorageKey = 'strapi-admin-language';
var _default = localStorageKey;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/LocalesProvider/context.js":
/*!****************************************************************!*\
  !*** ./.cache/admin/src/components/LocalesProvider/context.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var LocalesProviderContext = /*#__PURE__*/(0, _react.createContext)();
var _default = LocalesProviderContext;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/LocalesProvider/index.js":
/*!**************************************************************!*\
  !*** ./.cache/admin/src/components/LocalesProvider/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./.cache/admin/src/components/LocalesProvider/context.js"));

var LocalesProvider = function LocalesProvider(_ref) {
  var changeLocale = _ref.changeLocale,
      children = _ref.children,
      localeNames = _ref.localeNames,
      messages = _ref.messages;
  return /*#__PURE__*/_react["default"].createElement(_context["default"].Provider, {
    value: {
      changeLocale: changeLocale,
      localeNames: localeNames,
      messages: messages
    }
  }, children);
};

LocalesProvider.propTypes = {
  changeLocale: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].element.isRequired,
  localeNames: _propTypes["default"].object.isRequired,
  messages: _propTypes["default"].object.isRequired
};
var _default = LocalesProvider;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js":
/*!***************************************************************************!*\
  !*** ./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./.cache/admin/src/components/LocalesProvider/context.js"));

var useLocalesProvider = function useLocalesProvider() {
  var _useContext = (0, _react.useContext)(_context["default"]),
      changeLocale = _useContext.changeLocale,
      localeNames = _useContext.localeNames,
      messages = _useContext.messages;

  return {
    changeLocale: changeLocale,
    localeNames: localeNames,
    messages: messages
  };
};

var _default = useLocalesProvider;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/Notifications/Notification/index.js":
/*!*************************************************************************!*\
  !*** ./.cache/admin/src/components/Notifications/Notification/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Alert = __webpack_require__(/*! @strapi/design-system/Alert */ "./node_modules/@strapi/design-system/Alert.js");

var _Link = __webpack_require__(/*! @strapi/design-system/Link */ "./node_modules/@strapi/design-system/Link.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Notification = function Notification(_ref) {
  var _link$label, _link$label2, _link$label3;

  var dispatch = _ref.dispatch,
      notification = _ref.notification;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var message = notification.message,
      link = notification.link,
      type = notification.type,
      id = notification.id,
      onClose = notification.onClose,
      timeout = notification.timeout,
      blockTransition = notification.blockTransition;

  var formattedMessage = function formattedMessage(msg) {
    return typeof msg === 'string' ? msg : formatMessage(msg, msg.values);
  };

  var handleClose = (0, _react.useCallback)(function () {
    if (onClose) {
      onClose();
    }

    dispatch({
      type: 'HIDE_NOTIFICATION',
      id: id
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  (0, _react.useEffect)(function () {
    var timeoutToClear;

    if (!blockTransition) {
      timeoutToClear = setTimeout(function () {
        handleClose();
      }, timeout || 2500);
    }

    return function () {
      return clearTimeout(timeoutToClear);
    };
  }, [blockTransition, handleClose, timeout]);
  var variant;
  var alertTitle;

  if (type === 'info') {
    variant = 'default';
    alertTitle = formatMessage({
      id: 'notification.default.title',
      defaultMessage: 'Information:'
    });
  } else if (type === 'warning') {
    alertTitle = formatMessage({
      id: 'notification.warning.title',
      defaultMessage: 'Warning:'
    });
    variant = 'danger';
  } else {
    alertTitle = formatMessage({
      id: 'notification.success.title',
      defaultMessage: 'Success:'
    });
    variant = 'success';
  }

  return /*#__PURE__*/_react["default"].createElement(_Alert.Alert, {
    action: link ? /*#__PURE__*/_react["default"].createElement(_Link.Link, {
      href: link.url,
      target: "_blank"
    }, formatMessage({
      id: ((_link$label = link.label) === null || _link$label === void 0 ? void 0 : _link$label.id) || link.label,
      defaultMessage: ((_link$label2 = link.label) === null || _link$label2 === void 0 ? void 0 : _link$label2.defaultMessage) || ((_link$label3 = link.label) === null || _link$label3 === void 0 ? void 0 : _link$label3.id) || link.label
    })) : undefined,
    onClose: handleClose,
    closeLabel: "Close",
    title: alertTitle,
    variant: variant
  }, formattedMessage({
    id: (message === null || message === void 0 ? void 0 : message.id) || message,
    defaultMessage: (message === null || message === void 0 ? void 0 : message.defaultMessage) || (message === null || message === void 0 ? void 0 : message.id) || message
  }));
};

Notification.defaultProps = {
  notification: {
    id: 1,
    type: 'success',
    message: {
      id: 'notification.success.saved',
      defaultMessage: 'Saved'
    },
    onClose: function onClose() {
      return null;
    },
    timeout: 2500,
    blockTransition: false
  }
};
Notification.propTypes = {
  dispatch: _propTypes["default"].func.isRequired,
  notification: _propTypes["default"].shape({
    id: _propTypes["default"].number,
    message: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
      id: _propTypes["default"].string.isRequired,
      defaultMessage: _propTypes["default"].string,
      values: _propTypes["default"].object
    })]),
    link: _propTypes["default"].shape({
      target: _propTypes["default"].string,
      url: _propTypes["default"].string.isRequired,
      label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
        id: _propTypes["default"].string.isRequired,
        defaultMessage: _propTypes["default"].string,
        values: _propTypes["default"].object
      })]).isRequired
    }),
    type: _propTypes["default"].string,
    onClose: _propTypes["default"].func,
    timeout: _propTypes["default"].number,
    blockTransition: _propTypes["default"].bool
  })
};
var _default = Notification;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/Notifications/index.js":
/*!************************************************************!*\
  !*** ./.cache/admin/src/components/Notifications/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Notification = _interopRequireDefault(__webpack_require__(/*! ./Notification */ "./.cache/admin/src/components/Notifications/Notification/index.js"));

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/components/Notifications/reducer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Notifications = function Notifications(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      notifications = _useReducer2[0].notifications,
      dispatch = _useReducer2[1];

  var displayNotification = function displayNotification(config) {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      config: config
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.NotificationsProvider, {
    toggleNotification: displayNotification
  }, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    left: "50%",
    marginLeft: "-250px",
    position: "fixed",
    spacing: 2,
    top: "".concat(46 / 16, "rem"),
    width: "".concat(500 / 16, "rem"),
    zIndex: 10
  }, notifications.map(function (notification) {
    return /*#__PURE__*/_react["default"].createElement(_Notification["default"], {
      key: notification.id,
      dispatch: dispatch,
      notification: notification
    });
  })), children);
};

Notifications.propTypes = {
  children: _propTypes["default"].element.isRequired
};
var _default = Notifications;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/Notifications/reducer.js":
/*!**************************************************************!*\
  !*** ./.cache/admin/src/components/Notifications/reducer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var initialState = {
  notifId: 0,
  notifications: []
};
exports.initialState = initialState;

var notificationReducer = function notificationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (// eslint-disable-next-line consistent-return
    (0, _immer["default"])(state, function (draftState) {
      switch (action.type) {
        case 'SHOW_NOTIFICATION':
          {
            draftState.notifications.push({
              // No action.config spread to limit the notification API and avoid customization
              id: state.notifId,
              type: (0, _get["default"])(action, ['config', 'type'], 'success'),
              message: (0, _get["default"])(action, ['config', 'message'], {
                id: 'notification.success.saved',
                defaultMessage: 'Saved'
              }),
              link: (0, _get["default"])(action, ['config', 'link'], null),
              timeout: (0, _get["default"])(action, ['config', 'timeout'], 2500),
              blockTransition: (0, _get["default"])(action, ['config', 'blockTransition'], false),
              onClose: (0, _get["default"])(action, ['config', 'onClose'], null)
            });
            draftState.notifId = state.notifId + 1;
            break;
          }

        case 'HIDE_NOTIFICATION':
          {
            var indexToRemove = state.notifications.findIndex(function (notif) {
              return notif.id === action.id;
            });

            if (indexToRemove !== -1) {
              draftState.notifications.splice(indexToRemove, 1);
            }

            break;
          }

        default:
          {
            return draftState;
          }
      }
    })
  );
};

var _default = notificationReducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/OverlayBlocker/index.js":
/*!*************************************************************!*\
  !*** ./.cache/admin/src/components/OverlayBlocker/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./src/admin/node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 * OverlayBlockerProvider
 *
 */
var overlayContainer = document.createElement('div');
overlayContainer.setAttribute('id', 'overlayBlocker');

var Overlay = /*#__PURE__*/_styledComponents["default"].div.withConfig({
  displayName: "OverlayBlocker__Overlay",
  componentId: "sc-127jbdn-0"
})(["position:fixed;top:0;right:0;bottom:0;left:0;z-index:1140;"]);

var Portal = function Portal(_ref) {
  var isOpen = _ref.isOpen;
  (0, _react.useEffect)(function () {
    document.body.appendChild(overlayContainer);
    return function () {
      document.body.removeChild(overlayContainer);
    };
  }, []);

  if (isOpen) {
    return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(Overlay, null), overlayContainer);
  }

  return null;
};

var OverlayBlockerProvider = function OverlayBlockerProvider(_ref2) {
  var children = _ref2.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var lockApp = function lockApp() {
    setIsOpen(true);
  };

  var unlockApp = function unlockApp() {
    setIsOpen(false);
  };

  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.OverlayBlockerContext.Provider, {
    value: {
      lockApp: lockApp,
      unlockApp: unlockApp
    }
  }, children, /*#__PURE__*/_react["default"].createElement(Portal, {
    isOpen: isOpen
  }));
};

OverlayBlockerProvider.propTypes = {
  children: _propTypes["default"].node.isRequired
};
var _default = OverlayBlockerProvider;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/PrivateRoute/index.js":
/*!***********************************************************!*\
  !*** ./.cache/admin/src/components/PrivateRoute/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _excluded = ["component", "path"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/jsx-curly-newline */
var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      path = _ref.path,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useLocation = (0, _reactRouterDom.useLocation)(),
      pathname = _useLocation.pathname,
      search = _useLocation.search;

  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: path,
    render: function render(props) {
      return _helperPlugin.auth.getToken() !== null ? /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, rest, props)) : /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
        to: {
          pathname: '/auth/login',
          search: pathname !== '/' && "?redirectTo=".concat(encodeURIComponent("".concat(pathname).concat(search)))
        }
      });
    }
  });
};

PrivateRoute.propTypes = {
  component: _propTypes["default"].any.isRequired,
  path: _propTypes["default"].string.isRequired
};

var _default = /*#__PURE__*/(0, _react.memo)(PrivateRoute);

exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/Providers/index.js":
/*!********************************************************!*\
  !*** ./.cache/admin/src/components/Providers/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./src/admin/node_modules/react-redux/lib/index.js");

var _contexts = __webpack_require__(/*! ../../contexts */ "./.cache/admin/src/contexts/index.js");

var _LanguageProvider = _interopRequireDefault(__webpack_require__(/*! ../LanguageProvider */ "./.cache/admin/src/components/LanguageProvider/index.js"));

var _GuidedTour = _interopRequireDefault(__webpack_require__(/*! ../GuidedTour */ "./.cache/admin/src/components/GuidedTour/index.js"));

var _AutoReloadOverlayBlockerProvider = _interopRequireDefault(__webpack_require__(/*! ../AutoReloadOverlayBlockerProvider */ "./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/index.js"));

var _Notifications = _interopRequireDefault(__webpack_require__(/*! ../Notifications */ "./.cache/admin/src/components/Notifications/index.js"));

var _OverlayBlocker = _interopRequireDefault(__webpack_require__(/*! ../OverlayBlocker */ "./.cache/admin/src/components/OverlayBlocker/index.js"));

var queryClient = new _reactQuery.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

var Providers = function Providers(_ref) {
  var authLogo = _ref.authLogo,
      children = _ref.children,
      components = _ref.components,
      fields = _ref.fields,
      getAdminInjectedComponents = _ref.getAdminInjectedComponents,
      getPlugin = _ref.getPlugin,
      localeNames = _ref.localeNames,
      menu = _ref.menu,
      menuLogo = _ref.menuLogo,
      messages = _ref.messages,
      plugins = _ref.plugins,
      runHookParallel = _ref.runHookParallel,
      runHookSeries = _ref.runHookSeries,
      runHookWaterfall = _ref.runHookWaterfall,
      settings = _ref.settings,
      showReleaseNotification = _ref.showReleaseNotification,
      showTutorials = _ref.showTutorials,
      store = _ref.store;
  return /*#__PURE__*/_react["default"].createElement(_reactQuery.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_contexts.AdminContext.Provider, {
    value: {
      getAdminInjectedComponents: getAdminInjectedComponents
    }
  }, /*#__PURE__*/_react["default"].createElement(_contexts.ConfigurationsContext.Provider, {
    value: {
      authLogo: authLogo,
      menuLogo: menuLogo,
      showReleaseNotification: showReleaseNotification,
      showTutorials: showTutorials
    }
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.StrapiAppProvider, {
    getPlugin: getPlugin,
    menu: menu,
    plugins: plugins,
    runHookParallel: runHookParallel,
    runHookWaterfall: runHookWaterfall,
    runHookSeries: runHookSeries,
    settings: settings
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.LibraryProvider, {
    components: components,
    fields: fields
  }, /*#__PURE__*/_react["default"].createElement(_LanguageProvider["default"], {
    messages: messages,
    localeNames: localeNames
  }, /*#__PURE__*/_react["default"].createElement(_AutoReloadOverlayBlockerProvider["default"], null, /*#__PURE__*/_react["default"].createElement(_OverlayBlocker["default"], null, /*#__PURE__*/_react["default"].createElement(_GuidedTour["default"], null, /*#__PURE__*/_react["default"].createElement(_Notifications["default"], null, children)))))))))));
};

Providers.propTypes = {
  authLogo: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].any]).isRequired,
  children: _propTypes["default"].element.isRequired,
  components: _propTypes["default"].object.isRequired,
  fields: _propTypes["default"].object.isRequired,
  getAdminInjectedComponents: _propTypes["default"].func.isRequired,
  getPlugin: _propTypes["default"].func.isRequired,
  localeNames: _propTypes["default"].objectOf(_propTypes["default"].string).isRequired,
  menu: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    to: _propTypes["default"].string.isRequired,
    icon: _propTypes["default"].func.isRequired,
    intlLabel: _propTypes["default"].shape({
      id: _propTypes["default"].string.isRequired,
      defaultMessage: _propTypes["default"].string.isRequired
    }).isRequired,
    permissions: _propTypes["default"].array,
    Component: _propTypes["default"].func
  })).isRequired,
  menuLogo: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].any]).isRequired,
  messages: _propTypes["default"].object.isRequired,
  plugins: _propTypes["default"].object.isRequired,
  runHookParallel: _propTypes["default"].func.isRequired,
  runHookWaterfall: _propTypes["default"].func.isRequired,
  runHookSeries: _propTypes["default"].func.isRequired,
  settings: _propTypes["default"].object.isRequired,
  showReleaseNotification: _propTypes["default"].bool.isRequired,
  showTutorials: _propTypes["default"].bool.isRequired,
  store: _propTypes["default"].object.isRequired
};
var _default = Providers;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/Theme/index.js":
/*!****************************************************!*\
  !*** ./.cache/admin/src/components/Theme/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! @strapi/design-system/ThemeProvider */ "./node_modules/@strapi/design-system/ThemeProvider.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _themes = __webpack_require__(/*! @strapi/design-system/themes */ "./node_modules/@strapi/design-system/themes.js");

var _GlobalStyle = _interopRequireDefault(__webpack_require__(/*! ../GlobalStyle */ "./.cache/admin/src/components/GlobalStyle/index.js"));

var Theme = function Theme(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/_react["default"].createElement(_ThemeProvider.ThemeProvider, {
    theme: theme
  }, children, /*#__PURE__*/_react["default"].createElement(_GlobalStyle["default"], null));
};

Theme.propTypes = {
  children: _propTypes["default"].element.isRequired,
  theme: _propTypes["default"].object
};
Theme.defaultProps = {
  theme: _themes.lightTheme
};
var _default = Theme;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/components/UnauthenticatedLogo/index.js":
/*!******************************************************************!*\
  !*** ./.cache/admin/src/components/UnauthenticatedLogo/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _hooks = __webpack_require__(/*! ../../hooks */ "./.cache/admin/src/hooks/index.js");

var Img = /*#__PURE__*/_styledComponents["default"].img.withConfig({
  displayName: "UnauthenticatedLogo__Img",
  componentId: "sc-1tijhab-0"
})(["height:", "rem;"], 72 / 16);

var Logo = function Logo() {
  var _useConfigurations = (0, _hooks.useConfigurations)(),
      authLogo = _useConfigurations.authLogo;

  return /*#__PURE__*/_react["default"].createElement(Img, {
    src: authLogo,
    "aria-hidden": true,
    alt: ""
  });
};

var _default = Logo;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/contexts/Admin/index.js":
/*!**************************************************!*\
  !*** ./.cache/admin/src/contexts/Admin/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var AdminContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = AdminContext;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/contexts/Configurations/index.js":
/*!***********************************************************!*\
  !*** ./.cache/admin/src/contexts/Configurations/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var ConfigurationsContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = ConfigurationsContext;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/contexts/PermisssionsDataManagerContext/index.js":
/*!***************************************************************************!*\
  !*** ./.cache/admin/src/contexts/PermisssionsDataManagerContext/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var PermissionsDataManagerContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = PermissionsDataManagerContext;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/contexts/index.js":
/*!********************************************!*\
  !*** ./.cache/admin/src/contexts/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AdminContext", ({
  enumerable: true,
  get: function get() {
    return _Admin["default"];
  }
}));
Object.defineProperty(exports, "ConfigurationsContext", ({
  enumerable: true,
  get: function get() {
    return _Configurations["default"];
  }
}));
Object.defineProperty(exports, "PermissionsDataManagerContext", ({
  enumerable: true,
  get: function get() {
    return _PermisssionsDataManagerContext["default"];
  }
}));

var _Admin = _interopRequireDefault(__webpack_require__(/*! ./Admin */ "./.cache/admin/src/contexts/Admin/index.js"));

var _Configurations = _interopRequireDefault(__webpack_require__(/*! ./Configurations */ "./.cache/admin/src/contexts/Configurations/index.js"));

var _PermisssionsDataManagerContext = _interopRequireDefault(__webpack_require__(/*! ./PermisssionsDataManagerContext */ "./.cache/admin/src/contexts/PermisssionsDataManagerContext/index.js"));

/***/ }),

/***/ "./.cache/admin/src/core/store/configureStore.js":
/*!*******************************************************!*\
  !*** ./.cache/admin/src/core/store/configureStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _redux = __webpack_require__(/*! redux */ "./src/admin/node_modules/redux/lib/redux.js");

var _createReducer = _interopRequireDefault(__webpack_require__(/*! ./createReducer */ "./.cache/admin/src/core/store/createReducer.js"));

var configureStore = function configureStore(appMiddlewares, appReducers) {
  var middlewares = [];
  appMiddlewares.forEach(function (middleware) {
    middlewares.push(middleware());
  });
  return (0, _redux.createStore)((0, _createReducer["default"])(appReducers), {}, _redux.applyMiddleware.apply(void 0, middlewares));
};

var _default = configureStore;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/core/store/createReducer.js":
/*!******************************************************!*\
  !*** ./.cache/admin/src/core/store/createReducer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _redux = __webpack_require__(/*! redux */ "./src/admin/node_modules/redux/lib/redux.js");

var createReducer = function createReducer(reducers) {
  return (0, _redux.combineReducers)(reducers);
};

var _default = createReducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/exposedHooks.js":
/*!******************************************!*\
  !*** ./.cache/admin/src/exposedHooks.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MUTATE_SINGLE_TYPES_LINKS = exports.MUTATE_EDIT_VIEW_LAYOUT = exports.MUTATE_COLLECTION_TYPES_LINKS = exports.INJECT_COLUMN_IN_TABLE = void 0;

/**
 * Hook that allows to mutate the displayed headers of the list view table
 * @constant
 * @type {string}
 */
var INJECT_COLUMN_IN_TABLE = 'Admin/CM/pages/ListView/inject-column-in-table';
/**
 * Hook that allows to mutate the CM's collection types links pre-set filters
 * @constant
 * @type {string}
 */

exports.INJECT_COLUMN_IN_TABLE = INJECT_COLUMN_IN_TABLE;
var MUTATE_COLLECTION_TYPES_LINKS = 'Admin/CM/pages/App/mutate-collection-types-links';
/**
 * Hook that allows to mutate the CM's edit view layout
 * @constant
 * @type {string}
 */

exports.MUTATE_COLLECTION_TYPES_LINKS = MUTATE_COLLECTION_TYPES_LINKS;
var MUTATE_EDIT_VIEW_LAYOUT = 'Admin/CM/pages/EditView/mutate-edit-view-layout';
/**
 * Hook that allows to mutate the CM's single types links pre-set filters
 * @constant
 * @type {string}
 */

exports.MUTATE_EDIT_VIEW_LAYOUT = MUTATE_EDIT_VIEW_LAYOUT;
var MUTATE_SINGLE_TYPES_LINKS = 'Admin/CM/pages/App/mutate-single-types-links';
exports.MUTATE_SINGLE_TYPES_LINKS = MUTATE_SINGLE_TYPES_LINKS;

/***/ }),

/***/ "./.cache/admin/src/hooks/index.js":
/*!*****************************************!*\
  !*** ./.cache/admin/src/hooks/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "useConfigurations", ({
  enumerable: true,
  get: function get() {
    return _useConfigurations["default"];
  }
}));
Object.defineProperty(exports, "useFetchPermissionsLayout", ({
  enumerable: true,
  get: function get() {
    return _useFetchPermissionsLayout["default"];
  }
}));
Object.defineProperty(exports, "useFetchRole", ({
  enumerable: true,
  get: function get() {
    return _useFetchRole["default"];
  }
}));
Object.defineProperty(exports, "useMenu", ({
  enumerable: true,
  get: function get() {
    return _useMenu["default"];
  }
}));
Object.defineProperty(exports, "useModels", ({
  enumerable: true,
  get: function get() {
    return _useModels["default"];
  }
}));
Object.defineProperty(exports, "usePermissionsDataManager", ({
  enumerable: true,
  get: function get() {
    return _usePermissionsDataManager["default"];
  }
}));
Object.defineProperty(exports, "useReleaseNotification", ({
  enumerable: true,
  get: function get() {
    return _useReleaseNotification["default"];
  }
}));
Object.defineProperty(exports, "useRolesList", ({
  enumerable: true,
  get: function get() {
    return _useRolesList["default"];
  }
}));
Object.defineProperty(exports, "useSettingsForm", ({
  enumerable: true,
  get: function get() {
    return _useSettingsForm["default"];
  }
}));
Object.defineProperty(exports, "useSettingsMenu", ({
  enumerable: true,
  get: function get() {
    return _useSettingsMenu["default"];
  }
}));

var _useConfigurations = _interopRequireDefault(__webpack_require__(/*! ./useConfigurations */ "./.cache/admin/src/hooks/useConfigurations/index.js"));

var _useModels = _interopRequireDefault(__webpack_require__(/*! ./useModels */ "./.cache/admin/src/hooks/useModels/index.js"));

var _useFetchPermissionsLayout = _interopRequireDefault(__webpack_require__(/*! ./useFetchPermissionsLayout */ "./.cache/admin/src/hooks/useFetchPermissionsLayout/index.js"));

var _useFetchRole = _interopRequireDefault(__webpack_require__(/*! ./useFetchRole */ "./.cache/admin/src/hooks/useFetchRole/index.js"));

var _useMenu = _interopRequireDefault(__webpack_require__(/*! ./useMenu */ "./.cache/admin/src/hooks/useMenu/index.js"));

var _useRolesList = _interopRequireDefault(__webpack_require__(/*! ./useRolesList */ "./.cache/admin/src/hooks/useRolesList/index.js"));

var _useSettingsMenu = _interopRequireDefault(__webpack_require__(/*! ./useSettingsMenu */ "./.cache/admin/src/hooks/useSettingsMenu/index.js"));

var _useSettingsForm = _interopRequireDefault(__webpack_require__(/*! ./useSettingsForm */ "./.cache/admin/src/hooks/useSettingsForm/index.js"));

var _usePermissionsDataManager = _interopRequireDefault(__webpack_require__(/*! ./usePermissionsDataManager */ "./.cache/admin/src/hooks/usePermissionsDataManager/index.js"));

var _useReleaseNotification = _interopRequireDefault(__webpack_require__(/*! ./useReleaseNotification */ "./.cache/admin/src/hooks/useReleaseNotification/index.js"));

/***/ }),

/***/ "./.cache/admin/src/hooks/useConfigurations/index.js":
/*!***********************************************************!*\
  !*** ./.cache/admin/src/hooks/useConfigurations/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _contexts = __webpack_require__(/*! ../../contexts */ "./.cache/admin/src/contexts/index.js");

var useConfigurations = function useConfigurations() {
  var context = (0, _react.useContext)(_contexts.ConfigurationsContext);
  return context;
};

var _default = useConfigurations;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useFetchPermissionsLayout/index.js":
/*!*******************************************************************!*\
  !*** ./.cache/admin/src/hooks/useFetchPermissionsLayout/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/hooks/useFetchPermissionsLayout/reducer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useFetchPermissionsLayout = function useFetchPermissionsLayout(id) {
  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      data = _useReducer2$.data,
      error = _useReducer2$.error,
      isLoading = _useReducer2$.isLoading,
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    var getData = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$request, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: 'GET_DATA'
                });
                _context.next = 3;
                return (0, _helperPlugin.request)('/admin/permissions', {
                  method: 'GET',
                  params: {
                    role: id
                  }
                });

              case 3:
                _yield$request = _context.sent;
                data = _yield$request.data;
                dispatch({
                  type: 'GET_DATA_SUCCEEDED',
                  data: data
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getData() {
        return _ref.apply(this, arguments);
      };
    }();

    getData();
  }, [id]);
  return {
    data: data,
    error: error,
    isLoading: isLoading
  };
};

var _default = useFetchPermissionsLayout;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useFetchPermissionsLayout/reducer.js":
/*!*********************************************************************!*\
  !*** ./.cache/admin/src/hooks/useFetchPermissionsLayout/reducer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

/* eslint-disable consistent-return */
var initialState = {
  data: {},
  error: null,
  isLoading: true
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  return (0, _immer["default"])(state, function (draftState) {
    switch (action.type) {
      case 'GET_DATA':
        {
          draftState.isLoading = true;
          draftState.data = {};
          draftState.error = null;
          break;
        }

      case 'GET_DATA_SUCCEEDED':
        {
          draftState.data = action.data;
          draftState.isLoading = false;
          draftState.error = null;
          break;
        }

      case 'GET_DATA_ERROR':
        {
          draftState.isLoading = false;
          draftState.error = action.error;
          break;
        }

      default:
        return draftState;
    }
  });
};

var _default = reducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useFetchRole/index.js":
/*!******************************************************!*\
  !*** ./.cache/admin/src/hooks/useFetchRole/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./src/admin/node_modules/console-browserify/index.js */ "./src/admin/node_modules/console-browserify/index.js");


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

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/hooks/useFetchRole/reducer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useFetchRole = function useFetchRole(id) {
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    if (id) {
      fetchRole(id);
    } else {
      dispatch({
        type: 'GET_DATA_SUCCEEDED',
        role: {},
        permissions: []
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [id]);

  var fetchRole = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(roleId) {
      var _yield$Promise$all, _yield$Promise$all2, role, permissions;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Promise.all(["roles/".concat(roleId), "roles/".concat(roleId, "/permissions")].map(function (endPoint) {
                return (0, _helperPlugin.request)("/admin/".concat(endPoint), {
                  method: 'GET'
                });
              }));

            case 3:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 2);
              role = _yield$Promise$all2[0].data;
              permissions = _yield$Promise$all2[1].data;
              dispatch({
                type: 'GET_DATA_SUCCEEDED',
                role: role,
                permissions: permissions
              });
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              dispatch({
                type: 'GET_DATA_ERROR'
              });
              toggleNotification({
                type: 'warning',
                message: {
                  id: 'notification.error'
                }
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function fetchRole(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmitSucceeded = (0, _react.useCallback)(function (data) {
    dispatch(_objectSpread({
      type: 'ON_SUBMIT_SUCCEEDED'
    }, data));
  }, []);
  return _objectSpread(_objectSpread({}, state), {}, {
    onSubmitSucceeded: handleSubmitSucceeded
  });
};

var _default = useFetchRole;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useFetchRole/reducer.js":
/*!********************************************************!*\
  !*** ./.cache/admin/src/hooks/useFetchRole/reducer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

/* eslint-disable consistent-return */
var initialState = {
  role: {},
  permissions: {},
  isLoading: true
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  return (0, _immer["default"])(state, function (draftState) {
    switch (action.type) {
      case 'GET_DATA_SUCCEEDED':
        {
          draftState.role = action.role;
          draftState.permissions = action.permissions;
          draftState.isLoading = false;
          break;
        }

      case 'GET_DATA_ERROR':
        {
          draftState.isLoading = false;
          break;
        }

      case 'ON_SUBMIT_SUCCEEDED':
        {
          draftState.role.name = action.name;
          draftState.role.description = action.description;
          break;
        }

      default:
        return draftState;
    }
  });
};

var _default = reducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useMenu/index.js":
/*!*************************************************!*\
  !*** ./.cache/admin/src/hooks/useMenu/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _getPluginSectionLinks = _interopRequireDefault(__webpack_require__(/*! ./utils/getPluginSectionLinks */ "./.cache/admin/src/hooks/useMenu/utils/getPluginSectionLinks.js"));

var _getGeneralLinks = _interopRequireDefault(__webpack_require__(/*! ./utils/getGeneralLinks */ "./.cache/admin/src/hooks/useMenu/utils/getGeneralLinks.js"));

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/hooks/useMenu/reducer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useMenu = function useMenu() {
  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useRBACProvider = (0, _helperPlugin.useRBACProvider)(),
      allPermissions = _useRBACProvider.allPermissions;

  var _useAppInfos = (0, _helperPlugin.useAppInfos)(),
      shouldUpdateStrapi = _useAppInfos.shouldUpdateStrapi;

  var _useStrapiApp = (0, _helperPlugin.useStrapiApp)(),
      menu = _useStrapiApp.menu; // We are using a ref because we don't want our effect to have this in its dependencies array


  var generalSectionLinksRef = (0, _react.useRef)(state.generalSectionLinks);
  var shouldUpdateStrapiRef = (0, _react.useRef)(shouldUpdateStrapi); // Once in the app lifecycle the menu should not be added into any dependencies array

  var resolvePermissions = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var permissions,
          pluginsSectionLinks,
          authorizedPluginSectionLinks,
          authorizedGeneralSectionLinks,
          _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              permissions = _args.length > 0 && _args[0] !== undefined ? _args[0] : allPermissions;
              pluginsSectionLinks = menu;
              _context.next = 4;
              return (0, _getPluginSectionLinks["default"])(permissions, pluginsSectionLinks);

            case 4:
              authorizedPluginSectionLinks = _context.sent;
              _context.next = 7;
              return (0, _getGeneralLinks["default"])(permissions, generalSectionLinksRef.current, shouldUpdateStrapiRef.current);

            case 7:
              authorizedGeneralSectionLinks = _context.sent;
              dispatch({
                type: 'SET_SECTION_LINKS',
                data: {
                  authorizedGeneralSectionLinks: authorizedGeneralSectionLinks,
                  authorizedPluginSectionLinks: authorizedPluginSectionLinks
                }
              });
              dispatch({
                type: 'UNSET_IS_LOADING'
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function resolvePermissions() {
      return _ref.apply(this, arguments);
    };
  }();

  var resolvePermissionsRef = (0, _react.useRef)(resolvePermissions);
  (0, _react.useEffect)(function () {
    resolvePermissionsRef.current(allPermissions);
  }, [allPermissions, dispatch]);
  return state;
};

var _default = useMenu;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useMenu/reducer.js":
/*!***************************************************!*\
  !*** ./.cache/admin/src/hooks/useMenu/reducer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

var _Cog = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Cog */ "./node_modules/@strapi/icons/Cog.js"));

var _Puzzle = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Puzzle */ "./node_modules/@strapi/icons/Puzzle.js"));

var _ShoppingCart = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/ShoppingCart */ "./node_modules/@strapi/icons/ShoppingCart.js"));

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./.cache/admin/src/permissions/index.js"));

/* eslint-disable consistent-return */
var initialState = {
  generalSectionLinks: [{
    icon: _Puzzle["default"],
    intlLabel: {
      id: 'app.components.LeftMenuLinkContainer.listPlugins',
      defaultMessage: 'Plugins'
    },
    to: '/list-plugins',
    permissions: _permissions["default"].marketplace.main
  }, {
    icon: _ShoppingCart["default"],
    intlLabel: {
      id: 'app.components.LeftMenuLinkContainer.installNewPlugin',
      defaultMessage: 'Marketplace'
    },
    to: '/marketplace',
    permissions: _permissions["default"].marketplace.main
  }, {
    icon: _Cog["default"],
    intlLabel: {
      id: 'app.components.LeftMenuLinkContainer.settings',
      defaultMessage: 'Settings'
    },
    to: '/settings',
    // Permissions of this link are retrieved in the init phase
    // using the settings menu
    permissions: [],
    notificationsCount: 0
  }],
  pluginsSectionLinks: [],
  isLoading: true
};
exports.initialState = initialState;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer["default"])(state, function (draftState) {
    switch (action.type) {
      case 'SET_SECTION_LINKS':
        {
          var _action$data = action.data,
              authorizedGeneralSectionLinks = _action$data.authorizedGeneralSectionLinks,
              authorizedPluginSectionLinks = _action$data.authorizedPluginSectionLinks;
          draftState.generalSectionLinks = authorizedGeneralSectionLinks;
          draftState.pluginsSectionLinks = authorizedPluginSectionLinks;
          break;
        }

      case 'UNSET_IS_LOADING':
        {
          draftState.isLoading = false;
          break;
        }

      default:
        return draftState;
    }
  });
};

var _default = reducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useMenu/utils/checkPermissions.js":
/*!******************************************************************!*\
  !*** ./.cache/admin/src/hooks/useMenu/utils/checkPermissions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

/**
 * This function resolves an array of Promises<boolean>
 * It puts at a specific index the status of a specific permission.
 * While this might look weird, we then iterate on this array
 * and check the different CT/ST/general/plugin sections
 * and make an index based comparisons
 */
var checkPermissions = function checkPermissions(userPermissions, permissionsToCheck) {
  return permissionsToCheck.map(function (_ref) {
    var permissions = _ref.permissions;
    return (0, _helperPlugin.hasPermissions)(userPermissions, permissions);
  });
};

var _default = checkPermissions;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useMenu/utils/getGeneralLinks.js":
/*!*****************************************************************!*\
  !*** ./.cache/admin/src/hooks/useMenu/utils/getGeneralLinks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _cloneDeep = _interopRequireDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));

var _checkPermissions = _interopRequireDefault(__webpack_require__(/*! ./checkPermissions */ "./.cache/admin/src/hooks/useMenu/utils/checkPermissions.js"));

var getGeneralLinks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(permissions, generalSectionRawLinks, shouldUpdateStrapi) {
    var generalSectionPermissionsPromises, generalSectionLinksPermissions, authorizedGeneralSectionLinks, settingsLinkIndex, authorizedGeneralLinksClone;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            generalSectionPermissionsPromises = (0, _checkPermissions["default"])(permissions, generalSectionRawLinks);
            _context.next = 3;
            return Promise.all(generalSectionPermissionsPromises);

          case 3:
            generalSectionLinksPermissions = _context.sent;
            authorizedGeneralSectionLinks = generalSectionRawLinks.filter(function (_, index) {
              return generalSectionLinksPermissions[index];
            });
            settingsLinkIndex = authorizedGeneralSectionLinks.findIndex(function (obj) {
              return obj.to === '/settings';
            });

            if (!(settingsLinkIndex === -1)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", []);

          case 8:
            authorizedGeneralLinksClone = (0, _cloneDeep["default"])(authorizedGeneralSectionLinks);
            authorizedGeneralLinksClone[settingsLinkIndex].notificationsCount = shouldUpdateStrapi ? 1 : 0;
            return _context.abrupt("return", authorizedGeneralLinksClone);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getGeneralLinks(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getGeneralLinks;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useMenu/utils/getPluginSectionLinks.js":
/*!***********************************************************************!*\
  !*** ./.cache/admin/src/hooks/useMenu/utils/getPluginSectionLinks.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _checkPermissions = _interopRequireDefault(__webpack_require__(/*! ./checkPermissions */ "./.cache/admin/src/hooks/useMenu/utils/checkPermissions.js"));

var getPluginSectionLinks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userPermissions, pluginsSectionRawLinks) {
    var pluginSectionPermissionsPromises, pluginSectionLinksPermissions, authorizedPluginSectionLinks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pluginSectionPermissionsPromises = (0, _checkPermissions["default"])(userPermissions, pluginsSectionRawLinks);
            _context.next = 3;
            return Promise.all(pluginSectionPermissionsPromises);

          case 3:
            pluginSectionLinksPermissions = _context.sent;
            authorizedPluginSectionLinks = pluginsSectionRawLinks.filter(function (_, index) {
              return pluginSectionLinksPermissions[index];
            });
            return _context.abrupt("return", authorizedPluginSectionLinks);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPluginSectionLinks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getPluginSectionLinks;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useModels/index.js":
/*!***************************************************!*\
  !*** ./.cache/admin/src/hooks/useModels/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/hooks/useModels/reducer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useModels = function useModels() {
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    fetchModels(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var fetchModels = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, components, contentTypes;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: 'GET_MODELS'
              });
              _context.prev = 1;
              _context.next = 4;
              return Promise.all(['components', 'content-types'].map(function (endPoint) {
                return (0, _helperPlugin.request)("/content-manager/".concat(endPoint), {
                  method: 'GET'
                });
              }));

            case 4:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 2);
              components = _yield$Promise$all2[0].data;
              contentTypes = _yield$Promise$all2[1].data;
              dispatch({
                type: 'GET_MODELS_SUCCEDED',
                contentTypes: contentTypes,
                components: components
              });
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: 'GET_MODELS_ERROR'
              });
              toggleNotification({
                type: 'warning',
                message: {
                  id: 'notification.error'
                }
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function fetchModels() {
      return _ref.apply(this, arguments);
    };
  }();

  return _objectSpread(_objectSpread({}, state), {}, {
    getData: fetchModels
  });
};

var _default = useModels;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useModels/reducer.js":
/*!*****************************************************!*\
  !*** ./.cache/admin/src/hooks/useModels/reducer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

/* eslint-disable consistent-return */
var initialState = {
  collectionTypes: [],
  components: [],
  isLoading: true,
  singleTypes: []
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  return (0, _immer["default"])(state, function (draftState) {
    switch (action.type) {
      case 'GET_MODELS':
        {
          draftState.collectionTypes = initialState.collectionTypes;
          draftState.singleTypes = initialState.singleTypes;
          draftState.components = initialState.components;
          draftState.isLoading = true;
          break;
        }

      case 'GET_MODELS_ERROR':
        {
          draftState.collectionTypes = initialState.collectionTypes;
          draftState.singleTypes = initialState.singleTypes;
          draftState.components = initialState.components;
          draftState.isLoading = false;
          break;
        }

      case 'GET_MODELS_SUCCEDED':
        {
          var getContentTypeByKind = function getContentTypeByKind(kind) {
            return action.contentTypes.filter(function (contentType) {
              return contentType.isDisplayed && contentType.kind === kind;
            });
          };

          draftState.isLoading = false;
          draftState.collectionTypes = getContentTypeByKind('collectionType');
          draftState.singleTypes = getContentTypeByKind('singleType');
          draftState.components = action.components;
          break;
        }

      default:
        return draftState;
    }
  });
};

var _default = reducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/usePermissionsDataManager/index.js":
/*!*******************************************************************!*\
  !*** ./.cache/admin/src/hooks/usePermissionsDataManager/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _contexts = __webpack_require__(/*! ../../contexts */ "./.cache/admin/src/contexts/index.js");

var usePermissionsDataManager = function usePermissionsDataManager() {
  return (0, _react.useContext)(_contexts.PermissionsDataManagerContext);
};

var _default = usePermissionsDataManager;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useReleaseNotification/index.js":
/*!****************************************************************!*\
  !*** ./.cache/admin/src/hooks/useReleaseNotification/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var showUpdateNotif = !JSON.parse(localStorage.getItem('STRAPI_UPDATE_NOTIF'));

var useReleaseNotification = function useReleaseNotification() {
  var _useAppInfos = (0, _helperPlugin.useAppInfos)(),
      latestStrapiReleaseTag = _useAppInfos.latestStrapiReleaseTag,
      shouldUpdateStrapi = _useAppInfos.shouldUpdateStrapi;

  var toggleNotification = (0, _helperPlugin.useNotification)();
  (0, _react.useEffect)(function () {
    if (shouldUpdateStrapi && showUpdateNotif) {
      toggleNotification({
        type: 'info',
        message: {
          id: 'notification.version.update.message'
        },
        link: {
          url: "https://github.com/strapi/strapi/releases/tag/".concat(latestStrapiReleaseTag),
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
  }, [latestStrapiReleaseTag, shouldUpdateStrapi, toggleNotification]);
  return null;
};

var _default = useReleaseNotification;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useRolesList/index.js":
/*!******************************************************!*\
  !*** ./.cache/admin/src/hooks/useRolesList/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _get = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _utils = __webpack_require__(/*! ../../core/utils */ "./.cache/admin/src/core/utils/index.js");

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./.cache/admin/src/hooks/useRolesList/init.js"));

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/hooks/useRolesList/reducer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useRolesList = function useRolesList() {
  var shouldFetchData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState, function () {
    return (0, _init["default"])(_reducer.initialState, shouldFetchData);
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      roles = _useReducer2$.roles,
      isLoading = _useReducer2$.isLoading,
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    if (shouldFetchData) {
      fetchRolesList();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [shouldFetchData]);
  var fetchRolesList = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$axiosInstance$, data, message;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: 'GET_DATA'
            });
            _context.next = 4;
            return _utils.axiosInstance.get('/admin/roles');

          case 4:
            _yield$axiosInstance$ = _context.sent;
            data = _yield$axiosInstance$.data.data;
            dispatch({
              type: 'GET_DATA_SUCCEEDED',
              data: data
            });
            _context.next = 14;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            message = (0, _get["default"])(_context.t0, ['response', 'payload', 'message'], 'An error occured');
            dispatch({
              type: 'GET_DATA_ERROR'
            });

            if (message !== 'Forbidden') {
              toggleNotification({
                type: 'warning',
                message: message
              });
            }

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  })), [toggleNotification]);
  return {
    roles: roles,
    isLoading: isLoading,
    getData: fetchRolesList
  };
};

var _default = useRolesList;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useRolesList/init.js":
/*!*****************************************************!*\
  !*** ./.cache/admin/src/hooks/useRolesList/init.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var init = function init(initialState, shouldFetchData) {
  return _objectSpread(_objectSpread({}, initialState), {}, {
    isLoading: shouldFetchData
  });
};

var _default = init;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useRolesList/reducer.js":
/*!********************************************************!*\
  !*** ./.cache/admin/src/hooks/useRolesList/reducer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

/* eslint-disable consistent-return */
var initialState = {
  roles: [],
  isLoading: true
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  return (0, _immer["default"])(state, function (draftState) {
    switch (action.type) {
      case 'GET_DATA':
        {
          draftState.isLoading = true;
          draftState.roles = [];
          break;
        }

      case 'GET_DATA_SUCCEEDED':
        {
          draftState.roles = action.data;
          draftState.isLoading = false;
          break;
        }

      case 'GET_DATA_ERROR':
        {
          draftState.isLoading = false;
          break;
        }

      default:
        return draftState;
    }
  });
};

var _default = reducer;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useSettingsForm/index.js":
/*!*********************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsForm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./src/admin/node_modules/console-browserify/index.js */ "./src/admin/node_modules/console-browserify/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

var _utils = __webpack_require__(/*! ../../utils */ "./.cache/admin/src/utils/index.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./.cache/admin/src/hooks/useSettingsForm/reducer.js");

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./.cache/admin/src/hooks/useSettingsForm/init.js"));

var useSettingsForm = function useSettingsForm(endPoint, schema, cbSuccess, fieldsToPick) {
  var _useReducer = (0, _react.useReducer)(_reducer.reducer, _reducer.initialState, function () {
    return (0, _init["default"])(_reducer.initialState, fieldsToPick);
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      formErrors = _useReducer2$.formErrors,
      initialData = _useReducer2$.initialData,
      isLoading = _useReducer2$.isLoading,
      modifiedData = _useReducer2$.modifiedData,
      showHeaderButtonLoader = _useReducer2$.showHeaderButtonLoader,
      showHeaderLoader = _useReducer2$.showHeaderLoader,
      dispatch = _useReducer2[1];

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useOverlayBlocker = (0, _helperPlugin.useOverlayBlocker)(),
      lockApp = _useOverlayBlocker.lockApp,
      unlockApp = _useOverlayBlocker.unlockApp;

  (0, _react.useEffect)(function () {
    var getData = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$request, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _helperPlugin.request)(endPoint, {
                  method: 'GET'
                });

              case 3:
                _yield$request = _context.sent;
                data = _yield$request.data;
                dispatch({
                  type: 'GET_DATA_SUCCEEDED',
                  data: data,
                  fieldsToPick: fieldsToPick
                });
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0.response);
                toggleNotification({
                  type: 'warning',
                  message: {
                    id: 'notification.error'
                  }
                });

              case 12:
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

    if (endPoint) {
      getData();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [endPoint]);

  var handleCancel = function handleCancel() {
    dispatch({
      type: 'ON_CANCEL'
    });
  };

  var handleChange = function handleChange(_ref2) {
    var _ref2$target = _ref2.target,
        name = _ref2$target.name,
        value = _ref2$target.value,
        inputType = _ref2$target.type;
    dispatch({
      type: 'ON_CHANGE',
      inputType: inputType,
      keys: name,
      value: value
    });
  };

  var setField = function setField(fieldName, value) {
    dispatch({
      type: 'ON_CHANGE',
      keys: fieldName,
      value: value
    });
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
      var errors, cleanedData, _yield$request2, data, _data, apiErrors;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.next = 3;
              return (0, _utils.checkFormValidity)(modifiedData, schema);

            case 3:
              errors = _context2.sent;
              dispatch({
                type: 'SET_ERRORS',
                errors: errors || {}
              });

              if (errors) {
                _context2.next = 29;
                break;
              }

              _context2.prev = 6;
              lockApp();
              dispatch({
                type: 'ON_SUBMIT'
              });
              cleanedData = (0, _lodash.omit)(modifiedData, ['confirmPassword', 'registrationToken']);

              if (cleanedData.roles) {
                cleanedData.roles = cleanedData.roles.map(function (role) {
                  return role.id;
                });
              }

              _context2.next = 13;
              return (0, _helperPlugin.request)(endPoint, {
                method: 'PUT',
                body: cleanedData
              });

            case 13:
              _yield$request2 = _context2.sent;
              data = _yield$request2.data;
              cbSuccess(data);
              dispatch({
                type: 'ON_SUBMIT_SUCCEEDED',
                data: data
              });
              toggleNotification({
                type: 'success',
                message: {
                  id: 'notification.success.saved'
                }
              });
              _context2.next = 26;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](6);
              _data = (0, _lodash.get)(_context2.t0, 'response.payload', {
                data: {}
              });

              if ((0, _lodash.has)(_data, 'data') && typeof _data.data === 'string') {
                toggleNotification({
                  type: 'warning',
                  message: _data.data
                });
              } else {
                toggleNotification({
                  type: 'warning',
                  message: _data.message
                });
              }

              apiErrors = (0, _utils.formatAPIErrors)(_data);
              dispatch({
                type: 'SET_ERRORS',
                errors: apiErrors
              });

            case 26:
              _context2.prev = 26;
              unlockApp();
              return _context2.finish(26);

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 20, 26, 29]]);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return [{
    formErrors: formErrors,
    initialData: initialData,
    isLoading: isLoading,
    modifiedData: modifiedData,
    showHeaderButtonLoader: showHeaderButtonLoader,
    showHeaderLoader: showHeaderLoader
  }, dispatch, {
    handleCancel: handleCancel,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    setField: setField
  }];
};

var _default = useSettingsForm;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useSettingsForm/init.js":
/*!********************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsForm/init.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var init = function init(initialState, fieldsToPick) {
  return _objectSpread(_objectSpread({}, initialState), {}, {
    fieldsToPick: fieldsToPick
  });
};

var _default = init;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useSettingsForm/reducer.js":
/*!***********************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsForm/reducer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.reducer = exports.initialState = void 0;

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

/* eslint-disable consistent-return */
var initialState = {
  fieldsToPick: [],
  formErrors: {},
  initialData: {},
  isLoading: true,
  modifiedData: {},
  showHeaderButtonLoader: false,
  showHeaderLoader: true
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  return (0, _immer["default"])(state, function (draftState) {
    switch (action.type) {
      case 'GET_DATA_SUCCEEDED':
        {
          draftState.isLoading = false;
          draftState.showHeaderLoader = false;
          draftState.initialData = (0, _lodash.pick)(action.data, state.fieldsToPick);
          draftState.modifiedData = (0, _lodash.pick)(action.data, state.fieldsToPick);
          break;
        }

      case 'ON_CANCEL':
        {
          draftState.modifiedData = state.initialData;
          draftState.formErrors = {};
          break;
        }

      case 'ON_CHANGE':
        {
          if (action.inputType === 'password' && !action.value) {
            (0, _lodash.unset)(draftState.modifiedData, action.keys.split('.'));
          } else if (action.keys.includes('username') && !action.value) {
            (0, _lodash.set)(draftState.modifiedData, action.keys.split('.'), null);
          } else {
            (0, _lodash.set)(draftState.modifiedData, action.keys.split('.'), action.value);
          }

          break;
        }

      case 'ON_SUBMIT':
        {
          draftState.showHeaderButtonLoader = true;
          break;
        }

      case 'ON_SUBMIT_SUCCEEDED':
        {
          draftState.initialData = (0, _lodash.pick)(action.data, state.fieldsToPick);
          draftState.modifiedData = (0, _lodash.pick)(action.data, state.fieldsToPick);
          draftState.showHeaderButtonLoader = false;
          break;
        }

      case 'SET_ERRORS':
        {
          draftState.formErrors = action.errors;
          draftState.showHeaderButtonLoader = false;
          break;
        }

      default:
        return draftState;
    }
  });
};

exports.reducer = reducer;

/***/ }),

/***/ "./.cache/admin/src/hooks/useSettingsMenu/index.js":
/*!*********************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsMenu/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reducer = _interopRequireWildcard(__webpack_require__(/*! ./reducer */ "./.cache/admin/src/hooks/useSettingsMenu/reducer.js"));

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./.cache/admin/src/hooks/useSettingsMenu/init.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useSettingsMenu = function useSettingsMenu() {
  var noCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useRBACProvider = (0, _helperPlugin.useRBACProvider)(),
      permissions = _useRBACProvider.allPermissions;

  var _useAppInfos = (0, _helperPlugin.useAppInfos)(),
      shouldUpdateStrapi = _useAppInfos.shouldUpdateStrapi;

  var _useStrapiApp = (0, _helperPlugin.useStrapiApp)(),
      settings = _useStrapiApp.settings;

  var _useReducer = (0, _react.useReducer)(_reducer["default"], _reducer.initialState, function () {
    return (0, _init["default"])(_reducer.initialState, {
      settings: settings,
      shouldUpdateStrapi: shouldUpdateStrapi
    });
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      isLoading = _useReducer2$.isLoading,
      menu = _useReducer2$.menu,
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    var getData = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var checkPermissions, generateArrayOfPromises, generalSectionLinksArrayOfPromises, data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                checkPermissions = /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(permissionsToCheck, path) {
                    var hasPermission;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _helperPlugin.hasPermissions)(permissions, permissionsToCheck);

                          case 2:
                            hasPermission = _context.sent;
                            return _context.abrupt("return", {
                              hasPermission: hasPermission,
                              path: path
                            });

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function checkPermissions(_x, _x2) {
                    return _ref2.apply(this, arguments);
                  };
                }();

                generateArrayOfPromises = function generateArrayOfPromises(array) {
                  return array.reduce(function (acc, current, sectionIndex) {
                    var generateArrayOfPromises = function generateArrayOfPromises(array) {
                      return array.map(function (link, index) {
                        return checkPermissions(array[index].permissions, "".concat(sectionIndex, ".links.").concat(index));
                      });
                    };

                    return [].concat((0, _toConsumableArray2["default"])(acc), (0, _toConsumableArray2["default"])(generateArrayOfPromises(current.links)));
                  }, []);
                };

                generalSectionLinksArrayOfPromises = generateArrayOfPromises(menu);
                _context2.next = 5;
                return Promise.all(generalSectionLinksArrayOfPromises);

              case 5:
                data = _context2.sent;
                dispatch({
                  type: 'CHECK_PERMISSIONS_SUCCEEDED',
                  data: data
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getData() {
        return _ref.apply(this, arguments);
      };
    }(); // This hook is also used by the main LeftMenu component in order to know which sections it needs to display/hide
    // Therefore, we don't need to make the checking all the times when the hook is used.


    if (!noCheck) {
      getData();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [permissions, noCheck]);
  return {
    isLoading: isLoading,
    menu: menu
  };
};

var _default = useSettingsMenu;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useSettingsMenu/init.js":
/*!********************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsMenu/init.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js"));

var _sortLinks = _interopRequireDefault(__webpack_require__(/*! ./utils/sortLinks */ "./.cache/admin/src/hooks/useSettingsMenu/utils/sortLinks.js"));

var _permissions = _interopRequireDefault(__webpack_require__(/*! ../../permissions */ "./.cache/admin/src/permissions/index.js"));

var _formatLinks = _interopRequireDefault(__webpack_require__(/*! ./utils/formatLinks */ "./.cache/admin/src/hooks/useSettingsMenu/utils/formatLinks.js"));

var _globalLinks = _interopRequireDefault(__webpack_require__(/*! ./utils/globalLinks */ "./.cache/admin/src/hooks/useSettingsMenu/utils/globalLinks.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var init = function init(initialState, _ref) {
  var settings = _ref.settings,
      shouldUpdateStrapi = _ref.shouldUpdateStrapi;
  // Retrieve the links that will be injected into the global section
  var pluginsGlobalLinks = settings.global.links; // Sort the links by name

  var sortedGlobalLinks = (0, _sortLinks["default"])([].concat((0, _toConsumableArray2["default"])(pluginsGlobalLinks), (0, _toConsumableArray2["default"])(_globalLinks["default"]))).map(function (link) {
    return _objectSpread(_objectSpread({}, link), {}, {
      hasNotification: link.id === '000-application-infos' && shouldUpdateStrapi
    });
  });
  var otherSections = Object.values((0, _omit["default"])(settings, 'global'));
  var menu = [_objectSpread(_objectSpread({}, settings.global), {}, {
    links: sortedGlobalLinks
  }), {
    id: 'permissions',
    intlLabel: {
      id: 'Settings.permissions',
      defaultMessage: 'Administration Panel'
    },
    links: [{
      intlLabel: {
        id: 'Settings.permissions.menu.link.roles.label',
        defaultMessage: 'Roles'
      },
      to: '/settings/roles',
      id: 'roles',
      isDisplayed: false,
      permissions: _permissions["default"].settings.roles.main
    }, {
      intlLabel: {
        id: 'Settings.permissions.menu.link.users.label'
      },
      // Init the search params directly
      to: '/settings/users?pageSize=10&page=1&sort=firstname',
      id: 'users',
      isDisplayed: false,
      permissions: _permissions["default"].settings.users.main
    }]
  }].concat((0, _toConsumableArray2["default"])(otherSections));
  return _objectSpread(_objectSpread({}, initialState), {}, {
    menu: (0, _formatLinks["default"])(menu)
  });
};

var _default = init;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useSettingsMenu/reducer.js":
/*!***********************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsMenu/reducer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialState = exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _immer = _interopRequireDefault(__webpack_require__(/*! immer */ "./src/admin/node_modules/immer/dist/index.js"));

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

var initialState = {
  menu: [],
  isLoading: true
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  return (// eslint-disable-next-line consistent-return
    (0, _immer["default"])(state, function (draftState) {
      switch (action.type) {
        case 'CHECK_PERMISSIONS_SUCCEEDED':
          {
            action.data.forEach(function (checkedPermissions) {
              if (checkedPermissions.hasPermission) {
                (0, _lodash.set)(draftState, ['menu'].concat((0, _toConsumableArray2["default"])(checkedPermissions.path.split('.')), ['isDisplayed']), checkedPermissions.hasPermission);
              }
            }); // Remove the not needed links in each section

            draftState.menu.forEach(function (section, sectionIndex) {
              draftState.menu[sectionIndex].links = section.links.filter(function (link) {
                return link.isDisplayed === true;
              });
            });
            draftState.isLoading = false;
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

/***/ "./.cache/admin/src/hooks/useSettingsMenu/utils/formatLinks.js":
/*!*********************************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsMenu/utils/formatLinks.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var formatLinks = function formatLinks(menu) {
  return menu.map(function (menuSection) {
    var formattedLinks = menuSection.links.map(function (link) {
      return _objectSpread(_objectSpread({}, link), {}, {
        isDisplayed: false
      });
    });
    return _objectSpread(_objectSpread({}, menuSection), {}, {
      links: formattedLinks
    });
  });
};

var _default = formatLinks;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/hooks/useSettingsMenu/utils/globalLinks.js":
/*!*********************************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsMenu/utils/globalLinks.js ***!
  \*********************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./src/admin/node_modules/babel-loader/lib/index.js):\nTypeError [ERR_INVALID_ARG_TYPE]: The \"path\" argument must be of type string. Received null\n    at validateString (internal/validators.js:122:11)\n    at Object.extname (path.js:1229:5)\n    at getRelativePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:11:40)\n    at resolvePathFromRootConfig (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:43:26)\n    at resolvePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:66:25)\n    at PluginPass.transformImport (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/transformers/import.js:17:25)\n    at NodePath._call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:100:31)\n    at TraversalContext.visitQueue (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:103:16)\n    at TraversalContext.visitMultiple (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:72:17)\n    at TraversalContext.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:129:19)\n    at traverseNode (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/traverse-node.js:24:17)\n    at traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/index.js:62:34)\n    at NodePath.traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/index.js:147:24)\n    at PluginPass.enter (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/index.js:15:19)");

/***/ }),

/***/ "./.cache/admin/src/hooks/useSettingsMenu/utils/sortLinks.js":
/*!*******************************************************************!*\
  !*** ./.cache/admin/src/hooks/useSettingsMenu/utils/sortLinks.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _sortBy = _interopRequireDefault(__webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js"));

var sortLinks = function sortLinks(links) {
  return (0, _sortBy["default"])(links, function (link) {
    return link.id;
  });
};

var _default = sortLinks;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/injectionZones.js":
/*!********************************************!*\
  !*** ./.cache/admin/src/injectionZones.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * Admin injection zones:
 * Available zones: Content Manager listView & editView
 * @constant
 * @type {Object}
 */
var injectionZones = {
  admin: {
    // Temporary injection zone, support for the react-tour plugin in foodadvisor
    tutorials: {
      links: []
    }
  },
  contentManager: {
    editView: {
      informations: [],
      'right-links': []
    },
    listView: {
      actions: [],
      deleteModalAdditionalInfos: []
    }
  }
};
var _default = injectionZones;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/layouts/UnauthenticatedLayout/LocaleToggle/index.js":
/*!******************************************************************************!*\
  !*** ./.cache/admin/src/layouts/UnauthenticatedLayout/LocaleToggle/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _SimpleMenu = __webpack_require__(/*! @strapi/design-system/SimpleMenu */ "./node_modules/@strapi/design-system/SimpleMenu.js");

var _useLocalesProvider2 = _interopRequireDefault(__webpack_require__(/*! ../../../components/LocalesProvider/useLocalesProvider */ "./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js"));

/*
 *
 * LanguageToggle
 *
 */
var LocaleToggle = function LocaleToggle() {
  var _useLocalesProvider = (0, _useLocalesProvider2["default"])(),
      changeLocale = _useLocalesProvider.changeLocale,
      localeNames = _useLocalesProvider.localeNames;

  var _useIntl = (0, _reactIntl.useIntl)(),
      locale = _useIntl.locale;

  return /*#__PURE__*/_react["default"].createElement(_SimpleMenu.SimpleMenu, {
    label: localeNames[locale]
  }, Object.keys(localeNames).map(function (lang) {
    return /*#__PURE__*/_react["default"].createElement(_SimpleMenu.MenuItem, {
      onClick: function onClick() {
        return changeLocale(lang);
      },
      key: lang
    }, localeNames[lang]);
  }));
};

var _default = LocaleToggle;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/layouts/UnauthenticatedLayout/index.js":
/*!*****************************************************************!*\
  !*** ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.LayoutContent = exports.Column = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _LocaleToggle = _interopRequireDefault(__webpack_require__(/*! ./LocaleToggle */ "./.cache/admin/src/layouts/UnauthenticatedLayout/LocaleToggle/index.js"));

var Wrapper = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "UnauthenticatedLayout__Wrapper",
  componentId: "sc-zvz5n5-0"
})(["margin:0 auto;width:552px;"]);
var Column = /*#__PURE__*/(0, _styledComponents["default"])(_Flex.Flex).withConfig({
  displayName: "UnauthenticatedLayout__Column",
  componentId: "sc-zvz5n5-1"
})(["flex-direction:column;"]);
exports.Column = Column;

var LayoutContent = function LayoutContent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    shadow: "tableShadow",
    hasRadius: true,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 10,
    paddingRight: 10,
    background: "neutral0",
    justifyContent: "center"
  }, children);
};

exports.LayoutContent = LayoutContent;
LayoutContent.propTypes = {
  children: _propTypes["default"].node.isRequired
};

var UnauthenticatedLayout = function UnauthenticatedLayout(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    as: "header",
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 6,
    paddingRight: 8
  }, /*#__PURE__*/_react["default"].createElement(_LocaleToggle["default"], null))), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 11,
    paddingBottom: 11
  }, children));
};

UnauthenticatedLayout.propTypes = {
  children: _propTypes["default"].node.isRequired
};
var _default = UnauthenticatedLayout;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/App/index.js":
/*!*********************************************!*\
  !*** ./.cache/admin/src/pages/App/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _PrivateRoute = _interopRequireDefault(__webpack_require__(/*! ../../components/PrivateRoute */ "./.cache/admin/src/components/PrivateRoute/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./.cache/admin/src/utils/index.js");

var _AuthPage = _interopRequireDefault(__webpack_require__(/*! ../AuthPage */ "./.cache/admin/src/pages/AuthPage/index.js"));

var _NotFoundPage = _interopRequireDefault(__webpack_require__(/*! ../NotFoundPage */ "./.cache/admin/src/pages/NotFoundPage/index.js"));

var _UseCasePage = _interopRequireDefault(__webpack_require__(/*! ../UseCasePage */ "./.cache/admin/src/pages/UseCasePage/index.js"));

var _utils2 = __webpack_require__(/*! ./utils */ "./.cache/admin/src/pages/App/utils/index.js");

var _routes = _interopRequireDefault(__webpack_require__(/*! ./utils/routes */ "./.cache/admin/src/pages/App/utils/routes.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var AuthenticatedApp = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.all(/*! import() | Admin-authenticatedApp */[__webpack_require__.e("vendors-node_modules_fortawesome_react-fontawesome_index_es_js"), __webpack_require__.e("vendors-node_modules_strapi_design-system_MainNav_js-node_modules_strapi_design-system_Portal-9fe4d9"), __webpack_require__.e("Admin-authenticatedApp")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/AuthenticatedApp */ "./.cache/admin/src/components/AuthenticatedApp/index.js"));
});

function App() {
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0, _react.useState)({
    isLoading: true,
    hasAdmin: false
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      _useState2$ = _useState2[0],
      isLoading = _useState2$.isLoading,
      hasAdmin = _useState2$.hasAdmin,
      uuid = _useState2$.uuid,
      setState = _useState2[1];

  var authRoutes = (0, _react.useMemo)(function () {
    return (0, _utils.makeUniqueRoutes)(_routes["default"].map(function (_ref) {
      var to = _ref.to,
          Component = _ref.Component,
          exact = _ref.exact;
      return (0, _utils.createRoute)(Component, to, exact);
    }));
  }, []);
  (0, _react.useEffect)(function () {
    var currentToken = _helperPlugin.auth.getToken();

    var renewToken = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$request, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _helperPlugin.request)('/admin/renew-token', {
                  method: 'POST',
                  body: {
                    token: currentToken
                  }
                });

              case 3:
                _yield$request = _context.sent;
                token = _yield$request.data.token;

                _helperPlugin.auth.updateToken(token);

                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                // Refresh app
                _helperPlugin.auth.clearAppStorage();

                window.location.reload();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function renewToken() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (currentToken) {
      renewToken();
    }
  }, []);
  (0, _react.useEffect)(function () {
    var getData = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _yield$request2, _yield$request2$data, _hasAdmin, _uuid, deviceId;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _helperPlugin.request)('/admin/init', {
                  method: 'GET'
                });

              case 3:
                _yield$request2 = _context2.sent;
                _yield$request2$data = _yield$request2.data;
                _hasAdmin = _yield$request2$data.hasAdmin;
                _uuid = _yield$request2$data.uuid;

                if (!_uuid) {
                  _context2.next = 17;
                  break;
                }

                _context2.prev = 8;
                _context2.next = 11;
                return (0, _utils2.getUID)();

              case 11:
                deviceId = _context2.sent;
                fetch('https://analytics.strapi.io/track', {
                  method: 'POST',
                  body: JSON.stringify({
                    event: 'didInitializeAdministration',
                    uuid: _uuid,
                    deviceId: deviceId
                  }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
                _context2.next = 17;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](8);

              case 17:
                setState({
                  isLoading: false,
                  hasAdmin: _hasAdmin,
                  uuid: _uuid
                });
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t1 = _context2["catch"](0);
                toggleNotification({
                  type: 'warning',
                  message: {
                    id: 'app.containers.App.notification.error.init'
                  }
                });

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 20], [8, 15]]);
      }));

      return function getData() {
        return _ref3.apply(this, arguments);
      };
    }();

    getData();
  }, [toggleNotification]);

  var setHasAdmin = function setHasAdmin(hasAdmin) {
    return setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        hasAdmin: hasAdmin
      });
    });
  };

  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null)
  }, /*#__PURE__*/_react["default"].createElement(_Main.SkipToContent, null, formatMessage({
    id: 'skipToContent'
  })), /*#__PURE__*/_react["default"].createElement(_helperPlugin.TrackingContext.Provider, {
    value: uuid
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, authRoutes, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/auth/:authType",
    render: function render(routerProps) {
      return /*#__PURE__*/_react["default"].createElement(_AuthPage["default"], (0, _extends2["default"])({}, routerProps, {
        setHasAdmin: setHasAdmin,
        hasAdmin: hasAdmin
      }));
    },
    exact: true
  }), /*#__PURE__*/_react["default"].createElement(_PrivateRoute["default"], {
    path: "/usecase",
    component: _UseCasePage["default"]
  }), /*#__PURE__*/_react["default"].createElement(_PrivateRoute["default"], {
    path: "/",
    component: AuthenticatedApp
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "",
    component: _NotFoundPage["default"]
  }))));
}

var _default = App;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/App/utils/index.js":
/*!***************************************************!*\
  !*** ./.cache/admin/src/pages/App/utils/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "getUID", ({
  enumerable: true,
  get: function get() {
    return _uniqueIdentifier["default"];
  }
}));
Object.defineProperty(exports, "routes", ({
  enumerable: true,
  get: function get() {
    return _routes["default"];
  }
}));

var _uniqueIdentifier = _interopRequireDefault(__webpack_require__(/*! ./unique-identifier */ "./.cache/admin/src/pages/App/utils/unique-identifier.js"));

var _routes = _interopRequireDefault(__webpack_require__(/*! ./routes */ "./.cache/admin/src/pages/App/utils/routes.js"));

/***/ }),

/***/ "./.cache/admin/src/pages/App/utils/routes.js":
/*!****************************************************!*\
  !*** ./.cache/admin/src/pages/App/utils/routes.js ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./src/admin/node_modules/babel-loader/lib/index.js):\nTypeError [ERR_INVALID_ARG_TYPE]: The \"path\" argument must be of type string. Received null\n    at validateString (internal/validators.js:122:11)\n    at Object.extname (path.js:1229:5)\n    at getRelativePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:11:40)\n    at resolvePathFromRootConfig (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:43:26)\n    at resolvePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:66:25)\n    at PluginPass.transformImport (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/transformers/import.js:17:25)\n    at NodePath._call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:100:31)\n    at TraversalContext.visitQueue (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:103:16)\n    at TraversalContext.visitMultiple (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:72:17)\n    at TraversalContext.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:129:19)\n    at traverseNode (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/traverse-node.js:24:17)\n    at traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/index.js:62:34)\n    at NodePath.traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/index.js:147:24)\n    at PluginPass.enter (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/index.js:15:19)");

/***/ }),

/***/ "./.cache/admin/src/pages/App/utils/unique-identifier.js":
/*!***************************************************************!*\
  !*** ./.cache/admin/src/pages/App/utils/unique-identifier.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _fingerprintjs = _interopRequireDefault(__webpack_require__(/*! @fingerprintjs/fingerprintjs */ "./node_modules/@fingerprintjs/fingerprintjs/dist/fp.cjs.js"));

var getUniqueIdentifier = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var fp, result, deviceId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _fingerprintjs["default"].load();

          case 2:
            fp = _context.sent;
            _context.next = 5;
            return fp.get();

          case 5:
            result = _context.sent;
            deviceId = "web-fingerprint-".concat(result.visitorId);
            return _context.abrupt("return", deviceId);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUniqueIdentifier() {
    return _ref.apply(this, arguments);
  };
}();

var _default = getUniqueIdentifier;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/AuthPage/index.js":
/*!**************************************************!*\
  !*** ./.cache/admin/src/pages/AuthPage/index.js ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./src/admin/node_modules/babel-loader/lib/index.js):\nTypeError [ERR_INVALID_ARG_TYPE]: The \"path\" argument must be of type string. Received null\n    at validateString (internal/validators.js:122:11)\n    at Object.extname (path.js:1229:5)\n    at getRelativePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:11:40)\n    at resolvePathFromRootConfig (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:43:26)\n    at resolvePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:66:25)\n    at PluginPass.transformImport (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/transformers/import.js:17:25)\n    at NodePath._call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:100:31)\n    at TraversalContext.visitQueue (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:103:16)\n    at TraversalContext.visitMultiple (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:72:17)\n    at TraversalContext.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:129:19)\n    at traverseNode (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/traverse-node.js:24:17)\n    at traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/index.js:62:34)\n    at NodePath.traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/index.js:147:24)\n    at PluginPass.enter (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/index.js:15:19)");

/***/ }),

/***/ "./.cache/admin/src/pages/NotFoundPage/index.js":
/*!******************************************************!*\
  !*** ./.cache/admin/src/pages/NotFoundPage/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */
var NoContentType = function NoContentType() {
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
      id: 'app.page.not.found',
      defaultMessage: "Oops! We can't seem to find the page you're looging for..."
    }),
    hasRadius: true,
    icon: /*#__PURE__*/_react["default"].createElement(_EmptyPictures["default"], {
      width: "10rem"
    }),
    shadow: "tableShadow"
  })));
};

var _default = NoContentType;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/pages/UseCasePage/index.js":
/*!*****************************************************!*\
  !*** ./.cache/admin/src/pages/UseCasePage/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.options = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _qs = __webpack_require__(/*! qs */ "./src/admin/node_modules/qs/lib/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Select = __webpack_require__(/*! @strapi/design-system/Select */ "./node_modules/@strapi/design-system/Select.js");

var _TextInput = __webpack_require__(/*! @strapi/design-system/TextInput */ "./node_modules/@strapi/design-system/TextInput.js");

var _TextButton = __webpack_require__(/*! @strapi/design-system/TextButton */ "./node_modules/@strapi/design-system/TextButton.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _UnauthenticatedLogo = _interopRequireDefault(__webpack_require__(/*! ../../components/UnauthenticatedLogo */ "./.cache/admin/src/components/UnauthenticatedLogo/index.js"));

var _UnauthenticatedLayout = _interopRequireWildcard(__webpack_require__(/*! ../../layouts/UnauthenticatedLayout */ "./.cache/admin/src/layouts/UnauthenticatedLayout/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var options = [{
  intlLabel: {
    id: 'Usecase.front-end',
    defaultMessage: 'Front-end developer'
  },
  value: 'front_end_developer'
}, {
  intlLabel: {
    id: 'Usecase.back-end',
    defaultMessage: 'Back-end developer'
  },
  value: 'back_end_developer'
}, {
  intlLabel: {
    id: 'Usecase.full-stack',
    defaultMessage: 'Full-stack developer'
  },
  value: 'full_stack_developer'
}, {
  intlLabel: {
    id: 'Usecase.content-manager',
    defaultMessage: 'Content Manager'
  },
  value: 'content_manager'
}, {
  intlLabel: {
    id: 'Usecase.content-creator',
    defaultMessage: 'Content Creator'
  },
  value: 'content_creator'
}, {
  intlLabel: {
    id: 'Usecase.other',
    defaultMessage: 'Other'
  },
  value: 'other'
}];
exports.options = options;
var TypographyCenter = /*#__PURE__*/(0, _styledComponents["default"])(_Typography.Typography).withConfig({
  displayName: "UseCasePage__TypographyCenter",
  componentId: "sc-aiyv7d-0"
})(["text-align:center;"]);

var UseCasePage = function UseCasePage() {
  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useHistory = (0, _reactRouterDom.useHistory)(),
      push = _useHistory.push,
      location = _useHistory.location;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      role = _useState2[0],
      setRole = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      otherRole = _useState4[0],
      setOtherRole = _useState4[1];

  var _auth$getUserInfo = _helperPlugin.auth.getUserInfo(),
      firstname = _auth$getUserInfo.firstname,
      email = _auth$getUserInfo.email;

  var _parse = (0, _qs.parse)(location === null || location === void 0 ? void 0 : location.search, {
    ignoreQueryPrefix: true
  }),
      hasAdmin = _parse.hasAdmin;

  var isOther = role === 'other';

  var handleSubmit = function handleSubmit(skipPersona) {
    try {
      (0, _axios["default"])({
        method: 'POST',
        url: 'https://analytics.strapi.io/register',
        data: {
          email: email,
          username: firstname,
          firstAdmin: Boolean(!hasAdmin),
          persona: {
            role: skipPersona ? undefined : role,
            otherRole: skipPersona ? undefined : otherRole
          }
        }
      });
      toggleNotification({
        type: 'success',
        message: {
          id: 'Usecase.notification.success.project-created',
          defaultMessage: 'Project has been successfully created'
        }
      });
      push('/');
    } catch (err) {// Silent
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_UnauthenticatedLayout["default"], null, /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    labelledBy: "usecase-title"
  }, /*#__PURE__*/_react["default"].createElement(_UnauthenticatedLayout.LayoutContent, null, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit() {
      return handleSubmit(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    direction: "column",
    paddingBottom: 7
  }, /*#__PURE__*/_react["default"].createElement(_UnauthenticatedLogo["default"], null), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 6,
    paddingBottom: 1,
    width: (0, _helperPlugin.pxToRem)(250)
  }, /*#__PURE__*/_react["default"].createElement(TypographyCenter, {
    variant: "alpha",
    as: "h1",
    id: "usecase-title"
  }, formatMessage({
    id: 'Usecase.title',
    defaultMessage: 'Tell us a bit more about yourself'
  })))), /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    spacing: 6
  }, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    id: "usecase",
    "data-testid": "usecase",
    label: formatMessage({
      id: 'Usecase.input.work-type',
      defaultMessage: 'What type of work do you do?'
    }) // onClear={() => setRole(null)}
    // clearLabel={formatMessage({ id: 'clearLabel', defaultMessage: 'Clear' })}
    ,
    onChange: setRole,
    value: role
  }, options.map(function (_ref) {
    var intlLabel = _ref.intlLabel,
        value = _ref.value;
    return /*#__PURE__*/_react["default"].createElement(_Select.Option, {
      key: value,
      value: value
    }, formatMessage(intlLabel));
  })), isOther && /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    name: "other",
    label: formatMessage({
      id: 'Usecase.other',
      defaultMessage: 'Other'
    }),
    value: otherRole,
    onChange: function onChange(e) {
      return setOtherRole(e.target.value);
    },
    "data-testid": "other"
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    type: "submit",
    size: "L",
    fullWidth: true,
    disabled: !role
  }, formatMessage({
    id: 'form.button.finish',
    defaultMessage: 'Finish'
  }))))), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 4
  }, /*#__PURE__*/_react["default"].createElement(_TextButton.TextButton, {
    onClick: function onClick() {
      return handleSubmit(true);
    }
  }, formatMessage({
    id: 'Usecase.button.skip',
    defaultMessage: 'Skip this question'
  }))))));
};

var _default = UseCasePage;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/permissions/index.js":
/*!***********************************************!*\
  !*** ./.cache/admin/src/permissions/index.js ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./src/admin/node_modules/babel-loader/lib/index.js):\nTypeError [ERR_INVALID_ARG_TYPE]: The \"path\" argument must be of type string. Received null\n    at validateString (internal/validators.js:122:11)\n    at Object.extname (path.js:1229:5)\n    at getRelativePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:11:40)\n    at resolvePathFromRootConfig (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:43:26)\n    at resolvePath (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/resolvePath.js:66:25)\n    at PluginPass.transformImport (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/transformers/import.js:17:25)\n    at NodePath._call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/context.js:100:31)\n    at TraversalContext.visitQueue (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:103:16)\n    at TraversalContext.visitMultiple (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:72:17)\n    at TraversalContext.visit (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/context.js:129:19)\n    at traverseNode (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/traverse-node.js:24:17)\n    at traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/index.js:62:34)\n    at NodePath.traverse (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@babel/traverse/lib/path/index.js:147:24)\n    at PluginPass.enter (/home/kamleshbobde/entando/ent-strapi-keycloak/interceptor/PluginExtensionTest1/fresh-users-permissions/src/admin/node_modules/@strapi/babel-plugin-switch-ee-ce/lib/index.js:15:19)");

/***/ }),

/***/ "./.cache/admin/src/translations/languageNativeNames.js":
/*!**************************************************************!*\
  !*** ./.cache/admin/src/translations/languageNativeNames.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var languageNativeNames = {
  ar: 'العربية',
  cs: 'Čeština',
  de: 'Deutsch',
  dk: 'Dansk',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  he: 'עברית',
  hu: 'Magyar',
  id: 'Indonesian',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  ms: 'Melayu',
  nl: 'Nederlands',
  no: 'Norwegian',
  pl: 'Polski',
  'pt-BR': 'Português (Brasil)',
  pt: 'Português (Portugal)',
  ru: 'Русский',
  sk: 'Slovenčina',
  sv: 'Swedish',
  th: 'ไทย',
  tr: 'Türkçe',
  uk: 'Українська',
  vi: 'Tiếng Việt',
  'zh-Hans': '中文 (简体)',
  zh: '中文 (繁體)'
};
var _default = languageNativeNames;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/checkFormValidity.js":
/*!*****************************************************!*\
  !*** ./.cache/admin/src/utils/checkFormValidity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var checkFormValidity = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, schema) {
    var errors;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errors = null;
            _context.prev = 1;
            _context.next = 4;
            return schema.validate(data, {
              abortEarly: false
            });

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            errors = (0, _helperPlugin.getYupInnerErrors)(_context.t0);

          case 9:
            return _context.abrupt("return", errors);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function checkFormValidity(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = checkFormValidity;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/createRoute.js":
/*!***********************************************!*\
  !*** ./.cache/admin/src/utils/createRoute.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./src/admin/node_modules/console-browserify/index.js */ "./src/admin/node_modules/console-browserify/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./src/admin/node_modules/react-router-dom/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LazyCompo = function LazyCompo(_ref) {
  var loadComponent = _ref.loadComponent;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      Compo = _useState2[0],
      setCompo = _useState2[1];

  (0, _react.useEffect)(function () {
    var loadCompo = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var loadedCompo;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return loadComponent();

              case 3:
                loadedCompo = _context.sent;
                setCompo(function () {
                  return loadedCompo["default"];
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                // TODO return the error component
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function loadCompo() {
        return _ref2.apply(this, arguments);
      };
    }();

    loadCompo();
  }, [loadComponent]);

  if (Compo) {
    return /*#__PURE__*/_react["default"].createElement(Compo, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null);
};

var createRoute = function createRoute(Component, to, exact) {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    render: function render() {
      return /*#__PURE__*/_react["default"].createElement(LazyCompo, {
        loadComponent: Component
      });
    },
    key: to,
    path: to,
    exact: exact || false
  });
};

LazyCompo.propTypes = {
  loadComponent: _propTypes["default"].func.isRequired
};
var _default = createRoute;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/formatAPIErrors.js":
/*!***************************************************!*\
  !*** ./.cache/admin/src/utils/formatAPIErrors.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var formatAPIError = function formatAPIError(_ref) {
  var data = _ref.data;

  try {
    return Object.keys(data).reduce(function (acc, current) {
      var errorMessage = data[current][0];
      acc[current] = {
        id: errorMessage,
        defaultMessage: errorMessage
      };
      return acc;
    }, {});
  } catch (err) {
    return {};
  }
};

var _default = formatAPIError;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/getAttributesToDisplay.js":
/*!**********************************************************!*\
  !*** ./.cache/admin/src/utils/getAttributesToDisplay.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getAttributesToDisplay = function getAttributesToDisplay(contentType) {
  var timestamps = (0, _lodash.get)(contentType, ['options', 'timestamps']); // Sometimes timestamps is false

  var timestampsArray = Array.isArray(timestamps) ? timestamps : [];
  var idsAttributes = ['id', '_id']; // For both SQL and mongo

  var unwritableAttributes = [].concat(idsAttributes, (0, _toConsumableArray2["default"])(timestampsArray), ['publishedAt']);
  var schemaAttributes = (0, _lodash.get)(contentType, ['attributes'], {});
  return Object.keys(schemaAttributes).reduce(function (acc, current) {
    if (!unwritableAttributes.includes(current)) {
      acc.push(_objectSpread(_objectSpread({}, schemaAttributes[current]), {}, {
        attributeName: current
      }));
    }

    return acc;
  }, []);
};

var _default = getAttributesToDisplay;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/getExistingActions.js":
/*!******************************************************!*\
  !*** ./.cache/admin/src/utils/getExistingActions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

var getExistingActions = function getExistingActions(permissions) {
  return Array.from(new Set(Object.entries(permissions).reduce(function (acc, current) {
    var getActionsPermission = function getActionsPermission(permission) {
      return permission.reduce(function (accAction, currentAction) {
        var actionsToReturn = accAction;

        if (currentAction.actions) {
          actionsToReturn = [].concat((0, _toConsumableArray2["default"])(actionsToReturn), (0, _toConsumableArray2["default"])(currentAction.actions));
        }

        if ((0, _typeof2["default"])(currentAction) === 'object' && !currentAction.actions) {
          actionsToReturn = [].concat((0, _toConsumableArray2["default"])(actionsToReturn), (0, _toConsumableArray2["default"])(Object.keys(currentAction)));
        }

        return actionsToReturn;
      }, []);
    };

    return [].concat((0, _toConsumableArray2["default"])(acc), (0, _toConsumableArray2["default"])(getActionsPermission([].concat((0, _toConsumableArray2["default"])(Object.values(current[1].attributes || {})), [(0, _lodash.get)(current[1], 'contentTypeActions', {})]))));
  }, [])));
};

var _default = getExistingActions;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/getFullName.js":
/*!***********************************************!*\
  !*** ./.cache/admin/src/utils/getFullName.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * Get fullname from firstname+lastname joined with a space
 * Handle missing lastname
 * @param {string} firstname
 * @param {string} lastname
 */
var _default = function _default(firstname) {
  var lastname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return [firstname, lastname].filter(function (str) {
    return str;
  }).join(' ');
};

exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/getRequestUrl.js":
/*!*************************************************!*\
  !*** ./.cache/admin/src/utils/getRequestUrl.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var getRequestUrl = function getRequestUrl(path) {
  return "/admin/".concat(path);
};

var _default = getRequestUrl;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/index.js":
/*!*****************************************!*\
  !*** ./.cache/admin/src/utils/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "checkFormValidity", ({
  enumerable: true,
  get: function get() {
    return _checkFormValidity["default"];
  }
}));
Object.defineProperty(exports, "createRoute", ({
  enumerable: true,
  get: function get() {
    return _createRoute["default"];
  }
}));
Object.defineProperty(exports, "formatAPIErrors", ({
  enumerable: true,
  get: function get() {
    return _formatAPIErrors["default"];
  }
}));
Object.defineProperty(exports, "getAttributesToDisplay", ({
  enumerable: true,
  get: function get() {
    return _getAttributesToDisplay["default"];
  }
}));
Object.defineProperty(exports, "getExistingActions", ({
  enumerable: true,
  get: function get() {
    return _getExistingActions["default"];
  }
}));
Object.defineProperty(exports, "getFullName", ({
  enumerable: true,
  get: function get() {
    return _getFullName["default"];
  }
}));
Object.defineProperty(exports, "getRequestUrl", ({
  enumerable: true,
  get: function get() {
    return _getRequestUrl["default"];
  }
}));
Object.defineProperty(exports, "makeUniqueRoutes", ({
  enumerable: true,
  get: function get() {
    return _makeUniqueRoutes["default"];
  }
}));
Object.defineProperty(exports, "sortLinks", ({
  enumerable: true,
  get: function get() {
    return _sortLinks["default"];
  }
}));

var _checkFormValidity = _interopRequireDefault(__webpack_require__(/*! ./checkFormValidity */ "./.cache/admin/src/utils/checkFormValidity.js"));

var _createRoute = _interopRequireDefault(__webpack_require__(/*! ./createRoute */ "./.cache/admin/src/utils/createRoute.js"));

var _formatAPIErrors = _interopRequireDefault(__webpack_require__(/*! ./formatAPIErrors */ "./.cache/admin/src/utils/formatAPIErrors.js"));

var _getAttributesToDisplay = _interopRequireDefault(__webpack_require__(/*! ./getAttributesToDisplay */ "./.cache/admin/src/utils/getAttributesToDisplay.js"));

var _makeUniqueRoutes = _interopRequireDefault(__webpack_require__(/*! ./makeUniqueRoutes */ "./.cache/admin/src/utils/makeUniqueRoutes.js"));

var _sortLinks = _interopRequireDefault(__webpack_require__(/*! ./sortLinks */ "./.cache/admin/src/utils/sortLinks.js"));

var _getExistingActions = _interopRequireDefault(__webpack_require__(/*! ./getExistingActions */ "./.cache/admin/src/utils/getExistingActions.js"));

var _getRequestUrl = _interopRequireDefault(__webpack_require__(/*! ./getRequestUrl */ "./.cache/admin/src/utils/getRequestUrl.js"));

var _getFullName = _interopRequireDefault(__webpack_require__(/*! ./getFullName */ "./.cache/admin/src/utils/getFullName.js"));

/***/ }),

/***/ "./.cache/admin/src/utils/makeUniqueRoutes.js":
/*!****************************************************!*\
  !*** ./.cache/admin/src/utils/makeUniqueRoutes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var makeUniqueRoutes = function makeUniqueRoutes(routes) {
  return routes.filter(function (route, index, refArray) {
    return refArray.findIndex(function (obj) {
      return obj.key === route.key;
    }) === index;
  });
};

var _default = makeUniqueRoutes;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/utils/sortLinks.js":
/*!*********************************************!*\
  !*** ./.cache/admin/src/utils/sortLinks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _lodash = __webpack_require__(/*! lodash */ "./src/admin/node_modules/lodash/lodash.js");

var sortLinks = function sortLinks(links) {
  return (0, _lodash.sortBy)(links, function (object) {
    return object.name;
  });
};

var _default = sortLinks;
exports["default"] = _default;

/***/ }),

/***/ "./.cache/admin/src/assets/images/logo_strapi_auth_v4.png":
/*!****************************************************************!*\
  !*** ./.cache/admin/src/assets/images/logo_strapi_auth_v4.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fde9b1ad0670d29a2516.png";

/***/ }),

/***/ "./.cache/admin/src/assets/images/logo_strapi_menu.png":
/*!*************************************************************!*\
  !*** ./.cache/admin/src/assets/images/logo_strapi_menu.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "15026a3d58aeb2828134.png";

/***/ }),

/***/ "./.cache/admin/src/favicon.ico":
/*!**************************************!*\
  !*** ./.cache/admin/src/favicon.ico ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b997a22a2e0b87ef1fa2.ico";

/***/ })

}]);