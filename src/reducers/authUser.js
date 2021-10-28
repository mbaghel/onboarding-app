/**
 * Reducer for authorized user data
 */

const initialState = {
  isLoggedIn: undefined,
  handle: undefined,
  firstName: undefined,
  lastName: undefined,
  addresses: [],
  photoUrl: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER_SUCCESS":
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default reducer;
