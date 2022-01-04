const OrgSector = [
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

export const DepartmentSector = [
  {
      Key: 2,
      Value: "Department",
      IsSelected: "true",
    }
];

export const PersonalSector = [
  {
      Key: 3,
      Value: "Personal",
      IsSelected: "true"
    }
];

export const listaction = (items: any) => {
    return {
      type: "LOAD_CONTENT",
      val: items,
    };
  };

 
export const SetTabHeader  = () => {
    return {
      type: "SET_TAB_HEADER",
      val: OrgSector
    };
  };

export const SetTabHeaderSelectedId = (TabHeaderSelectedId: any) => {
    return {
      type: "SET_TAB_HEADER_SELECTED_ID",
      val: TabHeaderSelectedId,
    };
  };