document.addEventListener('DOMContentLoaded', () => {
  const tabsContainers = document.querySelectorAll('.tabs');

  tabsContainers.forEach(container => {
    const navigation = container.querySelector('.tab__navigation');
    const contents = container.querySelectorAll('.tab__content');
    const tabs = container.querySelectorAll('.tab');

    navigation.addEventListener('click', (event) => {
      const clickedTab = event.target.closest('.tab');
      
      if (!clickedTab) return;

      const index = Array.from(tabs).indexOf(clickedTab);

      tabs.forEach(tab => tab.classList.remove('tab_active'));
      contents.forEach(content => content.classList.remove('tab__content_active'));

      clickedTab.classList.add('tab_active');
      contents[index].classList.add('tab__content_active');
    });
  });
});
