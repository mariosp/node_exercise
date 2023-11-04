import { getUserByUsername, createUser } from '../../api/userApi';

export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const CREATE_USER_LOADING = 'CREATE_USER_LOADING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const LOGOUT_USER = 'LOGOUT_USER';

export const userLoginAction = (username)=> {
    return getUserByUsernameMiddleware(username);
}

export const createUserAction = (userObj) => {
    return createUserMiddleware(userObj);
}

export const userLogoutAction =  () => {
    return {
        type: LOGOUT_USER,
    };
}

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