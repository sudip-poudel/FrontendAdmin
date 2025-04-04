import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Staff from './pages/Staff/Staff';
import AddStaff from './pages/Staff/AddStaff';
import EditStaff from './pages/Staff/EditStaff';
import Customer from './pages/Customer/Customer';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';
import ChangePassword from './pages/Profile/ChangePassword';
import Branch from './pages/Branch/Branch';
import AddBranches from './pages/Branch/AddBranches';
import EditBranch from './pages/Branch/EditBranch';
import Services from './pages/Services/Services';
import AddServices from './pages/Services/AddServices';
import EditService from './pages/Services/EditServices';
import AppointmentService from './pages/Appointment Service/AppointmentService';
import AddAppointmentService from './pages/Appointment Service/AddAppointmentService';
import EditAppointmentService from './pages/Appointment Service/EditAppointmentService';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='/staff' element={<Staff />} />
          <Route path='/add-staff' element={<AddStaff />} />
          <Route path='/edit-staff/:id' element={<EditStaff />} />

          <Route path='/customer' element={<Customer />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/change-password' element={<ChangePassword />} />

          <Route path='/branches' element={<Branch />} />
          <Route path='/add-branch' element={<AddBranches />} />
          <Route path='/edit-branch/:id' element={<EditBranch />} />

          <Route path='/services' element={<Services/>}/>
          <Route path='/add-service' element={<AddServices/>}/>
          <Route path='/edit-service/:id' element={<EditService/>}/>

          <Route path='/appointment-service' element={<AppointmentService/>}/>
          <Route path='/add-appointment-service' element={<AddAppointmentService/>}/>
          <Route path='/edit-appointment-service/:id' element={<EditAppointmentService/>}/>


        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
