'strict mode';

const cards = document.querySelectorAll('.card');
const activeCard = document.querySelector('.active-card');
const removeActiveClasses = () => {
  cards.forEach((card) => {
    card.classList.remove('active-card');
  });
};

cards.forEach((card) => {
  card.addEventListener('click', () => {
    removeActiveClasses();
    card.classList.add('active-card');
  });
});
