import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { STATUS } from '../../store/Status';
import { DeleteCustomerDetails, DisplayCustomerList, resetCustomerStatus } from '../../store/customerSlice';
import Sidebar from '../component/Sidebar';

function Customer() {
    const dispatch = useDispatch()
    const {CustomerList, AlertData, Status} = useSelector(state => state.customerData)

    useEffect(() => {
        // Dispatch Redux action to fetch customer list
        dispatch(DisplayCustomerList())
    },[dispatch])

    // Toastify Alert - Shows success or error message
    useEffect(() => {
        if (AlertData && Status === STATUS.SUCCESS) {
            toast.success(AlertData, { position: 'top-right' }); // Show success toast
            dispatch(resetCustomerStatus()); // Reset alert state in Redux
        } else if (AlertData && Status === STATUS.ERROR) { 
            toast.error(AlertData, { position: 'top-right' }); // Show error toast
            dispatch(resetCustomerStatus()); // Reset alert state in Redux
        }
    }, [AlertData, Status, dispatch]); // Dependency array ensures effect runs on AlertData or Status change


    const deleteCustomerHandler = (id) => {
        // Dispatch Redux action to delete staff
        dispatch(DeleteCustomerDetails(id))
    }

    return (
    <>
    <ToastContainer/>
    <div className='flex' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar/>
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-3">
                <div>
                    <h2 class="text-blue-800 text-xl font-semibold uppercase">Customer</h2>
                </div>
            </div>
            <div>
                <div class=" sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full class='bg-red-300' leading-normal">
                            <thead >
                                <tr >
                                    <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> S.N</th>
                                    <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Name</th>
                                    <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Phone</th>
                                    <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Birth</th>
                                    <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Gender</th>
                                    <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Address</th>
                                    <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider">Enrolled at</th>
                                    <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                CustomerList && CustomerList.map((customer, index)=>(
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap">{index+1}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full" src={customer?.profilePicture} alt={customer?.name} />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap"> {customer?.name} - {customer?.email} </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {customer?.phoneNumber}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {customer?.DOB}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {customer?.gender}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {customer?.address}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <p class="text-gray-900 whitespace-no-wrap"> {new Date(customer?.createdAt).toLocaleDateString()} {new Date(customer?.createdAt).toLocaleTimeString()}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                                            <span onClick={()=>deleteCustomerHandler(customer.id)} class="relative cursor-pointer mt-3 inline-block px-3 py-1 text-md font-semibold text-green-900 leading-tight">
                                                <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                <svg viewBox="0 -0.5 21 21" height={18} width={18} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
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

export default Customer
