import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_AUTHENTICATED_API } from "../http/AXIOSAPI";
import { STATUS } from "./Status";


const appointmentSlice = createSlice({
    name: "appointment",
    initialState: {
        appointmentsList: null,
        singleAppointmentDetail: null,
        alertData : null,
        status : null,
    },
    reducers: {
        setAppointmentsList(state, action){
            state.appointmentsList = action.payload
        },
        setSingleAppointmentDetail(state, action){
            state.singleAppointmentDetail = action.payload
        },
        setAlertData(state, action){
            state.alertData = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        },
        resetAppointmentStatus(state){
            state.status = null
            state.alertData = null
        }
    }
})

export const { setAppointmentsList, setSingleAppointmentDetail, setAlertData, setStatus, resetAppointmentStatus } = appointmentSlice.actions
export default appointmentSlice.reducer

// Add Appointment Service
export function addAppointmentService(formData){
    return async function addAppointmentServiceThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.post('/appointment-service', formData)
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

// Fetch Appointment Service List
export function getAppointmentServiceList(){
    return async function getAppointmentServiceListThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/appointment-service')
            dispatch(setAppointmentsList(response.data.message))
        } catch (error) {
            console.log(error)
        }
    }
}

// Fetch Single Appointment Service Detail
export function getSingleAppointmentServiceDetail(id){
    return async function getSingleAppointmentServiceDetailThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.get(`/appointment-service/${id}`)
            dispatch(setSingleAppointmentDetail(response.data.message))
        } catch (error) {
            console.log(error)
        }
    }
}

// Update Appointment Service
export function updateAppointmentService(id, formData){
    return async function updateAppointmentServiceThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.patch(`/appointment-service/${id}`, formData)
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