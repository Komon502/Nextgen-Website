const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('a');

window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

function closeMenu() {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', function () {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

navLinks.forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(function (s) { observer.observe(s); });

const faqs = document.querySelectorAll('.faq');
faqs.forEach(function (item) {
  item.addEventListener('toggle', function () {
    if (!item.open) return;
    faqs.forEach(function (other) {
      if (other !== item) other.open = false;
    });
  });
});