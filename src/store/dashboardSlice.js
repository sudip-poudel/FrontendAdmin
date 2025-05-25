import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_AUTHENTICATED_API } from "../http/AxiosAPI";
import { STATUS } from "./Status";


const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState: {
        dashboardData: null,
        staffPerformanceData: null,
        status: null,
        alertData: null,
    },
    reducers: {
        setDashboardData(state, action) {
            state.dashboardData = action.payload;
        },
        setStaffPerformanceData(state, action) {
            state.staffPerformanceData = action.payload;
        },
        setAlertData(state, action) {
            state.alertData = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        resetDashboardStatus(state, action) {
            state.status = null;
            state.alertData = null;
        }
    }
});

export const { setDashboardData, setStaffPerformanceData, setAlertData, setStatus, resetDashboardStatus } = dashboardSlice.actions;
export default dashboardSlice.reducer;

// Fetch Dashboard Data
export function FetchDashboardData() {
    return async function FetchDashboardDataThunk(dispatch) {
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/dashboard');
            if (response.status === 200) {
                dispatch(setDashboardData(response.data));
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message));
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}

export function FetchStaffPerformance() {
    return async function FetchStaffPerformanceThunk(dispatch) {
        try {
            const response = await ADMIN_AUTHENTICATED_API.get('/dashboard/staffperformance');
            if (response.status === 200) {
                dispatch(setStaffPerformanceData(response.data));
            }
        } catch (error) {
            dispatch(setAlertData(error.response.data.message));
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}