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
import { Web } from '@pnp/sp/presets/all';
// import * as moment from 'moment';
import { Logger } from "@pnp/logging";
debugger;
var spfxContext = null;
var SPDispatcherService = /** @class */ (function () {
    function SPDispatcherService(context) {
        this.context = context;
        this.webContext = null;
        this.webUrl = null;
        this.loggedInUserId = null;
        this.loggedInUserEmail = "";
        this.loggedInUserName = "";
        this.web = null;
        this.webContext = context;
        this.onInit();
    }
    SPDispatcherService.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                Logger.write("SPDepartmentalService init()", 1 /* Info */);
                this.webUrl = this.webContext.pageContext.web.absoluteUrl;
                this.loggedInUserId = this.webContext.pageContext.legacyPageContext["userId"];
                this.loggedInUserEmail = this.webContext.pageContext.user.email;
                this.loggedInUserName = this.webContext.pageContext.user.displayName;
                this.web = Web(this.webUrl);
                return [2 /*return*/];
            });
        });
    };
    /* DispatcherTab related calls */
    SPDispatcherService.prototype.getDepartmentsDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, loggedInUserDispGrps, SPGroupList, dispatcherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web.lists.getByTitle('Dept').items.select("*", "GroupName/Title", "DepartmentGroup/Title", "Manager/Title").expand("GroupName", "DepartmentGroup", "Manager").orderBy("Title", false).get()];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.web.currentUser.groups()];
                    case 2:
                        loggedInUserDispGrps = _a.sent();
                        return [4 /*yield*/, this.getLoggedInUserIdSPGroupsSuccess(loggedInUserDispGrps, result)];
                    case 3:
                        SPGroupList = _a.sent();
                        return [4 /*yield*/, this.loadAssignedTask(SPGroupList)];
                    case 4:
                        dispatcherData = _a.sent();
                        return [2 /*return*/, Promise.resolve(dispatcherData)];
                }
            });
        });
    };
    SPDispatcherService.prototype.getLoggedInUserIdSPGroups = function (departmentDetailsArray) {
        return __awaiter(this, void 0, void 0, function () {
            var loggedInUserDispGrps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web.currentUser.groups()];
                    case 1:
                        loggedInUserDispGrps = _a.sent();
                        return [4 /*yield*/, this.getLoggedInUserIdSPGroupsSuccess(loggedInUserDispGrps, departmentDetailsArray)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SPDispatcherService.prototype.getLoggedInUserIdSPGroupsSuccess = function (res, departmentDetailsArray) {
        return __awaiter(this, void 0, void 0, function () {
            var SPGroupList, obj, currentLoggedInUserDispatcherGroups, test1, loggedInTemp, dispatcherTemp;
            return __generator(this, function (_a) {
                SPGroupList = new Array();
                obj = res, currentLoggedInUserDispatcherGroups = 0;
                test1 = 0;
                for (loggedInTemp = 0; loggedInTemp < obj.length; loggedInTemp++) {
                    obj[loggedInTemp].Added = false;
                    for (dispatcherTemp = 0; dispatcherTemp < departmentDetailsArray.length; dispatcherTemp++) {
                        if (obj[loggedInTemp].Title == departmentDetailsArray[dispatcherTemp].GroupName.Title && obj[loggedInTemp].Added == false) {
                            obj[loggedInTemp].Added = true;
                            SPGroupList[currentLoggedInUserDispatcherGroups] = new Object();
                            SPGroupList[currentLoggedInUserDispatcherGroups].groupname = obj[loggedInTemp].Title;
                            currentLoggedInUserDispatcherGroups++;
                        }
                    }
                }
                if (SPGroupList.length == 0) {
                    console.log("User not in any dispatch group");
                }
                return [2 /*return*/, (SPGroupList)];
            });
        });
    };
    SPDispatcherService.prototype.loadAssignedTask = function (SPGroupList) {
        return __awaiter(this, void 0, void 0, function () {
            var deptData, i, deptDataCount, depCount, result, count, deptDispatchData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deptData = [];
                        i = 0, deptDataCount = 0;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < SPGroupList.length)) return [3 /*break*/, 4];
                        depCount = SPGroupList.length;
                        return [4 /*yield*/, this.web.lists.getByTitle('EmpReq').items.select("*", "Author/Title").expand("Author").filter("Status eq 'Pending' and AssignedTo eq '" + SPGroupList[i].groupname + "'").orderBy("ID", false).get()];
                    case 2:
                        result = _a.sent();
                        if (result.length > 0) {
                            count = 0;
                            deptDispatchData = result.map(function (r, index) {
                                count = count + 1;
                                return {
                                    deptName: r.Department,
                                    dispatcherName: r.AssignedTo,
                                    thisCount: count
                                };
                            });
                            deptData.push({ deptName: deptDispatchData[0].deptName, thisCount: count });
                            deptDataCount = deptDataCount + 1;
                        }
                        _a.label = 3;
                    case 3:
                        ++i;
                        return [3 /*break*/, 1];
                    case 4:
                        if (deptDataCount === SPGroupList.length && deptData.length > 0) {
                            return [2 /*return*/, deptData];
                        }
                        else if (deptDataCount === SPGroupList.length && deptData.length === 0) {
                            return [2 /*return*/, deptData];
                        }
                        else {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /* DispatcherTicketView related calls */
    SPDispatcherService.prototype.loadDispatcherListInfo = function (passedDeptName) {
        return __awaiter(this, void 0, void 0, function () {
            var result, dispatcherDetails, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.web.lists.getByTitle('EmpReq').items.select("*", "Author/Title", "AttachmentFiles").expand("Author", "AttachmentFiles").filter("Department eq '" + passedDeptName + "' and Status eq 'Pending'").orderBy("ID", false).get()];
                    case 1:
                        result = _a.sent();
                        dispatcherDetails = result.map(function (r, index) {
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
                                reAssignedTo: r.ReAssignTo,
                                dataId: r.ID,
                                attachmentFileName: r.AttachmentFiles.map(function (r, i) {
                                    return {
                                        FileName: r.FileName,
                                        ServerRelativeUrl: r.ServerRelativeUrl
                                    };
                                }),
                                getAttachmentData: r.AttachmentFiles.length ? r.AttachmentFiles[0].ServerRelativeUrl : '',
                                requesterAttachmentCheck: r.AttachmentFiles.length
                            };
                        });
                        return [2 /*return*/, Promise.resolve(dispatcherDetails)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SPDispatcherService.prototype.loadDepartmentOptionsByGroupName = function (groupName) {
        return __awaiter(this, void 0, void 0, function () {
            var result, groupUser, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.web.siteGroups.getByName(groupName).users()];
                    case 1:
                        result = _a.sent();
                        groupUser = result.map(function (r, index) {
                            return {
                                key: r.Id,
                                text: r.Title,
                            };
                        });
                        return [2 /*return*/, Promise.resolve(groupUser)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SPDispatcherService.prototype.loadMultipleDispatcherAttachmentLoop = function (requestedId, dispatcherFileAddition) {
        return __awaiter(this, void 0, void 0, function () {
            var list, fileInfos, file, i, fileName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = null;
                        fileInfos = [];
                        if (!(dispatcherFileAddition != null)) return [3 /*break*/, 3];
                        file = dispatcherFileAddition;
                        for (i = 0; i < file.length; ++i) {
                            fileName = "DISP_" + file[i].name;
                            fileInfos.push({
                                name: fileName,
                                content: "Dispatcher attachment"
                            });
                        }
                        return [4 /*yield*/, Promise.all(fileInfos)
                                .then(function (res) {
                                list = _this.web.lists.getByTitle("EmpReq").items.getById(requestedId).attachmentFiles.addMultiple(res);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Promise.resolve(list)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // newReAssignedToUser
    SPDispatcherService.prototype.loadAddingReAssignedToData = function (newUser, idRequest, raisedBy) {
        return __awaiter(this, void 0, void 0, function () {
            var newItem, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newItem = {
                            Status: "In Process",
                            ReAssignToId: newUser.key,
                        };
                        return [4 /*yield*/, this.web.lists.getByTitle('EmpReq').items.getById(idRequest).update(newItem)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return SPDispatcherService;
}()); //End of Main class
export default SPDispatcherService;
//# sourceMappingURL=SPDispatcherService.js.map