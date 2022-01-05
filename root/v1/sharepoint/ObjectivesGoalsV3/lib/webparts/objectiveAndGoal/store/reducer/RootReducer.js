var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { DepartmentSector, PersonalSector } from '../action/Action';
var initialState = {
    objectiveAndGoalData: [],
    AppData: []
};
var RootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === "LOAD_CONTENT") {
        return __assign(__assign({}, state), { objectiveAndGoalData: action.val });
    }
    else if (action.type === "SET_TAB_HEADER") {
        return __assign(__assign({}, state), { AppData: action.val });
    }
    else if (action.type === "SET_TAB_HEADER_SELECTED_ID") {
        if (action.val === '1') {
            return {
                AppData: DepartmentSector,
            };
        }
        else if (action.val === '2') {
            return {
                AppData: PersonalSector
            };
        }
    }
    return state;
};
export default RootReducer;
//# sourceMappingURL=RootReducer.js.map