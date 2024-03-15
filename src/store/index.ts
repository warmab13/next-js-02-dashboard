import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter/counterSlice';
import pokemonReducer from './pokemons/pokemons';

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { localStorageMiddleware } from "./middlewares/localstorage-middleware";

export const store = configureStore({
    reducer: { //Store es toda la aplicacion,
        //Reducers son pequeños stores.
        counter: counterReducer,
        pokemons: pokemonReducer
    },
    //middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( localStorageMiddleware )
});

//Infer type RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>

//Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;