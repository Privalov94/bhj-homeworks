const dropdownList = document.querySelector('.dropdown__list');// список ul
const dropdownItem = document.querySelectorAll('.dropdown__item');// список li
let dropdownValue = document.querySelector('.dropdown__value');


dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
})

dropdownItem.forEach((value) => {
    value.addEventListener('click', (event) => {
        console.log(event.target);
        dropdownValue.textContent = event.target.textContent
        dropdownList.classList.toggle('dropdown__list_active');
        event.preventDefault()
    })
})

