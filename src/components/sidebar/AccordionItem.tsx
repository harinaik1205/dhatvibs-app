import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  isActive: boolean;
  onToggle: () => void;
  items: { id: string; title: string }[];
}

const AccordionItem = ({
  title,
  isActive,
  onToggle,
  items,
}: AccordionItemProps) => {
  return (
    <li className="pt-3">
      <div
        className="flex items-center justify-between border-b border-white/10 pb-3 cursor-pointer"
        onClick={onToggle}>
        <span className="text-base text-white font-medium">{title}</span>
        <button
          className={`bg-[#ffffff1a] h-10 w-10 rounded flex items-center justify-center cursor-pointer`}>
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
          isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}>
        {items.map(item => (
          <li
            key={item.id}
            className="py-4 border-b border-white/10 text-base text-white/60 hover:text-white transition duration-200 cursor-pointer">
            {item.title}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default AccordionItem;
