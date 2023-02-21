const slides = Array.from(document.querySelectorAll('.slider__item'));
const btnPrev = document.querySelector('.slider__arrow_prev')
const btnNext = document.querySelector('.slider__arrow_next')


console.log(slides);

function findActiveSlidePrev() { 
    let index = slides.findIndex(item => item.classList.contains("slider__item_active"));
    slides[index].classList.remove("slider__item_active");
    index - 1 === - 1 ? index = slides.length - 1 : index --
    slides[index].classList.add("slider__item_active");
  }

  function findActiveSlideNext() { 
    let index = slides.findIndex(item => item.classList.contains("slider__item_active"));
    slides[index].classList.remove("slider__item_active");
    index - 1 === slides.length ? index = 0 : index ++
    slides[index].classList.add("slider__item_active");
  }

  btnPrev.onclick = findActiveSlidePrev;
  btnNext.onclick = findActiveSlideNext;

































