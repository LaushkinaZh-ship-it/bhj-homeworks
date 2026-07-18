document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const checkVisibility = () => {
    reveals.forEach(element => {
      if (element.classList.contains('reveal_active')) return;

      const rect = element.getBoundingClientRect();
      
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

      if (isVisible) {
        element.classList.add('reveal_active');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  
  checkVisibility();
});