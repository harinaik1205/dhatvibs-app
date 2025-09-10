import { Link } from "react-router-dom";

interface DropDownProps {
  items: { id: number; title: string; path: string }[];
}
const DropDown = ({ items }: DropDownProps) => {
  return (
    <div className="absolute top-full left-0 mt-2 min-w-[220px] bg-white border-b-[3px] border-b-blue-500 border-gray-200 rounded-t-md shadow-[0_2px_29px_rgba(0,0,0,0.5)] opacity-0 invisible scale-95 group-hover:visible group-hover:scale-100 group-hover:opacity-100 transition duration-300 ease-out z-10 p-5 flex flex-col gap-3">
      {items.map((item) => (
        <Link
          to={item.path}
          key={item.id}
          className="text-base text-[#666666] hover:text-blue-500 transition duration-200 hover:underline cursor-pointer"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default DropDown;
