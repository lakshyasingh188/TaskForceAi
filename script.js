// 1. Initialize Scroll Animations (AOS)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// 3. Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '10px 5%';
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.padding = '15px 5%';
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// 4. Parallax Effect for Background Overlay (Subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const overlay = document.querySelector('.bg-overlay');
    overlay.style.background = `radial-gradient(circle at center, rgba(5, 5, 8, ${0.4 + (scrolled * 0.0005)}) 0%, rgba(5, 5, 8, 0.95) 100%)`;
});
// Initialize Animations
AOS.init({ duration: 1000, once: true });

// Mobile Menu Toggle Logic
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
