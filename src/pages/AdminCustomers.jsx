import React from "react";
import { FiSearch, FiMail, FiPhone } from "react-icons/fi";

const AdminCustomers = () => {
    const customers = [
        { id: 1, name: "Alex Johnson", email: "alex@example.com", phone: "+91 98765 43210", joinDate: "Oct 24, 2023", orders: 5 },
        { id: 2, name: "Maria Garcia", email: "maria@example.com", phone: "+91 98765 43211", joinDate: "Oct 20, 2023", orders: 12 },
        { id: 3, name: "James Smith", email: "james@example.com", phone: "+91 98765 43212", joinDate: "Sep 15, 2023", orders: 2 },
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Customers</h2>

            {/* Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Customer..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Phone</th>
                                <th className="px-6 py-4">Join Date</th>
                                <th className="px-6 py-4 text-center">Orders</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {customers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-800">{customer.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm flex items-center gap-2">
                                        <FiMail size={14} className="text-gray-400" /> {customer.email}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">
                                        <div className="flex items-center gap-2">
                                            <FiPhone size={14} className="text-gray-400" /> {customer.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{customer.joinDate}</td>
                                    <td className="px-6 py-4 text-center font-medium text-gray-800">{customer.orders}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminCustomers;
