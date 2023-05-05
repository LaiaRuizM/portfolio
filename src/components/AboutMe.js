import About from "../images/aboutMeImg.png";
import Curriculum from "../docs/Curriculum_LaiaRuizMartinez.pdf";
import "../styles/layouts/AboutMe.scss";
const AboutMe = () => {
  return (
    <>
      <section className="sectionAbout">
        <h1 className="sectionAbout--h1">01. About me</h1>
        <div className="sectionAbout--div">
          <img
            className="sectionAbout--div__img"
            src={About}
            alt="Laia's image"
            title="Laia's image"
          />
        </div>
      </section>
      <article className="articleAbout">
        <p className="articleAbout--pAcc">Accountant turned programmer.</p>
        <p className="articleAbout--p">
          I’m a full-stack developer👩🏼‍💻 and an ex-accountant.
        </p>
        <p className="articleAbout--p">
          Throughout my career, I have been team leader and I developed
          leadership and empathy skills while working in high-pressure team
          projects, demonstrating my ability to effectively resolve conflicts
          and foster a collaborative environment. Also, my technical knowledge
          is complemented by excellent problem-solving skills and a strong
          ability to work collaboratively with teams to achieve common goals.
        </p>
        <p className="articleAbout--p">
          I am passionate about staying up-to-date with the latest technologies
          and trends in the ﬁeld of Software Development, and I am committed to
          ongoing professional development to ensure that I am always at the
          forefront of this ever-evolving industry.
        </p>
        <p className="articleAbout--p">
          There is something that I highly repeat: «All you need is attitude.
          Aim for the stars so that if you miss, you will still get to the
          moon». 🙋🏼‍♀️
        </p>
        <p className="articleAbout--p">Now is time to code. Let's push it!</p>
        <div className="articleAbout--div">
          <a
            className="articleAbout--a"
            href={Curriculum}
            target="_blank"
            rel="noreferrer"
          >
            <span className="articleAbout--a__span">Curriculum </span>
            <i class="fa-regular fa-file-pdf"></i>
          </a>
        </div>
      </article>
    </>
  );
};

export default AboutMe;
