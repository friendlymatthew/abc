import { useSetRecoilState } from "recoil";
import { selectedRoomIdState } from "../states/selectedRoomIdState";

export const useSetSelectedRoomIdState = () => {
  return useSetRecoilState(selectedRoomIdState);
};
