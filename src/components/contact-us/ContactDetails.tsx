const ContactDetails = () => {
  return (
    <div className="w-full md:max-w-4xl lg:max-w-7xl mx-auto h-fit px-6 md:px-12">
      <h2 className="uppercase text-sm text-[#ababab] text-center tracking-[3px] font-semibold">
        Contact Details
      </h2>
      <h3 className="text-[32px] text-[#333] font-bold text-center tracking-[3px] mt-2">
        Reach out <span className="text-blue-500">us</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-auto">
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl text-[#333] font-bold">
            Hyderabad - Registered Office
          </h4>
          <p className="text-base text-[#696969] w-full sm:w-[70%] md:w-full">
            PB House, 1st Floor, HUDA Techno Enclave, Street No.7, Madhapur,
            Hyderabad, Telangana 500081
          </p>
        </div>
        <div className="flex flex-col md:items-center gap-4">
          <h5 className="text-2xl text-[#333] font-bold">Lets's talk</h5>
          <p className="text-base text-[#696969]">+91 40 45374487</p>
        </div>
        <div className="flex flex-col md:items-center gap-4">
          <h5 className="text-2xl text-[#333] font-bold">E-mail Us</h5>
          <p className="text-base text-[#696969]">info@dhatvibs.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
