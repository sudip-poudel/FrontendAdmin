import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { RegisterStaff, resetStaffStatus } from "../../store/staffSlice";
import { STATUS } from "../../store/Status";
import Sidebar from "../component/Sidebar";
import {
  getSingleServiceDetails,
  resetServiceStatus,
  updateService,
} from "../../store/serviceSlice";

function EditService() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [ServiceName, setServiceName] = useState("");
  const [Duration, setDuration] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Photo, setPhoto] = useState(null);
  const fileInputRef = useRef(null);

  // Import necessary hooks and utilities (assumed to be present)
  const { singleServiceDetails, status, alertData } = useSelector(
    (state) => state.serviceData
  );

  // Fetch single service details from Redux store
  useEffect(() => {
    // Fetch single service details from Redux store
    dispatch(getSingleServiceDetails(id));
  }, []); // Dependency array ensures effect runs only once after initial render

  // Set form values to service details fetched from Redux store
  useEffect(() => {
    if (singleServiceDetails) {
      setServiceName(singleServiceDetails?.service_name);
      setDuration(singleServiceDetails?.duration);
      setPrice(singleServiceDetails?.price);
      setDescription(singleServiceDetails?.description);
    }
  }, [singleServiceDetails]); // Dependency array ensures effect runs only once after initial render

  // Toastify Alert - Shows success or error message
  useEffect(() => {
    if (alertData && status === STATUS.SUCCESS) {
      toast.success(alertData, { position: "top-right" }); // Show success toast
      dispatch(resetServiceStatus()); // Reset alert state in Redux
    } else if (alertData && status === STATUS.ERROR) {
      toast.error(alertData, { position: "top-right" }); // Show error toast
      dispatch(resetServiceStatus()); // Reset alert state in Redux
    }
  }, [alertData, status, dispatch]); // Dependency array ensures effect runs on AlertData or Status change

  // Handle Form Submission
  const handleUpdateBtn = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Create FormData object to send form values
    const formData = new FormData();
    formData.append("service_name", ServiceName);
    formData.append("duration", Duration);
    formData.append("price", Price);
    formData.append("description", Description);
    formData.append("photo", Photo);

    // Dispatch Redux action to register staff
    dispatch(updateService(id, formData));
  };

  return (
    <>
      <ToastContainer />
      <div
        className="flex "
        style={{ fontFamily: "'Vanlose BookType', sans-serif" }}
      >
        <Sidebar />
        <div class="bg-gradient-to-r from-red-200 to-green-200 p-8 rounded-md w-full">
          <div class=" flex items-center justify-between pb-3">
            <div className="flex">
              <Link to="/services">
                <h2 class="text-blue-800 text-xl  font-semibold hover:underline uppercase">
                  Services
                </h2>
              </Link>
              <h2 class="text-black text-xl px-1 font-bold uppercase">
                {" > "}
              </h2>
              <h2 class="text-blue-800 text-xl font-semibold uppercase">
                Edit Service
              </h2>
            </div>
          </div>
          <div className=" ">
            <div class=" border-4 min-h-[550px] rounded-lg shadow relative ">
              <div class="flex items-start justify-between p-5 border-b rounded-t">
                <h3 class="text-2xl font-semibold">Edit Service</h3>
              </div>
              <div class="p-6  space-y-2">
                <form>
                  <div class="grid gap-y-3 grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="name"
                        class="text-xl font-medium text-gray-900 block mb-2"
                      >
                        Service Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setServiceName(e.target.value)}
                        value={ServiceName}
                        name="name"
                        id="name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        placeholder="Service Name"
                        required
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="photo"
                        class="text-xl font-medium text-gray-900 block mb-2"
                      >
                        Photo
                      </label>
                      <input
                        type="file"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        ref={fileInputRef}
                        name="photo"
                        id="photo"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        placeholder=""
                        required
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="duration"
                        class="text-xl font-medium text-gray-900 block mb-2"
                      >
                        Duration
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setDuration(e.target.value)}
                        value={Duration}
                        name="duration"
                        id="duration"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        placeholder="2 - 4 Hours"
                        required
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="price"
                        class="text-xl font-medium text-gray-900 block mb-2"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        value={Price}
                        name="price"
                        id="price"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        placeholder="2000"
                        required
                      />
                    </div>

                    <div class="w-full col-span-6">
                      <label
                        for="Description"
                        class="text-xl font-medium text-gray-900 block mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        value={Description}
                        className="bg-white w-full h-60 p-3"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Somthing About Service"
                        name="Description"
                        id="Description"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
              <div class="p-6 border-t border-gray-200 rounded-b">
                <button
                  onClick={handleUpdateBtn}
                  class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
                  type="submit"
                >
                  Update Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditService;
