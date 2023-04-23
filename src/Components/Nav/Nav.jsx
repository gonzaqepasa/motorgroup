import data from "@/src/data";
import { FcPhone, FcAddressBook } from "react-icons/fc";

export default function Header() {
  return (
    <div className={`bg-slate-900   w-screen `}>
      <div className="bg-gray-200 flex items-center justify-end  ">
        <p className={`flex items-center mx-2 text-black font-semibold`}>
          {" "}
          <FcAddressBook className="mx-2" />
          {data.email}
        </p>
        <p className={`flex items-center mx-2 text-black font-semibold`}>
          <FcPhone className="mx-2" /> {data.num}
        </p>
      </div>
      <div></div>
    </div>
  );
}
