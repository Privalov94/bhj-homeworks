const slides = Array.from(document.querySelectorAll('.slider__item'));
const button = document.querySelectorAll('.slider__arrows')
let i = 0;



button.forEach((value) => {
    value.addEventListener('click', () => {
        i++;
        if (i >= slides.length) {
            slides[i - 1].classList.remove("slider__item_active");
            i = 0;
            slides[i].classList.add("slider__item_active");
        } else {
            slides[i - 1].classList.remove("slider__item_active");
            slides[i].classList.add("slider__item_active");
        }
    })
})









