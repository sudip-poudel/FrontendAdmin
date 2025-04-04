import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_AUTHENTICATED_API } from "../http/AXIOSAPI";
import { STATUS } from "./Status";

const branchSlice = createSlice({
    name : 'branchSlice',
    initialState : {
        branchList : null,
        singleBranchDetails : null,
        status : null,
        alertData : null,
    },
    reducers : {
        setBranchList(state, action){
            state.branchList = action.payload
        },
        setSingleBranchDetails(state, action){
            state.singleBranchDetails = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        },
        resetBranchStatus(state){
            state.alertData = null
            state.status = null
        }
    }
   
});

export const {setBranchList, setSingleBranchDetails, setStatus, setAlertData, resetBranchStatus} = branchSlice.actions
export default branchSlice.reducer

// Add Branch
export function addBranch(formData){
    return async function addBranchThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.post('/branch', formData)
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

// Get Branch List
export function getBranchList(){
    return async function getBranchListThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/branch')
            if(response.status == 200){
                dispatch(setBranchList(response.data.message))
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message))
        }
    }
}

// Get Single Branch Details
export function getSingleBranchDetails(id){
    return async function getSingleBranchDetailsThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.get(`/branch/${id}`)
            if(response.status == 200){
                dispatch(setSingleBranchDetails(response.data.message))
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message))
        }
    }
}

// Update Branch
export function updateBranch(branchId, formData){
    return async function updateBranchThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.patch(`/branch/${branchId}`, formData)
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

// Delete Branch
export function deleteBranch(id){
    return async function deleteBranchThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.delete(`/branch/${id}`)
            if(response.status == 200){
                dispatch(setBranchList(response.data.branchList))
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setAlertData(response.data.message))
            }
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            dispatch(setAlertData(error.response.data.message))
        }
    }
}

