
import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_AUTHENTICATED_API } from "../http/AxiosAPI";
import { STATUS } from "./Status";

const paymentSlice = createSlice({
    name: 'paymentSlice',
    initialState: {
        PaymentList: null,
        Status: null,
        AlertData: null,
    },
    reducers: {
        setPaymentList(state, action) {
            state.PaymentList = action.payload;
        },
        setAlertData(state, action) {
            state.AlertData = action.payload;
        },
        setStatus(state, action) {
            state.Status = action.payload;
        },
        resetPaymentStatus(state) {
            state.Status = null;
            state.AlertData = null;
        }
    }
});

export const { setPaymentList, setAlertData, setStatus, resetPaymentStatus } = paymentSlice.actions;
export default paymentSlice.reducer;

// Display Payment List
export function DisplayPaymentList() {
    return async function DisplayPaymentListThunk(dispatch) {
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/payments');
            if (response.status === 200) {
                dispatch(setPaymentList(response.data.payments));
            }
        } catch (error) {
            dispatch(setAlertData(error.response?.data?.message || 'Failed to fetch payments.'));
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

// Delete Payment Details
export function DeletePaymentDetails(paymentId) {
    return async function DeletePaymentDetailsThunk(dispatch) {
        try {
            const response = await ADMIN_AUTHENTICATED_API.delete(`/payment/${paymentId}`);
            if (response.status === 200) {
                dispatch(setPaymentList(response.data.paymentList));
                dispatch(setAlertData(response.data.message));
                dispatch(setStatus(STATUS.SUCCESS));
            } else {
                return { status: 400, message: 'Failed to delete payment.' };
            }
        } catch (error) {
            if (error.response?.status === 401) {
                dispatch(setAlertData(error.response.data.message));
                dispatch(setStatus(STATUS.ERROR));
            } else {
                return { status: 400, message: 'Failed to delete payment.' };
            }
        }
    }
}
