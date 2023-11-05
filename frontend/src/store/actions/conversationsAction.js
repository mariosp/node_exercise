import { getUserConversations } from '../../api/userApi';
import { getUserConversation } from '../../api/messageApi';
import { setSelectedUserAction } from '../actions/userAction';

export const CONVERSATIONS_LOADING = 'CONVERSATIONS_LOADING';
export const CONVERSATIONS_SUCCESS = 'CONVERSATIONS_SUCCESS';
export const CONVERSATIONS_FAIL = 'CONVERSATIONS_FAIL';


export const SELECTED_CONVERSATION_LOADING = 'SELECTED_CONVERSATIONS_LOADING';
export const SELECTED_CONVERSATION_SUCCESS = 'SELECTED_CONVERSATIONS_SUCCESS';
export const SELECTED_CONVERSATION_FAIL = 'SELECTED_CONVERSATIONS_FAIL';


export const fetchConversationsAction = ()=> {
    return fetchConversationsMiddleware();
}

export const  selectedConversationAction = (selectedId)=> {
  return fetchSelectedConversationMiddleware(selectedId);
}

const selectedConversationLoading = (isLoading)=>({
  type: SELECTED_CONVERSATION_LOADING,
  data: isLoading,
});

const selectedConversationSuccess = (data)=>({
  type: SELECTED_CONVERSATION_SUCCESS,
  data: data,
});

const selectedConversationFail = (message)=>({
  type: SELECTED_CONVERSATION_FAIL,
  data: message,
});

const conversationLoading = (isLoading)=> ({
  type: CONVERSATIONS_LOADING,
  data: isLoading,
});

const conversationSuccess = (data)=> ({
  type: CONVERSATIONS_SUCCESS,
  data: data,
});

const conversationFail = (data)=> ({
  type: CONVERSATIONS_FAIL,
  data: data,
});

const fetchConversationsMiddleware = () => {
    return async (dispatch, getState) => {
        const userId = getState().user.user['id'];
        dispatch(conversationLoading(true));

        try {
          const userConversations = await getUserConversations(userId).then(async response=> {
              if (response.ok) {
                  return response.json();
              }
              const errorRepsonse = await response.json();
              throw (errorRepsonse.error);
          });
          
          dispatch(conversationSuccess(userConversations));
        } catch (err) {
          dispatch(conversationFail(err.message));
        }
    }
}
const fetchSelectedConversationMiddleware = (selectedId) => {
    return async (dispatch, getState) => {
        const userId = getState().user.user['id'];
        dispatch(setSelectedUserAction(selectedId));
        dispatch(selectedConversationLoading(true));

        try {
          const conversation = await getUserConversation(userId, selectedId).then(async response=> {
              if (response.ok) {
                  return response.json();
              }
              const errorRepsonse = await response.json();
              throw (errorRepsonse.error);
          });
          
          dispatch(selectedConversationSuccess(conversation));
        } catch (err) {
          dispatch(selectedConversationFail(err.message));
        }
    }
}