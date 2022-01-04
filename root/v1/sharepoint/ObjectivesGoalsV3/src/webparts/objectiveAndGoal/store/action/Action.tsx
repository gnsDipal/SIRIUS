export const listaction = (items: any) => {
    return {
      type: "LOAD_CONTENT",
      val: items,
    };
  };

export const SetTabHeader  = (Orgnization: any) => {
    return {
      type: "SET_TAB_HEADER",
      val: Orgnization,
    };
  };

export const SetTabHeaderSelectedId = (TabHeaderSelectedId: any) => {
    return {
      type: "SET_TAB_HEADER_SELECTED_ID",
      val: TabHeaderSelectedId,
    };
  };