import { useEffect } from "react";
import { useSelectedRoomState } from "./useSelectedRoomState";

export const useSelectedRoomCallback = () => {
  const [selectedRoom, setSelectedRoom] = useSelectedRoomState();

  useEffect(() => {
    if (selectedRoom) {
      console.log(`Query messages cache for room id: ${selectedRoom.id}`);
    }
  }, [selectedRoom]);
};
