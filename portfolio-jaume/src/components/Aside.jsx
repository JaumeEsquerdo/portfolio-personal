import { Link } from "react-router-dom";
const Aside = () => {
    return (
        <>
        <div className="AsideWrapper">
                    <aside className="Aside">
                        <ul className="Aside-ul">
                            <li><Link to={'https://github.com/JaumeEsquerdo'} className="Aside-link" target="_blank" rel="noopener noreferrer">Github</Link></li>
                            <li><Link to={'https://www.linkedin.com/in/jaume-esquerdo/'} className="Aside-link" target="_blank" rel="noopener noreferrer">Li</Link></li>
                            <li><Link className="Aside-link" target="_blank" rel="noopener noreferrer">CV</Link></li>
                        </ul>
                        <div className="Aside-line"></div>
                    </aside>
                </div>
        </>
    );
}

export default Aside;