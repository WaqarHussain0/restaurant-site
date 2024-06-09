import Row from "./common/Row";
import star from "../../assets/imgs/star.png";
import topDesign from "../../assets/imgs/Group 229.png";
import bottomDesign from "../../assets/imgs/Group 230.png";
import { Link } from "react-router-dom";
import { PAGES_ROUTES } from "../../routes";

function SecondBanner() {
  return (
    <Row className="px-2 overflow-hidden flex-col items-center h-[300px] md:h-[550px] w-full relative bg-banner2-bgImage justify-center">
      <img src={star} className="h-[60px] w-[50px] object-cover" alt="star" />

      <img
        src={topDesign}
        className="absolute top-0 h-[20px] object-cover opacity-50 w-[40%] left-0 drop-shadow-sm"
        alt="..."
      />

      <img
        src={bottomDesign}
        className="absolute bottom-0 right-0 h-[20px] object-cover opacity-10 w-[40%] drop-shadow-sm "
        alt="..."
      />

      <h1 className="cotoris-bold mt-4 text-white  text-center text-[20px] md:text-[50px] ">
        A unique menu that reflects the <br /> true essence of the Saudi cuisine
      </h1>
      <Link
        to={PAGES_ROUTES.menu}
        className="cotoris-bold mt-5 mb-10 text-[#5B0017]  px-4 py-2 md:px-6 md:py-3 bg-[#CC9D2F]  "
      >
        Our Menu
      </Link>
    </Row>
  );
}

export default SecondBanner;
