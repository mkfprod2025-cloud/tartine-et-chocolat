// Données des produits
const productsData = {
    // Délices
    delice1: {
        title: "Crumble Pomme et Cannelle",
        description: "Un délicieux crumble aux pommes préparé avec des pommes fraîches et une pâte craquante maison.",
        price: "10€",
        image: "assets/crumblevid.mp4",
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
        image: "assets/vegivid.mp4",
        media_type: "video"
    },

    // Boissons
    boisson1: {
        title: "Nos spécialité de café glacé ",
        description: "ice coffee, latté, frappé sucré celon votre convenance ",
        price: "de 7€ a 12€",
        image: "assets/coffeevid.mp4",
             media_type: "video"
    },
    boisson2: {
        title: "Thé Glacé Maison",
        description: "Thé glacé fait maison infusé, menthe-jasmin, fruit rouge-miel, rooïbos peche. Rafraîchissant et désaltérant.",
        price: "8.50€",
        image: "assets/icetvid.mp4",
         media_type: "video"
    },
    boisson3: {
        title: "les jus de fruits centrifugés ",
        description: "pommes, carottes, oranges pressées à la commande ",
        price: "8.5€", 
        image: "assets/centrivid.mp4",
          media_type: "video"
    },
    boisson4: {
        title: "nos smoothies au fruit ",
        description: "Smoothie vitaminé aux fruits  , mixés avec du fromage blanc 0% , du lait et une touche de miel.(ananas coco, fruits rouges, banane)",
        price: "9.50€",
        image: "assets/smootvid.mp4",
        media_type: "video"
    },

    // Découvertes
    decouverte1: {
        title: "La Tarte aux myrtilles",
        description: "Une belle part de tarte aux myrtilles façon grand-mère avec une pate épaisse et gourmandes pour rasurer ses apres-midi.",
        price: "11€",
        image: "assets/myrtvid.mp4",
          media_type: "video"
    },
    decouverte2: {
        title: "La soupe de saison",
        description: "une soupe réchauffante d'hivers pour les mornes soirées de pluie et de froid des legumes de saoisons mijoté avec beaucoup d'amour et d'épices",
        price: "10.50€",
        image: "assets/soupvid.mp4",
        media_type: "video"
    },
    decouverte3: {
        title: "matcha latte",
        description: "Un doux matcha au lait de votre choix a agrémenter de sirops aux saveurs mutiples",
        price: "9.50€",
        image: "assets/matchavid.mp4",
        media_type: "video"
    },
    decouverte4: {
        title: "notre jus star du moment ",
        description: "notre composition du moment au grès du marché : pomme, concombre, menthe.testez jugez rapportez nous votre avis",
        price: "9.50€",
        image: "assets/jusmoisvid.mp4",
        media_type: "video"     
    },

    // Formules
    formule1: {
        title: "Formuleéquilibré",
        description: "Formule complète comprenant :une petite tartine salé, une petite patisserie et une boisson.",
        price: "17€",
        image: "assets/form1couv.jpg",
        media_type: "image"
    },
    formule2: {
        title: "Formule Gouté à deux",
        description: "Formule pour les gourmands : 2 pâtisseries au choix parmi notre sélection + 2 boisson froide et un p'ti plus a partager .",
        price: "24€",
        image: "assets/form2couv.jpg",
        media_type: "image"
    },
    formule3: {
        title: "Formule Brunch Club",
        description: "Formule Brunch Club :2 tartines salées, 2 desserts, 2 boissons aux choix et une decouverte surprise  ",
        price: "55€",
        image: "assets/formules/formule3.jpg",
        media_type: "image"
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
