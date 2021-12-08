var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneDropdown, PropertyPaneLink, PropertyPaneLabel } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import DepartmentalRequest from './components/DepartmentalRequest/DepartmentalRequest';
// import { IDepartmentalRequestProps } from './components/DepartmentalRequest/IDepartmentalRequestProps';
import { sp } from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views";
import { DateTimeFieldFormatType, UrlFieldFormatType, FieldUserSelectionMode, FieldTypes } from '@pnp/sp/fields/types';
import AppListener from '../../services/appListener';
import 'react-toastify/dist/ReactToastify.css';
// import { Web } from 'sp-pnp-js';
import Main from './components/Main/Main';
// debugger;
var departmentListId;
var DepartmentalRequestWebPart = /** @class */ (function (_super) {
    __extends(DepartmentalRequestWebPart, _super);
    function DepartmentalRequestWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appListner = new AppListener();
        _this.createListDepartment = function () { return __awaiter(_this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure("Dept", "Dept details list", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 3];
                        alert("My Dept List is created!");
                        batch = sp.web.createBatch();
                        listEnsureResult.list.fields.inBatch(batch).addUser("Manager", FieldUserSelectionMode.PeopleAndGroups);
                        listEnsureResult.list.fields.inBatch(batch).addUser("GroupName", FieldUserSelectionMode.PeopleAndGroups);
                        listEnsureResult.list.fields.inBatch(batch).addUser("DepartmentGroup", FieldUserSelectionMode.PeopleAndGroups);
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 4:
                        r = _a.sent();
                        console.log(r.Id);
                        return [4 /*yield*/, r.Id];
                    case 5:
                        departmentListId = _a.sent();
                        if (departmentListId) {
                            this.createListDepartmentCategory();
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.createListDepartmentCategory = function () { return __awaiter(_this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure("DeptCateg", "Dept details list", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 3];
                        alert("My DeptCateg List is created!");
                        batch = sp.web.createBatch();
                        listEnsureResult.list.fields.inBatch(batch).addLookup("Department", departmentListId, "Title");
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 4:
                        r = _a.sent();
                        console.log(r.Id);
                        if (r.Id) {
                            this.createEmpReq();
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.createEmpReq = function () { return __awaiter(_this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure("EmpReq", "EmpReq details list", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 3];
                        alert("My EmpReq List is created!");
                        batch = sp.web.createBatch();
                        listEnsureResult.list.fields.inBatch(batch).addMultilineText("Description", 6, true);
                        listEnsureResult.list.fields.inBatch(batch).addText("Category");
                        listEnsureResult.list.fields.inBatch(batch).addText("Department");
                        listEnsureResult.list.fields.inBatch(batch).addText("AssignedTo");
                        listEnsureResult.list.fields.inBatch(batch).addUser("ReAssignTo", FieldUserSelectionMode.PeopleOnly, { Group: "" });
                        listEnsureResult.list.fields.inBatch(batch).addText("Status");
                        listEnsureResult.list.fields.inBatch(batch).addMultilineText("Comment", 6, true);
                        listEnsureResult.list.fields.inBatch(batch).addUser("DepartmentManager", FieldUserSelectionMode.PeopleOnly);
                        listEnsureResult.list.fields.inBatch(batch).addNumber("ArchivedTimeSpan");
                        listEnsureResult.list.fields.inBatch(batch).addUser("Author", FieldUserSelectionMode.PeopleOnly);
                        listEnsureResult.list.fields.inBatch(batch).addCalculated("ArchiveDate", "=Created+ArchivedTimeSpan", DateTimeFieldFormatType.DateTime, FieldTypes.DateTime);
                        listEnsureResult.list.fields.inBatch(batch).addText("DepartmentGroup");
                        // listEnsureResult.list.fields.addCalculated("Dispatch_x0020_Group", "=IF(Status='Pending',AssignedTo,'')", DateTimeFieldFormatType.DateOnly, FieldTypes.Text);
                        // listEnsureResult.list.fields.addNumber
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        // listEnsureResult.list.fields.addCalculated("Dispatch_x0020_Group", "=IF(Status='Pending',AssignedTo,'')", DateTimeFieldFormatType.DateOnly, FieldTypes.Text);
                        // listEnsureResult.list.fields.addNumber
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 4:
                        r = _a.sent();
                        console.log(r.Id);
                        if (r.Id) {
                            this.createArchiveSettings();
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.createArchiveSettings = function () { return __awaiter(_this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure("ArchiveSett", "ArchiveSett details list", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 3];
                        alert("My ArchiveSett List is created!");
                        batch = sp.web.createBatch();
                        listEnsureResult.list.fields.inBatch(batch).addNumber("NumberOfDays");
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 4:
                        r = _a.sent();
                        console.log(r.Id);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.createListEmail = function () { return __awaiter(_this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure("EmailSender", "Email sending list", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 3];
                        alert("My Email List is created!");
                        batch = sp.web.createBatch();
                        listEnsureResult.list.fields.inBatch(batch).addText("EmailSubject");
                        listEnsureResult.list.fields.inBatch(batch).addMultilineText("EmailBody", 3, true);
                        listEnsureResult.list.fields.inBatch(batch).addText("EmailTo");
                        listEnsureResult.list.fields.inBatch(batch).addText("EmailCCTo");
                        listEnsureResult.list.fields.inBatch(batch).addText("EmailFrom");
                        listEnsureResult.list.fields.inBatch(batch).addUrl("ActivityEmail", UrlFieldFormatType.Image);
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        alert("My Email List is already existed!");
                        _a.label = 4;
                    case 4: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 5:
                        r = _a.sent();
                        console.log(r.Id);
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    DepartmentalRequestWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onInit.call(this)];
                    case 1:
                        _a.sent();
                        sp.setup(this.context);
                        return [4 /*yield*/, this.appListner.setAppLogger()];
                    case 2:
                        _a.sent();
                        // this.appListner.setAppLogger();
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    DepartmentalRequestWebPart.prototype.render = function () {
        var element = React.createElement(Main, {
            webPartContext: this.context,
        });
        this.createListsUsingPNP();
        // this.appListner.setAppLogger();
        ReactDom.render(element, this.domElement);
    };
    DepartmentalRequestWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(DepartmentalRequestWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    DepartmentalRequestWebPart.prototype.createListsUsingPNP = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.createListDepartment();
                return [2 /*return*/];
            });
        });
    };
    DepartmentalRequestWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        // description: strings.PropertyPaneDescription
                        description: "Departmental Request admin setup steps:"
                    },
                    groups: [
                        {
                            // groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneLabel('label', {
                                    text: "Create new respective Departmental \"Dispatcher groups and Support groups from the link below. \n \n                  Add users for each groups respectively\"", required: true
                                }),
                                PropertyPaneLink('', {
                                    href: this.context.pageContext.web.absoluteUrl + "/_layouts/15/groups.aspx",
                                    text: 'Create groups',
                                    target: '_blank',
                                }),
                                PropertyPaneLabel('label', {
                                    text: "Add the Departments, Managers, Dispatcher and Support group names in the list through the link below.\"", required: true
                                }),
                                PropertyPaneLink('', {
                                    href: this.context.pageContext.web.absoluteUrl + "/Lists/Dept/AllItems.aspx",
                                    text: 'Department List',
                                    target: '_blank',
                                }),
                                PropertyPaneLabel('label', {
                                    text: "Add the Departmental categories along with their corresponding Department's names through the link below.\"", required: true
                                }),
                                PropertyPaneLink('', {
                                    href: this.context.pageContext.web.absoluteUrl + "/Lists/DeptCateg/AllItems.aspx",
                                    text: 'Departmental Category List',
                                    target: '_blank',
                                }),
                                PropertyPaneDropdown('emailType', {
                                    label: "Select the email facility", options: [
                                        {
                                            key: 0,
                                            text: "Normal EMail",
                                        },
                                        {
                                            key: 1,
                                            text: "Power Automate"
                                        }
                                    ],
                                    selectedKey: 0
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return DepartmentalRequestWebPart;
}(BaseClientSideWebPart));
export default DepartmentalRequestWebPart;
// https://gns11.sharepoint.com/sites/SiriusTeams/Lists/Dept/AllItems.aspx
//# sourceMappingURL=DepartmentalRequestWebPart.js.map