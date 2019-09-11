import { FeedbackListScene } from './../../scenes/feedback-list.scene';
import { ExpFeedbackFrameScene } from './../../scenes/exp-feedback-frame.scene';
import { AppAnnouncementsScene } from './../../scenes/app-announcements.scene';
import { GatewayScene } from './../../scenes/gateway.scene';
import { WelcomeScene } from './../../scenes/welcome.scene';
import { ConnectedSignup } from './../../pages/Signup';
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
import { ForgeModule } from '../forge/forge.module';
import { AppRoadmapScene } from '../../scenes/app-roadmap.scene';

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
    name: 'Gateway 3',
    path: '/gateway3',
    exact: true,
    component: Gateway3,
    featureLink: AppFeature.GATEWAY,
  },
  {
    name: 'Gateway',
    path: '/gateway',
    exact: true,
    component: GatewayScene,
  },
  {
    name: 'Loom',
    path: '/loom',
    exact: false,
    component: LoomModule,
    featureLink: AppFeature.LOOM,
  },
  {
    name: 'Forge',
    path: '/forge',
    exact: false,
    component: ForgeModule,
    featureLink: AppFeature.FORGE,
  },
  {
    name: 'Feedback',
    path: '/feedback',
    exact: true,
    component: FeedbackModule,
    featureLink: AppFeature.FEEDBACK,
  },
  {
    name: 'Feedback List',
    path: '/feedback-list',
    exact: true,
    component: FeedbackListScene,
    featureLink: AppFeature.FEEDBACK_LIST,
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
  },
  // {
  //   name: 'Welcome',
  //   path: '/welcome',
  //   exact: true,
  //   component: WelcomeScene,
  // },
  {
    name: 'Roadmap',
    path: '/roadmap',
    exact: true,
    component: AppRoadmapScene
  },
  {
    name: 'Announcements',
    path: '/announcements',
    exact: true,
    component: AppAnnouncementsScene
  },
  // {
  //   name: 'ExperimentalFrame',
  //   path: '/experimental',
  //   exact: true,
  //   component: ExpFeedbackFrameScene
  // }
  // {
  //   name: 'Sub Module',
  //   path: '/child-module',
  //   exact: false,
  //   component: ChildModule,
  // }
]
