const aktifitasArr = [
  {
    act: "Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa",
    when: "Hari ini, 06:00",
  },
  {
    act: "Bintang baru saja menghapus sublokasi KCP Tebet 4 dari Induk Kantor Cabang Tebet",
    when: "Kemarin, 17:32",
  },
  {
    act: "Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi",
    when: "Kemarin, 17:32",
  },
];

const Aktifitas = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg pb-6 lg:row-span-2">
      <h3 className="font-bold text-lg pt-4 pb-1 px-6 ">Aktivitas</h3>
      <div className="p-6">
        {aktifitasArr.map((item, index) => (
          <div key={index} className="mb-4">
            <p>{item.act}</p>
            <p className="text-gray text-sm">{item.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aktifitas;
