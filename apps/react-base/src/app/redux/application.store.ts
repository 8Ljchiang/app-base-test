export interface AccountStore {
  routeSets: { [key: string]: { routeDefs: any[], rootPath: string } },
}

export const defaultApplicationStore: AccountStore = {
	routeSets: {},
}
