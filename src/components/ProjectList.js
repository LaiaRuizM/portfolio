import defaultImage from "../images/portfolioImgWithoutBckgr.png";
import ProjectItem from "./ProjectItem";
import "../styles/layouts/ProjectList.scss";
const ProjectList = ({ projectListData }) => {
  const dataHtml = projectListData.map((eachProject) => {
    return (
      <ProjectItem
        key={eachProject.id}
        name={eachProject.name}
        repoUrl={eachProject.repoUrl}
        webUrl={eachProject.webUrl}
        description={eachProject.descriptionEn}
        image={eachProject.image === "" ? defaultImage : eachProject.image}
        languages={eachProject.languages}
      />
    );
  });
  return (
    <div className="projects">
      <ul className="projects--list">{dataHtml}</ul>
    </div>
  );
};

export default ProjectList;
