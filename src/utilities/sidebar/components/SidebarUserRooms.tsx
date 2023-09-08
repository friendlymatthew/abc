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
    <ul className="w-[20em] flex-grow divide-y-2">
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
