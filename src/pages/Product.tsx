import productHeroImg from "../assets/product1.jpg";
import FeaturesSection from "../components/features-section";
import ServicesHeroSection from "../components/services/ServicesHeroSection";

const PRODUCT_FEATURES = [
  {
    title: "Quick Commerce Platform",
    description:
      "Ultra-fast delivery service similar to Blinkit and Zepto, ensuring customers get what they need in minutes.",
  },
  {
    title: "Real-time Tracking",
    description:
      "Live order tracking from placement to delivery, keeping customers informed every step of the way.",
  },
  {
    title: "Smart Inventory Management",
    description:
      "AI-powered inventory optimization to ensure popular items are always in stock and ready for delivery.",
  },
  {
    title: "Multi-vendor Support",
    description:
      "Platform supports multiple vendors and retailers, creating a comprehensive marketplace experience.",
  },
  {
    title: "Seamless Payment Integration",
    description:
      "Multiple payment options including digital wallets, cards, and cash on delivery for customer convenience.",
  },
  {
    title: "Delivery Fleet Management",
    description:
      "Optimized delivery routes and fleet management system to ensure fastest possible delivery times.",
  },
];

const PRODUCT_STATS = [
  { number: "10min", label: "Average Delivery Time" },
  { number: "24/7", label: "Service Availability" },
  { number: "500+", label: "Product Categories" },
  { number: "99%", label: "Customer Satisfaction" },
];

const SoftwareServices = () => {
  return (
    <div className="pb-10">
      {/* hero section */}

      <ServicesHeroSection
        imgURL={productHeroImg}
        altText=""
        title="Our Product Platform"
        description="Experience ultra-fast delivery of everyday essentials, groceries, and more - all within minutes."
        btnText="Download App"
      />

      {/* features section */}
      <FeaturesSection
        title="Platform Features"
        description="Everything you need for a successful quick commerce platform, built with cutting-edge technology and user experience in mind."
        items={PRODUCT_FEATURES}
      />
    </div>
  );
};

export default SoftwareServices;
