import Badge from "../Badge";

const BADGE_ITEMS = [
  { id: 1, label: "Innovation" },
  { id: 2, label: "Technology" },
  { id: 3, label: "Growth" },
];

interface HeroContentProps {
  title: string;
  description: string;
  onHomePage?: boolean;
}

const HeroContent = ({ title, description, onHomePage }: HeroContentProps) => {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center ${
        onHomePage ? "items-center text-center" : "items-start"
      } text-white px-4`}
    >
      {onHomePage && <Badge items={BADGE_ITEMS} />}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        {title}
      </h1>
      <p className="text-lg font-semibold w-full sm:max-w-2xl">{description}</p>
    </div>
  );
};

export default HeroContent;
