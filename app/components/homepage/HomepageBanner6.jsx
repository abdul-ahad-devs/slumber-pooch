import { BANNER_PADDING } from "./constants";
import bannerImg from "../../assets/images/purple-container.png";
import curlyOrangeArrow from "../../assets/images/orange-curly-arrow.png";
import yellowStar from "../../assets/icons/yellow-star.svg";
import IconButton from "../buttons/IconButton";

const HomepageBanner6 = () => {
  return (
    <div
      className={`flex flex-1 flex-col bg-paleYellow items-center relative justify-center ${BANNER_PADDING}`}
    >
      <img
        src={bannerImg}
        className="sm:h-[30rem] md:h-[40rem] lg:h-[45rem] w-[80%]"
      />
      <div className="absolute">
        <p className="text-darkOrange text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] flex flex-row items-center">
          &quot;A <p className="text-darkYellow mx-4">dog bed </p> that
        </p>
        <p className="text-darkOrange text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] flex flex-row items-center">
          <img src={curlyOrangeArrow} className="h-[3rem] lg:h-[5rem] " />
          <p className="text-white mx-4">does it all!&quot; </p>{" "}
          <IconButton
            imageSrc={yellowStar}
            imageClassName="lg:h-[3rem] lg:w-[3rem]"
          />
        </p>

        <p className="text-3xl text-white mt-16 uppercase py-4 w-full bg-orange rounded-full text-center">
          - Rown Our Pet Photographer
        </p>
      </div>
    </div>
  );
};

export default HomepageBanner6;
