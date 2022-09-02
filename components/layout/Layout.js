import SideNav from "../navigation/SideNav";
import TopNav from "../navigation/TopNav";

const Layout = (props) => {
  return (
    <div className="bg-greenish-gray text-black flex">
      <SideNav />
      <div className="px-8 py-4 w-full">
        <TopNav />
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
