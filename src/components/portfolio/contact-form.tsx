"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

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
      setNotice("Merci de vérifier les informations saisies.");
      return;
    }

    const subject = `Prise de contact — ${service}`;
    const body = [
      `Bonjour Vavaka,`,
      "",
      message.trim(),
      "",
      `Nom : ${name.trim()}`,
      `E-mail : ${email.trim()}`,
    ].join("\n");
    const mailto = `mailto:nirizo1994@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setNotice("Votre application de messagerie va s’ouvrir avec votre message.");
    window.location.href = mailto;
  }

  return (
    <form className="portfolio-form" onSubmit={handleSubmit}>
      <div className="portfolio-form-row">
        <label>
          Votre nom
          <input autoComplete="name" name="name" placeholder="Nom et prénom" required />
        </label>
        <label>
          Votre e-mail
          <input
            autoComplete="email"
            name="email"
            placeholder="vous@exemple.com"
            required
            type="email"
          />
        </label>
      </div>
      <label>
        Sujet
        <select defaultValue="" name="service" required>
          <option disabled value="">
            Choisissez un sujet
          </option>
          <option>Création de boutique Shopify</option>
          <option>Assistance digitale</option>
          <option>Développement web</option>
          <option>Autre demande</option>
        </select>
      </label>
      <label>
        Votre message
        <textarea
          maxLength={2000}
          name="message"
          placeholder="Parlez-moi brièvement de votre projet..."
          required
          rows={4}
        />
      </label>
      <button className="portfolio-button portfolio-button-primary" type="submit">
        Préparer mon e-mail <span aria-hidden="true">↗</span>
      </button>
      <p className="portfolio-form-note" aria-live="polite">
        {notice ||
          "Ce formulaire ouvre votre application e-mail ; vos informations ne sont pas enregistrées sur ce site."}
      </p>
    </form>
  );
}
