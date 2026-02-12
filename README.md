# Site Web Menu - Structure du Projet

## Description
Site web fixe présentant un menu avec 4 onglets (Délices, Boissons, Découvertes, Formules) et un système de commande (À emporter / À domicile).

## Structure des Fichiers

```
projet/
│
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript (interactions)
├── README.md           # Ce fichier
│
└── assets/             # Dossier pour les images
    ├── background.jpg  # Image de fond de la page
    │
    ├── delices/        # Images des délices (6 images)
    │   ├── delice1.jpg
    │   ├── delice2.jpg
    │   ├── delice3.jpg
    │   ├── delice4.jpg
    │   ├── delice5.jpg
    │   └── delice6.jpg
    │
    ├── boissons/       # Images des boissons (4 images)
    │   ├── boisson1.jpg
    │   ├── boisson2.jpg
    │   ├── boisson3.jpg
    │   └── boisson4.jpg
    │
    ├── decouvertes/    # Images des découvertes (4 images)
    │   ├── decouverte1.jpg
    │   ├── decouverte2.jpg
    │   ├── decouverte3.jpg
    │   └── decouverte4.jpg
    │
    └── formules/       # Images des formules (3 images)
        ├── formule1.jpg
        ├── formule2.jpg
        └── formule3.jpg
```

## Installation sur GitHub

1. **Créer le dépôt GitHub**
   - Créez un nouveau dépôt sur GitHub
   - Nommez-le comme vous le souhaitez (ex: "menu-website")

2. **Cloner et ajouter les fichiers**
   ```bash
   git clone https://github.com/votre-username/menu-website.git
   cd menu-website
   ```

3. **Copier les fichiers**
   - Copiez `index.html`, `styles.css`, `script.js` et `README.md` dans le dossier

4. **Créer la structure du dossier assets**
   ```bash
   mkdir -p assets/delices assets/boissons assets/decouvertes assets/formules
   ```

5. **Ajouter vos images**
   - Placez votre image de fond dans `assets/background.jpg`
   - Placez les images des produits dans les sous-dossiers correspondants
   - Respectez les noms de fichiers indiqués ci-dessus

6. **Pousser vers GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - Structure du site"
   git push origin main
   ```

## Activer GitHub Pages

1. Allez dans les **Settings** de votre dépôt
2. Cliquez sur **Pages** dans le menu latéral
3. Sous **Source**, sélectionnez la branche `main` et le dossier `/ (root)`
4. Cliquez sur **Save**
5. Votre site sera accessible à : `https://votre-username.github.io/menu-website/`

## Personnalisation

### Modifier les informations de contact (À emporter)
Dans `index.html`, ligne ~156-159, modifiez :
- L'adresse
- Le numéro de téléphone

### Modifier le lien Uber Eats
Dans `script.js`, ligne ~171, remplacez l'URL par votre lien Uber Eats réel :
```javascript
window.open('https://www.ubereats.com/votre-restaurant', '_blank');
```

### Modifier les produits
Dans `script.js`, lignes 1-90, modifiez les données des produits :
- `title` : nom du produit
- `description` : description détaillée
- `price` : prix
- `image` : chemin de l'image

### Modifier les couleurs
Dans `styles.css`, lignes 9-14, modifiez les variables CSS :
```css
--primary-color: #d4a574;    /* Couleur primaire */
--secondary-color: #8b6f47;  /* Couleur secondaire */
--dark-color: #2c2416;       /* Couleur sombre */
```

## Fonctionnalités

- ✅ Navigation par onglets (4 sections)
- ✅ Grille de produits cliquables
- ✅ Modal détaillé pour chaque produit
- ✅ Système de commande (À emporter / À domicile)
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations fluides
- ✅ Image de fond personnalisable

## Support Navigateurs

- Chrome (recommandé)
- Firefox
- Safari
- Edge

## Licence

Projet libre d'utilisation.

## Paiement Stripe (mode test)

Le front est prêt pour Stripe Checkout en mode test.

### 1) Configurer `stripe-config.js`

Le fichier `stripe-config.js` est versionné pour éviter une erreur 404 en production (GitHub Pages).

Mettez à jour :
- `publishableKey` = votre clé publique Stripe (`pk_test_...`) ;
- `checkoutEndpoint` = endpoint backend qui crée la session Checkout.

> Le fichier ne doit contenir **que** des informations publiques (jamais `sk_test_...`).

### 2) Clé secrète Stripe

Ne jamais mettre la clé secrète (`sk_test_...`) dans le front (`index.html`, `script.js`) ni dans GitHub.

Utilisez-la uniquement côté serveur (backend), via variable d'environnement, par exemple :

```bash
export STRIPE_SECRET_KEY="sk_test_..."
```

### 3) Endpoint backend attendu

Le front envoie un `POST` JSON vers `checkoutEndpoint` et attend la réponse :

```json
{ "sessionId": "cs_test_..." }
```

Ensuite le navigateur redirige automatiquement vers Stripe Checkout.
