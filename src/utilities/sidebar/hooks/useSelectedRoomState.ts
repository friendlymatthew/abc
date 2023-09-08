import { type SetterOrUpdater } from "recoil";
import { useRecoilState } from "recoil";
import { type Room } from "~/utilities/chat/types/chat.types";
import { selectedRoomState } from "../states/selectedRoomState";

export const useSelectedRoomState = (): [
  Room | null,
  SetterOrUpdater<Room | null>,
] => {
  const [selectedRoom, setSelectedRoom] = useRecoilState(selectedRoomState);

  return [selectedRoom, setSelectedRoom];
};
