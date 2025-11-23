'use client';
import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";

function Settings() {
  const [projectTitle, setProjectTitle] = useState("Cordova Connect");

  return (
    <div className="flex">
      <Sidebar />

      <div className="bg-[#F9FAFB] w-full min-h-screen">
        <header className="border p-5 bg-white font-bold text-xl">
          <h1>Settings</h1>
        </header>

        <main className="p-5 m-10">

          <div className="shadow rounded-2xl bg-white p-5 flex flex-col gap-2">
            <h1 className="font-bold text-lg">General Settings</h1>

            <div className="p-3 rounded-sm">
              <div className="flex flex-col text-left gap-2 font-semibold">
                <label htmlFor="" className="text-sm">System name</label>
                <input
                  type="text"
                  placeholder="Input Title"
                  className="border p-3 rounded-lg flex"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="p-3 rounded-sm bg-[#F9FAFB]">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-sm">Email Notifications</h1>
                  <p className="text-xs">Send email notifications to users</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="email-notif"
                    className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300"
                  />
                  <Label htmlFor="email-notif"></Label>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-sm bg-[#F9FAFB]">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-sm">Maintenance Mode</h1>
                  <p className="text-xs">Disable access for students and club leaders</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="maintenance" className="data-[state=unchecked]:bg-gray-300" />
                  <Label htmlFor="maintenance"></Label>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow rounded-2xl bg-white p-5 flex flex-col gap-2 mt-4">
            <h1 className="font-bold text-lg">Approval Settings</h1>

            <div className="p-3 rounded-sm bg-[#F9FAFB]">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-sm">Email Notifications</h1>
                  <p className="text-xs">Send email notifications to users</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="approval-email" className="data-[state=unchecked]:bg-gray-300" />
                  <Label htmlFor="approval-email"></Label>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-sm bg-[#F9FAFB]">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-semibold text-sm">Maintenance Mode</h1>
                  <p className="text-sm">Disable access for students and club leaders</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="approval-maintenance" className="data-[state=unchecked]:bg-gray-300" />
                  <Label htmlFor="approval-maintenance"></Label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Event Approval Deadline (days)</label>
                <input type="text" className="border p-3 rounded-lg flex mt-2 w-full" />
              </div>

              <div>
                <label className="text-sm">Club Approval Deadline (days)</label>
                <input type="text" className="border p-3 rounded-lg flex mt-2 w-full" />
              </div>
            </div>
          </div>

          <div className="shadow rounded-2xl bg-white p-5 flex flex-col gap-2 mt-4">
            <h1 className="font-bold text-lg">Club Settings</h1>

            <div>
              <label className="text-sm font-semibold">Maximum Club Members</label>
              <input type="text" className="border p-3 rounded-lg flex w-full" />
              <p className="text-xs">Set the maximum number of members allowed per club</p>
            </div>
          </div>

          <div className="mt-5">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer">
              <Save size={18} />
              Save Settings
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;
