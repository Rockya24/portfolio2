const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Bonus : quand on clique sur un lien, on ferme le menu :
const links = document.querySelectorAll('.menu a');
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
