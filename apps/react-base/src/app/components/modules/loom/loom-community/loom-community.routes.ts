import { ConnectedPostsListScene } from './../../../scenes/posts-list.scene';
import { LoomCommunityCreatePairing } from './create-pairing-activity.component';
import { LoomCommunityProfiles } from './profiles.component';
import { LoomCommunityPosts } from './posts-component';
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
  {
    path: '/posts',
    exact: true,
    component: ConnectedPostsListScene
    // component: LoomCommunityPosts,
  },
  {
    path: '/profiles',
    exact: true,
    component: LoomCommunityProfiles,
  },
  {
    path: '/pairing-create',
    exact: true,
    component: LoomCommunityCreatePairing,
  },
]
