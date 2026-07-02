
document.addEventListener('DOMContentLoaded', () => {
  const vistas = document.querySelectorAll('.vistas > section[id]');

  function mostrarVista(id) {
    vistas.forEach(v => v.classList.toggle('vista-activa', v.id === id));
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + id);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const destino = href.length > 1 ? document.querySelector('.vistas ' + href) : null;
      if (destino) {
        e.preventDefault();
        mostrarVista(href.substring(1));

        // cierra el menú hamburguesa en móvil si estaba abierto
        const menu = document.getElementById('menu');
        if (menu && menu.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      }
    });
  });

  mostrarVista('inicio'); // vista con la que arranca la página
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
