import React from "react";

function Sidebar() {
  return (
    <div className="flex h-screen w-60 flex-col items-center overflow-hidden rounded bg-gray-900 text-gray-400">
      <span className="ml-2 pb-2 text-sm font-bold">The App</span>
      <div className="w-full px-2">
        <div className="mt-3 flex w-full flex-col items-center border-t border-gray-700">
          <span className="ml-2 ">Dasboard</span>
          <span className="ml-2 ">Search</span>
          <span className="ml-2 ">Insights</span>
          <span className="ml-2 ">Docs</span>
          <span className="ml-2 ">Products</span>
          <span className="ml-2 ">Settings</span>
          <span className="ml-2 ">Account</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
