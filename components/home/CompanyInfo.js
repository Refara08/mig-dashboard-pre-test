import { useState } from "react";

import Image from "next/image";
import PencilIcon from "../ui/icons/PencilIcon";

import Toggle from "react-toggle";
import "react-toggle/style.css";

import MailIcon from "../ui/icons/MailIcon";
import PhoneIcon from "../ui/icons/PhoneIcon";
import GlobeIcon from "../ui/icons/GlobeIcon";

const CompanyInfo = () => {
  const [isCompanyActive, setIsCompanyActive] = useState(true);

  const toggleCompanyActivityHandler = () => {
    setIsCompanyActive((prev) => !prev);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full lg:w-[350px]">
      <div className="h-[200px] relative">
        <div className="h-2/3 overflow-hidden">
          <Image
            src="/image/home/company-background-image.jpg"
            alt="company background image"
            width={"300px"}
            height={"200px"}
            layout="responsive"
            priority={true}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-full overflow-hidden border-2 border-blue-400 bg-white ">
          <Image
            src="/image/home/company-profile-picture.jpg"
            alt="company profile picture"
            width={"100px"}
            height={"100px"}
          />
        </div>
      </div>
      {/* ------ */}
      <div className="text-center">
        <h2 className="font-bold text-lg">Mitramas Infosys Global</h2>
        <p className="font-light text-sm">Layanan IT</p>
        <div className="text-green-700 text-sm font-semibold flex justify-center items-center gap-1 my-6 cursor-pointer">
          <PencilIcon size={"1.6vh"} />
          <p>Sunting profil</p>
        </div>
      </div>
      {/* ------ */}
      <div className="px-4 mb-12 text-sm">
        <div className="mb-4">
          <h3 className="text-gray text-xs mb-2">Status Perusahaan</h3>
          <div className="flex justify-between items-center">
            <label htmlFor="company-status">
              {isCompanyActive ? (
                <span className="text-green-700 font-bold">Aktif</span>
              ) : (
                <span className="font-bold">Tidak Aktif</span>
              )}
            </label>
            <Toggle
              id="company-status"
              defaultChecked={isCompanyActive}
              onChange={toggleCompanyActivityHandler}
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-gray text-xs mb-2">Singkatan</h3>
          <p>MIG</p>
        </div>

        <div className="mb-4">
          <h3 className="text-gray text-xs mb-2">Alamat Perusahaan</h3>
          <p>Jl. Tebet Raya No.42, Jakarta Selatan</p>
        </div>

        <div className="mb-4">
          <h3 className="text-gray text-xs mb-2">Penanggung Jawab (PIC)</h3>
          <p>John Doe</p>
        </div>

        <div className="mb-4">
          <h3 className="text-gray text-xs mb-2">Tanggal PKP</h3>
          <p>03 Maret 2021</p>
        </div>

        <div className="mb-4">
          <h3 className="text-gray text-xs mb-2">E-mail</h3>
          <p className="text-green-700 flex items-center justify-start gap-2 cursor-pointer">
            <span>
              <MailIcon size="2vh" />
            </span>
            <span className="underline">mig@mitrasolusi.group</span>
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-gray text-xs mb-2">No. Telp</h3>
          <p className="text-green-700 flex items-center justify-start gap-2 cursor-pointer">
            <span>
              <PhoneIcon size="2vh" />
            </span>
            <span>021-5678-1234</span>
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-gray text-xs mb-2">Situs Web</h3>
          <p className="text-green-700 flex items-center justify-start gap-2 cursor-pointer">
            <span>
              <GlobeIcon size="2vh" />
            </span>
            <span className="underline">mitramas.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
