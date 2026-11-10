<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Règles de développement — Atelier

## Objectif du projet

Construire progressivement une plateforme e-commerce en français avec Next.js
(App Router), TypeScript et Tailwind CSS. Chaque étape doit rester compréhensible
et utilisable avant d'ajouter la suivante.

## Règles générales

- Lire les guides Next.js installés dans `node_modules/next/dist/docs/` avant
  d'utiliser une API Next.js qui n'est pas déjà présente dans le projet.
- Garder TypeScript strict ; préférer des types explicites et des validations
  claires aux conversions forcées.
- Utiliser des composants serveur par défaut. Ajouter `"use client"` seulement
  lorsqu'un état, un gestionnaire d'événement ou une API du navigateur est
  réellement nécessaire.
- Utiliser Tailwind pour la mise en page et les composants ; réserver le CSS
  global aux styles partagés, aux détails visuels complexes et aux animations.
- Garder les composants d'interface réutilisables dans `src/components/`,
  regroupés par domaine ou surface (par exemple `marketing/` et `dashboard/`).
- Garder les routes et leurs compositions dans `src/app/`. Ne pas placer toute
  l'application dans un unique fichier de page.
- Mettre à jour les métadonnées et les textes accessibles quand une page évolue.
- N'ajouter une dépendance que si elle apporte une valeur nécessaire et après
  avoir vérifié si le projet possède déjà une solution adaptée.
- Ne jamais ajouter de secret, jeton ou clé privée au dépôt ou au code client.
- Avant de terminer une étape, lancer `npm run lint`, `npm run typecheck` et
  `npm run build`, puis expliquer comment vérifier manuellement le résultat.

## Préparation des intégrations (pas encore implémentées)

- `src/lib/supabase/` : clients Supabase serveur/navigateur et types de base de
  données ; les secrets restent côté serveur.
- `src/lib/providers/` : interfaces et adaptateurs pour les paiements, la
  livraison, les e-mails et les autres fournisseurs externes.
- `src/lib/mcp/` : accès MCP côté serveur, outils autorisés et validation des
  entrées/sorties. Ne jamais exposer un accès MCP au navigateur.
- `src/features/` : règles métier par domaine (catalogue, commandes, boutique)
  quand ces domaines auront une implémentation réelle.
- Les routes et composants consomment ces interfaces ; ils ne doivent pas
  dépendre directement d'un fournisseur externe.
- Ne créer ces modules qu'au moment de leur étape dédiée ; ne pas simuler une
  connexion ou une opération métier par une intégration fictive.

## Étapes et vérifications

1. **Fondations et accueil** : vérifier `npm run lint`, `npm run typecheck`,
   `npm run build`, puis lancer `npm run dev` et consulter `http://localhost:3000`.
   Vérifier les liens de navigation et l'affichage sur petit écran.
2. **Tableau de bord marchand** : ajouter la route et les composants du tableau
   de bord, en commençant par des données de démonstration explicitement
   identifiées ; répéter les vérifications de l'étape 1.
3. **Données et intégrations** : ajouter une intégration à la fois, documenter
   sa configuration locale sans publier de secrets, et vérifier les cas de
   succès, d'erreur et d'absence de configuration.
