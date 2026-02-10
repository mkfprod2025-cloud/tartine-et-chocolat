// Données des produits
const productsData = {
    // Délices
    delice1: {
        title: "Crumble Pomme et Cannelle",
        description: "Un délicieux crumble aux pommes préparé avec des pommes fraîches et une pâte craquante maison.",
        price: "10€",
        image: "assets/Crumblevid.mp4",
        media_type: "video" // ou "video"
    },
    delice2: {
        title: "gateau au chocolat",
        description: "un recomfortant Gateau au Chocolat moelleux au coeur tendre.",
        price: "11€",
        image: "assets/fondantchovid.mp4",
        media_type: "video"
    },
    delice3: {
        title: "Tarte Tatin",
        description:"la celebre tarte des soeurs Tatin avec sa pipette de crème fraiche",
        price: "13.00€",
        image: "assets/tatinvid.mp4",
        media_type: "video"
    },
    delice4: {
        title: "La Tartine Campagnarde",
        description: "la grosse tartine qui tient au corps , pain campagnard, fromage frais , herbes fines, jambon blanc ou de poulet , pistache.",
        price: "13€",
        image: "assets/campavid.mp4",
        media_type: "video"
    },
    delice5: {
        title: "La Tartine Méditerranéenne",
        description: "Un mélange mediterranéen de houmous (pois chiches , purée de sésame , citron ,ail , huile d’olive ,cumin moulu) et de saumon sur un fin pain tendre .",
        price: "16€",
        image: "assets/maraivid.mp4",
        media_type: "video"
    },
    delice6: {
        title: "La Maraichère",
        description: "La tartine végé , des légumes de saisons cuisinés sur un pain a foccacia fluffy.",
        price: "12€",
        image: "assets/vrgivid.mp4",
        media_type: "video"
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
        // Pause vidéo si elle existe
        const video = document.querySelector('#modalMediaContainer video');
        if (video) {
            video.pause();
        }
        
        productModal.style.display = 'none';
        orderModal.style.display = 'none';
        takeawayModal.style.display = 'none';
    });
});

// Fermer en cliquant à l'extérieur
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        // Pause vidéo si elle existe
        const video = document.querySelector('#modalMediaContainer video');
        if (video) {
            video.pause();
        }
        
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
            const modalMediaContainer = document.getElementById('modalMediaContainer');
            
            // Vider le conteneur
            modalMediaContainer.innerHTML = '';
            
            // Créer l'élément approprié selon le type de média
            if (product.media_type === 'video') {
                const video = document.createElement('video');
                video.src = product.image;
                video.controls = true;
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.id = 'modalMedia';
                modalMediaContainer.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                img.id = 'modalMedia';
                modalMediaContainer.appendChild(img);
            }
            
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
