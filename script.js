// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetId = href.includes('#') ? href.split('#')[1] : href;
    const targetElement = targetId.includes('.html') ? document.querySelector('body') : document.getElementById(targetId);
    window.scrollTo({
      top: targetElement ? targetElement.offsetTop - 80 : 0, // Adjust for navbar
      behavior: 'smooth'
    });
  });
});

// Scroll reveal for sections
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

// Parallax effect for hero
const hero = document.querySelector('.hero[data-parallax]');
function updateParallax() {
  if (window.innerWidth > 768) {
    hero.style.backgroundAttachment = 'fixed';
    window.addEventListener('scroll', () => {
      const offset = window.scrollY;
      hero.style.backgroundPositionY = `${offset * 0.4}px`; // Subtle parallax
    });
  } else {
    hero.style.backgroundAttachment = 'scroll'; // Fallback for mobile
    hero.style.backgroundPositionY = 'center';
  }
}
window.addEventListener('resize', updateParallax);
updateParallax();

// Interactive hero hover effect
hero.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const x = (clientX / window.innerWidth - 0.5) * 20; // Subtle tilt
  const y = (clientY / window.innerHeight - 0.5) * 20;
  hero.style.transform = `translate(${x}px, ${y}px)`;
});
hero.addEventListener('mouseleave', () => {
  hero.style.transform = 'translate(0, 0)';
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});
