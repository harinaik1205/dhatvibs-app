import type { MessageType } from "../../types/definations";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import { useEffect, useRef } from "react";
import Loading from "./Loading";

interface MessageListProps {
  isLoading: boolean;
  messages: MessageType[];
}

const MessageList = ({ isLoading, messages }: MessageListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((message) => {
        return message.sender === "user" ? (
          <UserMessage key={message.id} message={message} />
        ) : (
          <BotMessage key={message.id} message={message} />
        );
      })}
      <div ref={scrollRef} />

      {isLoading && <Loading />}
    </div>
  );
};

export default MessageList;
