import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../../../components/Birthday.module.scss';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from '@fluentui/react/lib/Icon';
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField } from '@fluentui/react/lib/TextField';
import { Callout, DirectionalHint } from '@fluentui/react/lib/Callout';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import useMsGraphProvider from "../../../../../services/msGraphProvider";
import Carousel from 'react-elastic-carousel';
import InputEmoji from 'react-input-emoji';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import {
  Persona,
  PersonaSize
} from 'office-ui-fabric-react/lib/Persona';
import { UserContext } from '../../Main/Birthday';
import SPBirthdayAnniversaryServiceData from '../../../../../services/SPBirthdayAnniversaryServiceData';

initializeIcons();

const MyMailIcon = () => <Icon iconName="Mail" />;
const MyTeamsIcon = () => <Icon iconName="TeamsLogo" />;

let spBirthdayServiceData:SPBirthdayAnniversaryServiceData = undefined;
let Images: string[] = [];

const BirthdayUsers = (props) => {     
    const mainContext = useContext(UserContext);
    const [showCallOut, setShowCallOut] = useState(false);
    const [showCallOutTeams, setshowCallOutTeams] = useState(false);
    const [calloutElement, setCalloutElement] = useState(undefined);
    const [person, setPerson] = useState(undefined);
    const [currentMessage, setCurrentMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [msGraphProvider, setMsGraphProvider] = useState({
      getCurrentUserId(): Promise<any>{return},
      getUserId(userEmail: string): Promise<any>{return},
      createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>{return},
      sendMessage(chatId: string, chatMessage: string): Promise<any>{return}
    })
    useEffect(() => {         
      init();              
    },[]);

    const init = async() => {
        spBirthdayServiceData = new SPBirthdayAnniversaryServiceData(mainContext);   
        setMsGraphProvider(await useMsGraphProvider(props.webPartContext.msGraphClientFactory));         
        await spBirthdayServiceData.getBirthdayImagesdata()
        .then((res:any)=> {
            Images = [];
            for(let i=0; i<res.value.length; ++i)
            {
              Images.push(res.value[i].FileLeafRef);
            }
            setImages(Images);
        })       
    }

    return (
      <div>
        {!props 
        &&
          <div>
            <Placeholder 
              iconName = ''
              iconText = 'No Birthdays in this month.'
              description = ''/>
          </div>
        }
      </div>    
    )
}
export default BirthdayUsers
