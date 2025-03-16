import { FaReact, FaSass, FaCss3Alt, FaHtml5, FaSalesforce, FaGulp, FaWordpress, FaGit } from "react-icons/fa6";
import { RiVuejsFill, RiTailwindCssFill } from "react-icons/ri";
export function MarqueeSkills() {
  return (
    <>
      <small className="font-bold text-white text-base">Skills:</small>
      <div className="relative max-w-full overflow-hidden whitespace-nowrap container-marquee">
        <div className="marquee flex space-x-8 animate-marquee">
          <p className="font-bold text-3xl text-gray-400 flex items-center"><FaReact className="mr-2 text-gray-600" />ReactJS</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><RiVuejsFill className="mr-2 text-gray-600" /> Vue</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><FaSass className="mr-2 text-gray-600" />SASS</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><FaCss3Alt className="mr-2 text-gray-600" />CSS 3</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><FaHtml5 className="mr-2 text-gray-600" />HTML 5</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><FaSalesforce className="mr-2 text-gray-600" />SFCC</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><FaGulp className="mr-2 text-gray-600" />Gulp</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><FaWordpress className="mr-2 text-gray-600" />Wordpress</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><RiTailwindCssFill className="mr-2 text-gray-600" />Tailwind</p>
          <p className="font-bold text-3xl text-gray-400 flex items-center"><FaGit className="mr-2 text-gray-600" />Git</p>
        </div>
      </div>
    </>
  );
}
