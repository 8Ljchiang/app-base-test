import { LoomCommunityDashboard } from './loom-community-dashboard.component';
import { LoomCommunityActivities } from './loom-community-activities.component';
export const loomCommunityRoutes = [
  {
    path: '/dashboard',
    exact: true,
    component: LoomCommunityDashboard,
  },
  {
    path: '/activities',
    exact: true,
    component: LoomCommunityActivities,
  },
]
