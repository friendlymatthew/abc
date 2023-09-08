import { type SetterOrUpdater, useSetRecoilState } from "recoil";
import { selectedRoomState } from "../states/selectedRoomState";
import { type Room } from "~/utilities/chat/types/chat.types";

export const useSetSelectedRoomState = (): SetterOrUpdater<Room | null> => {
  return useSetRecoilState(selectedRoomState);
};
