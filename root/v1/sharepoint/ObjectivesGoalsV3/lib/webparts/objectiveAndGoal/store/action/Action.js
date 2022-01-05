var OrgSector = [
    {
        Key: 1,
        Value: "Organization",
        IsSelected: "true",
    },
    // {
    //   Key: 2,
    //   Value: "Department",
    //   IsSelected: "true",
    // },
    // {
    //   Key: 3,
    //   Value: "Personal",
    //   IsSelected: "true",
    // },
];
export var DepartmentSector = [
    {
        Key: 2,
        Value: "Department",
        IsSelected: "true",
    }
];
export var PersonalSector = [
    {
        Key: 3,
        Value: "Personal",
        IsSelected: "true"
    }
];
export var listaction = function (items) {
    return {
        type: "LOAD_CONTENT",
        val: items,
    };
};
export var SetTabHeader = function () {
    return {
        type: "SET_TAB_HEADER",
        val: OrgSector
    };
};
export var SetTabHeaderSelectedId = function (TabHeaderSelectedId) {
    return {
        type: "SET_TAB_HEADER_SELECTED_ID",
        val: TabHeaderSelectedId,
    };
};
//# sourceMappingURL=Action.js.map