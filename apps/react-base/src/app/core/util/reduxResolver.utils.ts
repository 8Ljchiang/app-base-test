import Log from '../services/log.service';

type ResolverWithService = (initialState: any, payload: any, postsService: any) => any;

export const resolverWithLogging = (resolver: ResolverWithService, rName: string, aCategory: string, aType: string): ResolverWithService => {
  return function(initialState: any, payload: any, services: any) {
    Log.info(aCategory, aType, rName)
    return resolver(initialState, payload, services);
  }
}

export function createLogContext(name: string, reducerActionType: any) {
  return `${name}: ${reducerActionType}`;
}
