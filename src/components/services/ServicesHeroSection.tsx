import HeroImage from "../hero/HeroImage";
import HeroContent from "../hero/HeroContent";

interface ServicesHeroSectionProps {
  imgURL: string;
  altText: string;
  title: string;
  description: string;
  btnText: string;
}

const ServicesHeroSection = ({
  imgURL,
  altText,
  title,
  description,
  btnText,
}: ServicesHeroSectionProps) => {
  return (
    <div className="relative w-full h-[450px]">
      <HeroImage imgURL={imgURL} altText={altText} />
      <HeroContent title={title} description={description} />
      <button className="absolute top-[70%] left-6 px-6 py-2 bg-white rounded cursor-pointer text-base">
        {btnText}
      </button>
    </div>
  );
};

export default ServicesHeroSection;
