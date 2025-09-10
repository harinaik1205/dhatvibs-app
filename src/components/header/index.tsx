import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-18 bg-white shadow-sm sticky left-0 top-0 z-50">
      <div className="h-full w-full md:max-w-3xl lg:max-w-7xl flex items-center justify-between px-6 md:px-12 mx-auto">
        {/* logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-500">Dhatvibs</h1>
        </Link>

        <MobileNavigation />

        {/* desktop navigation */}
        <DesktopNavigation />
      </div>
    </header>
  );
};

export default Header;
