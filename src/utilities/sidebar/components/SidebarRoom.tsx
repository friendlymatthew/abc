import React from "react";
import { Room } from "~/utilities/chat/types/chat.types";

// Define the type of the props the component expects
interface SidebarRoomProps {
  room: Room;
}

// Use React.FC with a generic to specify the prop types
const SidebarRoom: React.FC<SidebarRoomProps> = ({ room }) => {
  return <div className="">{room.id}</div>;
};

export default SidebarRoom;
