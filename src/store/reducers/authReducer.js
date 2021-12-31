import { USER_LOGIN, USER_LOGOUT } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        isAuthenticated: true,
      };

    case USER_LOGOUT:
      return {
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
