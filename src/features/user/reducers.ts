/**
 * IMPORTS
 */
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './initialstate';


/**
 * I am a login reducer.
 */
const login = (state: any, action: any) => {
 
   // set state
   state.accountId = action.payload.data.user.id;
   state.user = action.payload.data.user;
   state.refresh_token = action.payload.data.refresh_token

};


/**
* I build a extra reducer to login.
*/
const buildLogin = (builder: ActionReducerMapBuilder<unknown>): void => {
 builder.addCase(actions.login.fulfilled, login);
};


/**
 * I am a logout reducer.
 */
const logout = () => initialState;


/**
 * EXPORTS
 */
export {
  logout,
  buildLogin
};
