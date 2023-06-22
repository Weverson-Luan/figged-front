/**
 * IMPORTS
 */
import { user } from "./";
import { type IUserState, userStatus } from "./interface";

/**
 * I select the user slice from state.
 */
const selectSlice = (state: any): IUserState => state[user.name];

/**
 * I check whether the user has a request is pending or not.
 */
const userIsLoading = (state: any): boolean =>
	selectSlice(state)._request?.status === "pending";

/**
 * I check whether the user is logged or not.
 */
const userIsLogged = (state: any): string => selectSlice(state)?.refresh_token;

/**
 * I check whether the user updated password or not.
 */
const userUpdatedPassword = (state: any) =>
	selectSlice(state).status === userStatus.PASSWORD_UPDATED;

/**
 * EXPORTS
 */
export { selectSlice, userIsLoading, userIsLogged, userUpdatedPassword };
