import { API_URL } from '../utils/config';

export const getUserByUsername = username => {
    return fetch(API_URL + '/user/'+ username);
}

export const createUser = (userObject)=>{
    return fetch(API_URL + '/user/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
    });
}

export const getUserConversations = (userId)=>{
    return fetch(API_URL + `/user/${userId}/user-conversations?` + new URLSearchParams({
      fields: 'content,seen',
      limit: 'true',  
    }), {
        method: "GET",
    });
}

export const fetchUsers = () =>{
    return fetch(API_URL + '/user/search', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}