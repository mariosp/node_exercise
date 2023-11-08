import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_LOADING, CREATE_USER_LOADING, CREATE_USER_SUCCESS, CREATE_USER_FAIL,LOGOUT_USER, USERS_LOADING, USERS_SUCCESS, USERS_FAIL, SET_SELECTED_USER } from "../actions/userAction";

const initState = {
    loginLoading: false,
    loginError: false,
    user: null,
    createLoading: false,
    createError: null,
    users: [],
    usersLoading: false,
    usersError: null,
    selectedUser: null,
};

export const userReducer = (state = initState, action) => {
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
        case USERS_LOADING:
            return {
                ...state,
                usersError: null,
                usersLoading: true
            }
        case USERS_SUCCESS:
            return {
                ...state,
                users: action.data,
                usersError: null,
                usersLoading: false,
            }
        case USERS_FAIL:
            return {
                ...state,
                usersError: action.data,
                usersLoading: false,
            }
        case LOGOUT_USER:
            return {
                ...initState
            }
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: {...state.users.find(user=> user.id === action.data)},
            }
      default:
        return state
    }
  }