// DEFAULT INPORT
import * as React from 'react';
import styles from './ObjectiveAndGoal.module.scss';
import { IObjectiveAndGoalProps, IObjectivesGoalsState } from './IObjectiveAndGoalProps';
import { escape } from '@microsoft/sp-lodash-subset';

// REDUC IMPORT
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

// APPLICATION IMPORT
//import { IObjectiveAndGoalState } from './IObjectiveAndGoalState';
import RootReducer from "../store/reducer/RootReducer";
import { Icon } from '@fluentui/react/lib/Icon';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import MainContainer from '../store/containers/MainContainer';
import PanelSettings from './PanelSettings/PanelSettings';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';


const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;
initializeIcons();

export default class ObjectiveAndGoal extends React.Component<IObjectiveAndGoalProps, IObjectivesGoalsState> {
  private store: any; // Store<IObjectiveAndGoalState>

  public constructor(props: IObjectiveAndGoalProps, state:IObjectivesGoalsState) {
    super(props);
    this.store = createStore(RootReducer, compose(applyMiddleware(thunk, logger)));
    this.state = {  
      isSettingsPanelOpen:false,
    };        
  };

  componentDidMount(): void {
    console.log(this.props);
    // this.props.setSPContext(this.props.webPartContext);
  }

  private setIsSettingsPanelOpen()
  {  this.setState({
      isSettingsPanelOpen: !this.state.isSettingsPanelOpen
    });
  }

  public render(): React.ReactElement<IObjectiveAndGoalProps> {
    return (
      <div className={ styles.objectiveAndGoal }>
        <Provider store={this.store}>
          <div className={styles.description}>
              <h1 style={{margin:'0', float:'left'}}><MyObjectivesGoalsIcon/> Objectives and Goals </h1>
              <div className={styles.teamsSettings}>
                <TooltipHost content="Configure properties"><Icon iconName="Settings" onClick={() => { this.setIsSettingsPanelOpen() }} /></TooltipHost>
              </div > 
              {this.state.isSettingsPanelOpen &&
              <PanelSettings webPartContext={this.props.webPartContext} onClosePanel={() => { this.setIsSettingsPanelOpen();}} />
              }          
          </div>
          <MainContainer {...this.props} />
        </Provider>
      </div>
    );
  }
}
