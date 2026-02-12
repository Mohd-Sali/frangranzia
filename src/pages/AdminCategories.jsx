import React, { useState } from "react";
import { FiUpload, FiDownload, FiPlus, FiFilter, FiRefreshCw, FiSearch, FiMoreHorizontal, FiChevronLeft, FiChevronRight, FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AdminCategories = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([
        { id: 1, name: "Perfumes", description: "All kinds of perfumes", parent: "Fragrance", status: "Active" },
        { id: 2, name: "Deodorants", description: "Body spray and deodorants", parent: "Fragrance", status: "Active" },
        { id: 3, name: "Attar", description: "Traditional attars", parent: "Fragrance", status: "In Active" },
    ]);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium shadow-sm">
                        <FiUpload /> Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium shadow-sm">
                        <FiDownload /> Import
                    </button>
                </div>
                <button
                    onClick={toggleModal}
                    className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-sm transition-colors"
                >
                    <FiPlus /> Add Category
                </button>
            </div>

            {/* Filter Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Product"
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                        />
                    </div>

                    <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 w-full md:w-auto">
                        <option>Category</option>
                        <option>Fragrance</option>
                        <option>Beauty</option>
                    </select>

                    <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 w-full md:w-auto">
                        <option>Price</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>

                    <button className="flex items-center justify-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium w-full md:w-auto">
                        Filter
                    </button>

                    <button className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 font-medium w-full md:w-auto">
                        Reset
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100/50 text-gray-700 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Description</th>
                                <th className="px-6 py-4">Parent Category</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                                <th className="px-6 py-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {categories.map((category) => (
                                <tr key={category.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-800">{category.name}</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{category.description}</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{category.parent}</td>
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
                                    <td className="px-6 py-4 text-center">
                                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${category.status === 'Active'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                            }`}>
                                            {category.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-white hover:text-gray-800 disabled:opacity-50 transition-colors">
                        <FiChevronLeft /> Previous
                    </button>
                    <span className="text-sm text-gray-600">Page 1 of 1</span>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-white hover:text-gray-800 disabled:opacity-50 transition-colors">
                        Next <FiChevronRight />
                    </button>
                </div>
            </div>

            {/* Add Category Modal (Right Sidebar Drawer style) */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={toggleModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30 bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-300 sm:duration-500"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-300 sm:duration-500"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="px-6 py-6 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                                                <Dialog.Title className="text-lg font-semibold text-gray-800">
                                                    Add Category
                                                </Dialog.Title>
                                                <button
                                                    type="button"
                                                    className="text-gray-400 hover:text-gray-500"
                                                    onClick={toggleModal}
                                                >
                                                    <FiX size={24} />
                                                </button>
                                            </div>

                                            <div className="relative mt-6 flex-1 px-6 sm:px-6">
                                                <form className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Category title"
                                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                                        <textarea
                                                            placeholder="Category Description"
                                                            rows={4}
                                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors resize-none"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Parent Category</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Parent Category"
                                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-colors"
                                                        />
                                                    </div>


                                                    <div>
                                                        <label className="flex items-center gap-3">
                                                            <span className="text-sm font-medium text-gray-700">Variant</span>
                                                            <div className="relative inline-flex items-center cursor-pointer">
                                                                <input type="checkbox" className="sr-only peer" />
                                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                                            </div>
                                                        </label>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <select className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 bg-white">
                                                            <option>-- Select --</option>
                                                            <option>Size</option>
                                                            <option>Color</option>
                                                        </select>
                                                        <button type="button" className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium">Add</button>
                                                    </div>

                                                </form>
                                            </div>

                                            <div className="px-6 py-6 border-t border-gray-100 bg-gray-50 flex gap-4">
                                                <button
                                                    type="button"
                                                    onClick={toggleModal}
                                                    className="flex-1 px-6 py-3 bg-red-400 text-white rounded-lg hover:bg-red-500 font-medium transition-colors"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium transition-colors"
                                                >
                                                    Add Category
                                                </button>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default AdminCategories;
