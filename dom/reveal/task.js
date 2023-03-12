const reveal = Array.from(document.querySelectorAll('.reveal'));

console.log(reveal);


document.addEventListener('scroll', isVisible(reveal))

function isVisible(el) {
    el.forEach( value => {
        const{top, bottom} = value.getBoundingClientRect();
        if(top > 0 && bottom > window.innerHeight) {
            value.classList.add('reveal_active');
        }
    })
}