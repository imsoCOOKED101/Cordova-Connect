import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import { TrendingUp, User, Calendar, Activity } from "lucide-react";

function Analytics() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="bg-[#F9FAFB] w-full min-h-screen">
        <header className="border-b p-5 bg-white font-bold text-xl">
          <h1>System Analytics</h1>
        </header>

        <main className="p-10 space-y-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="text-blue-500" />,
                change: "+12%",
                value: "89%",
                label: "Engagement Rate",
              },
              {
                icon: <User className="text-purple-500" />,
                change: "+8%",
                value: "543",
                label: "Active Students",
              },
              {
                icon: <Calendar className="text-green-500" />,
                change: "+15%",
                value: "45",
                label: "Events This Month",
              },
              {
                icon: <Activity className="text-orange-500" />,
                change: "+5%",
                value: "9",
                label: "Active Clubs",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="shadow rounded-2xl bg-white p-5 flex flex-col justify-between h-32 hover:shadow-md transition"
              >
                <div className="flex justify-between">
                  {item.icon}
                  <p className="text-xs font-semibold text-green-500">{item.change}</p>
                </div>
                <h1 className="text-2xl font-bold">{item.value}</h1>
                <p className="text-xs text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="shadow rounded-2xl bg-white p-5">
              <h1 className="font-bold text-lg">Club Participation Trends</h1>

              <div className="flex items-end justify-between mt-6 h-48">
                {[
                  { month: "Jan", h: "h-32" },
                  { month: "Feb", h: "h-36" },
                  { month: "Mar", h: "h-28" },
                  { month: "Apr", h: "h-40" },
                  { month: "May", h: "h-44" },
                  { month: "Jun", h: "h-34" },
                  { month: "Jul", h: "h-48" },
                  { month: "Aug", h: "h-40" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-8 bg-blue-200 rounded ${item.h}`}></div>
                    <p className="text-xs mt-2 text-gray-500">{item.month}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="shadow rounded-2xl bg-white p-5">
              <h1 className="font-bold text-lg">Top Performing Clubs</h1>

              <div className="mt-4 space-y-5">
                {[
                  { name: "CPC Buddies", val: 95 },
                  { name: "Banag-banag", val: 88 },
                  { name: "Art Club", val: 82 },
                  { name: "Dance Troupe", val: 79 },
                ].map((club, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-medium">
                      <span>{club.name}</span>
                      <span>{club.val}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded mt-1">
                      <div
                        className="h-2 bg-blue-500 rounded transition-all"
                        style={{ width: `${club.val}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="shadow rounded-2xl bg-white p-5">
            <h1 className="font-bold text-lg">College-Level Participations</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
              {[
                { val: "92%", label: "College of Computer Studies" },
                { val: "85%", label: "College of Hospitality Management" },
                { val: "88%", label: "College of Teacher Education" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#F9FAFB] p-5 text-center shadow-sm hover:shadow transition"
                >
                  <h1 className="text-2xl font-bold text-blue-500">{item.val}</h1>
                  <p className="text-xs mt-1 text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Analytics;
