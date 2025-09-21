// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId) || document.querySelector('body');
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Adjust for fixed navbar
      behavior: 'smooth'
    });
  });
});

// Scroll reveal for sections
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add('visible');
    }
  });
});

// Parallax fallback for mobile
const hero = document.querySelector('.hero');
function updateParallax() {
  if (window.innerWidth > 768) {
    hero.style.backgroundAttachment = 'fixed';
  } else {
    hero.style.backgroundAttachment = 'scroll'; // Fallback for mobile
  }
}
window.addEventListener('resize', updateParallax);
updateParallax();