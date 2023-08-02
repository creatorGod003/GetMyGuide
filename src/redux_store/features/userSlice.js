import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loggedin: false,
        type: null,
    },
    reducers: {
        login: (state, action) => {
            
            const data = JSON.parse(action.payload);
            
            state.user = data.user;
            state.loggedin = true;
            state.type = data.type;
            console.log(state.user)
            console.log(state.loggedin)
            console.log(state.type)

        },
        logout: (state) => {
            state.user = null;
            state.loggedin = false;
            state.type = null;
        }
    }

});

export  const { login, logout } = userSlice.actions;
export default userSlice.reducer;

