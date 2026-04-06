# Portfolio de Singteube Leuferbe

Un portfolio moderne et responsive pour Singteube Leuferbe, développeur web freelance spécialisé en Django/Python, HTML, CSS, MySQL et installation réseau informatique.

## Description

Ce site web présente les compétences, projets, expériences et services de Singteube Leuferbe. Il est conçu avec un design sombre moderne, des animations subtiles et une interactivité pour attirer les clients potentiels.

## Fonctionnalités

- **Header avec carrousel** : Images défilant automatiquement pour un impact visuel.
- **Navigation responsive** : Menu avec liens d'ancrage vers les sections.
- **Sections détaillées** :
  - À propos : Présentation avec photo et bouton de téléchargement CV.
  - Expérience & Éducation : Timeline des parcours professionnels.
  - Services : Cartes avec icônes pour chaque service offert.
  - Projets : Carrousel horizontal des projets réalisés.
  - Témoignages : Carrousel des avis clients.
  - Contact : Formulaire avec validation et envoi d'email via EmailJS.
- **Animations** : Fade-in au scroll, carrousels infinis.
- **Thème sombre** : Design cohérent avec dégradé bleu foncé.
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop).
- **SEO basique** : Meta description pour une meilleure visibilité.

## Technologies utilisées

- **HTML5** : Structure du site.
- **CSS3** : Styles avec Tailwind CSS pour un design moderne et responsive.
- **JavaScript** : Interactivité (carrousels, validation formulaire, animations).
- **Tailwind CSS** : Framework CSS utilitaire pour le styling rapide.
- **Font Awesome** : Icônes pour les services et sections.
- **EmailJS** : Envoi d'emails depuis le formulaire de contact.
- **Unsplash** : Images libres de droits pour le carrousel et la photo de profil.

## Installation et Configuration

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, etc.).
- Un éditeur de code pour modifications (VS Code recommandé).

### Étapes
1. **Cloner ou télécharger le projet** :
   ```
   git clone https://github.com/votre-repo/portfolio-singteube.git
   cd portfolio-singteube
   ```

2. **Ouvrir le site** :
   - Ouvrez `index.html` directement dans votre navigateur.
   - Ou lancez un serveur local :
     ```
     python -m http.server 8000
     ```
     Puis accédez à `http://localhost:8000`.

3. **Configurer EmailJS pour le formulaire** :
   - Inscrivez-vous sur [EmailJS](https://www.emailjs.com/).
   - Créez un service email (ex. : Gmail).
   - Créez un template d'email avec les variables suivantes :
     - `{{from_name}}` : Nom de l'expéditeur.
     - `{{from_email}}` : Email de l'expéditeur.
     - `{{message}}` : Message.
     - `{{to_email}}` : Votre email (singteubeleuferbe@gmail.com).
   - Récupérez votre `PUBLIC_KEY`, `SERVICE_ID` et `TEMPLATE_ID`.
   - Dans `styles/js/script.js`, remplacez :
     ```javascript
     emailjs.init('YOUR_PUBLIC_KEY');
     // ...
     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ...)
     ```

4. **Personnaliser le contenu** :
   - **Images** : Remplacez les URLs Unsplash par vos propres images (ex. : photo réelle dans `about`).
   - **Texte** : Modifiez les sections dans `index.html` (expérience, projets, etc.).
   - **CV** : Ajoutez un fichier `cv.pdf` à la racine pour le bouton de téléchargement.
   - **Liens sociaux** : Mettez à jour les URLs dans le footer.

## Structure du projet

```
portfolio-singteube/
├── index.html          # Page principale
├── styles/
│   ├── css/
│   │   └── style.css   # Styles personnalisés (carrousels, animations)
│   └── js/
│       └── script.js   # JavaScript pour interactivité
└── README.md           # Ce fichier
```

## Utilisation

- **Navigation** : Utilisez le menu pour accéder aux sections.
- **Carrousels** : Ils défilent automatiquement ; survolez pour les arrêter.
- **Formulaire** : Remplissez et envoyez pour contacter directement via email.
- **Responsive** : Testez sur différents appareils pour voir l'adaptation.

## Améliorations futures

- Intégrer un CMS pour gérer le contenu dynamiquement.
- Ajouter une section blog pour partager des articles.
- Implémenter des tests automatisés pour le JavaScript.
- Optimiser les performances (lazy loading des images).

## Contribution

Les contributions sont les bienvenues ! Ouvrez une issue ou une pull request sur GitHub.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Contact

Singteube Leuferbe  
Email : singteubeleuferbe@gmail.com  
Téléphone : +235 63 28 18 80  
LinkedIn : [Votre profil](https://linkedin.com/in/singteube)  
GitHub : [Votre repo](https://github.com/singteube)</content>
<parameter name="filePath">c:\Users\PowerTIC\desktop\prodperso\README.md