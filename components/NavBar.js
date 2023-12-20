"use client";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cgLogo from "../public/CG_LogoAndText.svg";

const NavBar = () => {
  const Links = [
    { name: "Home", url: "/" },
    { name: "About", url: "About" },
  ];
  // menuHandler
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };
  return (
    <nav
      className="flex justify-between items-center py-2
     text-white"
    >
      <Image src={cgLogo} className="w-14 filter contrast-150 invert " />
      <IoMenu onClick={menuHandler} className="text-5xl" />
      {toggleMenu && (
        <div className="text-black bg-white rounded-lg absolute right-6 top-5 w-72 h-60 z-20 text-center flex justify-center flex-row-reverse">
          <IoClose
            onClick={menuHandler}
            className="absolute right-4 top-2 text-4xl "
          />
          <ul>
            {Links.map((link) => {
              return (
                <li className="mt-10">
                  <Link href={link.url}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
