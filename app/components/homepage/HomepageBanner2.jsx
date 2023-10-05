import {
  BANNER_IMAGE_SIZE,
  BANNER_PADDING,
  productFeatures,
} from "./constants";
import bannerImg from "../../assets/images/homepage-banner-2.png";
import curlyOrange from "../../assets/images/curly-orange.png";
import ProductFeatureCard from "../cards/ProductFeatureCard";
import CustomButton from "../buttons/CustomButton";

const HomepageBanner2 = () => {
  return (
    <div className={`flex flex-1 flex-col bg-paleYellow ${BANNER_PADDING}`}>
      <div className="flex flex-1 flex-col lg:flex-row justify-around relative items-center">
        <div className="flex flex-1 flex-col justify-center items-center container">
          <img
            src={curlyOrange}
            className="h-[2.5rem] lg:h-[4rem] rotate-[180deg] lg:my-0 my-4 relative self-start lg:absolute top-0 left-0"
          />
          <h1 className="text-[4rem] text-purple px-20">
            All The Functions <h1>You Need in </h1>
            <span className="font-extrabold">1 Dog Bed</span>
          </h1>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center ">
          <img src={bannerImg} className={BANNER_IMAGE_SIZE} />
        </div>
      </div>

      {/* static cards container */}
      <div className="flex flex-1 flex-col lg:flex-row justify-center my-8 px-4">
        {productFeatures.map((feature) => (
          <ProductFeatureCard
            key={feature.id}
            title={feature.title}
            className="my-4 lg:mx-4 lg:my-0 flex flex-1 flex-col justify-center"
            description={feature.description}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <CustomButton label="Yes, I want a SnuggleMuffin Now!" />
      </div>
    </div>
  );
};

export default HomepageBanner2;
