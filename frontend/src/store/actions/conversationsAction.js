import { getUserConversations } from '../../api/userApi';

export const CONVERSATIONS_LOADING = 'CONVERSATIONS_LOADING';
export const CONVERSATIONS_SUCCESS = 'CONVERSATIONS_SUCCESS';
export const CONVERSATIONS_FAIL = 'CONVERSATIONS_FAIL';

export const fetchConversations = ()=> {
    return fetchConversationsMiddleware();
}

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