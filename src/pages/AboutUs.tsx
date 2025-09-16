import Services from "../components/services";
import AboutHeroSection from "../components/AboutHeroSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />

      {/* our services */}
      <Services title="Our Services" />
    </div>
  );
};

export default AboutUs;
