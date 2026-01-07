// =======================
// Header Smart Hide/Show on Scroll
// =======================

let lastScrollTop = 0;
const nav = document.querySelector('.nav');
const scrollThreshold = 100; // Commence à cacher après 100px de scroll

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Ne pas cacher le header si on est tout en haut
    if (scrollTop < scrollThreshold) {
        nav.classList.remove('hidden');
        lastScrollTop = scrollTop;
        return;
    }
    
    // Scroll vers le bas - cacher le header
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        nav.classList.add('hidden');
    } 
    // Scroll vers le haut - montrer le header
    else if (scrollTop < lastScrollTop) {
        nav.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
});

// =======================
// Mobile Navigation Toggle
// =======================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// =======================
// Scroll Animations
// =======================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card, .feature-item, .use-case, .process-step');
    
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        
        animateOnScroll.observe(el);
    });
});

// =======================
// Smooth Scroll for Anchor Links
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =======================
// Active Navigation on Scroll
// =======================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = document.querySelector('.nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// =======================
// Form Validation (if needed later)
// =======================

// This can be extended when you add a contact form
// For now, the mailto link is sufficient

console.log('OR AI - Site loaded successfully ✓');
