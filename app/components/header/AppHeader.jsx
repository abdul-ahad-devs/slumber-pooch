import {
  appHeaderActions,
  appHeaderMenu,
  appHeaderSocialIcons,
} from "./appHeaderMenu";
import { Link } from "@remix-run/react";
import IconButton from "../buttons/IconButton";

const AppHeader = () => {
  return (
    <div className="flex flex-1 bg-white w-screen h-[4rem] px-4 py-2">
      {/* app logo */}
      <div className="text-darkOrange font-bold capitalize text-3xl items-center flex flex-1">
        Slumber Pooch Logo
      </div>
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
