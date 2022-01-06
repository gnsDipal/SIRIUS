import { useContext } from 'react';
import SPService from "../../../../services/SPService";
import { UserContext } from '../../components/Main';
debugger;
const getAppData = () => {
  const sectors = []; 
  const mainContext = useContext(UserContext);
  let spService: SPService = null;
  spService = new SPService(mainContext);
  return spService.getSectorData()
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
};

export default getAppData
