import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import {  DisplaySingleStaffDetails, RegisterStaff, resetStaffStatus, UpdateStaffDetails } from '../../store/staffSlice';
import { STATUS } from '../../store/Status';
import Sidebar from '../component/Sidebar';

function EditStaff() {
    const dispatch = useDispatch()
    const staffId = useParams().id
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasswrod] = useState('')
    const [phone, setPhone] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [status, setStatus] = useState('')

    // Import necessary hooks and utilities (assumed to be present)
    const {StaffDetails, AlertData, Status} = useSelector((state)=>state.staffData)


    useEffect(() => {
        setName(StaffDetails?.name)
        setEmail(StaffDetails?.email)
        setPhone(StaffDetails?.phoneNumber)
        setDateOfBirth(StaffDetails?.DOB)
        setGender(StaffDetails?.gender)
        setAddress(StaffDetails?.address)
        setStatus(StaffDetails?.status)

    }, [StaffDetails])

    // Fetch Staff Details 
    useEffect(() => {
        // Dispatch Redux action to fetch staff details
        dispatch(DisplaySingleStaffDetails(staffId))
    }, [])

    // Toastify Alert - Shows success or error message
    useEffect(() => {
        if (AlertData && Status === STATUS.SUCCESS) {
            toast.success(AlertData, { position: 'top-right' }); // Show success toast
            dispatch(resetStaffStatus()); // Reset alert state in Redux
        } else if (AlertData && Status === STATUS.ERROR) { 
            toast.error(AlertData, { position: 'top-right' }); // Show error toast
            dispatch(resetStaffStatus()); // Reset alert state in Redux
        }
    }, [AlertData, Status, dispatch]); // Dependency array ensures effect runs on AlertData or Status change

    // Handle Update Form Submission
    const handleUpdateBtn = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // Create FormData object to send form values
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('dateOfBirth', dateOfBirth);
        formData.append('status', status);
        formData.append('gender', gender);

        // Dispatch Redux action to register staff
        dispatch(UpdateStaffDetails(staffId, formData));
    }


    return (
    <>
    <ToastContainer />
    <div className='flex ' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar/>
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-6">
                <div className='flex'>
                    <Link to='/staff'>
                        <h2 class="text-blue-800 text-2xl font-semibold hover:underline uppercase">Staff</h2>
                    </Link>
                    <h2 class="text-black text-2xl px-1 font-bold uppercase">{' > '}</h2>
                    <h2 class="text-blue-800 text-2xl font-semibold uppercase">Edit Staff</h2>
                </div>
            </div>
            <div className='mt-4 '>
                <div class=" border-4 h-[750px] rounded-lg shadow relative ">
                    <div class="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 class="text-2xl font-semibold">
                            Update Staff
                        </h3>
                    </div>
                    <div class="p-6  space-y-6">
                        <form >
                            <div class="grid gap-y-5 grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="text-xl font-medium text-gray-900 block mb-2">Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} name="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Staff Name" required=""/>
                                </div>
                              
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email" class="text-xl font-medium text-gray-900 block mb-2">Email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="example@gmail.com" required=""/>
                                </div>
                                
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="date" class="text-xl font-medium text-gray-900 block mb-2">Date of birth</label>
                                    <input type="date" onChange={(e)=>setDateOfBirth(e.target.value)} value={dateOfBirth} name="date" id="date" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="phone" class="text-xl font-medium text-gray-900 block mb-2">Phone</label>
                                    <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} name="phone" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Phone Number" required=""/>
                                </div>
                                
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="address" class="text-xl font-medium text-gray-900 block mb-2">Address</label>
                                    <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address} name="address" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Pokhara" required=""/>
                                </div>
                                
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="price" class="text-xl font-medium text-gray-900 block mb-2">Gender</label>
                                    <select  name="gender" onChange={(e)=>setGender(e.target.value)} value={gender} id="gender"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                        <option option value="" disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                               
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="status" class="text-xl font-medium text-gray-900 block mb-2">Status</label>
                                    <select  name="status" onChange={(e)=>setStatus(e.target.value)} value={status} id="gender"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                        <option value="1">Active</option>
                                        <option value="0">Deactive</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="p-6 border-t border-gray-200 rounded-b">
                        <button onClick={handleUpdateBtn} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center" type="submit">Update Staff</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditStaff
