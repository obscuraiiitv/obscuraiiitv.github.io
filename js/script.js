const sponsors = document.getElementById('sponsors');

const { body } = document;


sponsors.addEventListener('click', e => {
    body.classList.toggle('show-sponsors');
});