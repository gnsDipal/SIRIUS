import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import styles from './RaiseRequestTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackStyles } from '@fluentui/react/lib/Stack';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Logger, LogLevel} from "@pnp/logging";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { UserContext } from '../../Main/Main';
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import SPDepartmentalServiceData from '../../../../../services/SPDepartmentalServiceData';
import { ToastContainer } from 'react-toastify';
import useMsGraphProvider, { IMSGraphInterface } from '../../../../../services/msGraphProvider';

// debugger;

//Raise a request component
const RaiseRequestTab = (props) => {
  const mainContext = useContext(UserContext);
    const stackTokens = { childrenGap: 50  };
    const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
    let spRaiseRequestServiceData:SPDepartmentalServiceData = new SPDepartmentalServiceData(mainContext);
    // spRaiseRequestServiceData = new SPDepartmentalServiceData(mainContext);

    const noDataDeptOptions:IDropdownOption[] = [{
      key:1,
      text:'No data'
    }];
    let staticDeptOptions = [];
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
    const [msGraphProvider,setMsGraphProvider] = 
    useState<IMSGraphInterface>(
      {
        getCurrentUserId(): Promise<any>{return},
        getUserId(userEmail: string): Promise<any>{return},
        createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>{return},
        sendMessage(chatId: string, chatMessage: string): Promise<any>{return}
      }
    );
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
      .then(async(res) =>{
        setDepartmentOptions(res);
        staticDeptOptions = res;
        setOptionsUnlock(true);
        fetchMsGraphProvider();
      });
};
// ms-graph provider initializer
const fetchMsGraphProvider = async () => {
  setMsGraphProvider(await useMsGraphProvider(mainContext.webPartContext.msGraphClientFactory));
};

// UI event calls dynamic
const onChangeDeptHandle = async (choosenDept:any)=> {
  //set states
  setSelectedDept(choosenDept.text);
  setDataFilledCheck(1);
  setSelectedDeptCategory(selectedDeptCategory);
  await spRaiseRequestServiceData.getDeptCategorySelect(choosenDept.text).then((res:any) => {
    setDepartmentCategoryOptions(res);
  });
  await spRaiseRequestServiceData.getSelectedDispatcherGroupPeople(choosenDept.text).then((res:any) =>{
    setDispatcherGrpUsers(res);
  })
}

const onChangeDeptCategoryHandle = async (selectedDeptCategory:any)=> {
  setSelectedDeptCategory(selectedDeptCategory.text);
  setDataFilledCheck(1);
}

const getDeptCateg = async()=>{
  setDepartmentCategoryOptions(departmentCategoryOptions);   
}

const onChangeRequestDescriptionHandle = async(requestDescription:any)=>{
      setRequestDescription(requestDescription.currentTarget.value);
      setDataFilledCheck(1);
}

const onFileAddHandle=async(fileAdd)=>{
  let allFiles = [];
  for(let i=0;i<fileAdd.length;++i){
      allFiles.push(fileAdd[i]);
  }
  let file = allFiles[0];
  setFileAddition(allFiles);
}

const _sendMessage = async(ToEmailId: string, name:string) =>
{ 
  if(mainContext.webPartContext.sdks.microsoftTeams) 
  {
    if(ToEmailId !== ''){
    let currentUserId = await msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);

    const url = encodeURI(`https://teams.microsoft.com/l/entity/6bc42c01-5a4f-480e-bd2a-f048e32d1b5f/${mainContext.webPartContext.sdks.microsoftTeams.context.entityId}?context={"subEntityId": null,"channelId":${chatOfUser}}&path=dispatcher/tickets`);

    let message =  `
    <div style="border-style:solid; border-width:1px; padding:10px;">
    <div>Departmental Request Application</div>
    <hr />
    <div style="background: #eaeaff; font-weight: bold ">
        <a href="${url}">New Ticket</a>
    </div>
    </div><br />
    `;
    const chatMessage:any = {
      body: {
          contentType: "html",
          content: message
      }
  };  

    await msGraphProvider.sendMessage(chatOfUser, chatMessage)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });   
  }  
} 
  else
  {
    
    if(ToEmailId !== ''){
    let currentUserId = await msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);

    let url = `${mainContext.webPartContext.pageContext.web.absoluteUrl}#/dispatcher/Pending/${selectedDept}`;
    let message =  `
    <div style="border-style:solid; border-width:1px; padding:10px;">
    <div>Departmental Request Application</div>
    <hr />
    <div style="background: #eaeaff; font-weight: bold ">
        <a href="${url}">New Ticket</a>
    </div>
    </div><br />`;
   const chatMessage:any = {
      body: {
          contentType: "html",
          content: message
      }
    };
    await msGraphProvider.sendMessage(chatOfUser, chatMessage)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });    
  }
 }
};

const _messaging= (dispatcherGroupEmailIds)=>{
  for(let i=0;i<dispatcherGroupEmailIds.length;++i){
    _sendMessage(dispatcherGroupEmailIds[i].eMail, dispatcherGroupEmailIds[i].name );
  };
};

const addEmployeeRequest=(issueDescription, selectedDept, selectedDeptCategory,fileAddition)=>{
  if(selectedDept !== '' && issueDescription !== ''){
    _messaging(dispatcherGrpUsers)
   spRaiseRequestServiceData.getEmployeeRequestAdded(issueDescription, selectedDept, selectedDeptCategory,fileAddition,deptListCoreInfo)
   .then((r)=>{
    setToasterNotificationFlag(true);
    setRandomIndex(Math.floor(Math.random() * 6) + 1);

   }).then(re=>{
     setToasterNotificationFlag(false);
   })
  }
};
    return (
        <div className={styles.raiseRequestTab}>
            <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
               <div className="ms-Grid-col ms-lg2 ms-md2 ms-sm2">
                    <Link to="/nav"><Icon iconName={strings.HomeLabel} className={styles.iconStyle}></Icon></Link>
               </div>
              </div>  
              {  
               <div className={styles.rowWithMargin}>
                 <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                  <Stack tokens={stackTokens}>
                         <Dropdown
                           placeholder={strings.SelectDepartmentLabel}
                           label={strings.SelectTheDepartmentLabel}
                           options={departmentOptions.length !== (0 || null) ?departmentOptions:noDataDeptOptions}
                           defaultValue={selectedDept}
                           onChange={(e,selectedDept) =>onChangeDeptHandle(selectedDept)}
                           key={randomIndex}
                           className={styles.dropdownStyle}
                         />
                    </Stack>
                 </div>
                </div>
                }           
              <div className={styles.rowWithMargin}>
                <div className="ms-Grid-col ms-lg8 ms-sm8">
                  <Stack tokens={stackTokens}>
                     <Dropdown
                           placeholder={strings.SelectDepartmentCategoryLabel}
                           label={strings.SelectTheDepartmentCategoryLabel}
                           onClick={getDeptCateg}
                           options={departmentCategoryOptions.length !==0 ?
                            departmentCategoryOptions:noDataDeptOptions}
                            defaultValue={selectedDeptCategory}
                           defaultSelectedKey={" "}
                           onChange={(e,selectedDeptCategory)=>onChangeDeptCategoryHandle(selectedDeptCategory)}
                           key={randomIndex}
                         />
                     </Stack>
                </div>
              </div>
             <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg8 ms-sm8">
                 <TextField label={strings.TypeYourIssueLabel} multiline rows={3}
                            onChange={(requestDescription)=>onChangeRequestDescriptionHandle(requestDescription)}
                            key={randomIndex}
                         />
              </div>
             </div>
             
             <div className="ms-Grid-row">
               <div className="ms-Grid-col ms-lg8 ms-sm8">
                  <h4 className={styles.fileHeading} >{strings.AddFileLabel}</h4>
                  <input type={strings.FileLabel} multiple className={styles.fileInputStyle}
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
                        <Navbar/>
                        <Home/>
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
