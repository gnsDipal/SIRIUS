var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { sp, Web } from '@pnp/sp/presets/all';
import { graph } from "@pnp/graph";
import { Logger } from "@pnp/logging";
var spfxContext = null;
var uniqueDeptList = [], myRequestedEachPlateData = [];
var SPManagerService = /** @class */ (function () {
    function SPManagerService(context) {
        this.context = context;
        this.webContext = null;
        this.webUrl = null;
        this.loggedInUserId = null;
        this.web = null;
        // Setup Context to PnPjs and MSGraph
        this.webContext = context;
        sp.setup({
            spfxContext: context
        });
        graph.setup({
            spfxContext: context
        });
        // Init
        this.onInit();
    }
    SPManagerService.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                Logger.write("SPDepartmentalService init()", 1 /* Info */);
                this.webUrl = this.webContext.pageContext.web.absoluteUrl;
                this.loggedInUserId = this.webContext.pageContext.legacyPageContext["userId"];
                this.web = Web(this.webUrl);
                return [2 /*return*/];
            });
        });
    };
    /* My Requested Issues Call */
    SPManagerService.prototype.loadManagerCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myRequestedDepartmentsCount_1, result, tempArr, i, data_1, promiseOpenRequestCount, promiseInProcessRequestCount, promiseClosedRequestsCount, i, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        myRequestedDepartmentsCount_1 = [];
                        uniqueDeptList = [];
                        return [4 /*yield*/, this.web.lists.getByTitle('EmpReq').items.select('*', 'DepartmentManager/Title', 'AttachmentFiles').expand('DepartmentManager', 'AttachmentFiles').filter("DepartmentManagerId eq " + this.loggedInUserId).orderBy("ID", false).get()];
                    case 1:
                        result = _a.sent();
                        if (!(result.length > 0)) return [3 /*break*/, 6];
                        tempArr = [];
                        for (i = 0; i < result.length; ++i) {
                            tempArr.push(result[i].Department);
                        }
                        uniqueDeptList = tempArr.filter(function (elem, index) {
                            return tempArr.indexOf(elem) === index;
                        });
                        if (!(uniqueDeptList.length > 0)) return [3 /*break*/, 6];
                        uniqueDeptList.map(function (r, index) {
                            myRequestedDepartmentsCount_1.push(data_1 = {
                                DepartmentName: r,
                                Open: 0,
                                InProcess: 0,
                                Closed: 0,
                            });
                        });
                        promiseOpenRequestCount = [];
                        promiseInProcessRequestCount = [];
                        promiseClosedRequestsCount = [];
                        for (i = 0; i < uniqueDeptList.length; ++i) {
                            promiseOpenRequestCount.push(this.getRequestedCountByPara(this.web, myRequestedDepartmentsCount_1[i].DepartmentName, 'Pending', this.loggedInUserId));
                            promiseInProcessRequestCount.push(this.getRequestedCountByPara(this.web, myRequestedDepartmentsCount_1[i].DepartmentName, 'In Process', this.loggedInUserId));
                            promiseClosedRequestsCount.push(this.getRequestedCountByPara(this.web, myRequestedDepartmentsCount_1[i].DepartmentName, 'Completed', this.loggedInUserId));
                        }
                        return [4 /*yield*/, Promise.all(promiseOpenRequestCount)
                                .then(function (result) {
                                result.map(function (r, index) {
                                    myRequestedDepartmentsCount_1[index].Open = r;
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(promiseInProcessRequestCount)
                                .then(function (result) {
                                result.map(function (r, index) {
                                    myRequestedDepartmentsCount_1[index].InProcess = r;
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(promiseClosedRequestsCount)
                                .then(function (result) {
                                result.map(function (r, index) {
                                    myRequestedDepartmentsCount_1[index].Closed = r;
                                });
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, Promise.resolve(myRequestedDepartmentsCount_1)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        Promise.reject(error_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    //Todo (Dipal) (Change the method from item to count)
    SPManagerService.prototype.getRequestedCountByPara = function (web, deptName, status, currentUserId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web.lists.getByTitle('EmpReq').items.select("*").filter("Author eq " + currentUserId + " and Status eq '" + status + "' and Department eq '" + deptName + "'").get()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.length];
                }
            });
        });
    };
    SPManagerService.prototype.loadDeptListInfo = function (selectedStatus, dept) {
        return __awaiter(this, void 0, void 0, function () {
            var myReqData, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        myReqData = [];
                        return [4 /*yield*/, this.web.lists.getByTitle('EmpReq').items.select("*", "Author/Title", "ReAssignTo/Title", "AttachmentFiles").expand("Author", "ReAssignTo", "AttachmentFiles").filter("Status eq '" + selectedStatus + "' and Author eq " + this.loggedInUserId + " and Department eq '" + dept + "'").orderBy("ID", false).get()];
                    case 1:
                        result = _a.sent();
                        myReqData = result.map(function (r) {
                            return {
                                ticketNumber: "INC_" + r.Department + "_000" + r.ID,
                                supportDeptName: r.DepartmentGroup,
                                raisedBy: r.Author.Title,
                                issueDate: r.Created,
                                description: r.Description,
                                category: r.Category,
                                department: r.Department,
                                status: r.Status,
                                dispatcherDeptName: r.AssignedTo,
                                reAssignedTo: r.ReAssignTo ? r.ReAssignTo : '',
                                dataId: r.ID,
                                comment: r.Comment ? r.Comment : '',
                                attachmentFileName: r.AttachmentFiles.map(function (r, i) {
                                    return {
                                        FileName: r.FileName,
                                        ServerRelativeUrl: r.ServerRelativeUrl
                                    };
                                }),
                                getAttachmentData: r.AttachmentFiles.length ? r.AttachmentFiles[0].ServerRelativeUrl : ''
                            };
                        });
                        return [2 /*return*/, Promise.resolve(myReqData)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return SPManagerService;
}()); //End of Main class
export default SPManagerService;
//# sourceMappingURL=SPManagerService.js.map