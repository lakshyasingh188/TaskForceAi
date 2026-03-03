// script.js
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Intersection Observer for long-scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(section);
    });
});