import { useRecoilValue } from "recoil";
import { type Room } from "~/utilities/chat/types/chat.types";
import { selectedRoomState } from "~/utilities/sidebar/states/selectedRoomState";

export default function ChatHeader() {
  const selectedRoom: Room | null = useRecoilValue(selectedRoomState);

  return (
    <div className="w-full items-center py-2 text-center font-semibold">
      {selectedRoom &&
        (selectedRoom.creatorId === "id-0" ? (
          <p>{selectedRoom.crushDisplayName}</p>
        ) : (
          <p>{selectedRoom.creatorDisplayName}</p>
        ))}
    </div>
  );
}
