import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./Status";
import { ADMIN_API, ADMIN_AUTHENTICATED_API } from "../http/AxiosAPI";


const authSlice = createSlice({
    name : 'authSlice',
    initialState : {
        authData : null,
        loggedInAdminDetails : null,
        alertData : null,
        status : null,
    },
    reducers : {
        setAuthData(state, action){
            state.authData = action.payload
        },
        setLoggedInAdminDetails(state, action){
            state.loggedInAdminDetails = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        }, 
        setStatus(state, action){
            state.status = action.payload
        },
        resetStats(state){
            state.alertData = null
            state.status = null
        }
       
    }
})


export const {setAuthData, setLoggedInAdminDetails, setAlertData, setStatus, resetStats} = authSlice.actions
export default authSlice.reducer


// Login 
export function login(formData){
    return async function loginThunk(dispatch){
        try {
            const response = await ADMIN_API.post('/adminLogin', formData)
            if(response.status == 200){
                dispatch(setStatus(STATUS.SUCCESS))
                localStorage.setItem('UserJWT', response?.data?.message);
            }
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            dispatch(setAlertData(error.response?.data?.message));
        }
    }
}


// Logged In Admin Details
export function DisplayLoggedInAdminDetails(){
    return async function DisplayLoggedInAdminDetailsThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/adminDetails')
            if(response.status == 200){
                dispatch(setLoggedInAdminDetails(response.data.message))
            }
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            dispatch(setAlertData(error.response.data.message));
        }
    }
}


// Update Logged In User Details
export function UpdateLoggedInUserDetails(formData){
    return async function UpdateLoggedInUserDetailsThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.patch(`/adminDetails`, formData)
            if(response.status == 200){
                dispatch(setAlertData(response.data.message))
                dispatch(setStatus(STATUS.SUCCESS))
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message))
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

// Change Password
export function ChangeAdminPassword(formData){
    return async function ChangeAdminPasswordThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.patch(`/adminPassword`, formData)
            if(response.status == 200){
                dispatch(setAlertData(response.data.message))
                dispatch(setStatus(STATUS.SUCCESS))
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message))
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}