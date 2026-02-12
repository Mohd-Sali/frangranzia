import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            <AdminSidebar />
            <div className="flex-1 ml-64 overflow-auto">
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
