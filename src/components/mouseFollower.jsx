import { useEffect, useState } from 'react';

export function MouseFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        // Adiciona o listener de mouse
        window.addEventListener('mousemove', handleMouseMove);

        // Limpa o listener quando o componente for desmontado
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed  size-12 rounded-full p-2 ring-1 bg-white/5 ring-white/20 transition-opacity duration-300 opacity-100"
            style={{
                top: `${mousePosition.y - 24}px`, // -24 para centralizar o círculo
                left: `${mousePosition.x - 24}px`, // -24 para centralizar o círculo
                //transition: 'top 0.1s ease, left 0.1s ease', // Altere o delay e duração conforme desejado
                zIndex: 9999,
            }}
        ></div>
    );
}
