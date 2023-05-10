// NaturalSectionData
import icon1 from "../assets/Natural/1.svg";
import icon2 from "../assets/Natural/2.svg";
import icon3 from "../assets/Natural/3.svg";

// FeaturedProductsData
import backProduct1 from "../assets/Home/back-product1.jpg";
import backProduct2 from "../assets/Home/back-product2.jpg";
import backProduct3 from "../assets/Home/back-product3.jpg";
import backProduct4 from "../assets/Home/back-product4.jpg";

import productImage1 from "../assets/Home/product1.jpg";
import productImage2 from "../assets/Home/product2.jpg";
import productImage3 from "../assets/Home/product3.jpg";
import productImage4 from "../assets/Home/product4.jpg";

// GenerateSection
import client1 from "../assets/Home/client-01.svg";
import client2 from "../assets/Home/client-02.svg";
import client3 from "../assets/Home/client-03.svg";
import client4 from "../assets/Home/client-04.svg";

// CategoriesSectionData
import CategorieImage1 from "../assets/Home/category-01.jpg";
import CategorieImage2 from "../assets/Home/category-02.jpg";
import CategorieImage3 from "../assets/Home/category-03.jpg";

export const navBar = {
  navLinks: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop All",
      href: "/shop",
    },
    {
      name: "Our Story",
      href: "/ourStory",
    },
    {
      name: "Contact Us",
      href: "/contactUs",
    },
  ],
  Pages: [
    {
      name: "Privacy Policy",
      href: "/",
    },
    {
      name: "Instructions",
      href: "/",
    },
    {
      name: "Error 404",
      href: "/error",
    },
    {
      name: "Password Protected",
      href: "/password",
    },
  ],
};

export const NaturalSectionData = {
  List: [
    {
      icon: icon1,
      name: "Long-lasting and sustainable",
    },
    {
      icon: icon2,
      name: "Lovingly crafted for all bodies",
    },
    {
      icon: icon3,
      name: "Unbeatably comfortable.",
    },
  ],
};

export const FeaturedProductsData = {
  title: "Our Featured Products",
  List: [
    {
      name: "Alpha Arbutin & Vitamin C",
      price: 120.0,
      lastPrice: 209.0,
      productImage: productImage1,
      backImage: backProduct1,
    },
    {
      name: "Firming Lift Eye Gel",
      price: 80.0,
      lastPrice: 129.0,
      productImage: productImage2,
      backImage: backProduct2,
    },
    {
      name: "Vitamin C Serum",
      price: 20.0,
      lastPrice: 16.0,
      productImage: productImage3,
      backImage: backProduct3,
    },
    {
      name: "Vinegar Face Moisturizer",
      price: 110.0,
      lastPrice: 149.0,
      productImage: productImage4,
      backImage: backProduct4,
    },
  ],
};

export const GenerateSectionData = {
  List: [
    {
      image: client1,
    },
    {
      image: client2,
    },
    {
      image: client3,
    },
    {
      image: client4,
    },
  ],
};

export const CategoriesSectionData = {
  List: [
    {
      image: CategorieImage1,
      name: "body wash",
    },
    {
      image: CategorieImage2,
      name: "face wash",
    },
    {
      image: CategorieImage3,
      name: "cleanser",
    },
  ],
};
