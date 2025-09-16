import { ChevronDown } from "lucide-react";
import DropDown from "./DropDown";

interface NavDropDownItemProps {
  label: string;
  items: { path: string; label: string }[];
}

const NavDropDownItem = ({ label, items }: NavDropDownItemProps) => (
  <div className="relative group cursor-pointer">
    <div className="flex items-center gap-1">
      <p className="text-base font-semibold hover:text-blue-500 transition duration-200">
        {label}
      </p>
      <ChevronDown
        size={15}
        className="mt-1 group-hover:rotate-180 transition duration-300 group-hover:text-blue-500"
      />
    </div>
    <DropDown items={items} />
  </div>
);

export default NavDropDownItem;
