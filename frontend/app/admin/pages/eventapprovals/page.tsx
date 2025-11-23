import React from "react";
import Sidebar from "../../components/layout/Sidebar";

function EventApprovals() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-[#F9FAFB] w-full">
        <header className="p-5 bg-white font-bold text-xl">
          <h1>Event Approvals</h1>
        </header>
        <div className="p-5">
          <h1 className="font-bold">Pending Event Approvals</h1>
          <p className="text-sm text-gray-500 mt-2">
            Review and approve club events
          </p>
        </div>
        {[
          {
            title: "Spring Workshop",
            club: "Dance Troupe",
            desc: "Learn contemporary dance techniques from guest choreographer",
            date: "2024-03-15 at 2:00 PM",
            location: "Dance Studio A",
            attendees: "50+ Students",
          },
          {
            title: "Inter-College Tournament",
            club: "Basketball Club",
            desc: "Annual basketball tournament with neighboring colleges",
            date: "2024-03-20 at 9:00 AM",
            location: "Mini Gymnasium",
            attendees: "50+ Students",
          },
          {
            title: "Spring Exhibition",
            club: "Art Club",
            desc: "Showcase of student artwork from the semester",
            date: "2024-04-05 at 10:00 AM",
            location: "Art Gallery",
            attendees: "50+ Students",
          },
        ].map((event, i) => (
          <div
            key={i}
            className="p-5 m-5 bg-white rounded-2xl shadow-sm flex"
          >
            <div className="flex flex-col w-full">
              <h1 className="font-bold text-xl flex items-center">
                {event.title}
                <span className="bg-blue-100 text-blue-500 ml-3 rounded-2xl text-sm px-3 py-1 font-semibold">
                  {event.club}
                </span>
              </h1>
              <p className="text-sm text-gray-500 mt-2">{event.desc}</p>
              <div className="flex justify-between mt-4">
                <div>
                  <h1 className="text-xs text-gray-500">Date & Time</h1>
                  <p className="font-semibold mt-1">{event.date}</p>
                </div>
                <div>
                  <h1 className="text-xs text-gray-500">Location</h1>
                  <p className="font-semibold mt-1">{event.location}</p>
                </div>
                <div>
                  <h1 className="text-xs text-gray-500">Expected Attendance</h1>
                  <p className="font-semibold mt-1">{event.attendees}</p>
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

export default EventApprovals;
