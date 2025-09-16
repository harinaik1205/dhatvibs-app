import { ChevronDown } from "lucide-react";
import SidebarLink from "./SidebarLink";

interface AccordionItemProps {
  label: string;
  isActive: boolean;
  onToggle: () => void;
  items: { path: string; label: string }[];
}

const AccordionItem = ({
  label,
  isActive,
  onToggle,
  items,
}: AccordionItemProps) => {
  return (
    <li className="pt-3">
      <div
        className="flex items-center justify-between border-b border-white/10 pb-3 cursor-pointer"
        onClick={onToggle}
      >
        <span className="text-base text-white font-medium">{label}</span>
        <button
          className={`bg-[#ffffff1a] h-10 w-10 rounded flex items-center justify-center cursor-pointer`}
        >
          <ChevronDown
            size={20}
            color="white"
            className={`${
              isActive ? "rotate-180" : ""
            } transition duration-300`}
          />
        </button>
      </div>

      <ul
        className={`px-3 transition-all duration-300 ease-in-out overflow-hidden ${
          isActive ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {items.map((item) => (
          <SidebarLink
            key={item.path}
            label={item.label}
            path={item.path}
            isAccordionItem={true}
          />
        ))}
      </ul>
    </li>
  );
};

export default AccordionItem;
