export default function Header({ devData }) {
  return (
    <header>
      <SocialMedia socialMedia={devData.basics} />
    </header>
  );
}

function SocialMedia({ socialMedia }) {
  return (
    <div className="container">
      <div className="row py-1 py-lg-4 py-lg-2 gap-4 justify-content-center align-items-center">
        <div className="col-6 col-lg text-center text-lg-start">
          <h3 className="heading-dev">
            elias<span className="brand-color">.</span>ekornås
          </h3>
        </div>
        <div className="col-6 col-lg">
          <ul className="d-flex align-items-center p-0 m-lg-0 justify-content-center justify-content-lg-end gap-5">
            {socialMedia.profiles.map((profile) => (
              <li className="list-style" key={profile.network}>
                <a href={profile.url}>
                  <img src={profile.icon} alt={profile.network} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
