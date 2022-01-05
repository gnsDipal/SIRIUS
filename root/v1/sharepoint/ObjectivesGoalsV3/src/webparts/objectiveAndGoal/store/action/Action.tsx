import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import SPService from "../../../../services/SPService";
import { UserContext } from "../../components/Home";
import getAppData from './getAppData';
debugger;
export const listaction = (items: any) => {
    return {
      type: "LOAD_CONTENT",
      val: items,
    };
  };

export const SetAppData = () =>{
  const sectors = []; 
  const mainContext = useContext(UserContext);
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
  })
  return{
    type: "SET_APP_DATA",
    val:sectors
  }
}  

