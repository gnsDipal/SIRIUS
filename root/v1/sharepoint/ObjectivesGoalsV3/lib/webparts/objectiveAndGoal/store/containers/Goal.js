import { connect } from 'react-redux';
import Goal from '../../components/Goal/Goal';
var mapStateToProps = function (_a) {
    var AppData = _a.AppData, isSectorFetchComplete = _a.isSectorFetchComplete;
    return ({
        sectors: AppData.Sectors,
        isSectorFetchComplete: isSectorFetchComplete
    });
};
export default connect(mapStateToProps, null)(Goal);
//# sourceMappingURL=Goal.js.map