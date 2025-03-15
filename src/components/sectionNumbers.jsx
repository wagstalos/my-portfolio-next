import { useEffect, useState, useRef } from 'react';

export function SectionNumbers() {
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const [countExperience, setCountExperience] = useState(0);
  const [countEcommerce, setCountEcommerce] = useState(0);
  const [countProjects, setCountProjects] = useState(0);

  const targetRef = useRef(null);

  const animateNumber = (targetNumber, setter) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < targetNumber) {
        current += 1;
        setter(current);
      } else {
        clearInterval(interval);
      }
    }, 50); // Ajuste a velocidade da animação aqui
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setHasStartedAnimation(true);
        observer.disconnect(); // Desconecta o observer após a animação começar
      }
    }, { threshold: 0.5 });

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (hasStartedAnimation) {
      animateNumber(14, setCountExperience); // Para o primeiro número
      animateNumber(20, setCountEcommerce); // Para o segundo número
      animateNumber(100, setCountProjects); // Para o terceiro número
    }
  }, [hasStartedAnimation]);

  return (
    <section ref={targetRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-32 mb-32">
      <div className="flex flex-col items-center border-b border-gray-500/20 w-[80%] mx-auto pb-7 shadow-[0_35px_31px_-40px_rgba(134,138,197,1)] hover:shadow-[0_35px_40px_-44px_rgba(134,138,197,1)]" data-aos="fade-down">
        <p className="text-7xl font-bold bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          +{countExperience}
        </p>
        <p className="text-lg text-gray-400">Anos de Experiência</p>
      </div>
      <div className="flex flex-col items-center border-b border-gray-500/20 w-[80%] mx-auto pb-7 shadow-[0_35px_31px_-40px_rgba(134,138,197,1)] hover:shadow-[0_35px_40px_-44px_rgba(134,138,197,1)]" data-aos="fade-down">
        <p className="text-7xl font-bold bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          +{countEcommerce}
        </p>
        <p className="text-lg text-gray-400">E-commerces</p>
      </div>
      <div className="flex flex-col items-center border-b border-gray-500/20 w-[80%] mx-auto pb-7 shadow-[0_35px_31px_-40px_rgba(134,138,197,1)] hover:shadow-[0_35px_40px_-44px_rgba(134,138,197,1)]" data-aos="fade-down">
        <p className="text-7xl font-bold bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          +{countProjects}
        </p>
        <p className="text-lg text-gray-400">Projetos entregues</p>
      </div>
    </section>
  );
}
