import photoLaia from "../images/portfolioImgWithBckgr.png";
import "../styles/layouts/HomeLRM.scss";
const HomeLRM = () => {
  return (
    <section className="home">
      <div className="home--div">
        <img
          className="home--div__img"
          src={photoLaia}
          alt="Laia's image"
          title="Laia's image"
        />
      </div>
      <article className="home--article">
        <p className="home--article__greet">Hi there, my name is</p>
        <p className="home--article__name">Laia Ruiz</p>
        <p className="home--article__career">I'm a full-stack developer 👩🏼‍💻</p>
      </article>
    </section>
  );
};

export default HomeLRM;
