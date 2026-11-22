import Image from "next/image";
import ScrollReveal from "./scroll-reveal";

const projects = [
  {
    number: "01",
    name: "Ma Boutique de Club",
    domain: "maboutiquedeclub.com",
    category: "Projet client · E-commerce",
    description:
      "Création d’un site e-commerce dans le cadre de mon activité freelance, avec une attention portée à l’intégration et à la mise en valeur de l’offre.",
    url: "https://maboutiquedeclub.com",
    image: "/projects/ma-boutique-de-club.webp",
    imageAlt: "Capture du site Ma Boutique de Club",
  },
  {
    number: "02",
    name: "La Loba",
    domain: "la-loba.fr",
    category: "Projet client · Site web",
    description:
      "Un projet web réalisé pour un client dans le cadre de mon activité freelance, pour présenter son activité en ligne.",
    url: "https://la-loba.fr",
    image: "/projects/la-loba.webp",
    imageAlt: "Capture du site La Loba",
  },
  {
    number: "03",
    name: "Solve",
    domain: "solve.fr",
    category: "Stage · Décembre 2023",
    description:
      "Stage de développeur web : création et maintenance de sites WordPress, mises à jour et conseil client.",
    url: "https://solve.fr",
    image: "/projects/solve.webp",
    imageAlt: "Capture du site Solve",
  },
];

const masteredSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "WordPress",
  "Elementor",
  "WooCommerce",
  "Git",
];

const growingSkills = [
  "React",
  "Node.js",
  "Express",
  "Next.js",
  "TypeScript",
  "SQL",
  "MySQL",
  "Python",
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <header className="site-header">
        <a className="wordmark" href="#accueil" aria-label="Teddy Techer, accueil">
          <Image
            className="wordmark-mark"
            src="/logo-3d.png"
            alt=""
            width={768}
            height={768}
            sizes="70px"
            priority
          />
          <span className="wordmark-name">Teddy Techer</span>
        </a>

        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
          <a href="#competences">Compétences</a>
        </nav>

        <a className="header-contact" href="mailto:contact@teddytecher.com">
          Me contacter <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">
              <Image
                className="eyebrow-icon"
                src="/logo-mark.png"
                alt=""
                width={28}
                height={28}
              />
              Développeur web · Avignon, France
            </p>
            <h1>
              Le web,
              <br />
              <span className="heading-accent">fait pour</span> les gens.
            </h1>
            <p className="hero-description">
              Moi, c’est Teddy. Depuis 2021, je crée des sites web pour des
              entreprises, associations et indépendants. Aujourd’hui, j’élargis
              mon terrain de jeu avec le développement full-stack.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projets">
                Voir mes projets <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="mailto:contact@teddytecher.com">
                Parlons de votre projet <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-grid" aria-hidden="true" />
            <div className="hero-sticker" aria-hidden="true">
              <span>WEB</span>
              <span>·</span>
              <span>HUMAIN</span>
              <span>·</span>
              <span>UTILE</span>
            </div>
            <div className="hero-card">
              <span className="hero-card-index">PORTFOLIO / WEB</span>
              <Image
                className="hero-logo-image"
                src="/logo-3d.png"
                alt=""
                width={768}
                height={768}
                priority
                sizes="(max-width: 640px) 400px, 600px"
              />
              <div className="hero-card-bottom">
                <span>Teddy Techer</span>
                <span>Avignon, FR</span>
              </div>
            </div>
            <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
          </div>

          <div className="hero-footnote">
            <span>Indépendant depuis 2021</span>
            <span aria-hidden="true">✳</span>
            <span>Curieux du prochain défi</span>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projets">
          <div className="section-heading scroll-reveal">
            <div>
              <p className="eyebrow">Sur le terrain</p>
              <h2>Quelques projets choisis<span>.</span></h2>
            </div>
            <p className="section-intro">
              Des sites développés ou accompagnés au fil de mes expériences en
              freelance et de mon stage.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card scroll-reveal" key={project.number}>
                <a
                  className="project-preview"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visiter ${project.domain} (nouvel onglet)`}
                >
                  <Image
                    className="project-preview-image"
                    src={project.image}
                    alt={project.imageAlt}
                    width={1352}
                    height={652}
                    sizes="(max-width: 640px) 100vw, (max-width: 1060px) 50vw, 360px"
                  />
                  <span className="project-preview-link" aria-hidden="true">
                    <span className="project-preview-link-label">Voir le site</span>
                    <span>↗</span>
                  </span>
                </a>
                <div className="project-info">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <p className="project-domain">{project.domain}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
                <p className="project-description">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="apropos">
          <div className="about-inner section-wrap">
            <div className="about-label scroll-reveal">
              <p className="eyebrow">Un peu de contexte</p>
              <span className="about-star" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="about-copy scroll-reveal">
              <h2>
                Du concret, de la curiosité, et toujours{" "}
                <span>une idée à creuser.</span>
              </h2>
              <p>
                Mon parcours a commencé au plus près des besoins : accompagner
                des petites structures, comprendre leur quotidien et créer des
                sites qui leur ressemblent. En indépendant, j’ai appris à mener
                un projet de la première conversation jusqu’à sa mise en ligne,
                puis à en assurer le suivi.
              </p>
              <p>
                Je développe maintenant mes compétences en React, TypeScript et
                Node.js. Mon objectif : relier l’expérience acquise sur le web
                aux possibilités d’applications full-stack plus poussées.
              </p>
              <a className="text-link" href="#parcours">
                Découvrir mon parcours <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="about-aside scroll-reveal">
              <span className="aside-year">2021</span>
              <span className="aside-rule" />
              <p>
                Le début de
                <br />
                l’aventure freelance.
              </p>
            </div>
          </div>
        </section>

        <section className="journey-section section-wrap" id="parcours">
          <div className="section-heading scroll-reveal">
            <div>
              <p className="eyebrow">Étapes clés</p>
              <h2>Mon parcours<span>.</span></h2>
            </div>
            <p className="section-intro">
              Une expérience construite entre projets clients, formation et
              apprentissage continu.
            </p>
          </div>

          <div className="journey-columns">
            <div className="journey-column scroll-reveal">
              <h3 className="column-heading">
                <span className="column-icon" aria-hidden="true">↗</span>
                Expérience
              </h3>
              <article className="timeline-item">
                <div className="timeline-meta">
                  <span>Février 2021 — Aujourd’hui</span>
                  <span className="timeline-dot" aria-hidden="true" />
                </div>
                <div>
                  <h4>Développeur web indépendant</h4>
                  <p className="timeline-place">Freelance · Avignon</p>
                  <p>
                    Création et intégration de sites vitrines et e-commerce.
                    Conseil, maintenance et accompagnement de clients dans la
                    durée.
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-meta">
                  <span>Décembre 2023</span>
                  <span className="timeline-dot" aria-hidden="true" />
                </div>
                <div>
                  <h4>Développeur web · Intégrateur</h4>
                  <p className="timeline-place">Stage · Solve</p>
                  <p>
                    Création et maintenance de sites WordPress, mises à jour et
                    conseil client.
                  </p>
                </div>
              </article>
            </div>

            <div className="journey-column scroll-reveal">
              <h3 className="column-heading">
                <span className="column-icon column-icon-gold" aria-hidden="true">✳</span>
                Formation
              </h3>
              <article className="timeline-item">
                <div className="timeline-meta">
                  <span>2022</span>
                  <span className="timeline-dot timeline-dot-lime" aria-hidden="true" />
                </div>
                <div>
                  <h4>Titre professionnel DWWM</h4>
                  <p className="timeline-place">Avenir84</p>
                  <p>Développement web et web mobile · PHP, MySQL, WordPress.</p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-meta">
                  <span>2021</span>
                  <span className="timeline-dot timeline-dot-lime" aria-hidden="true" />
                </div>
                <div>
                  <h4>Développeur web full-stack JavaScript</h4>
                  <p className="timeline-place">École O’Clock · à distance</p>
                  <p>
                    Node.js, Express, React et certification OPQUAST®.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="skills-section" id="competences">
          <div className="skills-inner section-wrap">
            <div className="section-heading scroll-reveal">
              <div>
                <p className="eyebrow">
                  <Image
                    className="eyebrow-icon eyebrow-icon-dark"
                    src="/logo-mark-fond-sombre.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                  Boîte à outils
                </p>
                <h2>Ce que j’utilise<span>.</span></h2>
              </div>
              <p className="section-intro">
                Des bases solides côté web, et de nouvelles briques que je
                découvre projet après projet.
              </p>
            </div>

            <div className="skills-groups">
              <div className="skill-group scroll-reveal">
                <div className="skill-group-title">
                  <span className="skill-marker" aria-hidden="true" />
                  <h3>Maîtrisé</h3>
                </div>
                <ul className="skill-list">
                  {masteredSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-group scroll-reveal">
                <div className="skill-group-title">
                  <span className="skill-marker skill-marker-outline" aria-hidden="true" />
                  <h3>En apprentissage</h3>
                </div>
                <ul className="skill-list skill-list-learning">
                  {growingSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="skills-footer scroll-reveal">
              <p>
                Aussi : responsive design, SEO local, gestion de projet client,
                maintenance et hébergement web.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card scroll-reveal">
            <div className="contact-orb contact-orb-one" aria-hidden="true" />
            <div className="contact-orb contact-orb-two" aria-hidden="true" />
            <p className="eyebrow">Et maintenant ?</p>
            <h2>
              Une idée en tête
              <br />
              <span>ou juste envie d’échanger ?</span>
            </h2>
            <a className="button button-light" href="mailto:contact@teddytecher.com">
              contact@teddytecher.com <span aria-hidden="true">↗</span>
            </a>
            <p className="contact-location">Avignon, France · Permis B · Mobile</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#accueil">
          <Image
            className="wordmark-mark"
            src="/logo-3d.png"
            alt=""
            width={768}
            height={768}
            sizes="60px"
          />
          <span className="wordmark-name">Teddy Techer</span>
        </a>
        <p>Du web utile, fait avec attention.</p>
        <div className="footer-links">
          <a href="https://github.com/teddy-techer" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="mailto:contact@teddytecher.com">
            Email <span aria-hidden="true">↗</span>
          </a>
          <span>© Teddy Techer</span>
        </div>
      </footer>
    </>
  );
}
