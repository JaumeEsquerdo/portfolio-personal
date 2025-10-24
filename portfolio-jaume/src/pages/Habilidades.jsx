import "@/css/habilidades.css";

const Habilidades = () => {
  return (
    <>
      <main className="Habilidades">
        <div className="Habilidades-block">
          <h2 className="Habilidades-title">Habilidades</h2>

          <div className="Habilidades-div">
            <h3 className="Habilidades-h3">Frontend</h3>
            <p className="Habilidades-p">
              HTML5 · CSS3 (BEM, SUIT CSS, CSS Modules) · JavaScript (ES6+) ·
              TypeScript · React (Vite, Context API, Router DOM) · Next.js ·
              Framer Motion · React Testing Library · Jest · Vitest
            </p>
          </div>

          <div className="Habilidades-div">
            <h3 className="Habilidades-h3">Backend</h3>
            <p className="Habilidades-p">
              Node.js · Express · MongoDB / Mongoose · JWT · CORS · dotenv ·
              Multer
            </p>
          </div>

          <div className="Habilidades-div">
            <h3 className="Habilidades-h3">Herramientas y diseño</h3>
            <p className="Habilidades-p">
              Git · GitHub · VS Code · Figma · Trello
            </p>
          </div>
        </div>

        <div className="Estudios-block">
          <h2 className="Estudios-title">Estudios</h2>

          <div className="Estudios-div">
            <h3 className="Estudios-h3">
              <a
                className="Estudios-a"
                href="https://cei.es/cei-curso/bootcamp-de-desarrollo-web/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootcamp en Desarrollo Web, UX y UI — CEI Valencia{" "}
              </a>
            </h3>
            <p className="Estudios-p">
              2024 - 2025
              <br />
            </p>
          </div>

          <div className="Estudios-div">
            <h3 className="Estudios-h3">
              <a
                className="Estudios-a"
                href="https://www.esneca.com/formacion/master-internacional-posicionamiento-web-seo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Máster Internacional en Posicionamiento Web SEO — ESNECA
                Business School
              </a>
            </h3>

            <p className="Estudios-p">2023</p>
          </div>

          <div className="Estudios-div">
            <h3 className="Estudios-h3">Grado en Turismo — UNED</h3>
          </div>

          <div className="Estudios-div">
            <h3 className="Estudios-h3">
              Ciclo Formativo de Grado Superior en Gestión de Alojamientos
              Turísticos — IES Mediterrània
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Habilidades;
