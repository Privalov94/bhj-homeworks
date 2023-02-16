const slides = Array.from(document.querySelectorAll('.slider__item'));
const button = document.querySelectorAll('.slider__arrows')

console.log(slides);

function findActiveSlide() { 
    let index = slides.findIndex(item => item.classList.contains("slider__item_active"));
    slides[index].classList.remove("slider__item_active");
    index - 1 ===  -1  ? index = slides.length - 1 : index--
    slides[index].classList.add("slider__item_active")
  }


button.forEach((value) => {
    value.addEventListener('click', (event) => {
        console.log(event.target);
        findActiveSlide()
    })
})




























