import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Occassion from "./Components/Occassion";
import Discover from "./Components/Discover";
import SayItWith from "./Components/SayItWith";
import SocialMedia from "./Components/SocialMedia";
import Exclusive from "./Components/Exclusive";
import HappyCustomer from "./Components/HappyCustomer";
import CorporateGift from "./Components/CorporateGift";
import GiftWork from "./Components/GiftWork";
import Services from "./Components/Services";

//discover
import img1 from "./Assets/discover/Image1.png";
import img2 from "./Assets/discover/Image2.png";
import img3 from "./Assets/discover/Image3.png";
import img4 from "./Assets/discover/Image4.png";

//freeGifts
import freeGift1 from "./Assets/freeGifts/Image1.png";
import freeGift2 from "./Assets/freeGifts/Image2.png";
import freeGift3 from "./Assets/freeGifts/Image3.png";
import freeGift4 from "./Assets/freeGifts/Image4.png";
import Footer from "./Components/Footer";

const App = () => {
  const discover = [
    {
      id: 1,
      img: img1,
      img2: img2,
      title: "The Pastel Florists Choice Bouquet",
      price: "$169.00 NZD",
    },
    {
      id: 2,
      img: img2,
      img2: img1,
      title: "The Bright Florists Choice Bouquet",
      price: "$89.00 NZD",
    },
    {
      id: 3,
      img: img3,
      img2: img1,
      title: "The Bright Florists Choice Posy",
      price: "$89.00 NZD",
    },
    {
      id: 4,
      img: img4,
      img2: img1,
      title: "The Pastel Florists Choice Bouquet",
      price: "$169.00 NZD",
    },
    {
      id: 5,
      img: img1,
      img2: img1,
      title: "The Pastel Florists Choice Posy",
      price: "$89.00 NZD",
    },
    {
      id: 6,
      img: img2,
      img2: img1,
      title: "The Pastel Florists Choice Bouquet",
      price: "$169.00 NZD",
    },
  ];

  const FreeGifts = [
    {
      id: 1,
      img: freeGift1,
      title: "Daffodil Bouquet",
      price: "$59.00 NZD",
    },
    {
      id: 2,
      img: freeGift2,
      title: "Market Mixed Tulips and Cupcakes",
      price: "$69.00 NZD",
    },
    {
      id: 3,
      img: freeGift3,
      title: "Spring Posy & Cupcake Combo Deal",
      price: "$59.00 NZD",
    },
    {
      id: 4,
      img: freeGift4,
      title: "Soft Rose & Cake Combo Deal",
      price: "$99.00 NZD",
    },
    {
      id: 5,
      img: freeGift1,
      title: "Daffodil Bouquet",
      price: "$59.00 NZD",
    },
    {
      id: 6,
      img: freeGift2,
      title: "Market Mixed Tulips and Cupcakes",
      price: "$69.00 NZD",
    },
  ];
  return (
    <div className="  bg-[#F8F7F7]">
      <Header />
      <HeroSection />
      <Occassion />
      <Discover
        data={discover}
        title="discover"
        title2="Florists choice"
        desc="Trust our talented team to use their favorite flowers in the shop to create the beautiful bouquet or posy in your colour tones."
      />
      <SayItWith />
      <HappyCustomer />
      <CorporateGift />
      <Discover
        data={FreeGifts}
        title="free gift with all "
        title2="combo flower deals"
        desc="We find the best value and quality every week at the market to present you with our famous Combo deals."
      />
      <Services />
      <GiftWork />
      <Exclusive />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default App;
