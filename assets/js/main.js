// PlayLabs.ai - Main JavaScript

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});

// Newsletter Form Handler
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would integrate with your email service
        console.log('Newsletter signup:', email);
        
        // Show success message
        alert('Thank you for subscribing! Check your email for your free AI Productivity Tip.');
        this.reset();
    });
}

// Free GPT Form Handler
const freeGptForm = document.getElementById('freeGptForm');
if (freeGptForm) {
    freeGptForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const firstName = this.querySelector('#firstName').value;
        const email = this.querySelector('#email').value;
        
        // Here you would integrate with your email service
        console.log('Free GPT signup:', { firstName, email });
        
        // Redirect to thank you page or show success
        alert(`Welcome ${firstName}! Check your email for your free AI Productivity Assistant link.`);
        this.reset();
    });
}

// Add to Cart Function
function addToCart(playbookId) {
    console.log('Adding to cart:', playbookId);
    
    // Here you would integrate with your e-commerce platform (Lemon Squeezy)
    // For now, we'll show an alert
    alert('Redirecting to secure checkout...');
    
    // In production, redirect to checkout page
    // window.location.href = `/checkout?product=${playbookId}`;
}

// Bundle Selection
function selectBundle(bundleType) {
    console.log('Selecting bundle:', bundleType);
    
    // Here you would integrate with your e-commerce platform
    alert('Redirecting to bundle selection...');
    
    // In production, redirect to bundle selection page
    // window.location.href = `/bundle/${bundleType}`;
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.playbook-card, .step, .feature, .gpt-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Cart Management (Simple localStorage implementation)
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
    }

    loadCart() {
        const cart = localStorage.getItem('playbooks_cart');
        return cart ? JSON.parse(cart) : [];
    }

    saveCart() {
        localStorage.setItem('playbooks_cart', JSON.stringify(this.items));
    }

    addItem(playbookId, price = 29) {
        const existing = this.items.find(item => item.id === playbookId);
        if (!existing) {
            this.items.push({ id: playbookId, price: price, quantity: 1 });
            this.saveCart();
            this.updateCartUI();
        }
    }

    removeItem(playbookId) {
        this.items = this.items.filter(item => item.id !== playbookId);
        this.saveCart();
        this.updateCartUI();
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    updateCartUI() {
        // Update cart badge if it exists
        const cartBadge = document.getElementById('cartBadge');
        if (cartBadge) {
            const count = this.getItemCount();
            cartBadge.textContent = count;
            cartBadge.style.display = count > 0 ? 'block' : 'none';
        }
    }
}

// Initialize cart
const cart = new ShoppingCart();
cart.updateCartUI();

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading states to buttons
function addLoadingState(button) {
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    button.textContent = 'Loading...';
}

function removeLoadingState(button) {
    button.disabled = false;
    button.textContent = button.dataset.originalText;
}

// Track Analytics Events (placeholder for Google Analytics, etc.)
function trackEvent(category, action, label) {
    console.log('Analytics Event:', { category, action, label });
    
    // Integrate with your analytics platform
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track page views
document.addEventListener('DOMContentLoaded', function() {
    trackEvent('Page', 'View', window.location.pathname);
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You could send this to an error tracking service
});

// Service Worker Registration (for PWA features if needed)
if ('serviceWorker' in navigator) {
    // Uncomment when you have a service worker
    // navigator.serviceWorker.register('/sw.js');
}

console.log('PlayLabs.ai initialized successfully');
