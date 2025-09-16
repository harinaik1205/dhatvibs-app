import { Bot, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: (value: boolean) => void;
}

const ChatBotHeader = ({ onClose }: ChatHeaderProps) => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <Bot size={20} color="white" />
      </div>
      <div>
        <h3 className="font-semibold">DhaTvi Assistant</h3>
        <p className="text-xs text-blue-100">Online now</p>
      </div>
    </div>
    <button
      onClick={() => onClose(false)}
      className="text-white p-1 cursor-pointer"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);

export default ChatBotHeader;
