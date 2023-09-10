import { mockRoomsData } from "~/utilities/chat/mockdata/mockdata";
import { type Room, RoomType } from "~/utilities/chat/types/chat.types";
import SidebarRoomButton from "./SidebarRoomButton";
import { useSetRecoilState } from "recoil";
import { selectedRoomState } from "../../states/selectedRoomState";

export default function SidebarUserRooms() {
  const setSelectedRoomState = useSetRecoilState(selectedRoomState);

  const handleRoomClick = (room: Room): void => {
    setSelectedRoomState(room);
    console.log("room clicked", room);
  };

  return (
    <ul className="h-[1em] w-[20em] flex-grow overflow-y-scroll">
      {mockRoomsData
        .filter((room: Room) => room.roomType === RoomType.LIVE)
        .map((room: Room, index) => {
          return (
            <SidebarRoomButton
              key={index}
              index={index}
              room={room}
              handleClick={() => handleRoomClick(room)}
            />
          );
        })}
    </ul>
  );
}
