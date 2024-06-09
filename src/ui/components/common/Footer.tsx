import { PAGES_ROUTES } from "../../../routes";
import Row from "./Row";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import BlackLogo from "../../../assets/svgs/BlackLogo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Row className="mt-4 w-full bg-[#CC9D2F] flex-col gap-2 justify-center items-center py-4">
      <BlackLogo className="object-cover " />

      <Row className=" text-[#5B0017] gap-4 md:gap-6 text-[12px] md:text-[16px]   interR items-center border-b-[1px] md:px-4">
        <Link to={PAGES_ROUTES.home} className="cursor-pointer">
          Home
        </Link>

        <Link to={PAGES_ROUTES.menu} className="cursor-pointer">
          Menu
        </Link>

        <Link to={PAGES_ROUTES.about} className="cursor-pointer">
          About
        </Link>
      </Row>

      <Row className="flex-col gap-2 md:gap-0 justify-center items-center md:flex-row md:justify-center ">
        <p className="poppinR text-[#000] text-[10px] md:text-[14px]">
          Copyright © 2023
          <Link to="https://waqarhussain.vercel.app/" className="ml-4 underline poppinM">
            Waqar Hussain
          </Link>
        </p>

        <Row className="text-[#000] gap-5 md:ml-56">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </Row>
      </Row>
    </Row>
  );
}

export default Footer;
