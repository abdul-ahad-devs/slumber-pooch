import { productFeaturesList } from "./constants";
import bannerImg from "../../assets/images/two-dogs.jpg";
import IconButton from "../buttons/IconButton";
import heartIcon from "../../assets/icons/heart.svg";

const HomepageBanner5 = () => {
  return (
    <div className={`flex flex-1 flex-col bg-white`}>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-1">
          <img src={bannerImg} />
        </div>
        <div className="flex flex-1 justify-center">
          {/* product features list */}
          <div className="flex flex-col w-[25rem]">
            {productFeaturesList.map((feature) => (
              <div key={feature.id} className="flex flex-row items-center my-4">
                <IconButton
                  imageSrc={heartIcon}
                  imageClassName="w-[1.25rem] h-[1.25rem]"
                />
                <p className="ml-5 text-lg text-black">{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner5;
