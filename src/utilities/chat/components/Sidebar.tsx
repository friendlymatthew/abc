import React from "react";
import SidebarUserProfile from "~/utilities/sidebar/components/SidebarUserProfile";
import SidebarUserRooms from "~/utilities/sidebar/components/SidebarUserRooms";
import SidebarUserHeader from "./SidebarUserHeader";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col sm:border-l">
      <SidebarUserProfile />
      <SidebarUserHeader />
      <SidebarUserRooms />
    </div>
  );
}
