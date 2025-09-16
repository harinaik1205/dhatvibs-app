import { Code, MessageCircle, Package, Server } from "lucide-react";
import ServicesItem from "./ServicesItem";

const SERVICES = [
  {
    icon: <Package className="h-6 w-6" />,
    title: "Product",
    description:
      "Innovative product solutions designed to meet your business requirements and drive growth.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Software",
    description:
      "Building intuitive, powerful systems to manage your unique business needs with cutting-edge technology.",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "IT Operations",
    description:
      "Ensuring your technology infrastructure is always reliable, secure, and ready for growth.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Chat Support",
    description:
      "Professional support systems to ensure your customers feel valued and heard.",
  },
];

interface ServicesProps {
  title: string;
  description?: string;
  // items: ServicesType[];
}

const Services = ({ title, description }: ServicesProps) => {
  return (
    <div className="w-full md:max-w-4xl lg:max-w-7xl mx-auto px-6 py-20 md:px-12 mt-10 space-y-10">
      <h2 className="text-4xl font-bold text-[#333] text-center">{title}</h2>
      {description && (
        <p className="text-lg text-[#696969] max-w-[672px] mx-auto mt-2 text-center">
          {description}
        </p>
      )}
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
        {SERVICES.map((item) => (
          <ServicesItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Services;
