"use client";

import {
  useSyncExternalStore,
  useEffect,
  type ReactNode,
} from "react";

export type PortfolioLanguage = "fr" | "en";
export type PortfolioTheme = "light" | "dark";

const translations: Record<string, string> = {
  "Aller au contenu": "Skip to content",
  "Navigation principale": "Main navigation",
  "À propos": "About",
  Compétences: "Skills",
  Réalisations: "Selected work",
  Parcours: "Experience",
  Contact: "Contact",
  "Assistant virtuel · Shopify Designer": "Virtual Assistant · Shopify Designer",
  "DU DESIGN AU DÉVELOPPEMENT": "DESIGN THAT MEANS BUSINESS",
  "Le digital": "Digital,",
  "au service de votre réussite.": "designed for your growth.",
  "Shopify Designer et assistant virtuel à Antsirabe. Je conçois des boutiques professionnelles et accompagne les équipes avec des solutions digitales fiables, claires et adaptées à leurs objectifs.":
    "I’m a Shopify designer and virtual assistant based in Antsirabe. I create polished online stores and support teams with dependable digital solutions tailored to their goals.",
  "Shopify Designer · Antsirabe, Madagascar":
    "Shopify Designer · Antsirabe, Madagascar",
  "Projet à la une": "Featured project",
  "PROJET À LA UNE": "FEATURED PROJECT",
  "Explorer les projets": "Explore projects",
  "Projet précédent": "Previous project",
  "Projet suivant": "Next project",
  "Elite Boutique & Les Visionnaires": "Elite Boutique & Les Visionnaires",
  "Présentation de mon expertise e-commerce": "A glimpse of my e-commerce work",
  "Des boutiques en ligne": "Online stores",
  "pensées pour avancer.": "designed to grow.",
  "Je suis": "I’m",
  "assistant virtuel et Shopify Designer à Antsirabe. J’aide les entreprises à créer une présence e-commerce claire, fonctionnelle et prête à évoluer.":
    "a virtual assistant and Shopify designer based in Antsirabe. I help businesses build clear, functional e-commerce experiences that are ready to grow.",
  "Découvrir mes réalisations": "Explore my work",
  "Parlons de votre projet": "Let’s talk about your project",
  "Antsirabe, Madagascar": "Antsirabe, Madagascar",
  "Disponible à distance": "Available remotely",
  "ESPACE E-COMMERCE": "E-COMMERCE STUDIO",
  "Votre boutique, en mieux.": "Your store, thoughtfully made.",
  Accueil: "Home",
  Catalogue: "Shop",
  "ma-boutique": "my-store",
  "UNE SÉLECTION POUR VOUS": "CURATED FOR YOU",
  "Le beau": "Everyday",
  "au quotidien.": "essentials.",
  "Explorer la collection →": "Explore the collection →",
  "01 — BOUTIQUE SUR MESURE": "01 — CUSTOM STORE",
  "SHOPIFY · DESIGN · CONFIGURATION": "SHOPIFY · DESIGN · SETUP",
  "Du concept à la mise en ligne": "From concept to launch",
  "Une expérience conçue autour de vos clients.":
    "A shopping experience designed around your customers.",
  "ASSISTANCE DIGITALE": "DIGITAL ASSISTANCE",
  "DÉVELOPPEMENT WEB": "WEB DEVELOPMENT",
  "SUPPORT OPÉRATIONNEL": "OPERATIONS SUPPORT",
  "01 — À propos": "01 — About",
  "La technique au service": "Technology in service",
  "de vos idées.": "of your ideas.",
  "Polyvalent et orienté résultats, j’accompagne les projets e-commerce de la création de leur boutique à l’organisation des opérations du quotidien. Mon approche associe design, simplicité d’utilisation et attention portée au parcours client.":
    "Versatile and results-driven, I support e-commerce projects from store creation to day-to-day operations. My approach brings together thoughtful design, ease of use, and a focus on the customer journey.",
  "Mon expérience en développement logiciel complète mon travail sur Shopify : je comprends les enjeux techniques tout en gardant le cap sur une expérience fluide pour les visiteurs comme pour les équipes.":
    "My software development experience complements my Shopify work: I understand the technical side while keeping the experience smooth for both customers and teams.",
  "Échangeons sur vos besoins": "Let’s discuss what you need",
  "02 — Compétences": "02 — Skills",
  "Un profil polyvalent, des outils adaptés.": "A versatile skill set, the right tools.",
  "Des compétences e-commerce, techniques et créatives réunies pour faire avancer vos projets.":
    "E-commerce, technical, and creative skills to move your projects forward.",
  "Assistance virtuelle": "Virtual assistance",
  "Développement": "Development",
  "Création visuelle": "Visual content",
  "03 — Réalisations": "03 — Selected work",
  "Du concret, avec une attention aux détails.": "Thoughtful work, built with care.",
  "Quelques expériences représentatives de mon parcours professionnel.":
    "A selection of projects and experience from my professional journey.",
  "E-commerce · Depuis 2024": "E-commerce · Since 2024",
  "Boutiques Shopify": "Shopify stores",
  "Conception de boutiques Shopify fonctionnelles, connectées à CJ Dropshipping pour simplifier l’importation des produits, le traitement des commandes et la logistique.":
    "Design and setup of functional Shopify stores connected to CJ Dropshipping to simplify product imports, order processing, and logistics.",
  "Développement · Stage · 2017": "Development · Internship · 2017",
  "Application de test logiciel": "Software testing application",
  "Participation à la création d’un outil interne de test logiciel, avec un backend en C# / ASP.NET et une interface WPF, pour vérifier les applications avant leur mise en production.":
    "Contributed to an internal software testing tool, with a C# / ASP.NET backend and a WPF interface, to check applications before release.",
  "Technologies et domaines": "Technologies and areas",
  "Visuels d’illustration (Unsplash), et non des captures des boutiques clientes. Les URL ou captures des réalisations réelles pourront les remplacer.":
    "Illustrative Unsplash photos, not screenshots of client stores. Real project links or screenshots can replace them.",
  "04 — Parcours": "04 — Experience",
  "Un parcours entre technologie et commerce.": "A path between technology and commerce.",
  "Une formation scientifique et une expérience de terrain au service de solutions pratiques.":
    "A scientific education and hands-on experience, applied to practical solutions.",
  FORMATION: "EDUCATION",
  "Master II — ISPM": "Master’s degree — ISPM",
  "Institut Supérieur Polytechnique de Madagascar · en cours":
    "Institut Supérieur Polytechnique de Madagascar · in progress",
  "Baccalauréat série D · Lycée Privé Saint Joseph · 2012":
    "Science Baccalaureate · Lycée Privé Saint Joseph · 2012",
  "Depuis 2024": "Since 2024",
  "Shopify Designer": "Shopify Designer",
  "Elite Boutique · Les Visionnaires": "Elite Boutique · Les Visionnaires",
  "Création et configuration de boutiques Shopify, intégration de CJ Dropshipping et mise en place d’un parcours de vente clair.":
    "Shopify store creation and setup, CJ Dropshipping integration, and a clear customer journey.",
  "2017": "2017",
  "Stagiaire en développement logiciel": "Software Development Intern",
  "Orange Madagascar": "Orange Madagascar",
  "Contribution à une application de test logiciel avec un backend C# / ASP.NET et une interface WPF.":
    "Contributed to a software testing application with a C# / ASP.NET backend and a WPF interface.",
  "05 — Contact": "05 — Contact",
  "Un projet en tête ?": "Have a project in mind?",
  "Construisons-le ensemble.": "Let’s build it together.",
  "Décrivez-moi votre besoin. Je vous répondrai par e-mail pour discuter des prochaines étapes.":
    "Tell me what you have in mind. I’ll reply by email so we can discuss next steps.",
  "Retour en haut ↑": "Back to top ↑",
  "Assistant virtuel & Shopify Designer": "Virtual Assistant & Shopify Designer",
  "Créer un thème sombre": "Switch to dark mode",
  "Créer un thème clair": "Switch to light mode",
  "Passer le site en anglais": "Switch the site to English",
  "Passer le site en français": "Switch the site to French",
  "Passer en thème sombre": "Enable dark theme",
  "Passer en thème clair": "Enable light theme",
  "Votre nom": "Your name",
  "Nom et prénom": "Full name",
  "Votre e-mail": "Your email",
  "vous@exemple.com": "you@example.com",
  "Sujet": "Subject",
  "Choisissez un sujet": "Choose a subject",
  "Création de boutique Shopify": "Shopify store setup",
  "Assistance digitale": "Digital assistance",
  "Développement web": "Web development",
  "Autre demande": "Other",
  "Votre message": "Your message",
  "Parlez-moi brièvement de votre projet...":
    "Tell me a little about your project...",
  "Préparer mon e-mail": "Prepare email",
  "Ce formulaire ouvre votre application e-mail ; vos informations ne sont pas enregistrées sur ce site.":
    "This form opens your email app; your information is not stored on this site.",
  "Merci de vérifier les informations saisies.":
    "Please check the information you entered.",
  "Bonjour Vavaka,": "Hello Vavaka,",
  "Prise de contact": "New project inquiry",
  "Nom :": "Name:",
  "E-mail :": "Email:",
  "Votre application de messagerie va s’ouvrir avec votre message.":
    "Your email app will open with your message.",
};

interface PreferencesContextValue {
  language: PortfolioLanguage;
  theme: PortfolioTheme;
  setLanguage: (language: PortfolioLanguage) => void;
  setTheme: (theme: PortfolioTheme) => void;
}

const serverPreferences: PreferencesContextValue = {
  language: "fr",
  theme: "light",
  setLanguage,
  setTheme,
};

let currentPreferences: PreferencesContextValue = {
  ...serverPreferences,
  setLanguage,
  setTheme,
};
let preferencesLoaded = false;
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function readPreferences() {
  try {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    currentPreferences = {
      ...currentPreferences,
      ...(savedLanguage === "fr" || savedLanguage === "en"
        ? { language: savedLanguage }
        : {}),
      ...(savedTheme === "light" || savedTheme === "dark"
        ? { theme: savedTheme }
        : {}),
    };
  } catch (error) {
    console.error("Unable to read saved portfolio preferences.", error);
  }

  preferencesLoaded = true;
}

function subscribeToPreferences(listener: () => void) {
  listeners.add(listener);

  if (!preferencesLoaded) {
    readPreferences();
    queueMicrotask(notifyListeners);
  }

  function handleStorageChange(event: StorageEvent) {
    if (
      event.key === "portfolio-language" ||
      event.key === "portfolio-theme" ||
      event.key === null
    ) {
      readPreferences();
      notifyListeners();
    }
  }

  window.addEventListener("storage", handleStorageChange);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorageChange);
  };
}

function getPreferencesSnapshot() {
  return currentPreferences;
}

function getServerPreferencesSnapshot() {
  return serverPreferences;
}

function setPreference(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.error(`Unable to save portfolio preference "${key}".`, error);
  }
}

function setLanguage(language: PortfolioLanguage) {
  currentPreferences = { ...currentPreferences, language };
  setPreference("portfolio-language", language);
  notifyListeners();
}

function setTheme(theme: PortfolioTheme) {
  currentPreferences = { ...currentPreferences, theme };
  setPreference("portfolio-theme", theme);
  notifyListeners();
}

export function translate(text: string, language: PortfolioLanguage) {
  return language === "en" ? (translations[text] ?? text) : text;
}

export function PortfolioPreferencesProvider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

export function usePortfolioPreferences() {
  const preferences = useSyncExternalStore(
    subscribeToPreferences,
    getPreferencesSnapshot,
    getServerPreferencesSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = preferences.language;
  }, [preferences.language]);

  return preferences;
}
