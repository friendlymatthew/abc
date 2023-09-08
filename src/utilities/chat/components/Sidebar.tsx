import React from "react";
import SidebarUserProfile from "~/utilities/sidebar/components/SidebarUserProfile";
import SidebarUserRooms from "~/utilities/sidebar/components/SidebarUserRooms";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col">
      <SidebarUserProfile />
      <SidebarUserRooms />
    </div>
  );
}
