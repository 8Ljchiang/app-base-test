import { LoomPersonalModule } from './loom-personal/loom-personal.module';
import { LoomCommunityModule } from './loom-community/loom-community.module';

export const loomRoutes = [
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
