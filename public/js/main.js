// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializePortfolio();
});

function initializePortfolio() {
    // Show home section by default
    showSection('home');
    
    // Add event listeners
    setupEventListeners();
    
    // Add smooth scrolling
    setupSmoothScrolling();
}

function setupEventListeners() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('navMenu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (navMenu && toggle && !navMenu.contains(event.target) && !toggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Add click handlers for navigation items
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('onclick')?.match(/showSection\('(.+)'\)/)?.[1];
            if (sectionId) {
                showSection(sectionId);
            }
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Update URL hash without scrolling
        history.replaceState(null, null, `#${sectionId}`);
        
        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        
        // Trigger animation
        triggerSectionAnimation(targetSection);
    }
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function triggerSectionAnimation(section) {
    // Add animation class to content cards
    const contentCards = section.querySelectorAll('.content-card, .hero');
    contentCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function setupSmoothScrolling() {
    // Handle hash changes in URL
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            showSection(hash);
        }
    });
    
    // Handle initial page load with hash
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        showSection(hash);
    }
}

// Typing effect for the hero section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add typing effect to hero title when home section is shown
function addTypingEffect() {
    const heroTitle = document.querySelector('#home .hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 100);
    }
}

// Portfolio data fetching (if needed for dynamic content)
async function fetchPortfolioData() {
    try {
        const response = await fetch('/api/portfolio');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        return null;
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll effects (optional)
function addScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all cards
    const cards = document.querySelectorAll('.service-card, .project-card, .contact-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// Initialize scroll effects when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addScrollEffects, 1000);
});

// Export functions for global use
window.showSection = showSection;
window.toggleMobileMenu = toggleMobileMenu;