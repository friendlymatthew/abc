import { atomFamily } from "recoil";
import { Room } from "~/utilities/chat/types/chat.types";

export const roomStateFamily = atomFamily<Room, string>({
  key: "roomStateFamily",
  default: {} as Room,
});
