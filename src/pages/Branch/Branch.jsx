import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { STATUS } from '../../store/Status';
import Sidebar from '../component/Sidebar';
import { deleteBranch, getBranchList, resetBranchStatus } from '../../store/branchSlice';

function Branch() {
    const dispatch = useDispatch()
    const {branchList, status, alertData} = useSelector(state => state.branchData)
    
    useEffect(() => {
        // Dispatch Redux action to fetch staff list
        dispatch(getBranchList())
    },[dispatch])

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


    const deleteBranchHandler = (id) => {
        // Dispatch Redux action to delete staff
        dispatch(deleteBranch(id))
    }


    // Open Google Map
    const mapHandler = (latitude, longitude) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`)
    }

  return (
    <>
    <ToastContainer/>
    <div className='flex' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar/>
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between ">
                <div>
                    <h2 class="text-blue-800 text-xl font-semibold uppercase">Branch</h2>
                </div>
                {/* Plus (+) Icons */}
                <div class="flex items-center justify-between">
                    <div class="lg:ml-40 ml-10 space-x-8">
                        <Link to='/add-branch' class="bg-teal-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex items-center">
                            <svg viewBox="0 0 24 24" height={26} width={26} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div class=" sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full class='bg-red-300' leading-normal">
                            <thead >
                                <tr >
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> S.N</th>
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Name</th>
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Phone</th>
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Email</th>
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Address</th>
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Latitude</th>
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Longitude</th>
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider">Created at</th>
                                    <th class="px-2 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                branchList && branchList.map((branch, index)=>(
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap">{index+1}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <div class="flex items-center">
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap"> {branch?.branchName} - {branch?.email} </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {branch?.phone}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {branch?.email}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {branch?.address}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {branch?.latitude}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {branch?.longitude}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {new Date(branch?.createdAt).toLocaleDateString()} {new Date(branch?.createdAt).toLocaleTimeString()}</p>
                                        </td>
                                        <td class="px-5 py-4 border-b border-gray-200 bg-white text-md">
                                            <Link to={`/edit-branch/${branch.id}`}>
                                                <span class="relative inline-block px-3  font-semibold text-green-900 leading-tight">
                                                    <span  aria-hidden class="absolute cursor-pointer inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <svg viewBox="0 -0.5 21 21" height={18} width={18} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit [#1479]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -400.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.9,258.010643 L45.1,258.010643 L45.1,242.095788 L53.5,242.095788 L53.5,240.106431 L43,240.106431 L43,260 L64,260 L64,250.053215 L61.9,250.053215 L61.9,258.010643 Z M49.3,249.949769 L59.63095,240 L64,244.114985 L53.3341,254.031929 L49.3,254.031929 L49.3,249.949769 Z" id="edit-[#1479]"> </path> </g> </g> </g> </g></svg>
                                                </span>
                                            </Link>
                                            <span onClick={()=>deleteBranchHandler(branch.id)} class="relative cursor-pointer mt-1 inline-block px-3 py-1 text-md font-semibold text-green-900 leading-tight">
                                                <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                <svg viewBox="0 -0.5 21 21" height={18} width={18} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
                                            </span>
                                            <span onClick={()=>mapHandler(branch.latitude, branch.longitude)} class="relative cursor-pointer mt-1 inline-block px-3 py-1 text-md font-semibold text-green-900 leading-tight">
                                                <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                <svg viewBox="0 0 16 16" height={18} width={18} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="#000000"></path> </g></svg>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                                }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Branch
