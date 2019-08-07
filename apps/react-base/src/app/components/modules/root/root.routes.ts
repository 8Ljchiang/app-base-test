import { ConnectedReduxNavigator } from './../../units/ReduxNavigator';
import { FaultComponent } from './../../units/Fault';
import { LoginModule } from './../login/login.module';
import { FeedbackModule } from './../feedback/feedback.module';
import { ChildModule } from './../child/child.module';
import { AppFeature } from './../../../core/configs/feature.config';
import { AccountModule } from './../account/account.module';
import { ConnectedProfile } from './../../pages/Profile';
import { LoomModule } from './../loom/loom.module';
import { ConnectedLogin } from '../login/Login';
import { Gateway } from './../../pages/Gateway';
import { Gateway2 } from './../../pages/Gateway2';
import { Gateway3 } from '../../pages/Gateway3';

 // Set 'exact' to false if there are child routes, or module has routes.

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: LoginModule,
    // component: ConnectedLogin,
  },
  {
    name: 'Profile',
    path: '/account',
    exact: true,
    component: AccountModule,
    featureLink: AppFeature.ACCOUNT,
  },
  {
    name: 'Gateway 2',
    path: '/gateway2',
    exact: true,
    component: Gateway2,
    featureLink: AppFeature.GATEWAY2,
  },
  {
    name: 'Gateway',
    path: '/gateway',
    exact: true,
    component: Gateway3,
    featureLink: AppFeature.GATEWAY,
  },
  {
    name: 'Loom',
    path: '/loom',
    exact: false,
    component: LoomModule,
    featureLink: AppFeature.LOOM,
  },
  {
    name: 'Feedback',
    path: '/feedback',
    exact: true,
    component: FeedbackModule,
    featureLink: AppFeature.FEEDBACK,
  },
  {
    name: 'Fault',
    path: '/fault',
    exact: true,
    component: FaultComponent,
    featureLink: AppFeature.TEST_FAULT,
  },
  {
    name: 'Navigation',
    path: '/nav',
    exact: true,
    component: ConnectedReduxNavigator,
    featureLink: AppFeature.TEST_NAV,
  }
  // {
  //   name: 'Sub Module',
  //   path: '/child-module',
  //   exact: false,
  //   component: ChildModule,
  // }
]
