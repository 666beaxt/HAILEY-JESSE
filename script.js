// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile Menu =====
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelector('.nav-links');
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Stats Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number[data-target]');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'));
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current);
                }
            }, 30);
            statsObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
statNumbers.forEach(el => statsObserver.observe(el));

// ===== Slideshow =====
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].classList.add('active');
    }
}

// Auto-advance slideshow every 5 seconds
setInterval(() => plusSlides(1), 5000);

// ===== Smooth Scroll for Nav =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Contact Form (placeholder) =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks! We\'ll be in touch soon.');
    this.reset();
});

// ===== CLIENT LOGOS TICKER ANIMATION =====
const tickerTrack = document.querySelector('.ticker-track');
if (tickerTrack) {
    tickerTrack.addEventListener('mouseover', () => {
        tickerTrack.style.animationPlayState = 'paused';
    });
    tickerTrack.addEventListener('mouseout', () => {
        tickerTrack.style.animationPlayState = 'running';
    });
}
