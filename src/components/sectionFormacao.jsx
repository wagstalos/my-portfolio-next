import Carousel from "./carouselFormacao";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { SiHtmlacademy } from "react-icons/si";


export function SectionFormacao() {
  return (
    <section className="mt-32 mb-32 p-4" data-aos="fade-up">
      <div className="flex justify-between">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-2 text-white gradient_text">
          <SiHtmlacademy className="text-white" />
          Formação
        </h2>
        <div>
          <button className="custom-prev cursor-pointer mr-4 border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-full hover:border-amber-300" aria-label="Prev">
            <IconChevronLeft className="text-white" size={22} stroke={2} />
          </button>
          <button className="custom-next cursor-pointer border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-full hover:border-amber-300" aria-label="Next">
            <IconChevronRight className="text-white" size={22} stroke={2} />
          </button>
        </div>
      </div>

      <Carousel></Carousel>
    </section>
  );
}
