import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import SoftwareServices from "./pages/SoftwareServices";
import Product from "./pages/Product";
import ITSupport from "./pages/ITSupport";
import ChatSupport from "./pages/ChatSupport";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div>
      <Header />
      <Chat />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/software" element={<SoftwareServices />} />
        <Route path="/services/product" element={<Product />} />
        <Route path="/services/it-support" element={<ITSupport />} />
        <Route path="/services/chat-support" element={<ChatSupport />} />
      </Routes>
    </div>
  );
};

export default App;
