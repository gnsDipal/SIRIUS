import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TabHeader from '../../components/TabHeader/TabHeader';
import fetchSectors from '../action/sectors/fetchSectors';
// import setSectors from '../action/sectors/setSectors';
// import type { Sector } from '../operations/types';

const mapStateToProps = ({
    AppData,
    SPContext,
  }) => ({
    sectors: AppData.Sectors,
    SPContext
  });
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
      {
        fetchSectors
        // setSectors
      },
      dispatch
    )
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TabHeader);
