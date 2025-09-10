import type { ServicesType } from "../../types/definations";
import ServicesItem from "./ServicesItem";

interface ServicesProps {
  title: string;
  description?: string;
  items: ServicesType[];
}

const Services = ({ title, description, items }: ServicesProps) => {
  return (
    <div className="w-full md:max-w-4xl lg:max-w-7xl mx-auto px-6 py-20 md:px-12 mt-10 space-y-10">
      <h2 className="text-4xl font-bold text-[#333] text-center">{title}</h2>
      {description && (
        <p className="text-lg text-[#696969] max-w-[672px] mx-auto mt-2 text-center">
          {description}
        </p>
      )}
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
        {items.map((item) => (
          <ServicesItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Services;
