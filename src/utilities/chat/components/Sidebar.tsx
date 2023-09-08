import React from "react";
import SidebarRoomButton from "~/utilities/sidebar/components/SidebarRoom";
import { mockRoomsData } from "../mockdata/mockdata";
import { RoomType, type Room } from "../types/chat.types";
import { useSetRecoilState } from "recoil";
import { selectedRoomIdState } from "~/utilities/sidebar/states/selectedRoomIdState";

export default function Sidebar() {
  const setSelectedRoomIdState = useSetRecoilState(selectedRoomIdState);

  return (
    <ul className="w-[20em] divide-y-2">
      {mockRoomsData
        .filter((room: Room) => room.roomType === RoomType.LIVE)
        .map((room: Room) => {
          setSelectedRoomIdState(room.id);
          return <SidebarRoomButton key={room.id} room={room} />;
        })}
    </ul>
  );
}
