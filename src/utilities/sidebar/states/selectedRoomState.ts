import { atom } from "recoil";
import { type Room } from "~/utilities/chat/types/chat.types";

// Atom to hold the ID of the selected room
export const selectedRoomState = atom<Room | null>({
  key: "selectedRoomState",
  default: null,
});
