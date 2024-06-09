import React, { FC } from "react";
import Row from "./Row";

interface ICard {
  imgSrc: any;
  title: string;
}
const Card: FC<ICard> = ({ imgSrc, title }) => {
  return (
    <Row className="flex-col w-[48%] h-[188px] md:w-[33%] md:h-[328px] items-center mb-2">
      <img
        className="object-cover w-[410px] h-[270px]"
        src={imgSrc}
        alt="..."
      />
      <Row className="bg-[#243054] w-full h-[43px] text-white">
        <h2 className="ml-10 mt-2 cotoris-bold text-[16px] md:text-[22px]">
          {title}
        </h2>
      </Row>
    </Row>
  );
};

export default Card;
