import React, { Component } from 'react';
import { ModuleRootComponent, ConnectedModuleRoot } from '../../structural/module-root';
import { mainRoutes } from './root.routes';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { RouteLinks, ConnectedRouteLinks } from '../../units/RouteLinks';
import { ViewPortLayout } from '../../layouts/ViewPortLayout';
import { ConnectedReduxNavigator } from '../../units/ReduxNavigator';
import { ExpFeedbackFrameScene } from '../../scenes/exp-feedback-frame.scene';
import { AppProjectPlan } from '../../units/project-plan.component';
import { SiteElementKey } from '../../units/site-element-key.component';
interface IModuleComponentProps {
  moduleName: string;
  routes: any[];
  fallback: any;
}

export class RootModule extends Component<any, any> {
  render() {
    return (
      <ViewPortLayout>
        {/* <ExpFeedbackFrameScene> */}
          <ConnectedModuleRoot
            moduleName={'RootModule'}
            rootPath={''}
            noMatch={NotFound}
            routes={mainRoutes}
            fallback={DefaultErrorFallback}>
            {/* <h1>Root Module Component</h1> */}
            {/* <div style={styles.linkContainer}>
              <p>Root Module:</p>
              <ConnectedRouteLinks routes={mainRoutes}/>
            </div> */}
            <div style={styles.headerContainer}>
              {/* <div style={styles.siteFeedbackButton}>Site Feedback</div> */}
              <SiteElementKey/>
              <AppProjectPlan />
              <ConnectedReduxNavigator/>

            </div>
          </ConnectedModuleRoot>
          {/* <div className="frame__action-container">
            <div className="action-container">
              Profile
            </div>
            <div className="action-container">
              Modules
            </div>
            <div className="action-container">
              Announcements
            </div>
            <div className="action-container">
              Roadmap
            </div>
            <div className="action-container">
              App Feedback
            </div>
          </div> */}
        {/* </ExpFeedbackFrameScene> */}
      </ViewPortLayout>
    );
  }
}

const styles = {
  headerContainer: {
    position: 'absolute',
    top: '30px',
    right: '190px',
    display: 'flex',
    zIndex: 100
  },
  // siteFeedbackButton: {
  //   background: 'pink',
  //   border: '4px solid white',
  //   boxShadow: '0 0 8px 4px rgba(30, 30, 30, 0.5)',
  //   padding: '3px',
  //   maxHeight: '30px',
  //   marginRight: '14px'
  // },
  reduxNavContainer: {
    display: 'flex',
    flexFlow: 'column',
    background: 'rgba(255,255,255,0.6)',
    // border: '3px dotted gray',
    boxShadow: '0 0 8px 4px rgba(30, 30, 30, 0.5)',
    border: '4px solid pink',
    zIndex: 100,
  },
  linkContainer: {
    display: 'flex'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}
