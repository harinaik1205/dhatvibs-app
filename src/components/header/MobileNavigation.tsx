import { useState } from "react";
import SideBar from "../sidebar";
import { Menu } from "lucide-react";

const MobileNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (value: boolean) => {
    setIsSidebarOpen(value);
  };

  return (
    <div className="md:hidden">
      <button onClick={() => toggleSidebar(true)} className="cursor-pointer">
        <Menu
          size={32}
          className="text-[#696969] hover:text-blue-500 transition duration-200"
        />
      </button>

      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default MobileNavigation;
