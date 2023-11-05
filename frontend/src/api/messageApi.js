import { API_URL } from '../utils/config';

export const getUserConversation = (userId, selectedId) => {
    return fetch(API_URL + `/message/conversation/${userId},${selectedId}`);
}

export const createMessage = (messageObj)=>{
    return fetch(API_URL + '/message/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(messageObj),
    });
}

export const updateMessage = (messageId, messageObj = {})=>{
    return fetch(API_URL + `/message/${messageId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(messageObj),
    });
}