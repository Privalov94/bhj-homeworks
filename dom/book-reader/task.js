const btn = Array.from(document.querySelectorAll('.font-size'));
let size;
const book = document.querySelectorAll('p');
console.log(book);

btn.forEach(value => {
    value.addEventListener('click', selectBtn)
})

function selectBtn(event) {
   btn.forEach(value => {
    value.classList.remove('font-size_active')
   })

   this.classList.add('font-size_active');
    size = this.getAttribute('data-size');
    sizeBook()
   event.preventDefault()
}

function sizeBook() {
    book.forEach(value => {
        if(size === 'big' ) {
            value.classList.remove('book_fs-small')
             value.classList.add('book_fs-big')
        } 
         if (size === 'small') {
            value.classList.remove('book_fs-big')
            value.classList.add('book_fs-small')
        } 
         if(size === null) {
            value.classList.remove('book_fs-small')
            value.classList.remove('book_fs-big')
            value.classList.add('book')
        }
    })
}








