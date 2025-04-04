import { createSlice } from "@reduxjs/toolkit"
import { ADMIN_AUTHENTICATED_API, ADMIN_AUTHENTICATED_FILE_API } from "../http/AXIOSAPI"
import { STATUS } from "./Status"

const serviceSlice = createSlice({
    name : 'serviceSlice',
    initialState : {
        serviceList : null,
        singleServiceDetails : null,
        status : null,
        alertData : null,
    },
    reducers : {
        setServiceList(state, action){
            state.serviceList = action.payload
        },
        setSingleServiceDetails(state, action){
            state.singleServiceDetails = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        },
        resetServiceStatus(state){
            state.alertData = null
            state.status = null
        }
    }
})

export const {setServiceList, setSingleServiceDetails, setStatus, setAlertData, resetServiceStatus} = serviceSlice.actions
export default serviceSlice.reducer

// Add Service
export function addService(formData){
    return async function addServiceThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_FILE_API.post('/service', formData)
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

// Get Service List
export function getServiceList(){
    return async function getServiceListThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/service')
            if(response.status == 200){
                dispatch(setServiceList(response.data.message))
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message))
        }
    }
}

// Get Single Service Details
export function getSingleServiceDetails(id){
    return async function getSingleServiceDetailsThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.get(`/service/${id}`)
            if(response.status == 200){
                dispatch(setSingleServiceDetails(response.data.message))
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message))
        }
    }
}

// Update Service
export function updateService( id, formData){
    return async function updateServiceThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_FILE_API.patch(`/service/${id}`, formData)
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

// Delete Service
export function deleteService(id){
    return async function deleteServiceThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.delete(`/service/${id}`)
            if(response.status == 200){
                dispatch(setServiceList(response.data.serviceList))
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setAlertData(response.data.message))
            }
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            dispatch(setAlertData(error.response.data.message))
        }
    }
}