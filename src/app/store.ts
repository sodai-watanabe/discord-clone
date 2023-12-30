import { configureStore  } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import channelReducer from "../features/channelSlice";

export const store = configureStore ({
    reducer: {
        user: userReducer,
        channel: channelReducer,
    }
});

export type AppDispatch = typeof store.dispatch;

// getState→現在の状態を返す
export type RootState = ReturnType<typeof store.getState>;