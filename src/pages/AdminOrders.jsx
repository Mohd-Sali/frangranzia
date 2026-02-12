import React from "react";
import { FiSearch, FiEye, FiDownload } from "react-icons/fi";

const AdminOrders = () => {
    const orders = [
        { id: "#ORD-001", customer: "Alex Johnson", date: "Oct 24, 2023", total: "Rs 1,200", status: "Pending", payment: "Paid" },
        { id: "#ORD-002", customer: "Maria Garcia", date: "Oct 24, 2023", total: "Rs 850", status: "Delivered", payment: "Paid" },
        { id: "#ORD-003", customer: "James Smith", date: "Oct 23, 2023", total: "Rs 2,400", status: "Processing", payment: "Unpaid" },
        { id: "#ORD-004", customer: "Linda Wilson", date: "Oct 23, 2023", total: "Rs 450", status: "Cancelled", payment: "Refunded" },
        { id: "#ORD-005", customer: "Robert Brown", date: "Oct 22, 2023", total: "Rs 1,800", status: "Delivered", payment: "Paid" },
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Orders</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium shadow-sm">
                    <FiDownload /> Export All
                </button>
            </div>

            {/* Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Order ID..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                    />
                </div>
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 w-full md:w-auto">
                    <option>Status</option>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Total</th>
                                <th className="px-6 py-4">Payment</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{order.date}</td>
                                    <td className="px-6 py-4 font-medium text-gray-800">{order.total}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`font-medium ${order.payment === 'Paid' ? 'text-green-600' : order.payment === 'Unpaid' ? 'text-orange-500' : 'text-gray-500'}`}>
                                            {order.payment}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${order.status === 'Delivered'
                                                ? 'bg-green-100 text-green-700'
                                                : order.status === 'Pending'
                                                    ? 'bg-orange-100 text-orange-700'
                                                    : order.status === 'Processing'
                                                        ? 'bg-blue-100 text-blue-700'
                                                        : 'bg-red-100 text-red-700'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="p-1.5 text-gray-400 hover:text-green-600 transition-colors">
                                            <FiEye size={18} />
                                        </button>
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

export default AdminOrders;
