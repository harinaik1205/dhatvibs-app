import { Link } from "react-router-dom";

interface SidebarLinkProps {
  path: string;
  label: string;
  isAccordionItem?: boolean;
}

const SidebarLink = ({ path, label, isAccordionItem }: SidebarLinkProps) => {
  return (
    <li className="py-4 border-b border-white/10">
      <Link
        to={path}
        className={`text-base ${
          isAccordionItem
            ? "text-white/60 hover:text-white"
            : "text-white font-medium"
        } cursor-pointer`}
      >
        {label}
      </Link>
    </li>
  );
};

export default SidebarLink;
