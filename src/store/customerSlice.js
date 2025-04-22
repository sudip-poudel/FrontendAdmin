import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_AUTHENTICATED_API, ADMIN_AUTHENTICATED_FILE_API } from "../http/AxiosAPI";
import { STATUS } from "./Status";


const customerSlice = createSlice({
    name : 'customerSlice',
    initialState : {
        CustomerList : null,
        Status : null,
        AlertData : null,
    },
    reducers : {
        setCustomerList(state, action){
            state.CustomerList = action.payload
        },
        setAlertData(state, action){
            state.AlertData = action.payload
        },
        setStatus(state, action){
            state.Status = action.payload
        },
        resetCustomerStatus(state, action){
            state.staffStatus = null
            state.AlertData = null
        }
    }
})

export const {setCustomerList, setAlertData, setStatus, resetCustomerStatus } = customerSlice.actions
export default customerSlice.reducer


// Display Customer List
export function DisplayCustomerList(){
    return async function DisplayCustomerListThunk(dispatch) {
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/customer')
            if(response.status == 200){
                dispatch(setCustomerList(response.data.message))
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message))
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}



// Delete Customer Details
export function DeleteCustomerDetails(staffId){
    return async function DeleteCustomerDetailsThunk(dispatch){
        try {
            const response = await ADMIN_AUTHENTICATED_API.delete(`/customer/${staffId}`)
            if(response.status == 200){
                dispatch(setCustomerList(response.data.staffList))
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