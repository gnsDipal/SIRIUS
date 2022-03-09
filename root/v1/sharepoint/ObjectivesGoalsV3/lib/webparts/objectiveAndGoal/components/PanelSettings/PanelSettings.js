var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
import { Panel } from '@fluentui/react/lib/Panel';
var tabLinkUrl = '';
//debugger
var PanelSettings = /** @class */ (function (_super) {
    __extends(PanelSettings, _super);
    function PanelSettings(props) {
        var _this = _super.call(this, props) || this;
        _this.checkTeamCreatedBefore = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.webPartContext.msGraphClientFactory
                            .getClient()
                            .then(function (client) {
                            client
                                .api("me/joinedTeams")
                                .version("beta")
                                .get().then(function (res) {
                                // console.log("Inside get teams");
                                // console.log("res:" + res);
                                var teamPresent = false;
                                for (var i = 0; i < res.value.length; ++i) {
                                    if (res.value[i].displayName === "AddGoalsAdmin") {
                                        teamPresent = true;
                                    }
                                }
                                if (teamPresent === false) {
                                    _this.createTeam();
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.createTeam = function () { return __awaiter(_this, void 0, void 0, function () {
            var body;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
                            "displayName": "AddGoalsAdmin",
                            "description": "The team for those in architecture design."
                        };
                        return [4 /*yield*/, this.props.webPartContext.msGraphClientFactory
                                .getClient()
                                .then(function (client) {
                                client
                                    .api("teams")
                                    .version("v1.0")
                                    .post(body).then(function () {
                                    // console.log("Inside post");
                                    _this.GetTeams();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.GetTeams = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.webPartContext.msGraphClientFactory
                            .getClient()
                            .then(function (client) {
                            client
                                .api("me/joinedTeams")
                                .version("beta")
                                .get().then(function (res) {
                                // console.log("Inside get teams");
                                // console.log("res:" + res);
                                var teamId = '';
                                for (var i = 0; i < res.value.length; ++i) {
                                    if (res.value[i].displayName === "AddGoalsAdmin") {
                                        teamId = res.value[i].id;
                                    }
                                }
                                if (teamId != '') {
                                    _this.GetChannelId(teamId);
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.GetChannelId = function (teamId) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.webPartContext.msGraphClientFactory
                            .getClient()
                            .then(function (client) {
                            client
                                .api("teams/" + teamId + "/channels")
                                .version("beta")
                                .get().then(function (res) {
                                // console.log("Inside get channels");
                                // console.log("res:" + res);
                                var channelId = res.value[0].id;
                                _this.setState({
                                    webURL: res.value[0].webUrl
                                });
                                // tabLinkUrl = res.value[0].webUrl;
                                _this.createTab1(teamId, channelId);
                                _this.createTab2(teamId, channelId);
                                _this.createTab3(teamId, channelId);
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.createTabGeneralPost = function (teamId, channelId, body) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.webPartContext.msGraphClientFactory
                            .getClient()
                            .then(function (client) {
                            client
                                .api("teams/" + teamId + "/channels/" + channelId + "/tabs")
                                .version("beta")
                                .post(body).then(function () {
                                // console.log("Inside create tab");  
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.createTab1 = function (teamId, channelId) { return __awaiter(_this, void 0, void 0, function () {
            var contentURL, body;
            return __generator(this, function (_a) {
                contentURL = this.props.webPartContext.pageContext.web.absoluteUrl + "/_layouts/15/groups.aspx";
                body = {
                    "displayName": "PeopleAndGroup",
                    "teamsAppId": null,
                    "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
                    "configuration": {
                        "entityId": null,
                        "contentUrl": contentURL,
                        "removeUrl": null,
                        "websiteUrl": null
                    }
                };
                this.createTabGeneralPost(teamId, channelId, body);
                return [2 /*return*/];
            });
        }); };
        _this.createTab2 = function (teamId, channelId) { return __awaiter(_this, void 0, void 0, function () {
            var contentURL, body;
            return __generator(this, function (_a) {
                contentURL = this.props.webPartContext.pageContext.web.absoluteUrl + "/Lists/GoalSecurityAddGoal/AllItems.aspx";
                body = {
                    "displayName": "GoalSecurityAddGoal",
                    "teamsAppId": null,
                    "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
                    "configuration": {
                        "entityId": null,
                        "contentUrl": contentURL,
                        "removeUrl": null,
                        "websiteUrl": null
                    }
                };
                this.createTabGeneralPost(teamId, channelId, body);
                return [2 /*return*/];
            });
        }); };
        _this.createTab3 = function (teamId, channelId) { return __awaiter(_this, void 0, void 0, function () {
            var contentURL, body;
            return __generator(this, function (_a) {
                contentURL = this.props.webPartContext.pageContext.web.absoluteUrl + "/Lists/GoalDepartmentOptions/AllItems.aspx";
                body = {
                    "displayName": "GoalDepartmentOptions",
                    "teamsAppId": null,
                    "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
                    "configuration": {
                        "entityId": null,
                        "contentUrl": contentURL,
                        "removeUrl": null,
                        "websiteUrl": null
                    }
                };
                this.createTabGeneralPost(teamId, channelId, body);
                return [2 /*return*/];
            });
        }); };
        _this.cancel = function () {
            _this.props.onClosePanel();
            _this.props.webPartContext.sdks.microsoftTeams.context.userTeamRole;
        };
        return _this;
    }
    PanelSettings.prototype.componentDidMount = function () {
        this.checkTeamCreatedBefore();
        // this.uriTest();
        this.state = {
            webURL: ''
        };
    };
    // uriTest = () => {
    //      url = encodeURI(`https://teams.microsoft.com/l/entity/9c81173a-1b57-4a3c-9b5e-0a97015460f6/${this.props.webPartContext.sdks.microsoftTeams.context.entityId}?context={"subEntityId": null,"channelId":${this.props.webPartContext.sdks.microsoftTeams.context.channelId},"groupId":${this.props.webPartContext.sdks.microsoftTeams.context.groupId},"tenantId":${this.props.webPartContext.sdks.microsoftTeams.context.teamId}}`)
    // }
    PanelSettings.prototype.render = function () {
        var _this = this;
        return (React.createElement(Panel, { headerText: "Objectives And Goals Web Part Settings", isOpen: true, onDismiss: function () { return _this.cancel(); } },
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("label", { style: { fontSize: "16px" } }, "Admin Settings")))));
    };
    return PanelSettings;
}(React.Component));
export default PanelSettings;
//# sourceMappingURL=PanelSettings.js.map