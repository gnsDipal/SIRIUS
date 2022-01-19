import { connect } from 'react-redux';
import Goal from '../../components/Goal/Goal';

const mapStateToProps = ({
    AppData,
    isSectorFetchComplete  }) => ({
    sectors: AppData.Sectors,
    isSectorFetchComplete : isSectorFetchComplete
  });
  
  export default connect(
    mapStateToProps,
    null
  )(Goal);