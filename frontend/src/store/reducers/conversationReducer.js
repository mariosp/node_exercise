import { CONVERSATIONS_SUCCESS, CONVERSATIONS_FAIL, CONVERSATIONS_LOADING } from "../actions/conversationsAction"


export const conversationsReducer = (state = {
    items: [],
    initLoading: true,
    error: null,
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
      default:
        return state
    }
  }