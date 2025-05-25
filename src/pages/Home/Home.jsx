import React, {  useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  UserCheck, 
  Sparkles,
  Loader, 
} from 'lucide-react';
import Sidebar from '../component/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDashboardData, FetchStaffPerformance } from '../../store/dashboardSlice';
import { ToastContainer, toast } from 'react-toastify';
import { STATUS } from '../../store/Status';

const Dashboard = () => {
  const dispatch = useDispatch()
  const { dashboardData, staffPerformanceData, alertData, status } = useSelector((state) => state.dashboardData);
  useEffect(() => {
    // Fetch dashboard data when the component mounts
    dispatch(FetchDashboardData());
    dispatch(FetchStaffPerformance())

  }, [dispatch]);

  useEffect(() => {
     if (alertData && status === STATUS.SUCCESS) {
            toast.success(alertData, { position: 'top-right' }); // Show success toast
        } else if (alertData && status === STATUS.ERROR) { 
            toast.error(alertData, { position: 'top-right' }); // Show error toast
        }
  }
  , [alertData, status,dispatch]);


	console.log('dashboardData', dashboardData);
	console.log('staffPerformanceData', staffPerformanceData);

  return (
    <div className="flex w-full">
      <ToastContainer />
			<Sidebar />

      {/* Main Content */}
			{dashboardData && dashboardData.data ?<div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Customers</p>
                    <p className="text-3xl font-bold text-gray-900">{dashboardData.data.totalCustomers ?? 0}</p>
                  </div>
                  <Users className={`w-8 h-8 text-blue-500`} />
                </div>
								</div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Today's Appointments</p>
                    <p className="text-3xl font-bold text-gray-900">{dashboardData.data.todaysAppointments ?? 0}</p>
                  </div>
                  <Calendar className={`w-8 h-8 text-blue-500`} />
                </div>
							</div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Active Staff</p>
                    <p className="text-3xl font-bold text-gray-900">{dashboardData.data.activeStaff ?? 0}</p>
                  </div>
                  <UserCheck className={`w-8 h-8 text-blue-500`} />
                </div>
							</div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Available Services</p>
                    <p className="text-3xl font-bold text-gray-900">{dashboardData.data.availableServices ?? 0}</p>
                  </div>
                  <Sparkles className={`w-8 h-8 text-blue-500`} />
                </div>
								
              </div>
							</div>

          {/* Revenue Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Revenue Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div >
                  <p className="text-sm text-gray-600 mb-2">Yesterday</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardData.data.yesterDaysRevenue ?? 0}</p>
                </div>
                <div >
                  <p className="text-sm text-gray-600 mb-2">Last 7 Days</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardData.data.last7DaysRevenue ?? 0}</p>
                </div>
                <div >
                  <p className="text-sm text-gray-600 mb-2">Monthly Total</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardData.data.lastMonthRevenue ?? 0}</p>
                </div>

            </div>
          </div>

          {/* Staff Performance */}
           <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Staff Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Staff Member
                    </th>
                    {/* <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Role
                    </th> */}
                    <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Today's Appointments
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Revenue Generated
                    </th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {staffPerformanceData.staffPerformance.map((staff, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <p className="font-medium text-gray-900">{staff.name}</p>
                      </td>
                      {/* <td className="py-4 px-4">
                        <p className="text-gray-600">{staff.role}</p>
                      </td> */}
                      <td className="py-4 px-4 text-center">
                        <p className="font-medium text-gray-900">{staff.appointmentCount}</p>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <p className="font-medium text-gray-900">{staff.revenue}</p>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                            staff.status 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {staff.status  ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> 
        </div>
      </div> : <Loader className="w-8 h-8 text-blue-500 animate-spin mx-auto mt-20" />}
    </div>
  );
};

export default Dashboard;
