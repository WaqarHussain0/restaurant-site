import person from "../../assets/imgs/person.png";
import play from "../../assets/imgs/Play.png";
import Row from "./common/Row";

const clientData = {
  name: "Khalid Al Dawsry",
  location: "Jeddah, Saudi",
  review:
    "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
  profile: person,
};

const Quote = () => {
  return (
    <Row className=" w-full flex-row  justify-center mt-4 mb-10">
      <Row className="w-full flex-col md:flex-row justify-center">
        <Row className="bg-[#CC9D2F] w-full flex-col items-center justify-center gap-4 md:w-[50%] h-[300px] md:h-[400px] p-4 md:p-14">
          <p className="interR  text-[#243054] text-[16px] md:text-[22px]">
            {clientData.review}
          </p>

          <Row className="gap-4 ">
            <Row className=" flex-col border-b-[1px] pb-2 border-[#00646D]">
              <h2 className="poppinM text-[#243054] text-[16px] md:text-[22px]">
                {clientData.name}
              </h2>
              <p className="poppinR text-[#243054] text-[13px] md:text-[16px]">
                {clientData.location}
              </p>
            </Row>
            <div className="w-[50px] h-[50px] rounded-full ">
              <img
                src={clientData.profile}
                alt="..."
                className="w-full h-full object-cover"
              />
            </div>
          </Row>
        </Row>

        <Row className="w-full md:w-[50%] h-[300px] md:h-[400px]  justify-center items-center bg-reviewImage-bgImage">
          <img src={play} alt="..." className="h-[40px] w-[40px]  " />
        </Row>
      </Row>
    </Row>
  );
};

export default Quote;
