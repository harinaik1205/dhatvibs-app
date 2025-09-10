interface HeroImageProps {
  imgURL: string;
  altText: string;
}

const HeroImage = ({ imgURL, altText }: HeroImageProps) => {
  return (
    <div className="w-full h-full">
      <img src={imgURL} alt={altText} className="w-full h-full" />
    </div>
  );
};

export default HeroImage;
