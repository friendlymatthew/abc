import { useRecoilValue } from "recoil";
import { selectedRoomState } from "../states/selectedRoomState";
import { useEffect } from "react";

const useRoomStateEffect = () => {
  const selectedRoom = useRecoilValue(selectedRoomState);
  useEffect(() => {
    if (selectedRoom) {
      console.log(`The selected room has changed to: ${selectedRoom.id}`);
    } else {
      console.log("No room is currently selected.");
    }
  }, [selectedRoom]);
};

export default useRoomStateEffect;