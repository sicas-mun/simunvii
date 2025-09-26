// === Hamburger toggle ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  // Toggle menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });
}

// === Smooth scrolling for anchor links ===
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // adjust for fixed navbar height
        behavior: 'smooth'
      });
    }
  });
});

// === Scroll reveal for sections ===
const sections = document.querySelectorAll('.section');
function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // run on load

// === Parallax effect for hero section ===
const hero = document.querySelector('.hero[data-parallax]');
function applyParallax() {
  if (!hero) return;

  if (window.innerWidth > 768) {
    hero.style.backgroundAttachment = 'fixed';
    hero.style.backgroundPosition = 'center top';
    window.addEventListener('scroll', parallaxScroll);
  } else {
    hero.style.backgroundAttachment = 'scroll';
    hero.style.backgroundPosition = 'center';
    window.removeEventListener('scroll', parallaxScroll);
  }
}

function parallaxScroll() {
  const offset = window.scrollY;
  hero.style.backgroundPositionY = `${offset * 0.4}px`;
}

if (hero) {
  applyParallax();
  window.addEventListener('resize', applyParallax);

  // Hero hover tilt effect
  hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    hero.style.transform = `translate(${x}px, ${y}px)`;
  });
  hero.addEventListener('mouseleave', () => {
    hero.style.transform = 'translate(0,0)';
  });
}
