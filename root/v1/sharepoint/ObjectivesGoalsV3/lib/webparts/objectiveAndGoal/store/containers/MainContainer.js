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
import MainComponent from '../../components/MainComponent';
import setSPContext from '../action/sectors/setSPContext';
import fetchSectors from '../action/sectors/fetchSectors';
var mapStateToProps = function (_a) {
    var SPContext = _a.SPContext;
    return ({
        SPContext: SPContext
    });
};
var mapDispatchToProps = function (dispatch) { return (__assign({}, bindActionCreators({
    setSPContext: setSPContext,
    fetchSectors: fetchSectors
}, dispatch))); };
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
//# sourceMappingURL=MainContainer.js.map