import React from "react";
import Sidebar from "../../components/layout/Sidebar";

function ClubApprovals() {
  const clubs = [
    {
      initial: "B",
      name: "Banag-banag Cultural Society",
      desc: "Celebrating Filipino heritage and traditions through cultural activities",
      leader: "Maria Santos",
      category: "Community",
      members: 50,
    },
    {
      initial: "R",
      name: "Robotics Club",
      desc: "Building and programming robots for competitions",
      leader: "John Doe",
      category: "Technology",
      members: 30,
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <main className="bg-[#F9FAFB] w-full min-h-screen">
        <header className="p-5 bg-white font-bold text-xl">
          <h1>Club Approvals</h1>
        </header>

        <div className="p-5">
          <h1 className="font-bold">Pending Club Applications</h1>
          <p className="text-sm text-gray-500 mt-2">
            Review and approve new club applications
          </p>
        </div>

        {clubs.map((club, index) => (
          <div
            key={index}
            className="p-5 m-5 bg-white rounded-2xl flex gap-5"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
              <h1 className="font-bold text-3xl text-blue-500">
                {club.initial}
              </h1>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="font-bold text-xl">{club.name}</h1>
              <p className="text-sm text-gray-500 mt-1">{club.desc}</p>

              <div className="flex justify-between mt-4">
                <div className="flex flex-col">
                  <h1 className="text-sm text-gray-500">Proposed Leader</h1>
                  <p className="font-bold mt-1">{club.leader}</p>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-sm text-gray-500">Category</h1>
                  <p className="font-bold mt-1">{club.category}</p>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-sm text-gray-500">Expected Members</h1>
                  <p className="font-bold mt-1">{club.members}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 w-full">
                <button className="flex items-center justify-center gap-2 bg-[#16A34A] text-white py-2 rounded-md cursor-pointer hover:bg-green-700 transition">
                  <span className="">✓</span> Approve Club
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#E17100] text-white py-2 rounded-md cursor-pointer hover:bg-orange-700 transition">
                  <span>🛈︎</span> Request Changes
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#DC2626] text-white py-2 rounded-md cursor-pointer hover:bg-red-700 transition">
                  <span>✕</span> Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default ClubApprovals;
