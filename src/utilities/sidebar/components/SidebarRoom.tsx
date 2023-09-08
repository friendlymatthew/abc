import React, { FC } from "react";
import { Room } from "~/utilities/chat/types/chat.types";
import { useSelectedRoomIdState } from "../hooks/useSelectedRoomIdState";
import { DateTime } from "luxon";

interface SidebarRoomProps {
  room: Room;
}

const SidebarRoom: FC<SidebarRoomProps> = ({ room }) => {
  const [selectedRoomId, setSelectedRoomId] = useSelectedRoomIdState();

  const updatedAt = DateTime.fromISO(room.updatedAt).toLocaleString(
    DateTime.DATETIME_SHORT,
  );

  const handleClick = () => {
    setSelectedRoomId(room.id);
    console.log(`Query messages cache for room id: ${room.id}`);
  };

  return (
    <li
      onClick={handleClick}
      className="cursor-pointer p-4 transition duration-100 ease-in hover:bg-orange-300"
    >
      <div className="flex items-center space-x-4">
        {/* Access the id from the room object */}
        <p>{room.id}</p>
        {room.creatorId === "id-0" ? (
          <p>{room.crushDisplayName}</p>
        ) : (
          <p>{room.creatorDisplayName}</p>
        )}
      </div>
      <div className="flex text-black">{updatedAt}</div>
    </li>
  );
};

export default SidebarRoom;
