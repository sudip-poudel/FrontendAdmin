import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_AUTHENTICATED_API, ADMIN_AUTHENTICATED_FILE_API } from "../http/AxiosAPI";
import { STATUS } from "./Status";


const staffSlice = createSlice({
    name : 'staffSlice',
    initialState : {
        StaffList : null,
        StaffDetails : null,
        Status : null,
        AlertData : null,
    },
    reducers : {
        setStaffList(state, action){
            state.StaffList = action.payload
        },
        setStaffDetail(state, action){
            state.StaffDetails = action.payload
        },
        setAlertData(state, action){
            state.AlertData = action.payload
        },
        setStatus(state, action){
            state.Status = action.payload
        },
        resetStaffStatus(state, action){
            state.staffStatus = null
            state.AlertData = null
        }
    }
})

export const {setStaffList, setStaffDetail, setAlertData, setStatus, resetStaffStatus } = staffSlice.actions
export default staffSlice.reducer


// Register Staff
export function RegisterStaff(formData){
    return async function RegisterStaffThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_FILE_API.post('/staff', formData)
            if(response.status == 200){
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setAlertData(response.data.message))
            }
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            dispatch(setAlertData(error.response.data.message))
        }
    }
}


// Display Staff List
export function DisplayStaffList(){
    return async function DisplayStaffListThunk(dispatch) {
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/staff')
            if(response.status == 200){
                dispatch(setStaffList(response.data.message))
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message))
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

// Fetch Single Staff Details
export function DisplaySingleStaffDetails(staffId){
    return async function DisplaySingleStaffDetailsThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.get(`/staff/${staffId}`)
            if(response.status == 200){
                dispatch(setStaffDetail(response.data.message))
            }
        } catch (error) {
            dispatch(setAlertData(error.response?.data.message))
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

// Update Staff Details
export function UpdateStaffDetails(staffId, formData){
    return async function UpdateStaffDetailsThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.patch(`/staff/${staffId}`, formData)
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

// Delete Staff Details
export function DeleteStaffDetails(staffId){
    return async function DeleteStaffDetailsThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.delete(`/staff/${staffId}`)
            if(response.status == 200){
               dispatch(setStaffList(response.data.staffList))
               dispatch(setAlertData(response.data.message))
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                return {status : 400, message : 'Failed to delete staff.'}
            }
        } catch (error) {
            if(error.response.status == 401){
                dispatch(setAlertData(error.response.data.message))
                dispatch(setStatus(STATUS.ERROR))
            }else{
                return {status : 400, message : 'Failed to delete staff.'}
            }   
        }
    }
}