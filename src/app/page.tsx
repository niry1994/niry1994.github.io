"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactForm } from "@/components/portfolio/contact-form";
import { PortfolioHeader } from "@/components/portfolio/portfolio-header";
import {
  translate,
  usePortfolioPreferences,
} from "@/components/portfolio/portfolio-preferences";

const skills = [
  {
    category: "E-commerce",
    items: ["Shopify", "WooCommerce", "CJ Dropshipping"],
    icon: "01",
    image: "/images/ecommerce-specialty.jpg",
  },
  {
    category: "Développement",
    items: ["C#", "ASP.NET", "WPF"],
    icon: "02",
    image: "/images/virtual-assistance.jpg",
  },
  {
    category: "Assistance virtuelle",
    items: ["Notion", "ChatGPT"],
    icon: "03",
    image: "/images/remote-work.jpg",
  },
  {
    category: "Création visuelle",
    items: ["CapCut", "Lightroom"],
    icon: "04",
    image: "/images/creative-tools.jpg",
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
    image: "/images/shopify-project-illustration.jpg",
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
    image: "/images/web-development.jpg",
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
  const { language, theme } = usePortfolioPreferences();
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0);
  const t = (text: string) => translate(text, language);
  const featuredProject = projects[featuredProjectIndex];

  function showFeaturedProject(direction: -1 | 1) {
    setFeaturedProjectIndex(
      (currentIndex) =>
        (currentIndex + direction + projects.length) % projects.length,
    );
  }

  useEffect(() => {
    document.title =
      language === "fr"
        ? "Vavaka Ratafika — Shopify Designer & Assistant virtuel"
        : "Vavaka Ratafika — Shopify Designer & Virtual Assistant";

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content =
        language === "fr"
          ? "Portfolio de Vavaka Ratafika : création de boutiques Shopify, assistance digitale et développement web à Antsirabe, Madagascar."
          : "Portfolio of Vavaka Ratafika: Shopify store design, digital assistance, and web development in Antsirabe, Madagascar.";
    }
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".portfolio-reveal");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-motion", "visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => {
      element.setAttribute("data-motion", "pending");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio" data-theme={theme}>
      <a className="portfolio-skip-link" href="#contenu">
        {t("Aller au contenu")}
      </a>
      <PortfolioHeader />

      <main id="contenu">
        <section className="portfolio-hero" id="accueil">
          <div className="portfolio-container portfolio-hero-grid">
            <div className="portfolio-hero-copy">
              <p className="portfolio-eyebrow">
                <span className="portfolio-status-dot" />
                {t("DU DESIGN AU DÉVELOPPEMENT")}
              </p>
              <h1>
                {t("Le digital")}
                <br />
                <span>{t("au service de votre réussite.")}</span>
              </h1>
              <p className="portfolio-intro">
                {t("Je suis")} <strong>Vavaka Ratafika</strong>,{" "}
                {t(
                  "Shopify Designer et assistant virtuel à Antsirabe. Je conçois des boutiques professionnelles et accompagne les équipes avec des solutions digitales fiables, claires et adaptées à leurs objectifs.",
                )}
              </p>
              <div className="portfolio-hero-actions">
                <a className="portfolio-button portfolio-button-primary" href="#realisations">
                  {t("Découvrir mes réalisations")}
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="portfolio-button portfolio-button-quiet" href="#contact">
                  {t("Parlons de votre projet")}
                </a>
              </div>
              <div className="portfolio-hero-meta">
                <span className="portfolio-monogram" aria-hidden="true">VR</span>
                <span>
                  <strong>Vavaka Ratafika</strong>
                  <small>{t("Shopify Designer · Antsirabe, Madagascar")}</small>
                </span>
                <span className="portfolio-availability">
                  <span className="portfolio-status-dot" />
                  {t("Disponible à distance")}
                </span>
              </div>
            </div>

            <div
              className="portfolio-hero-feature"
              aria-label={t("Projet à la une")}
            >
              <div className="portfolio-feature-image" key={featuredProject.number}>
                <Image
                  alt=""
                  className="portfolio-feature-photo"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 52vw"
                  src={featuredProject.image}
                />
                <span className="portfolio-feature-shade" />
                <span className="portfolio-feature-index">
                  {t("PROJET À LA UNE")} <strong>{featuredProject.number}</strong>
                </span>
                <div className="portfolio-feature-caption">
                  <p>{t(featuredProject.type)}</p>
                  <h2>{t(featuredProject.title)}</h2>
                  <span>{t(featuredProject.client)}</span>
                </div>
              </div>
              <div className="portfolio-feature-controls">
                <a href="#realisations">
                  {t("Explorer les projets")} <span aria-hidden="true">↗</span>
                </a>
                <div className="portfolio-feature-pager">
                  <span aria-live="polite">
                    <strong>{featuredProject.number}</strong> / 0{projects.length}
                  </span>
                  <button
                    aria-label={t("Projet précédent")}
                    onClick={() => showFeaturedProject(-1)}
                    type="button"
                  >
                    <span aria-hidden="true">←</span>
                  </button>
                  <button
                    aria-label={t("Projet suivant")}
                    onClick={() => showFeaturedProject(1)}
                    type="button"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-container portfolio-hero-foot">
            <span>SHOPIFY</span>
            <span>{t("ASSISTANCE DIGITALE")}</span>
            <span>{t("DÉVELOPPEMENT WEB")}</span>
            <span>{t("SUPPORT OPÉRATIONNEL")}</span>
          </div>
        </section>

        <section
          className="portfolio-section portfolio-about portfolio-reveal"
          id="profil"
        >
          <div className="portfolio-container portfolio-about-grid">
            <div>
              <p className="portfolio-eyebrow">{t("01 — À propos")}</p>
              <h2>
                {t("La technique au service")}
                <br />
                <span>{t("de vos idées.")}</span>
              </h2>
            </div>
            <div className="portfolio-about-copy">
              <p>
                {t(
                  "Polyvalent et orienté résultats, j’accompagne les projets e-commerce de la création de leur boutique à l’organisation des opérations du quotidien. Mon approche associe design, simplicité d’utilisation et attention portée au parcours client.",
                )}
              </p>
              <p>
                {t(
                  "Mon expérience en développement logiciel complète mon travail sur Shopify : je comprends les enjeux techniques tout en gardant le cap sur une expérience fluide pour les visiteurs comme pour les équipes.",
                )}
              </p>
              <a className="portfolio-text-link" href="#contact">
                {t("Échangeons sur vos besoins")}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="portfolio-section portfolio-skills portfolio-reveal"
          id="competences"
        >
          <div className="portfolio-container">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-eyebrow">{t("02 — Compétences")}</p>
                <h2>{t("Un profil polyvalent, des outils adaptés.")}</h2>
              </div>
              <p>
                {t(
                  "Des compétences e-commerce, techniques et créatives réunies pour faire avancer vos projets.",
                )}
              </p>
            </div>
            <div className="portfolio-skill-grid">
              {skills.map((group) => (
                <article
                  className="portfolio-skill-card portfolio-reveal"
                  key={group.category}
                >
                  <div className="portfolio-skill-image">
                    <Image
                      alt=""
                      className="portfolio-photo"
                      fill
                      sizes="(max-width: 700px) 100vw, 25vw"
                      src={group.image}
                    />
                    <span className="portfolio-skill-icon">{group.icon}</span>
                    <span className="portfolio-card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3>{t(group.category)}</h3>
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

        <section
          className="portfolio-section portfolio-projects portfolio-reveal"
          id="realisations"
        >
          <div className="portfolio-container">
            <div className="portfolio-section-heading">
              <div>
                <p className="portfolio-eyebrow">{t("03 — Réalisations")}</p>
                <h2>{t("Du concret, avec une attention aux détails.")}</h2>
              </div>
              <p>
                {t(
                  "Quelques expériences représentatives de mon parcours professionnel.",
                )}
              </p>
            </div>
            <div className="portfolio-project-grid">
              {projects.map((project) => (
                <article
                  className="portfolio-project-card portfolio-reveal"
                  key={project.number}
                >
                  <div
                    className={`portfolio-project-art ${project.style}`}
                    aria-hidden="true"
                  >
                    <Image
                      alt=""
                      className="portfolio-project-photo"
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                      src={project.image}
                    />
                    <span className="portfolio-project-photo-shade" />
                    <span className="portfolio-project-mark">{project.mark}</span>
                    <span className="portfolio-project-number">{project.number}</span>
                  </div>
                  <div className="portfolio-project-body">
                    <p className="portfolio-project-type">{t(project.type)}</p>
                    <h3>{t(project.title)}</h3>
                    <p className="portfolio-project-client">{t(project.client)}</p>
                    <p className="portfolio-project-description">
                      {t(project.description)}
                    </p>
                    <ul
                      className="portfolio-tag-list"
                      aria-label={t("Technologies et domaines")}
                    >
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <p className="portfolio-photo-note">
              {t(
                "Visuels d’illustration (Unsplash), et non des captures des boutiques clientes. Les URL ou captures des réalisations réelles pourront les remplacer.",
              )}{" "}
              <a href="https://unsplash.com/license" rel="noreferrer" target="_blank">
                Unsplash
              </a>
            </p>
          </div>
        </section>

        <section
          className="portfolio-section portfolio-journey portfolio-reveal"
          id="parcours"
        >
          <div className="portfolio-container portfolio-journey-grid">
            <div>
              <p className="portfolio-eyebrow">{t("04 — Parcours")}</p>
              <h2>{t("Un parcours entre technologie et commerce.")}</h2>
              <p className="portfolio-journey-intro">
                {t(
                  "Une formation scientifique et une expérience de terrain au service de solutions pratiques.",
                )}
              </p>
              <div className="portfolio-education">
                <span className="portfolio-education-label">{t("FORMATION")}</span>
                <h3>{t("Master II — ISPM")}</h3>
                <p>
                  {t("Institut Supérieur Polytechnique de Madagascar · en cours")}
                </p>
                <span className="portfolio-education-secondary">
                  {t("Baccalauréat série D · Lycée Privé Saint Joseph · 2012")}
                </span>
              </div>
            </div>
            <div className="portfolio-timeline">
              {experience.map((item) => (
                <article className="portfolio-timeline-item" key={item.title}>
                  <span className="portfolio-timeline-dot" aria-hidden="true" />
                  <p className="portfolio-timeline-period">{t(item.period)}</p>
                  <h3>{t(item.title)}</h3>
                  <p className="portfolio-timeline-org">{t(item.organization)}</p>
                  <p className="portfolio-timeline-detail">{t(item.detail)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-contact portfolio-reveal" id="contact">
          <div className="portfolio-container portfolio-contact-grid">
            <div className="portfolio-contact-copy">
              <p className="portfolio-eyebrow">{t("05 — Contact")}</p>
              <h2>
                {t("Un projet en tête ?")}
                <br />
                <span>{t("Construisons-le ensemble.")}</span>
              </h2>
              <p>
                {t(
                  "Décrivez-moi votre besoin. Je vous répondrai par e-mail pour discuter des prochaines étapes.",
                )}
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
          <p>
            Vavaka Ratafika · {t("Assistant virtuel & Shopify Designer")}
          </p>
          <a href="#accueil">{t("Retour en haut ↑")}</a>
        </div>
      </footer>
    </div>
  );
}
