import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="Portfolio">
            <div className="HomeWrapper">
                <aside className="HomeAside">
                    <ul className="HomeAside-ul">
                        <li><Link to={'https://github.com/JaumeEsquerdo'} className="HomeAside-link" target="_blank" rel="noopener noreferrer">Github</Link></li>
                        <li><Link to={'https://www.linkedin.com/in/jaume-esquerdo/'}  className="HomeAside-link" target="_blank" rel="noopener noreferrer">Li</Link></li>
                        <li><Link  className="HomeAside-link" target="_blank" rel="noopener noreferrer">CV</Link></li>
                    </ul>
                    <div className="HomeAside-line"></div>
                </aside>
            </div>
            <div className="PortfolioPresentation">
                <h1 className="PortfolioPresentation-h1">JAUME ESQUERDO RAMIS</h1>
                <h3 className="PortfolioPresentation-h3">Estudiante front developer y fullstack</h3>
                <h3 className="PortfolioPresentation-h3">Actualmente realizando el máster de ‘Bootcamp de Desarrollo Web, UX y UI’
                    por CEI : Centro de Estudios de Innovación </h3>
            </div>

            <nav className="PortfolioPresentation-nav">
                <Link to={'/proyectos'}  className="PortfolioPresentation-link">PROYECTOS</Link>
                <Link to={'/habilidades-estudios'}  className="PortfolioPresentation-link">HABILIDADES <span className="estudios">ESTUDIOS</span></Link>
                <Link to={'/sobre-mi'}  className="PortfolioPresentation-link">SOBRE MÍ</Link>
                <Link to={'/contacto'}  className="PortfolioPresentation-link">CONTACTO</Link>
            </nav>
        </div>
            
        </>
    );
}

export default Home;