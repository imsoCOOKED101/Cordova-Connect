"use client";
import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import { Users, Calendar, Clock } from "lucide-react";

function AdminDashboard() {
  const stats = [
    { icon: Users, value: 9, label: "Total Clubs", color: "text-blue-500" },
    { icon: Calendar, value: 5, label: "Pending Events", color: "text-orange-500" },
    { icon: Clock, value: 2, label: "Pending Clubs", color: "text-green-500" },
  ];

  const actions = [
    { label: "Review Pending Events (5)", bg: "bg-[#FEFCE8]", color: "text-[#9A5E07]" },
    { label: "Review Pending Clubs (2)", bg: "bg-[#EFF6FF]", color: "text-blue-500" },
    { label: "Send System Announcement", bg: "bg-[#FAF5FF]", color: "text-[#8C3DD2]" },
  ];

  const recentActivity = [
    { label: "New Event Submission", subtitle: "Dance Troupe: Spring Workshop • 1 hour ago" },
    { label: "Club Application Received", subtitle: "Banag-banag Cultural Society • 3 hours ago" },
    { label: "Event Approved", subtitle: "CPC Buddies: Program • Yesterday" },
  ];

  const overview = [
    { value: 543, label: "Total Students", color: "text-blue-500", bg: "bg-[#F9FAFB]" },
    { value: 27, label: "Club Leaders", color: "text-green-500", bg: "bg-[#F0FDF4]" },
    { value: 45, label: "Events this Month", color: "text-purple-500", bg: "bg-[#FAF5FF]" },
    { value: "89%", label: "Engagement Rate", color: "text-orange-500", bg: "bg-[#FEFCE8]" },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="bg-[#F9FAFB] w-full min-h-screen">
        <header className="border p-5 bg-white font-bold text-xl">
          <h1>Admin Dashboard</h1>
        </header>

        <main className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="shadow w-full rounded-2xl bg-white p-5 flex flex-col justify-between h-32 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center">
                    <Icon className={`text-2xl ${stat.color}`} />
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                  <h1 className="font-semibold">{stat.label}</h1>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
 
            <div className="shadow rounded-2xl bg-white p-5 flex flex-col gap-2 hover:shadow-lg transition">
              <h1 className="font-bold text-lg">Quick Actions</h1>
              <div className="flex flex-col gap-2 mt-2">
                {actions.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-sm ${item.bg}`}
                  >
                    <h1 className={`font-semibold ${item.color}`}>{item.label}</h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="shadow rounded-2xl bg-white p-5 flex flex-col gap-2 hover:shadow-lg transition">
              <h1 className="font-bold text-lg">Recent Activity</h1>
              <div className="flex flex-col gap-2 mt-2">
                {recentActivity.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-sm bg-[#F9FAFB]"
                  >
                    <h1 className="font-semibold">{item.label}</h1>
                    {item.subtitle && <p className="text-xs">{item.subtitle}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="shadow rounded-2xl bg-white p-5 flex flex-col mt-5">
            <h1 className="font-bold text-lg">Platform Overview</h1>
            <div className="grid grid-cols-4 gap-4 mt-6 w-full">
              {overview.map((item, idx) => (
                <div
                  key={idx}
                  className={`w-40 rounded-2xl p-5 text-center ${item.bg}`}
                >
                  <h1 className={`text-2xl font-bold ${item.color}`}>{item.value}</h1>
                  <p className="text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
