import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <main className="relative bg-blue-500 h-[calc(100vh-72px)] mt-10 md:mt-0 flex items-center justify-center">
      <HeroImage
        imgURL="https://www.itish.in/assets/images/hero/worldmap-dots-30.png"
        altText="Digital world map background with technology theme"
      />
      <HeroContent
        title="DhaTvi Business Solutions"
        description="DhaTvi Business Solutions Pvt Ltd is an innovative provider of software
        solutions, e-commerce platforms, and IT support — delivering everything
        your business needs to thrive in today’s fast-paced digital world."
        onHomePage={true}
      />
    </main>
  );
};

export default Hero;
