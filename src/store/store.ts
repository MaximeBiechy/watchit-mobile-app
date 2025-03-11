import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.ts';
import listsReducer from './lists/listsSlice.ts';

const store = configureStore({
  reducer: {
    // ? user
    user: userReducer,
    lists: listsReducer,
  },
});

export default store;
