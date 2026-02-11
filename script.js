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
        title: "nos smoothies aux fruits ",
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
        title: "Formule équilibré",
        description: "Formule complète comprenant :une petite tartine salé, une petite patisserie et une boisson.",
        price: "17€",
        image: "assets/form1couv.png",
        media_type: "image"
    },
    formule2: {
        title: "Formule Gouté à deux",
        description: "Formule pour les gourmands : 2 pâtisseries au choix parmi notre sélection + 2 boisson froide et un p'ti plus a partager .",
        price: "24€",
        image: "assets/form2vid.mp4",
        media_type: "video"
    },
    formule3: {
        title: "Formule Brunch Club",
        description: "Formule Brunch Club :2 tartines salées, 2 desserts, 2 boissons aux choix et une decouverte surprise  ",
        price: "55€",
        image: "assets/form3vid.mp4",
        media_type: "video"
    }
};

// Gestion des onglets
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

const openTab = (tabId) => {
    tabPanes.forEach(pane => pane.classList.remove('active'));

    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    tabButtons.forEach(btn => {
        const isActive = btn.getAttribute('data-tab') === tabId;
        btn.classList.toggle('active', isActive);
    });
};

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        openTab(tabId);
    });
});

const secondaryTabButtons = document.querySelectorAll('[data-target-tab]');
secondaryTabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-target-tab');
        openTab(tabId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Gestion des modals
const productModal = document.getElementById('productModal');
const orderModal = document.getElementById('orderModal');
const takeawayModal = document.getElementById('takeawayModal');
const cartModal = document.getElementById('cartModal');

const addToCartBtn = document.getElementById('addToCartBtn');
const cartItemsContainer = document.getElementById('cartItems');
const orderTypeInput = document.getElementById('orderType');
const customerNameInput = document.getElementById('customerName');
< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
const customerPhoneInput = document.getElementById('customerPhone');
> main
const customerNotesInput = document.getElementById('customerNotes');

const cartOption = document.getElementById('cartOption');
const deliveryOption = document.getElementById('deliveryOption');
const whatsappOption = document.getElementById('whatsappOption');
const telegramOption = document.getElementById('telegramOption');

const sendRestaurantBtn = document.getElementById('sendRestaurantBtn');
const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
const sendTelegramBtn = document.getElementById('sendTelegramBtn');
const openUberBtn = document.getElementById('openUberBtn');

const WHATSAPP_PHONE = '33123456789';
const TELEGRAM_USER = 'tartineetchocolat';
const UBER_EATS_URL = 'https://www.ubereats.com/';

< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs

const supplementCatalog = {
    salty: [
        { id: 'avocat', label: 'Avocat', price: '+2.00€' },
        { id: 'saumon-fume', label: 'Saumon fumé', price: '+3.50€' },
        { id: 'fromage-frais', label: 'Fromage frais', price: '+1.50€' },
        { id: 'oeuf-poche', label: 'Œuf poché', price: '+1.80€' }
    ],
    sweet: [
        { id: 'chantilly', label: 'Chantilly', price: '+1.20€' },
        { id: 'coulis-chocolat', label: 'Coulis chocolat', price: '+1.50€' },
        { id: 'glace-vanille', label: 'Boule glace vanille', price: '+2.00€' }
    ],
    drink: [
        { id: 'shot-espresso', label: 'Shot espresso', price: '+1.00€' },
        { id: 'lait-vegetal', label: 'Lait végétal', price: '+0.80€' },
        { id: 'sirop-maison', label: 'Sirop maison', price: '+0.70€' }
    ]
};

const productSupplementPanels = {
    delice1: 'sweet',
    delice2: 'sweet',
    delice3: 'sweet',
    delice4: 'salty',
    delice5: 'salty',
    delice6: 'salty',
    boisson1: 'drink',
    boisson2: 'drink',
    boisson3: 'drink',
    boisson4: 'drink',
    decouverte1: 'sweet',
    decouverte2: 'salty',
    decouverte3: 'drink',
    decouverte4: 'drink',
    formule1: 'salty',
    formule2: 'sweet',
    formule3: 'salty'
};

const getSupplementOptions = (productId) => {
    const panel = productSupplementPanels[productId] || 'salty';
    return supplementCatalog[panel] || [];
};
> main
let selectedProductId = null;
let cart = [];

const formatCartMessage = () => {
    if (!cart.length) {
        return 'Bonjour, je souhaite passer commande. Mon panier est vide pour le moment.';
    }

< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
    const lines = cart.flatMap(item => {
        const supplementLine = item.supplements.length
            ? `  • Suppléments: ${item.supplements.map(s => `${s.label} ${s.price}`).join(', ')}`
            : null;
        return supplementLine
            ? [`- ${item.qty} x ${item.title} (${item.price})`, supplementLine]
            : [`- ${item.qty} x ${item.title} (${item.price})`];
    });
    const orderType = orderTypeInput.value;
    const customerName = customerNameInput.value.trim() || 'Non renseigné';
    const customerPhone = customerPhoneInput.value.trim() || 'Non renseigné';
    const lines = cart.map(item => `- ${item.qty} x ${item.title} (${item.price})`);
    const orderType = orderTypeInput.value;
    const customerName = customerNameInput.value.trim() || 'Non renseigné';> main
    const customerNotes = customerNotesInput.value.trim() || 'Aucune';

    return [
        'Bonjour Tartine et Chocolat,',
        'Voici ma commande :',
        ...lines,
        '',
        `Mode: ${orderType}`,
        `Nom: ${customerName}`,
< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
        `Téléphone: ${customerPhone}`,> main
        `Notes: ${customerNotes}`
    ].join('\n');
};

const updateCartView = () => {
    if (!cart.length) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Votre panier est vide. Ajoutez un article depuis une fiche produit.</p>';
        return;
    }

< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
    cartItemsContainer.innerHTML = cart.map(item => {
        const supplementOptions = getSupplementOptions(item.id);
        const supplementInputs = supplementOptions.map(option => {
            const checked = item.supplements.some(s => s.id === option.id) ? 'checked' : '';
            return `<label class="supplement-option"><input type="checkbox" data-action="toggle-supplement" data-item-id="${item.id}" data-supp-id="${option.id}" ${checked}> ${option.label} <span>${option.price}</span></label>`;
        }).join('');

        return `
    cartItemsContainer.innerHTML = cart.map(item => `> main
        <div class="cart-item-row">
            <div>
                <strong>${item.title}</strong><br>
                <small>${item.price}</small>
< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
                <div class="supplement-panel">
                    <p>Suppléments disponibles :</p>
                    <div class="supplement-grid">${supplementInputs}</div>
                </div> > main
            </div>
            <div class="cart-item-actions">
                <button class="qty-button" data-action="decrease" data-id="${item.id}">-</button>
                <span>${item.qty}</span>
                <button class="qty-button" data-action="increase" data-id="${item.id}">+</button>
            </div>
        </div>
< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
    `;
    }).join('');
    `).join('');> main
};

cartItemsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.qty-button');
    if (!button) {
        return;
    }

< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
    const action = button.getAttribute('data-action');
    const itemId = button.getAttribute('data-id');
    const itemId = button.getAttribute('data-id');
    const action = button.getAttribute('data-action');> main
    const item = cart.find(entry => entry.id === itemId);

    if (!item) {
        return;
    }

    if (action === 'increase') {
        item.qty += 1;
    } else if (action === 'decrease') {
        item.qty -= 1;
        if (item.qty <= 0) {
            cart = cart.filter(entry => entry.id !== itemId);
        }
    }

    updateCartView();
});
< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs

cartItemsContainer.addEventListener('change', (event) => {
    const checkbox = event.target.closest('input[data-action="toggle-supplement"]');
    if (!checkbox) {
        return;
    }

    const itemId = checkbox.getAttribute('data-item-id');
    const supplementId = checkbox.getAttribute('data-supp-id');
    const item = cart.find(entry => entry.id === itemId);
    if (!item) {
        return;
    }

    const supplement = getSupplementOptions(itemId).find(option => option.id === supplementId);
    if (!supplement) {
        return;
    }

    if (checkbox.checked) {
        const exists = item.supplements.some(entry => entry.id === supplementId);
        if (!exists) {
            item.supplements.push(supplement);
        }
    } else {
        item.supplements = item.supplements.filter(entry => entry.id !== supplementId);
    }
});
=======
> main

// Boutons de fermeture
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const video = document.querySelector('#modalMediaContainer video');
        if (video) {
            video.pause();
        }

        productModal.style.display = 'none';
        orderModal.style.display = 'none';
        takeawayModal.style.display = 'none';
        cartModal.style.display = 'none';
    });
});

// Fermer en cliquant à l'extérieur
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
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
            selectedProductId = productId;
            const modalMediaContainer = document.getElementById('modalMediaContainer');
            modalMediaContainer.innerHTML = '';

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

addToCartBtn.addEventListener('click', () => {
    if (!selectedProductId) {
        return;
    }

    const product = productsData[selectedProductId];
    const existing = cart.find(item => item.id === selectedProductId);

    if (existing) {
        existing.qty += 1;
< codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
        existing.supplements = existing.supplements || []; > main
    } else {
        cart.push({
            id: selectedProductId,
            title: product.title,
            price: product.price, 
            < codex/add-buttons-for-allergen-and-tracing-features-z3n6cs
            qty: 1,
            supplements: []
            qty: 1
> main
        });
    }

    updateCartView();
    productModal.style.display = 'none';
});

// Bouton Commander
const orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', () => {
    orderModal.style.display = 'block';
});

// Options de commande
cartOption.addEventListener('click', () => {
    orderModal.style.display = 'none';
    updateCartView();
    cartModal.style.display = 'block';
});

deliveryOption.addEventListener('click', () => {
    window.open(UBER_EATS_URL, '_blank');
    orderModal.style.display = 'none';
});

whatsappOption.addEventListener('click', () => {
    window.open(`https://wa.me/${WHATSAPP_PHONE}`, '_blank');
    orderModal.style.display = 'none';
});

telegramOption.addEventListener('click', () => {
    window.open(`https://t.me/${TELEGRAM_USER}`, '_blank');
    orderModal.style.display = 'none';
});

sendRestaurantBtn.addEventListener('click', () => {
    const msg = encodeURIComponent(formatCartMessage());
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, '_blank');
});

sendWhatsappBtn.addEventListener('click', () => {
    const msg = encodeURIComponent(formatCartMessage());
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, '_blank');
});

sendTelegramBtn.addEventListener('click', () => {
    const msg = encodeURIComponent(formatCartMessage());
    window.open(`https://t.me/${TELEGRAM_USER}?text=${msg}`, '_blank');
});

openUberBtn.addEventListener('click', () => {
    window.open(UBER_EATS_URL, '_blank');
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
