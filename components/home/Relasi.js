import ShareIcon from "../ui/icons/ShareIcon";

const relasiArr = [
  { qty: 20, tag: "Memiliki" },
  { qty: 108, tag: "Menggunakan" },
  { qty: 67, tag: "Meminjam" },
];

const Relasi = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg flex flex-col pb-6">
      <div className="flex justify-between items-center pt-4 pb-1 px-6 ">
        <h3 className="font-bold text-lg">Relasi</h3>
        <p className="text-green-700 cursor-pointer">Lihat semua</p>
      </div>
      <div className="px-6 py-4 lg:py-0 flex flex-col justify-evenly flex-[1]">
        {relasiArr.map((item) => (
          <div
            key={item.tag}
            className="flex items-center gap-3 py-3 lg:py-0 transition-all duration-300 hover:scale-95"
          >
            <ShareIcon size="4vh" />
            <div>
              <p className="text-2xl font-bold">{item.qty}</p>
              <p className="text-gray">{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relasi;
