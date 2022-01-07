// DEFAULT IMPORT
import * as React from 'react';
import { useEffect, useState } from 'react';
import TabHeader from '../store/containers/TabHeader';
var MainComponent = function (props) {
    var _a = useState(false), isContextLoaded = _a[0], setContextLoad = _a[1];
    useEffect(function () {
        init();
    }, []);
    var init = function () {
        debugger;
        props.setSPContext(props.webPartContext);
        setContextLoad(true);
        props.fetchSectors();
    };
    return (React.createElement("div", null,
        React.createElement("h1", null, "In Main File"),
        isContextLoaded ? React.createElement(TabHeader, null) : ''));
};
export default MainComponent;
//# sourceMappingURL=MainComponent.js.map