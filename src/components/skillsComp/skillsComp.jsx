export default function SkillList({ skillsData }) {
  return (
    <section className="container">
      <div className="row gap-4 row-gap-lg-5 justify-content-lg-between">
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
      <h3 className="mb-lg-2">{name}</h3>
      <p>{experience}</p>
    </div>
  );
}
