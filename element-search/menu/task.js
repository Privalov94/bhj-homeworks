const links = document.querySelectorAll('.menu__link');


links.forEach((link) => {
    link.addEventListener('click', (event) => {
        console.log(event.target)

        const parent = event.target.closest('.menu__item');
        console.log(parent);

        const submenu = parent.querySelectorAll('.menu_sub')
        submenu.forEach((value) => {
            value.classList.toggle('menu_active')
            event.preventDefault()
        })
    })
})