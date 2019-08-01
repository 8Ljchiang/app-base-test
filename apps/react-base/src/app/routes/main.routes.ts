export const mainRoutes = [
  {
    path: '',
    exact: true,
    component: null,
    guards: ['roleGuard', 'authGuard', 'featureGuard']
    // TODO: Create checks for routing in reducer as well
    // - Check if a user is authenticated, if not cannot route.
    // - Check if a feature is available for user, if not user
    // - does not get to navigate to it, re-directed to home.
    // Also, do role based guiards when handing routes.
  }
]
