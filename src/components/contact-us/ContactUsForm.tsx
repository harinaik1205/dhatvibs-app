import type React from "react";

const ContactUsForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="w-full md:max-w-4xl lg:max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 py-20 md:px-12">
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-medium border-l-4 border-blue-500 pl-4">
          To make requests for further information,{" "}
          <span className="text-blue-500">contact us</span> via this Form.
        </h1>
        <p className="text-xl text-[#333] mt-4 ml-4">
          We just need a couple of hours! We will reach you ASAP.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 md:gap-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            className="h-[56px] bg-[#f8f8f8] rounded outline-none border border-[#f8f8f8] text-[15px] px-3 focus:border-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            className="h-[56px] bg-[#f8f8f8] rounded outline-none border border-[#f8f8f8] text-[15px] px-3 focus:border-blue-500"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject *"
          className="w-full h-[56px] bg-[#f8f8f8] rounded outline-none border border-[#f8f8f8] text-[15px] px-3 focus:border-blue-500"
          required
        />
        <textarea
          name="description"
          placeholder="Please describe what you need."
          className="bg-[#f8f8f8] rounded outline-none border border-[#f8f8f8] text-[15px] px-3 py-2 w-full h-32 focus:border-blue-500"
        ></textarea>

        <button className="w-fit px-10 py-3 bg-blue-500 text-white text-base font-medium rounded cursor-pointer mt-2">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
