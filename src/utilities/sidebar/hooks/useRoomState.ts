import { useRecoilValue } from "recoil";
import { roomStateFamily } from "../states/roomStateFamily";

export const useRoomState = (roomId: string) => {
  return useRecoilValue(roomStateFamily(roomId));
};
