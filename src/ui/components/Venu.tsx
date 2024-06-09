import Row from "./common/Row";
import door from "../../assets/imgs/02.png";
import venu1 from "../../assets/imgs/05.png";
import venu2 from "../../assets/imgs/06.png";
import venu3 from "../../assets/imgs/07.png";

const venuData = {
  heading: "A distinctive dining destination inspired by the culture.",
  subTitle: "Experience Al Balad old town of Jeddah vibes.",
  src1: venu1,
  src2: venu2,
  src3: venu3,
  doorPic: door,
};

function Venu() {
  return (
    <Row className="w-full  items-start md:items-end justify-between mt-4  py-4">
      <Row className="w-[40%] md:w-[30%]">
        <img
          src={venuData.doorPic}
          alt="..."
          className="w-full max-h-[490px] object-cover"
        />
      </Row>

      <Row className="flex-col justify-start w-[55%] md:w-[65%] items-start overflow-hidden">
        <h1 className="cotoris-bold text-white text-[20px] md:text-[49px] ">
          {venuData.heading}
        </h1>
        <p className="text-white mt-2 interL text-[13px] md:text-[16px]">
          {venuData.subTitle}
        </p>
        <p className=" cursor-none text-[14px] md:text-[18px] cotoris-bold text-[#5B0017] bg-[#CC9D2F] px-4 py-1 md:px-8 md:py-2 mt-4">
          Our Venu
        </p>

        <Row className="gap-2 mt-4 ">
          <img
            className="w-[80px] h-[100px] md:w-[120px] md:h-[125px]"
            src={venuData.src1}
            alt="..."
          />
          <img
            className="w-[80px] h-[100px] md:w-[120px] md:h-[125px]"
            src={venuData.src2}
            alt="..."
          />
          <img
            className="hidden md:block w-[90px] h-[100px] md:w-[120px] md:h-[125px]"
            src={venuData.src3}
            alt="..."
          />
        </Row>
        <hr className="mt-1 border-[#CC9D2F] border-[1px] w-full md:w-[40%]" />
      </Row>
    </Row>
  );
}

export default Venu;
