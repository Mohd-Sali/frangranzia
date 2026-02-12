import React from 'react';
import { FiShoppingBag, FiTruck, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const Admin = () => {
  const stats = [
    { label: 'Total Sales', value: 'Rs 34,540', icon: FiDollarSign, color: 'bg-green-100 text-green-600' },
    { label: 'Total Orders', value: '56', icon: FiShoppingBag, color: 'bg-blue-100 text-blue-600' },
    { label: 'Pending Orders', value: '12', icon: FiTruck, color: 'bg-orange-100 text-orange-600' },
    { label: 'Products', value: '145', icon: FiCheckCircle, color: 'bg-teal-100 text-teal-600' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Alex Johnson', date: 'Oct 24, 2023', amount: 'Rs 1,200', status: 'Pending' },
    { id: '#ORD-002', customer: 'Maria Garcia', date: 'Oct 24, 2023', amount: 'Rs 850', status: 'Delivered' },
    { id: '#ORD-003', customer: 'James Smith', date: 'Oct 23, 2023', amount: 'Rs 2,400', status: 'Processing' },
    { id: '#ORD-004', customer: 'Linda Wilson', date: 'Oct 23, 2023', amount: 'Rs 450', status: 'Cancelled' },
    { id: '#ORD-005', customer: 'Robert Brown', date: 'Oct 22, 2023', amount: 'Rs 1,800', status: 'Delivered' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`p-4 rounded-full ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{order.date}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Pending'
                            ? 'bg-orange-100 text-orange-700'
                            : order.status === 'Processing'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-red-100 text-red-700'
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
