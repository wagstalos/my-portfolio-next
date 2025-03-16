import { FaReact, FaSass, FaCss3Alt, FaHtml5, FaSalesforce, FaGulp, FaWordpress, FaGit } from "react-icons/fa6";
import { RiVuejsFill, RiTailwindCssFill } from "react-icons/ri";

export function MarqueeSkills() {
  const skills = [
    { icon: <FaReact className="mr-2 text-gray-600" />, name: "ReactJS" },
    { icon: <RiVuejsFill className="mr-2 text-gray-600" />, name: "Vue" },
    { icon: <FaSass className="mr-2 text-gray-600" />, name: "SASS" },
    { icon: <FaCss3Alt className="mr-2 text-gray-600" />, name: "CSS 3" },
    { icon: <FaHtml5 className="mr-2 text-gray-600" />, name: "HTML 5" },
    { icon: <FaSalesforce className="mr-2 text-gray-600" />, name: "SFCC" },
    { icon: <FaGulp className="mr-2 text-gray-600" />, name: "Gulp" },
    { icon: <FaWordpress className="mr-2 text-gray-600" />, name: "WordPress" },
    { icon: <RiTailwindCssFill className="mr-2 text-gray-600" />, name: "Tailwind" },
    { icon: <FaGit className="mr-2 text-gray-600" />, name: "Git" }
  ];

  return (
    <>
      <small className="font-bold text-white text-base">Skills:</small>
      <div className="relative max-w-full overflow-hidden whitespace-nowrap container-marquee">
        <div className="marquee flex space-x-8 animate-marquee">
          {skills.concat(skills).map((skill, index) => (
            <p key={index} className="font-bold text-2xl text-gray-400 flex items-center">
              {skill.icon} {skill.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
