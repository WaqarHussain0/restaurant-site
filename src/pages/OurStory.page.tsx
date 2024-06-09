import React from "react";
import Row from "../ui/components/common/Row";
import Navbar from "../ui/components/common/Navbar";
import Location from "../ui/components/common/Location";
import image1 from "../assets/imgs/11.png";
import image2 from "../assets/imgs/12.png";
import design from "../assets/imgs/design.png";
import Footer from "../ui/components/common/Footer";

const mileStoneData = [
  {
    heading: " Milestone One",
    year: "1998",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: " Milestone Two",
    year: "2005",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: " Milestone Three",
    year: "2012",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: " Milestone Four",
    year: "2021",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const storyData = {
  heading: "One of the best resturants in Saudi Arabia.",
  point1: "We’re an absolute leader in the Saudi cuisine-themed restaurants.",
  restPoints: [
    "Your one direction to high-quality Saudi feasts, since 1998 we served in Saudi Arabia.",
    "Locals who are proud of the country and want to introduce it to visitors from around the world.",
    "We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted. We can confidently claim that our menu is unlike anything else offered in the industry.",
  ],
};
const OurStory = () => {
  return (
    <Row className="w-full justify-center bg-[#590018]">
      <Row className="w-[90%] flex-col items-center">
        <Navbar />

        <img
          src={design}
          alt="..."
          className="z-0 absolute right-0 md:left-[110px] w-[480px] h-[500px] object-cover"
        />

        <Row className=" w-full justify-between items-start mt-4 text-[#fff] ">
          <Row className="w-[30%]  flex-col gap-2">
            <h1 className="cotoris-bold text-[32px] md:text-[38px]">
              Our Story
            </h1>

            <img
              className="ml-[8px] md:ml-[130px] h-[170px] md:h-[250px] w-[190px] object-cover"
              src={image1}
              alt="..."
            />
            <img
              className="ml-0 md:ml-[15px] h-[170px] md:h-[250px] w-[190px] object-cover"
              src={image2}
              alt="..."
            />
          </Row>
          <Row className="w-[60%] flex-col gap-4 md:gap-6">
            <p className="   text-[13px] md:text-[16px]  interR">
              {storyData.point1}
            </p>
            <h2 className="cotoris-bold text-[#CC9D2F] text-[18px] md:text-[32px] ">
              {storyData.heading}
            </h2>

            {storyData.restPoints.map((val, ind) => (
              <p
                key={ind}
                className="interR  text-[13px] md:text-[16px] border-l-[1px] border-[#CC9D2F] md:border-l-[3px] pl-2 "
              >
                {val}
              </p>
            ))}
          </Row>
        </Row>

        <Row className="bg-[#243054] w-full mb-4 flex-wrap mt-4 justify-center px-2 md:px-0 py-6 md:py-16  gap-2">
          {mileStoneData.map((val, ind) => {
            return (
              <div key={ind} className=" md:border-0 w-[48%] md:w-[24%]">
                <hr className="mt-4 border-[#CC9D2F] border-[2px] w-[30px]" />
                <h1 className="mt-2 text-white poppinM text-[16px] md:text-[22px]">
                  {val.year}
                </h1>
                <p className="text-[#CC9D2F] poppinM text-[16px] md:text-[22px] mt-2">
                  {val.heading}
                </p>
                <p className="poppinR text-white mt-2 text-[13px] md:text-[16px]">
                  {val.details}
                </p>
              </div>
            );
          })}
        </Row>
        <Location className="bg-[#243054]" />
        <Footer />
      </Row>
    </Row>
  );
};

export default OurStory;
