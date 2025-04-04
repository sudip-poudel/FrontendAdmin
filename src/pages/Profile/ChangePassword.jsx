import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { STATUS } from '../../store/Status';
import { ChangeAdminPassword, DisplayLoggedInAdminDetails, resetStats } from '../../store/authSlice';
import Sidebar from '../component/Sidebar';

function ChangePassword() {
    const dispatch = useDispatch()
    const [password, setPasswrod] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    // Import necessary hooks and utilities (assumed to be present)
    const { alertData, status} = useSelector(state=>state.authData)

    // Function to Clear Form Values after successful submission
    const clearFormValue = () => {
        setPasswrod('') // Fix: Typo, should be setPassword('')
        setNewPassword('')
        setCPassword('')
    }

    // Toastify Alert - Shows success or error message
    useEffect(() => {
        if (alertData && status === STATUS.SUCCESS) {
            toast.success(alertData, { position: 'top-right' }); // Show success toast
            dispatch(resetStats()); // Reset alert state in Redux
        } else if (alertData && status === STATUS.ERROR) { 
            toast.error(alertData, { position: 'top-right' }); // Show error toast
            dispatch(resetStats()); // Reset alert state in Redux
        }
    }, [alertData, status, dispatch]); // Dependency array ensures effect runs on AlertData or Status change

    // Handle Change Password Button Click
    const handleChangePasswordBtn = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // Create FormData object to send form values
        const formData = new FormData();
        formData.append('oldPassword', password);
        formData.append('newPassword', newPassword);
        formData.append('cPassword', cPassword);

        // Dispatch Redux action to register staff
        dispatch(ChangeAdminPassword(formData));

        // Clear form fields after submission
        clearFormValue();
    }


    return (
    <>
    <ToastContainer />
    <div className='flex ' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar/>
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
            <div class=" flex ">
                <Link to='/profile'>
                    <h2 class="text-blue-800 text-2xl font-semibold hover:underline uppercase">Profile</h2>
                </Link>
                <h2 class="text-black text-2xl px-1 font-bold uppercase">{' > '}</h2>
                <h2 class="text-blue-800 text-2xl font-semibold uppercase">Change Password</h2>
            </div>
            <div className='mt-4 '>
                <div class=" border-4 h-[500px] rounded-lg shadow relative ">
                    <div class="p-6  space-y-6">
                        <form >
                            <div class="grid gap-y-5  gap-6">
                              
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="oldPassword" class="text-xl font-medium text-gray-900 block mb-2">Password</label>
                                    <input type="password" onChange={(e)=>setPasswrod(e.target.value)} value={password} name="oldPassword" id="oldPassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="******" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="newpassword" class="text-xl font-medium text-gray-900 block mb-2">New Password</label>
                                    <input type="password" onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} name="newpassword" id="newpassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="******" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="cpassword" class="text-xl font-medium text-gray-900 block mb-2">Confirm Password</label>
                                    <input type="password" onChange={(e)=>setCPassword(e.target.value)} value={cPassword} name="cpassword" id="cpassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="******" required=""/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="p-6 border-t border-gray-200 rounded-b">
                        <button onClick={handleChangePasswordBtn} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center" type="submit">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword
