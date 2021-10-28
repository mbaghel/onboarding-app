/**
 * Auth user actions
 */

const authUserSuccess = (userData) => ({
  type: "AUTH_USER_SUCCESS",
  payload: userData,
});

export default {
  authUserSuccess,
};
