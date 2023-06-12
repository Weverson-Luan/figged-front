/**
 * User status types.
 */
export enum userStatus {
  AVAILABLE = 'available',
  BLOCKED = 'blocked',
  PASSWORD_RESET = 'password-reset',
  PASSWORD_UPDATED = 'password-updated',
  PENDING = 'pending',
  VALID_CODE = 'valid-code'
}


/**
 * User types.
 */

export interface User {
  id: string
  name: string
  username: string
  email?: string
  isLogged?: boolean;
  role: string
}


/**
 * User state interface.
 */
 export interface IUserState {
  [x: string]: any
  id?: boolean | null
  token?: string
  refresh_token: string
  user: User
}


/**
 * User slice name.
 */
export const NAME = 'user';