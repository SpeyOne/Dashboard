const observer = new IntersectionObserver(entries => {
// перебор записей
entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('load_20');
      }
    });
  });
  observer.observe(document.querySelector('.project_progress'));

