import React from "react";
import FirstBanner from "../ui/components/FirstBanner";
import Venu from "../ui/components/Venu";
import Quote from "../ui/components/Quote";
import SecondBanner from "../ui/components/SecondBanner";
import Navbar from "../ui/components/common/Navbar";
import Footer from "../ui/components/common/Footer";
import Row from "../ui/components/common/Row";

const Home = () => {
  return (
    <Row className="w-full flex-col justify-center items-center bg-[#590017] ">
      <div className=" w-[95%] ">
        <Navbar />
        <FirstBanner />
        <Venu />
        <Quote />
        <SecondBanner />
        <Footer />
      </div>
    </Row>
  );
};

export default Home;
