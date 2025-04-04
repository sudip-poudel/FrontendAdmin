import React, { use, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { RegisterStaff, resetStaffStatus } from '../../store/staffSlice';
import { STATUS } from '../../store/Status';
import { DisplayLoggedInAdminDetails } from '../../store/authSlice';
import Sidebar from '../component/Sidebar';

function Profile() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasswrod] = useState('')
    const [phone, setPhone] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')

    // Import necessary hooks and utilities (assumed to be present)
    const {loggedInAdminDetails} = useSelector((state)=>state.authData)

    useEffect(()=>{
        dispatch(DisplayLoggedInAdminDetails())
    },[])


    useEffect(()=>{
        setName(loggedInAdminDetails?.name)
        setEmail(loggedInAdminDetails?.email)
        setPhone(loggedInAdminDetails?.phone)
        setDateOfBirth(loggedInAdminDetails?.DOB)
        setGender(loggedInAdminDetails?.gender)
        setAddress(loggedInAdminDetails?.address)
    },[loggedInAdminDetails])

   
    return (
    <>
    <ToastContainer />
    <div className='flex ' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar/>
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-2">
                <div>
                    <h2 class="text-blue-800 text-2xl font-semibold uppercase">Profile</h2>
                </div>
                {/* Pen Icons */}
                <div class="flex items-center justify-between">
                    <div class=" ">
                        <Link to='/edit-profile' class="bg-teal-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex items-center">
                            <svg viewBox="0 0 24 24" height={24} width={24} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 20.4477 12.4477 20 13 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21Z" fill="#323232"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7736 8.09994C22.3834 6.48381 22.315 4.36152 21.113 3.06183C20.5268 2.4281 19.6926 2.0233 18.7477 2.00098C17.7993 1.97858 16.8167 2.34127 15.91 3.09985C15.8868 3.11925 15.8645 3.13969 15.8432 3.16111L2.87446 16.1816C2.31443 16.7438 2 17.5051 2 18.2987V19.9922C2 21.0937 2.89197 22 4.00383 22H5.68265C6.48037 22 7.24524 21.6823 7.80819 21.1171L20.7736 8.09994ZM17.2071 5.79295C16.8166 5.40243 16.1834 5.40243 15.7929 5.79295C15.4024 6.18348 15.4024 6.81664 15.7929 7.20717L16.7929 8.20717C17.1834 8.59769 17.8166 8.59769 18.2071 8.20717C18.5976 7.81664 18.5976 7.18348 18.2071 6.79295L17.2071 5.79295Z" fill="#323232"></path> </g></svg>
                        </Link>
                    </div>
                    <div class="ml-8">
                        <Link to='/change-password' class="bg-white px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex items-center">
                            <svg fill="#000000" height={24} width={24} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Change_password"> <path d="M464.4326,147.54a9.8985,9.8985,0,0,0-17.56,9.1406,214.2638,214.2638,0,0,1-38.7686,251.42c-83.8564,83.8476-220.3154,83.874-304.207-.0088a9.8957,9.8957,0,0,0-16.8926,7.0049v56.9a9.8965,9.8965,0,0,0,19.793,0v-34.55A234.9509,234.9509,0,0,0,464.4326,147.54Z"></path> <path d="M103.8965,103.9022c83.8828-83.874,220.3418-83.8652,304.207-.0088a9.8906,9.8906,0,0,0,16.8926-6.9961v-56.9a9.8965,9.8965,0,0,0-19.793,0v34.55C313.0234-1.3556,176.0547,3.7509,89.9043,89.9012A233.9561,233.9561,0,0,0,47.5674,364.454a9.8985,9.8985,0,0,0,17.56-9.1406A214.2485,214.2485,0,0,1,103.8965,103.9022Z"></path> <path d="M126.4009,254.5555v109.44a27.08,27.08,0,0,0,27,27H358.5991a27.077,27.077,0,0,0,27-27v-109.44a27.0777,27.0777,0,0,0-27-27H153.4009A27.0805,27.0805,0,0,0,126.4009,254.5555ZM328,288.13a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,328,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,256,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,184,288.13Z"></path> <path d="M343.6533,207.756V171.7538a87.6533,87.6533,0,0,0-175.3066,0V207.756H188.14V171.7538a67.86,67.86,0,0,1,135.7208,0V207.756Z"></path> </g> </g></svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' '>
                <div class=" border-4 h-[600px] rounded-lg shadow relative ">
                    <div class="p-6  space-y-6">
                        <form >
                            <div class="grid gap-y-5 grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="text-xl font-medium text-gray-900 block mb-2">Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} disabled name="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Staff Name" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email" class="text-xl font-medium text-gray-900 block mb-2">Email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} disabled name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="example@gmail.com" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="date" class="text-xl font-medium text-gray-900 block mb-2">Date of birth</label>
                                    <input type="date" onChange={(e)=>setDateOfBirth(e.target.value)} value={dateOfBirth} disabled name="date" id="date" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="phone" class="text-xl font-medium text-gray-900 block mb-2">Phone</label>
                                    <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} name="phone" disabled id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Phone Number" required=""/>
                                </div>
                                
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="address" class="text-xl font-medium text-gray-900 block mb-2">Address</label>
                                    <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address} name="address" disabled id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Pokhara" required=""/>
                                </div>
                                
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="price" class="text-xl font-medium text-gray-900 block mb-2">Gender</label>
                                    <select  name="gender" onChange={(e)=>setGender(e.target.value)} value={gender} id="gender" disabled  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                    <option value="" disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile
