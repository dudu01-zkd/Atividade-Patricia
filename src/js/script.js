const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.togle('fa-bars');
    icon.classList.togle('fa-times');
});
