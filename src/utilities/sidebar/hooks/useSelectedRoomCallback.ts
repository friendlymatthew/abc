import { useEffect } from "react";
import { useSelectedRoomIdState } from "./useSelectedRoomIdState";

export const useSelectedRoomCallback = () => {
  const [selectedRoomId, setSelectedRoomId] = useSelectedRoomIdState();

  useEffect(() => {
    if (selectedRoomId) {
      console.log(`Query messages cache for room id: ${selectedRoomId}`);
    }
  }, [selectedRoomId]);
};
