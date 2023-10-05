import HomePageBanner1 from "~/components/homepage/HomepageBanner1";
import HomepageBanner2 from "~/components/homepage/HomepageBanner2";
import HomepageBanner3 from "~/components/homepage/HomepageBanner3";
import HomepageBanner5 from "~/components/homepage/HomepageBanner5";
import HomepageBanner6 from "~/components/homepage/HomepageBanner6";
import HomepageBanner7 from "~/components/homepage/HomepageBanner7";

export default function Index() {
  return (
    <div className="bg-white h-full">
      <HomePageBanner1 />
      <HomepageBanner2 />
      <HomepageBanner3 />
      <HomepageBanner5 />
      <HomepageBanner6 />
      <HomepageBanner7 />
    </div>
  );
}
