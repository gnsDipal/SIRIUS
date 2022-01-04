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
          <div className={ styles.container }>
            <div className={ styles.row }>
              <div className={ styles.column }>
                <span className={ styles.title }>Welcome to SharePoint!</span>
                <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
                <p className={ styles.description }>{escape(this.props.description)}</p>
                <a href="https://aka.ms/spfx" className={ styles.button }>
                  <span className={ styles.label }>Learn more</span>
                </a>
                <ChildComponent1 />
              </div>
            </div>
          </div>
        </Provider>
      </div>
    );
  }
}
