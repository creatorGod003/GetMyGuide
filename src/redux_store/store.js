import { configureStore } from "@reduxjs/toolkit";

import stateControlReducer from "./features/stateControlSlice";
import userReducer from "./features/userSlice";

const store = configureStore(
    {
        reducer:{
            stateControl: stateControlReducer,
            user: userReducer,
        }
    }
)

export default store;