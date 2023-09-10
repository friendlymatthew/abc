import React from "react";
import SidebarUserHeader from "./SidebarUserHeader";
import SidebarUserProfile from "./SidebarUserProfile";
import SidebarUserRooms from "./SidebarUserRooms";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col">
      <SidebarUserProfile />
      <SidebarUserHeader />
      <SidebarUserRooms />
    </div>
  );
}
