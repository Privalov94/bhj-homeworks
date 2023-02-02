
let modalMain = document.getElementById('modal_main')
let modalSucces = document.getElementById('modal_success')
let showSucces = document.querySelector('.show-success')
let modalClose = document.querySelectorAll('.modal__close')
modalMain.classList.add('modal_active')



modalClose.forEach((button) => {
    button.addEventListener('click', function() {
        document.getElementById('modal_main').style.display = 'none'
    })
})


showSucces.addEventListener('click', function() {
   modalSucces.classList.add('modal_active')
})




