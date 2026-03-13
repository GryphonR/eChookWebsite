// load navigation and manage active link without jQuery
function activateNavLinks() {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href && !link.parentElement.classList.contains('dropdown')) {
      link.parentElement.classList.add('active');
    }
    link.addEventListener('click', () => {
      if (!link.parentElement.classList.contains('dropdown')) {
        links.forEach(l => l.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Navigation is now inlined in the HTML to bypass CORS issues for local development.
  // We still run activateNavLinks to bind any active link logic, though styling is handled inline too.
  activateNavLinks();
});
