import SolidBuildingIcon from "../ui/icons/SolidBuildingIcon";
import WrenchICon from "../ui/icons/WrenchIcon";
import SolidWarehouseIcon from "../ui/icons/SolidWarehouseIcon";

import LocationDetails from "./LocationsDetails";
import AkunBank from "./AkunBank";
import Aktifitas from "./Aktivitas";
import Relasi from "./Relasi";

const iconSize = "4vh";
const LocationArr = [
  {
    jsx: <SolidBuildingIcon size={iconSize} />,
    tag: "Induk",
    qty: 20,
    color: "bg-green-700",
  },
  {
    jsx: <WrenchICon size={iconSize} />,
    tag: "Sub Lokasi Level 1",
    qty: 3,
    color: "bg-green-600",
  },
  {
    jsx: <SolidWarehouseIcon size={iconSize} />,
    tag: "Sub Lokasi Level 2",
    qty: 1,
    color: "bg-green-500",
  },
];

const CompanyDetails = () => {
  return (
    <div className="flex-[1] grid gap-6 lg:grid-cols-2">
      <div className="bg-white shadow-lg rounded-lg lg:col-span-2">
        <div className="flex justify-between items-center pt-4 pb-1 px-6 ">
          <h3 className="font-bold text-lg">Lokasi</h3>
          <p className="text-green-700 cursor-pointer">Lihat semua</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 px-4">
          {LocationArr.map((item) => (
            <LocationDetails
              key={item.tag}
              color={item.color}
              qty={item.qty}
              tag={item.tag}
            >
              {item.jsx}
            </LocationDetails>
          ))}
        </div>
      </div>
      <AkunBank />
      <Aktifitas />
      <Relasi />
    </div>
  );
};

export default CompanyDetails;
