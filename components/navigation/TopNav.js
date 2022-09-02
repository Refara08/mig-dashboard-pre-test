import Image from "next/image";

import ChevronRightIcon from "../ui/icons/ChevronRight";
import TopNavSearchBar from "./TopNavSearchBar";
import BellIcon from "../ui/icons/BellIcon";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center text-gray">
        <p>Perusahaan</p>
        <ChevronRightIcon size={"2vh"} />
        <p className="text-black font-bold">Mitramas Infosys Global</p>
      </div>
      <div className="flex items-center gap-6">
        <TopNavSearchBar />
        <BellIcon size={"2vh"} />
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={"/image/navigation/profile-picture.png"}
              alt={"a generic profile picture"}
              width={"35px"}
              height={"35px"}
            />
            <p>Jhon Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
