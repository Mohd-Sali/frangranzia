import React, { useState } from "react";
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiDownload, FiUpload } from "react-icons/fi";
import p1_img from "../assets/Product-1.png";
import p2_img from "../assets/Product-2.png";
import p3_img from "../assets/Product-3.png";

// Mock Data
const initialProducts = [
  { id: 1, name: "Autograph Perfume", category: "Fragrance", price: "Rs 899", stock: 45, status: "Active", image: p1_img },
  { id: 2, name: "Luxury Scent", category: "Fragrance", price: "Rs 1200", stock: 20, status: "Active", image: p2_img },
  { id: 3, name: "Cool Blue deo", category: "Deodorant", price: "Rs 450", stock: 10, status: "Low Stock", image: p3_img },
  { id: 4, name: "Floral Essence", category: "Attar", price: "Rs 1500", stock: 0, status: "Out of Stock", image: p1_img },
];

const AdminProducts = () => {
  const [products] = useState(initialProducts);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium shadow-sm">
            <FiUpload /> Export
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-sm transition-colors">
            <FiPlus /> Add Product
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
          />
        </div>
        <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 w-full md:w-auto">
          <option>Category</option>
          <option>Fragrance</option>
          <option>Deodorant</option>
        </select>
        <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 w-full md:w-auto">
          <option>Status</option>
          <option>Active</option>
          <option>Out of Stock</option>
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 p-1">
                        <img src={product.image} alt="" className="w-full h-full object-contain" />
                      </div>
                      <span className="font-medium text-gray-800">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{product.category}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{product.price}</td>
                  <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${product.status === 'Active' ? 'bg-green-100 text-green-700' :
                        product.status === 'Low Stock' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                      }`}>
                      {product.status}
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

export default AdminProducts;
