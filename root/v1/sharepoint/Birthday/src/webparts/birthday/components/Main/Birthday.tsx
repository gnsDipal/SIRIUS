import * as React from 'react'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router, Switch, Route,HashRouter,Link, useParams} from "react-router-dom";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import BirthdayUsers from '../Home/Birthday/BirthdayUsers';
import AnniversaryUsers from '../Home/Anniversary/AnniversaryUsers';

export const UserContext = React.createContext(null);

const Birthday = (props) => {
  
    return (
        <div>
          <HashRouter>
            <UserContext.Provider value={...props}>
              <Switch>
                <Route exact path="/birthday" component={()=><BirthdayUsers />}/>
                <Route exact path="/anniversary" component={()=><AnniversaryUsers />}/>
                <Route exact path="">
                  <div>
                    <BirthdayUsers/>
                  </div>+
                </Route>
              </Switch>
            </UserContext.Provider>
          </HashRouter>
        </div>    
    )
}

export default Birthday