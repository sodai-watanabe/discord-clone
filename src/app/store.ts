import { configureStore  } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store = configureStore ({
    reducer: userReducer,
});

export type AppDispatch = typeof store.dispatch;

// getState→現在の状態を返す
export type RootState = ReturnType<typeof store.getState>;