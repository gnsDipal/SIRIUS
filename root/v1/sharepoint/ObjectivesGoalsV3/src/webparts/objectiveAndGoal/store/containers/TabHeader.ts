import { connect } from 'react-redux';
import TabHeader from '../../components/TabHeader/TabHeader';

const mapStateToProps = ({
    AppData  }) => ({
    sectors: AppData.Sectors,
  });
  
  export default connect(
    mapStateToProps,
    null
  )(TabHeader);
