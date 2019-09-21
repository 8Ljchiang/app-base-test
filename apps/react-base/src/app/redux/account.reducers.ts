import { IServiceCollection } from './../core/services/service-collection';
import { IAccountServiceTwo } from './../core/services/mocks/mock-account2.service';
import { resolverWithLogging } from './../core/util/reduxResolver.utils';
import { AppFeature } from './../core/configs/feature.config';
import AccountService from '../core/services/mocks/mock-account.service';
import SignupService from '../core/services/mocks/mock-signup.service';
import Log from '../core/services/log.service';
import { AccountStore, defaultAccountStore } from './account.store';
import { LoginInput, AccountActions, AccountActionType, accountSignup } from './account.actions';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';
import { SignupInput } from './signup.actions';

const reducerName = 'AccountReducer';
const actionCategory = 'AccountAction';

const isAuthenticatedHoc = (resolverFunction: any, context?: string) => {
  const funcWithAuthenticationCheck = (initialState: AccountStore, payload: any) => {
    if (initialState.authToken) {
      return resolverFunction(initialState, payload);
    } else {
      Log.error(new Error('Not authenticated'), context);
      return initialState;
    }
  }
  return funcWithAuthenticationCheck;
}

const login = resolverWithLogging(
  (initialState: AccountStore, loginInput: LoginInput) => {
    const networkResponse = AccountService.login(loginInput);
    if (networkResponse.errors && networkResponse.errors.length > 0) {
      Log.error(new Error(networkResponse.errors[0]), `AccountService.login`);
    }
    const containsAccount = initialState.signups.map(e => e.displayIdentifier).indexOf(loginInput.displayIdentifier) !== -1;
    if (networkResponse.data && containsAccount) {
      const newState = Object.assign({}, initialState, networkResponse.data);
      return newState;
    }
    return initialState;
  },
  reducerName,
  actionCategory,
  AccountActionType.LOGIN
);

const logout = resolverWithLogging(
  (initialState: any, payload: any, service: any) => {
  	return Object.assign({}, defaultAccountStore);
  },
  reducerName,
  actionCategory,
  AccountActionType.LOGOUT
);

const signup = resolverWithLogging(
  (initialState: AccountStore, signupInput: SignupInput) => {
    Log.info('AccountSignupAction', AccountActionType.SIGNUP, 'AccountReducer')
    const networkResult = SignupService.signup(signupInput);
    if (networkResult.errors && networkResult.errors.length > 0) {
      Log.error(new Error(networkResult.errors[0]), `${reducerName}.signup`);
    }
    if (networkResult.data && networkResult.data.success) {
      return Object.assign({}, initialState, { signups: [...initialState.signups, signupInput] });
    }
    return initialState;
  },
  reducerName,
  actionCategory,
  AccountActionType.SIGNUP
);

const newInviteToken = resolverWithLogging(
  (initialState: AccountStore, payload: any, service: IAccountServiceTwo) => {
    const networkResult = AccountService.createInviteToken();
    if (networkResult.errors && networkResult.errors.length > 0) {
      Log.error(new Error(networkResult.errors[0]), `${reducerName}.createInviteToken`);
    }
    if (networkResult.data && networkResult.data.inviteToken) {
      return Object.assign({}, initialState, { inviteTokens: [...initialState.inviteTokens, networkResult.data.inviteToken] });
    }
    return initialState;
  },
  reducerName,
  actionCategory,
  AccountActionType.NEW_INVITE_TOKEN
);


const updateProfileStatus = resolverWithLogging(
  (initialState: AccountStore, payload: any, service: any) => {
    // const networkResult = AccountService.createInviteToken();
    // if (networkResult.errors && networkResult.errors.length > 0) {
    // 	Log.error(new Error(networkResult.errors[0]), `AccountService.updateProfileStatus`);
    // }
    // if (networkResult.data && networkResult.data.inviteToken) {
    // return Object.assign({}, initialState, { profile: { ...initialState.profile, status: payload } });
    // }
    if (payload === 'UPGRADED' && initialState.inviteTokens.length > 0 && !initialState.inviteTokens.includes(AppFeature.FEATURE_UNLOCK)) {
      return Object.assign({}, initialState, { featureKeys: [...initialState.featureKeys, AppFeature.FEATURE_UNLOCK], profile: { ...initialState.profile, status: payload } });
    } else {
      const newFeatureKeys = initialState.featureKeys.filter(fKey => fKey !== AppFeature.FEATURE_UNLOCK);
      return Object.assign({}, initialState, { featureKeys: newFeatureKeys, profile: { ...initialState.profile, status: payload } });
    }
    // return initialState;
  },
  reducerName,
  actionCategory,
  AccountActionType.UPDATE_PROFILE_STATUS
);

const addFeatureKey = resolverWithLogging(
  (initialState: AccountStore, payload: any, service: any) => {
    if (payload && !initialState.featureKeys.includes(payload) && Object.values(AppFeature).includes(payload)) {
      const newFeatureKeys = [...initialState.featureKeys, payload];
      return Object.assign({}, initialState, { featureKeys: newFeatureKeys });
    }
    return initialState;
  },
  reducerName,
  actionCategory,
  AccountActionType.ADD_FEATURE_KEY
);

export function accountReducer(
	state: AccountStore = defaultAccountStore,
  action: AccountActions,
  serviceCollection: IServiceCollection
) {
	switch(action.type) {
    case AccountActionType.LOGOUT:
      return logout(state, action.payload, {});
    case AccountActionType.LOGIN:
      const loginContext = `AccountReducer: ${AccountActionType.LOGIN}`;
      return catchErrorInReduxReducer(login, state, loginContext)(state, action.payload);
    case AccountActionType.SIGNUP:
      return catchErrorInReduxReducer(signup, state, `AccountReducer: ${AccountActionType.SIGNUP}`)(state, action.payload);
    case AccountActionType.NEW_INVITE_TOKEN:
      const newInviteTokenContext = `AccountReducer: ${AccountActionType.NEW_INVITE_TOKEN}`;
      return catchErrorInReduxReducer(isAuthenticatedHoc(newInviteToken, newInviteTokenContext), state, newInviteTokenContext)(state, action.payload);
    case AccountActionType.UPDATE_PROFILE_STATUS:
      const updateProfileStatusContext = `AccountReducer: ${AccountActionType.UPDATE_PROFILE_STATUS}`;
      return catchErrorInReduxReducer(isAuthenticatedHoc(updateProfileStatus, updateProfileStatusContext), state, updateProfileStatusContext)(state, action.payload);
    case AccountActionType.ADD_FEATURE_KEY:
      // TODO: Add logged in check HOC function as a check to whether these other functions can be called.
      const addFeatureKeyContext = `AccountReducer: ${AccountActionType.ADD_FEATURE_KEY}`;
      return catchErrorInReduxReducer(isAuthenticatedHoc(addFeatureKey, addFeatureKeyContext), state, addFeatureKeyContext)(state, action.payload);
		default:
			return state;
	}
}
