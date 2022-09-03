import { useState } from "react";
import Image from "next/image";

import { Squash as Hamburger } from "hamburger-react";

import TopNavSearchBar from "../TopNavSearchBar";
import BellIcon from "../../ui/icons/BellIcon";
import ChevronRightIcon from "../../ui/icons/ChevronRight";
import SideNavMobile from "./SideNavMobile";

const MobileNav = () => {
  const [isHamActive, setIsHamActive] = useState(false);

  const closeSideNavHandler = () => {
    setIsHamActive(false);
  };

  return (
    <div className="mb-2 sticky top-0 z-30  px-4 backdrop-blur-2xl bg-opacity-10 bg-greenish-gray">
      <div className="flex justify-between items-center border-b-[1px] border-slate-400 py-2 ">
        <Image
          src="/image/navigation/logo.png"
          alt="logo software"
          width="30px"
          height="30px"
        />
        <div className="flex justify-end items-center gap-4">
          <TopNavSearchBar />
          <BellIcon size={"2vh"} />
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={"/image/navigation/profile-picture.png"}
                alt={"a generic profile picture"}
                width={"30px"}
                height={"30px"}
              />
              <p className="hidden md:block">Jhon Doe</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center text-black text-sm">
        <Hamburger toggled={isHamActive} toggle={setIsHamActive} size={20} />
        <p className="text-gray">Perusahaan</p>
        <ChevronRightIcon size={"2vh"} />
        <p className="text-black font-semibold py-2">Mitramas Infosys Global</p>
      </div>
      <SideNavMobile isOpen={isHamActive} onClose={closeSideNavHandler} />
    </div>
  );
};

export default MobileNav;
