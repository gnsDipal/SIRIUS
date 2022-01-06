import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TabHeader from '../../components/TabHeader/TabHeader';

// import setSectors from '../action/sectors/setSectors';
// import type { Sector } from '../operations/types';

const mapStateToProps = ({
    AppData  }) => ({
    sectors: AppData,
  });
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
      {
        
        // setSectors
      },
      dispatch
    )
  });
  
  export default connect(
    mapStateToProps,
    null
  )(TabHeader);
