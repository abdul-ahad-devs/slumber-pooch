import bannerImg from "../../assets/images/man-with-dogs.jpg";
import { BANNER_PADDING } from "./constants";

const HomepageBanner7 = () => {
  return (
    <div className={`flex flex-1 flex-col bg-white`}>
      <div className="flex flex-col flex-1 lg:flex-row items-center">
        <div className={`flex flex-1 flex-col justify-center items-center`}>
          {/* product features list */}
          <div className="flex flex-col w-[32rem]">
            <h1 className="font-extrabold text-3xl text-purple text-left my-4">
              About slumberpooch
            </h1>
            <p className="text-base text-purple my-4">
              At Slumberpooch, we’re just like you – proud dog parents with a
              lot on our plates. Our two adorable pups bring joy to our lives,
              but of course, they also bring chaos and mess.
            </p>
            <p className="text-base text-purple">
              We knew this couldn’t just be us. So we wanted to embark on a
              journey with dog parents everywhere to create something special.
              And so Slumberpooch was born – a game-changer for busy dog parents
              just like you. We’ve crafted the perfect space for your crazy pups
              in Mochi and Silver’s stunning shades of Brown and Grey Blue. Just
              so we can make dog parenting a little bit easier for you!
            </p>
          </div>
        </div>
        <div className="flex flex-1">
          <img src={bannerImg} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner7;
