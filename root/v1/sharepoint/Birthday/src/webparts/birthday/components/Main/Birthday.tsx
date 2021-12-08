import * as React from 'react'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router, Switch, Route,HashRouter,Link, useParams} from "react-router-dom";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import BirthdayUsers from '../Home/Birthday/BirthdayUsers';


export const UserContext = React.createContext(null);


const Main = (props) => {
  
    return (
        <div>
            <HashRouter>
                <UserContext.Provider value={props.webPartContext}>
              <Switch>

                <Route exact path="">
                  <div>
                    <BirthdayUsers {...props}/>
                  </div>
                </Route>
              </Switch>
              </UserContext.Provider>
            </HashRouter>
        </div>    
    )
}

export default Main