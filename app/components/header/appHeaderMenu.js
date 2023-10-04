import facebookLogo from "../../assets/icons/facebook-logo.svg";
import tiktokLogo from "../../assets/icons/tiktok-logo.svg";
import instagramLogo from "../../assets/icons/instagram-logo.svg";
import cartIcon from "../../assets/icons/cart.svg";
import avatarIcon from "../../assets/icons/avatar.svg";

export const appHeaderMenu = [
  {
    id: "our-story",
    route: "/app/our-story",
    name: "Our Story",
  },
  {
    id: "contact",
    route: "/app/contact-us",
    name: "Contact",
  },
];

export const appHeaderSocialIcons = [
  {
    id: "instagram",
    route: "",
    icon: instagramLogo,
  },
  {
    id: "tiktok",
    route: "",
    icon: tiktokLogo,
  },
  {
    id: "facebook",
    route: "",
    icon: facebookLogo,
  },
];

export const appHeaderActions = [
  {
    id: "profile",
    route: "",
    icon: avatarIcon,
  },
  {
    id: "cart",
    route: "",
    icon: cartIcon,
  },
];
