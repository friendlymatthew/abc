import { useSelectedRoomIdState } from "~/utilities/sidebar/hooks/useSelectedRoomIdState";

export default function MessageView() {
  const [selectedRoomId, setSelectedRoomId] = useSelectedRoomIdState();

  return (
    <div className="flex h-full w-[50em] flex-col items-center justify-center space-y-8 border-r">
      <p className="animate-pulse font-bold italic tracking-wide">XYZ</p>
      <p className="text-6xl font-extrabold tracking-widest text-black ">
        TODO
      </p>

      <div className="text-xl text-black">
        <p>Sidebar state response</p>
        <p>roomid: {selectedRoomId}</p>
      </div>
    </div>
  );
}
