// DEFAULT INPORT
import * as React from 'react';
import styles from './ObjectiveAndGoal.module.scss';
import { IObjectiveAndGoalProps } from './IObjectiveAndGoalProps';
import { escape } from '@microsoft/sp-lodash-subset';

// REDUC IMPORT
import { Store, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// APPLICATION IMPORT
import { IObjectiveAndGoalState } from './IObjectiveAndGoalState';
import RootReducer from "../store/reducer/RootReducer";
import { Icon } from '@fluentui/react/lib/Icon';
import Main from '../store/containers/Main';


const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;

export default class ObjectiveAndGoal extends React.Component<IObjectiveAndGoalProps> {
  private store: any; // Store<IObjectiveAndGoalState>

  public constructor(props: IObjectiveAndGoalProps) {
    super(props);
    this.store = createStore(RootReducer, applyMiddleware(thunk));
  };

  componentDidMount(): void {
    // this.props.setSPContext(this.props.webPartContext);
  }

  public render(): React.ReactElement<IObjectiveAndGoalProps> {
    return (
      <div className={ styles.objectiveAndGoal }>
        <Provider store={this.store}>
          <div className={styles.description}>
              <h1 style={{margin:'0', float:'left'}}><MyObjectivesGoalsIcon/> Objectives and Goals </h1>
          </div>
          <Main {...this.props} />
        </Provider>
      </div>
    );
  }
}
