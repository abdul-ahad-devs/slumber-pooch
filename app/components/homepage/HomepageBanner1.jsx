import { BANNER_IMAGE_SIZE, BANNER_PADDING } from "./constants";
import bannerImg from "../../assets/images/homepage-banner-1.png";
import curlyPurpleArrow from "../../assets/images/purple-curly-arrow.png";
import CustomButton from "../buttons/CustomButton";

const HomePageBanner1 = () => {
  return (
    <div className={`flex flex-1 flex-col bg-white ${BANNER_PADDING}`}>
      <div className="flex flex-1 flex-col lg:flex-row justify-around relative items-center">
        <img
          src={curlyPurpleArrow}
          className="h-[4rem] lg:h-[6rem] absolute sm:left-[70%] md:left-10 lg:left-[40%] lg:bottom-0"
        />
        <div className="flex flex-1 flex-col justify-center items-center container">
          <h1 className="text-[4rem] capitalize leading-normal text-purple">
            Introducing The{" "}
            <h1 className="font-extrabold py-2 px-4 rounded-xl bg-paleYellow w-max">
              All-you-need
            </h1>{" "}
            Dog Bed
            <p className="text-base text-purple">Machine Washable </p>
            <p className="text-base text-purple">4 in 1 Multifunction</p>
            <p className="text-base text-purple">
              Bring Everywhere, use anywhere
            </p>
            <p className="text-base text-purple">The most Stylish</p>
            <CustomButton label="Shop Now" containerClassName="my-2" />
          </h1>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center ">
          <img src={bannerImg} className={`${BANNER_IMAGE_SIZE} relative`} />
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner1;
