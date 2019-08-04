import { LoomPersonalModule } from './loom-personal/loom-personal.module';
import { LoomCommunityModule } from './loom-community/loom-community.module';
import { LoomDashboard } from './loom-dashboard.component';

export const loomRoutes = [
  {
    name: 'Welcome',
    path: '/dashboard',
    exact: 'true',
    component: LoomDashboard
  },
  {
    name: 'Personal',
    path: '/personal',
    exact: true,
    component: LoomPersonalModule,
  },
  {
    name: 'Community',
    path: '/community',
    exact: false,
    component: LoomCommunityModule,
  },
]
