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
// DEFAULT INPORT
import * as React from 'react';
import styles from './ObjectiveAndGoal.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
// REDUC IMPORT
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import RootReducer from "../store/reducer/RootReducer";
import ChildComponent1 from './child/ChildComponent1';
import TabHeader from './TabHeader/TabHeader';
import TabItem from './TabHeader/TabItem/TabItem';
var ObjectiveAndGoal = /** @class */ (function (_super) {
    __extends(ObjectiveAndGoal, _super);
    function ObjectiveAndGoal(props) {
        var _this = _super.call(this, props) || this;
        _this.store = createStore(RootReducer, applyMiddleware(thunk));
        return _this;
    }
    ;
    ObjectiveAndGoal.prototype.render = function () {
        return (React.createElement("div", { className: styles.objectiveAndGoal },
            React.createElement(Provider, { store: this.store },
                React.createElement("div", { className: styles.container },
                    React.createElement("div", { className: styles.row },
                        React.createElement("div", { className: styles.column },
                            React.createElement("span", { className: styles.title }, "Welcome to React-Redux"),
                            React.createElement("p", { className: styles.subTitle }, "Implementation Redux."),
                            React.createElement("p", { className: styles.description }, escape(this.props.description)),
                            React.createElement(ChildComponent1, null),
                            React.createElement(TabHeader, null),
                            React.createElement(TabItem, null)))))));
    };
    return ObjectiveAndGoal;
}(React.Component));
export default ObjectiveAndGoal;
//# sourceMappingURL=ObjectiveAndGoal.js.map