import { createSlice } from '@reduxjs/toolkit';

const stateControlSlice = createSlice(
    {
        name: 'stateControl',
        initialState: {
            loginPopUp: false,
            signUpPopUp: false,
            feedbackPopUp: false,
            sideBarShown: false,
        },
        reducers: {
            
            setLoginPopUp: (state, action) => {
                state.loginPopUp = action.payload;
                console.log("login pop up -> "+state.loginPopUp);
            },

            setSignUpPopUp: (state, action) => {
                state.signUpPopUp = action.payload;
                console.log("signup pop up -> "+state.signUpPopUp);
            },

            setFeedbackPopUp: (state, action) => {
                state.feedbackPopUp = action.payload;
                console.log("feedback pop up -> "+state.feedbackPopUp);
            },
            setSideBarShown: (state, action) => {
                state.sideBarShown = action.payload;
                console.log("sidebar shown -> "+state.sideBarShown);
            }

        }
            
    });

export const { setLoginPopUp,setSignUpPopUp,setFeedbackPopUp,setSideBarShown } = stateControlSlice.actions;
export default stateControlSlice.reducer;

