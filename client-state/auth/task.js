const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const control = document.querySelectorAll('.control');
const btn = document.querySelector('.btn')

signin.classList.add('signin_active');

const input = control.forEach(item => {
    item.addEventListener('change', (event) => {
        event.target
    })
})

const forms = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            if(xhr.readyState === xhr.DONE) {
            }
        })
        const formData = new FormData(input);
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.send(formData);
    })
    
}

const btnForms = () => {
    btn.addEventListener('click', () => {
        forms()
    })
}

btnForms()




