"use client";

import {
  translate,
  usePortfolioPreferences,
} from "@/components/portfolio/portfolio-preferences";

export function PortfolioHeader() {
  const { language, setLanguage, theme, setTheme } =
    usePortfolioPreferences();
  const t = (text: string) => translate(text, language);
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <header className="portfolio-header">
      <div className="portfolio-container portfolio-header-inner">
        <a
          className="portfolio-brand"
          href="#accueil"
          aria-label="Vavaka Ratafika"
        >
          vr<span>.</span>
        </a>
        <nav className="portfolio-nav" aria-label={t("Navigation principale")}>
          <a href="#profil">{t("À propos")}</a>
          <a href="#competences">{t("Compétences")}</a>
          <a href="#realisations">{t("Réalisations")}</a>
          <a href="#parcours">{t("Parcours")}</a>
        </nav>
        <div className="portfolio-header-actions">
          <div
            className="portfolio-language-switch"
            aria-label={language === "fr" ? "Langue" : "Language"}
          >
            <button
              aria-label={t("Passer le site en français")}
              aria-pressed={language === "fr"}
              onClick={() => setLanguage("fr")}
              type="button"
            >
              FR
            </button>
            <button
              aria-label={t("Passer le site en anglais")}
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
              type="button"
            >
              EN
            </button>
          </div>
          <button
            aria-label={
              nextTheme === "dark"
                ? t("Passer en thème sombre")
                : t("Passer en thème clair")
            }
            className="portfolio-theme-toggle"
            onClick={() => setTheme(nextTheme)}
            type="button"
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☼"}</span>
          </button>
          <a className="portfolio-header-contact" href="#contact">
            {t("Contact")} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
