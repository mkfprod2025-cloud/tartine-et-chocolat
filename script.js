// Données des produits
const productsData = {
    // Délices
    delice1: {
        title: "crumble pomme et Cannelle",
        description: "Un délicieux crumble aux pommes préparé avec des pommes fraîches et une pates craquante maison.",
        price: "10€",
        image: "assets/delices/delice1.jpg"
    },
    delice2: {
        title: "Éclair au Chocolat",
        description: "Éclair traditionnel garni d'une onctueuse crème pâtissière au chocolat noir et recouvert d'un glaçage brillant au cacao.",
        price: "3.80€",
        image: "assets/delices/delice2.jpg"
    },
    delice3: {
        title: "Macaron Assortis",
        description: "Boîte de 6 macarons aux saveurs variées : framboise, pistache, chocolat, vanille, citron et caramel. Croquants à l'extérieur, moelleux à l'intérieur.",
        price: "12.00€",
        image: "assets/delices/delice3.jpg"
    },
    delice4: {
        title: "Croissant Beurre",
        description: "Croissant pur beurre croustillant et feuilleté, cuit au four chaque matin. La perfection à la française pour votre petit-déjeuner.",
        price: "1.50€",
        image: "assets/delices/delice4.jpg"
    },
    delice5: {
        title: "Mille-feuille",
        description: "Trois couches de pâte feuilletée croustillante intercalées de crème pâtissière vanille, le tout surmonté d'un glaçage fondant.",
        price: "5.20€",
        image: "assets/delices/delice5.jpg"
    },
    delice6: {
        title: "Fraisier",
        description: "Génoise moelleuse garnie de crème mousseline et de fraises fraîches, recouverte d'une fine couche de pâte d'amande verte.",
        price: "6.00€",
        image: "assets/delices/delice6.jpg"
    },

    // Boissons
    boisson1: {
        title: "Café Espresso",
        description: "Espresso italien corsé préparé avec des grains 100% Arabica torréfiés artisanalement. Court, intense et aromatique.",
        price: "2.50€",
        image: "assets/boissons/boisson1.jpg"
    },
    boisson2: {
        title: "Thé Glacé Maison",
        description: "Thé glacé fait maison infusé avec du thé vert bio, menthe fraîche et une touche de citron. Rafraîchissant et désaltérant.",
        price: "3.50€",
        image: "assets/boissons/boisson2.jpg"
    },
    boisson3: {
        title: "Chocolat Chaud",
        description: "Chocolat chaud onctueux préparé avec du chocolat noir 70% de cacao, lait entier et une pointe de chantilly maison.",
        price: "4.00€",
        image: "assets/boissons/boisson3.jpg"
    },
    boisson4: {
        title: "Smoothie Fruits Rouges",
        description: "Smoothie vitaminé aux fruits rouges frais : fraises, framboises et myrtilles, mixés avec du yaourt nature et une touche de miel.",
        price: "5.50€",
        image: "assets/boissons/boisson4.jpg"
    },

    // Découvertes
    decouverte1: {
        title: "Paris-Brest",
        description: "Pâte à choux en couronne garnie d'une délicate crème mousseline pralinée aux noisettes, parsemée d'amandes effilées.",
        price: "5.80€",
        image: "assets/decouvertes/decouverte1.jpg"
    },
    decouverte2: {
        title: "Saint-Honoré",
        description: "Pâtisserie classique composée d'une base de pâte feuilletée, choux caramélisés et crème chiboust vanillée. Un grand classique revisité.",
        price: "6.50€",
        image: "assets/decouvertes/decouverte2.jpg"
    },
    decouverte3: {
        title: "Religieuse",
        description: "Deux choux superposés garnis de crème pâtissière au café, nappés de fondant et décorés d'une rose en crème au beurre.",
        price: "4.80€",
        image: "assets/decouvertes/decouverte3.jpg"
    },
    decouverte4: {
        title: "Opéra",
        description: "Entremets raffiné composé de biscuit Joconde imbibé de sirop café, crème au beurre café et ganache chocolat. Un chef-d'œuvre.",
        price: "6.80€",
        image: "assets/decouvertes/decouverte4.jpg"
    },

    // Formules
    formule1: {
        title: "Formule Petit-Déjeuner",
        description: "Formule complète comprenant : 1 croissant ou 1 pain au chocolat + 1 boisson chaude au choix + 1 jus d'orange frais pressé.",
        price: "8.50€",
        image: "assets/formules/formule1.jpg"
    },
    formule2: {
        title: "Formule Gourmande",
        description: "Formule pour les gourmands : 2 pâtisseries au choix parmi notre sélection + 1 boisson chaude ou froide + 1 macaron offert.",
        price: "14.00€",
        image: "assets/formules/formule2.jpg"
    },
    formule3: {
        title: "Formule Découverte",
        description: "Formule dégustation : 1 pâtisserie de la semaine + 1 boisson signature du chef + 1 mini viennoiserie. Parfait pour découvrir nos créations.",
        price: "11.50€",
        image: "assets/formules/formule3.jpg"
    }
};

// Gestion des onglets
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons et panneaux
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');

        // Afficher le panneau correspondant
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Gestion des modals
const productModal = document.getElementById('productModal');
const orderModal = document.getElementById('orderModal');
const takeawayModal = document.getElementById('takeawayModal');

// Boutons de fermeture
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        productModal.style.display = 'none';
        orderModal.style.display = 'none';
        takeawayModal.style.display = 'none';
    });
});

// Fermer en cliquant à l'extérieur
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Gestion des cartes produits
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-product');
        const product = productsData[productId];

        if (product) {
            document.getElementById('modalImage').src = product.image;
            document.getElementById('modalTitle').textContent = product.title;
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalPrice').textContent = product.price;

            productModal.style.display = 'block';
        }
    });
});

// Bouton Commander
const orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', () => {
    orderModal.style.display = 'block';
});

// Options de commande
const takeawayOption = document.getElementById('takeawayOption');
const deliveryOption = document.getElementById('deliveryOption');

takeawayOption.addEventListener('click', () => {
    orderModal.style.display = 'none';
    takeawayModal.style.display = 'block';
});

deliveryOption.addEventListener('click', () => {
    // Redirection vers Uber Eats
    // Remplacer l'URL par votre véritable lien Uber Eats
    window.open('https://www.ubereats.com/', '_blank');
    orderModal.style.display = 'none';
});

// Animation au scroll (optionnel)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
