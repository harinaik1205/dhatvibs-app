import { Code, MessageCircle, Package, Server } from "lucide-react";
import Services from "../components/services";

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
      <div className="h-[540px] bg-[#f8fbfe] flex flex-col items-center justify-center">
        <div className="w-full md:max-w-4xl text-start md:text-center px-6 sm:px-12">
          <h1 className="text-[28px] font-bold text-[#333]">
            About{" "}
            <span className="text-blue-500">DhaTvi Business Solutions</span>
          </h1>
          <p className="text-lg text-[#696969] medium mt-5">
            We're a team of innovators and problem-solvers dedicated to powering
            your business's growth. We understand that in today's fast-paced
            world, technology and customer experience are no longer
            separate—they're the same journey. That's why we built a unique
            suite of services designed to work together seamlessly. From the
            robust software that manages your operations to the dynamic
            e-commerce and quick commerce platforms that drive sales, we provide
            the digital tools you need to succeed. Our expertise extends beyond
            the front end, with comprehensive IT operations to keep everything
            running smoothly and professional voice support to ensure your
            customers feel valued.
          </p>
        </div>
      </div>

      {/* our services */}
      <Services items={SERVICES} />
    </div>
  );
};

export default AboutUs;
