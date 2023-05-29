import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/reducer";
import { postsReducer } from "./posts/reducer";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        posts: postsReducer

    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;