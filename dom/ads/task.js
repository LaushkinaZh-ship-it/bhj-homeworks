document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    
    if (cases.length === 0) return;

    const firstCase = cases[0];
    const speed = parseInt(firstCase.getAttribute('data-speed')) || 1000;

    let currentIndex = 0;

    const updateActive = () => {
      cases.forEach(caseEl => {
        caseEl.classList.remove('rotator__case_active');
        caseEl.style.color = '';
      });

      const activeCase = cases[currentIndex];
      activeCase.classList.add('rotator__case_active');
      
      const color = activeCase.getAttribute('data-color');
      if (color) {
        activeCase.style.color = color;
      }

      currentIndex = (currentIndex + 1) % cases.length;
    };

    setInterval(updateActive, speed);

    updateActive();
  });
});
