const SideNavItemMobile = (props) => {
  const { children, id, currNav, changeCurrNav, closeNav } = props;

  return (
    <li
      onClick={() => {
        changeCurrNav(`${id}`);
        closeNav();
      }}
      className={`stagger-right flex gap-4 items-center border-l-2 py-2 pl-2 pr-8 hover:bg-slate-100 hover:border-mygreen cursor-pointer ${
        currNav === id
          ? "border-mygreen bg-slate-100"
          : "border-transparent bg-white"
      }`}
    >
      <span>{children}</span>
      <span>{id}</span>
    </li>
  );
};

export default SideNavItemMobile;
