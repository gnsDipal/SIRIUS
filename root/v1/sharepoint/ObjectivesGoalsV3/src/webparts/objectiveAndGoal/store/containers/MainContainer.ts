import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainComponent from '../../components/MainComponent';
import setSPContext from '../action/sectors/setSPContext';
import fetchSectors from '../action/sectors/fetchSectors';
import fetchIntervals from '../action/sectors/fetchIntervals';

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
        fetchIntervals
      },
      dispatch
    )
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainComponent);
