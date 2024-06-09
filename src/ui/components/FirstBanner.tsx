import { PAGES_ROUTES } from "../../routes";
import bannerImg from "../../assets/imgs/01.png";
import design from "../../assets/imgs/design.png";
import { Link } from "react-router-dom";
import Row from "./common/Row";

function FirstBanner() {
  return (
    <Row className="w-full flex-col md:flex-row md:items-end py-4 md:py-8 justify-center relative">
      <Row className="flex-col">
        <h1 className="cotoris-bold text-center md:text-start text-[40px] md:text-[62px] text-white ">
          Taste the authentic <br /> Saudi cuisine
        </h1>

        <Row className="mt-2 md:ml-6 flex-col gap-4 items-center md:items-start ">
          <p className="interL text-[13px] md:text-[16px] font-light text-white ">
            Among the best Saudi chefs in the world, <br /> serving you
            something beyond flavor.
          </p>
          <Link
            to={PAGES_ROUTES.menu}
            className="z-[10] cursor-pointer cotoris-bold px-4 py-1 mb-10 text-[18px] md:text-[20px] text-[#CC9D2F] border-[2px] border-[#CC9D2F] "
          >
            Our Menu
          </Link>
        </Row>
      </Row>

      <Row>
        <img
          src={design}
          className="opacity-50 mb-5 hidden md:block md:absolute top-[-115px] left-[90px] md:w-[510px] md:h-[540px] z-[0]"
          alt="..."
        />

        <img
          src={bannerImg}
          className="w-full max:h-[300px] md:w-[610px] md:h-[400px] object-contain"
          alt="..."
        />
      </Row>
    </Row>
  );
}

export default FirstBanner;
