import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import staffSlice from './staffSlice'
import customerSlice from './customerSlice'
import branchSlice from './branchSlice'
import serviceSlice from './serviceSlice'
import appointmentSlice from './appointmentSlice'
import paymentSlice from './paymentSlice'
import dashboardSlice from './dashboardSlice'


export const store = configureStore({
  reducer: {
    authData : authSlice,
    staffData : staffSlice,
    customerData : customerSlice,
    branchData : branchSlice,
    serviceData : serviceSlice,
    appointmentData : appointmentSlice,
    paymentData : paymentSlice,
    dashboardData : dashboardSlice,
  },
})

