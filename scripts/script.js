// load navigation and manage active link without jQuery
function activateNavLinks() {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.parentElement.classList.add('active');
    }
    link.addEventListener('click', () => {
      links.forEach(l => l.parentElement.classList.remove('active'));
      link.parentElement.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      const placeholder = document.getElementById('nav-placeholder');
      if (placeholder) {
        placeholder.outerHTML = html;
        activateNavLinks();
      }
    })
    .catch(err => console.error('Failed to load nav.html', err));
});
