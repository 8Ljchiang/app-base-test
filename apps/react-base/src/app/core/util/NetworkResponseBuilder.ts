import { INetworkResponse } from './../interfaces/INetworkResponse';

export class NetworkResponseBuilder {
	static build<T>(data: T, errors: string[]): INetworkResponse<T> {
		return {
			data,
			errors,
		}
	}
}
