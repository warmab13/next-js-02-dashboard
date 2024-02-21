import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter/counterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: { //Store es toda la aplicacion,
        //Reducers son pequeños stores.
        counter: counterReducer,
    },
});

//Infer type RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>

//Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;