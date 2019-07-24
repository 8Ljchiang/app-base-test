export interface IMapFns<T, E, TResult, EResult> {
	success: (a: T) => TResult;
	failure: (e: E) => EResult;
}

export class Result<TSuccess, TError> {
	static Success<T>(success: T) {
		return new Result<T, any>(success, null, false);
	}

	static Failure<T>(error: T) {
		return new Result<any, T>(null, error, true);
	}

	constructor(
		private success: TSuccess,
		private error: TError,
		private _hasFault: boolean,
	) {}

	get hasError() {
		return this._hasFault;
	}

	getError() {
		return this.error;
	}

	getSuccess() {
		return this.success;
	}

	when<T, E>(mapFns: IMapFns<TSuccess, TError, T, E>) {
		return this.hasError
		? mapFns.failure(this.error)
		: mapFns.success(this.success);
	}
}
