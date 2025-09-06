import ContactDetails from "../components/contact-us/ContactDetails";
import ContactUsForm from "../components/contact-us/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="pb-10">
      <ContactUsForm />

      <ContactDetails />

      <div className="w-full h-[550px] mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.86748180979!2d78.37736547421088!3d17.445654001125916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93003b4e8b3b%3A0x29a6b4660a56ed47!2sDhaTvi%20Business%20Solutions%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1757145540829!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
