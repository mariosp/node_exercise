import { CONVERSATIONS_SUCCESS, CONVERSATIONS_FAIL, CONVERSATIONS_LOADING, SELECTED_CONVERSATION_LOADING, SELECTED_CONVERSATION_SUCCESS, SELECTED_CONVERSATION_FAIL } from "../actions/conversationsAction"


export const conversationsReducer = (state = {
    items: [],
    initLoading: true,
    error: null,
    selectedConversationList: [],
    selectedConversationLoading: false,
    selectedConversationError: null
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
      default:
        return state
    }
  }