import{createSlice} from "@reduxjs/toolkit"

const initialState = {
        status:false,
        userData: null
}

const authSlice = new createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state,actions)=>{
            state.status =true;
            state.userData= actions.payload.userData;
        }, // here we dont needto spread the state value as store manages it but conttext api doesnt
        logout: (state)=>{
            state.status=false;
            state.userData=null;
        }

    }
})

export const {login,logout} =authSlice.actions;
export default authSlice.reducer;