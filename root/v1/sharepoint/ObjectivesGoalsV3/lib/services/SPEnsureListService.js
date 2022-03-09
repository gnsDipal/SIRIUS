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
import { sp } from '@pnp/sp';
import { ChoiceFieldFormatType, FieldUserSelectionMode } from '@pnp/sp/fields/types';
var goalDepartmentOptionsListId;
debugger;
var SPEnsureListService = /** @class */ (function () {
    function SPEnsureListService(context) {
        this.context = context;
        // Setup Context to PnPjs
        sp.setup({
            spfxContext: this.context
        });
        this.onInit();
    }
    SPEnsureListService.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    //create GoalDepartmentOptions list to store the GoalDepartmentOptions related information
    SPEnsureListService.prototype.ensureGoalDepartmentOptionsList = function (GoalDeptOptionsListName) {
        return __awaiter(this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure(GoalDeptOptionsListName, "It's contain Department Options", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 6];
                        alert("My GoalDepartmentOptions List is created!");
                        batch = sp.web.createBatch();
                        // Department, Single Line of Text
                        listEnsureResult.list.fields.inBatch(batch).addText("Department");
                        // Members, Person Or Group
                        listEnsureResult.list.fields.inBatch(batch).addUser("Members", FieldUserSelectionMode.PeopleAndGroups);
                        // DeptAdmin, Person Or Group
                        listEnsureResult.list.fields.inBatch(batch).addUser("DeptAdmin", FieldUserSelectionMode.PeopleOnly, { "AllowMultipleValues": true });
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalDeptOptionsListName).defaultView.fields.add("Department")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalDeptOptionsListName).defaultView.fields.add("Members")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalDeptOptionsListName).defaultView.fields.add("DeptAdmin")];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 7:
                        r = _a.sent();
                        console.log(r.Id);
                        return [4 /*yield*/, r.Id];
                    case 8:
                        goalDepartmentOptionsListId = _a.sent();
                        if (goalDepartmentOptionsListId) {
                            this.ensureGoalDepartmentList(goalDepartmentOptionsListId);
                        }
                        return [2 /*return*/, Promise.resolve(r.Id)];
                }
            });
        });
    };
    //create GoalDepartment list to store the Department related Goals
    SPEnsureListService.prototype.ensureGoalDepartmentList = function (GoalDeptListName) {
        return __awaiter(this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure(GoalDeptListName, "Goals information related Department", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 7];
                        alert("My GoalDepartment List is created!");
                        batch = sp.web.createBatch();
                        // Goal, Multiple lines of text
                        listEnsureResult.list.fields.inBatch(batch).addMultilineText("Goal", 6, false);
                        // Interval, Choice (menu to choose from) Monthly Target, Quarterly Objectives, Yearly Goals
                        listEnsureResult.list.fields.inBatch(batch).addChoice("Interval", ["Monthly Target", "Quarterly Objectives", "Yearly Goals"], ChoiceFieldFormatType.Dropdown);
                        // Department, Lookup
                        listEnsureResult.list.fields.inBatch(batch).addLookup("Department", goalDepartmentOptionsListId, "Title");
                        // StatusPercentage , Number
                        listEnsureResult.list.fields.inBatch(batch).addNumber("StatusPercentage");
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalDeptListName).defaultView.fields.add("Goal")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalDeptListName).defaultView.fields.add("Interval")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalDeptListName).defaultView.fields.add("Department")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalDeptListName).defaultView.fields.add("StatusPercentage")];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 8:
                        r = _a.sent();
                        console.log(r.Id);
                        return [2 /*return*/, Promise.resolve(r.Id)];
                }
            });
        });
    };
    //create GoalOrganization list to store the Organization related Goals
    SPEnsureListService.prototype.ensureGoalOrganizationList = function (GoalOrgListName) {
        return __awaiter(this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure(GoalOrgListName, "Goals information related Organization", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 6];
                        alert("My GoalOrganization List is created!");
                        batch = sp.web.createBatch();
                        // Goal, Multiple lines of text
                        listEnsureResult.list.fields.inBatch(batch).addMultilineText("Goal", 6, false);
                        // Interval, Choice (menu to choose from) Monthly Target, Quarterly Objectives, Yearly Goals
                        listEnsureResult.list.fields.inBatch(batch).addChoice("Interval", ["Monthly Target", "Quarterly Objectives", "Yearly Goals"], ChoiceFieldFormatType.Dropdown);
                        // StatusPercentage , Number
                        listEnsureResult.list.fields.inBatch(batch).addNumber("StatusPercentage");
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalOrgListName).defaultView.fields.add("Goal")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalOrgListName).defaultView.fields.add("Interval")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalOrgListName).defaultView.fields.add("StatusPercentage")];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 7:
                        r = _a.sent();
                        console.log(r.Id);
                        return [2 /*return*/, Promise.resolve(r.Id)];
                }
            });
        });
    };
    //create GoalSecurityAddGoal list to store the Organization related Admin's Group information
    SPEnsureListService.prototype.ensureGoalSecurityAddGoalList = function (GoalOrgSecurityListName) {
        return __awaiter(this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure(GoalOrgSecurityListName, "Add Security Group of Organization related Add Goal", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 4];
                        alert("My GoalSecurityAddGoal List is created!");
                        batch = sp.web.createBatch();
                        //Members, Person Or Group
                        listEnsureResult.list.fields.inBatch(batch).addUser("Members", FieldUserSelectionMode.PeopleAndGroups);
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalOrgSecurityListName).defaultView.fields.add("Members")];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 5:
                        r = _a.sent();
                        console.log(r.Id);
                        return [2 /*return*/, Promise.resolve(r.Id)];
                }
            });
        });
    };
    //create GoalPersonal list to store the Personal related Goals
    SPEnsureListService.prototype.ensureGoalPersonalList = function (GoalPersnlListName) {
        return __awaiter(this, void 0, void 0, function () {
            var listEnsureResult, batch, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.ensure(GoalPersnlListName, "Goals information related Personal", 100)];
                    case 1:
                        listEnsureResult = _a.sent();
                        if (!listEnsureResult.created) return [3 /*break*/, 7];
                        alert("My GoalPersonal List is created!");
                        batch = sp.web.createBatch();
                        // Goal, Multiple lines of text
                        listEnsureResult.list.fields.inBatch(batch).addMultilineText("Goal", 6, false);
                        // Interval, Choice (menu to choose from) Monthly Target, Quarterly Objectives, Yearly Goals
                        listEnsureResult.list.fields.inBatch(batch).addChoice("Interval", ["Monthly Target", "Quarterly Objectives", "Yearly Goals"], ChoiceFieldFormatType.Dropdown);
                        //AssignTo, Person Or Group
                        listEnsureResult.list.fields.inBatch(batch).addUser("AssignTo", FieldUserSelectionMode.PeopleOnly);
                        // StatusPercentage , Number
                        listEnsureResult.list.fields.inBatch(batch).addNumber("StatusPercentage");
                        return [4 /*yield*/, batch.execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalPersnlListName).defaultView.fields.add("Goal")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalPersnlListName).defaultView.fields.add("Interval")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalPersnlListName).defaultView.fields.add("AssignTo")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle(GoalPersnlListName).defaultView.fields.add("StatusPercentage")];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [4 /*yield*/, listEnsureResult.list.select("Id")()];
                    case 8:
                        r = _a.sent();
                        console.log(r.Id);
                        return [2 /*return*/, Promise.resolve(r.Id)];
                }
            });
        });
    };
    return SPEnsureListService;
}()); //End of Main function
export default SPEnsureListService;
//# sourceMappingURL=SPEnsureListService.js.map