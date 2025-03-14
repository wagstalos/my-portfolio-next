import { IconSchool } from "@tabler/icons-react";

const CardCarousel = ({ ano, title, descricao, status }) => {
    return (
        <div className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900/20 dark:border-gray-700 
  transition-all duration-300 ease-in-out hover:border-amber-300 hover:shadow-lg">
            <div className="flex items-center justify-between w-full text-white border-b border-slate-500/30 pb-4">
                <IconSchool
                    size={44}
                    stroke={2}
                    className="text-gray-500 dark:text-gray-400 border border-blue-100/20 bg-blue-200/10 p-2 rounded-lg hover:border-slate-500"
                />
                <h2 className="text-lg font-semibold">{ano}</h2>
            </div>

            <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="mb-9 font-normal text-gray-500 dark:text-gray-400">
                {descricao}
            </p>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                {status}
            </span>
        </div>
    );
};

export default CardCarousel;
