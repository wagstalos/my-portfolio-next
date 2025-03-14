import {
  RiBehanceLine,
  RiGithubLine,
  RiLinkedinFill,
  RiDribbbleLine,
} from "react-icons/ri";

export function IconsSociais() {
  return (
    <ul className="flex items-center justify-center mx-auto mt-4 space-x-4">
      <li>
        <a
          href="https://github.com/wagstalos"
          className="flex items-center justify-center"
        >
          <span className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300 flex items-center justify-center transition-all duration-300 ease-in-out ">
            <RiGithubLine className="w-6 h-6 text-white" />
          </span>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/wagner-silva-6a163555/"
          className="flex items-center justify-center"
        >
          <span className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300 flex items-center justify-center transition-all duration-300 ease-in-out ">
            <RiLinkedinFill className="w-6 h-6 text-white" />
          </span>
        </a>
      </li>

      <li>
        <a
          href="https://www.behance.net/wagstalos89"
          className="flex items-center justify-center"
        >
          <span className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300 flex items-center justify-center transition-all duration-300 ease-in-out ">
            <RiBehanceLine className="w-6 h-6 text-white" />
          </span>
        </a>
      </li>

      <li>
        <a
          href="https://dribbble.com/wagstalos"
          className="flex items-center justify-center"
        >
          <span className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300 flex items-center justify-center transition-all duration-300 ease-in-out ">
            <RiDribbbleLine className="w-6 h-6 text-white" />
          </span>
        </a>
      </li>
    </ul>
  );
}
