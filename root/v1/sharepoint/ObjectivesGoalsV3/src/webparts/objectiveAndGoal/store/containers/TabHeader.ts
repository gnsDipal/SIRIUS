import { connect } from 'react-redux';
import TabHeader from '../../components/TabHeader/TabHeader';

const mapStateToProps = ({
    AppData,
    isSectorFetchComplete  }) => ({
    sectors: AppData.Sectors,
    isSectorFetchComplete : isSectorFetchComplete
  });
  
  export default connect(
    mapStateToProps,
    null
  )(TabHeader);
