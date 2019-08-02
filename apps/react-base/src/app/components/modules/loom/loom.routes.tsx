import { LoomProjectsPage } from './loom-projects.page';
import { LoomExercisesPage } from './loom-exercises.page';

export const loomRoutes = [
  {
    path: '/projects',
    exact: true,
    component: LoomProjectsPage,
  },
  {
    path: '/exercises',
    exact: true,
    component: LoomExercisesPage,
  }
]
