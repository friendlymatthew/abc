import { atom } from "recoil";

// Atom to hold the ID of the selected room
export const selectedRoomIdState= atom<string | null>({
  key: "selectedRoomIdState",
  default: null,
});
