/**
 * IMPORTS
 */
import { IUserState, NAME } from './interface';


/**
 * Confirm code request interface.
 */
export interface IConfirmCodeRequest {
  code: number
  email: string
}


/**
 * Join request interface.
 */
export interface IJoinRequest {
  birthDate: number
  email: string
  firstName: string
  gender: string
  lastName: string
  password: string
  username: string
}


/**
 * Login request interface.
 */
export interface ILoginRequest {
  email: string
  password: string
  username: string
}


/**
 * Login response interface.
 */
export type ILoginResponse = IUserState


/**
 * Password reset request interface.
 */
export interface IPasswordResetRequest {
  email: string
}


/**
 * Password update request interface.
 */
export interface IPasswordUpdateRequest {
  email: string
  password: string
  userId: string
}

/**
  * Updated request interface.
 */
export interface IChangePasswordRequest {
    id?: string
    password: string
    passwordNew: string
    passwordConfirmed: string
}



/**
 * User action types.
 */
 export const types = {
   CHANGE_PASSWORD: `${NAME}/change-password`,
   CONFIRM_CODE: `${NAME}/confirm-code`,
   JOIN: `${NAME}/join`,
   LOGIN: `${NAME}/login`,
   LOGOUT: `${NAME}/logout`,
   RESET_PASSWORD: `${NAME}/reset-password`,
   UPDATE_PASSWORD: `${NAME}/update-password`
 };
 