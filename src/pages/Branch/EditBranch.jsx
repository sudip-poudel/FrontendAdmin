import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { STATUS } from '../../store/Status';
import Sidebar from '../component/Sidebar';
import { getSingleBranchDetails, resetBranchStatus, updateBranch } from '../../store/branchSlice';

function EditBranch() {
    const dispatch = useDispatch()
    const branchId = useParams().id
    const [branchName, setBranchName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')


    // Import necessary hooks and utilities (assumed to be present)
    const {singleBranchDetails, status, alertData} = useSelector((state)=>state.branchData)

   useEffect(() => {
        // Fetch single branch details from API
        dispatch(getSingleBranchDetails(branchId));
   }, [branchId])


   useEffect(() => {
        setBranchName(singleBranchDetails?.branchName);
        setPhone(singleBranchDetails?.phone);
        setAddress(singleBranchDetails?.address);
        setEmail(singleBranchDetails?.email);
        setLatitude(singleBranchDetails?.latitude);
        setLongitude(singleBranchDetails?.longitude);

   }, [singleBranchDetails])

    // Toastify Alert - Shows success or error message
    useEffect(() => {
        if (alertData && status === STATUS.SUCCESS) {
            toast.success(alertData, { position: 'top-right' }); // Show success toast
            dispatch(resetBranchStatus()); // Reset alert state in Redux
        } else if (alertData && status === STATUS.ERROR) { 
            toast.error(alertData, { position: 'top-right' }); // Show error toast
            dispatch(resetBranchStatus()); // Reset alert state in Redux
        }
    }, [alertData, status, dispatch]); // Dependency array ensures effect runs on AlertData or Status change

    // Handle Form Submission
    const handleUpdateBtn = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // Create FormData object to send form values
        const formData = new FormData();
        formData.append('branchName', branchName);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('latitude', latitude);
        formData.append('longitude', longitude);

        // Dispatch Redux action to register staff
        dispatch(updateBranch( branchId ,formData));
    }


    return (
    <>
    <ToastContainer />
    <div className='flex ' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar/>
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-3">
                <div className='flex'>
                    <Link to='/branches'>
                        <h2 class="text-blue-800 text-xl  font-semibold hover:underline uppercase">Branch</h2>
                    </Link>
                    <h2 class="text-black text-xl px-1 font-bold uppercase">{' > '}</h2>
                    <h2 class="text-blue-800 text-xl font-semibold uppercase">Edit Branch</h2>
                </div>
            </div>
            <div className=' '>
                <div class=" border-4 h-[550px] rounded-lg shadow relative ">
                    <div class="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 class="text-2xl font-semibold">
                            Add Branch
                        </h3>
                    </div>
                    <div class="p-6  space-y-2">
                        <form >
                            <div class="grid gap-y-3 grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="text-xl font-medium text-gray-900 block mb-2">Branch Name</label>
                                    <input type="text" onChange={(e)=>setBranchName(e.target.value)} value={branchName} name="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Branch Name" required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email" class="text-xl font-medium text-gray-900 block mb-2">Email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="example@gmail.com" required=""/>
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
                                    <label for="Latitude" class="text-xl font-medium text-gray-900 block mb-2">Latitude Value (MAP)</label>
                                    <input type="text" onChange={(e)=>setLatitude(e.target.value)} value={latitude} name="Latitude" id="Latitude" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="38.8951 " required=""/>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Longitude" class="text-xl font-medium text-gray-900 block mb-2">Longitude Value (MAP)</label>
                                    <input type="text" onChange={(e)=>setLongitude(e.target.value)} value={longitude} name="Longitude" id="Longitude" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="-77.0364" required=""/>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="p-6 border-t border-gray-200 rounded-b">
                        <button onClick={handleUpdateBtn} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center" type="submit">Update Branch</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditBranch
