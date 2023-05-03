import Navbar from "./components/Navbar/Navbar";
import Promo from "./components/sections/Promo/Promo";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import OurStory from "./Pages/OurStory/OurStory";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      <Promo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
