import React, { useEffect, useRef, useState } from "react";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import SobreMi from "./SobreMi";
import Contacto from "./Contacto";
import { FramerMagnetic } from '@/components/FramerMagnetic';


import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);



export const Home = () => {

    // Referencias para cada sección
    const inicioRef = useRef(null)
    const proyectosRef = useRef(null);
    const habilidadesRef = useRef(null);
    const sobreMiRef = useRef(null);
    const contactoRef = useRef(null);

    // ref para el contenedor del scroll
    const scrollContainerRef = useRef(null);


    // array de secciones para navegación con wheel
    const sectionRefs = [
        inicioRef,
        proyectosRef,
        habilidadesRef,
        sobreMiRef,
        contactoRef
    ]


    //estado para saber que sección está activa
    const [currentSection, setCurrentSection] = useState(0)
    const [isScrollingWithLink, setIsScrollingWithLink] = useState(false);


    // Función de scroll suave segun ref
    const handleSmoothScroll = (ref) => {
        if (ref.current && scrollContainerRef.current) {
            setIsScrollingWithLink(true)
            const index = sectionRefs.findIndex((r) => r === ref)
            // si no encuentra  NO csonicidencia el index es -1 y entonces no se ejecuta el setCurrentSection 
            if (index !== -1) setCurrentSection(index) // ssincroniza el scrol de botones con el manual de wheel

            gsap.to(scrollContainerRef.current, {
                duration: 1.8,
                scrollTo: { y: ref.current, offsetY: 0 }, // el y significa hasta q elemento final hacer el scroll y elc offsetY : 0 significa q llegue hasta arriba del contenedor
                ease: "power2.inOut", // curva aceleracion gsap
                onComplete: () => setIsScrollingWithLink(false) // poner en off el setIsScrollWithLink para permitir el scroll manual sin conflictos
            });

        }
    };

    // scroll automatico con la rueda
    useEffect(() => {
        const onWheel = (e) => {
            e.preventDefault();


            if (isScrollingWithLink) return //evitar doble scroll

            if (e.deltaY > 0 && currentSection < sectionRefs.length - 1) {
                setCurrentSection((prev) => prev + 1);

                // cuando se hace scroll hacia arriba el deltaY es negativo...
            } else if (e.deltaY < 0 && currentSection > 0) {
                setCurrentSection((prev) => prev - 1)
            }
        }

        const container = scrollContainerRef.current;

        if (container) {
            // hace con passive false q se use e.preventDefault() para bloquear el scroll nativo
            // onWheel  es la función que se ejecuta al hacer scroll con el wheel
            container.addEventListener('wheel', onWheel, { passive: false })
        }

        // limpieza
        return () => {
            if (container) {
                container.removeEventListener('wheel', onWheel)
            }
        }
    }, [currentSection, isScrollingWithLink])

    // animacion de gsap para el scroll manual
    useEffect(() => {
        if (isScrollingWithLink) return //evitar doble scroll


        // necesario entrar al .current del ref para q funcione, ya que devuelve un  objeto!
        if (scrollContainerRef.current && sectionRefs[currentSection]?.current) {
            gsap.to(scrollContainerRef.current, {
                duration: 1.2,
                scrollTo: { y: sectionRefs[currentSection].current },
                ease: 'power2.inOut'
            })
        }
    }, [currentSection, isScrollingWithLink])

    return (
        <main className=" ScrollContainer" ref={scrollContainerRef}>
            <section id="inicio" ref={inicioRef} className="Portfolio-home">
                <div className="HomeWrapper">
                    <aside className="HomeAside">
                        <ul className="HomeAside-ul">

                            <li><a href="https://github.com/JaumeEsquerdo" className="HomeAside-link" target="_blank" rel="noopener noreferrer">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/jaume-esquerdo/" className="HomeAside-link" target="_blank" rel="noopener noreferrer">Li</a></li>
                            <li><a className="HomeAside-link" target="_blank" rel="noopener noreferrer">CV</a></li>
                        </ul>
                        <div className="HomeAside-line"></div>
                    </aside>
                </div>
                <div className="PortfolioPresentation">
                    <h1 className="PortfolioPresentation-h1">JAUME ESQUERDO RAMIS</h1>
                    <h3 className="PortfolioPresentation-h3">Estudiante front developer y fullstack</h3>
                    <h3 className="PortfolioPresentation-h3">Actualmente realizando el máster de ‘Bootcamp de Desarrollo Web, UX y UI’ por CEI : Centro de Estudios de Innovación </h3>
                </div>

                <nav className="PortfolioPresentation-nav">
                    {/* Enlaces para el scroll suave */}
                    <FramerMagnetic>
                        <button className="PortfolioPresentation-link" onClick={() => handleSmoothScroll(proyectosRef)}>PROYECTOS</button>

                    </FramerMagnetic>

                    <FramerMagnetic>

                        <button className="PortfolioPresentation-link" onClick={() => handleSmoothScroll(habilidadesRef)}>HABILIDADES <span className="estudios">ESTUDIOS</span></button>
                    </FramerMagnetic>

                    <FramerMagnetic>

                        <button className="PortfolioPresentation-link" onClick={() => handleSmoothScroll(sobreMiRef)}>SOBRE MÍ</button>
                    </FramerMagnetic>
                    <FramerMagnetic>

                        <button className="PortfolioPresentation-link" onClick={() => handleSmoothScroll(contactoRef)}>CONTACTO</button>
                    </FramerMagnetic>

                </nav>
            </section>

            {/* Secciones con referencias */}
            <section id="proyectos" className="ScrollSection Portfolio-proyectos" ref={proyectosRef}>
                <Proyectos />
            </section>

            <section id="habilidades" className="ScrollSection Portfolio-habilidades" ref={habilidadesRef}>
                <Habilidades />
            </section>

            <section id="sobre-mi" className="ScrollSection Portfolio-sobreMi" ref={sobreMiRef}>
                <SobreMi />
            </section>

            <section id="contacto" className="ScrollSection Portfolio-contacto" ref={contactoRef}>
                <Contacto />
            </section>
        </main>
    );
};
