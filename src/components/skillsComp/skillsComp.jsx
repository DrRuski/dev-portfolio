import rings from "../../assets/images/pattern-rings.svg";

export default function SkillList({ devData }) {
  return (
    <section className="container">
      <div className="row gap-4 justify-content-lg-center">
        {devData.skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            experience={skill.experience}
          />
        ))}
      </div>
      <div>
        <img src={rings} alt="" className="position-absolute start-50 z-1" />
      </div>
    </section>
  );
}

function SkillItem({ name, experience }) {
  return (
    <div className="col-12 col-lg-3 text-center text-lg-start">
      <h3>{name}</h3>
      <p>{experience}</p>
    </div>
  );
}
