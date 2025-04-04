import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { RegisterStaff, resetStaffStatus } from '../../store/staffSlice';
import { STATUS } from '../../store/Status';
import Sidebar from '../component/Sidebar';
import { getBranchList } from '../../store/branchSlice';
import { getServiceList } from '../../store/serviceSlice';
import { addAppointmentService, getSingleAppointmentServiceDetail, resetAppointmentStatus, updateAppointmentService } from '../../store/appointmentSlice';

function EditAppointmentService() {
    const dispatch = useDispatch()
    const id = useParams().id;
    const [branchId, setBranchId] = useState('');
    const [appointmentId, setAppointmentId ] = useState('');
    const [appointmentStatus, setAppointmentStatus] = useState('');

    // Import necessary hooks and utilities (assumed to be present)
    const {singleAppointmentDetail, status, alertData} = useSelector((state)=>state.appointmentData)
    const {branchList} = useSelector((state)=>state.branchData)
    const {serviceList} = useSelector((state)=>state.serviceData)


    useEffect(() => {
        dispatch(getBranchList());
        dispatch(getServiceList());
        dispatch(getSingleAppointmentServiceDetail(id));
    }, [dispatch]);


    useEffect(() => {
        if (singleAppointmentDetail) {
            setBranchId(singleAppointmentDetail?.branchId);
            setAppointmentId(singleAppointmentDetail?.serviceId);
            setAppointmentStatus(singleAppointmentDetail?.appointmentStatus);
        }
    }, [singleAppointmentDetail]);

    // Toastify Alert - Shows success or error message
    useEffect(() => {
        if (alertData && status === STATUS.SUCCESS) {
            toast.success(alertData, { position: 'top-right' }); // Show success toast
            dispatch(resetAppointmentStatus()); // Reset alert state in Redux
        } else if (alertData && status === STATUS.ERROR) { 
            toast.error(alertData, { position: 'top-right' }); // Show error toast
            dispatch(resetAppointmentStatus()); // Reset alert state in Redux
        }
    }, [alertData, status, dispatch]); // Dependency array ensures effect runs on AlertData or Status change

    // Handle Update Form Submission
    const handleUpdateBtn = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // Create FormData object to send form values
        const formData = new FormData();
        formData.append('branchId', branchId);
        formData.append('appointmentId', appointmentId);
        formData.append('appointmentStatus', appointmentStatus);

        // Dispatch Redux action to register staff
        dispatch(updateAppointmentService(id, formData));
    }


    return (
    <>
    <ToastContainer />
    <div className='flex ' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
        <Sidebar/>
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-3">
                <div className='flex'>
                    <Link to='/appointment-service'>
                        <h2 class="text-blue-800 text-xl  font-semibold hover:underline uppercase">Appointment Service</h2>
                    </Link>
                    <h2 class="text-black text-xl px-1 font-bold uppercase">{' > '}</h2>
                    <h2 class="text-blue-800 text-xl font-semibold uppercase">Edit Appointment Service</h2>
                </div>
            </div>
            <div className=' '>
                <div class=" border-4 min-h-[450px] rounded-lg shadow relative ">
                    <div class="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 class="text-2xl font-semibold">
                            Add Appointment
                        </h3>
                    </div>
                    <div class="p-6  space-y-2">
                        <form >
                            <div class="grid gap-y-3 grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="branch" class="text-xl font-medium text-gray-900 block mb-2">Select Branch</label>
                                    <select  name="branch" onChange={(e)=>setBranchId(e.target.value)} value={branchId} id="branch"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                        <option value="">Select Branch</option>
                                        { branchList && branchList.map((branch, index) => (
                                            <option key={index} value={branch.id}>{branch.branchName}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="appoinment" class="text-xl font-medium text-gray-900 block mb-2">Select Appoinment Service</label>
                                    <select  name="appoinment" onChange={(e)=>setAppointmentId(e.target.value)} value={appointmentId} id="appoinment"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                        <option value="">Select Appoinment</option>
                                        { serviceList && serviceList.map((service, index) => (
                                            <option key={index} value={service.id}>{service.service_name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="status" class="text-xl font-medium text-gray-900 block mb-2">Status</label>
                                    <select  name="status" onChange={(e)=>setAppointmentStatus(e.target.value)} value={appointmentStatus} id="gender"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"  required>
                                        <option value="">Select Status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Deactive</option>
                                    </select>
                                </div>
                               
                            </div>
                        </form>
                    </div>
                    <div class="p-6 border-t border-gray-200 rounded-b">
                        <button onClick={handleUpdateBtn} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center" type="submit">Update</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditAppointmentService
