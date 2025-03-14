import { RiVuejsFill, RiReactjsLine, RiWordpressFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";

export function IconsFloating() {
  return (
    <div className="icons-skills">
      <span className="animate-pulse absolute top-[8%] left-[8%] border border-blue-100/20 bg-blue-200/10 p-2 w-15 h-15 rounded-full hover:border-gray-300/50  items-center justify-center hidden sm:flex">
        <RiVuejsFill className="w-6 h-6 text-emerald-400" />
      </span>

      <span className="animate-pulse absolute top-[8%] right-[8%] border border-blue-100/20 bg-blue-200/10 p-2 w-15 h-15 rounded-full hover:border-gray-300/50  items-center justify-center hidden sm:flex">
        <RiReactjsLine className="w-6 h-6 text-cyan-400" />
      </span>

      <span className="animate-pulse absolute top-[50%] right-[22%] border border-blue-100/20 bg-blue-200/10 p-2 w-15 h-15 rounded-full hover:border-gray-300/50  items-center justify-center hidden sm:flex">
        <FaSass className="w-6 h-6 text-pink-400" />
      </span>

      <span className="animate-pulse absolute top-[40%] left-[22%] border border-blue-100/20 bg-blue-200/10 p-2 w-15 h-15 rounded-full hover:border-gray-300/50  items-center justify-center hidden sm:flex">
        <RiWordpressFill className="w-6 h-6 text-blue-800" />
      </span>

      <span className="animate-pulse absolute top-[70%] left-[30%] border border-blue-100/20 bg-blue-200/10 p-2 w-15 h-15 rounded-full hover:border-gray-300/50  items-center justify-center hidden sm:flex">
        <FaSalesforce className="w-6 h-6 text-blue-400" />
      </span>


    </div>
  );
}
