import { Bot } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-start">
      <div className="flex max-w-[80%] flex-row items-start space-x-2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 
           bg-gray-100"
        >
          <Bot className="w-3 h-3" />
        </div>
        <div className="ml-2">
          <div className="px-3 py-2 rounded-lg bg-gray-100 text-gray-800 rounded-bl-sm">
            <p className="text-sm">Thinking...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
