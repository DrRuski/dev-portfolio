export default function SkillList({ skillsData }) {
  return (
    <section className="container">
      <div className="row gap-4 justify-content-lg-center">
        <hr className="border" />
        {skillsData.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            experience={skill.experience}
          />
        ))}
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
