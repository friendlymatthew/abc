import SidebarRoomButton from "~/utilities/sidebar/components/SidebarRoomButton";
import { useSetRecoilState } from "recoil";
import { mockRoomsData } from "~/utilities/chat/mockdata/mockdata";
import { type Room, RoomType } from "~/utilities/chat/types/chat.types";
import { selectedRoomState } from "../states/selectedRoomState";

export default function SidebarUserRooms() {
  const setSelectedRoomState = useSetRecoilState(selectedRoomState);

  const handleRoomClick = (room: Room): void => {
    setSelectedRoomState(room);
  };

  return (
    <ul className="h-[1em] w-[20em] flex-grow overflow-y-scroll">
      {mockRoomsData
        .filter((room: Room) => room.roomType === RoomType.LIVE)
        .map((room: Room, index) => {
          return (
            <SidebarRoomButton
              key={room.id}
              index={index}
              room={room}
              handleClick={() => handleRoomClick(room)}
            />
          );
        })}
    </ul>
  );
}
