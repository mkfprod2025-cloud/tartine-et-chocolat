const productsData = {
    delice1: {
        title: "Crumble Pomme et Cannelle",
        description: "Crumble pommes cannelle, dessert à emporter au goût réconfortant. Pommes fondantes parfumées à la cannelle, recouvertes d’un crumble croustillant et doré.(pomme,cannelle,farine de blé, beurre, sucre.)",
        price: "10€",
        image: "assets/crumblevid.mp4",
        media_type: "video",
        productType: "sucre"
    },
    delice2: {
        title: "gateau au chocolat",
        description: "Gâteau au chocolat à emporter, texture moelleuse et cœur fondant, goût chocolaté profond et généreux.(farine, œufs, sucre, beurre, chocolat).",
        price: "11€",
        image: "assets/fondantchovid.mp4",
        media_type: "video",
        productType: "sucre"
    },
    delice3: {
        title: "Tarte Tatin",
        description: "La célèbre tarte des sœurs Tatin, recette mythique aux pommes fondantes et caramel doré, accompagnée de sa pipette de crème fraîche.(pommes, sucre, beurre, farine de blé, crème fraîche)",
        price: "13.00€",
        image: "assets/tatinvid.mp4",
        media_type: "video",
        productType: "sucre"
    },
    delice4: {
        title: "La Tartine Campagnarde",
        description: "La Tartine Campagnarde, rustique et nourrissante, sur pain campagnard, avec fromage frais aux herbes, jambon blanc ou poulet et touche de pistache.(pain campagnard, fromage frais, herbes fines, jambon blanc ou poulet, pistache)",
        price: "13€",
        image: "assets/campavid.mp4",
        media_type: "video",
        productType: "sale"
    },
    delice5: {
        title: "La Tartine Méditerranéenne",
        description: "Un accord méditerranéen entre houmous savoureux et saumon fondant, déposé sur un pain tendre et léger.(pois chiches, purée de sésame, citron, ail, huile d’olive, cumin moulu, saumon, pain)",
        price: "16€",
        image: "assets/maraivid.mp4",
        media_type: "video",
        productType: "sale"
    },
    delice6: {
        title: "La Maraichère",
        description: "La tartine végé, une garniture généreuse de légumes de saison sur un pain focaccia moelleux et aérien.(légumes melangé de saison, farine de blé, levure, huile d’olive)",
        price: "12€",
        image: "assets/vegivid.mp4",
        media_type: "video",
        productType: "sale"
    },
    boisson1: {
        title: "Nos spécialité de café glacé",
        description: "ice coffee, latté, frappé sucré celon votre convenance",
        price: "de 7€ a 12€",
        image: "assets/coffeevid.mp4",
        media_type: "video",
        productType: "boissons"
    },
    boisson2: {
        title: "Thé Glacé Maison",
        description: "Thé glacé fait maison infusé, menthe-jasmin, fruit rouge-miel, rooïbos peche. Rafraîchissant et désaltérant.",
        price: "8.50€",
        image: "assets/icetvid.mp4",
        media_type: "video",
        productType: "boissons"
    },
    boisson3: {
        title: "les jus de fruits centrifugés",
        description: "pommes, carottes, oranges pressées à la commande",
        price: "8.5€",
        image: "assets/centrivid.mp4",
        media_type: "video",
        productType: "boissons"
    },
    boisson4: {
        title: "nos smoothies aux fruits",
        description: "Smoothie vitaminé aux fruits  , mixés avec du fromage blanc 0% , du lait et une touche de miel.(ananas coco, fruits rouges, banane)",
        price: "9.50€",
        image: "assets/smootvid.mp4",
        media_type: "video",
        productType: "boissons"
    },
    decouverte1: {
        title: "La Tarte aux myrtilles",
        description: "Une belle part de tarte aux myrtilles façon grand-mère, à la pâte épaisse et gourmande, idéale pour rassurer les après-midi.(myrtilles, farine de blé, beurre, sucre, œufs)",
        price: "11€",
        image: "assets/myrtvid.mp4",
        media_type: "video",
        productType: "sucre"
    },
    decouverte2: {
        title: "La soupe de saison",
        description: "une soupe réchauffante d'hivers pour les mornes soirées de pluie et de froid des legumes de saisons mijôté avec beaucoup d'amour et d'épices",
        price: "10.50€",
        image: "assets/soupvid.mp4",
        media_type: "video",
        productType: "sale"
    },
    decouverte3: {
        title: "matcha latte",
        description: "Un doux matcha au lait de vache ou vegetal de votre choix, chaud ou froid, a agrémenter de sirops aux saveurs mutiples",
        price: "9.50€",
        image: "assets/matchavid.mp4",
        media_type: "video",
        productType: "boissons"
    },
    decouverte4: {
        title: "notre jus star du moment",
        description: "notre composition du moment au grès du marché : pomme, concombre, menthe.testez jugez rapportez nous votre avis",
        price: "9.50€",
        image: "assets/jusmoisvid.mp4",
        media_type: "video",
        productType: "boissons"
    },
    formule1: {
        title: "Formule équilibré",
        description: "Formule complète comprenant :une petite tartine salé, une petite patisserie et une boisson.",
        price: "17€",
        image: "assets/form1couv.png",
        media_type: "image",
        productType: "formule"
    },
    formule2: {
        title: "Formule Gouté à deux",
        description: "Formule pour les gourmands : 2 pâtisseries au choix parmi notre sélection + 2 boisson froide et un p'ti plus a partager .",
        price: "24€",
        image: "assets/form2vid.mp4",
        media_type: "video",
        productType: "formule"
    },
    formule3: {
        title: "Formule Brunch Club",
        description: "Formule Brunch Club :2 tartines salées, 2 desserts, 2 boissons aux choix et une decouverte surprise",
        price: "55€",
        image: "assets/form3vid.mp4",
        media_type: "video",
        productType: "formule"
    }
};

const supplementsCatalog = {
    sales: [
        { name: "jambon.blanc", price: 3 },
        { name: "poulet", price: 2 },
        { name: "oeuf dur", price: 2 },
        { name: "Saumon fumé", price: 3.5 },
        { name: "Fromage frais", price: 1.5 },
        { name: "pistache", price: 1 },
        { name: "houmous", price: 3 }
    ],
    sucres: [
        { name: "pommes", price: 2 },
        { name: "ananas", price: 2 },
        { name: "banane", price: 2 },
        { name: "gingembre", price: 1.5 },
        { name: "Fruits rouges", price: 2 },
        { name: "crème fraiche", price: 1.5 }
    ],
    boissons: [
        { name: "sucre de Cannes", price: 0.5 },
        { name: "sirop de vanille", price: 0.5 },
        { name: "sirop de caramel", price: 0.5 },
        { name: "lait vegetal avoine", price: 1 },
        { name: "lait vegetal coco", price: 1 }
    ]
};
const productOptionsCatalog = {
          boisson1Ingredients: {
        label: "choix des saveurs",
        type: "multi",
        max: 1,
        choices: [
            { name: "café noir long" },
            { name: "latte (café au lait)" },
        ]
    } ,
       boisson2Ingredients: {
        label: "choix des saveurs",
        type: "multi",
        max: 1,
        choices: [
            { name: "Rooîbos pêche" },
            { name: "fruits rouges/miel" },
            { name: "menthe/jasmin" },
        ]
    },
    boisson3Ingredients: {
        label: "Ingrédients (3 max)",
        type: "multi",
        max: 3,
        choices: [
            { name: "Pomme", price: 0 },
            { name: "Carotte", price: 0 },
            { name: "Orange", price: 0 },
            { name: "Concombre", price: 0 },
            { name: "Ananas", price: 0 },
            { name: "Gingembre", price: 0 },
            { name: "Menthe", price: 0 }
        ]
    },
        boisson4Ingredients: {
        label: "choix des saveurs",
        type: "multi",
        max: 1,
        choices: [
            { name: "ananas/coco/sirop de vanille" },
            { name: "fruits rouges/miel" },
            { name: "pomme/banane" },
        ]
    },
    formule1ingredients: {
        label: "1 tartine salée",
        type: "multi",
    max: 1,
        choices: [
            { name: "campagnarde"},
            { name: "méditerranéenne"},
            { name: "veggan"},
            ]
    },
     formule1ingredients2:{
         label: "1 dessert",
     type: "multi",
    max: 1,
    choices: [
        {name: "crumble"},
        {name: "gateau choco"},
        {name: "tarte tatin"}, ]
},
    formule1ingredients3:{
         label: "1 boisson",
     type: "multi",
    max: 1,
    choices: [
        {name: "coffee ou latte(froid)"},
        {name: "thé glacé"},
        {name: "jus de fruit"}, ]
    }};
const categoryLabels = {
    sales: "Suppléments salés",
    sucres: "Suppléments sucrés",
    boissons: "Suppléments boissons"
};
const supplementsByProduct = {
    delice1: ['sucres'],
    delice2: ['sucres'],
    delice3: ['sucres'],
    delice4: ['sales'],
    delice5: ['sales'],
    delice6: ['sales'],
    boisson1:['boissons'],
    boisson2:['boissons'],
    boisson3:['boissons'],
    boisson4: ['sucres','boissons'],
    decouverte1: ['sucres'],
    decouverte2: ['sales'],
 decouverte3: ['boissons'],
 decouverte4: ['boissons'],
};

const optionsByProduct = {
    boisson1: ['boisson1Ingredients'],
    boisson2: ['boisson2Ingredients',],
    boisson3: ['boisson3Ingredients'],
    boisson4: ['boisson4Ingredients'],
    formule1: ['formule1ingredients','sales','formule1ingredients2','sucres','formule1ingredients3','boissons']
    
};

const whatsappNumber = "33123456789";
let currentProductId = null;
let cart = [];

const parsePrice = (priceText) => {
    const matches = priceText.match(/\d+(?:[.,]\d+)?/g);
    if (!matches || matches.length === 0) {
        return 0;
    }
    return Number.parseFloat(matches[0].replace(',', '.'));
};

const formatPrice = (value) => `${value.toFixed(2).replace('.', ',')}€`;

const openTab = (tabId) => {
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabPanes.forEach((pane) => pane.classList.remove('active'));
    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    tabButtons.forEach((btn) => {
        const isActive = btn.getAttribute('data-tab') === tabId;
        btn.classList.toggle('active', isActive);
    });
};

const renderSupplementsListing = () => {
    const listing = document.getElementById('supplementsListing');
    if (!listing) {
        return;
    }

    const sections = Object.entries(supplementsCatalog).map(([key, values]) => {
        const items = values.map((item) => `<li><span>${item.name}</span><strong>${formatPrice(item.price)}</strong></li>`).join('');
        return `
            <div class="supplements-group">
                <h3>${categoryLabels[key]}</h3>
                <ul>${items}</ul>
            </div>
        `;
    }).join('');

    listing.innerHTML = `
        <p class="supplements-note">Listing complet des suppléments et tarifs.</p>
        <div class="supplements-groups">${sections}</div>
    `;
};

const buildSupplementSelectors = (productId) => {
    const selectorHost = document.getElementById('supplementSelectors');
    selectorHost.innerHTML = '';

    const allowedCategories = supplementsByProduct[productId] || [];
    if (allowedCategories.length === 0) {
        return;
    }

    allowedCategories.forEach((key) => {
        const values = supplementsCatalog[key] || [];
        const row = document.createElement('div');
        row.className = 'add-line';

        const label = document.createElement('label');
        label.textContent = categoryLabels[key];
        label.setAttribute('for', `supplement-${key}`);

        const select = document.createElement('select');
        select.id = `supplement-${key}`;

        const noOption = document.createElement('option');
        noOption.value = '';
        noOption.textContent = 'Aucun';
        select.appendChild(noOption);

        values.forEach((item) => {
            const option = document.createElement('option');
            option.value = JSON.stringify(item);
            option.textContent = `${item.name} (+${formatPrice(item.price)})`;
            select.appendChild(option);
        });

        row.appendChild(label);
        row.appendChild(select);
        selectorHost.appendChild(row);
    });
};

const enforceIngredientLimit = (container, max) => {
    const checkboxes = Array.from(container.querySelectorAll('input[type="checkbox"]'));
    const checkedCount = checkboxes.filter((box) => box.checked).length;
    checkboxes.forEach((box) => {
        box.disabled = checkedCount >= max && !box.checked;
    });
};

const buildProductOptionSelectors = (productId) => {
    const optionsHost = document.getElementById('productOptionSelectors');
    optionsHost.innerHTML = '';

    const optionKeys = optionsByProduct[productId] || [];
    optionKeys.forEach((optionKey) => {
        const optionConfig = productOptionsCatalog[optionKey];
        if (!optionConfig) {
            return;
        }

        const row = document.createElement('div');
        row.className = 'add-line';

        const label = document.createElement('label');
        label.textContent = optionConfig.label;
        row.appendChild(label);

        if (optionConfig.type === 'single') {
            const select = document.createElement('select');
            select.dataset.optionType = 'single';
            select.dataset.optionKey = optionKey;

            const noOption = document.createElement('option');
            noOption.value = '';
            noOption.textContent = 'Sélectionner';
            select.appendChild(noOption);

            optionConfig.choices.forEach((choice) => {
                const choiceOption = document.createElement('option');
                choiceOption.value = JSON.stringify(choice);
                choiceOption.textContent = choice.price > 0
                    ? `${choice.name} (+${formatPrice(choice.price)})`
                    : choice.name;
                select.appendChild(choiceOption);
            });

            row.appendChild(select);
        }

        if (optionConfig.type === 'multi') {
            const checkboxGroup = document.createElement('div');
            checkboxGroup.className = 'checkbox-group';
            checkboxGroup.dataset.optionType = 'multi';
            checkboxGroup.dataset.optionKey = optionKey;
            checkboxGroup.dataset.max = String(optionConfig.max || optionConfig.choices.length);

            optionConfig.choices.forEach((choice, index) => {
                const wrapper = document.createElement('label');
                wrapper.className = 'checkbox-item';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = JSON.stringify(choice);
                checkbox.id = `${optionKey}-${index}`;
                checkbox.addEventListener('change', () => {
                    enforceIngredientLimit(checkboxGroup, optionConfig.max || optionConfig.choices.length);
                });

                const text = document.createElement('span');
                text.textContent = choice.name;

                wrapper.appendChild(checkbox);
                wrapper.appendChild(text);
                checkboxGroup.appendChild(wrapper);
            });

            row.appendChild(checkboxGroup);
            enforceIngredientLimit(checkboxGroup, optionConfig.max || optionConfig.choices.length);
        }

        optionsHost.appendChild(row);
    });
};

const collectProductOptions = () => {
    const options = [];

    document.querySelectorAll('#productOptionSelectors select[data-option-type="single"]').forEach((select) => {
        if (!select.value) {
            return;
        }
        const selected = JSON.parse(select.value);
        options.push({
            ...selected,
            label: selected.name
        });
    });

    document.querySelectorAll('#productOptionSelectors .checkbox-group[data-option-type="multi"]').forEach((group) => {
        const checked = Array.from(group.querySelectorAll('input[type="checkbox"]:checked'));
        checked.forEach((input) => {
            const selected = JSON.parse(input.value);
            options.push({
                ...selected,
                label: selected.name
            });
        });
    });

    return options;
};

const renderCart = () => {
    const cartItems = document.getElementById('cartItems');
    const emptyState = document.getElementById('cartEmptyState');
    const totalNode = document.getElementById('cartTotal');
    const sendButton = document.getElementById('sendWhatsAppBtn');

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        emptyState.style.display = 'block';
        totalNode.textContent = 'Total : 0,00€';
        sendButton.disabled = true;
        return;
    }

    emptyState.style.display = 'none';

    cart.forEach((line, index) => {
        const lineNode = document.createElement('div');
        lineNode.className = 'cart-line';
     const optionsText = line.options.length > 0
            ? `Options : ${line.options.map((item) => item.label).join(', ')}`
            : 'Sans option';
        const supplementsText = line.supplements.length > 0
            ? `Suppléments : ${line.supplements.map((item) => item.name).join(', ')}`
            : 'Sans supplément';
      lineNode.innerHTML = `
            <div>
                <p><strong>${line.quantity} × ${line.title}</strong></p>
                <p>${supplementsText}</p>
                <p>${optionsText}</p>
                <p>${formatPrice(line.total)}</p>
            </div>
            <button data-index="${index}" class="remove-cart-item">Retirer</button>
        `;

        cartItems.appendChild(lineNode);
    });

    const total = cart.reduce((sum, line) => sum + line.total, 0);
    totalNode.textContent = `Total : ${formatPrice(total)}`;
    sendButton.disabled = false;

    document.querySelectorAll('.remove-cart-item').forEach((button) => {
        button.addEventListener('click', () => {
            const index = Number.parseInt(button.dataset.index, 10);
            cart.splice(index, 1);
            renderCart();
        });
    });
};

const closeAllModals = () => {
    ['productModal', 'orderModal', 'takeawayModal'].forEach((id) => {
        const node = document.getElementById(id);
        if (node) {
            node.style.display = 'none';
        }
    });

    const video = document.querySelector('#modalMediaContainer video');
    if (video) {
        video.pause();
    }
};

const setupProductCards = () => {
    const productModal = document.getElementById('productModal');

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            const productId = card.getAttribute('data-product');
            const product = productsData[productId];
            if (!product) {
                return;
            }

            currentProductId = productId;
            buildSupplementSelectors(productId);
            buildProductOptionSelectors(productId);
            document.getElementById('modalQuantity').value = '1';

            const modalMediaContainer = document.getElementById('modalMediaContainer');
            modalMediaContainer.innerHTML = '';

            if (product.media_type === 'video') {
                const video = document.createElement('video');
                video.src = product.image;
                video.controls = true;
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                modalMediaContainer.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                modalMediaContainer.appendChild(img);
            }

            document.getElementById('modalTitle').textContent = product.title;
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalPrice').textContent = product.price;
            productModal.style.display = 'block';
        });
    });
};

const setupOrderFlow = () => {
    const orderModal = document.getElementById('orderModal');
    const takeawayModal = document.getElementById('takeawayModal');

    document.getElementById('orderBtn').addEventListener('click', () => {
        orderModal.style.display = 'block';
    });

    document.getElementById('takeawayOption').addEventListener('click', () => {
        orderModal.style.display = 'none';
        takeawayModal.style.display = 'block';
        renderCart();
    });

    document.getElementById('deliveryOption').addEventListener('click', () => {
        window.open('https://www.ubereats.com/', '_blank');
        orderModal.style.display = 'none';
    });
};

const setupQuantityControls = () => {
    const input = document.getElementById('modalQuantity');
    const minus = document.getElementById('quantityMinusBtn');
    const plus = document.getElementById('quantityPlusBtn');

    minus.addEventListener('click', () => {
        const current = Math.max(1, Number.parseInt(input.value, 10) || 1);
        input.value = String(Math.max(1, current - 1));
    });

    plus.addEventListener('click', () => {
        const current = Math.max(1, Number.parseInt(input.value, 10) || 1);
        input.value = String(current + 1);
    });
};

const setupAddToCart = () => {
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        if (!currentProductId) {
            return;
        }

        const product = productsData[currentProductId];
        const quantity = Math.max(1, Number.parseInt(document.getElementById('modalQuantity').value, 10) || 1);
        const basePrice = parsePrice(product.price);

        const selectedSupplements = Array.from(document.querySelectorAll('#supplementSelectors select'))
            .map((select) => select.value)
            .filter((value) => value)
            .map((value) => JSON.parse(value));

        const selectedOptions = collectProductOptions();
        const supplementsTotal = selectedSupplements.reduce((sum, item) => sum + item.price, 0);
        const optionsTotal = selectedOptions.reduce((sum, item) => sum + item.price, 0);
        const lineTotal = (basePrice + supplementsTotal + optionsTotal) * quantity;

        cart.push({
            title: product.title,
            quantity,
            supplements: selectedSupplements,
            options: selectedOptions,
            total: lineTotal
        });

        document.getElementById('productModal').style.display = 'none';
    });
};

const generateInvoicePdf = () => {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        return;
    }

    const doc = new window.jspdf.jsPDF();
    let y = 16;

    doc.setFontSize(16);
    doc.text('Facture - Tartine et Chocolat', 14, y);
    y += 8;

    doc.setFontSize(10);
    doc.text(`Date: ${new Date().toLocaleString('fr-FR')}`, 14, y);
    y += 8;

    cart.forEach((line) => {
        doc.text(`${line.quantity} x ${line.title} - ${formatPrice(line.total)}`, 14, y);
        y += 6;
        if (line.options.length > 0) {
            doc.text(`Choix: ${line.options.map((opt) => opt.name).join(' | ')}`, 18, y);
            y += 6;
        }
        if (line.supplements.length > 0) {
            doc.text(`Suppléments: ${line.supplements.map((sup) => sup.name).join(', ')}`, 18, y);
            y += 6;
        }
        if (y > 250) {
            doc.addPage();
            y = 20;
        }
    });

    const total = cart.reduce((sum, line) => sum + line.total, 0);
    y += 4;
    doc.setFontSize(12);
    doc.text(`Total TTC: ${formatPrice(total)}`, 14, y);
    y += 10;

    doc.setFontSize(8);
    const legalLines = [
        'Mentions légales - Auto-entreprise (France):',
        'Tartine et Chocolat - Micro-entreprise, Cannes (06).',
        'TVA non applicable, art. 293 B du CGI.',
        'SIREN: A RENSEIGNER | Adresse: A RENSEIGNER | Contact: A RENSEIGNER.',
        'Conservation de la facture: 10 ans (Code de commerce).'
    ];

    legalLines.forEach((line) => {
        doc.text(line, 14, y);
        y += 4;
    });

    doc.save(`facture-tartine-et-chocolat-${Date.now()}.pdf`);
};

const setupWhatsAppSend = () => {
    document.getElementById('sendWhatsAppBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            return;
        }

        const accepted = window.confirm('Confirmer la commande ? Une facture PDF sera téléchargée.');
        if (!accepted) {
            return;
        }

        const total = cart.reduce((sum, line) => sum + line.total, 0);
        const content = cart.map((line) => {
            const supplements = line.supplements.length > 0
                ? ` | suppléments: ${line.supplements.map((s) => s.name).join(', ')}`
                : '';
            const options = line.options.length > 0
                ? ` | options: ${line.options.map((o) => o.label).join(', ')}`
                : '';
            return `- ${line.quantity} x ${line.title}${supplements}${options} = ${formatPrice(line.total)}`;
        }).join('\n');

        generateInvoicePdf();

        const message = `Bonjour Tartine et Chocolat,%0AJe souhaite commander à emporter :%0A${content}%0A%0ATotal estimé : ${formatPrice(total)}%0AMerci !`;
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    });
};

const setupTabsAndButtons = () => {
    document.querySelectorAll('.tab-button').forEach((button) => {
        button.addEventListener('click', () => {
            openTab(button.getAttribute('data-tab'));
        });
    });

    document.querySelectorAll('[data-target-tab]').forEach((button) => {
        button.addEventListener('click', () => {
            openTab(button.getAttribute('data-target-tab'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
};

const setupModalClosing = () => {
    document.querySelectorAll('.close').forEach((btn) => {
        btn.addEventListener('click', closeAllModals);
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
};

const setupCardAnimation = () => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
};

renderSupplementsListing();
setupTabsAndButtons();
setupModalClosing();
setupProductCards();
setupOrderFlow();
setupQuantityControls();
setupAddToCart();
setupWhatsAppSend();
setupCardAnimation();
