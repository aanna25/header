
/* Mobile menu open */
document.querySelectorAll('.js-mobile-menu').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.mobile-menu').classList.toggle('is-open');
    });
  });
  
 /* Mobile menu close */
  document.querySelectorAll('.js-close-menu').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.mobile-menu').classList.remove('is-open');
    });
  });