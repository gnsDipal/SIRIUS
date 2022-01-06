import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainComponent from '../../components/MainComponent';
import setSPContext from '../action/sectors/setSPContext';

const mapStateToProps = ({
  SPContext
  }) => ({
    SPContext
  });

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
      {
        setSPContext
      },
      dispatch
    )
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainComponent);
