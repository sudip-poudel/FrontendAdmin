import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { STATUS } from '../../store/Status';
import Sidebar from '../component/Sidebar';
import { deleteService, getServiceList, resetServiceStatus } from '../../store/serviceSlice';

function Services() {
    const dispatch = useDispatch()
    const {serviceList, status, alertData} = useSelector(state => state.serviceData)


    // Fetch staff list from Redux store
    useEffect(() => {
        // Dispatch Redux action to fetch staff list
        dispatch(getServiceList())
    },[dispatch])

    
    // Toastify Alert - Shows success or error message
    useEffect(() => {
        if (alertData && status === STATUS.SUCCESS) {
            toast.success(alertData, { position: 'top-right' }); // Show success toast
            dispatch(resetServiceStatus()); // Reset alert state in Redux
        } else if (alertData && status === STATUS.ERROR) { 
            toast.error(alertData, { position: 'top-right' }); // Show error toast
            dispatch(resetServiceStatus()); // Reset alert state in Redux
        }
    }, [alertData, status, dispatch]); // Dependency array ensures effect runs on AlertData or Status change


    // Handle Delete Button
    const handleDeleteBtn = (id) => {
        // Dispatch Redux action to delete staff
        dispatch(deleteService(id))
    }

    return (
    <>
    <ToastContainer/>
    <div className='flex' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar/>
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between ">
                <div>
                    <h2 class="text-blue-800 text-xl font-semibold uppercase">Services</h2>
                </div>
                {/* Plus (+) Icons */}
                <div class="flex items-center justify-between">
                    <div class="lg:ml-40 ml-10 space-x-8">
                        <Link to='/add-service' class="bg-teal-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex items-center">
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
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-8 py-4 overflow-y-auto">
                    {/* Map Loop */}
                    { serviceList && serviceList.map((service, index) => (
                        <div class="relative   flex w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                <img className='h-50' src={service?.photo} alt="ui/ux review check"/>
                                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                            </div>
                            <div class="p-3">
                                <div class="mb-3 flex items-center justify-between">
                                    <h5 class="block font-sans text-md  leading-snug font-extrabold  tracking-normal text-blue-gray-900 antialiased"> {service?.service_name}</h5>
                                    <p class="flex items-center gap-1.5 font-sans text-base  pr-3 font-extrabold leading-relaxed text-blue-gray-900 antialiased">{service?.duration}</p>
                                </div>
                                <p class="block font-sans text-sm font-light leading-relaxed text-gray-700 antialiased">
                                    {service?.description}
                                </p>
                            </div>
                            <div class="p-6 flex gap-x-3 pt-3">
                                <Link to={`/edit-service/${service.id}`} class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true" >
                                    Edit
                                </Link>
                                <button onClick={(e)=>handleDeleteBtn(service.id)} class="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true" >
                                    Delete
                                </button>
                            </div>
                        </div>
                        ))
                    }



                    {/* <div class="relative   flex w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <img className='h-50' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="ui/ux review check"/>
                            <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                        </div>
                        <div class="p-3">
                            <div class="mb-3 flex items-center justify-between">
                                <h5 class="block font-sans text-md font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"> Wooden House, Florida</h5>
                            </div>
                            <p class="block font-sans text-sm font-light leading-relaxed text-gray-700 antialiased">
                                Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div class="p-6 pt-3">
                            <button class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true" >
                                Reserve
                            </button>
                        </div>
                    </div>

                    <div class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <img className='h-50' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="ui/ux review check"/>
                            <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                        </div>
                        <div class="p-3">
                            <div class="mb-3 flex items-center justify-between">
                                <h5 class="block font-sans text-md font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"> Wooden House, Florida</h5>
                            </div>
                            <p class="block font-sans text-sm font-light leading-relaxed text-gray-700 antialiased">
                                Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div class="p-6 pt-3">
                            <button class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true" >
                                Reserve
                            </button>
                        </div>
                    </div>

                    <div class="relative   flex w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <img className='h-50' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="ui/ux review check"/>
                            <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                        </div>
                        <div class="p-3">
                            <div class="mb-3 flex items-center justify-between">
                                <h5 class="block font-sans text-md font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"> Wooden House, Florida</h5>
                            </div>
                            <p class="block font-sans text-sm font-light leading-relaxed text-gray-700 antialiased">
                                Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div class="p-6 pt-3">
                            <button class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true" >
                                Reserve
                            </button>
                        </div>
                    </div>

                    <div class="relative   flex w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <img className='h-50' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="ui/ux review check"/>
                            <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                        </div>
                        <div class="p-3">
                            <div class="mb-3 flex items-center justify-between">
                                <h5 class="block font-sans text-md font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"> Wooden House, Florida</h5>
                            </div>
                            <p class="block font-sans text-sm font-light leading-relaxed text-gray-700 antialiased">
                                Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div class="p-6 pt-3">
                            <button class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true" >
                                Reserve
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services
