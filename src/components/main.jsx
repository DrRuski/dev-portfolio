import IntroSection from "./introComp/introComp";
import SkillList from "./skillsComp/skillsComp";
import ProjectsList from "./projectComp/projectComp";
import { projectsData } from "./data/projectsData";
import { skillsData } from "./data/skillsData";

export default function Main() {
  return (
    <main className="d-flex flex-column gap-5">
      <IntroSection />
      <div className="container">
        <hr className="break-line"></hr>
      </div>
      <SkillList skillsData={skillsData} />
      <div className="container">
        <hr className="break-line"></hr>
      </div>
      <ProjectsList projectsData={projectsData} />
    </main>
  );
}
