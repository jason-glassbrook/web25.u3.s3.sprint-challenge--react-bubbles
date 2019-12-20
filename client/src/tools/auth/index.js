/*******************************************************************************
  auth
--------------------------------------------------------------------------------
  Tools for user authentiation.
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import authios from './authios';
import user from './user';

export default {
  authios,
  user,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as authios } from './authios';
export { default as user } from './user';
