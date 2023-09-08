import SidebarRoomButton from "~/utilities/sidebar/components/SidebarRoomButton";
import { useSetRecoilState } from "recoil";
import { selectedRoomIdState } from "~/utilities/sidebar/states/selectedRoomIdState";
import { mockRoomsData } from "~/utilities/chat/mockdata/mockdata";
import { type Room, RoomType } from "~/utilities/chat/types/chat.types";

export default function SidebarUserRooms() {
  const setSelectedRoomIdState = useSetRecoilState(selectedRoomIdState);

  const handleRoomClick = (roomId: string) => {
    setSelectedRoomIdState(roomId);
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
              handleClick={() => handleRoomClick(room.id)}
            />
          );
        })}
    </ul>
  );
}
