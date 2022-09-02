import Navigation from "../navigation/Navigation";

const Layout = (props) => {
  return (
    <div className="bg-slate-200 text-black">
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
