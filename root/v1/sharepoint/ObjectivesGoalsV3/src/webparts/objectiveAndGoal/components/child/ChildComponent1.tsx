import * as React from "react";
import { connect } from "react-redux";

const ChildComponent1 = (props) =>{
    console.log("props in child 1",props)
    return(
        <div> 
            Data Count: {props.listDataCount.length}
        </div>
    )
};
const mapStateToProps = (state) =>{
    return{
        listDataCount: state.objectiveAndGoalData
    }
}
export default connect(mapStateToProps)(ChildComponent1);