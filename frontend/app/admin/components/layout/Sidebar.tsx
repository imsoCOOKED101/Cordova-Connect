"use client";

import { useRouter, usePathname } from "next/navigation";
import { BookPlus, Home, Book, Users, Clock, LogOut } from "lucide-react";
import { useState } from "react";
// import Cpc from '@/public/cpc-logo.jpg';
// import Image from 'next/image';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { path: "/admin/dashboard", icon: Home, label: "Dashboard" },
    { path: "/admin/books", icon: Book, label: "Club Approvals" },
    { path: "/admin/members", icon: Users, label: "Event Approvals" },
    { path: "/admin/books/add", icon: BookPlus, label: "Analytics" },
    { path: "/admin/borrow", icon: Clock, label: "Settings" },
  ];

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="hidden md:block w-100 bg-white text-black min-h-screen p-6 relative">
        <div className="mb-8">
          <div className="flex justify-between items-center space-x-3">
            <div className="flex items-center space-x-3">
              {/* <BookOpen className="w-8 h-8" /> */}
              {/* <Image src={Cpc} alt="Cpc Logo" className="w-10 h-10 border-white border-2 rounded-full"/> */}
              <div>
                <h2 className="font-bold text-lg text-blue-500">
                  Cordova Connect
                </h2>
                <p className="text-xs text-black ">Admin Portal</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`w-full text-md flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.path ? "bg-blue-300" : "hover:bg-blue-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="w-full">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center w-full space-x-3 px-4 py-3 text-red-300 hover:text-white hover:bg-red-600 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Confirm Logout
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to logout?
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
