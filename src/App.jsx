import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import OurStory from "./Pages/OurStory/OurStory";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import OneCategory from "./components/sections/ShopAll/OneCategory";
import GetStartedProvider from "./Context/Context";

function App() {
  return (
    <>
      <GetStartedProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/ourStory" element={<OurStory />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/category/:OneCategory" element={<OneCategory />} />
        </Routes>
        <Footer />
      </GetStartedProvider>
    </>
  );
}

export default App;
