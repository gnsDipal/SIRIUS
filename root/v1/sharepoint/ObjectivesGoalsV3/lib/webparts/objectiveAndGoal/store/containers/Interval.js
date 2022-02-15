import { connect } from 'react-redux';
import Interval from '../../components/Interval/Interval';
var mapStateToProps = function (_a) {
    var AppData = _a.AppData, isSectorFetchComplete = _a.isSectorFetchComplete;
    return ({
        sectors: AppData.Sectors,
        isSectorFetchComplete: isSectorFetchComplete
    });
};
export default connect(mapStateToProps, null)(Interval);
//# sourceMappingURL=Interval.js.map