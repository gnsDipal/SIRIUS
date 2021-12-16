import * as React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import styles from '../Birthday.module.scss';
import BirthdayForTeams from '../Main/BirthdayForTeams';
import Birthday from '../Main/Birthday';

export const UserContext = React.createContext(null);

debugger;
const Main = (props)=> {
    return (
        <div className={styles.birthday}>
            <HashRouter>
                <UserContext.Provider value={...props}>
                    <Switch>
                        { props.webPartContext.sdks.microsoftTeams &&                            
                            <div>
                                <Route exact path="/birthdayforteams" component={() => <BirthdayForTeams />}/> 
                                <Route exact path="">
                                    <div>
                                        <BirthdayForTeams />                            
                                    </div>
                                </Route>
                            </div> 
                        }
                        { !props.webPartContext.sdks.microsoftTeams &&
                            <div>
                                <Route exact path="/birthday" component={() => <BirthdayForTeams />}/> 
                                <Route exact path="">
                                    <div>
                                        <BirthdayForTeams />                            
                                    </div>
                                </Route>
                            </div>  
                        }                       
                    </Switch>
                </UserContext.Provider>
            </HashRouter>
        </div>
    )
}

export default Main