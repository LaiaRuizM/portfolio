const ProjectItem = ({
  name,
  repoUrl,
  webUrl,
  description,
  image,
  languages,
}) => {
  return (
    <article>
      <div>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
      <div>
        <h3>{name.toUpperCase()}</h3>
        <p>{description}</p>
        <div>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            title={`${name} code`}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={webUrl}
            target="_blank"
            rel="noreferrer"
            title={`${name} website`}
          >
            <i class="fa-solid fa-display"></i>
          </a>
        </div>
        <span>{languages.join(" . ")}</span>
      </div>
    </article>
  );
};

export default ProjectItem;
