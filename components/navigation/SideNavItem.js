import { useState } from "react";
import Link from "next/link";

const NavItem = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className={`relative ${
        props.currState === `${props.identifier}`
          ? "border-mygreen bg-slate-100"
          : "border-transparent bg-white"
      }`}
    >
      <div
        className={`absolute bottom-1/2 translate-y-1/2 left-16 text-black bg-black bg-opacity-10 py-1 px-2 transition duration-300 rounded-lg ${
          isHover ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        {props.identifier}
      </div>
      <Link href="/">
        <a
          onClick={() => {
            props.changeCurrNav(`${props.identifier}`);
          }}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
