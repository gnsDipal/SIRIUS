import * as React from 'react';
import styles from './AssignedToView.module.scss';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IBasePickerSuggestionsProps, IPeoplePickerProps, NormalPeoplePicker, ValidationState } from '@fluentui/react/lib/Pickers';
//import { people, mru } from '@fluentui/example-data';
import DepartmentalRequest from '../DepartmentalRequest/DepartmentalRequest'
import { IAssignState } from './IAssignState';
import { IAssignProps } from './IAssignProps';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import {IDepartmentList, IDispacherList} from '../DepartmentalRequest/IDepartmentList'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { IconButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
import { Item } from '@pnp/sp/items';
import { result } from 'lodash';
import NoDataDispatcherView from '../NoDataDispatcherView/NoDataDispatcherView';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import AllAssignedToView from '../AllAssignedToView/AllAssignedToView';
import { TooltipHost, ITooltipHostStyles } from '@fluentui/react/lib/Tooltip';
import {IAssignedList} from '../DepartmentalRequest/IDepartmentList'
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";
import { ToastContainer, toast } from 'react-toastify';
import useMsGraphProvider, { IMSGraphInterface } from "../../../../services/msGraphProvider";


const calloutProps = { gapSpace: 0 };
// The TooltipHost root uses display: inline by default.
// If that's causing sizing issues or tooltip positioning issues, try overriding to inline-block.
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

debugger;
export const people: (IPersonaProps)[] = [];

export var mru:(IPersonaProps)[]=[];

var grpName:string = 'IT Support';
var pickerGroupNames:(IPersonaProps)[]=[];
var textInput;
const stackStyles: Partial<IStackStyles> = { root: { width: 169 } };

  export default class AssignedToView extends React.Component<IAssignProps, IAssignState> {

 
 constructor(props){
   super(props)
   this.state = {
    mostRecentlyUsed:[],
    peopleList:[],
    ticketCount:0,
    newPeoplePickerUser:'',
    loading:false,
    errorMessage:'',
    deptDetails:[],
    indexSelect:0,
    homeButton:0,
    idSelect:0,
    deptListDropDown:[],
    passAssignedToUser:{
      id:0,
      text:''
    },
    deleteSelectedTicket:'',
    statusOptions:[],
    statusCompletedCheck:0,
    assignedIssuesButton:1,
    allIssuesButton:0,
    allDetails:[],
    commentData:'',
    noDataUnlock:0,
    noAllDataUnlock:0,
    assignedNotification:0,
    eMailId:'',
    msGraphProvider: {
      getCurrentUserId(): Promise<any>{return},
      getUserId(userEmail: string): Promise<any>{return},
      createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>{return},
      sendMessage(chatId: string, chatMessage: string): Promise<any>{return}
    },
   }
    textInput = React.createRef();
    this.inputComment = this.inputComment.bind(this);
  }

  componentDidMount(){
    // this.loadDepartmentOptions();
    this.loadAssignToListInfo();
    this.allAssignToListInfo();
    this.fetchMsGraphProvider();
      // this.testPart();
  }

  fetchMsGraphProvider = async () => {
    this.setState({
      msGraphProvider: (await useMsGraphProvider(this.props.msGraphClientFactory))
    });
  }
  private loadAssignToListInfo():void{
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items?$select=*,Author/Title,ReAssignTo/Title,AttachmentFiles&$expand=Author,ReAssignTo,AttachmentFiles&$filter=Status eq '${this.props.passedStatus}' and ReAssignToId eq ${this.props.currentUserId} and Department eq '${this.props.passedDept}'&$orderby=ID desc`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any): void => {
        if (res.error) {
           this.setState({
             loading: false,
             errorMessage: res.error.message,
              });
          return;
        }
        if (res.value.length === 0) {
          this.setState({
            loading: false,
            noDataUnlock:1
          });
          return;
        }
        let createdDateFormat = new Date('').toLocaleDateString();
        this.setState({
          ticketCount:res.value.length,
          deptDetails:res.value.map((r,index)=>{
            return{
              ticketNumber:`INC_${r.Department}_000${r.ID}`,
              supportDeptName:r.DepartmentGroup,
              raisedBy:r.Author.Title,
              issueDate:r.Created,
              description:r.Description,
              category:r.Category,
              department:r.Department,
              status:r.Status,
              dispatcherDeptName:r.AssignedTo,
              reAssignedTo:r.ReAssignTo,
              dataId:r.ID,
              comment:r.Comment,
              authorId:r.AuthorId,
              // attachmentFileName:r.AttachmentFiles.length?r.AttachmentFiles[0].FileName:'',
              // getAttachmentData:r.AttachmentFiles.length?r.AttachmentFiles[0].ServerRelativeUrl:'',
              // dispatcherAttachmentFileName:(r.AttachmentFiles.length === 2)?r.AttachmentFiles[1].FileName:'',
              // dispatcherGetAttachmentData:(r.AttachmentFiles.length === 2)?r.AttachmentFiles[1].ServerRelativeUrl:'',
              attachmentFileName:r.AttachmentFiles.map((r,i)=>{
                return{
                FileName:r.FileName,
                ServerRelativeUrl:r.ServerRelativeUrl
                }
              }),
              getAttachmentData:r.AttachmentFiles.length?r.AttachmentFiles[0].ServerRelativeUrl:'',

            }
          }) 
        })
  
    if(this.state.deptDetails.length>0){
    this.setState({
      loading:false,
      noDataUnlock:0
    })
    }
  }, (error: any): void => {
    // An error has occurred while loading the data. Notify the user
    // that loading data is finished and return the error message.
    this.setState({
      loading: false,
      errorMessage: error
    });
  })
  .catch((error: any): void => {
    // An exception has occurred while loading the data. Notify the user
    // that loading data is finished and return the exception.
    this.setState({
      loading: false,
      errorMessage: error
    });
  });
 }

   private allAssignToListInfo():void{
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items?$select=*,Author/Title,ReAssignTo/Title,AttachmentFiles&$expand=Author,ReAssignTo,AttachmentFiles&$filter=ReAssignToId eq ${this.props.currentUserId}&$orderby=ID desc`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any): void => {
        if (res.error) {
           this.setState({
             loading: false,
             errorMessage: res.error.message,
              });
          return;
        }
        if (res.value.length === 0) {
          this.setState({
            loading: false,
            noAllDataUnlock:1
          });
          return;
        }
        let createdDateFormat = new Date('').toLocaleDateString();
        this.setState({
          // ticketCount:res.value.length,
          allDetails:res.value.map((r,index)=>{
            return{
              ticketNumber:`INC_${r.Department}_000${r.ID}`,
              supportDeptName:r.DepartmentGroup,
              raisedBy:r.Author.Title,
              issueDate:r.Created,
              description:r.Description,
              category:r.Category,
              department:r.Department,
              status:r.Status,
              dispatcherDeptName:r.AssignedTo,
              reAssignedTo:r.ReAssignTo,
              dataId:r.ID
            }
          }) 
        })

  
    if(this.state.allDetails.length>0){
    this.setState({
      loading:false,
      noAllDataUnlock:0
    })   
    }
  }, (error: any): void => {
    this.setState({
      loading: false,
      errorMessage: error
    });
  })
  .catch((error: any): void => {
    this.setState({
      loading: false,
      errorMessage: error
    });
  });
 }


   private loadDepartmentOptionsByGroupName(groupName):Promise<IDropdownOption[]>{
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    return this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/sitegroups/GetByName('${groupName}')/Users?`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any) => {
        var groupUser:IDropdownOption[]=res.value.map((r,index)=>{
          return{
            text:r.Title,
            id:r.Id
          }
        })
      return Promise.resolve(groupUser);
  }) 
  
   }





  onBackButtonClick(){
      this.setState({
        // loadPeoplePicker:0,
        homeButton:0
      })  
  }

   onSubmitDropDownHandle(commentData:string,idRequest:number,assignedToUser,ticketNumberCheck){
  //  await this.setState({
  //     newPeoplePickerUser: newPeoplePicker[0].text
  //     //loadPeoplePicker:0
  //       },()=> this.addReAssignedToData(this.state.newPeoplePickerUser,idRequest))
        if(this.state.deleteSelectedTicket === ticketNumberCheck){
          if(assignedToUser.text != ''){
            this.setState({
              assignedNotification:1
            })
            this.addReAssignedToData(assignedToUser,idRequest,commentData);
          }
          if(assignedToUser.text === '' && (this.state.statusCompletedCheck === 2) ){
            this._sendCompletedStatusTeamsMessage(this.state.eMailId,ticketNumberCheck);
            this.setState({
              assignedNotification:1
            })
            this.loadCompletedWithStatusUpdate(idRequest,commentData)
          }

      } 
  }



  addReAssignedToData(newReAssignedToUser:any,idRequest:number,commentData:string){
      console.log("newReAssignedToUser = " + newReAssignedToUser + idRequest);
      console.log("newReAssignedToUser = " + newReAssignedToUser);
      this.getEmail(newReAssignedToUser.id);
      const headers: HeadersInit = new Headers();
      // suppress metadata to minimize the amount of data loaded from SharePoint
      headers.append("accept", "application/json;odata.metadata=none");
      this.props.spHttpClient
        .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items('${idRequest}')?$select=*,ReAssignTo/Id&$expand=ReAssignTo`,
        SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((res: SPHttpClientResponse): Promise<any> => {
          return res.json();
        })
        .then((res: any): void => {
          if (res.error) {
             this.setState({
               loading: false,
               errorMessage: res.error.message,
                });
            return;
          }
          if (res.value == 0) {
            this.setState({
              loading: false
            });
            return;
          }

          const spOpts: string = JSON.stringify({
            'Status': "In Process",
            'ReAssignToId': newReAssignedToUser.id,
            'Comment':commentData
                // 'Comment': 'Comment is working'
                // OnOffBoardTask:1
          })
      
          this.props.spHttpClient.post(`${this.props.webUrl}/_api/web/lists/GetByTitle('EmpReq')/items(${res.Id})`, SPHttpClient.configurations.v1, 
          {
            headers: {  
              'Accept': 'application/json;odata=nometadata',  
              'Content-type': 'application/json;odata=nometadata',  
              'odata-version': '',  
              'IF-MATCH': '*',  
              'X-HTTP-Method': 'MERGE',
              // "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },  
            body:spOpts
          })
              .then((response: SPHttpClientResponse) => {
                // Access properties of the response object. 
                console.log(`Status code: ${response.status}`);
                console.log(`Status text: ${response.statusText}`);
                
                //response.json() returns a promise so you get access to the json in the resolve callback.

              })
                .then((responseJSON: any) => {
                  var items = this.state.deptDetails.filter(item=> item.dataId !==idRequest);
                  this._sendReAssignedTeamsMessage(this.state.eMailId);
                  this.setState({
                    deptDetails:items,
                    deptListDropDown:[],
                    ticketCount: this.state.ticketCount - 1,
                    passAssignedToUser:{
                      id:null,
                      text:''
                    },
                    statusCompletedCheck:0,
                    statusOptions:[],
                    commentData:'',
                    assignedNotification:0
                  })
                  // console.log(responseJSON);
                  // this.myIssue();
                });


    }, (error: any): void => {
      this.setState({
        loading: false,
        errorMessage: error
      });
    })
    .catch((error: any): void => {
      this.setState({
        loading: false,
        errorMessage: error
      });
      });
  }

  _sendReAssignedTeamsMessage=async(ToEmailId: string)=>{
    let eMailTest = 'vrushali@gns11.onmicrosoft.com';
    let message = 'Ticket has been reassigned to you!';
    let currentUserId = await this.state.msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await this.state.msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await this.state.msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);
    await this.state.msGraphProvider.sendMessage(chatOfUser, message)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });    
  }

  _sendCompletedStatusTeamsMessage=async(ToEmailId: string,ticketNumberCheck)=>{
    let eMailTest = 'vrushali@gns11.onmicrosoft.com';
    let message = `Notification from Departmental Request Application:   The request <${ticketNumberCheck}> you created has been marked as complete.`;
    let currentUserId = await this.state.msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await this.state.msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await this.state.msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);
    await this.state.msGraphProvider.sendMessage(chatOfUser, message)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });    
  }

  loadCompletedWithStatusUpdate(idRequest:number,commentData:string){
    console.log("newReAssignedToUser =  " + idRequest);
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items('${idRequest}')?$select=*,ReAssignTo/Id&$expand=ReAssignTo`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any): void => {
        if (res.error) {
           this.setState({
             loading: false,
             errorMessage: res.error.message,
              });
          return;
        }
        if (res.value == 0) {
          // No results were found. Notify the user that loading data is finished
          this.setState({
            loading: false
          });
          return;
        }

        const spOpts: string = JSON.stringify({
          'Status': "Completed",
          'Comment':commentData,
          // 'ReAssignToId': newReAssignedToUser.id
              // 'Comment': 'Comment is working'
              // OnOffBoardTask:1
        })
    
        this.props.spHttpClient.post(`${this.props.webUrl}/_api/web/lists/GetByTitle('EmpReq')/items(${res.Id})`, SPHttpClient.configurations.v1, 
        {
          headers: {  
            'Accept': 'application/json;odata=nometadata',  
            'Content-type': 'application/json;odata=nometadata',  
            'odata-version': '',  
            'IF-MATCH': '*',  
            'X-HTTP-Method': 'MERGE',
            // "X-RequestDigest": $("#__REQUESTDIGEST").val()
          },  
          body:spOpts
        })
            .then((response: SPHttpClientResponse) => {
              // Access properties of the response object. 
              console.log(`Status code: ${response.status}`);
              console.log(`Status text: ${response.statusText}`);
              
              //response.json() returns a promise so you get access to the json in the resolve callback.

            })
              .then((responseJSON: any) => {
                var items = this.state.deptDetails.filter(item=> item.dataId !==idRequest);
                this.setState({
                  deptDetails:items,
                  deptListDropDown:[],
                  ticketCount: this.state.ticketCount - 1,
                  passAssignedToUser:{
                    id:null,
                    text:''
                  },
                  statusCompletedCheck:0,
                  statusOptions:[],
                  commentData:'',
                  assignedNotification:0
                })
                // console.log(responseJSON);
                // this.myIssue();
              });


  }, (error: any): void => {
    this.setState({
      loading: false,
      errorMessage: error
    });
  })
  .catch((error: any): void => {
    this.setState({
      loading: false,
      errorMessage: error
    });
    });
}


  getUserByDept(control,reAssignTo,department,idNumber){
    grpName= department;
    // this.loadDepartmentOptions();
    console.log("reAssignTo = " + reAssignTo);
    if(this.state.statusCompletedCheck === 1) {
    this.loadDepartmentOptionsByGroupName(department)
    .then(
      data=>{
          console.log(data);
          this.setState({
            deptListDropDown:data,
            idSelect:idNumber
          },()=>console.log(this.state.deptListDropDown[0].id))
      }
    )
  }
  else
  {
    this.setState({
      deptListDropDown:[]
    })
  }
  
  }

  loadStatusList(){
    this.setState({
      statusOptions:[
        {key:1, text:'In Process'},
        {key:2, text:'Completed'},
      ]
    })
  }

  onStatusChangeHandle(selectedStatus,ticketNumber,department,idNumber,authorId){
        console.log(selectedStatus,ticketNumber);
        if(selectedStatus.text === 'Completed'){
          this.getEmail(authorId);
          this.setState({
            deptListDropDown:[],
            statusCompletedCheck:2,
            deleteSelectedTicket:ticketNumber,
            passAssignedToUser:{
              id:null,
              text:''
            }
          })
        }
        if(selectedStatus.text === 'In Process'){
          this.loadDepartmentOptionsByGroupName(department)
          .then(
            data=>{
              this.setState({
                deptListDropDown:data,
                idSelect:idNumber,
                statusCompletedCheck:1,
                deleteSelectedTicket:ticketNumber
              })
            }
          )
        }
  }

  private getEmail = (userId) => {
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/getuserbyid(${userId})`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any): void => {
        if (res.error) {
           this.setState({
             loading: false,
             errorMessage: res.error.message,
              });
          return;
        }
        else{
          this.setState({
            eMailId: res.Email
          })
          return res.Email;
        }

      },(error: any): void => {
        this.setState({
          loading: false,
          errorMessage: error
        });
      })
      .catch((error: any): void => {
        this.setState({
          loading: false,
          errorMessage: error
        });
      });
  }

  onCommentHandle(e:any,commentData:any){
    // let val = e.target;
    this.setState({
      // commentData: await commentData._targetInst.pendingProps.value,
      //  commentData: await commentData.nativeEvent.data,
          commentData:commentData
    },()=>console.log('commentData= ' + this.state.commentData))
  }

    inputComment(event){
    // alert("current value = " + textInput.current.value);
    // event.preventDefaulted();

    this.setState({
      commentData:event.target.value,
    },()=>console.log('commentData = ' + this.state.commentData));
    // event.target.value = ''
    // event.preventDefaulted();
    event.target.checked = true;

  }

  onSubmitHandle(){
    this.setState({
      // loadPeoplePicker:0
    })
  }

  homeButtonClick(){
    this.setState({
      homeButton:1,
    })
  }

  assignedIssuesButton(){
      this.setState({
        assignedIssuesButton:1,
        allIssuesButton:0
      })
  }

  allAssignedIssuesButton(){
    this.setState({
      allIssuesButton:1,
      assignedIssuesButton:0
    });
    // this.allAssignToListInfo();
  }

  onUserSelect(userName,selectedName, ticketNumber){
    this.setState({
      passAssignedToUser:selectedName,
      deleteSelectedTicket:ticketNumber
    },()=> console.log(this.state.passAssignedToUser.id))
    console.log(userName,selectedName);

  }

  onTextFieldClickHandle(ticketNumber){
      // textInput.current.focus();
    this.setState({
      indexSelect:ticketNumber
    })
  }

  public render(): React.ReactElement<IAssignProps> {
  return (
    <div className={styles.assignedToView}>
      {(this.state.homeButton === 0) &&
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-lg4 ms-sm4">
             <Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
          </div>
          <div className="ms-Grid-col ms-lg4 ms-sm4">
          <TooltipHost
             content="Tickets"
          ><Icon iconName='Assign' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.assignedIssuesButton()} ></Icon>
          </TooltipHost>             
          </div>
          <div className="ms-Grid-col ms-lg4 ms-sm4">
          <TooltipHost
             content="All"
          ><Icon iconName='ViewAll' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.allAssignedIssuesButton()} ></Icon>
          </TooltipHost>
          </div>
        </div>
      { (this.state.assignedIssuesButton === 1) && (this.state.allIssuesButton === 0) && (this.state.noDataUnlock === 0) &&
      <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-lg12 ms-sm12">
      <div style={{overflowX:'auto'}}>
      <table className={styles.tableSet} >
          <thead>
            <tr>
              <th>Ticket Number</th>
              <th>Raised By</th>
              <th>Issue Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Action</th>
              <th>Attachment from Requester</th>
              <th>Attachment from Dispatcher</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
             this.state.deptDetails.map((res,index)=>{
             var issuedDate = new Date(res.issueDate).toLocaleDateString();
                return(
                  <tr
                  //  onClick={()=>this.loadNewGrpName(res.supportDeptName,res.dataId)} 
                  //  key={index}
                   >
                    <td>{res.ticketNumber}</td>
                    <td>{res.raisedBy}</td>
                    <td>{issuedDate}</td>
                    <td>{res.description}</td>
                    <td>{res.category}</td>
                    <td id={`${index}`}>
                    {/* <Stack horizontal styles={stackStyles}>
                      <TextField multiline rows={3}
                          
                        // defaultValue={null}  
                        itemRef={textInput} 
                          
                        // ref={this.textInput}
                        // type='text' 
                        // onClick={()=>this.onTextFieldClickHandle()} 
                        // target={`${index}`}    
                        onClick={(commentData)=>{
                          
                        }}         
                        //  value={textInput.current.value}
                        onChange={(e,commentData)=> this.onCommentHandle(e,commentData)}
                      
                        
                        // onChange={(commentTextEntered)=>{
                        //   this.setState({
                        //     commentData: commentTextEntered.currentTarget.value
                        //   })
                        // }}
                      />
                    </Stack> */}
                    <Stack horizontal styles={stackStyles}>
                     <TextField multiline rows={3}
                      key={index}
                      // ref={textInput}
                      type="text"
                      // accessKey={res.ticketNumber}
                      onClick={()=>this.onTextFieldClickHandle(res.dataId)}
                       defaultValue=""
                       value={
                        (this.state.indexSelect === res.dataId)?
                        this.state.commentData:''}
                       onChange={this.inputComment}
                     ></TextField>    
                     </Stack>
                    {/* <button onClick={()=>this.onTextFieldClickHandle(res.dataId)}>focus click</button> */}
                    </td>
                    <td>
                      <Dropdown
                        placeholder='Select Status'
                       label={'Status'}
                        options={this.state.statusOptions}
                         defaultSelectedKey={" "}
                        onClick={()=>this.loadStatusList()}
                        onChange={(e,selectedStatusOption)=>this.onStatusChangeHandle(selectedStatusOption,res.ticketNumber,res.supportDeptName,res.dataId,res.authorId)}
                      >
                      </Dropdown>

                      <Dropdown
                       id={res.ticketNumber + '_dropDown'} 
                       placeholder='Select User'
                       label={'ReAssigned To'}
                       defaultSelectedKey={" "}
                      onClick={(e)=>this.getUserByDept(res.ticketNumber + '_dropDown',this,res.supportDeptName,res.dataId)} 
                      options={this.state.deptListDropDown}
                      onChange={(e,selectedName)=>this.onUserSelect(e,selectedName,res.ticketNumber)}>
                      </Dropdown>
                    </td>

                    <td>
                      {
                        res.attachmentFileName.map((r,i)=>{
                          if(r.FileName.substring(0,3) === "REQ"){
                          // if (list[i].substring(0,4) == "bird")
                          return(
                            <a href={r.ServerRelativeUrl}> {r.FileName}</a>
                          )
                          }
                        })
                      
                      }
                    </td>
        
                    <td>
                    {
                        res.attachmentFileName.map((r,i)=>{
                          if(r.FileName.substring(0,4) === "DISP"){
                          // if (list[i].substring(0,4) == "bird")
                          return(
                            <a href={r.ServerRelativeUrl}> {r.FileName}</a>
                          )
                          }
                        })
                      
                      }
                      {/* <a href={res.dispatcherGetAttachmentData}> {res.dispatcherAttachmentFileName}</a> */}
                    </td>
                    <td>
                    <Icon iconName="Save" style={{fontSize:'20px', cursor:'pointer'}} onClick={(e)=>this.onSubmitDropDownHandle(this.state.commentData,res.dataId,this.state.passAssignedToUser,res.ticketNumber)}></Icon>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
          </table>
         </div>
        </div>
        <ToastContainer/>
      {
        (this.state.assignedNotification === 1) &&
        Logger.writeJSON("Ticket assigned",LogLevel.Info)
      } 
      </div> 
      }

      {(this.state.assignedIssuesButton === 1) && (this.state.allIssuesButton === 0) && (this.state.noDataUnlock === 1) &&
        <div className="ms-Grid">
         <div className="ms-Grid-row">
           <h4>No Data to be Displayed</h4>
         </div>
        </div>
      }

      {
        (this.state.allIssuesButton === 1) && (this.state.assignedIssuesButton === 0) && (this.state.noAllDataUnlock === 0) &&
        <AllAssignedToView emailType={this.props.emailType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl}  currentUserId={this.props.currentUserId} deptBelongingNames={[]}/>
         
      }

      {(this.state.assignedIssuesButton === 0) && (this.state.allIssuesButton === 1) && (this.state.noAllDataUnlock === 1) &&
        <div className="ms-Grid">
         <div className="ms-Grid-row">
           <h4>No Data to be Displayed</h4>
         </div>
        </div>
      }
         
    </div>
  }
  {/* {
    (this.state.homeButton === 0) &&
    <div className="ms-Grid">
       <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-lg12">
             <Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
          </div>
        </div>
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-lg12">
        <h2>Hurry!! no tickets left</h2>
        <Icon iconName="Emoji2" style={{fontSize:'60px'}} />
      </div>
    </div>  
  </div>
  } */}

  {(this.state.homeButton === 1) &&
              <DepartmentalRequest webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} emailType={this.props.emailType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl}  currentUserId={this.props.currentUserId}/>
  }
    </div>
  );
}
}

