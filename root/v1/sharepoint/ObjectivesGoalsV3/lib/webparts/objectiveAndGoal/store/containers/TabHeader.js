var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TabHeader from '../../components/TabHeader/TabHeader';
// import setSectors from '../action/sectors/setSectors';
// import type { Sector } from '../operations/types';
var mapStateToProps = function (_a) {
    var AppData = _a.AppData;
    return ({
        sectors: AppData,
    });
};
var mapDispatchToProps = function (dispatch) { return (__assign({}, bindActionCreators({
// setSectors
}, dispatch))); };
export default connect(mapStateToProps, null)(TabHeader);
//# sourceMappingURL=TabHeader.js.map