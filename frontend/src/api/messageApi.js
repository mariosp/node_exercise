import { API_URL } from '../utils/config';

export const getUserConversation = (userId, selectedId) => {
    return fetch(API_URL + `/message/conversation/${userId},${selectedId}`);
}