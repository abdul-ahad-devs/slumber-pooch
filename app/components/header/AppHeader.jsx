import {
  appHeaderActions,
  appHeaderMenu,
  appHeaderSocialIcons,
} from "./appHeaderMenu";
import { Link } from "@remix-run/react";
import IconButton from "../buttons/IconButton";
import appLogo from "../../assets/images/app-logo.svg";

const AppHeader = () => {
  return (
    <div className="flex flex-1 bg-white items-center w-screen h-[4rem] px-6 py-2">
      {/* app logo */}
      {/* <div> */}
      <img src={appLogo} className="w-[10rem] h-[5rem]" />
      {/* </div> */}
      {/* menu container */}
      <div className="flex flex-1 justify-center items-center">
        {appHeaderMenu.map((menu) => (
          <Link
            to={menu.route}
            key={menu.id}
            className="uppercase text-sm text-purple mx-5 font-semibold"
          >
            {menu.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-1 justify-between items-center">
        {/* social media icons */}
        <div>
          {appHeaderSocialIcons.map((item) => (
            <IconButton
              key={item.id}
              imageSrc={item.icon}
              containerClassName="mx-2"
              imageClassName="w-[1.5rem] h-[1.5rem]"
            />
          ))}
        </div>
        {/* profile and cart container */}
        <div>
          {appHeaderActions.map((item) => (
            <IconButton
              key={item.id}
              imageSrc={item.icon}
              containerClassName="mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
