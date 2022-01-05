

export const listaction = (items: any) => {
    return {
      type: "LOAD_CONTENT",
      val: items,
    };
  };

export const SetAppData = () =>{

  return{
    type: "SET_APP_DATA",
    val:'Something'
  }
}  