import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ObjectiveAndGoal from '../../components/ObjectiveAndGoal';
//import setSPContext from '../action/sectors/setSectors';
//import setSectors from '../action/sectors/setSectors';

const mapStateToProps = ({
  webPartContext
  }) => ({
    webPartContext
  });
  
  // const mapDispatchToProps = dispatch => ({
  //   ...bindActionCreators(
  //     {
  //       setSPContext,
  //       setSectors,
  //     },
  //     dispatch
  //   )
  // });
  
  export default connect(
    mapStateToProps,
    null
  )(ObjectiveAndGoal);
