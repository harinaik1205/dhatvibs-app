import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";

const DROPDOWN_ITEMS = [
  { id: 1, title: "Product", path: "/product" },
  { id: 2, title: "Software Services", path: "/software" },
  { id: 3, title: "IT Support", path: "/it-support" },
  { id: 4, title: "Chat Support", path: "/chat-support" },
];

const DesktopNavigation = () => {
  const { pathname } = useLocation();

  const baseClassName =
    "text-base font-medium hover:text-blue-500 transition duration-200 cursor-pointer";

  return (
    <nav className="hidden md:flex gap-6">
      <Link
        to={"/"}
        className={`${
          pathname === "/" ? "text-blue-500" : ""
        }  ${baseClassName}`}
      >
        Home
      </Link>
      <div className="relative group">
        <div className="flex items-center gap-1">
          <p className="text-base font-medium group-hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer">
            Our Services
          </p>
          <ChevronDown
            size={15}
            className="mt-1 group-hover:rotate-180 transition duration-300 group-hover:text-blue-500"
          />
        </div>

        {/* dropdown */}
        <DropDown items={DROPDOWN_ITEMS} />
      </div>
      <Link
        to={"/about"}
        className={`${
          pathname === "/about" ? "text-blue-500" : ""
        }  ${baseClassName}`}
      >
        About Us
      </Link>
      <Link
        to={"/contact"}
        className={`${
          pathname === "/contact" ? "text-blue-500" : ""
        }  ${baseClassName}`}
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
