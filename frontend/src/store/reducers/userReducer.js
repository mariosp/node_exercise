import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_LOADING, CREATE_USER_LOADING, CREATE_USER_SUCCESS, CREATE_USER_FAIL  } from "../actions/userAction";

export const userReducer = (state = {
    loginLoading: false,
    loginError: null,
    user: null,
    createLoading: false,
    createError: null,
}, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.data,
                loginError: null,
                loginLoading: false,
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                loginError: action.data,
                loginLoading: false,
            }
        case LOGIN_USER_LOADING:
            return {
                ...state,
                loginError: null,
                loginLoading: true
            }
        case CREATE_USER_LOADING:
            return {
                ...state,
                createError: null,
                createLoading: true
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                user: action.data,
                createError: null,
                createLoading: false,
            }
        case CREATE_USER_FAIL:
            return {
                ...state,
                createError: action.data,
                createLoading: false,
            }
      default:
        return state
    }
  }