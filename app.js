// Función para verificar si el dispositivo es móvil
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Función para ocultar o mostrar el elemento en modo responsive
function toggleSocialLinks() {
  var socialLinks = document.querySelector('.social');
  if (isMobileDevice()) {
    socialLinks.classList.add('hidden');
  } else {
    socialLinks.classList.remove('hidden');
  }
}

// Llamar a la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('DOMContentLoaded', toggleSocialLinks);
window.addEventListener('resize', toggleSocialLinks);
