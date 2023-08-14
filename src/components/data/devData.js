// Developer Basic Information
import elias from "../../assets/images/elias2.png";

// Developer SoMe
import githubLogo from "../../assets/images/icon-github.svg";
import linkedIn from "../../assets/images/icon-linkedin.svg";
import twitter from "../../assets/images/icon-twitter.svg";

// Developer Projects
import eatSplit from "../../assets/projects/preview-eat-n-split.png";
import gameHub from "../../assets/projects/Cross-Course-Project.png";
import lazySloth from "../../assets/projects/lazy-sloth.png";

export const devData = {
  basics: {
    name: "Elias Ekornås",
    label: "Front-end Developer",
    image: elias,
    email: "elias.ekornas@gmail.com",
    phone: "(+47) 413 42 036",
    url: "https://johndoe.com",
    summary: `Based in Norway, I am a front-end developer who is passionate about
    building accessible web apps that users love.`,
    location: {
      address: "Grimvegen 13",
      postalCode: "6150",
      city: "Ørsta",
      countryCode: "NOR",
      region: "Møre og Romsdal",
    },
    profiles: [
      {
        network: "Twitter",
        username: "IMEkon",
        url: "https://twitter.com/IMEkon",
        icon: twitter,
      },
      {
        network: "LinkedIn",
        username: "Elias Ekornås",
        url: "https://www.linkedin.com/in/elias-ekorn%C3%A5s/",
        icon: linkedIn,
      },
      {
        network: "GitHub",
        username: "DrRuski",
        url: "https://github.com/DrRuski",
        icon: githubLogo,
      },
    ],
  },
  work: [
    {
      name: "Company",
      position: "President",
      url: "https://company.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary: "Description…",
      highlights: ["Started the company"],
    },
  ],
  volunteer: [
    {
      organization: "Organization",
      position: "Volunteer",
      url: "https://organization.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Description…",
      highlights: ["Awarded 'Volunteer of the Month'"],
    },
  ],
  education: [
    {
      institution: "University",
      url: "https://institution.com/",
      area: "Software Development",
      studyType: "Bachelor",
      startDate: "2011-01-01",
      endDate: "2013-01-01",
      score: "4.0",
      courses: ["DB1101 - Basic SQL"],
    },
  ],
  awards: [
    {
      title: "Award",
      date: "2014-11-01",
      awarder: "Company",
      summary: "There is no spoon.",
    },
  ],
  certificates: [
    {
      name: "Certificate",
      date: "2021-11-07",
      issuer: "Company",
      url: "https://certificate.com",
    },
  ],
  publications: [
    {
      name: "Publication",
      publisher: "Company",
      releaseDate: "2014-10-01",
      url: "https://publication.com",
      summary: "Description…",
    },
  ],
  skills: [
    {
      name: "HTML",
      experience: "2 Years Experience",
    },
    {
      name: "CSS",
      experience: "2 Years Experience",
    },
    {
      name: "SASS",
      experience: "2 Years Experience",
    },
    {
      name: "JS",
      experience: "1 Years Experience",
    },
    {
      name: "UX Design",
      experience: "3 Years Experience",
    },
    {
      name: "React",
      experience: "0.5 Years Experience",
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Native speaker",
    },
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"],
    },
  ],
  references: [
    {
      name: "Jane Doe",
      reference: "Reference…",
    },
  ],
  projects: [
    {
      title: "GAME HUB - E-COMMERCE",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      image: gameHub,
      website: "https://calm-hummingbird-304e8c.netlify.app",
      code: "https://github.com/DrRuski/cross-course-project-EliasEkornas",
      summary:
        "This cross-course project has been designed, developed and improved throughout my studies @Noroff. The development of the project started when I enrolled into the school and with each passing course, the website was built upon and improved into what you see today (EU - 08.12.22 | US - 12.08.22). In general, the website incorporates real-world project development processes that are focused on research-based and user-centric design and development methodologies.",
      highlights: ["Won award at AIHacks 2016"],
      frameworks: ["HTML", "CSS", "JS", "WooCommerce"],
    },
    {
      title: "LAZY SLOTH - AUCTION HOUSE",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      image: lazySloth,
      website: "https://noroffauctionhouse.imdev.no/",
      code: "https://github.com/DrRuski/noroff-auction-house",
      summary: "",
      highlights: ["Won award at AIHacks 2016"],
      frameworks: ["HTML", "CSS", "JS"],
    },
    {
      title: "EAT'N'SPLIT",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      image: eatSplit,
      website: "https://tangerine-genie-e307db.netlify.app",
      code: "https://github.com/DrRuski/eat-n-split",
      summary: "",
      highlights: ["Won award at AIHacks 2016"],
      frameworks: ["HTML", "CSS", "JS"],
    },
  ],
};
