import React, { type FC } from "react";
import { type Room } from "~/utilities/chat/types/chat.types";
import { DateTime } from "luxon";

interface SidebarRoomProps {
  room: Room;
  index: number;
  handleClick: () => void;
}

const SidebarRoomButton: FC<SidebarRoomProps> = ({
  room,
  index,
  handleClick,
}) => {
  const updatedAt = DateTime.fromISO(room.updatedAt).toLocaleString(
    DateTime.DATETIME_SHORT,
  );

  return (
    <li
      onClick={handleClick}
      className="cursor-pointer p-4 transition duration-100 ease-in hover:bg-orange-300"
    >
      <div className="flex items-center space-x-4">
        {/* Access the id from the room object */}
        <p>{index}</p>
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

export default SidebarRoomButton;
