import Anchor from "../miscellaneous/anchor";

export default function ProjectsList({ projectsData }) {
  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <h2 className="heading-l">Projects</h2>
        </div>
        <div className="col text-end">
          <Anchor>CONTACT ME</Anchor>
        </div>
      </div>
      <div className="row gap-5">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            website={project.website}
            code={project.code}
            image={project.image}
            js={project.js}
            html={project.html}
            css={project.css}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({ title, website, code, image, js, html, css }) {
  return (
    <div className="col d-flex flex-column gap-3">
      <div>
        <img src={image} alt={image} />
        <h3 className="heading-m">{title}</h3>
        <ProjectFrameworks js={js} html={html} css={css} />
      </div>
      <div className="d-flex gap-5">
        <Anchor link={website}>VIEW PROJECT</Anchor>
        <Anchor link={code}>VIEW CODE</Anchor>
      </div>
    </div>
  );
}

function ProjectFrameworks({ js, html, css }) {
  return (
    <ul className="list-style d-flex gap-5 p-0">
      {html && (
        <li>
          <h4 className="heading-project-framework">HTML</h4>
        </li>
      )}
      {css && (
        <li>
          <h4 className="heading-project-framework">CSS</h4>
        </li>
      )}
      {js && (
        <li>
          <h4 className="heading-project-framework">JS</h4>
        </li>
      )}
    </ul>
  );
}
