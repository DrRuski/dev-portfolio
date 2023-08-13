import IntroSection from "./introComp/introComp";
import SkillList from "./skillsComp/skillsComp";
import ProjectsList from "./projectComp/projectComp";
import { devData } from "./data/devData";

export default function Main() {
  return (
    <main className="d-flex flex-column gap-4">
      <IntroSection />
      <div className="container">
        <hr className="break-line"></hr>
      </div>
      <SkillList devData={devData} />
      <div className="container">
        <hr className="break-line"></hr>
      </div>
      <ProjectsList devData={devData} />
    </main>
  );
}
