import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from './reducers/userReducer';
import {conversationsReducer} from './reducers/conversationReducer';

export const store = configureStore({
    reducer: {
      user: userReducer,
      conversations: conversationsReducer
    },
  });