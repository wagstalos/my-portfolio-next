import { IconSchool } from "@tabler/icons-react";

const CardCarousel = ({ ano, title, descricao, status }) => {
    return (
        <div className="relative max-w-sm p-6 border rounded-lg shadow-sm bg-gray-900/20 border-gray-700
  transition-all duration-300 ease-in-out hover:border-gray-500 hover:shadow-lg">
            <div className="flex items-center justify-between w-full text-white border-b border-slate-500/30 pb-4">
                <IconSchool
                    size={44}
                    stroke={2}
                    className="text-gray-400 border border-blue-100/20 bg-blue-200/10 p-2 rounded-lg hover:border-slate-500"
                />
                <h5 className="text-lg font-semibold">{ano}</h5>
            </div>

            <h6 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-white">
                {title}
            </h6>
            <p className="mb-9 font-normal text-gray-400">
                {descricao}
            </p>
            <span className=" text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-900 text-green-300">
                {status}
            </span>
        </div>
    );
};

export default CardCarousel;
