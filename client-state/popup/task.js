const modal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close');
modal.classList.add('modal_active');

function getCookie(name) {
    let cookieArr = document.cookie.split('; ');
    let cookieObj = {};

    for (let i = 0; i < cookieArr.length; i++) {
        let nv = cookieArr[i].split('=');
        cookieObj[nv[0]] = nv[1];
    }

    return cookieObj[name];
}

if (getCookie('modal__close') == 'yes') {
    modal.classList.remove('modal_active');
}

modalClose.addEventListener('click', function () {
    document.cookie = "modal__close=yes";

    modal.classList.remove('modal_active');
});













