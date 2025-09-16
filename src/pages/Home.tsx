import Hero from "../components/hero";
import Services from "../components/services";

const HomePage = () => {
  return (
    <div>
      {/* hero section */}
      <Hero />

      <Services title="Our Services" />
    </div>
  );
};

export default HomePage;
