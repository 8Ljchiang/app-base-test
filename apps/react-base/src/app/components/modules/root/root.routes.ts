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
  },
  {
    name: 'Gateway',
    path: '/gateway',
    exact: true,
    component: Gateway,
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
    component: FeedbackModule
  },
  {
    name: 'Fault',
    path: '/fault',
    exact: true,
    component: FaultComponent
  }
  // {
  //   name: 'Sub Module',
  //   path: '/child-module',
  //   exact: false,
  //   component: ChildModule,
  // }
]
