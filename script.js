// Global state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentSection = 'home';

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    populateServiceSections();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Copy coupon codes
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('copy-btn') || e.target.parentElement.classList.contains('copy-btn')) {
            const couponCode = e.target.closest('.coupon-code').querySelector('strong').textContent;
            copyToClipboard(couponCode);
        }
    });

    // Checkout button
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('checkout-btn')) {
            handleCheckout();
        }
    });
}

// Navigation functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
    }
    
    // Update bottom navigation
    updateBottomNav(sectionId);
}

function showCategory(categoryId) {
    showSection(categoryId);
}

function updateBottomNav(activeSection) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`.nav-item[onclick*="${activeSection}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

// Populate service sections
function populateServiceSections() {
    populateServiceCategory('facials');
    populateServiceCategory('lash-extensions');
    populateServiceCategory('eyebrows');
    populateServiceCategory('combos');
}

function populateServiceCategory(categoryId) {
    const container = document.getElementById(`${categoryId}-content`);
    if (!container) return;
    
    const services = getServicesByCategory(categoryId);
    
    if (services.length === 0) {
        container.innerHTML = '<p class="no-services">No services available in this category.</p>';
        return;
    }
    
    container.innerHTML = services.map(service => createServiceCard(service)).join('');
}

function createServiceCard(service) {
    const discount = service.originalPrice - service.discountedPrice;
    const discountPercent = Math.round((discount / service.originalPrice) * 100);
    
    return `
        <div class="service-item" data-service-id="${service.id}">
            <div class="service-header">
                <div class="service-details">
                    <h3>${service.name}${service.isAddon ? '<span class="addon-tag">ADD ON</span>' : ''}</h3>
                    <p>${service.description}</p>
                    ${service.services ? `<div class="combo-description">Includes: ${service.services.join(' + ')}</div>` : ''}
                </div>
                <div class="service-pricing">
                    <span class="current-price">₹${service.discountedPrice}</span>
                    ${service.originalPrice !== service.discountedPrice ? `<span class="original-price">₹${service.originalPrice}</span>` : ''}
                </div>
            </div>
            <div class="service-actions">
                <div class="service-duration">
                    <i class="fas fa-clock"></i>
                    <span>${service.duration} mins</span>
                </div>
                <button class="add-btn" onclick="addToCart('${service.id}')">ADD+</button>
            </div>
        </div>
    `;
}

// Cart functionality
function addToCart(serviceId) {
    const allServices = [...servicesData.facials, ...servicesData['lash-extensions'], ...servicesData.eyebrows, ...servicesData.addons, ...servicesData.combos];
    const service = allServices.find(s => s.id === serviceId);
    
    if (!service) return;
    
    const existingItem = cart.find(item => item.id === serviceId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...service,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartBadge();
    showCartNotification(`${service.name} added to cart!`);
}

function removeFromCart(serviceId) {
    cart = cart.filter(item => item.id !== serviceId);
    saveCart();
    updateCartBadge();
    renderCart();
}

function updateQuantity(serviceId, newQuantity) {
    const item = cart.find(item => item.id === serviceId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(serviceId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartBadge();
            renderCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function renderCart() {
    const cartContent = document.getElementById('cart-content');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartContent.style.display = 'block';
        cartItems.style.display = 'none';
        cartTotal.style.display = 'none';
        return;
    }
    
    cartContent.style.display = 'none';
    cartItems.style.display = 'block';
    cartTotal.style.display = 'block';
    
    // Render cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <h4>${item.name}</h4>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="cart-item-details">
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <div class="service-price">
                    <span class="current-price">₹${item.discountedPrice * item.quantity}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
    const total = cart.reduce((sum, item) => sum + (item.discountedPrice * item.quantity), 0);
    const discount = subtotal - total;
    
    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('discount').textContent = `-₹${discount}`;
    document.getElementById('total').textContent = `₹${total}`;
}

// Show cart when cart section is active
function showCartSection() {
    showSection('cart');
    renderCart();
}

// Search functionality
function handleSearch(event) {
    const query = event.target.value.trim();
    if (query.length < 2) return;
    
    const results = searchServices(query);
    showSearchResults(results);
}

function showSearchResults(results) {
    // Create or update search results section
    let searchSection = document.getElementById('search-results');
    if (!searchSection) {
        searchSection = document.createElement('section');
        searchSection.id = 'search-results';
        searchSection.classList.add('service-category-section');
        document.querySelector('.main-content').appendChild(searchSection);
    }
    
    searchSection.innerHTML = `
        <div class="page-header">
            <button class="back-btn" onclick="showSection('home')">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1>Search Results</h1>
        </div>
        <div class="services-list">
            ${results.length > 0 
                ? results.map(service => createServiceCard(service)).join('')
                : '<p class="no-results">No services found matching your search.</p>'
            }
        </div>
    `;
    
    showSection('search-results');
}

// Utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`Coupon code ${text} copied!`);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(`Coupon code ${text} copied!`);
    });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 9999;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showCartNotification(message) {
    showNotification(message);
}

function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.discountedPrice * item.quantity), 0);
    const totalServices = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const whatsappMessage = encodeURIComponent(
        `Hello! I'd like to book the following services:\n\n` +
        cart.map(item => `${item.name} x${item.quantity} - ₹${item.discountedPrice * item.quantity}`).join('\n') +
        `\n\nTotal: ₹${total}\nServices: ${totalServices}\n\nPlease confirm my appointment. Thank you!`
    );
    
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');
}

// Override cart navigation to render cart
document.querySelector('.nav-item[onclick*="cart"]').onclick = showCartSection;
