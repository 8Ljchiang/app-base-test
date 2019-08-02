import { ChildModule } from './../child/child.module';
import { TestC } from './test3.component';
import { TestB } from './test1.component';
import { TestA } from './test2.component';

export const testRoutes = [
  {
    path: '/',
    exact: true,
    component: TestA,
    guards: ['roleGuard', 'authGuard', 'featureGuard'],
    key: 'root-test-a',
    // TODO: Create checks for routing in reducer as well
    // - Check if a user is authenticated, if not cannot route.
    // - Check if a feature is available for user, if not user
    // - does not get to navigate to it, re-directed to home.
    // Also, do role based guiards when handing routes.
  },
  {
    path: '/root-b',
    exact: true,
    component: TestB,
    guards: ['roleGuard', 'authGuard', 'featureGuard'],
    key: 'root-test-b',
  },
  {
    path: '/root-c',
    exact: true,
    component: TestC,
    guards: ['roleGuard', 'authGuard', 'featureGuard'],
    key: 'root-test-c',
  },
  {
    path: '/child-module',
    exact: false,
    component: ChildModule,
    guards: ['roleGuard', 'authGuard', 'featureGuard'],
    key: 'root-test-child-module',
  },
  {
    path: '/first',
    exact: true,
    component: TestA,
    childRoutes: [
      {
        path: '/second-a',
        exact: true,
        component: TestA,
        key: 'first-second-a',
      },
      {
        path: '/second-b',
        exact: true,
        component: TestB,
        key: 'first-second-b',
      },
      {
        path: '/second-c',
        exact: true,
        component: TestC,
        key: 'first-second-b',
        childRoutes: [
          {
            path: '/third-a',
            exact: true,
            component: TestA,
            key: 'first-second-third-a',
          },
          {
            path: '/third-b',
            exact: true,
            component: TestB,
            key: 'first-second-third-b',
          },
        ]
      },
    ],
    guards: ['roleGuard', 'authGuard', 'featureGuard'],
    key: 'root-test-first',
  }
]
