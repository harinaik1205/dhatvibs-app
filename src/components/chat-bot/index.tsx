import { useState } from "react";
import generateChatBotAnswer from "../../scripts/gemini-ai";
import ChatBotHeader from "./ChatBotHeader";
import type { MessageType } from "../../types/definations";
import MessageList from "./MessageList";
import ChatBotInput from "./ChatBotInput";

interface ChatBotProps {
  isOpen?: boolean;
  onClose: (value: boolean) => void;
}

const ChatBot = ({ onClose }: ChatBotProps) => {
  const [query, setQuery] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: 1,
      text: "Hello! I'm your DhaTvi assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage: MessageType = {
      id: messages.length + 1,
      text: query,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    try {
      setIsLoading(true);
      const botResponse = await generateChatBotAnswer(query);
      const botMessage: MessageType = {
        id: messages.length + 1,
        text: botResponse!,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside
      className={`flex flex-col fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl transition-transform duration-300 shadow-2xl 
   `}
    >
      <ChatBotHeader onClose={onClose} />

      <MessageList isLoading={isLoading} messages={messages} />

      <ChatBotInput
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
    </aside>
  );
};

export default ChatBot;
