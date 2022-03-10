const btnMenu = document.querySelector('#btnMenu')
const nav = document.querySelector('.nav-ul')
// Responsive Menu
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('show')
})