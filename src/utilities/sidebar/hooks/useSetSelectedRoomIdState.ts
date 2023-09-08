import { useSetRecoilState } from "recoil";

export const useSetSelectedRoomIdState = () => {
  return useSetRecoilState(selectedRoomIdState);
};
