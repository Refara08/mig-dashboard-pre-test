import CompanyInfo from "./CompanyInfo";
import CompanyDetails from "./CompanyDetails";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <CompanyInfo />
      <CompanyDetails />
    </div>
  );
};

export default Home;
