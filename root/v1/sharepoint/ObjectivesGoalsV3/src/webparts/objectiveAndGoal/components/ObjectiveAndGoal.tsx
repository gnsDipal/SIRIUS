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
import ChildComponent1 from './child/ChildComponent1';
import { Icon } from '@fluentui/react/lib/Icon';
import TabHeader from './TabHeader/TabHeader';
import TabItem from './TabHeader/TabItem/TabItem';

const MyObjectivesGoalsIcon = () => <Icon iconName="GroupObject" className = {styles.objectivesGoalsIcon} />;

export default class ObjectiveAndGoal extends React.Component<IObjectiveAndGoalProps, IObjectiveAndGoalState> {
  private store: Store<IObjectiveAndGoalState>

  public constructor(props: IObjectiveAndGoalProps) {
    super(props);
    this.store = createStore(RootReducer, applyMiddleware(thunk));
  };
  public render(): React.ReactElement<IObjectiveAndGoalProps> {
    return (
      <div className={ styles.objectiveAndGoal }>
        <Provider store={this.store}>
          <div className={styles.description}>                        
              <h1 style={{margin:'0', float:'left'}}><MyObjectivesGoalsIcon/> Objectives and Goals </h1>
          </div>
          {/* <div className={ styles.container }>
            <div className={ styles.row }>
              <div className={ styles.column }>
                <span className={ styles.title }>Welcome to React-Redux</span>
                <p className={ styles.subTitle }>Implementation Redux.</p>
                <p className={ styles.description }>{escape(this.props.description)}</p>              
                
              </div>
            </div>
          </div>  */}
        {/* <ChildComponent1 /> */}
            <TabHeader/>
            <TabItem/>
        </Provider>
      </div>
    );
  }
}
