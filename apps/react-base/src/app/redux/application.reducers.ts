import { catchErrorInReduxReducer } from '../core/util/error-catchers';
import { RouteSetInfo, ApplicationActions, ApplicationActionType } from './application.actions';
import { ApplicationStore, defaultApplicationStore } from './application.store';

const reducerName = 'ApplicationReducer';

const addRouteSet = (initialState: ApplicationStore, setInfo: RouteSetInfo) => {
  const newRouteSets = { ...initialState.routeSets };
  newRouteSets[setInfo.setKey] = { rootPath: setInfo.rootPath, routeDefs: setInfo.routeDefs }
  return Object.assign({}, initialState, { routeSets: newRouteSets });
}

const setRouteSets = (initialState: ApplicationStore, setInfo: RouteSetInfo) => {
  const newRouteSets = { [setInfo.setKey]: { rootPath: setInfo.rootPath, routeDefs: setInfo.routeDefs } };
  return Object.assign({}, initialState, { routeSets: newRouteSets });
}

export function applicationReducer(
	state: ApplicationStore = defaultApplicationStore,
  action: ApplicationActions
) {
	switch(action.type) {
    case ApplicationActionType.ADD_ROUTE_SETS:
      return catchErrorInReduxReducer(addRouteSet, state, `${reducerName}: ${action.type}`)(state, action.payload);
    case ApplicationActionType.SET_ROUTE_SETS:
      return catchErrorInReduxReducer(setRouteSets, state, `${reducerName}: ${action.type}`)(state, action.payload);
		default:
			return state;
	}
}
