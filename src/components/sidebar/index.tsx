import { useState } from "react";

import { X } from "lucide-react";

import SidebarLink from "./SidebarLink";
import AccordionItem from "./AccordionItem";
import { NAV_ITEMS } from "../../constants/data";

interface SideBarProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      <div
        onClick={() => onClose(false)}
        className={`fixed inset-0 bg-black/50 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      ></div>

      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-full max-w-[270px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-x-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-full">
          <div className="flex h-18 p-4">
            <button
              className="text-gray-500 hover:text-blue-500 transition-colors ml-auto cursor-pointer"
              onClick={() => onClose(false)}
            >
              <X />
            </button>
          </div>

          <ul className="h-[calc(100%-72px)] bg-blue-500 p-10">
            {NAV_ITEMS.map((navItem) => {
              return navItem.items ? (
                <AccordionItem
                  key={navItem.label}
                  label={navItem.label}
                  items={navItem.items}
                  onToggle={() => toggleAccordion(navItem.label)}
                  isActive={activeAccordion === navItem.label}
                />
              ) : (
                <SidebarLink
                  key={navItem.path}
                  path={navItem.path}
                  label={navItem.label}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
