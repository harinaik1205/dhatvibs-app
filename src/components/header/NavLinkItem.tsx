import { Link } from "react-router-dom";

interface NavLinkItemProps {
  label: string;
  path: string;
  isActive: boolean;
}

const NavLinkItem = ({ label, path, isActive }: NavLinkItemProps) => (
  <Link
    to={path}
    className={`${
      isActive ? "text-blue-500" : "text-[#000]"
    } text-base font-semibold hover:text-blue-500 transition duration-200 cursor-pointer`}
  >
    {label}
  </Link>
);

export default NavLinkItem;
