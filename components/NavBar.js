import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import cgLogo from "../public/CG_LogoAndText.svg";
const NavBar = () => {
  return (
    <nav
      className="flex justify-between items-center py-2
     text-white"
    >
      <Image src={cgLogo} className="w-14 filter contrast-150 invert " />
      <IoMenu className="text-5xl" />
    </nav>
  );
};

export default NavBar;
