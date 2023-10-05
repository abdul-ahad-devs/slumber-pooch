import HomePageBanner1 from "~/components/homepage/HomepageBanner1";
import HomepageBanner2 from "~/components/homepage/HomepageBanner2";
import HomepageBanner3 from "~/components/homepage/HomepageBanner3";

export default function Index() {
  return (
    <div className="bg-white h-full">
      <HomePageBanner1 />
      <HomepageBanner2 />
      <HomepageBanner3 />
    </div>
  );
}
