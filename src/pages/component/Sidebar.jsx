import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png';

function Sidebar() {

    // Logout
    const logout = () => {
        localStorage.removeItem('UserJWT'); // Remove JWT token from localStorage
        window.location.href = '/login';  // Redirect to login page
    };
      
    return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
    <div class="min-h-screen  flex flex-row bg-gray-100"  style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <div class="flex flex-col w-80 bg-red-100 text-white  overflow-hidden">
            <div class=" items-center pb-4 justify-center shadow-md">
                <img alt="Your Company" src={Logo} className="mx-auto h-28 w-auto"/>
                <div className="flex text-xl items-center justify-center">
                    <h6 className=" text-2xl uppercase text-blue-800 font-extrabold">AM Hair Salon</h6>
                </div>
            </div>
            <ul class="flex pl-4 gap-y-1 flex-col py-4">
                <li>
                    <Link to='/'  class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                            <svg viewBox="0 0 16 16" height={22} width={24} fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#000000"></path> </g></svg>
                        </span>
                        <span class="text-xl font-medium">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to='/branches' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                            <svg viewBox="0 0 16 16" height={24} width={28} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H2V16H6V12H10V16H14V0ZM5 3H7V5H5V3ZM7 7H5V9H7V7ZM9 3H11V5H9V3ZM11 7H9V9H11V7Z" fill="#000000"></path> </g></svg>
                        </span>
                        <span class="text-xl font-medium">Branches</span>
                    </Link>
                </li>
                <li>
                    <Link to='/services' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                            <svg viewBox="0 0 24 24" height={26} width={28} xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 1 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135-4.95-4.95zM3.161 4.468a6.503 6.503 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137 4.243 4.242-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192z"></path> </g> </g></svg>
                        </span>
                        <span class="text-xl font-medium">Services</span>
                    </Link>
                </li>
                <li>
                    <Link to='/appointment-service' class="flex flex-row pl-3 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <svg viewBox="0 0 48 48" height={26} width={26} xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>service-setting-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M28.7,18.8l-1.8,2.9,1.4,1.4,2.9-1.8,1,.4L33,25h2l.8-3.3,1-.4,2.9,1.8,1.4-1.4-1.8-2.9a4.2,4.2,0,0,0,.4-1L43,17V15l-3.3-.8a4.2,4.2,0,0,0-.4-1l1.8-2.9L39.7,8.9l-2.9,1.8-1-.4L35,7H33l-.8,3.3-1,.4L28.3,8.9l-1.4,1.4,1.8,2.9a4.2,4.2,0,0,0-.4,1L25,15v2l3.3.8A4.2,4.2,0,0,0,28.7,18.8ZM34,14a2,2,0,1,1-2,2A2,2,0,0,1,34,14Z"></path> <path d="M42.2,28.7a5.2,5.2,0,0,0-4-1.1l-9.9,1.8a4.5,4.5,0,0,0-1.4-3.3L19.8,19H5a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2H8.3l11.2,9.1,20.4-3.7a5,5,0,0,0,2.3-8.7Zm-3,4.8L20.5,36.9,10,28.2V23h8.2l5.9,5.9a.8.8,0,0,1-1.2,1.2l-3.5-3.5a2,2,0,0,0-2.8,2.8l3.5,3.5a4.5,4.5,0,0,0,3.4,1.4,5.7,5.7,0,0,0,1.8-.3h0l13.6-2.4a1.1,1.1,0,0,1,.8.2.9.9,0,0,1,.3.7A1,1,0,0,1,39.2,33.5Z"></path> </g> </g> </g></svg>
                        <span class="text-xl font-medium pl-3">Appointment Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/staff" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                            <svg viewBox="0 0 16 16" height={25} width={26} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#000000"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#000000"></path> </g></svg>
                        </span>
                        <span class="text-xl font-medium">Staff</span>
                    </Link>
                </li>
                <li>
                    <Link to='/customer' class="flex pl-3 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <svg viewBox="0 0 1024 1024" height={26} width={26} class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M795.4 749.7c17.2-21.8 27.5-49.3 27.5-79.3 0-70.7-57.3-128-128-128s-128 57.3-128 128c0 29.9 10.3 57.5 27.5 79.3-70.6 36.5-118.9 110.2-118.9 195h73.1c0-80.7 65.6-146.3 146.3-146.3S841.2 864 841.2 944.7h73.1c0-84.7-48.4-158.4-118.9-195zM694.9 615.6c30.2 0 54.9 24.6 54.9 54.9 0 30.2-24.6 54.9-54.9 54.9-30.2 0-54.9-24.6-54.9-54.9 0-30.3 24.6-54.9 54.9-54.9z" fill="#0F1F3C"></path><path d="M109.7 73.1v877.8h329.2v-73.2h-256V146.3h658.3V512h73.1V73.1z" fill="#0F1F3C"></path><path d="M256 256h512v73.1H256zM256 402.3h365.7v73.1H256zM256 548.6h219.4v73.1H256z" fill="#0F1F3C"></path></g></svg>
                        <span class="text-xl font-medium pl-2">Customer</span>
                    </Link>
                </li>
                <li>
                    <Link to='/staff-list' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                        <span class="text-xl font-medium">Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to='/orders' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                        <span class="text-xl font-medium">Payment</span>
                    </Link>
                </li>
                {/* <li>
                    <Link to='/profile' class="flex pl-3 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <svg fill="#000000" height={26} width={26} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile1</title> <path d="M23 11.031c0-0.553-0.448-1-1-1h-3c0 0 0.033-1.204 0.033-2.954 0-1.625-1.346-3.108-3.033-3.108s-2.988 1.411-2.988 3.099c0 1.625-0.012 2.964-0.012 2.964h-3c-0.553 0-1 0.447-1 1 0 0.552 0 1.938 0 1.938h14c0-0.001 0-1.387 0-1.939zM16 8.969c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1 0.552 0 1 0.447 1 1s-0.448 1-1 1zM28 11.031l-4-0.062 0.021 3.104h-16.021v-2.979l-4-0.062c-1.104 0-2 0.896-2 2v14c0 1.104 0.896 2 2 2h24c1.104 0 2-0.896 2-2v-14c0-1.105-0.896-2.001-2-2.001zM10 16.844c1.208 0 2.188 1.287 2.188 2.875s-0.98 2.875-2.188 2.875-2.188-1.287-2.188-2.875 0.98-2.875 2.188-2.875zM5.667 25.979c0 0 0.237-1.902 0.776-2.261s2.090-0.598 2.090-0.598 1.006 1.075 1.434 1.075c0.427 0 1.433-1.075 1.433-1.075s1.552 0.238 2.091 0.598c0.633 0.422 0.791 2.261 0.791 2.261h-8.615zM26 25.031h-9v-1h9v1zM26 23.031h-9v-1h9v1zM26 21.031h-9v-1h9v1zM26 19.031h-9v-1h9v1z"></path> </g></svg>
                        <span class="text-xl font-medium pl-2">Profile</span>
                    </Link>
                </li> */}
            
                <li>
                <div  onClick={logout} class="flex pl-4 flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <svg fill="#000000" viewBox="0 0 32 32" width={28} height={28} version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>logout</title> <path d="M0 9.875v12.219c0 1.125 0.469 2.125 1.219 2.906 0.75 0.75 1.719 1.156 2.844 1.156h6.125v-2.531h-6.125c-0.844 0-1.5-0.688-1.5-1.531v-12.219c0-0.844 0.656-1.5 1.5-1.5h6.125v-2.563h-6.125c-1.125 0-2.094 0.438-2.844 1.188-0.75 0.781-1.219 1.75-1.219 2.875zM6.719 13.563v4.875c0 0.563 0.5 1.031 1.063 1.031h5.656v3.844c0 0.344 0.188 0.625 0.5 0.781 0.125 0.031 0.25 0.031 0.313 0.031 0.219 0 0.406-0.063 0.563-0.219l7.344-7.344c0.344-0.281 0.313-0.844 0-1.156l-7.344-7.313c-0.438-0.469-1.375-0.188-1.375 0.563v3.875h-5.656c-0.563 0-1.063 0.469-1.063 1.031z"></path> </g></svg>
                    <span class="text-xl font-medium">Logout</span>
                </div>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar
