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
import SPDepartmentalService from './SPDepartmentalService';
import SPDispatcherService from './SPDispatcherService';
import SPMyRequestService from './SPMyRequestService';
import SPManagerService from './SPManagerService';
import SPPermissionService from './SPPermissionService';
var uniqueDeptList = [];
var SPDepartmentalServiceData = /** @class */ (function () {
    function SPDepartmentalServiceData(context) {
        this.context = context;
        this.departmentalService = null;
        this.dispatcherService = null;
        this.myRequestService = null;
        this.managerService = null;
        this.permissionService = null;
        this.departmentalService = new SPDepartmentalService(this.context);
        this.dispatcherService = new SPDispatcherService(this.context);
        this.myRequestService = new SPMyRequestService(this.context);
        this.managerService = new SPManagerService(this.context);
        this.permissionService = new SPPermissionService(this.context);
        this.onInit();
    }
    SPDepartmentalServiceData.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /* Assigned Ticket data service calls */
    SPDepartmentalServiceData.prototype.getAssignedViewCountData = function () {
        return this.departmentalService.getAssignedViewCount();
    };
    SPDepartmentalServiceData.prototype.getAssignToListData = function (inProcess, deptName) {
        return this.departmentalService.loadAssignToListInfo(inProcess, deptName);
    };
    SPDepartmentalServiceData.prototype.getDeptOptionsByGrpName = function (department) {
        return this.departmentalService.loadDepartmentOptionsByGroupName(department);
    };
    SPDepartmentalServiceData.prototype.getEmailId = function (assignedToUserId) {
        return this.departmentalService.emailIdMethod(assignedToUserId);
    };
    SPDepartmentalServiceData.prototype.addReAssignedToData = function (newReAssignedToUser, idRequest, commentData, ticketNumber) {
        return this.departmentalService.getAddReAssignedToData(newReAssignedToUser, idRequest, commentData, ticketNumber);
    };
    SPDepartmentalServiceData.prototype.getCompletedWithStatusUpdate = function (idRequest, commentData) {
        return this.departmentalService.loadCompletedWithStatusUpdate(idRequest, commentData);
    };
    //Raise a request data service calls
    SPDepartmentalServiceData.prototype.getDepartmentOptions = function () {
        return this.departmentalService.loadDepartmentOptions();
    };
    SPDepartmentalServiceData.prototype.getDepartmentDetailForPost = function () {
        return this.departmentalService.loadDepartmentDetailForPost();
    };
    SPDepartmentalServiceData.prototype.getDeptCategorySelect = function (selectedDept) {
        return this.departmentalService.deptCategorySelect(selectedDept);
    };
    SPDepartmentalServiceData.prototype.getSelectedDispatcherGroupPeople = function (selectedDept) {
        return this.departmentalService.loadSelectedDispatcherGroupPeople(selectedDept);
    };
    SPDepartmentalServiceData.prototype.getEmployeeRequestAdded = function (issueDescription, selectedDept, selectedDeptCategory, fileAddition, deptListCoreInfo) {
        return this.departmentalService.loadEmployeeRequest(issueDescription, selectedDept, selectedDeptCategory, fileAddition, deptListCoreInfo);
    };
    /* Dispatcher view service calls */
    SPDepartmentalServiceData.prototype.getDispatcherPlates = function () {
        return this.dispatcherService.getDepartmentsDetails();
    };
    SPDepartmentalServiceData.prototype.getDispatcherTicketData = function (passedDeptName) {
        return this.dispatcherService.loadDispatcherListInfo(passedDeptName);
    };
    SPDepartmentalServiceData.prototype.getDepartmentOptionsByGroupName = function (department) {
        return this.dispatcherService.loadDepartmentOptionsByGroupName(department);
    };
    SPDepartmentalServiceData.prototype.addMultipleDispatcherAttachmentLoop = function (requestedId, dispatcherFileAddition) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dispatcherService.loadMultipleDispatcherAttachmentLoop(requestedId, dispatcherFileAddition)];
            });
        });
    };
    SPDepartmentalServiceData.prototype.addDispatcherReAssign = function (assignedToUser, idRequest, raisedBy) {
        return this.dispatcherService.loadAddingReAssignedToData(assignedToUser, idRequest, raisedBy);
    };
    /* My Requested Issues Calls */
    SPDepartmentalServiceData.prototype.getMyRequestsViewCount = function () {
        return this.myRequestService.loadMyRequestsViewCount();
    };
    SPDepartmentalServiceData.prototype.getDeptListInfo = function (selectedStatus, dept) {
        return this.myRequestService.loadDeptListInfo(selectedStatus, dept);
    };
    /* Manager View Service Calls */
    SPDepartmentalServiceData.prototype.getManagerViewCount = function () {
        return this.managerService.loadManagerCount();
    };
    /* Permissions check */
    SPDepartmentalServiceData.prototype.getDispatcherPermissionHandle = function () {
        return this.permissionService.loadDispatcherPermissionHandle();
    };
    return SPDepartmentalServiceData;
}()); //End of Main Class
export default SPDepartmentalServiceData;
//# sourceMappingURL=SPDepartmentalServiceData.js.map