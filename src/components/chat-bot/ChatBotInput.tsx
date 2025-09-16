import { Send } from "lucide-react";

interface ChatInputProps {
  query: string;
  setQuery: (val: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ChatBotInput = ({ query, setQuery, handleSubmit }: ChatInputProps) => (
  <div className="p-4 border-t border-gray-200">
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition duration-300 text-[#333]"
      />
      <button
        type="submit"
        disabled={!query.trim()}
        className="h-10 w-10 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-default"
      >
        <Send size={20} color="white" />
      </button>
    </form>
  </div>
);

export default ChatBotInput;
