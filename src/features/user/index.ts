/**
 * IMPORTS
 */
import * as asyncActions from './actions';
import user from './slice';


/**
 * I merge slice actions with async actions.
 */
const actions: any = {
  ...asyncActions,
  ...user.actions
};


/**
 * EXPORTS
 */
export { actions, user };
