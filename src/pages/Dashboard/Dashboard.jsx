import React from 'react';
import { 
  Users, 
  Calendar, 
  UserCheck, 
  Sparkles, 
  Home, 
  Building, 
  Scissors, 
  Clock, 
  User, 
  CalendarDays, 
  CreditCard, 
  LogOut 
} from 'lucide-react';

const Dashboard = () => {
  const statsData = [
    { title: 'Total Customers', value: '24', icon: Users, color: 'text-blue-500' },
    { title: "Today's Appointments", value: '9', icon: Calendar, color: 'text-green-500' },
    { title: 'Active Staff', value: '5', icon: UserCheck, color: 'text-purple-500' },
    { title: 'Available Services', value: '17', icon: Sparkles, color: 'text-yellow-500' }
  ];

  const revenueData = [
    { period: 'Yesterday', amount: 'Rs 1,250' },
    { period: 'Last 7 Days', amount: 'Rs 8,450' },
    { period: 'Monthly Total', amount: 'Rs 26,500' }
  ];

  const staffData = [
    { name: 'Anita Sharma', role: 'Senior Stylist', appointments: 4, revenue: 'Rs 6,800', status: 'Active' },
    { name: 'Ravi Patel', role: 'Junior Stylist', appointments: 3, revenue: 'Rs 3,200', status: 'Active' },
    { name: 'Priya Khan', role: 'Color Specialist', appointments: 2, revenue: 'Rs 5,500', status: 'On Leave' }
  ];

  // const sidebarItems = [
  //   { icon: Home, label: 'Dashboard', active: true },
  //   { icon: Building, label: 'Branches' },
  //   { icon: Scissors, label: 'Services' },
  //   { icon: Clock, label: 'Appointment Services' },
  //   { icon: User, label: 'Staff' },
  //   { icon: Users, label: 'Customer' },
  //   { icon: CalendarDays, label: 'Appointment' },
  //   { icon: CreditCard, label: 'Payment' },
  //   { icon: LogOut, label: 'Logout' }
  // ];

  return (
            <div className='flex ' style={{ fontFamily: "'Vanlose BookType', sans-serif" }}>
                <Sidebar />
      {/* Sidebar */}
      {/* <div className="w-64 bg-gradient-to-b from-pink-200 to-pink-300 shadow-lg"> */}
      {/*   <div className="p-6"> */}
      {/*     <div className="flex items-center space-x-3 mb-8"> */}
      {/*       <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center"> */}
      {/*         <Sparkles className="w-6 h-6 text-white" /> */}
      {/*       </div> */}
      {/*       <div> */}
      {/*         <h1 className="text-lg font-bold text-gray-800">AM HAIR SALON</h1> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/**/}
      {/*   <nav className="px-4"> */}
      {/*     {sidebarItems.map((item, index) => ( */}
      {/*       <div */}
      {/*         key={index} */}
      {/*         className={`flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg cursor-pointer transition-colors ${ */}
      {/*           item.active  */}
      {/*             ? 'bg-white bg-opacity-30 text-gray-800 font-medium'  */}
      {/*             : 'text-gray-700 hover:bg-white hover:bg-opacity-20' */}
      {/*         }`} */}
      {/*       > */}
      {/*         <item.icon className="w-5 h-5" /> */}
      {/*         <span className="text-sm">{item.label}</span> */}
      {/*       </div> */}
      {/*     ))} */}
      {/*   </nav> */}
      {/* </div> */}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Revenue Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {revenueData.map((revenue, index) => (
                <div key={index}>
                  <p className="text-sm text-gray-600 mb-2">{revenue.period}</p>
                  <p className="text-2xl font-bold text-gray-900">{revenue.amount}</p>
                </div>
              ))}
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
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 uppercase tracking-wide">
                      Role
                    </th>
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
                  {staffData.map((staff, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <p className="font-medium text-gray-900">{staff.name}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-gray-600">{staff.role}</p>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <p className="font-medium text-gray-900">{staff.appointments}</p>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <p className="font-medium text-gray-900">{staff.revenue}</p>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                            staff.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {staff.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
