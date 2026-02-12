import React from "react";
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";

const AdminOffers = () => {
    const offers = [
        { id: 1, code: "WELCOME50", discount: "50% Off", startDate: "2023-10-01", endDate: "2023-11-01", status: "Active" },
        { id: 2, code: "FESTIVE20", discount: "20% Off", startDate: "2023-10-15", endDate: "2023-10-30", status: "Expired" },
        { id: 3, code: "SUMMER10", discount: "10% Off", startDate: "2024-05-01", endDate: "2024-06-01", status: "Scheduled" },
    ];

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Offers & Coupons</h2>
                <button className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-sm transition-colors">
                    <FiPlus /> Add Coupon
                </button>
            </div>

            {/* Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Coupon..."
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
                                <th className="px-6 py-4">Coupon Code</th>
                                <th className="px-6 py-4">Discount</th>
                                <th className="px-6 py-4">Start Date</th>
                                <th className="px-6 py-4">End Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {offers.map((offer) => (
                                <tr key={offer.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-mono font-medium text-green-700 bg-green-50 w-fit px-2 rounded-md">{offer.code}</td>
                                    <td className="px-6 py-4 font-medium text-gray-800">{offer.discount}</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{offer.startDate}</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{offer.endDate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${offer.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                offer.status === 'Expired' ? 'bg-red-100 text-red-700' :
                                                    'bg-blue-100 text-blue-700'
                                            }`}>
                                            {offer.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="p-1.5 text-gray-400 hover:text-green-600 transition-colors">
                                                <FiEdit2 size={18} />
                                            </button>
                                            <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                                                <FiTrash2 size={18} />
                                            </button>
                                        </div>
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

export default AdminOffers;
