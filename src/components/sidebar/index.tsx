import { useState } from "react";

import { X } from "lucide-react";

import SidebarLink from "./SidebarLink";
import AccordionItem from "./AccordionItem";

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

          <div className="h-[calc(100%-72px)] bg-blue-500 p-10">
            <ul>
              <SidebarLink to="/">Home</SidebarLink>

              <AccordionItem
                title="Our Services"
                isActive={activeAccordion === "services"}
                onToggle={() => toggleAccordion("services")}
                items={[
                  { id: "product", title: "Product" },
                  { id: "software", title: "Software Services" },
                  { id: "it", title: "IT Support" },
                  { id: "chat", title: "Chat Support" },
                ]}
              />

              <SidebarLink to="/about">About Us</SidebarLink>
              <SidebarLink to="/contact">Contact Us</SidebarLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
