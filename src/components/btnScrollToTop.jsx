"use client"; // Se estiver usando App Router do Next.js

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`cursor-pointer fixed bottom-25 right-7 flex items-center justify-center size-12 rounded-full p-2 ring-1 bg-white/5 ring-white/20 transition-opacity duration-300 ${showButton ? "opacity-100" : "opacity-0"
                }`}
            onClick={scrollToTop}
        >
            <svg
                className="size-6 text-white rotate-180 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>

        </div>
    );
}
