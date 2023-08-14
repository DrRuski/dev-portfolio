import Anchor from "../miscellaneous/anchor";

export default function ProjectsList({ projectsData }) {
  return (
    <section className="container d-flex flex-column gap-4">
      <div className="row">
        <div className="col">
          <h2 className="heading-l">Projects</h2>
        </div>
        <div className="col text-end">
          <Anchor link="#contactForm">CONTACT ME</Anchor>
        </div>
      </div>
      <div className="row row-gap-5 justify-content-lg-between">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            website={project.website}
            code={project.code}
            image={project.image}
            summary={project.summary}
            frameworks={project.frameworks}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({ title, website, code, image, frameworks }) {
  return (
    <div className="col col-lg-6 d-flex flex-column gap-2 justify-content-between">
      <div className="d-flex flex-column gap-2">
        <img src={image} alt={image} className="image-fluid" />
        <h3 className="heading-m">{title}</h3>
        <ul className="d-flex flex-wrap p-0 gap-3">
          {frameworks.map((item) => (
            <li className="list-style" key={item}>
              <h5 className="heading-project-framework">{item}</h5>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex gap-5">
        <Anchor link={website}>VIEW PROJECT</Anchor>
        <Anchor link={code}>VIEW CODE</Anchor>
      </div>
    </div>
  );
}
