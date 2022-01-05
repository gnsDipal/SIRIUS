import * as React from "react";
import styles from './TabHeader.module.scss';
//import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
var TabHeader = function (props) {
    console.log("TabHeader", props);
    return (React.createElement("div", { className: styles.tabHeader },
        React.createElement("div", { className: styles.SetDisplay },
            React.createElement("h1", null, "TabHeader (Organization, Department , Personal)"))));
};
export default TabHeader;
//# sourceMappingURL=TabHeader.js.map