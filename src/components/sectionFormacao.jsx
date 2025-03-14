import Carousel from "./carouselFormacao";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { SiHtmlacademy } from "react-icons/si";


export function SectionFormacao() {
  return (
    <section className="mt-32 mb-32 p-4" data-aos="fade-up">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-2">
          <SiHtmlacademy className="text-neutral-400" />
          Formação
        </h2>
        <div>
          <button className="custom-prev mr-4 border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-full hover:border-amber-300">
            <IconChevronLeft size={22} stroke={2} />
          </button>
          <button className="custom-next border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-full hover:border-amber-300">
            <IconChevronRight size={22} stroke={2} />
          </button>
        </div>
      </div>

      <Carousel></Carousel>
    </section>
  );
}
