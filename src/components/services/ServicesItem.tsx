import type { ServicesType } from "../../types/definations";

interface ServicesItemProps {
  item: ServicesType;
}

const ServicesItem = ({ item }: ServicesItemProps) => {
  return (
    <li className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-blue-100 flex flex-col items-center sm:items-start gap-3 cursor-pointer">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
        {item.icon}
      </div>
      <h4 className="text-xl font-semibold text-[#333]">{item.title}</h4>
      <p className="text-[#696969] leading-relaxed text-center sm:text-start">
        {item.description}
      </p>
    </li>
  );
};

export default ServicesItem;
