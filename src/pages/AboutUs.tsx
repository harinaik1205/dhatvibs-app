import Services from "../components/services";
import AboutHeroSection from "../components/AboutHeroSection";

import { Code, MessageCircle, Package, Server } from "lucide-react";

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

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />

      {/* our services */}
      <Services title="Our Services" items={SERVICES} />
    </div>
  );
};

export default AboutUs;
