import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import staffSlice from './staffSlice'
import customerSlice from './customerSlice'
import branchSlice from './branchSlice'
import serviceSlice from './serviceSlice'
import appointmentSlice from './appointmentSlice'


export const store = configureStore({
  reducer: {
    authData : authSlice,
    staffData : staffSlice,
    customerData : customerSlice,
    branchData : branchSlice,
    serviceData : serviceSlice,
    appointmentData : appointmentSlice,
  },
})

