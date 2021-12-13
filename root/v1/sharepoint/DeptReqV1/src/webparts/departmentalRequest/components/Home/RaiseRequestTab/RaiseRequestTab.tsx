import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import styles from './RaiseRequestTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link} from "react-router-dom";
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {  IStackTokens } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import { IconButton } from '@fluentui/react/lib/Button';
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";
import AppListener from '../../../../../services/appListener';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import SPDepartmentalService from '../../../../../services/SPDepartmentalService';
import { UserContext } from '../../Main/Main';
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { IDepartmentList } from '../../../../../model/RaiseRequest';
import { ToastContainer, toast } from 'react-toastify';



// debugger;
const stackTokens = { childrenGap: 50  };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
let spRaiseRequestServiceData:SPDepartmentalServiceData = null;
let deptListCoreInfo = [];
let departmentOptions: IDropdownOption[] = [];
const noDataDeptOptions:IDropdownOption[] = [{
  key:1,
  text:'No data'
}
];
let staticDeptOptions = [];
const RaiseRequestTab = (props) => {
    const mainContext = useContext(UserContext);
    const [deptListCoreInfo, setDeptListCoreInfo] = useState(null);
    const [departmentOptions, setDepartmentOptions] = useState([]);
    const [selectedDept, setSelectedDept] = useState<string>('');
    const [requestDescription, setRequestDescription] = useState<string>('');
    const [dataFilledCheck, setDataFilledCheck] = useState<number>(0);
    const [selectedDeptCategory, setSelectedDeptCategory] = useState<string>('');
    const [departmentCategoryOptions, setDepartmentCategoryOptions] = useState([]);
    const [dispatcherGrpUsers, setDispatcherGrpUsers] = useState([]);
    const [optionsUnlock, setOptionsUnlock] = useState<boolean>(false);
    const [fileAddition, setFileAddition] = useState<File[]>(null);
    const [toasterNotificationFlag, setToasterNotificationFlag] = useState<boolean>(false);
    const [randomIndex, setRandomIndex] = useState<number>(0);
    useEffect(() => { 
        init();
   },[]);
   const init = async() => {
    spRaiseRequestServiceData = new SPDepartmentalServiceData(mainContext);
    await spRaiseRequestServiceData.getDepartmentDetailForPost()
    .then((res:any)=>{
      setDeptListCoreInfo(res);
});
    await spRaiseRequestServiceData.getDepartmentOptions()
    .then(res =>{
        setDepartmentOptions(res);
        staticDeptOptions = res;
        setOptionsUnlock(true);
    });
};

// UI event calls dynamic

const onClickDeptHandle = async ()=>{
    setDepartmentOptions(staticDeptOptions);
};

const onChangeDeptHandle = async (choosenDept)=> {
  //set states
  setSelectedDept(choosenDept.text);
  setDataFilledCheck(1);
  setSelectedDeptCategory(selectedDeptCategory);
  // this.deptCategorySelect();
  // this.loadSelectedDispatcherGroupPeople(selectedDept.text);
  spRaiseRequestServiceData.getDeptCategorySelect(choosenDept.text)
  .then(res => {
    setDepartmentCategoryOptions(res);
  });
  spRaiseRequestServiceData.getSelectedDispatcherGroupPeople(choosenDept.text)
  .then(res =>{
    setDispatcherGrpUsers(res);
  });
};

const onChangeDeptCategoryHandle = async (selectedDeptCategory:any)=> {
  setSelectedDeptCategory(selectedDeptCategory.text);
  setDataFilledCheck(1);
};

const getDeptCateg = async()=>{
  setDepartmentCategoryOptions(departmentCategoryOptions);   
};

const onChangeRequestDescriptionHandle = async(requestDescription:any)=>{
      setRequestDescription(requestDescription.currentTarget.value);
      setDataFilledCheck(1);
};

const onFileAddHandle=async(fileAdd)=>{
  let allFiles = [];
  for(let i=0;i<fileAdd.length;++i){
      allFiles.push(fileAdd[i]);
  }
  let file = allFiles[0];
  setFileAddition(allFiles);
};

const addEmployeeRequest=(issueDescription, selectedDept, selectedDeptCategory,fileAddition)=>{
  if(selectedDept !== null){
   spRaiseRequestServiceData.getEmployeeRequestAdded(issueDescription, selectedDept, selectedDeptCategory,fileAddition,deptListCoreInfo)
   .then((r)=>{
    setToasterNotificationFlag(true);
    setRandomIndex(Math.floor(Math.random() * 6) + 1);
   });
  }
};

    return (
        <div className={styles.raiseRequestTab}>
            <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
               <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
                    <Link to="/nav"><Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}}></Icon></Link>
               </div>
              </div>  
              {  
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                 <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                  <Stack tokens={stackTokens}>
                         <Dropdown
                           placeholder="Select Department"
                           label="Select the Department"
                           options={departmentOptions.length !== 0 ?departmentOptions:noDataDeptOptions}
                           defaultValue={selectedDept}
                           onChange={(e,selectedDept) => onChangeDeptHandle(selectedDept)}
                           key={randomIndex}
                           styles={{ dropdown: { width:'100%',height:'34px' } }}
                           className={styles.dropdownStyle}
                         />
                    </Stack>
                 </div>
                </div>
                }
                
              <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                <div className="ms-Grid-col ms-lg8 ms-sm8">
                  <Stack tokens={stackTokens}>
                     <Dropdown
                           placeholder="Select Department Category"
                           label="Select the Department Category"
                           onClick={getDeptCateg}
                           options={departmentCategoryOptions.length !==0 ?
                            departmentCategoryOptions:noDataDeptOptions}
                            defaultValue={selectedDeptCategory}
                           defaultSelectedKey={" "}
                           onChange={(e,selectedDeptCategory)=>onChangeDeptCategoryHandle(selectedDeptCategory)}
                           key={randomIndex}
                           styles={{ dropdown: { width: '100%' } }}
                         />
                     </Stack>
                </div>
              </div>
             <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg8 ms-sm8">
                 <TextField label="Type your issue" multiline rows={3}
                            value={requestDescription}
                            onChange={(requestDescription)=>onChangeRequestDescriptionHandle(requestDescription)}
                         />
              </div>
             </div>
             
             <div className="ms-Grid-row">
               <div className="ms-Grid-col ms-lg8 ms-sm8">
                  <h4 style={{fontSize:'14px', fontWeight:'normal',marginBottom:'0'}} >{strings.AddFileLabel}</h4>
                  <input type="file" multiple style={{width:'100%',border:'1px solid #ddd',paddingTop:'10px', paddingBottom:'10px' }}
                  onChange={(e)=> onFileAddHandle(e.target.files) }
                  key={randomIndex}
                  />
              </div>
             </div>
             
             <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg2 ms-sm2">
                <DefaultButton className={styles.saveButtonStyle}
                 onClick={()=>addEmployeeRequest(requestDescription,selectedDept,selectedDeptCategory,fileAddition)}>{strings.SubmitButtonLabel}</DefaultButton>
                <ToastContainer/>
              </div>
             </div>            
            
            </div>
            <Switch>
                <Route exact path="/nav">
                    <div>
                        <Navbar {...props}/>
                        <Home {...props}/>
                    </div>
                </Route>
            </Switch>
            <ToastContainer/>
            {(toasterNotificationFlag) &&
              Logger.writeJSON("Raised a new request",LogLevel.Info) 
            }
        </div>
    );
};

export default RaiseRequestTab;
