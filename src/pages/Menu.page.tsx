import Card from "../ui/components/common/Card";
import Menu1 from "../assets/imgs/01.png";
import Menu2 from "../assets/imgs/08.png";
import Menu3 from "../assets/imgs/09.png";
import Menu4 from "../assets/imgs/17.png";
import Menu5 from "../assets/imgs/13.png";
import Menu6 from "../assets/imgs/14.png";
import Menu7 from "../assets/imgs/15.png";
import Menu8 from "../assets/imgs/16.png";
import Menu9 from "../assets/imgs/10.png";
import Row from "../ui/components/common/Row";
import Navbar from "../ui/components/common/Navbar";
import Location from "../ui/components/common/Location";
import Footer from "../ui/components/common/Footer";

const menuData = [
  {
    id: 1,
    name: "Dish 1",
    src: Menu1,
  },
  {
    id: 2,
    name: "Dish 2",
    src: Menu2,
  },
  {
    id: 3,
    name: "Dish 3",
    src: Menu3,
  },
  {
    id: 4,
    name: "Dish 4",
    src: Menu4,
  },
  {
    id: 5,
    name: "Dish 5",
    src: Menu5,
  },
  {
    id: 6,
    name: "Dish 6",
    src: Menu6,
  },
  {
    id: 7,
    name: "Dish 7",
    src: Menu7,
  },
  {
    id: 8,
    name: "Dish 8",
    src: Menu8,
  },
  {
    id: 9,
    name: "Dish 9",
    src: Menu9,
  },
];
const Menu = () => {
  return (
    <Row className="w-full justify-center bg-[#590017]">
      <Row className="w-[90%] flex-col  justify-center">
        <Navbar />
        <Row className="flex-col gap-2 md:gap-0 md:flex-row justify-between mt-3 items-start md:items-center">
          <h2 className="cotoris-bold text-[#CC9D2F] text-[28px] md:text-[42px] ">
            Discover Our menu{" "}
          </h2>
          <p className="interR text-[#fff] text-[13px] md:text-[16px] text-justify">
            There is a wide selection of choices served by top Saudi chefs,
            prepared using best quality local ingredients.
          </p>
        </Row>

        {/* Card Start here*/}
        <Row className=" items-center gap-5 interR  text-white mt-12 text-[14px]">
          <p className="bg-[#CC9D2F] cursor-pointer px-4 py-1 interR text-[16px]">
            All
          </p>
          <p className="cursor-none">Cocktails</p>
          <p className="cursor-none">Dessert</p>
        </Row>
        <Row className="justify-between  mt-6 flex-wrap">
          {menuData.map((val, ind) => {
            return <Card key={ind} imgSrc={val.src} title={val.name} />;
          })}
        </Row>

        {/* Card ends here*/}

        <Location className="bg-[#243054] " />

        <Footer />
      </Row>
    </Row>
  );
};

export default Menu;
