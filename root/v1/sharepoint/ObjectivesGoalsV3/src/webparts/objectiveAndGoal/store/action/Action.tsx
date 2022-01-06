import { useContext } from 'react';
import SPService from "../../../../services/SPService";
import { UserContext } from '../../components/Main';
import getAppData from './getAppData';
// const mainContext = useContext(UserContext);
debugger;
export const listaction = (items: any) => {
    return {
      type: "LOAD_CONTENT",
      val: items,
    };
  };

// const mainContext = useContext(UserContext);
export const SetAppData = (mainContext) =>{
  const sectors = []; 
  let spService: SPService = null;
  spService = new SPService(mainContext);
  spService.getSectorData()
  .then(r=>{
       r.map(res=>{
           sectors.push({
            title: res.Title,
            id: res.ID,
            isActive: res.IsActive,
            data:{}
        });
      });
  });  
  return{
    type: "SET_APP_DATA",
    val:sectors
  }
}  

