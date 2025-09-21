// === Hamburger toggle ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // show/hide menu
    hamburger.classList.toggle('open');  // animate icon
  });
}

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});

// === Smooth scrolling for anchor links ===
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // adjust for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// === Scroll reveal for sections ===
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < trigger) {
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
