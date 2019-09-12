import Log from '../services/log.service';
import { Result } from './Result';
import { INetworkResponse } from '../interfaces/INetworkResponse';

export function logResultErrorHoc(serviceFunction: (args: any) => Result<any, any>, errorContext: string): (args: any) => Result<any, any> {
	const newServiceFunction = (context: any) => {
		const serviceResult = serviceFunction(context);
		if (serviceResult && serviceResult.hasError) {
			Log.error(serviceResult.getError(), errorContext);
		}
		return serviceResult;
	}
	return newServiceFunction;
}

export function logNetworkResponseErrorHoc(networkFunction: (args: any) => INetworkResponse<any>, errorContext: string): (args: any) => INetworkResponse<any> {
	const newNetworkFunction = (context: any) => {
		const networkResult = networkFunction(context);
		if (networkResult && networkResult.errors && networkResult.errors.length > 0) {
			Log.error(new Error(networkResult.errors[0]), errorContext);
		}
		return networkResult;
	}
	return newNetworkFunction;
}

type BasicResolver = (initialState: any, funcArgs: any) => any;
type BasicResolverWithService = (initialState: any, funcArgs: any, services?: any) => any;
type CombinedResolverType = BasicResolver | BasicResolverWithService;

export function catchErrorInReduxReducer(func: BasicResolverWithService, failureResponse: any, errorContext: string): BasicResolverWithService {
	const newFunction = (state: any, args: any) => {
		try {
			return func(state, args);
		} catch (err) {
			Log.error(err, errorContext);
			return failureResponse;
		}
	}
	return newFunction;
}
