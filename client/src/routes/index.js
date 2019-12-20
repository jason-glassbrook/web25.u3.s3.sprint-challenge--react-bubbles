/*******************************************************************************
  routes
--------------------------------------------------------------------------------
  Routes for the app.
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import client from './client';
import server from './server';

export default {
  client,
  server,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as client } from './client';
export { default as server } from './server';
