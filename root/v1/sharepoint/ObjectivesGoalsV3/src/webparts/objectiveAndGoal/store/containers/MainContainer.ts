import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainComponent from '../../components/MainComponent';
import setSPContext from '../action/sectors/setSPContext';
import fetchSectors from '../action/sectors/fetchSectors';
// import fetchIntervals from '../action/sectors/fetchIntervals';
// import fetchOrganization from '../action/sectors/fetchOrganization';
// import fetchDepartment from '../action/sectors/fetchDepartment';
// import fetchPersonal from '../action/sectors/fetchPersonal';

const mapStateToProps = ({
  SPContext
  }) => ({
    SPContext
  });

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
      {
        setSPContext,
        fetchSectors,
        // fetchIntervals,
        // fetchOrganization,
        // fetchDepartment,
        // fetchPersonal     
      },
      dispatch
    )
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainComponent);
