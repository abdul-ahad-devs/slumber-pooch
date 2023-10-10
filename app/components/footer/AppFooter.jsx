import { Link } from "@remix-run/react";
import { appFooterMenu, appFooterSocialIcons } from "./appFooterMenu";
import IconButton from "../buttons/IconButton";
import appLogo from "../../assets/images/app-logo.svg";

const AppFooter = () => {
  return (
    <div className="bg-purple min-h-[15rem] p-8 flex flex-1 justify-around">
      <div className="flex flex-1 justify-around flex-col ">
        {/* footer menu */}
        {appFooterMenu.map((menu) => (
          <Link
            to={menu.route}
            key={menu.id}
            className="mb-2 font-bold text-darkYellow uppercase"
          >
            {menu.name}
          </Link>
        ))}
        {/* app logo */}
        <img src={appLogo} className="w-[10rem] h-[5rem]" />
      </div>

      <div className="flex flex-1 justify-around items-end flex-col ">
        <div className="flex justify-evenly items-center flex-1 flex-col">
          <p className="text-base text-darkYellow uppercase">
            Subscribe for an exclusive foodguide
          </p>

          <div>
            {appFooterSocialIcons.map((item) => (
              <IconButton
                key={item.id}
                imageSrc={item.icon}
                containerClassName="mx-2"
              />
            ))}
          </div>

          <p className="text-[0.6rem] text-darkOrange uppercase">
            2023, SlumberPooch
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
