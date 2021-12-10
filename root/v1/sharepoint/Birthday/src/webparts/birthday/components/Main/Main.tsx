import * as React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import styles from '../Birthday.module.scss';
import BirthdayForTeams from '../Main/BirthdayForTeams';
import Birthday from '../Main/Birthday';

export const UserContext = React.createContext(null);

const Main = (props)=> {
    return (
        <div className={styles.birthday}>
            <HashRouter>
                <UserContext.Provider value={...props}>
                    <Switch>
                        { props.webPartContext.sdks.microsoftTeams &&
                            <Route exact path="/birthdayforteams" component={() => <BirthdayForTeams />}/>
                        }
                        { !props.webPartContext.sdks.microsoftTeams &&
                            <Route exact path="/birthday" component={(props)=><Birthday {...props}/>}/>   
                        }           
                    </Switch>
                </UserContext.Provider>
            </HashRouter>
        </div>
    )
}

export default Main




