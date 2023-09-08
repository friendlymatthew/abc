import { SetterOrUpdater } from "recoil";
import { useRecoilState } from "recoil";
import { selectedRoomIdState } from "../states/selectedRoomIdState";

export const useSelectedRoomIdState = (): [
  string | null,
  SetterOrUpdater<string | null>,
] => {
  const [selectedRoomId, setSelectedRoomId] =
    useRecoilState(selectedRoomIdState);
  return [selectedRoomId, setSelectedRoomId];
};
