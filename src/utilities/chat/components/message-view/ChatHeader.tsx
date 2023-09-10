import { useRecoilValue } from "recoil";
import { type Room } from "~/utilities/chat/types/chat.types";
import { selectedRoomState } from "../../states/selectedRoomState";

export default function ChatHeader() {
  const selectedRoom: Room | null = useRecoilValue(selectedRoomState);

  return (
    <div className="w-full items-center border-b p-2 text-xl font-semibold">
      <p>
        {selectedRoom
          ? selectedRoom.creatorId === "id-0"
            ? selectedRoom.crushDisplayName
            : selectedRoom.creatorDisplayName
          : "No room selected"}
      </p>
    </div>
  );
}
