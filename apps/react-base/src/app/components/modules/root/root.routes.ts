import { AccountModule } from './../account/account.module';
import { ConnectedProfile } from './../../pages/Profile';
import { LoomModule } from './../loom/loom.module';
import { ConnectedLogin } from '../login/Login';
import { Gateway } from './../../pages/Gateway';

export const mainRoutes = [
  {
    path: '/',
    exact: true,
    component: ConnectedLogin,
  },
  {
    path: '/account',
    exact: true,
    component: AccountModule,
  },
  {
    path: '/gateway',
    exact: true,
    component: Gateway,
  },
  {
    path: '/loom',
    exact: true,
    component: LoomModule
  }
]
