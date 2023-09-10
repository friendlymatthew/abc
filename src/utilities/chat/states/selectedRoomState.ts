import { atom } from "recoil";
import { type Room } from "../types/chat.types";

export const selectedRoomState = atom<Room | null>({
  key: "selectedRoomState",
  default: null,
});
