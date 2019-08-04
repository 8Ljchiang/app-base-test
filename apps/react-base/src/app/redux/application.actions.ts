import { SignupInput } from './signup.actions';

export enum ApplicationActionType {
  SET_ROUTE_SETS = 'APP_SET_ROUTE_SETS',
  ADD_ROUTE_SETS = 'APP_ADD_ROUTE_SETS',
}

interface AppSetRouteSetsAction {
	type: ApplicationActionType.SET_ROUTE_SETS,
	payload: { setKey: string, rootPath: string, routeDefs: any[] }
}

interface AppAddRouteSetsAction {
	type: ApplicationActionType.ADD_ROUTE_SETS,
	payload: { setKey: string, rootPath: string, routeDefs: any[] }
}

export type ApplicationActions =
AppAddRouteSetsAction
  | AppSetRouteSetsAction;

export interface RouteSetInfo {
  setKey: string;
  rootPath: string;
  routeDefs: any[];
}

export function addRouteSets(input: RouteSetInfo) {
	return {
		type: ApplicationActionType.ADD_ROUTE_SETS,
		payload: input
	}
}

export function setRouteSets(input: RouteSetInfo) {
  return {
		type: ApplicationActionType.SET_ROUTE_SETS,
		payload: input
	}
}
