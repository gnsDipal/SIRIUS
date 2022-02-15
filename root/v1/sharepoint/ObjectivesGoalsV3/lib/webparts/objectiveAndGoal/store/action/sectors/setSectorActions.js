export var setSectors = function (appData) { return ({
    type: 'SET_SECTORS',
    payload: appData
}); };
export var setSectorFetchComplete = function () { return ({
    type: 'SET_SECTOR_FETCH_COMPLETE',
    payload: true
}); };
export var setSectorFetchStart = function () { return ({
    type: 'SET_SECTOR_FETCH_START',
    payload: true
}); };
export var setSectorFetchError = function (error) { return ({
    type: 'SET_SECTOR_FETCH_ERROR',
    payload: error
}); };
export var setSelectedSector = function (sectorId, isSelected) { return ({
    type: 'SET_SELECTED_SECTOR',
    payload: isSelected
}); };
//# sourceMappingURL=setSectorActions.js.map