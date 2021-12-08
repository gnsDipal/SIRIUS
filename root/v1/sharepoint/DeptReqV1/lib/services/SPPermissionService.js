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
var SPPermissionService = /** @class */ (function () {
    function SPPermissionService(context) {
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
        this.onInit();
    }
    // Init  
    SPPermissionService.prototype.onInit = function () {
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
    SPPermissionService.prototype.loadDispatcherPermissionHandle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, loggedInUserGrps, permissionCheck;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web.lists.getByTitle('Dept').items.select("*", "GroupName/Title", "DepartmentGroup/Title", "Manager/Title").expand("GroupName", "DepartmentGroup", "Manager").orderBy("Title", false).get()];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.web.currentUser.groups()];
                    case 2:
                        loggedInUserGrps = _a.sent();
                        return [4 /*yield*/, this.checkForDepts(result, loggedInUserGrps)];
                    case 3:
                        permissionCheck = _a.sent();
                        return [2 /*return*/, Promise.resolve(permissionCheck)];
                }
            });
        });
    };
    SPPermissionService.prototype.checkForDepts = function (result, loggedInUserGrps) {
        return __awaiter(this, void 0, void 0, function () {
            var count, set;
            return __generator(this, function (_a) {
                count = 0;
                set = new Set(loggedInUserGrps);
                result.filter(function (item) { return set.has(item.GroupName.Title); });
                console.log('object');
                return [2 /*return*/, true];
            });
        });
    };
    return SPPermissionService;
}());
export default SPPermissionService;
//# sourceMappingURL=SPPermissionService.js.map