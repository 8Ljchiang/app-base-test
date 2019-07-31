import { AppFeature } from './../core/configs/feature.config';
import AccountService from '../core/services/mocks/mock-account.service';
import SignupService from '../core/services/mocks/mock-signup.service';
import Log from '../core/services/log.service';
import { AccountStore, defaultAccountStore } from './account.store';
import { LoginInput, AccountActions, AccountActionType, accountSignup } from './account.actions';
import { catchErrorInReduxReducer } from '../core/util/error-catchers';
import { SignupInput } from './signup.actions';

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

const login = (initialState: AccountStore, loginInput: LoginInput) => {
  Log.info('AccountAction', AccountActionType.LOGIN, 'AccountReducer')

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
}

const logout = () => {
  Log.info('AccountAction', AccountActionType.LOGOUT, 'AccountReducer')
	return Object.assign({}, defaultAccountStore);
}

const signup = (initialState: AccountStore, signupInput: SignupInput) => {
  Log.info('AccountSignupAction', AccountActionType.SIGNUP, 'AccountReducer')
	const networkResult = SignupService.signup(signupInput);
	if (networkResult.errors && networkResult.errors.length > 0) {
		Log.error(new Error(networkResult.errors[0]), `AccountService.signup`);
	}
	if (networkResult.data && networkResult.data.success) {
		return Object.assign({}, initialState, { signups: [...initialState.signups, signupInput] });
	}
	return initialState;
}

const newInviteToken = (initialState: AccountStore, payload: any) => {
  Log.info('AccountNewInviteToken', AccountActionType.NEW_INVITE_TOKEN, 'AccountReducer');
  const networkResult = AccountService.createInviteToken();
	if (networkResult.errors && networkResult.errors.length > 0) {
		Log.error(new Error(networkResult.errors[0]), `AccountService.createInviteToken`);
	}
	if (networkResult.data && networkResult.data.inviteToken) {
		return Object.assign({}, initialState, { inviteTokens: [...initialState.inviteTokens, networkResult.data.inviteToken] });
	}
	return initialState;
}

const updateProfileStatus = (initialState: AccountStore, payload: any) => {
  Log.info('AccountUpdateProfileStatus', AccountActionType.UPDATE_PROFILE_STATUS, 'AccountReducer');
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
    return Object.assign({}, initialState, { profile: { ...initialState.profile, status: payload } });
  }
	// return initialState;
}

const addFeatureKey = (initialState: AccountStore, payload: any) => {
  Log.info('AccountAddFeatureKey', AccountActionType.ADD_FEATURE_KEY, 'AccountReducer');
  if (payload && !initialState.featureKeys.includes(payload) && Object.values(AppFeature).includes(payload)) {
    const newFeatureKeys = [...initialState.featureKeys, payload];
    return Object.assign({}, initialState, { featureKeys: newFeatureKeys });
  }
  return initialState;
}

export function accountReducer(
	state: AccountStore = defaultAccountStore,
	action: AccountActions
) {
	switch(action.type) {
    case AccountActionType.LOGOUT:
      return logout();
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
