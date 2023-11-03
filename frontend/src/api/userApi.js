const USER_API = process.env.REACT_APP_NOT_SECRET_CODE || 'http://localhost:3000';

export const getUserByUsername = username => {
    return fetch(USER_API + '/user/'+ username);
}

export const createUser = (userObject)=>{
    return fetch(USER_API + '/user/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
    });
}