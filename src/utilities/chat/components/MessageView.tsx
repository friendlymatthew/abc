import ChatHeader from "~/utilities/message-view/components/ChatHeader";
import ChatLog from "~/utilities/message-view/components/ChatLog";
import ChatTextInput from "~/utilities/message-view/components/ChatTextInput";

export default function MessageView() {
  return (
    <div className="flex h-full w-[50em] flex-col border-l border-r">
      <ChatHeader />
      <ChatLog />
      <ChatTextInput />
    </div>
  );
}
