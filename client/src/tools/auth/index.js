/*******************************************************************************
  auth
--------------------------------------------------------------------------------
  Tools for user authentiation.
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import axios from './authios';
import user from './user';

export default {
  axios,
  user,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as authios } from './authios';
export { default as user } from './user';
