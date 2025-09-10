import { PhoneCall } from "lucide-react";

import { useState } from "react";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-fit h-fit fixed z-50 bottom-5 right-5 ">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="h-12 w-12 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer"
      >
        <PhoneCall color="white" />
      </button>

      <div
        className={`fixed bottom-18 right-15 z-10 w-[220px] h-fit bg-white shadow-md transition-transform duration-200 ${
          isOpen
            ? "opacity-100 visible scale-100"
            : "opacity-0 scale-0 invisible"
        } p-3 rounded`}
      >
        <div className="flex flex-col gap-1">
          <h5 className="text-base text-[#333] font-bold">Lets's talk</h5>
          <p className="text-base text-[#696969]">+91 40 45374487</p>
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-base text-[#333] font-bold">E-mail Us</h5>
          <p className="text-base text-[#696969]">info@dhatvibs.com</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
