# Portfolio de Vavaka Ratafika

Portfolio professionnel construit avec Next.js, TypeScript et Tailwind CSS.

## Développement local

```bash
npm ci
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Publication sur GitHub Pages

Le projet utilise l’export statique de Next.js. Chaque `npm run build` génère
le site publiable dans le dossier `out/`. Le workflow
`.github/workflows/deploy.yml` vérifie le code puis publie ce dossier sur
GitHub Pages à chaque mise à jour de la branche `main`.

Pour publier sur `https://niry1994.github.io` :

1. Créer le dépôt public `niry1994.github.io` sur le compte GitHub `niry1994`.
2. Relier ce dossier local au dépôt et pousser la branche `main`.
3. Dans les paramètres du dépôt, activer GitHub Pages avec la source
   **GitHub Actions**.
4. Après le premier déploiement réussi, consulter
   [https://niry1994.github.io](https://niry1994.github.io).

Le formulaire de contact ouvre le logiciel de messagerie du visiteur avec un
message prérempli ; aucun service d’envoi ou de stockage n’est configuré.
