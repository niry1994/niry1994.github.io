"use client";

import { useState, type FormEvent } from "react";
import {
  translate,
  usePortfolioPreferences,
} from "@/components/portfolio/portfolio-preferences";

export function ContactForm() {
  const [notice, setNotice] = useState("");
  const { language } = usePortfolioPreferences();
  const t = (text: string) => translate(text, language);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof message !== "string"
    ) {
      setNotice(t("Merci de vérifier les informations saisies."));
      return;
    }

    const subject = `${t("Prise de contact")} — ${t(service)}`;
    const body = [
      t("Bonjour Vavaka,"),
      "",
      message.trim(),
      "",
      `${t("Nom :")} ${name.trim()}`,
      `${t("E-mail :")} ${email.trim()}`,
    ].join("\n");
    const mailto = `mailto:nirizo1994@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setNotice(
      t("Votre application de messagerie va s’ouvrir avec votre message."),
    );
    window.location.href = mailto;
  }

  return (
    <form className="portfolio-form" onSubmit={handleSubmit}>
      <div className="portfolio-form-row">
        <label>
          {t("Votre nom")}
          <input
            autoComplete="name"
            name="name"
            placeholder={t("Nom et prénom")}
            required
          />
        </label>
        <label>
          {t("Votre e-mail")}
          <input
            autoComplete="email"
            name="email"
            placeholder={t("vous@exemple.com")}
            required
            type="email"
          />
        </label>
      </div>
      <label>
        {t("Sujet")}
        <select defaultValue="" name="service" required>
          <option disabled value="">
            {t("Choisissez un sujet")}
          </option>
          <option>{t("Création de boutique Shopify")}</option>
          <option>{t("Assistance digitale")}</option>
          <option>{t("Développement web")}</option>
          <option>{t("Autre demande")}</option>
        </select>
      </label>
      <label>
        {t("Votre message")}
        <textarea
          maxLength={2000}
          name="message"
          placeholder={t("Parlez-moi brièvement de votre projet...")}
          required
          rows={4}
        />
      </label>
      <button className="portfolio-button portfolio-button-primary" type="submit">
        {t("Préparer mon e-mail")} <span aria-hidden="true">↗</span>
      </button>
      <p className="portfolio-form-note" aria-live="polite">
        {notice ||
          t(
            "Ce formulaire ouvre votre application e-mail ; vos informations ne sont pas enregistrées sur ce site.",
          )}
      </p>
    </form>
  );
}
