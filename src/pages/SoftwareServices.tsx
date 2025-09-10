import softwareHeroImg from "../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import FeaturesSection from "../components/features-section";
import ServicesHeroSection from "../components/services/ServicesHeroSection";

const SOFTWARESERVICES_FEATURES = [
  {
    title: "Custom Business Solutions",
    description:
      "Tailored software solutions designed specifically for your unique business requirements and processes.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Built with growth in mind, our software solutions can scale seamlessly as your business expands.",
  },
  {
    title: "User-Friendly Interfaces",
    description:
      "Intuitive design that ensures your team can adopt and use the software effectively from day one.",
  },
  {
    title: "Integration Capabilities",
    description:
      "Seamlessly integrate with your existing systems and third-party applications.",
  },
  {
    title: "Security First",
    description:
      "Enterprise-grade security measures to protect your sensitive business data.",
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous maintenance, updates, and technical support to ensure optimal performance.",
  },
];

const SoftwareServices = () => {
  return (
    <div className="pb-10">
      {/* hero section */}

      <ServicesHeroSection
        imgURL={softwareHeroImg}
        altText=""
        title="Software"
        description="Building intuitive, powerful systems to manage your unique business
            needs. Our custom software solutions are designed to streamline your
            operations and drive efficiency."
      />

      {/* features section */}
      <FeaturesSection
        title="What We Offer"
        description="Comprehensive software solutions that adapt to your business needs and
          grow with your success."
        items={SOFTWARESERVICES_FEATURES}
      />
    </div>
  );
};

export default SoftwareServices;
