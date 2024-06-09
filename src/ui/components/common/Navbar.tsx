import logo from "../../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { PAGES_ROUTES } from "../../../routes";
import Row from "./Row";

function Navbar() {
  return (
    <Row className=" w-full bg-[#590017] justify-between  items-center py-4">
      <img
        src={logo}
        className="h-[50px] w-[40px] md:h-[80px] md:w-[65px] object-contain "
        alt="logo"
      />

      <Row className=" text-[#fff] gap-2 md:gap-10 text-[16px] md:text-[22px] cotoris-bold justify-center  z-[1]">
        <Link to={PAGES_ROUTES.home}>
          <p>Home</p>
        </Link>
        <Link to={PAGES_ROUTES.menu}>
          <p>Menu</p>
        </Link>
        <Link to={PAGES_ROUTES.about}>
          <p>About</p>
        </Link>
      </Row>

      <Row>
        <button className="cotoris-bold text-[14px] md:text-[16px] px-2 py-0 md:px-4 md:py-2 rounded-l-sm bg-[#CC9D2F] text-[#5B0017]">
          Book Now
        </button>
        <svg
          width="10"
          height="35"
          viewBox="0 0 40 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.14867 7.40722L16.6171 0.999939L23.0244 16.4673L38.4928 22.8746L32.0856 38.343L38.4928 53.8103L23.0244 60.2176L16.6171 75.6849L1.14867 69.2777V7.40722ZM1.14867 38.343L23.0244 16.4673L1.14867 38.343Z"
            fill="#5B0017"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.8231 76.9819L23.4275 61.0389L39.3717 54.4346L32.7673 38.4915L39.3716 22.5474L23.4275 15.9431L16.8231 1.52588e-05L0 6.96843V38.1274L5.10216e-05 38.7414L0 39.3705V70.0135L16.8231 76.9819ZM1.758 36.3694V8.14308L15.8718 2.29694L21.7179 16.4096L1.758 36.3694ZM22.961 17.6527L37.0747 23.4988L31.2286 37.6125H3.0011L22.961 17.6527ZM3.00221 39.3705H31.2286L37.0747 53.4832L22.961 59.3293L3.00221 39.3705ZM21.7179 60.5724L15.8718 74.685L1.758 68.8389V40.6125L21.7179 60.5724Z"
            fill="#CC9D2F"
          />
          <path
            d="M27.4345 28.2723C27.4345 29.6248 26.3372 30.7209 24.9848 30.7209C23.6334 30.7209 22.5361 29.6248 22.5361 28.2723C22.5361 26.9199 23.6334 25.8237 24.9848 25.8237C26.3372 25.8237 27.4345 26.9199 27.4345 28.2723Z"
            fill="#CC9D2F"
          />
          <path
            d="M13.554 13.5799C13.554 14.9324 12.4578 16.0297 11.1054 16.0297C9.75291 16.0297 8.65674 14.9324 8.65674 13.5799C8.65674 12.2275 9.75291 11.1313 11.1054 11.1313C12.4578 11.1313 13.554 12.2275 13.554 13.5799Z"
            fill="#CC9D2F"
          />
          <path
            d="M13.554 61.855C13.554 63.2074 12.4578 64.3036 11.1054 64.3036C9.75291 64.3036 8.65674 63.2074 8.65674 61.855C8.65674 60.5025 9.75291 59.4063 11.1054 59.4063C12.4578 59.4063 13.554 60.5025 13.554 61.855Z"
            fill="#CC9D2F"
          />
          <path
            d="M27.4345 47.8624C27.4345 49.2149 26.3372 50.311 24.9848 50.311C23.6334 50.311 22.5361 49.2149 22.5361 47.8624C22.5361 46.5099 23.6334 45.4138 24.9848 45.4138C26.3372 45.4138 27.4345 46.5099 27.4345 47.8624Z"
            fill="#CC9D2F"
          />
        </svg>
      </Row>
    </Row>
  );
}

export default Navbar;
