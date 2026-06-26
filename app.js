// =====================
// SCROLL SUAVE
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =====================
// NAVBAR AL HACER SCROLL
// =====================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(230,227,220,.98)';
    navbar.style.boxShadow  = '0 2px 16px rgba(0,0,0,.08)';
  } else {
    navbar.style.background = 'rgba(242,240,235,.95)';
    navbar.style.boxShadow  = 'none';
  }
});

// =====================
// ACORDEÓN CATEGORÍAS BATALLA
// =====================
function toggleCat(id) {
  const body  = document.getElementById('cat-'   + id);
  const arrow = document.getElementById('arrow-' + id);
  const isOpen = body.classList.contains('open');

  // Cerrar todos
  document.querySelectorAll('.cat-vitrina-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.cat-vitrina-arrow').forEach(a => a.classList.remove('open'));

  // Abrir el clickeado si estaba cerrado
  if (!isOpen) {
    body.classList.add('open');
    arrow.classList.add('open');
  }
}
