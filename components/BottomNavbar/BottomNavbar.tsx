import React, { useState, ReactNode } from "react";
import {
  HomeIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CameraIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const BottomNavbar = () => {
  const iconClasses = "h-24 w-24 p-6";

  const links = [
    {
      title: "Home",
      Icon: <HomeIcon className={iconClasses} />,
      translateClass: "translate-x-0",
    },
    {
      title: "Profile",
      Icon: <UserIcon className={iconClasses} />,
      translateClass: "translate-x-[9rem]",
    },
    {
      title: "Message",
      Icon: <ChatBubbleOvalLeftEllipsisIcon className={iconClasses} />,
      translateClass: "translate-x-[18rem]",
    },
    {
      title: "Photos",
      Icon: <CameraIcon className={iconClasses} />,
      translateClass: "translate-x-[27rem]",
    },
    {
      title: "Settings",
      Icon: <CogIcon className={iconClasses} />,
      translateClass: "translate-x-[36rem]",
    },
  ];

  const [activeLink, setActiveLink] = useState(links[0]);

  return (
    <>
      <div className="text-2xl text-center lg:hidden text-bold text-white">
        This component is not optimised for smaller screens
      </div>
      <div className="bg-gray-50 px-12 py-2 rounded-xl h-28 hidden lg:block">
        <div
          className={`
before:block before:absolute before:h-8 before:w-8 before:-left-[1.8rem] before:top-14 before:rounded-tr-[6rem] before:shadow-[0_-10px_0_0_rgb(17,24,39)]
after:block after:absolute after:h-8 after:w-8 after:-right-[1.8rem] after:top-14 after:rounded-tl-[6rem] after:shadow-[0_-10px_0_0_rgb(17,24,39)]
bg-emerald-400 rounded-full h-24 w-24 -translate-y-16 ring-8 ring-gray-900 transition duration-700 absolute ${activeLink.translateClass}
          `}
        />
        <ul className="flex flex-row items-center gap-2 md:gap-4 lg:gap-12 relative">
          {links.map((link, index) => (
            <li key={index}>
              <a
                onClick={(e) => {
                  setActiveLink(link);
                }}
                className={`flex flex-col items-center focus:outline-none`}
                href="#!"
              >
                <div
                  className={`${
                    link.title === activeLink.title ? "-translate-y-16" : ""
                  } transition ease-in-out duration-500`}
                >
                  {link.Icon}
                </div>
                <span
                  className={`absolute bottom-4 text-center text-lg opacity-0 transition duration-700 ${
                    link.title === activeLink.title ? "opacity-100" : ""
                  }`}
                >
                  {link.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BottomNavbar;
