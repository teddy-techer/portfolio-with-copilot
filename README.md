# Portfolio de Teddy Techer

Portfolio personnel réalisé avec Next.js, React et TypeScript.

## Développement local

Installe les dépendances puis démarre le serveur :

```bash
pnpm install
pnpm dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Personnalisation

- Contenu de la page : `app/page.tsx`
- Styles et mise en page responsive : `app/globals.css`
- Captures des projets : `public/projects/`
- Titre, description et partage social : `app/layout.tsx`
- Logo principal 3D : `public/logo-3d.png`
- Icônes officielles : `public/logo-mark.png` et `public/logo-mark-fond-sombre.png`
- Favicon et icônes navigateur / Apple : `app/favicon.ico`, `app/icon.png` et
  `app/apple-icon.png` (déclinés depuis l’icône principale)

Les coordonnées publiques sont l’adresse e-mail et le profil GitHub. Le numéro
de téléphone et le CV téléchargeable ne sont pas inclus.

## Vérification et production

```bash
pnpm lint
pnpm build
pnpm start
```

Le projet peut être déployé sur Vercel ou sur une plateforme compatible avec
Next.js.
