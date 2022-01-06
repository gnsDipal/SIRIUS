// DEFAULT INPORT
import * as React from 'react';
import styles from './ObjectiveAndGoal.module.scss';
import { IObjectiveAndGoalProps } from './IObjectiveAndGoalProps';
import { escape } from '@microsoft/sp-lodash-subset';

// REDUC IMPORT
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

// APPLICATION IMPORT
import { IObjectiveAndGoalState } from './IObjectiveAndGoalState';
import RootReducer from "../store/reducer/RootReducer";
import { Icon } from '@fluentui/react/lib/Icon';
import MainContainer from '../store/containers/MainContainer';


const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;
export default class ObjectiveAndGoal extends React.Component<IObjectiveAndGoalProps> {
  private store: any; // Store<IObjectiveAndGoalState>

  public constructor(props: IObjectiveAndGoalProps) {
    super(props);
    this.store = createStore(RootReducer, compose(applyMiddleware(thunk, logger)));
  };

  componentDidMount(): void {
    console.log(this.props);
    // this.props.setSPContext(this.props.webPartContext);
  }

  public render(): React.ReactElement<IObjectiveAndGoalProps> {
    return (
      <div className={ styles.objectiveAndGoal }>
        <Provider store={this.store}>
          <div className={styles.description}>
              <h1 style={{margin:'0', float:'left'}}><MyObjectivesGoalsIcon/> Objectives and Goals </h1>
          </div>
          <MainContainer {...this.props} />
        </Provider>
      </div>
    );
  }
}
