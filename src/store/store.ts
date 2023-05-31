import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/reducer";
import { postsReducer } from "./posts/reducer";
import { confirmEmailReducer } from "./confirmEmail/reducer";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
        confirmEmail: confirmEmailReducer,

    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;