import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainComponent from '../../components/MainComponent';
import setSPContext from '../action/sectors/setSPContext';
import fetchSectors from '../action/sectors/fetchSectors';

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
      },
      dispatch
    )
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainComponent);
