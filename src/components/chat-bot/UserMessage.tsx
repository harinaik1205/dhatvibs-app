import { User } from "lucide-react";
import type { MessageType } from "../../types/definations";

interface UserMessageProps {
  message: MessageType;
}

const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <div key={message.id} className="flex justify-end">
      <div className="flex max-w-[80%] flex-row-reverse items-start space-x-2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 
           bg-blue-600
          "
        >
          <User className="w-3 h-3 text-white" />
        </div>
        <div className="mr-2">
          <div
            className={`px-3 py-2 rounded-lg
             
                bg-blue-600 text-white rounded-br-sm
               
            }`}
          >
            <p className="text-sm">{message.text}</p>
          </div>
          <p className="text-xs text-gray-500 mt-1 px-3">{message.timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
