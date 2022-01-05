import * as React from "react";
import styles from './TabItem.module.scss';
var TabItem = function (props) {
    console.log("TabItem", props);
    return (React.createElement("div", { className: styles.tabItem },
        React.createElement("div", { className: styles.SetDisplay },
            React.createElement("h1", null, "TabItem (Default Tab Item is Organization)"),
            React.createElement("button", null, "Organization"),
            React.createElement("button", null, "Department"),
            React.createElement("button", null, "Personal"))));
};
export default TabItem;
//# sourceMappingURL=TabItem.js.map