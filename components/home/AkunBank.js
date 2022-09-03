import PencilIcon from "../ui/icons/PencilIcon";
import TrashIcon from "../ui/icons/TrashIcon";

const bankAccArr = [
  {
    bankName: "Bank KB Bukopin",
    accNum: "****0876 - Yusron Taufiq",
    currency: "IDR",
    cardColor: "bg-gradient-to-r from-yellow-400 to-green-700",
  },
  {
    bankName: "Citibank, NA",
    accNum: "****5525 - Si Tampan",
    currency: "USD",
    cardColor: "bg-gradient-to-tr from-blue-400 to-blue-700",
  },
];

const AkunBank = () => {
  return (
    <div className="bg-white shadow-lg  rounded-lg flex flex-col gap-4 pb-6">
      <div className="flex justify-between items-center pt-4 pb-1 px-6 mb-2">
        <h3 className="font-bold text-lg">Akun bank</h3>
        <button className="hidden sm:block lg:hidden xl:block bg-green-700 text-white py-1 px-4 rounded-lg">
          + Tambah akun bank
        </button>
      </div>

      {bankAccArr.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 px-6 gap-4 mb-4"
        >
          <div className={`h-[110px] rounded-xl relative ${item.cardColor}`}>
            <span className="absolute bottom-2 right-4 text-lg text-white font-extrabold tracking-widest">
              VISA
            </span>
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <div className=" flex justify-between items-center">
              <h4 className="font-semibold">{item.bankName}</h4>
              <div className="text-green-700 flex items-center gap-4">
                <PencilIcon size="2vh" />
                <TrashIcon size="2vh" />
              </div>
            </div>
            <div className="text-sm flex flex-col gap-0 sm:gap-2 lg:gap-0 xl:gap-2 text-gray">
              <p>{item.accNum}</p>
              <p>{item.currency}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex sm:hidden lg:flex xl:hidden px-6 justify-center">
        <button className=" bg-green-700 text-white py-1 px-4 rounded-lg">
          + Tambah akun bank
        </button>
      </div>
    </div>
  );
};

export default AkunBank;
