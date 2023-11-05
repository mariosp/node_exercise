import { CONVERSATIONS_SUCCESS, CONVERSATIONS_FAIL, CONVERSATIONS_LOADING, SELECTED_CONVERSATION_LOADING, SELECTED_CONVERSATION_SUCCESS, SELECTED_CONVERSATION_FAIL, CREATE_MESSAGE_LOADING, CREATE_MESSAGE_SUCCESS, CREATE_MESSAGE_FAIL, UPDATE_MESSAGE_SUCCESS, UPDATE_MESSAGE_FAIL } from "../actions/conversationsAction"


export const conversationsReducer = (state = {
    items: [],
    initLoading: true,
    error: null,
    selectedConversationList: [],
    selectedConversationLoading: false,
    selectedConversationError: null,
    createMessageLoading: false,
    createMessageError: null,
    updateMessageError: null,
}, action) => {
    switch (action.type) {
        case CONVERSATIONS_LOADING:
          return {
              ...state,
              initLoading: true,
          }
        case CONVERSATIONS_SUCCESS:
          return {
              ...state,
              initLoading: false,
              items: [...action.data],
              error: null,
          }
        case CONVERSATIONS_FAIL:
          return {
              ...state,
              initLoading: false,
              items: [],
              error: action.data,
          }
        case SELECTED_CONVERSATION_LOADING:
          return {
              ...state,
              selectedConversationLoading: true,
          }
        case SELECTED_CONVERSATION_SUCCESS:
          return {
              ...state,
              selectedConversationLoading: false,
              selectedConversationList: [...action.data],
          }
        case SELECTED_CONVERSATION_FAIL:
            return {
                ...state,
                selectedConversationLoading: false,
                selectedConversationList: [],
                selectedConversationError: action.data,
            }
        case CREATE_MESSAGE_LOADING:
          return {
              ...state,
              createMessageLoading: true,
          }
        case CREATE_MESSAGE_SUCCESS:
          const newList = [{...action.data}, ...state.selectedConversationList];
          return {
              ...state,
              createMessageLoading: false,
              selectedConversationList: newList,
              createMessageError: null,
          } 
        case CREATE_MESSAGE_FAIL:
          return {
              ...state,
              createMessageLoading: false,
              createMessageError: action.data,
              createMessageError: null,
          }
        case UPDATE_MESSAGE_SUCCESS:
          const index = state.selectedConversationList.findIndex(item=> item.id === action.data.id);
          const updatedList = state.selectedConversationList.toSplice(index, 1, action.data);
          return {
              ...state,
              selectedConversationList: updatedList,
              updateMessageError: null,
          }
          case UPDATE_MESSAGE_FAIL:
            return {
                ...state,
                updateMessageError: action.data,
            }
      default:
        return state
    }
  }