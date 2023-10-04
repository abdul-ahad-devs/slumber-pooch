import { Link } from "@remix-run/react";
import { appFooterMenu, appFooterSocialIcons } from "./appFooterMenu";
import IconButton from "../buttons/IconButton";

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
        <h1 className="text-3xl text-darkOrange font-bold ">
          Slumber Pooch Logo
        </h1>
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
