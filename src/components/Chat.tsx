import { MessageCircle } from "lucide-react";

import { useState } from "react";
import ChatBot from "./chat-bot";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChatBot = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <div className="w-fit h-fit fixed z-50 bottom-6 right-6 ">
      <button
        onClick={() => handleToggleChatBot(true)}
        className={`h-12 w-12 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <MessageCircle color="white" />
      </button>

      {isOpen && <ChatBot isOpen={isOpen} onClose={handleToggleChatBot} />}
    </div>
  );
};

export default Chat;
