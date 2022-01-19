import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainComponent from '../../components/MainComponent';
import setSPContext from '../action/sectors/setSPContext';
import fetchSectors from '../action/sectors/fetchSectors';
import callUpdateAppData from '../action/sectors/callUpdateAppData';

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
        callUpdateAppData,
      },
      dispatch
    )
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainComponent);
