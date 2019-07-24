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

export function catchErrorInReduxReducer(func: (initialState: any, funcArgs: any) => any, failureResponse: any, errorContext: string): (state: any, args: any) => any {
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
