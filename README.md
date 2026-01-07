# OR AI - Site Web

Site vitrine professionnel pour OR AI, créé avec HTML/CSS/JavaScript.

## 📁 Fichiers du site

- `index.html` - Page principale
- `mentions-legales.html` - Page des mentions légales
- `politique-confidentialite.html` - Page de politique de confidentialité
- `styles.css` - Feuille de style complète
- `script.js` - Interactions JavaScript
- `OR-AI-AGENTS-FINAL-DARK.svg` - Logo (fond clair)
- `OR-AI-AGENTS-FINAL-LIGHT.svg` - Logo (fond sombre)

## ⚠️ À COMPLÉTER AVANT MISE EN LIGNE

Dans les fichiers `mentions-legales.html` et `politique-confidentialite.html`, remplacer :

1. `[Adresse complète - Cannes, France]` → Ton adresse complète
2. `[Prénom Nom]` → Ton prénom et nom (dans mentions-legales.html)
3. `952 672 111 00XXX` → Complète avec les 5 derniers chiffres de ton SIRET

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via GitHub (recommandée)

1. **Créer un repository GitHub**
   ```bash
   # Dans ton terminal (Mac/PC)
   cd [dossier contenant les fichiers du site]
   git init
   git add .
   git commit -m "Initial commit - OR AI website"
   ```

2. **Créer un nouveau repository sur GitHub.com**
   - Va sur github.com
   - Clique sur "New repository"
   - Nom : `orai-site` (ou autre nom)
   - Ne pas initialiser avec README (déjà créé)
   - Crée le repository

3. **Pusher ton code**
   ```bash
   git remote add origin https://github.com/[ton-username]/orai-site.git
   git push -u origin main
   ```

4. **Déployer sur Vercel**
   - Va sur vercel.com
   - Connecte-toi avec GitHub
   - Clique sur "Import Project"
   - Sélectionne ton repository `orai-site`
   - Clique sur "Deploy"
   - ✅ Ton site est en ligne !

### Méthode 2 : Via Vercel CLI (plus rapide)

1. **Installer Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Déployer**
   ```bash
   cd [dossier contenant les fichiers du site]
   vercel
   ```
   
3. Suivre les instructions :
   - Login avec ton compte Vercel
   - Accepter les paramètres par défaut
   - ✅ Ton site est en ligne !

### Méthode 3 : Via l'interface Vercel (plus simple)

1. Va sur vercel.com
2. Clique sur "Add New" → "Project"
3. Glisse-dépose le dossier complet contenant tous les fichiers
4. Clique sur "Deploy"
5. ✅ Ton site est en ligne !

## 🔧 Personnalisation

### Changer les couleurs

Dans `styles.css`, modifier les variables CSS en haut du fichier :

```css
:root {
    --color-primary: #0A0E27;      /* Couleur principale */
    --color-secondary: #1E3A8A;    /* Couleur secondaire */
    --color-accent: #3B82F6;       /* Couleur d'accent */
}
```

### Modifier le contenu

Tous les textes sont directement dans les fichiers HTML. Tu peux les modifier avec n'importe quel éditeur de texte :
- VS Code (recommandé)
- Sublime Text
- Notepad++
- Ou même le Bloc-notes

### Ajouter Google Analytics (plus tard)

Si tu veux ajouter Google Analytics, ajoute ce code juste avant `</head>` dans tous les fichiers HTML :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📱 Responsive

Le site est 100% responsive et s'adapte automatiquement aux :
- Ordinateurs (desktop)
- Tablettes
- Smartphones

## ✅ Checklist avant lancement

- [ ] Compléter les informations légales (adresse, nom, SIRET)
- [ ] Vérifier que tous les liens fonctionnent
- [ ] Tester le site sur mobile
- [ ] Vérifier le lien email dans le bouton CTA
- [ ] Déployer sur Vercel
- [ ] Configurer le nom de domaine (si tu en as un)

## 🆘 Besoin d'aide ?

Si tu bloques sur quelque chose :
1. Vérifie que tous les fichiers sont bien dans le même dossier
2. Vérifie que les noms de fichiers correspondent exactement (majuscules/minuscules)
3. Ouvre la console du navigateur (F12) pour voir les erreurs éventuelles

## 🎨 Crédits

- Design & Développement : Claude + Pauline
- Typographies : Google Fonts (Work Sans, Space Mono)
- Hébergement : Vercel
- Code : HTML5, CSS3, JavaScript ES6

---

**Bon déploiement ! 🚀**
