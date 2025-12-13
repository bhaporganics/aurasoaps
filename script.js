// Product Data with images and dual pricing - 15 PRODUCTS
const products = [
    {
        id: 'product-1',
        name: "Rose Petal",
        subtitle: "Simply Rosy",
        description: "Gentle cleanser with rose petals that nourishes skin and leaves it feeling soft and supple.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/rosepetal_soap_2.jpg",
        alt: "Aura - Rose Petal Handmade Soap - Natural Ayurvedic Soap with Rose Petals for Soft Skin",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-2',
        name: "Red Sandal",
        subtitle: "Soothes Skin",
        description: "Calming soap with red sandalwood known for its skin-soothing properties and ability to reduce inflammation.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/redsandal_soap_2.jpg",
        alt: "Aura - Red Sandalwood Soap - Ayurvedic Soothing Soap for Skin Inflammation",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-3',
        name: "Manjistha",
        subtitle: "Skin Brightener",
        description: "Ayurvedic formula that helps brighten skin tone, reduce pigmentation, and promote an even complexion.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/manjistha_soap_2.jpg",
        alt: "Aura - Manjistha Soap - Natural Skin Brightening Soap for Even Complexion",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-4',
        name: "Urad Dal",
        subtitle: "Glowing Skin",
        description: "Enriched with Urad Dal to exfoliate gently, remove dead skin cells, and reveal naturally glowing skin.",
        price: 160,
        mrp: 180,
        discount: "15%",
        image: "images/uraddhal_soap_2.jpg",
        alt: "Aura - Urad Dal Soap - Exfoliating Soap for Glowing Natural Skin",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-5',
        name: "Straw Berry ",
        subtitle: "Antioxidant Booster",
        description: "Packed with berry antioxidants to fight free radicals, protect skin from environmental damage.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/strawberry_soap_2.jpg",
        alt: "Aura - Berry Blast Soap - Antioxidant Rich Soap for Skin Protection",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-6',
        name: "Coffee",
        subtitle: "Skin Tightener",
        description: "Coffee grounds help tighten skin, reduce cellulite appearance, and provide antioxidant benefits.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/coffee_soap_2.jpg",
        alt: "Aura - Coffee Soap - Skin Tightening Soap with Coffee Grounds",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-7',
        name: "Vetiver",
        subtitle: "Earthy Aroma",
        description: "Deep cleansing soap with vetiver's earthy aroma that calms the mind while purifying the skin.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/vettiver_soap_2.jpg",
        alt: "Aura - Vetiver Soap - Earthy Aroma Soap for Mind Calming and Skin Purification",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-8',
        name: "Wild Turmeric",
        subtitle: "Anti-Bacterial",
        description: "Powerful antibacterial and antifungal properties help treat skin infections and promote clear skin.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/wildturmeric_soap_2.jpg",
        alt: "Aura - Wild Turmeric Soap - Antibacterial Soap for Clear Skin",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-9',
        name: "Kuppaimeni",
        subtitle: "Skin Healer",
        description: "Traditional herb known for healing skin ailments, reducing irritation, and promoting skin regeneration.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/kuppameni_soap_2.jpg",
        alt: "Aura -Kuppaimeni Soap - Skin Healing Soap with Traditional Herbs",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-10',
        name: "Green Gram",
        subtitle: "Skin Energiser",
        description: "Green gram flour gently exfoliates and energizes skin, removing impurities and leaving it refreshed.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/greengram_soap_2.jpg",
        alt: "Aura - Green Gram Soap - Exfoliating Soap for Energized Skin",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-11',
        name: "Aloe Vera",
        subtitle: "Nourish & Renew",
        description: "Soothing aloe vera deeply hydrates, heals, and renews skin, perfect for sensitive or sun-exposed skin.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/aloevera_soap_2.jpg",
        alt: "Aura - Aloe Vera Soap - Hydrating Soap for Sensitive Skin",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-12',
        name: "Charcoal",
        subtitle: "Deep Pore Cleanser",
        description: "Activated charcoal draws out impurities, toxins, and excess oil from deep within pores for ultra-clean skin.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/charcoal_soap_2.jpg",
        alt: "Aura - Charcoal Soap - Deep Pore Cleansing Soap with Activated Charcoal",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    {
        id: 'product-13',
        name: "Neem",
        subtitle: "Heals Acne",
        description: "Neem's antibacterial properties combat acne while antioxidants fight signs of aging for youthful skin.",
        price: 160,
        mrp: 180,
        discount: "11.11% OFF",
        image: "images/neem_soap_2.jpg",
        alt: "Aura - Neem Soap - Acne Healing Soap with Neem Antibacterial Properties",
        size: "100g",
        weight: "100g",
        hasScrubOption: true
    },
    // NEW PRODUCT 14: COMBO PACK (NO SCRUB OPTION)
    {
        id: 'product-14',
        name: "Function Pack",
        subtitle: "Complete Collection",
        description: "Our premium collection featuring 6 best-selling soaps in a fancy way to present in any occasion. Customize your plate and make your occasion more divine and beautiful.",
        price: 1000,
        mrp: 1200,
        discount: "16.67% OFF",
        image: "images/combo_pack.jpg",
        alt: "Aura - Function Pack - Premium Collection of 6 Best-Selling Ayurvedic Soaps",
        size: "6 soaps (100g each)",
        weight: "600g total",
        isCombo: true,
        hasScrubOption: false
    },
    // NEW PRODUCT 15: CUSTOMIZE YOUR OWN SOAP (NO SCRUB OPTION)
    {
        id: 'product-15',
        name: "Customize Your Soap",
        subtitle: "Create Your Unique Blend",
        description: "Design your own personalized soap! Choose the flavours you wish to bath just by creating a soap that's uniquely made for you.",
        price: 250,
        mrp: 300,
        discount: "16.67% OFF",
        image: "images/custom_soap.jpg",
        alt: "Aura - Custom Soap - Create Your Own Personalized Ayurvedic Soap Blend",
        size: "Custom",
        weight: "100g",
        isCustom: true,
        hasScrubOption: false
    }
];

// Cart functionality - Session-based cart
let cart = [];
const MIN_ORDER_ITEMS = 3;
const SCRUB_PRICE = 20;

// DOM Elements
const cartModal = document.getElementById('cartModal');
const cartIcon = document.getElementById('cartIcon');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElement = document.querySelector('.cart-count');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const productsContainer = document.getElementById('productsContainer');
const whatsappCartBtn = document.getElementById('whatsappCartBtn');
const emailCartBtn = document.getElementById('emailCartBtn');
const whatsappOrderBtn = document.getElementById('whatsappOrderBtn');
const emailOrderBtn = document.getElementById('emailOrderBtn');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const mobileFab = document.getElementById('mobileFab');
const minOrderIndicator = document.getElementById('minOrderIndicator');
const mobileFabIndicator = document.getElementById('mobileFabIndicator');
const minOrderProgress = document.getElementById('minOrderProgress');
const progressBar = document.getElementById('progressBar');
const progressCount = document.getElementById('progressCount');
const progressMessage = document.getElementById('progressMessage');

// Scrub Modal Elements
const scrubModal = document.getElementById('scrubModal');
const scrubProductName = document.getElementById('scrubProductName');
const soapOnlyPrice = document.getElementById('soapOnlyPrice');
const withScrubPrice = document.getElementById('withScrubPrice');
const scrubCancelBtn = document.getElementById('scrubCancelBtn');
const scrubAddBtn = document.getElementById('scrubAddBtn');
const scrubOptions = document.querySelectorAll('.scrub-option');

// Email Modal Elements
const emailModal = document.getElementById('emailModal');
const customerNameInput = document.getElementById('customerName');
const emailCancelBtn = document.getElementById('emailCancelBtn');
const emailProceedBtn = document.getElementById('emailProceedBtn');

// Minimum Order Modal Elements
const minOrderModal = document.getElementById('minOrderModal');
const minOrderTitle = document.getElementById('minOrderTitle');
const minOrderMessage = document.getElementById('minOrderMessage');
const itemsNeededCount = document.getElementById('itemsNeededCount');
const minOrderCloseBtn = document.getElementById('minOrderCloseBtn');
const minOrderShopBtn = document.getElementById('minOrderShopBtn');

// Track product quantities on product cards
let productQuantities = {};

// Current product being added to cart (for scrub modal)
let currentProductId = null;
let currentQuantity = 0;
let selectedScrubOption = 'soap-only';

// Initialize product quantities
function initializeProductQuantities() {
    products.forEach(product => {
        productQuantities[product.id] = 0;
    });
}

// Initialize Testimonials Carousel for Mobile
function initTestimonialsCarousel() {
    // Only initialize on mobile
    if (window.innerWidth <= 768) {
        // Check if swiper is already initialized
        if (!window.testimonialsSwiper) {
            window.testimonialsSwiper = new Swiper('#testimonialsCarousel .swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '#testimonialsCarousel .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '#testimonialsCarousel .swiper-button-next',
                    prevEl: '#testimonialsCarousel .swiper-button-prev',
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1.1,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                    }
                }
            });
        }
    } else {
        // Destroy swiper on desktop
        if (window.testimonialsSwiper) {
            window.testimonialsSwiper.destroy();
            window.testimonialsSwiper = null;
        }
    }
}

// Update the product rendering function
function renderProducts() {
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        // Determine if this is a special product
        const isSpecialProduct = product.isCombo || product.isCustom;
        const productClass = isSpecialProduct ? 'product-card special-product' : 'product-card';
        
        const productCard = document.createElement('div');
        productCard.className = productClass;
        productCard.setAttribute('itemscope', '');
        productCard.setAttribute('itemtype', 'https://schema.org/Product');
        
        // Create a URL-friendly name for the product page
        const productUrlName = product.name.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '')
            .replace(/-+/g, '-');
        
        // Calculate discount percentage
        const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);
        
        // Custom button for custom soap, regular add to cart for others
        const actionButton = product.isCustom ? 
            `<button class="customize-btn" data-id="${product.id}">
                <i class="fas fa-palette"></i> Customize Now
            </button>` : 
            `<div class="quantity-selector" data-id="${product.id}">
                <div class="quantity-controls">
                    <button class="quantity-btn decrease" data-id="${product.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display" id="quantity-${product.id}">0</span>
                    <button class="quantity-btn increase" data-id="${product.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
            </div>`;
        
        productCard.innerHTML = `
            <div class="product-link-content" data-product-id="${product.id}" data-product-url="${productUrlName}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.alt}" loading="lazy" itemprop="image">
                </div>
                <div class="product-content">
                    <h3 class="product-title" itemprop="name">${product.name}</h3>
                    <div class="product-subtitle" itemprop="description">${product.subtitle}</div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price-container">
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="price" content="${product.price}">₹${product.price}</span>
                            <meta itemprop="priceCurrency" content="INR">
                        </div>
                        <div class="product-mrp">₹${product.mrp}</div>
                        <div class="product-discount">${discountPercent}% OFF</div>
                    </div>
                    <div style="font-size: 0.8rem; color: #666; margin-top: 5px;">Size: ${product.weight}</div>
                </div>
            </div>
            
            ${actionButton}
        `;
        
        productsContainer.appendChild(productCard);
        
        // Add click event to the product content area for navigation (except for custom soap)
        if (!product.isCustom) {
            const productContent = productCard.querySelector('.product-link-content');
            productContent.style.cursor = 'pointer';
            
            productContent.addEventListener('click', function(e) {
                // Prevent navigation if clicking on buttons or quantity controls
                if (e.target.closest('.quantity-selector') || 
                    e.target.closest('.quantity-btn') || 
                    e.target.closest('.add-to-cart-btn')) {
                    return;
                }
                
                const productId = this.getAttribute('data-product-id');
                const productUrlName = this.getAttribute('data-product-url');
                
                // Navigate to product detail page
                window.location.href = `product-${productUrlName}.html?id=${productId}`;
            });
        }
        
        // Add event listener for custom soap button
        if (product.isCustom) {
            const customizeBtn = productCard.querySelector('.customize-btn');
            customizeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const productId = this.getAttribute('data-id');
                // Redirect to customization page
                window.location.href = 'customize-soap.html';
            });
        }
    });
    
    // Add event listeners to buttons with stopPropagation
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            updateProductQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            updateProductQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            const quantity = productQuantities[productId];
            
            if (quantity <= 0) return;
            
            // Check if product has scrub option
            const product = products.find(p => p.id === productId);
            if (product.hasScrubOption) {
                // Show scrub modal
                showScrubModal(product, quantity);
            } else {
                // Add directly to cart (for combo pack)
                addToCart(productId, quantity, 'soap-only');
            }
        });
    });
    
    // Update button states
    updateAllProductButtons();
}

// Show scrub selection modal
function showScrubModal(product, quantity) {
    currentProductId = product.id;
    currentQuantity = quantity;
    selectedScrubOption = 'soap-only';
    
    // Update modal content
    scrubProductName.textContent = `Add ${product.name} to Cart`;
    soapOnlyPrice.textContent = `₹${product.price * quantity}`;
    withScrubPrice.textContent = `₹${(product.price + SCRUB_PRICE) * quantity}`;
    
    // Reset selection
    scrubOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.option === 'soap-only') {
            option.classList.add('selected');
        }
    });
    
    // Show modal
    scrubModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Show minimum order modal
function showMinimumOrderModal() {
    const totalItems = getTotalItemsInCart();
    const itemsNeeded = MIN_ORDER_ITEMS - totalItems;
    
    // Update modal content
    itemsNeededCount.textContent = itemsNeeded;
    
    if (totalItems === 0) {
        minOrderTitle.textContent = 'Your Cart is Empty';
        minOrderMessage.innerHTML = `Please add <span class="min-order-count">${MIN_ORDER_ITEMS}</span> products to place your order.`;
    } else {
        minOrderTitle.textContent = 'Add More Items';
        minOrderMessage.innerHTML = `You need to add <span class="min-order-count">${itemsNeeded}</span> more product${itemsNeeded > 1 ? 's' : ''} to meet the minimum order requirement.`;
    }
    
    // Show modal
    minOrderModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Update product quantity on product card
function updateProductQuantity(productId, change) {
    const newQuantity = productQuantities[productId] + change;
    
    // Ensure quantity is between 0 and 10
    if (newQuantity >= 0 && newQuantity <= 10) {
        productQuantities[productId] = newQuantity;
        
        // Update display
        const quantityDisplay = document.getElementById(`quantity-${productId}`);
        if (quantityDisplay) {
            quantityDisplay.textContent = newQuantity;
        }
        
        // Update button states
        updateProductButtonState(productId);
    }
}

// Update product button state
function updateProductButtonState(productId) {
    const quantity = productQuantities[productId];
    const addButton = document.querySelector(`.add-to-cart-btn[data-id="${productId}"]`);
    const decreaseButton = document.querySelector(`.decrease[data-id="${productId}"]`);
    
    if (addButton) {
        if (quantity > 0) {
            addButton.innerHTML = `<i class="fas fa-shopping-bag"></i> Add ${quantity}`;
            addButton.disabled = false;
            addButton.style.opacity = '1';
        } else {
            addButton.innerHTML = `<i class="fas fa-shopping-bag"></i> Add to Cart`;
            addButton.disabled = false;
            addButton.style.opacity = '1';
        }
    }
    
    if (decreaseButton) {
        decreaseButton.disabled = quantity <= 0;
    }
}

// Update all product buttons
function updateAllProductButtons() {
    products.forEach(product => {
        if (!product.isCustom) {
            updateProductButtonState(product.id);
        }
    });
}

// Session Storage Cart Functions
function saveCartToStorage() {
    sessionStorage.setItem('auraCleanseCart', JSON.stringify(cart));
    sessionStorage.setItem('auraCleanseCartTimestamp', Date.now());
    
    // Notify other pages that cart was updated
    try {
        localStorage.setItem('cartUpdated', Date.now().toString());
    } catch (e) {
        console.log("Local storage notification failed");
    }
}

function loadCartFromStorage() {
    const savedCart = sessionStorage.getItem('auraCleanseCart');
    
    if (savedCart) {
        // Always load cart from sessionStorage
        cart = JSON.parse(savedCart);
    } else {
        // If no cart exists, initialize empty array
        cart = [];
    }
    
    updateCart();
    updateMinimumOrderUI();
}

function clearCartStorage() {
    sessionStorage.removeItem('auraCleanseCart');
    sessionStorage.removeItem('auraCleanseCartTimestamp');
}

// Calculate total items in cart
function getTotalItemsInCart() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Check if minimum order is met
function isMinimumOrderMet() {
    return getTotalItemsInCart() >= MIN_ORDER_ITEMS;
}

// Update minimum order UI
function updateMinimumOrderUI() {
    const totalItems = getTotalItemsInCart();
    const meetsMinimumOrder = isMinimumOrderMet();
    const progressPercentage = Math.min((totalItems / MIN_ORDER_ITEMS) * 100, 100);
    
    // Update progress bar
    progressBar.style.width = `${progressPercentage}%`;
    progressCount.textContent = `${totalItems}/${MIN_ORDER_ITEMS}`;
    
    // Update progress message
    if (totalItems === 0) {
        progressMessage.textContent = `Add ${MIN_ORDER_ITEMS} products to place your order`;
        progressMessage.className = 'progress-message';
    } else if (totalItems < MIN_ORDER_ITEMS) {
        const itemsNeeded = MIN_ORDER_ITEMS - totalItems;
        progressMessage.textContent = `Add ${itemsNeeded} more product${itemsNeeded > 1 ? 's' : ''} to place your order`;
        progressMessage.className = 'progress-message';
    } else {
        progressMessage.textContent = '✓ Minimum order requirement met!';
        progressMessage.className = 'progress-message progress-complete';
    }
    
    // Show/hide progress bar
    if (totalItems > 0) {
        minOrderProgress.style.display = 'block';
    } else {
        minOrderProgress.style.display = 'none';
    }
    
    // Update cart icon indicator
    if (totalItems > 0 && totalItems < MIN_ORDER_ITEMS) {
        minOrderIndicator.style.display = 'flex';
        if (mobileFabIndicator) mobileFabIndicator.style.display = 'flex';
        
        // Add subtle animation to cart icon
        cartIcon.style.animation = 'pulse 2s infinite';
        // Remove animation after a cycle to prevent constant pulsing
        setTimeout(() => {
            cartIcon.style.animation = '';
        }, 2000);
    } else {
        minOrderIndicator.style.display = 'none';
        if (mobileFabIndicator) mobileFabIndicator.style.display = 'none';
        cartIcon.style.animation = ''; // Ensure animation is off when met or empty
    }
    
    // **CRITICAL CHANGE**: Keep all checkout buttons visible (no `disabled` attribute here)
    // The logic to block/redirect is now handled in the checkout functions themselves.
    // We only need to check for empty cart here as a basic fallback.
    const totalQuantity = getTotalItemsInCart();
    const checkoutButtons = [whatsappCartBtn, emailCartBtn, whatsappOrderBtn, emailOrderBtn];

    checkoutButtons.forEach(btn => {
        if (btn) {
            // Visually change opacity/style if needed (optional)
            if (totalQuantity === 0) {
                btn.style.opacity = '0.7';
                btn.style.cursor = 'not-allowed';
            } else {
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            }
        }
    });
}

// Add product to cart with quantity and scrub option
function addToCart(productId, quantity, scrubOption) {
    if (quantity <= 0) return;
    
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => 
        item.id === productId && item.scrubOption === scrubOption
    );
    
    // Calculate final price
    let finalPrice = product.price;
    let finalMrp = product.mrp;
    
    if (scrubOption === 'with-scrub') {
        finalPrice += SCRUB_PRICE;
        finalMrp += SCRUB_PRICE;
    }
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            price: finalPrice,
            mrp: finalMrp,
            quantity: quantity,
            scrubOption: scrubOption,
            originalPrice: product.price,
            originalMrp: product.mrp
        });
    }
    
    // Reset product quantity
    productQuantities[productId] = 0;
    const quantityDisplay = document.getElementById(`quantity-${productId}`);
    if (quantityDisplay) {
        quantityDisplay.textContent = '0';
    }
    
    updateCart();
    updateProductButtonState(productId);
    saveCartToStorage();
    
    const scrubText = scrubOption === 'with-scrub' ? ' with herbal scrub' : '';
    showNotification(`${quantity} × ${product.name}${scrubText} added to cart`);
    updateMinimumOrderUI();
    
    // On mobile, close menu if open
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = getTotalItemsInCart();
    cartCountElement.textContent = totalItems;
    
    // Update cart items
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartItemsContainer.appendChild(emptyCartMessage);
    } else {
        emptyCartMessage.style.display = 'none';
        
        let totalPrice = 0;
        let totalMrp = 0;
        
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
            totalMrp += item.mrp * item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            const scrubIndicator = item.scrubOption === 'with-scrub' ? 
                '<span class="scrub-indicator">+ Scrub</span>' : '';
            
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.alt}" loading="lazy">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name} ${item.weight ? '(' + item.weight + ')' : ''}${scrubIndicator}</div>
                    <div class="cart-item-price">
                        ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}
                        <div style="font-size: 0.8rem; color: #999; text-decoration: line-through;">MRP: ₹${item.mrp * item.quantity}</div>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-quantity-btn decrease-cart" data-id="${item.id}" data-scrub="${item.scrubOption || 'soap-only'}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="cart-quantity-btn increase-cart" data-id="${item.id}" data-scrub="${item.scrubOption || 'soap-only'}">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-item" data-id="${item.id}" data-scrub="${item.scrubOption || 'soap-only'}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Add event listeners to cart item buttons
        document.querySelectorAll('.decrease-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const scrubOption = this.getAttribute('data-scrub');
                updateCartQuantity(productId, scrubOption, -1);
            });
        });
        
        document.querySelectorAll('.increase-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const scrubOption = this.getAttribute('data-scrub');
                updateCartQuantity(productId, scrubOption, 1);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const scrubOption = this.getAttribute('data-scrub');
                removeFromCart(productId, scrubOption);
            });
        });
        
        // Update total with savings
        const totalSavings = totalMrp - totalPrice;
        cartTotalElement.innerHTML = `
            <div>Total: ₹${totalPrice}</div>
            <div style="font-size: 0.9rem; color: #27ae60; font-weight: normal;">
                You save: ₹${totalSavings}
            </div>
        `;
    }
    
    updateMinimumOrderUI();
}

// Update item quantity in cart (with scrub option)
function updateCartQuantity(productId, scrubOption, change) {
    const item = cart.find(item => 
        item.id === productId && item.scrubOption === scrubOption
    );
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => 
                !(item.id === productId && item.scrubOption === scrubOption)
            );
        }
        
        updateCart();
        saveCartToStorage();
        updateMinimumOrderUI();
    }
}

// Remove item from cart (with scrub option)
function removeFromCart(productId, scrubOption) {
    cart = cart.filter(item => 
        !(item.id === productId && item.scrubOption === scrubOption)
    );
    updateCart();
    saveCartToStorage();
    updateMinimumOrderUI();
    showNotification('Item removed from cart');
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        background-color: var(--secondary);
        color: white;
        padding: 0.8rem 1.2rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        z-index: 3000;
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        font-weight: 500;
        max-width: 280px;
        text-align: center;
        font-size: 0.9rem;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// WhatsApp Checkout function - MODIFIED
function checkoutViaWhatsApp() {
    const totalItems = getTotalItemsInCart();
    
    // 1. Check if cart is empty
    if (totalItems === 0) {
        showMinimumOrderModal();
        return;
    }
    
    // 2. Check minimum order requirement
    if (!isMinimumOrderMet()) {
        showMinimumOrderModal();
        return;
    }
    
    // 3. Proceed to WhatsApp
    let message = "Hello, I would like to place an order from Aura :\n\n";
    let total = 0;
    let totalMrp = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const itemMrp = item.mrp * item.quantity;
        const sizeInfo = item.weight ? `(${item.weight})` : `(${item.size || '100g'})`;
        const scrubInfo = item.scrubOption === 'with-scrub' ? ' + Herbal Scrub' : '';
        message += `${item.name}${scrubInfo} ${sizeInfo}: ${item.quantity} × ₹${item.price} = ₹${itemTotal}\n`;
        total += itemTotal;
        totalMrp += itemMrp;
    });
    
    const savings = totalMrp - total;
    const discountPercent = Math.round((savings / totalMrp) * 100);
    
    message += `\nTotal: ₹${total}`;
    message += `\nTotal Savings: ₹${savings} (${discountPercent}% OFF)`;
    message += `\n\nPlease confirm my order and provide delivery details.`;
    
    const whatsappUrl = `https://wa.me/918532853241?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Email Checkout function - MODIFIED
function checkoutViaEmail() {
    const totalItems = getTotalItemsInCart();
    
    // 1. Check if cart is empty
    if (totalItems === 0) {
        showMinimumOrderModal();
        return;
    }

    // 2. Check minimum order requirement
    if (!isMinimumOrderMet()) {
        showMinimumOrderModal();
        return;
    }
    
    // 3. Proceed to Email modal for name input
    emailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    customerNameInput.focus();
}

// Complete email order with customer name
function completeEmailOrder(customerName) {
    if (!customerName || customerName.trim() === '') {
        showNotification('Please enter your name to proceed with the order.');
        return;
    }
    
    // Build the email body
    let emailBody = `Hello Aura Team,\n\n`;
    emailBody += `I would like to place an order from your website.\n\n`;
    emailBody += `Customer Details:\n`;
    emailBody += `- Name: ${customerName}\n`;
    
    emailBody += `\nOrder Details:\n`;
    let total = 0;
    let totalMrp = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const itemMrp = item.mrp * item.quantity;
        const sizeInfo = item.weight ? `(${item.weight})` : `(${item.size || '100g'})`;
        const scrubInfo = item.scrubOption === 'with-scrub' ? ' + Herbal Scrub' : '';
        emailBody += `- ${item.name}${scrubInfo} ${sizeInfo}: ${item.quantity} × ₹${item.price} = ₹${itemTotal}\n`;
        total += itemTotal;
        totalMrp += itemMrp;
    });
    
    const savings = totalMrp - total;
    emailBody += `\nOrder Total: ₹${total}`;
    emailBody += `\nTotal Savings: ₹${savings}`;
    emailBody += `\n\nPlease confirm my order and provide payment/delivery details.`;
    emailBody += `\n\nThank you,\n${customerName}`;
    
    // Create the mailto link 
    const subject = `Aura-Order - ${new Date().toLocaleDateString()}`;
    const mailtoLink = `mailto:bhaporganics@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Close modal and open email client
    emailModal.classList.remove('open');
    document.body.style.overflow = '';
    
    // Clear the input
    customerNameInput.value = '';
    emailProceedBtn.disabled = true;
    
    // Open the user's email client
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 300);
}

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Mobile FAB functionality
if (mobileFab) {
    mobileFab.addEventListener('click', () => {
        cartModal.classList.add('open');
    });
}

// Event listeners
cartIcon.addEventListener('click', () => {
    cartModal.classList.add('open');
    // Close mobile menu if open
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    }
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('open');
});

// Connect checkout functions to buttons
whatsappCartBtn.addEventListener('click', checkoutViaWhatsApp);
emailCartBtn.addEventListener('click', checkoutViaEmail);
whatsappOrderBtn.addEventListener('click', checkoutViaWhatsApp);
emailOrderBtn.addEventListener('click', checkoutViaEmail);

// Scrub modal event listeners
scrubOptions.forEach(option => {
    option.addEventListener('click', function() {
        scrubOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        selectedScrubOption = this.dataset.option;
    });
});

scrubCancelBtn.addEventListener('click', () => {
    scrubModal.classList.remove('open');
    document.body.style.overflow = '';
});

scrubAddBtn.addEventListener('click', () => {
    // Show loading state
    scrubAddBtn.classList.add('adding');
    scrubAddBtn.innerHTML = '';
    
    setTimeout(() => {
        addToCart(currentProductId, currentQuantity, selectedScrubOption);
        scrubModal.classList.remove('open');
        document.body.style.overflow = '';
        
        // Reset button
        scrubAddBtn.classList.remove('adding');
        scrubAddBtn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
    }, 800);
});

// Email modal event listeners
customerNameInput.addEventListener('input', function() {
    emailProceedBtn.disabled = this.value.trim() === '';
});

customerNameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        completeEmailOrder(this.value.trim());
    }
});

emailCancelBtn.addEventListener('click', () => {
    emailModal.classList.remove('open');
    document.body.style.overflow = '';
    customerNameInput.value = '';
    emailProceedBtn.disabled = true;
});

emailProceedBtn.addEventListener('click', () => {
    completeEmailOrder(customerNameInput.value.trim());
});

// Minimum order modal event listeners
minOrderCloseBtn.addEventListener('click', () => {
    minOrderModal.classList.remove('open');
    document.body.style.overflow = '';
});

minOrderShopBtn.addEventListener('click', () => {
    minOrderModal.classList.remove('open');
    document.body.style.overflow = '';
    // Scroll to products section
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    // Cart modal
    if (!cartModal.contains(e.target) && !cartIcon.contains(e.target) && !mobileFab.contains(e.target) && cartModal.classList.contains('open')) {
        cartModal.classList.remove('open');
    }
    
    // Scrub modal
    if (scrubModal.classList.contains('open') && e.target === scrubModal) {
        scrubModal.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    // Email modal
    if (emailModal.classList.contains('open') && e.target === emailModal) {
        emailModal.classList.remove('open');
        document.body.style.overflow = '';
        customerNameInput.value = '';
        emailProceedBtn.disabled = true;
    }
    
    // Minimum order modal
    if (minOrderModal.classList.contains('open') && e.target === minOrderModal) {
        minOrderModal.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// Add active class to navigation links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], .hero');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Header scroll effect
function updateHeaderOnScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close cart if open
            cartModal.classList.remove('open');
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeProductQuantities();
    loadCartFromStorage();
    renderProducts();
    updateCart();
    updateMinimumOrderUI();

    // Initialize testimonials carousel (now defined in this file's scope)
    initTestimonialsCarousel();
    
    // Re-initialize carousel on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            initTestimonialsCarousel();
        }, 250);
    });
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        updateHeaderOnScroll();
    });
    
    // Update active nav link on page load
    updateActiveNavLink();
    updateHeaderOnScroll();
    
    // Listen for cart updates from other tabs (product pages)
    window.addEventListener('storage', function(e) {
        if (e.key === 'cartUpdated') {
            // Reload cart from storage when updated from another page
            loadCartFromStorage();
        }
    });
    
    // Add animation to product cards on scroll
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
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(card);
    });
    
    // Hide mobile FAB when cart is open
    if (mobileFab) {
        const cartObserver = new MutationObserver(() => {
            if (cartModal.classList.contains('open')) {
                mobileFab.style.display = 'none';
            } else if (window.innerWidth <= 768) { // Only show FAB on small screens
                mobileFab.style.display = 'flex';
            }
        });
        
        cartObserver.observe(cartModal, { attributes: true, attributeFilter: ['class'] });
    }

    // Also check FAB visibility on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileFab) {
            mobileFab.style.display = 'none';
        } else if (window.innerWidth <= 768 && mobileFab && !cartModal.classList.contains('open')) {
            mobileFab.style.display = 'flex';
        }
    });
    
    // Add structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Aura",
        "url": "https://bhaporganics.github.io/aurasoaps/",
        "logo": "logo-aura.png",
        "description": "Natural Ayurvedic handmade soaps crafted with pure ingredients for radiant, healthy skin.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Theni",
            "addressRegion": "Tamilnadu",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+918532853241",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Hindi"]
        }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    // Add product structured data
    const productStructuredData = products.map(product => ({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "Aura"
        },
        "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "INR",
            "priceValidUntil": "2024-12-31",
            "availability": "https://schema.org/InStock"
        }
    }));
    
    const productScript = document.createElement('script');
    productScript.type = 'application/ld+json';
    productScript.textContent = JSON.stringify(productStructuredData);
    document.head.appendChild(productScript);
});
