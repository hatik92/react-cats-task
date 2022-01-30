import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import galeryReducer from '../features/Gallery/GallerySlice';
import sidearReducer from '../features/Sidebar/SidebarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidearReducer,
    galery: galeryReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
