interface FeaturesSectionProps {
  title: string;
  description: string;
  items: { title: string; description: string }[];
}

const FeaturesSection = ({
  title,
  description,
  items,
}: FeaturesSectionProps) => {
  return (
    <div className="w-full md:max-w-4xl lg:max-w-7xl mx-auto mt-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-[#333] text-center">{title}</h2>
      <p className="text-lg text-[#696969] max-w-[672px] mx-auto mt-2 text-center">
        {description}
      </p>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <li
            key={item.title}
            className="border border-gray-300 hover:shadow-md rounded-xl p-8 transition-shadow duration-200"
          >
            <h3 className="text-xl text-[#333] font-medium">{item.title}</h3>
            <p className="text-base text-[#696969] mt-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesSection;
