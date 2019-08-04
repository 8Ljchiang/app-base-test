import { mainRoutes } from '../components/modules/root/root.routes';

export interface ApplicationStore {
  routeSets: { [key: string]: { routeDefs: any[], rootPath: string } },
}

export const defaultApplicationStore: ApplicationStore = {
	routeSets: {
    RootModule: {
      rootPath: '/',
      routeDefs: mainRoutes,
    }
  },
}
