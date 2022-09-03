import { useState } from "react";
import SearchIcon from "../ui/icons/searchIcon";
import CloseIcon from "../ui/icons/CloseIcon";

const TopNavSearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearchBarHandler = () => {
    setIsSearching((prev) => !prev);
  };

  const closeSearchBarHandler = () => {
    setIsSearching(false);
  };

  return (
    <div className="flex items-center gap-4">
      <form
        className={`transition-all duration-300 ${
          isSearching ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
        }`}
      >
        <fieldset disabled={!isSearching}>
          <input
            type="text"
            className="bg-slate-300 rounded-2xl py-1 px-2"
            onBlur={closeSearchBarHandler}
          />
        </fieldset>
      </form>
      <div className="cursor-pointer" onClick={toggleSearchBarHandler}>
        {isSearching ? <CloseIcon size={"2vh"} /> : <SearchIcon size={"2vh"} />}
      </div>
    </div>
  );
};

export default TopNavSearchBar;
