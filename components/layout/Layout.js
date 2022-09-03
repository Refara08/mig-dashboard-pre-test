import SideNav from "../navigation/SideNav";
import TopNav from "../navigation/TopNav";

const Layout = (props) => {
  return (
    <>
      <div className="hidden md:flex bg-greenish-gray text-black">
        <SideNav />
        <div className="px-8 py-4 w-full h-screen overflow-y-scroll flex flex-col">
          <TopNav />
          <main className="flex-[1] pb-4">{props.children}</main>
        </div>
      </div>
      <div className="block md:hidden bg-greenish-gray text-black px-8 py-4">
        <p>heloo mobile nav here</p>
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
