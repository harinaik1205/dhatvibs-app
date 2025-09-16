import { useLocation } from "react-router-dom";

import NavLinkItem from "./NavLinkItem";
import NavDropDownItem from "./NavDropDownItem";

import { NAV_ITEMS } from "../../constants/data";

const DesktopNavigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="hidden md:flex gap-6">
      {NAV_ITEMS.map((item) => {
        return item.items ? (
          <NavDropDownItem
            key={item.label}
            label={item.label}
            items={item.items}
          />
        ) : (
          <NavLinkItem
            key={item.path}
            path={item.path}
            label={item.label}
            isActive={pathname === item.path}
          />
        );
      })}
    </nav>
  );
};

export default DesktopNavigation;
