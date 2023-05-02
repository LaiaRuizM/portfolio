import photoLaia from "../images/portfolioImgWithBckgr.png";
import "../styles/layouts/Contact.scss";
const Contact = () => {
  return (
    // <section className="sectionContact">
    //   <h1 className="sectionContact--h1">03. Contact</h1>
    <section className="contact">
      <h1 className="contact--h1">03. Contact</h1>
      <div className="contact--div">
        <img
          className="contact--div__img"
          src={photoLaia}
          alt="Laia's image"
          title="Laia's image"
        />
      </div>
      <article className="contact--article">
        <a
          href="https://github.com/LaiaRuizM"
          title="GitHub de Laia Ruiz Martínez"
          target="_blank"
          rel="noopener noreferrer"
          className="contact--link"
        >
          <i className="fa-brands fa-github icon"></i> LaiaRuizM
        </a>
        <a
          href="https://linkedin.com/in/laia-ruiz-martínez"
          target="_blank"
          title="Linkedin de Laia Ruiz Martínez"
          rel="noopener noreferrer"
          className="contact--link"
        >
          <i className="fa-brands fa-linkedin icon"></i> Laia Ruiz Martínez
        </a>
        <a href="mailto:laia.ruizm@hotmail.com" className="contact--link">
          <i className="fa-solid fa-envelope icon"></i> laia.ruizm@hotmail.com
        </a>
        <p className="contact--text">
          Made with 🤍 by &copy;Laia Ruiz Martínez
        </p>
      </article>
    </section>
    // </section>
  );
};

export default Contact;
