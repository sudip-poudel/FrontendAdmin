import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { DeletePaymentDetails, DisplayPaymentList, resetPaymentStatus } from '../../store/paymentSlice';
import { STATUS } from '../../store/Status';
import Sidebar from '../component/Sidebar';

function Payments() {
  const dispatch = useDispatch();

  const { PaymentList, AlertData, Status } = useSelector(state => state.paymentData);

  useEffect(() => {
    // Dispatch Redux action to fetch payment list
    dispatch(DisplayPaymentList());
  }, [dispatch]);

  // Toastify Alert - Shows success or error message
  useEffect(() => {
    if (AlertData && Status === STATUS.SUCCESS) {
      toast.success(AlertData, { position: 'top-right' });
      dispatch(resetPaymentStatus());
    } else if (AlertData && Status === STATUS.ERROR) {
      toast.error(AlertData, { position: 'top-right' });
      dispatch(resetPaymentStatus());
    }
  }, [AlertData, Status, dispatch]);

  const deletePaymentHandler = (id) => {
    // Dispatch Redux action to delete payment
    dispatch(DeletePaymentDetails(id));
  };

  return (
    <>
      <ToastContainer />
      <div className='flex' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar />
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
          <div class=" flex items-center justify-between ">
            <div>
              <h2 class="text-blue-800 text-xl font-semibold uppercase">Staff</h2>
            </div>
            {/* Plus (+) Icons */}
            <div class="flex items-center justify-between">
              <div class="lg:ml-40 ml-10 space-x-8">
                <Link to='/add-staff' class="bg-teal-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex items-center">
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
                      <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> S.N</th>
                      <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> customerName</th>
                      <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> TransactionId</th>
                      <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Amount</th>
                      <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Date</th>
                      <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Status</th>
                      <th class="px-5 bg-red-300 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider"> Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      PaymentList && PaymentList.map((payment, index) => (
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                            <p class="text-gray-900 whitespace-no-wrap">{index + 1}</p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                            <div class="flex items-center">
                              <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap"> {payment?.customerName}  </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                            <p class="text-gray-900 whitespace-no-wrap"> {payment?.transactionId}</p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                            <p class="text-gray-900 whitespace-no-wrap"> {payment?.amount}</p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                            <p class="text-gray-900 whitespace-no-wrap"> {new Date(payment?.createdAt).toLocaleDateString()} {new Date(payment?.createdAt).toLocaleTimeString()}</p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                            <p class="text-gray-900 whitespace-no-wrap"> {payment?.status}</p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-md">
                            <span onClick={() => deletePaymentHandler(payment.id)} class="relative cursor-pointer mt-3 inline-block px-3 py-1 text-md font-semibold text-green-900 leading-tight">
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

export default Payments
