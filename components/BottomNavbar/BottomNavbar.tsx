import React, { useState, ReactNode } from "react";
import {
  HomeIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CameraIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const BottomNavbar = () => {
  const iconClasses: string =
    "h-12 lg:h-24 w-12 lg:w-24 rounded-full p-3 lg:p-6";

  const [links, setLinks] = useState([
    {
      title: "Home",
      Icon: <HomeIcon className={iconClasses} />,
      isActive: true,
    },
    {
      title: "Profile",
      Icon: <UserIcon className={iconClasses} />,
      isActive: false,
    },
    {
      title: "Message",
      Icon: <ChatBubbleOvalLeftEllipsisIcon className={iconClasses} />,
      isActive: false,
    },
    {
      title: "Photos",
      Icon: <CameraIcon className={iconClasses} />,
      isActive: false,
    },
    {
      title: "Settings",
      Icon: <CogIcon className={iconClasses} />,
      isActive: false,
    },
  ]);

  return (
    <div className="bg-gray-50 px-4 lg:px-12 py-1 lg:py-2 rounded-xl h-14 lg:h-28">
      <ul className="flex flex-row items-center gap-2 md:gap-4 lg:gap-12 relative">
        {links.map((link, index) => (
          <li key={index}>
            <a
              onClick={(e) => {
                setLinks(
                  links.map((l) => {
                    if (l.title === link.title) {
                      return {
                        ...l,
                        isActive: true,
                      };
                    }
                    return {
                      ...l,
                      isActive: false,
                    };
                  })
                );
              }}
              className={`flex flex-col gap-2 lg:gap-4 items-center ${
                link.isActive ? "-translate-y-10 lg:-translate-y-16" : ""
              } transition ease-in-out duration-600 group focus:outline-none`}
              href="#!"
            >
              <div
                className={
                  link.isActive
                    ? "bg-emerald-400 ring-4 lg:ring-8 ring-gray-800 rounded-full"
                    : ""
                }
              >
                {link.Icon}
              </div>
              <span
                className={`text-center text-sm lg:text-lg opacity-0 transition duration-800 ${
                  link.isActive ? "opacity-100" : ""
                }`}
              >
                {link.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavbar;
