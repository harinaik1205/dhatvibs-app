import { Link } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  children: React.ReactNode;
}

const SidebarLink = ({ to, children }: SidebarLinkProps) => (
  <li className="py-4 border-b border-white/10">
    <Link to={to} className="text-base font-medium text-white cursor-pointer">
      {children}
    </Link>
  </li>
);

export default SidebarLink;
