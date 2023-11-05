import { getUserByUsername, createUser, fetchUsers } from '../../api/userApi';

export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const CREATE_USER_LOADING = 'CREATE_USER_LOADING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const LOGOUT_USER = 'LOGOUT_USER';

export const USERS_LOADING = 'USERS_LOADING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAIL = 'USERS_FAIL';

export const SET_SELECTED_USER = 'SET_SELECTED_USER';

export const userLoginAction = (username)=> {
    return getUserByUsernameMiddleware(username);
}

export const fetchUsersAction =  () => {
    return fetchUsersMiddleware();
}

export const createUserAction = (userObj) => {
    return createUserMiddleware(userObj);
}

export const userLogoutAction =  () => {
    return {
        type: LOGOUT_USER,
    };
}

export const setSelectedUserAction = (id) => ({
    type: SET_SELECTED_USER,
    data: id
});

const userLoginLoading = (isLoading)=> {
    return {
        type: LOGIN_USER_LOADING,
        data: isLoading,
    };
}
const userLoginSuccess = (userData)=> {
    return {
        type: LOGIN_USER_SUCCESS,
        data: userData,
    };
}
const userLoginFail = (message)=> {
    return {
        type: LOGIN_USER_FAIL,
        data: message,
    };
}

const createUserLoading = (isLoading)=> {
    return {
        type: CREATE_USER_LOADING,
        data: isLoading,
    };
}
const createUserSuccess = (userData)=> {
    return {
        type: CREATE_USER_SUCCESS,
        data: userData,
    };
}
const createUserFail = (message)=> {
    return {
        type: CREATE_USER_FAIL,
        data: message,
    };
}

const usersLoading = (isLoading)=> {
    return {
        type: USERS_LOADING,
        data: isLoading,
    };
}
const usersSuccess = (userData)=> {
    return {
        type: USERS_SUCCESS,
        data: userData,
    };
}
const usersFail = (message)=> {
    return {
        type: USERS_FAIL,
        data: message,
    };
}

const getUserByUsernameMiddleware = username => {
    return async (dispatch, getState) => {
      
      dispatch(userLoginLoading(true));

      try {
        const user = await getUserByUsername(username).then(async response=> {
            if (response.ok) {
                return response.json();
            }
            const errorRepsonse = await response.json();
            throw new Error(errorRepsonse.error);
        });
        
        dispatch(userLoginSuccess(user))
      } catch (err) {
        
        dispatch(userLoginFail(err.message));
      }
    }
}

const createUserMiddleware = userObj => {
    return async (dispatch, getState) => {
        
        dispatch(createUserLoading(true));

        try {
        const user = await createUser(userObj).then(async response=> {
            if (response.ok) {
                return response.json();
            }
            const errorRepsonse = await response.json();
            throw new Error(errorRepsonse.error);
        });
        
        dispatch(createUserSuccess(user))
        } catch (err) {
            dispatch(createUserFail(err.message));
        }
}
}

const fetchUsersMiddleware = () => {
    return async (dispatch, getState) => {
        dispatch(usersLoading(true));
        try {
            const users = await fetchUsers().then(async response=> {
                if (response.ok) {
                    return response.json();
                }
                const errorRepsonse = await response.json();
                throw (errorRepsonse.error);
            });
            
            dispatch(usersSuccess(users));
        } catch (err) {
            dispatch(usersFail(err.messsage));
        }
    }
}