import SolidBuildingIcon from "../ui/icons/SolidBuildingIcon";

const LocationDetails = (props) => {
  const { color, children, qty, tag } = props;
  return (
    <div
      className={`flex justify-between items-center ${color} py-4 px-4 text-white rounded-lg`}
    >
      {children}
      <div className="flex flex-col items-end gap-1">
        <p className="text-2xl font-bold">{qty}</p>
        <p className="text-xs text-right">{tag}</p>
      </div>
    </div>
  );
};

export default LocationDetails;
