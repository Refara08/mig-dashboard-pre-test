import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";

import { navList } from "../SideNav";

import NavModal from "./NavModal";
import SideNavItemMobile from "./SideNavItemMobile";

const SideNavMobile = (props) => {
  const { isOpen, onClose } = props;
  const [currNav, setCurrNav] = useState("home");

  const sideNavMobileRef = useRef();
  const q = gsap.utils.selector(sideNavMobileRef);

  const changeCurrNavHandler = (id) => {
    setCurrNav(id);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        q("li"),
        { xPercent: -30, opacity: 0 },
        { xPercent: 0, opacity: 1, stagger: 0.03, duration: 0.3 }
      );
    }
  }, [isOpen, q]);

  return (
    <NavModal isOpen={isOpen} onClose={onClose}>
      <div
        ref={sideNavMobileRef}
        className="flex flex-col items-start justify-start gap-4 pt-8 md:px-[3rem] h-screen bg-white"
      >
        <Link href={"/"}>
          <a className=" px-8">
            <Image
              src={"/image/navigation/logo.png"}
              alt={"logo"}
              width={"35px"}
              height={"35px"}
            />
          </a>
        </Link>

        <nav className="w-full pl-6">
          <ul className="mb-6">
            {navList.group1.map((item, index) => (
              <SideNavItemMobile
                key={index}
                id={item.id}
                currNav={currNav}
                changeCurrNav={changeCurrNavHandler}
                closeNav={onClose}
              >
                {item.jsx}
              </SideNavItemMobile>
            ))}
          </ul>
          <ul className="mb-6">
            {navList.group2.map((item, index) => (
              <SideNavItemMobile
                key={index}
                id={item.id}
                currNav={currNav}
                changeCurrNav={changeCurrNavHandler}
                closeNav={onClose}
              >
                {item.jsx}
              </SideNavItemMobile>
            ))}
          </ul>
          <ul className="mb-6">
            {navList.group3.map((item, index) => (
              <SideNavItemMobile
                key={index}
                id={item.id}
                currNav={currNav}
                changeCurrNav={changeCurrNavHandler}
                closeNav={onClose}
              >
                {item.jsx}
              </SideNavItemMobile>
            ))}
          </ul>
        </nav>
      </div>
    </NavModal>
  );
};

export default SideNavMobile;
