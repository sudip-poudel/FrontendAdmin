import React, { useEffect, useState } from 'react'
import { login, resetStats } from '../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from '../../store/Status'
import { ToastContainer, toast } from 'react-toastify'

function Login() {
  // Dispatch hook to send actions to Redux store
  const dispatch = useDispatch()

  // State to hold email and password input values
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Extract authentication state from Redux store
  const {alertData, status} = useSelector(state => state.authData)

  useEffect(()=>{
    // If login is successful, redirect to the homepage
    if( status === STATUS.SUCCESS){
      window.location.href = '/'
    } 
     // If there's an error, show an error toast and reset stats
    else if(alertData && status === STATUS.ERROR){
      toast.error(alertData, {position: 'top-right'}) // Show error message using toast
      dispatch(resetStats())   // Dispatch action to reset the stats in Redux store
    }
  },[alertData, status])   // Runs whenever alertData or status changes


  // Function to handle form submission
  const handleLogin = () => {
    // Create a FormData object to send email and password
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
     // Dispatch login action to Redux with form data
    dispatch(login(formData))
  }

  return (
    <>
    <ToastContainer />
    <div className="min-h-screen bg-gray-100  flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto  md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>  
        <div className="bg-white shadow w-full  rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
            <input type="text" onChange={e=>setEmail(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
            <input type="password" onChange={e=>setPassword(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <button onClick={handleLogin} type="button" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
          </div>
          
        </div>
       
      </div>
    </div>
    </>
  )
}

export default Login