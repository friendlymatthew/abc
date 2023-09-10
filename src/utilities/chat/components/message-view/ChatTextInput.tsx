import ChatButton from "~/utilities/ui/ChatButton";

export default function ChatTextInput() {
  return (
    <div className="flex h-14 w-full space-x-2 border-t p-2 text-lg">
      <input
        className="h-full w-full rounded-lg border p-2 focus:outline-none"
        placeholder="Type a message"
      />
      <ChatButton title="Send" />
    </div>
  );
}
