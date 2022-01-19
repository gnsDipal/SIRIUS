import { connect } from 'react-redux';
import Interval from '../../components/Interval/Interval';

const mapStateToProps = ({
    AppData,
    isSectorFetchComplete  }) => ({
    sectors: AppData.Sectors,
    isSectorFetchComplete : isSectorFetchComplete
  });
  
  export default connect(
    mapStateToProps,
    null
  )(Interval);