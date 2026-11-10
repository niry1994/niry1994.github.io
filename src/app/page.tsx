import type { Metadata } from "next";

import { ContactForm } from "@/components/portfolio/contact-form";
import { PortfolioHeader } from "@/components/portfolio/portfolio-header";

export const metadata: Metadata = {
  title: "Vavaka Ratafika — Shopify Designer & Assistant virtuel",
  description:
    "Portfolio de Vavaka Ratafika : création de boutiques Shopify, assistance digitale et développement web à Antsirabe, Madagascar.",
};

const skills = [
  {
    category: "E-commerce",
    items: ["Shopify", "WooCommerce", "CJ Dropshipping"],
    icon: "01",
  },
  {
    category: "Développement",
    items: ["C#", "ASP.NET", "WPF"],
    icon: "02",
  },
  {
    category: "Organisation & création",
    items: ["Notion", "ChatGPT", "CapCut", "Lightroom"],
    icon: "03",
  },
];

const projects = [
  {
    number: "01",
    type: "E-commerce · Depuis 2024",
    title: "Boutiques Shopify",
    client: "Elite Boutique & Les Visionnaires",
    description:
      "Conception de boutiques Shopify fonctionnelles, connectées à CJ Dropshipping pour simplifier l’importation des produits, le traitement des commandes et la logistique.",
    tags: ["Shopify", "CJ Dropshipping", "E-commerce"],
    style: "project-art-shopify",
    mark: "S",
  },
  {
    number: "02",
    type: "Développement · Stage · 2017",
    title: "Application de test logiciel",
    client: "Orange Madagascar",
    description:
      "Participation à la création d’un outil interne de test logiciel, avec un backend en C# / ASP.NET et une interface WPF, pour vérifier les applications avant leur mise en production.",
    tags: ["C#", "ASP.NET", "WPF"],
    style: "project-art-code",
    mark: "{ }",
  },
];

const experience = [
  {
    period: "Depuis 2024",
    title: "Shopify Designer",
    organization: "Elite Boutique · Les Visionnaires",
    detail:
      "Création et configuration de boutiques Shopify, intégration de CJ Dropshipping et mise en place d’un parcours de vente clair.",
  },
  {
    period: "2017",
    title: "Stagiaire en développement logiciel",
    organization: "Orange Madagascar",
    detail:
      "Contribution à une application de test logiciel avec un backend C# / ASP.NET et une interface WPF.",
  },
];

export default function Home() {
  return (
    <div className="portfolio">
      <a className="portfolio-skip-link" href="#contenu">
        Aller au contenu
      </a>
      <PortfolioHeader />

      <main id="contenu">
        <section className="portfolio-hero" id="accueil">
          <div className="portfolio-container portfolio-hero-grid">
            <div className="portfolio-hero-copy">
              <p className="portfolio-eyebrow">
                <span className="portfolio-status-dot" />
                Assistant virtuel · Shopify Designer
              </p>
              <h1>
                Des boutiques en ligne
                <br />
                <span>pensées pour avancer.</span>
              </h1>
              <p className="portfolio-intro">
                Je suis <strong>Vavaka Ratafika</strong>, assistant virtuel et
                Shopify Designer à Antsirabe. J’aide les entreprises à créer
                une présence e-commerce claire, fonctionnelle et prête à
                évoluer.
              </p>
              <div className="portfolio-hero-actions">
                <a className="portfolio-button portfolio-button-primary" href="#realisations">
                  Découvrir mes réalisations
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="portfolio-button portfolio-button-quiet" href="#contact">
                  Parlons de votre projet
                </a>
              </div>
              <div className="portfolio-location">
                <span aria-hidden="true">⌖</span>
                Antsirabe, Madagascar <span className="portfolio-divider">·</span>{" "}
                Disponible à distance
              </div>
            </div>

            <div className="portfolio-hero-art" aria-label="Présentation de mon expertise e-commerce">
              <div className="portfolio-art-card">
                <div className="portfolio-art-topline">
                  <span className="portfolio-art-logo">vr.</span>
                  <span className="portfolio-art-label">ESPACE E-COMMERCE</span>
                  <span className="portfolio-art-menu" aria-hidden="true">
                    •••
                  </span>
                </div>
                <div className="portfolio-art-heading">
                  <span>Votre boutique, en mieux.</span>
                  <span className="portfolio-art-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div className="portfolio-art-store">
                  <div className="portfolio-store-header">
                    <span>ma-boutique</span>
                    <span>Accueil&nbsp;&nbsp; Catalogue&nbsp;&nbsp; Contact</span>
                    <span aria-hidden="true">⌕</span>
                  </div>
                  <div className="portfolio-store-body">
                    <div className="portfolio-store-copy">
                      <span className="portfolio-store-kicker">UNE SÉLECTION POUR VOUS</span>
                      <span className="portfolio-store-title">
                        Le beau
                        <br />
                        au quotidien.
                      </span>
                      <span className="portfolio-store-link">Explorer la collection&nbsp; →</span>
                    </div>
                    <div className="portfolio-product-shape" aria-hidden="true">
                      <span />
                    </div>
                  </div>
                  <div className="portfolio-store-footer">
                    <span>01 — BOUTIQUE SUR MESURE</span>
                    <span>SHOPIFY · DESIGN · CONFIGURATION</span>
                  </div>
                </div>
                <div className="portfolio-art-caption">
                  <span className="portfolio-caption-icon">✳</span>
                  <span>
                    <strong>Du concept à la mise en ligne</strong>
                    <small>Une expérience conçue autour de vos clients.</small>
                  </span>
                </div>
              </div>
              <span className="portfolio-art-orbit portfolio-art-orbit-one" aria-hidden="true" />
              <span className="portfolio-art-orbit portfolio-art-orbit-two" aria-hidden="true" />
            </div>
          </div>
          <div className="portfolio-container portfolio-hero-foot">
            <span>SHOPIFY</span>
            <span>ASSISTANCE DIGITALE</span>
            <span>DÉVELOPPEMENT WEB</span>
            <span>SUPPORT OPÉRATIONNEL</span>
          </div>
        </section>

        <section className="portfolio-section portfolio-about" id="profil">
          <div className="portfolio-container portfolio-about-grid">
            <div>
              <p className="portfolio-eyebrow">01 — À propos</p>
              <h2>
                La technique au service
                <br />
                <span>de vos idées.</span>
              </h2>
            </div>
            <div className="portfolio-about-copy">
              <p>
                Polyvalent et orienté résultats, j’accompagne les projets
                e-commerce de la création de leur boutique à l’organisation
                des opérations du quotidien. Mon approche associe design,
                simplicité d’utilisation et attention portée au parcours
                client.
              </p>
              <p>
                Mon expérience en développement logiciel complète mon travail
                sur Shopify : je comprends les enjeux techniques tout en
                gardant le cap sur une expérience fluide pour les visiteurs
                comme pour les équipes.
              </p>
              <a className="portfolio-text-link" href="#contact">
                Échangeons sur vos besoins <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="portfolio-section portfolio-skills" id="competences">
          <div className="portfolio-container">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-eyebrow">02 — Compétences</p>
                <h2>Un profil polyvalent, des outils adaptés.</h2>
              </div>
              <p>
                Des compétences e-commerce, techniques et créatives réunies
                pour faire avancer vos projets.
              </p>
            </div>
            <div className="portfolio-skill-grid">
              {skills.map((group) => (
                <article className="portfolio-skill-card" key={group.category}>
                  <div className="portfolio-skill-card-top">
                    <span className="portfolio-skill-icon">{group.icon}</span>
                    <span className="portfolio-card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3>{group.category}</h3>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section portfolio-projects" id="realisations">
          <div className="portfolio-container">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-eyebrow">03 — Réalisations</p>
                <h2>Du concret, avec une attention aux détails.</h2>
              </div>
              <p>
                Quelques expériences représentatives de mon parcours
                professionnel.
              </p>
            </div>
            <div className="portfolio-project-grid">
              {projects.map((project) => (
                <article className="portfolio-project-card" key={project.number}>
                  <div className={`portfolio-project-art ${project.style}`} aria-hidden="true">
                    <span className="portfolio-project-mark">{project.mark}</span>
                    <span className="portfolio-project-number">{project.number}</span>
                    {project.number === "01" ? (
                      <div className="portfolio-mini-store">
                        <span className="portfolio-mini-nav" />
                        <span className="portfolio-mini-title" />
                        <span className="portfolio-mini-image" />
                        <span className="portfolio-mini-image portfolio-mini-image-small" />
                      </div>
                    ) : (
                      <div className="portfolio-code-lines">
                        <span>class TestRunner</span>
                        <span>&nbsp;&nbsp;BuildSuite();</span>
                        <span>&nbsp;&nbsp;return Ready;</span>
                      </div>
                    )}
                  </div>
                  <div className="portfolio-project-body">
                    <p className="portfolio-project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="portfolio-project-client">{project.client}</p>
                    <p className="portfolio-project-description">{project.description}</p>
                    <ul className="portfolio-tag-list" aria-label="Technologies et domaines">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section portfolio-journey" id="parcours">
          <div className="portfolio-container portfolio-journey-grid">
            <div>
              <p className="portfolio-eyebrow">04 — Parcours</p>
              <h2>Un parcours entre technologie et commerce.</h2>
              <p className="portfolio-journey-intro">
                Une formation scientifique et une expérience de terrain au
                service de solutions pratiques.
              </p>
              <div className="portfolio-education">
                <span className="portfolio-education-label">FORMATION</span>
                <h3>Master II — ISPM</h3>
                <p>Institut Supérieur Polytechnique de Madagascar · en cours</p>
                <span className="portfolio-education-secondary">
                  Baccalauréat série D · Lycée Privé Saint Joseph · 2012
                </span>
              </div>
            </div>
            <div className="portfolio-timeline">
              {experience.map((item) => (
                <article className="portfolio-timeline-item" key={item.title}>
                  <span className="portfolio-timeline-dot" aria-hidden="true" />
                  <p className="portfolio-timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="portfolio-timeline-org">{item.organization}</p>
                  <p className="portfolio-timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-contact" id="contact">
          <div className="portfolio-container portfolio-contact-grid">
            <div className="portfolio-contact-copy">
              <p className="portfolio-eyebrow">05 — Contact</p>
              <h2>
                Un projet en tête ?
                <br />
                <span>Construisons-le ensemble.</span>
              </h2>
              <p>
                Décrivez-moi votre besoin. Je vous répondrai par e-mail pour
                discuter des prochaines étapes.
              </p>
              <a className="portfolio-contact-email" href="mailto:nirizo1994@gmail.com">
                nirizo1994@gmail.com <span aria-hidden="true">↗</span>
              </a>
              <div className="portfolio-socials">
                <a
                  href="https://www.linkedin.com/in/niry-zo-ratafika-1bb859152/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01736dbe6814c9e84c"
                  rel="noreferrer"
                  target="_blank"
                >
                  Upwork <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <div className="portfolio-container">
          <a className="portfolio-footer-brand" href="#accueil">
            vr<span>.</span>
          </a>
          <p>Vavaka Ratafika · Assistant virtuel & Shopify Designer</p>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </div>
  );
}
