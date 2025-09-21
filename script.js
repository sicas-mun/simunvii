// === Smooth scrolling for nav links ===
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // If link is external or HTML page, let it navigate normally
    if (!href.startsWith('#')) return;

    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // adjust for fixed navbar
        behavior: 'smooth'
      });
    }

    // Close hamburger menu if open
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburger');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});

// === Scroll reveal for sections ===
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add('visible');
    }
  });
});

// === Parallax effect for hero section ===
const hero = document.querySelector('.hero[data-parallax]');
if (hero) {
  function updateParallax() {
    if (window.innerWidth > 768) {
      hero.style.backgroundAttachment = 'fixed';
      window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        hero.style.backgroundPositionY = `${offset * 0.4}px`;
      });
    } else {
      hero.style.backgroundAttachment = 'scroll';
      hero.style.backgroundPositionY = 'center';
    }
  }
  window.addEventListener('resize', updateParallax);
  updateParallax();

  // Interactive hero tilt effect
  hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    hero.style.transform = `translate(${x}px, ${y}px)`;
  });
  hero.addEventListener('mouseleave', () => {
    hero.style.transform = 'translate(0, 0)';
  });
}

// === Hamburger menu toggle ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // toggle menu visibility
  hamburger.classList.toggle('open');  // animate hamburger
});
