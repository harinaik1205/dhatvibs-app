import type { ServicesType } from "../../types/definations";
import ServicesItem from "./ServicesItem";

interface ServicesProps {
  items: ServicesType[];
}

const Services = ({ items }: ServicesProps) => {
  return (
    <div className="w-full md:max-w-4xl lg:max-w-7xl mx-auto px-6 py-20 md:px-12 mt-10 space-y-10">
      <h2 className="text-[28px] text-[#333] font-bold text-center">
        Our Services
      </h2>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
        {items.map((item) => (
          <ServicesItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Services;
