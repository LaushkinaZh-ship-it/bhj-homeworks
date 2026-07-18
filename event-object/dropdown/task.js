document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueEl = dropdown.querySelector('.dropdown__value');
        const listEl = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        valueEl.addEventListener('click', (e) => {
            e.stopPropagation(); 
            
            const isActive = listEl.classList.contains('dropdown__list_active');
            
            dropdowns.forEach(d => {
                const l = d.querySelector('.dropdown__list');
                l.classList.remove('dropdown__list_active');
            });

            if (!isActive) {
                listEl.classList.add('dropdown__list_active');
            }
        });

        items.forEach(item => {
            const link = item.querySelector('.dropdown__link');
            
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                
                const text = link.textContent.trim();
                
                valueEl.textContent = text;
                
                listEl.classList.remove('dropdown__list_active');
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const list = dropdown.querySelector('.dropdown__list');
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});
