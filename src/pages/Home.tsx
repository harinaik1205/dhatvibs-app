const HomePage = () => {
  return (
    <div className="pb-10">
      <main className="relative bg-blue-500 h-[540px] mt-10 md:mt-0 flex items-center justify-center">
        <img
          src="	https://www.itish.in/assets/images/hero/worldmap-dots-30.png"
          alt="banner image"
          className="object-cover w-full h-full"
        />
        <div className="absolute flex flex-col items-center justify-center text-center text-white px-4">
          <div className="flex items-center gap-2 border border-blue-200 rounded-full px-3 mb-6">
            <p className="text-[13px] font-bold">Innovation</p>
            <div className="h-1 w-1 rounded-full bg-white" />
            <p className="text-[13px] font-bold">Technology</p>
            <div className="h-1 w-1 rounded-full bg-white" />
            <p className="text-[13px] font-bold">Growth</p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            DhaTvi Business Solutions
          </h1>
          <p className="text-lg font-semibold w-full sm:w-[70%] mx-auto">
            DhaTvi Business Solutions Pvt Ltd is a Innovative software to
            e-commerce platforms and IT support, we provide everything your
            business needs to thrive in today’s fast-paced digital world.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
