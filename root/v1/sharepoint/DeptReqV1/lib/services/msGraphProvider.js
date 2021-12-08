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
// debugger;
export default function msGraphProvider(msGraphClientFactory) {
    return __awaiter(this, void 0, void 0, function () {
        var msGraphClient, getUserId, getCurrentUserId, createUsersChat, sendMessage;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, msGraphClientFactory.getClient()];
                case 1:
                    msGraphClient = _a.sent();
                    getUserId = function (userEmail) { return __awaiter(_this, void 0, void 0, function () {
                        var resultGraph;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, msGraphClient.api("/users/" + userEmail).get()];
                                case 1:
                                    resultGraph = _a.sent();
                                    return [2 /*return*/, resultGraph.id];
                            }
                        });
                    }); };
                    getCurrentUserId = function () { return __awaiter(_this, void 0, void 0, function () {
                        var resultGraph;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, msGraphClient.api("me").get()];
                                case 1:
                                    resultGraph = _a.sent();
                                    return [2 /*return*/, resultGraph.id];
                            }
                        });
                    }); };
                    createUsersChat = function (requesterId, birthdayPersonId) { return __awaiter(_this, void 0, void 0, function () {
                        var body, resultGraph;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    body = {
                                        "chatType": "oneOnOne",
                                        "members": [
                                            {
                                                "@odata.type": "#microsoft.graph.aadUserConversationMember",
                                                "roles": ["owner"],
                                                "user@odata.bind": "https://graph.microsoft.com/beta/users('" + requesterId + "')"
                                            },
                                            {
                                                "@odata.type": "#microsoft.graph.aadUserConversationMember",
                                                "roles": ["owner"],
                                                "user@odata.bind": "https://graph.microsoft.com/beta/users('" + birthdayPersonId + "')"
                                            }
                                        ]
                                    };
                                    return [4 /*yield*/, msGraphClient.api("chats").version("beta").post(body)];
                                case 1:
                                    resultGraph = _a.sent();
                                    return [2 /*return*/, resultGraph.id];
                            }
                        });
                    }); };
                    sendMessage = function (chatId, chatMessage) { return __awaiter(_this, void 0, void 0, function () {
                        var body, resultGraph;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    body = {
                                        "body": {
                                            "contentType": chatMessage.body.contentType,
                                            "content": chatMessage.body.content
                                        }
                                    };
                                    return [4 /*yield*/, msGraphClient.api("chats/" + chatId + "/messages").version("beta").post(body)];
                                case 1:
                                    resultGraph = _a.sent();
                                    return [2 /*return*/, resultGraph];
                            }
                        });
                    }); };
                    return [2 /*return*/, {
                            getUserId: getUserId,
                            sendMessage: sendMessage,
                            createUsersChat: createUsersChat,
                            getCurrentUserId: getCurrentUserId
                        }];
            }
        });
    });
}
//# sourceMappingURL=msGraphProvider.js.map