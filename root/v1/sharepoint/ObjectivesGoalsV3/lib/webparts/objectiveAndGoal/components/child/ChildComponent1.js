import * as React from "react";
import { connect } from "react-redux";
import { listaction } from "../../store/action/Action";
var ChildComponent1 = function (props) {
    console.log("props in child 1", props);
    return (React.createElement("div", null,
        "Data Count: ",
        props.listDataCount.length,
        React.createElement("button", { onClick: props.listaction }, "Increase"),
        "Tab Header : ",
        props.SetTabHeader));
};
var mapStateToProps = function (state) {
    return {
        listDataCount: state.objectiveAndGoalData
    };
};
var mapDispatcherToProps = function (dispatcher) {
    return {
        listaction: function () { return dispatcher(listaction([1])); }
    };
};
// const mapsetTabHeaderToProps = (TabHeader) => {
//     return{
//         //SetTabHeader: () => setTabHeader(SetTabHeader([1]))
//         SetTabHeader: TabHeader.AppData
//     }
// }
// const mapSetTabHeaderSelectedIdToProps = (setTabHeaderSelectedId) => {
//     return{
//         SetTabHeaderSelectedId: () => setTabHeaderSelectedId(SetTabHeaderSelectedId([1]))
//     }
// }
export default connect(mapStateToProps, mapDispatcherToProps)(ChildComponent1);
//# sourceMappingURL=ChildComponent1.js.map