export function PortfolioHeader() {
  return (
    <header className="portfolio-header">
      <div className="portfolio-container portfolio-header-inner">
        <a className="portfolio-brand" href="#accueil" aria-label="Vavaka Ratafika, accueil">
          vr<span>.</span>
        </a>
        <nav className="portfolio-nav" aria-label="Navigation principale">
          <a href="#profil">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#realisations">Réalisations</a>
          <a href="#parcours">Parcours</a>
        </nav>
        <a className="portfolio-header-contact" href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
