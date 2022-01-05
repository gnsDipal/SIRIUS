(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~odsp-datasources~sp-pages-panels~~65b5f32e"],{

/***/ "zMwE":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataBatchOperationHelper.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: DataBatchOperationHelper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBatchOperationHelper", function() { return DataBatchOperationHelper; });
/* harmony import */ var _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/guid/Guid */ "vo05");
/* harmony import */ var _utilities_url_ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/url/ApiUrlHelperBasic */ "5qGQ");
/* harmony import */ var _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/uri/SimpleUri */ "mbD+");
// OneDrive:IgnoreCodeCoverage



// TODO: unwrap below functions to help with bundling.
var DataBatchOperationHelper = /** @class */ (function () {
    function DataBatchOperationHelper() {
    }
    /**
     * Returns the REST API Url for the batch operation.
     * @param {string} webUrl The url of the web
     */
    DataBatchOperationHelper.getBatchOperationUrl = function (webUrl, listFullUrl) {
        var apiUrlHelper = new _utilities_url_ApiUrlHelperBasic__WEBPACK_IMPORTED_MODULE_1__["ApiUrlHelperBasic"]({
            webAbsoluteUrl: !webUrl && listFullUrl ? new _ms_odsp_utilities_lib_uri_SimpleUri__WEBPACK_IMPORTED_MODULE_2__["SimpleUri"](listFullUrl).authority : webUrl
        });
        return apiUrlHelper.build().segment('$batch').toString();
    };
    /**
     * August 2017 - This code moved from ListViewDataBatchOperationHelper in odsp-next
     * @todo - We should add interfaces here for compile time type checking.
     */
    DataBatchOperationHelper.processErrorResponse = function (responseFromServer, itemId) {
        var responseObject = {
            id: itemId
        };
        responseFromServer = responseFromServer.error ? responseFromServer.error : responseFromServer;
        if (responseFromServer && responseFromServer.code) {
            var errorInfoArray = responseFromServer.code
                ? responseFromServer.code.split(',')
                : responseFromServer.error.code.split(',');
            var errorCodeNum = Number(errorInfoArray[0]);
            var errorMessage = responseFromServer.message.value;
            responseObject.error = {
                code: errorCodeNum,
                message: errorMessage
            };
        }
        return { items: [responseObject] };
    };
    /**
     * August 2017 - This method was moved from ListViewDataBatchOperationHelper in odsp-next.
     */
    DataBatchOperationHelper.getBatchResponseText = function (responseFromServer) {
        /**
         * This is a more generic version of processBatchResponse which returns an array of unparsed JSON objects, the responses from each call in the batch request in order.
         * The responses are not parsed so that they are returned exactly as they would be were the call not batched for ease of processing.
         */
        var batchResponseSpliter;
        var responseArray;
        var responseTextArray = [];
        var detailResponseArray;
        if (responseFromServer.split('\n').length > 0) {
            batchResponseSpliter = responseFromServer.split('\n')[0];
        }
        if (batchResponseSpliter) {
            responseFromServer = responseFromServer.replace(batchResponseSpliter.trim() + '--', '');
            responseArray = responseFromServer.split(batchResponseSpliter);
            // ignore the first value in the array, which is ""
            for (var i = 1; i < responseArray.length; i++) {
                detailResponseArray = responseArray[i].split('\n\r');
                if (detailResponseArray.length > 2) {
                    responseTextArray.push(detailResponseArray[2]);
                }
            }
        }
        return responseTextArray;
    };
    /**
     * Process the server reponses into objects representing the response data.
     * August 2017 - This method was merged with processBatchResponse from ListViewDataBatchOperationHelper in odsp-next.
     * Code in odsp-next should now be able to call into this common method instead.
     *
     * @param {string} responseFromServer The server response in string format.
     * @returns {IDataBatchOperationResult} The object representing the server response.
     */
    DataBatchOperationHelper.processBatchResponse = function (responseFromServer, oldItems, targetId) {
        /**
         * sample batch response
         * "--batchresponse_0b734b20-ae60-4c70-80e1-f4708387414e
         *  Content-Type: application/http
         *  Content-Transfer-Encoding: binary
         *  -
         *  HTTP/1.1 423 Unknown Status Code
         *  CONTENT-TYPE: application/json;odata=verbose;charset=utf-8
         *  -
         *  {"error":{"code":"-2147018894, Microsoft.SharePoint.SPFileLockException","message":{"lang":"en-US","value":"The file https://msft-my.spoppe.com/personal/yimwu_microsoft_com/Documents/FileUpload/Document.docx is locked for shared use by yimwu@microsoft.com [membership]."}}}
         *  --batchresponse_0b734b20-ae60-4c70-80e1-f4708387414e
         *  Content-Type: application/http
         *  Content-Transfer-Encoding: binary
         *  -
         *  HTTP/1.1 423 Unknown Status Code
         *  CONTENT-TYPE: application/json;odata=verbose;charset=utf-8
         *  -
         *  {"error":{"code":"-2147018894, Microsoft.SharePoint.SPFileLockException","message":{"lang":"en-US","value":"The file https://msft-my.spoppe.com/personal/yimwu_microsoft_com/Documents/FileUpload/Document3.docx is locked for shared use by yimwu@microsoft.com [membership]."}}}
         *  --batchresponse_0b734b20-ae60-4c70-80e1-f4708387414e--
         *  "
         */
        var batchResponseSpliter;
        var allItems = [];
        var responseArray;
        var detailResponseArray;
        var singleResponseFromServer;
        var hasError = false;
        if (responseFromServer.split('\n').length > 0) {
            batchResponseSpliter = responseFromServer.split('\n')[0];
        }
        if (batchResponseSpliter) {
            responseFromServer = responseFromServer.replace(batchResponseSpliter.trim() + '--', '');
            responseArray = responseFromServer.split(batchResponseSpliter);
            // ignore the first value in the array, which is ''
            for (var i = 1; i < responseArray.length; i++) {
                detailResponseArray = responseArray[i].split('\n\r');
                if (detailResponseArray.length > 2) {
                    try {
                        singleResponseFromServer = JSON.parse(detailResponseArray[2]);
                    }
                    catch (e) {
                        singleResponseFromServer = detailResponseArray[2];
                    }
                    var oldItem = oldItems && oldItems[i - 1];
                    var itemResponse = oldItem
                        ? {
                            key: oldItem.key,
                            id: oldItem.id,
                            newId: targetId ? targetId + '/' + oldItem.name : null
                        }
                        : {};
                    singleResponseFromServer = singleResponseFromServer.error
                        ? singleResponseFromServer.error
                        : singleResponseFromServer;
                    if (singleResponseFromServer && singleResponseFromServer.code) {
                        var errorInfoArray = singleResponseFromServer.code
                            ? singleResponseFromServer.code.split(',')
                            : singleResponseFromServer.error.code.split(',');
                        var errorCodeNum = Number(errorInfoArray[0]);
                        var errorMessage = singleResponseFromServer.message.value;
                        itemResponse.error = {
                            code: errorCodeNum,
                            message: errorMessage
                        };
                        hasError = true;
                    }
                    allItems.push(itemResponse);
                }
            }
        }
        return { items: allItems, hasError: hasError };
    };
    /**
     * Get the content of the request for a batch operation.
     * Each batch may contain multiple changesets.
     * @param {string} batchGuid The Guid of the batch operation.
     * @param {Array<Array<string>>} endpointSets Sets of endpoints, each set of endpoints will be included in same changeset.
     * @param {string} requestMethod Method of the request, such as POST, GET, etc.
     * @param {string} postData PostData to be included in each endpoint request.
     */
    DataBatchOperationHelper.getBatchContent = function (batchGuid, endpointSets, requestMethod, postData) {
        // Start a batch request
        var batchContents = [];
        for (var i = 0; i < endpointSets.length; i++) {
            var endpoints = endpointSets[i];
            // create the changeset
            var changeSetId = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_0__["default"].generate();
            var changeSetContents = [];
            for (var j = 0; j < endpoints.length; j++) {
                var endpoint = endpoints[j];
                changeSetContents.push('--changeset_' + changeSetId);
                changeSetContents.push('Content-Type: application/http');
                changeSetContents.push('Content-Transfer-Encoding: binary');
                changeSetContents.push('');
                changeSetContents.push(requestMethod + ' ' + endpoint + ' HTTP/1.1');
                changeSetContents.push(postData);
                changeSetContents.push('');
            }
            // END changeset
            changeSetContents.push('--changeset_' + changeSetId + '--');
            var changeSetBody = changeSetContents.join('\r\n');
            batchContents.push('--batch_' + batchGuid);
            batchContents.push('Content-Type: multipart/mixed; boundary="changeset_' + changeSetId + '"');
            batchContents.push('Content-Length: ' + changeSetBody.length);
            batchContents.push('Content-Transfer-Encoding: binary');
            batchContents.push('');
            batchContents.push(changeSetBody);
            batchContents.push('');
        }
        // generate the body of the batch
        batchContents.push('--batch_' + batchGuid + '--');
        return batchContents.join('\r\n');
    };
    /**
     * Moved from ListViewDataBatchOperationHelper in odsp-next. TODO - Consider merging with getBatchContent above.
     */
    DataBatchOperationHelper.getBatchContentExtended = function (batchGuid, endpoints, requestMethod, postData, perEndpointPostData, acceptType, perEndpointRequestMethod) {
        // create the changeset
        var changeSetId = _ms_odsp_utilities_lib_guid_Guid__WEBPACK_IMPORTED_MODULE_0__["default"].generate();
        var batchContents = [];
        if (perEndpointPostData && perEndpointPostData.length !== endpoints.length) {
            perEndpointPostData = null;
        }
        for (var i = 0; i < endpoints.length; i++) {
            var endpoint = endpoints[i];
            batchContents.push('--changeset_' + changeSetId);
            batchContents.push('Content-Type: application/http');
            batchContents.push('Content-Transfer-Encoding: binary');
            batchContents.push('');
            if (perEndpointRequestMethod) {
                batchContents.push(perEndpointRequestMethod[i] + ' ' + endpoint + ' HTTP/1.1');
            }
            else {
                batchContents.push(requestMethod + ' ' + endpoint + ' HTTP/1.1');
            }
            batchContents.push(postData);
            if (acceptType) {
                batchContents.push(acceptType);
            }
            if (perEndpointPostData) {
                batchContents.push('');
                batchContents.push(perEndpointPostData[i]);
            }
            batchContents.push('');
        }
        // END changeset
        batchContents.push('--changeset_' + changeSetId + '--');
        // generate the body of the batch
        var batchBody = batchContents.join('\r\n');
        // start with a clean array
        batchContents = [];
        batchContents.push('--batch_' + batchGuid);
        batchContents.push('Content-Type: multipart/mixed; boundary="changeset_' + changeSetId + '"');
        batchContents.push('Content-Length: ' + batchBody.length);
        batchContents.push('Content-Transfer-Encoding: binary');
        batchContents.push('');
        batchContents.push(batchBody);
        batchContents.push('');
        batchContents.push('--batch_' + batchGuid + '--');
        return batchContents.join('\r\n');
    };
    DataBatchOperationHelper.defaultBatchRequestPostData = 'Content-Type: application/json;odata=verbose';
    DataBatchOperationHelper.defaultBatchAcceptData = 'accept: application/json;odata=verbose';
    return DataBatchOperationHelper;
}());

/* harmony default export */ __webpack_exports__["default"] = (DataBatchOperationHelper);
//# sourceMappingURL=DataBatchOperationHelper.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~odsp-datasources~sp-pages-panels~~65b5f32e_[locale].js.map