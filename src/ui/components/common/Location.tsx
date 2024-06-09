import React, { FC } from "react";
import location from "../../../assets/imgs/Map.png";
import Row from "./Row";

interface ILocation {
  className?: string;
  className1?: string;
}
const Location: FC<ILocation> = ({ className, className1 }) => {
  return (
    <Row
      className={` w-full flex-col md:flex-row justify-center ${className1} `}
    >
      <div className={`w-full md:w-[40%] h-[380px] md:h-[430px] ${className} `}>
        <Row className="flex-col ml-14 md:ml-28">
          <h2 className="text-[#CC9D2F] cotoris-bold mt-6 text-[16px] md:text-[22px]">
            Working Hours
          </h2>
          <p className="text-white interR  mt-3 text-[13px] md:text-[16px]">
            Sunday to Saturday <br />
            09:00 AM to 11:00 PM
          </p>
          <p className="text-white interR  mt-3 text-[13px] md:text-[16px]">
            Friday <br />
            02:00 PM to 1:00 AM
          </p>
          <h2 className="text-[#CC9D2F] cotoris-bold mt-6 text-[16px] md:text-[22px]">
            Location
          </h2>
          <p className="text-white interR  mt-3 text-[13px] md:text-[16px]">
            Street - 127, Jeddah, <br />
            Saudi Arabia 546544
          </p>
          <h2 className="text-[#CC9D2F] cotoris-bold mt-6 text-[16px] md:text-[22px]">
            Contact Us
          </h2>
          <p className="text-white interR  mt-3 text-[14px]">+123456789</p>
          <p className="text-white interR text-[14px]">
            service@maizresturant.com
          </p>
        </Row>
      </div>

      <div className="w-full md:w-[60%]">
        <img
          className="w-full h-[380px] md:h-[430px] object-cover"
          src={location}
          alt="..."
        />
      </div>
    </Row>
  );
};

export default Location;
