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
// import { siteUsers } from '@pnp/sp/site-users/web'
import { graph } from "@pnp/graph";
// import * as moment from 'moment';
import { Logger } from "@pnp/logging";
debugger;
var spfxContext = null;
var uniqueDeptList = [], myRequestedEachPlateData = [];
var SPDepartmentalService = /** @class */ (function () {
    function SPDepartmentalService(context) {
        this.context = context;
        this.webContext = null;
        this.webUrl = null;
        this.loggedInUserId = null;
        this.loggedInUserEmail = "";
        this.loggedInUserName = "";
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
    SPDepartmentalService.prototype.onInit = function () {
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
    /* Raise a request related Calls  */
    SPDepartmentalService.prototype.loadDepartmentOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var departmentOptions, web, result, tempArr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        departmentOptions = [];
                        web = Web(this.webUrl);
                        return [4 /*yield*/, web.lists.getByTitle('EmpReq').items.select("*", "DepartmentManager/Title").expand("DepartmentManager").orderBy("ID", false).get()];
                    case 1:
                        result = _a.sent();
                        console.log("result = " + result);
                        tempArr = result.reduce(function (acc, current) {
                            var x = acc.find(function (item) { return item.Department === current.Department; });
                            if (!x) {
                                return acc.concat([current]);
                            }
                            else {
                                return acc;
                            }
                        }, []);
                        departmentOptions = tempArr.map(function (r, index) {
                            return {
                                key: index,
                                text: r.Department
                            };
                        });
                        return [4 /*yield*/, Promise.resolve(departmentOptions)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SPDepartmentalService.prototype.loadDepartmentDetailForPost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var departmentFAQ_deptList, web, result, tempArr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        departmentFAQ_deptList = Array();
                        web = Web(this.webUrl);
                        return [4 /*yield*/, web.lists.getByTitle('EmpReq').items.select("*", "DepartmentManager/Title").expand("DepartmentManager").orderBy("ID", false).get()];
                    case 1:
                        result = _a.sent();
                        console.log("result = " + result);
                        tempArr = result.reduce(function (acc, current) {
                            var x = acc.find(function (item) { return item.Department === current.Department; });
                            if (!x) {
                                return acc.concat([current]);
                            }
                            else {
                                return acc;
                            }
                        }, []);
                        departmentFAQ_deptList = tempArr.map(function (r, index) {
                            return {
                                deptName: r.Department,
                                deptGroup: r.DepartmentGroup,
                                deptManager: r.DepartmentManagerId,
                                dispatcherName: r.AssignedTo
                            };
                        });
                        return [4 /*yield*/, Promise.resolve(departmentFAQ_deptList)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SPDepartmentalService.prototype.deptCategorySelect = function (selectedDept) {
        return __awaiter(this, void 0, void 0, function () {
            var result, getOptionsBySelectedDept, i, departmentCategoryOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web.lists.getByTitle('DeptCateg').items.select("*", "Department/Title").expand("Department").get()];
                    case 1:
                        result = _a.sent();
                        getOptionsBySelectedDept = [];
                        for (i = 0; i < result.length; ++i) {
                            if (result[i].Department.Title === selectedDept) {
                                getOptionsBySelectedDept.push(result[i]);
                                break;
                            }
                        }
                        departmentCategoryOptions = getOptionsBySelectedDept.map(function (r, index) {
                            return {
                                key: index,
                                text: r.Title,
                            };
                        });
                        return [4 /*yield*/, Promise.resolve(departmentCategoryOptions)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SPDepartmentalService.prototype.loadSelectedDispatcherGroupPeople = function (selectedDept) {
        return __awaiter(this, void 0, void 0, function () {
            var result, dispatcherGroupName, res, groupUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web.lists.getByTitle('EmpReq').items.select("*", "Author/Title", "AttachmentFiles").expand("Author", "AttachmentFiles").filter("Department eq '" + selectedDept + "' and Status eq 'Pending'").orderBy("ID", false).get()];
                    case 1:
                        result = _a.sent();
                        dispatcherGroupName = '';
                        if (!(result.length > 0)) return [3 /*break*/, 3];
                        dispatcherGroupName = result[0].AssignedTo;
                        return [4 /*yield*/, this.web.siteGroups.getByName(dispatcherGroupName).users()];
                    case 2:
                        res = _a.sent();
                        groupUser = res.map(function (r, index) {
                            return {
                                eMail: r.Email,
                                name: r.Title
                            };
                        });
                        return [2 /*return*/, Promise.resolve(groupUser)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SPDepartmentalService.prototype.loadEmployeeRequest = function (issueDescription, selectedDept, selectedDeptCategory, fileAddition, deptListCoreInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedDeptGroup, selectedDeptManager, selectedDispatcherName, selectedTitle, currentUserName, currentUserEmail, selectedFileAddOn, i, textbody, EmailSubject, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedTitle = selectedDeptCategory + ' Request';
                        currentUserName = this.loggedInUserName;
                        currentUserEmail = this.loggedInUserEmail;
                        selectedFileAddOn = fileAddition;
                        for (i = 0; i < deptListCoreInfo.length; ++i) {
                            if (deptListCoreInfo[i].deptName === selectedDept) {
                                selectedDeptGroup = deptListCoreInfo[i].deptGroup;
                                selectedDispatcherName = deptListCoreInfo[i].dispatcherName;
                                selectedDeptManager = deptListCoreInfo[i].deptManager;
                            }
                        }
                        textbody = "<h3>The request details are as below:</h3><br><p>Raised by: \" " + this.loggedInUserName + " \" <br>Category: \" " + selectedDeptCategory + " \" <br>Description: \" " + issueDescription + " \"<br><br>Thank you</p>";
                        console.log('textbody = ' + textbody);
                        EmailSubject = " " + this.loggedInUserName + " raised " + selectedDeptCategory + " request";
                        console.log('EmailSubject = ' + EmailSubject);
                        if (!(issueDescription !== "" && selectedDept !== "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.web.lists.getByTitle("EmpReq").items.add({
                                Title: selectedTitle,
                                Description: issueDescription,
                                Category: selectedDeptCategory,
                                Department: selectedDept,
                                Status: 'Pending',
                                AssignedTo: selectedDispatcherName,
                                DepartmentManagerId: selectedDeptManager,
                                DepartmentGroup: selectedDeptGroup
                            }).then(function (responseJSON) {
                                _this.addMultipleAttachmentLoop(responseJSON, fileAddition);
                                //  this.notify();
                                //  this._messaging(this.state.raisedDispatcherGroupMembersEmailIds);      
                            })];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(1)];
                }
            });
        });
    };
    SPDepartmentalService.prototype.addMultipleAttachmentLoop = function (responseJSON, fileAddition) {
        return __awaiter(this, void 0, void 0, function () {
            var fileInfos, promiseUploadAllRequesterAttachments, file, i, fileName;
            var _this = this;
            return __generator(this, function (_a) {
                fileInfos = [];
                if (fileAddition != null) {
                    promiseUploadAllRequesterAttachments = [];
                    file = fileAddition;
                    for (i = 0; i < file.length; ++i) {
                        fileName = "REQ_" + file[i].name;
                        fileInfos.push({
                            name: fileName,
                            content: "Requester attachment"
                        });
                    }
                }
                Promise.all(fileInfos)
                    .then(function (res) {
                    var list = _this.web.lists.getByTitle("EmpReq").items.getById(responseJSON.data.ID).attachmentFiles.addMultiple(res);
                });
                return [2 /*return*/];
            });
        });
    };
    // Assigned Issues Section Calls 
    /*
       get the array containing the InProcess and Closed count for Assigned Tickets
    */
    SPDepartmentalService.prototype.getAssignedViewCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myRequestedDepartmentsCount, web, result, tempArr, i, data_1, promiseInProcessRequestCount, promiseClosedRequestsCount, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myRequestedDepartmentsCount = [];
                        web = Web(this.webUrl);
                        return [4 /*yield*/, web.lists.getByTitle('EmpReq').items.select('*').filter("ReAssignToId eq " + this.loggedInUserId).get()];
                    case 1:
                        result = _a.sent();
                        console.log('result = ' + result);
                        if (!(result.length > 0)) return [3 /*break*/, 5];
                        tempArr = [];
                        for (i = 0; i < result.length; ++i) {
                            tempArr.push(result[i].Department);
                        }
                        uniqueDeptList = tempArr.filter(function (elem, index) {
                            return tempArr.indexOf(elem) === index;
                        });
                        if (!(uniqueDeptList.length > 0)) return [3 /*break*/, 5];
                        uniqueDeptList.map(function (r, index) {
                            myRequestedDepartmentsCount.push(data_1 = {
                                DepartmentName: r,
                                InProcess: 0,
                                Closed: 0,
                            });
                        });
                        promiseInProcessRequestCount = [];
                        promiseClosedRequestsCount = [];
                        for (i = 0; i < uniqueDeptList.length; ++i) {
                            promiseInProcessRequestCount.push(this.getRequestedCountByPara(web, myRequestedDepartmentsCount[i].DepartmentName, 'In Process', this.loggedInUserId));
                            promiseClosedRequestsCount.push(this.getRequestedCountByPara(web, myRequestedDepartmentsCount[i].DepartmentName, 'Completed', this.loggedInUserId));
                        }
                        return [4 /*yield*/, Promise.all(promiseInProcessRequestCount)
                                .then(function (result) {
                                result.map(function (r, index) {
                                    myRequestedDepartmentsCount[index].InProcess = r;
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Promise.all(promiseClosedRequestsCount)
                                .then(function (result) {
                                result.map(function (r, index) {
                                    myRequestedDepartmentsCount[index].Closed = r;
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, Promise.resolve(myRequestedDepartmentsCount)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //Todo (Dipal) (Change the method from item to count)
    SPDepartmentalService.prototype.getRequestedCountByPara = function (web, deptName, status, currentUserId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web.lists.getByTitle('EmpReq').items.select("*").filter("ReAssignToId eq " + currentUserId + " and Status eq '" + status + "' and Department eq '" + deptName + "'").get()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.length];
                }
            });
        });
    };
    // .filter(`Status eq '${inProcess}' and ReAssignToId eq ${this.loggedInUserId} and Department eq '${deptName}`)
    SPDepartmentalService.prototype.loadAssignToListInfo = function (inProcess, deptName) {
        return __awaiter(this, void 0, void 0, function () {
            var ticketList, web, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ticketList = [];
                        web = Web(this.webUrl);
                        return [4 /*yield*/, web.lists.getByTitle('EmpReq').items.select("*", "Author/Title", "ReAssignTo/Title", "AttachmentFiles").expand("Author", "ReAssignTo", "AttachmentFiles").filter("Status eq '" + inProcess + "' and ReAssignToId eq " + this.loggedInUserId + " and Department eq '" + deptName + "'").orderBy("ID", false).get()];
                    case 1:
                        result = _a.sent();
                        console.log('result = ' + result.length);
                        ticketList = result.map(function (r, index) {
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
                                comment: r.Comment,
                                authorId: r.AuthorId,
                                attachmentFileName: r.AttachmentFiles.map(function (r, i) {
                                    return {
                                        FileName: r.FileName,
                                        ServerRelativeUrl: r.ServerRelativeUrl
                                    };
                                }),
                                getAttachmentData: r.AttachmentFiles.length ? r.AttachmentFiles[0].ServerRelativeUrl : '',
                            };
                        });
                        return [2 /*return*/, Promise.resolve(ticketList)];
                }
            });
        });
    };
    SPDepartmentalService.prototype.loadDepartmentOptionsByGroupName = function (groupName) {
        return __awaiter(this, void 0, void 0, function () {
            var web, result, groupUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web = Web(this.webUrl);
                        return [4 /*yield*/, web.siteGroups.getByName("" + groupName).users()];
                    case 1:
                        result = _a.sent();
                        console.log('result = ' + result);
                        groupUser = result.map(function (r, index) {
                            return {
                                key: r.Id,
                                text: r.Title,
                            };
                        });
                        return [2 /*return*/, Promise.resolve(groupUser)];
                }
            });
        });
    };
    SPDepartmentalService.prototype.getAddReAssignedToData = function (newReAssignedToUser, idRequest, commentData, ticketNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var newItem, web, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newItem = {
                            Status: "In Process",
                            ReAssignToId: newReAssignedToUser.key,
                            Comment: commentData
                        };
                        web = Web(this.webUrl);
                        return [4 /*yield*/, web.lists.getByTitle('EmpReq').items.getById(idRequest).update(newItem)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    SPDepartmentalService.prototype.emailIdMethod = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var web, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web = Web(this.webUrl);
                        return [4 /*yield*/, web.getUserById(userId).get()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, Promise.resolve(result.Email)];
                }
            });
        });
    };
    SPDepartmentalService.prototype.loadCompletedWithStatusUpdate = function (idRequest, commentData) {
        return __awaiter(this, void 0, void 0, function () {
            var newItem, web, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newItem = {
                            Status: "Completed",
                            Comment: commentData
                        };
                        web = Web(this.webUrl);
                        return [4 /*yield*/, web.lists.getByTitle('EmpReq').items.getById(idRequest).update(newItem)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return SPDepartmentalService;
}()); //End of Main function
export default SPDepartmentalService;
//# sourceMappingURL=SPDepartmentalService.js.map