import ChatHeader from "~/utilities/chat/components/message-view/ChatHeader";
import ChatTextInput from "./ChatTextInput";
import ChatLog from "./ChatLog";

export default function MessageView() {
  return (
    <div className="flex-grow">
      <div className="flex h-full flex-col border-l border-r">
        <ChatHeader />
        <ChatLog />
        <ChatTextInput />
      </div>
    </div>
  );
}
