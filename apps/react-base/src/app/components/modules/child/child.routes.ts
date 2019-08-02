import { ChildB } from './childB.component';
import { ChildA } from './childA.component';

export const childRoutes = [
  {
    path: '/child-a',
    exact: true,
    component: ChildA,
    guards: ['roleGuard', 'authGuard', 'featureGuard'],
    key: 'child-test-a',
  },
  {
    path: '/child-b',
    exact: true,
    component: ChildB,
    guards: ['roleGuard', 'authGuard', 'featureGuard'],
    key: 'child-test-b',
  }
]

