"use strict";
(self["webpackChunkfresh_users_permissions"] = self["webpackChunkfresh_users_permissions"] || []).push([["upload"],{

/***/ "./node_modules/@strapi/plugin-upload/admin/src/components/PaginationFooter/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/components/PaginationFooter/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PaginationFooter = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _Flex = __webpack_require__(/*! @strapi/design-system/Flex */ "./node_modules/@strapi/design-system/Flex.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var PaginationFooter = function PaginationFooter(_ref) {
  var pagination = _ref.pagination;
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    paddingTop: 6
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "flex-end",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_helperPlugin.PageSizeURLQuery, null), /*#__PURE__*/_react["default"].createElement(_helperPlugin.PaginationURLQuery, {
    pagination: pagination
  })));
};

exports.PaginationFooter = PaginationFooter;
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: _propTypes["default"].shape({
    page: _propTypes["default"].number,
    pageCount: _propTypes["default"].number,
    pageSize: _propTypes["default"].number,
    total: _propTypes["default"].number
  })
};

/***/ }),

/***/ "./node_modules/@strapi/plugin-upload/admin/src/hooks/useAssets.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/hooks/useAssets.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAssets = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js");

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _LiveRegions = __webpack_require__(/*! @strapi/design-system/LiveRegions */ "./node_modules/@strapi/design-system/LiveRegions.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/@strapi/plugin-upload/admin/src/utils/index.js");

var useAssets = function useAssets(_ref) {
  var skipWhen = _ref.skipWhen;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var toggleNotification = (0, _helperPlugin.useNotification)();

  var _useNotifyAT = (0, _LiveRegions.useNotifyAT)(),
      notifyStatus = _useNotifyAT.notifyStatus;

  var _useQueryParams = (0, _helperPlugin.useQueryParams)(),
      _useQueryParams2 = (0, _slicedToArray2["default"])(_useQueryParams, 1),
      rawQuery = _useQueryParams2[0].rawQuery;

  var dataRequestURL = (0, _utils.getRequestUrl)('files');

  var getAssets = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _yield$axiosInstance$, data;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _utils.axiosInstance.get("".concat(dataRequestURL).concat(rawQuery));

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

    return function getAssets() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _useQuery = (0, _reactQuery.useQuery)(["assets", rawQuery], getAssets, {
    enabled: !skipWhen,
    staleTime: 0,
    cacheTime: 0
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      isLoading = _useQuery.isLoading;

  (0, _react.useEffect)(function () {
    if (data) {
      notifyStatus(formatMessage({
        id: 'list.asset.at.finished',
        defaultMessage: 'The assets have finished loading.'
      }));
    }
  }, [data, notifyStatus, formatMessage]);
  (0, _react.useEffect)(function () {
    if (error) {
      toggleNotification({
        type: 'warning',
        message: {
          id: 'notification.error'
        }
      });
    }
  }, [error, toggleNotification]);
  return {
    data: data,
    error: error,
    isLoading: isLoading
  };
};

exports.useAssets = useAssets;

/***/ }),

/***/ "./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkRemoveAsset.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkRemoveAsset.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useBulkRemoveAsset = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _reactQuery = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _removeAssetQuery = __webpack_require__(/*! ../utils/removeAssetQuery */ "./node_modules/@strapi/plugin-upload/admin/src/utils/removeAssetQuery.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var bulkRemoveQuery = function bulkRemoveQuery(assetIds) {
  var promises = assetIds.map(function (assetId) {
    return (0, _removeAssetQuery.removeAssetRequest)(assetId);
  });
  return Promise.all(promises);
};

var useBulkRemoveAsset = function useBulkRemoveAsset() {
  var toggleNotification = (0, _helperPlugin.useNotification)();
  var queryClient = (0, _reactQuery.useQueryClient)();
  var mutation = (0, _reactQuery.useMutation)(bulkRemoveQuery, {
    onSuccess: function onSuccess() {
      // Coupled with the cache of useAssets
      queryClient.refetchQueries(['assets'], {
        active: true
      });
      queryClient.refetchQueries(['asset-count'], {
        active: true
      });
      toggleNotification({
        type: 'success',
        message: {
          id: 'modal.remove.success-label',
          defaultMessage: 'The asset has been successfully removed.'
        }
      });
    },
    onError: function onError(error) {
      toggleNotification({
        type: 'warning',
        message: error.message
      });
    }
  });

  var removeAssets = function removeAssets(assetIds) {
    return mutation.mutateAsync(assetIds);
  };

  return _objectSpread(_objectSpread({}, mutation), {}, {
    removeAssets: removeAssets
  });
};

exports.useBulkRemoveAsset = useBulkRemoveAsset;

/***/ }),

/***/ "./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MediaLibrary = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./src/admin/node_modules/styled-components/dist/styled-components.browser.cjs.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Layout = __webpack_require__(/*! @strapi/design-system/Layout */ "./node_modules/@strapi/design-system/Layout.js");

var _Main = __webpack_require__(/*! @strapi/design-system/Main */ "./node_modules/@strapi/design-system/Main.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Plus = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Plus */ "./node_modules/@strapi/icons/Plus.js"));

var _Box = __webpack_require__(/*! @strapi/design-system/Box */ "./node_modules/@strapi/design-system/Box.js");

var _BaseCheckbox = __webpack_require__(/*! @strapi/design-system/BaseCheckbox */ "./node_modules/@strapi/design-system/BaseCheckbox.js");

var _UploadAssetDialog = __webpack_require__(/*! ../../components/UploadAssetDialog/UploadAssetDialog */ "./node_modules/@strapi/plugin-upload/admin/src/components/UploadAssetDialog/UploadAssetDialog.js");

var _EditAssetDialog = __webpack_require__(/*! ../../components/EditAssetDialog */ "./node_modules/@strapi/plugin-upload/admin/src/components/EditAssetDialog/index.js");

var _AssetList = __webpack_require__(/*! ../../components/AssetList */ "./node_modules/@strapi/plugin-upload/admin/src/components/AssetList/index.js");

var _SortPicker = _interopRequireDefault(__webpack_require__(/*! ../../components/SortPicker */ "./node_modules/@strapi/plugin-upload/admin/src/components/SortPicker/index.js"));

var _useAssets2 = __webpack_require__(/*! ../../hooks/useAssets */ "./node_modules/@strapi/plugin-upload/admin/src/hooks/useAssets.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-upload/admin/src/utils/index.js");

var _Filters = __webpack_require__(/*! ./components/Filters */ "./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/Filters.js");

var _PaginationFooter = __webpack_require__(/*! ../../components/PaginationFooter */ "./node_modules/@strapi/plugin-upload/admin/src/components/PaginationFooter/index.js");

var _useMediaLibraryPermissions = __webpack_require__(/*! ../../hooks/useMediaLibraryPermissions */ "./node_modules/@strapi/plugin-upload/admin/src/hooks/useMediaLibraryPermissions.js");

var _BulkDeleteButton = __webpack_require__(/*! ./components/BulkDeleteButton */ "./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkDeleteButton.js");

var _EmptyAssets = __webpack_require__(/*! ../../components/EmptyAssets */ "./node_modules/@strapi/plugin-upload/admin/src/components/EmptyAssets/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// useState
var BoxWithHeight = /*#__PURE__*/(0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "MediaLibrary__BoxWithHeight",
  componentId: "sc-1gb6n0n-0"
})(["height:", "rem;display:flex;align-items:center;"], 32 / 16);

var MediaLibrary = function MediaLibrary() {
  var _data$pagination;

  var _useMediaLibraryPermi = (0, _useMediaLibraryPermissions.useMediaLibraryPermissions)(),
      canRead = _useMediaLibraryPermi.canRead,
      canCreate = _useMediaLibraryPermi.canCreate,
      canUpdate = _useMediaLibraryPermi.canUpdate,
      canCopyLink = _useMediaLibraryPermi.canCopyLink,
      canDownload = _useMediaLibraryPermi.canDownload,
      isLoadingPermissions = _useMediaLibraryPermi.isLoading;

  var _useQueryParams = (0, _helperPlugin.useQueryParams)(),
      _useQueryParams2 = (0, _slicedToArray2["default"])(_useQueryParams, 2),
      query = _useQueryParams2[0].query,
      setQuery = _useQueryParams2[1];

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useAssets = (0, _useAssets2.useAssets)({
    skipWhen: !canRead
  }),
      data = _useAssets.data,
      isLoading = _useAssets.isLoading,
      error = _useAssets.error;

  var handleChangeSort = function handleChangeSort(value) {
    setQuery({
      sort: value
    });
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showUploadAssetDialog = _useState2[0],
      setShowUploadAssetDialog = _useState2[1];

  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      assetToEdit = _useState4[0],
      setAssetToEdit = _useState4[1];

  var _useSelectionState = (0, _helperPlugin.useSelectionState)('id', []),
      _useSelectionState2 = (0, _slicedToArray2["default"])(_useSelectionState, 2),
      selected = _useSelectionState2[0],
      _useSelectionState2$ = _useSelectionState2[1],
      selectOne = _useSelectionState2$.selectOne,
      selectAll = _useSelectionState2$.selectAll;

  var toggleUploadAssetDialog = function toggleUploadAssetDialog() {
    return setShowUploadAssetDialog(function (prev) {
      return !prev;
    });
  };

  (0, _helperPlugin.useFocusWhenNavigate)();
  var loading = isLoadingPermissions || isLoading;
  var assets = data === null || data === void 0 ? void 0 : data.results;
  var assetCount = (data === null || data === void 0 ? void 0 : (_data$pagination = data.pagination) === null || _data$pagination === void 0 ? void 0 : _data$pagination.total) || 0;
  var isFiltering = Boolean(query._q || query.filters);
  return /*#__PURE__*/_react["default"].createElement(_Layout.Layout, null, /*#__PURE__*/_react["default"].createElement(_Main.Main, {
    "aria-busy": loading
  }, /*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout, {
    title: formatMessage({
      id: (0, _utils.getTrad)('plugin.name'),
      defaultMessage: 'Media Library'
    }),
    subtitle: formatMessage({
      id: (0, _utils.getTrad)(assetCount > 0 ? 'header.content.assets-multiple' : 'header.content.assets.assets-single'),
      defaultMessage: '0 assets'
    }, {
      number: assetCount
    }),
    primaryAction: canCreate ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      startIcon: /*#__PURE__*/_react["default"].createElement(_Plus["default"], null),
      onClick: toggleUploadAssetDialog
    }, formatMessage({
      id: (0, _utils.getTrad)('header.actions.add-assets'),
      defaultMessage: 'Add new assets'
    })) : undefined
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ActionLayout, {
    startActions: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, canUpdate && /*#__PURE__*/_react["default"].createElement(BoxWithHeight, {
      paddingLeft: 2,
      paddingRight: 2,
      background: "neutral0",
      hasRadius: true,
      borderColor: "neutral200"
    }, /*#__PURE__*/_react["default"].createElement(_BaseCheckbox.BaseCheckbox, {
      "aria-label": formatMessage({
        id: (0, _utils.getTrad)('bulk.select.label'),
        defaultMessage: 'Select all assets'
      }),
      indeterminate: (assets === null || assets === void 0 ? void 0 : assets.length) > 0 && selected.length > 0 && selected.length !== (assets === null || assets === void 0 ? void 0 : assets.length),
      value: (assets === null || assets === void 0 ? void 0 : assets.length) > 0 && selected.length === (assets === null || assets === void 0 ? void 0 : assets.length),
      onChange: function onChange() {
        return selectAll(assets);
      }
    })), canRead && /*#__PURE__*/_react["default"].createElement(_SortPicker["default"], {
      onChangeSort: handleChangeSort
    }), canRead && /*#__PURE__*/_react["default"].createElement(_Filters.Filters, null)),
    endActions: /*#__PURE__*/_react["default"].createElement(_helperPlugin.SearchURLQuery, {
      label: formatMessage({
        id: (0, _utils.getTrad)('search.label'),
        defaultMessage: 'Search for an asset'
      })
    })
  }), /*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout, null, selected.length > 0 && /*#__PURE__*/_react["default"].createElement(_BulkDeleteButton.BulkDeleteButton, {
    selectedAssets: selected,
    onSuccess: selectAll
  }), loading && /*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage, null), error && /*#__PURE__*/_react["default"].createElement(_helperPlugin.AnErrorOccurred, null), !canRead && /*#__PURE__*/_react["default"].createElement(_helperPlugin.NoPermissions, null), canRead && assets && assets.length === 0 && /*#__PURE__*/_react["default"].createElement(_EmptyAssets.EmptyAssets, {
    action: canCreate && !isFiltering ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      variant: "secondary",
      startIcon: /*#__PURE__*/_react["default"].createElement(_Plus["default"], null),
      onClick: toggleUploadAssetDialog
    }, formatMessage({
      id: (0, _utils.getTrad)('header.actions.add-assets'),
      defaultMessage: 'Add new assets'
    })) : undefined,
    content: // eslint-disable-next-line no-nested-ternary
    isFiltering ? formatMessage({
      id: (0, _utils.getTrad)('list.assets-empty.title-withSearch'),
      defaultMessage: 'There are no assets with the applied filters'
    }) : canCreate ? formatMessage({
      id: (0, _utils.getTrad)('list.assets.empty'),
      defaultMessage: 'Upload your first assets...'
    }) : formatMessage({
      id: (0, _utils.getTrad)('list.assets.empty.no-permissions'),
      defaultMessage: 'The asset list is empty'
    })
  }), canRead && assets && assets.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_AssetList.AssetList, {
    assets: assets,
    onEditAsset: setAssetToEdit,
    onSelectAsset: selectOne,
    selectedAssets: selected
  }), (data === null || data === void 0 ? void 0 : data.pagination) && /*#__PURE__*/_react["default"].createElement(_PaginationFooter.PaginationFooter, {
    pagination: data.pagination
  })))), showUploadAssetDialog && /*#__PURE__*/_react["default"].createElement(_UploadAssetDialog.UploadAssetDialog, {
    onClose: toggleUploadAssetDialog,
    trackedLocation: "upload"
  }), assetToEdit && /*#__PURE__*/_react["default"].createElement(_EditAssetDialog.EditAssetDialog, {
    onClose: function onClose() {
      return setAssetToEdit(undefined);
    },
    asset: assetToEdit,
    canUpdate: canUpdate,
    canCopyLink: canCopyLink,
    canDownload: canDownload,
    trackedLocation: "upload"
  }));
};

exports.MediaLibrary = MediaLibrary;

/***/ }),

/***/ "./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkDeleteButton.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/BulkDeleteButton.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BulkDeleteButton = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _Typography = __webpack_require__(/*! @strapi/design-system/Typography */ "./node_modules/@strapi/design-system/Typography.js");

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _Stack = __webpack_require__(/*! @strapi/design-system/Stack */ "./node_modules/@strapi/design-system/Stack.js");

var _Trash = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Trash */ "./node_modules/@strapi/icons/Trash.js"));

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _useBulkRemoveAsset2 = __webpack_require__(/*! ../../../hooks/useBulkRemoveAsset */ "./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkRemoveAsset.js");

var _getTrad = _interopRequireDefault(__webpack_require__(/*! ../../../utils/getTrad */ "./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BulkDeleteButton = function BulkDeleteButton(_ref) {
  var selectedAssets = _ref.selectedAssets,
      onSuccess = _ref.onSuccess;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showConfirmDialog = _useState2[0],
      setShowConfirmDialog = _useState2[1];

  var _useBulkRemoveAsset = (0, _useBulkRemoveAsset2.useBulkRemoveAsset)(),
      isLoading = _useBulkRemoveAsset.isLoading,
      removeAssets = _useBulkRemoveAsset.removeAssets;

  var handleConfirmRemove = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return removeAssets(selectedAssets.map(function (_ref3) {
                var id = _ref3.id;
                return id;
              }));

            case 2:
              onSuccess();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleConfirmRemove() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack.Stack, {
    horizontal: true,
    spacing: 2,
    paddingBottom: 5
  }, /*#__PURE__*/_react["default"].createElement(_Typography.Typography, {
    variant: "epsilon",
    textColor: "neutral600"
  }, formatMessage({
    id: (0, _getTrad["default"])('list.assets.selected'),
    defaultMessage: '{number, plural, =0 {No asset} one {1 asset} other {# assets}} selected'
  }, {
    number: selectedAssets.length
  })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "danger-light",
    size: "S",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Trash["default"], null),
    onClick: function onClick() {
      return setShowConfirmDialog(true);
    }
  }, formatMessage({
    id: (0, _getTrad["default"])('control-card.delete'),
    defaultMessage: 'Delete'
  }))), /*#__PURE__*/_react["default"].createElement(_helperPlugin.ConfirmDialog, {
    isConfirmButtonLoading: isLoading,
    isOpen: showConfirmDialog,
    onToggleDialog: function onToggleDialog() {
      return setShowConfirmDialog(false);
    },
    onConfirm: handleConfirmRemove
  }));
};

exports.BulkDeleteButton = BulkDeleteButton;
BulkDeleteButton.propTypes = {
  selectedAssets: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired,
  onSuccess: _propTypes["default"].func.isRequired
};

/***/ }),

/***/ "./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/Filters.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/pages/App/components/Filters.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Filters = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _Button = __webpack_require__(/*! @strapi/design-system/Button */ "./node_modules/@strapi/design-system/Button.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _Filter = _interopRequireDefault(__webpack_require__(/*! @strapi/icons/Filter */ "./node_modules/@strapi/icons/Filter.js"));

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _FilterList = _interopRequireDefault(__webpack_require__(/*! ../../../components/FilterList */ "./node_modules/@strapi/plugin-upload/admin/src/components/FilterList/index.js"));

var _FilterPopover = _interopRequireDefault(__webpack_require__(/*! ../../../components/FilterPopover */ "./node_modules/@strapi/plugin-upload/admin/src/components/FilterPopover/index.js"));

var _displayedFilters = _interopRequireDefault(__webpack_require__(/*! ../../../utils/displayedFilters */ "./node_modules/@strapi/plugin-upload/admin/src/utils/displayedFilters.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Filters = function Filters() {
  var _query$filters;

  var buttonRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isVisible = _useState2[0],
      setVisible = _useState2[1];

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useQueryParams = (0, _helperPlugin.useQueryParams)(),
      _useQueryParams2 = (0, _slicedToArray2["default"])(_useQueryParams, 2),
      query = _useQueryParams2[0].query,
      setQuery = _useQueryParams2[1];

  var filters = (query === null || query === void 0 ? void 0 : (_query$filters = query.filters) === null || _query$filters === void 0 ? void 0 : _query$filters.$and) || [];

  var toggleFilter = function toggleFilter() {
    return setVisible(function (prev) {
      return !prev;
    });
  };

  var handleRemoveFilter = function handleRemoveFilter(nextFilters) {
    setQuery({
      filters: {
        $and: nextFilters
      },
      page: 1
    });
  };

  var handleSubmit = function handleSubmit(filters) {
    setQuery({
      filters: {
        $and: filters
      },
      page: 1
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "tertiary",
    ref: buttonRef,
    startIcon: /*#__PURE__*/_react["default"].createElement(_Filter["default"], null),
    onClick: toggleFilter,
    size: "S"
  }, formatMessage({
    id: 'app.utils.filters',
    defaultMessage: 'Filters'
  })), isVisible && /*#__PURE__*/_react["default"].createElement(_FilterPopover["default"], {
    displayedFilters: _displayedFilters["default"],
    filters: filters,
    onSubmit: handleSubmit,
    onToggle: toggleFilter,
    source: buttonRef
  }), /*#__PURE__*/_react["default"].createElement(_FilterList["default"], {
    appliedFilters: filters,
    filtersSchema: _displayedFilters["default"],
    onRemoveFilter: handleRemoveFilter
  }));
};

exports.Filters = Filters;

/***/ }),

/***/ "./node_modules/@strapi/plugin-upload/admin/src/pages/App/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@strapi/plugin-upload/admin/src/pages/App/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./src/admin/node_modules/react/index.js"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./src/admin/node_modules/react-helmet/lib/Helmet.js");

var _reactIntl = __webpack_require__(/*! react-intl */ "./src/admin/node_modules/react-intl/index.js");

var _helperPlugin = __webpack_require__(/*! @strapi/helper-plugin */ "./node_modules/@strapi/helper-plugin/build/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/@strapi/plugin-upload/admin/src/utils/index.js");

var _MediaLibrary = __webpack_require__(/*! ./MediaLibrary */ "./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var App = function App() {
  var _useQueryParams = (0, _helperPlugin.useQueryParams)(),
      _useQueryParams2 = (0, _slicedToArray2["default"])(_useQueryParams, 2),
      rawQuery = _useQueryParams2[0].rawQuery,
      setQuery = _useQueryParams2[1];

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var title = formatMessage({
    id: (0, _utils.getTrad)('plugin.name'),
    defaultMessage: 'Media Library'
  });
  (0, _react.useEffect)(function () {
    if (!rawQuery) {
      setQuery({
        sort: 'updatedAt:DESC',
        page: 1,
        pageSize: 10
      });
    }
  }, [rawQuery, setQuery]);

  if (rawQuery) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, {
      title: title
    }), /*#__PURE__*/_react["default"].createElement(_MediaLibrary.MediaLibrary, null));
  }

  return null;
};

var _default = App;
exports["default"] = _default;

/***/ })

}]);