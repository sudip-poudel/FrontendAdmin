import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { STATUS } from '../../store/Status';
import { DisplayLoggedInAdminDetails, resetStats, UpdateLoggedInUserDetails } from '../../store/authSlice';
import Sidebar from '../component/Sidebar';

function EditProfile() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')

    // Import necessary hooks and utilities (assumed to be present)
    const {loggedInAdminDetails, alertData, status} = useSelector(state=>state.authData)

    useEffect(() => {
        // Fetch admin details on component mount.
        dispatch(DisplayLoggedInAdminDetails());
    }, [dispatch]);



    // Toastify Alert - Shows success or error message
    useEffect(() => {
        if (alertData && status === STATUS.SUCCESS) {
            toast.success(alertData, { position: 'top-right' }); // Show success toast
            dispatch(resetStats()); // Reset alert state in Redux
        } else if (alert && status === STATUS.ERROR) { 
            toast.error(alertData, { position: 'top-right' }); // Show error toast
            dispatch(resetStats()); // Reset alert state in Redux
        }
    }, [alertData, status, dispatch]); // Dependency array ensures effect runs on AlertData or Status change
    

    useEffect(() => {
        // Update state with admin details.
        setName(loggedInAdminDetails?.name);
        setEmail(loggedInAdminDetails?.email);
        setPhone(loggedInAdminDetails?.phoneNumber);
        setDateOfBirth(loggedInAdminDetails?.DOB);
        setGender(loggedInAdminDetails?.gender);
        setAddress(loggedInAdminDetails?.address);
    }, [loggedInAdminDetails]);


    // Handle Form Submission
    const handleUpdateBtn = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // Create FormData object to send form values
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('dateOfBirth', dateOfBirth);
        formData.append('gender', gender);

        // Dispatch Redux action to register staff
        dispatch(UpdateLoggedInUserDetails(formData));

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
                <h2 class="text-blue-800 text-2xl font-semibold uppercase">Edit Profile</h2>
            </div>
            <div className='mt-4 '>
                <div class=" border-4 h-[500px] rounded-lg shadow relative ">
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
                                    <select  name="gender" onChange={(e)=>setGender(e.target.value)} value={gender} id="gender" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                    <option value="" disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="p-6 border-t border-gray-200 rounded-b">
                        <button onClick={handleUpdateBtn} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center" type="submit">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
