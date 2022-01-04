import * as React from "react";
import { connect } from "react-redux";
import { listaction, SetTabHeader, SetTabHeaderSelectedId } from "../../store/action/Action";

const ChildComponent1 = (props) =>{
    console.log("props in child 1",props)
    return(
        <div> 
            Data Count: {props.listDataCount.length}
            <button onClick={props.listaction}>Increase</button>
            Tab Header : {props.SetTabHeader}
        </div>
    )
};
const mapStateToProps = (state) =>{
    return{
        listDataCount: state.objectiveAndGoalData
    }
}

const mapDispatcherToProps = (dispatcher) => {
    return{
        listaction: () => dispatcher(listaction([1]))
    }
}

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