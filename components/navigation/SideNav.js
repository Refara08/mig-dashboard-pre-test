import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import SideNavItem from "./SideNavItem";

import BuildingIcon from "../ui/icons/BuildingIcon";
import CommandIcon from "../ui/icons/CommandIcon";
import CubeIcon from "../ui/icons/CubeIcon";
import FilePlusIcon from "../ui/icons/FilePlusIcon";
import GroupIcon from "../ui/icons/GroupIcon";
import HomeIcon from "../ui/icons/HomeIcon";
import InboxIcon from "../ui/icons/InboxIcon";
import LayersIcon from "../ui/icons/LayersIcon";
import SearchDollarIcon from "../ui/icons/SearchDollarIcon";
import TasksIcon from "../ui/icons/TasksIcon";
import TicketIcon from "../ui/icons/TicketIcon";

export const iconSize = "2.5vh";
export const navList = {
  group1: [
    {
      jsx: <HomeIcon size={iconSize} />,
      id: "home",
    },
    {
      jsx: <TicketIcon size={iconSize} />,
      id: "ticket",
    },
    {
      jsx: <TasksIcon size={iconSize} />,
      id: "tasks",
    },
    {
      jsx: <InboxIcon size={iconSize} />,
      id: "inbox",
    },
    {
      jsx: <BuildingIcon size={iconSize} />,
      id: "building",
    },
  ],
  group2: [
    {
      jsx: <GroupIcon size={iconSize} />,
      id: "group",
    },
    {
      jsx: <LayersIcon size={iconSize} />,
      id: "layers",
    },
    {
      jsx: <CubeIcon size={iconSize} />,
      id: "cube",
    },
    {
      jsx: <CommandIcon size={iconSize} />,
      id: "command",
    },
    {
      jsx: <SearchDollarIcon size={iconSize} />,
      id: "search",
    },
  ],
  group3: [
    {
      jsx: <FilePlusIcon size={iconSize} />,
      id: "file",
    },
  ],
};

const SideNav = () => {
  const [currNav, setCurrNav] = useState("home");
  const changeCurrNavHandler = (id) => {
    setCurrNav(id);
  };
  return (
    <div
      id="navigation"
      className="bg-white text-gray flex flex-col justify-start items-center h-screen pt-[2%] z-30"
    >
      <Link href={"/"}>
        <a>
          <Image
            src={"/image/navigation/logo.png"}
            alt={"logo"}
            width={"35px"}
            height={"35px"}
          />
        </a>
      </Link>

      <nav>
        <ul>
          {navList.group1.map((item, index) => (
            <SideNavItem
              key={index}
              identifier={item.id}
              currState={currNav}
              changeCurrNav={changeCurrNavHandler}
            >
              {item.jsx}
            </SideNavItem>
          ))}
        </ul>
        <ul>
          {navList.group2.map((item, index) => (
            <SideNavItem
              key={index}
              identifier={item.id}
              currState={currNav}
              changeCurrNav={changeCurrNavHandler}
            >
              {item.jsx}
            </SideNavItem>
          ))}
        </ul>
        <ul>
          {navList.group3.map((item, index) => (
            <SideNavItem
              key={index}
              identifier={item.id}
              currState={currNav}
              changeCurrNav={changeCurrNavHandler}
            >
              {item.jsx}
            </SideNavItem>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
