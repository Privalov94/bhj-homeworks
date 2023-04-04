
const progress = document.getElementById('progress');
const form = document.getElementById('form');
const file = document.getElementById('file');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded
    }
    xhr.onload = function() {
        if(xhr.status === 201) {
          console.log('Файл загружен')
        } else {
            console.log('Файл не загружен');
        }
    }

    const formData = new FormData();
    formData.append('file', file.files[0]);

    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/upload');

    xhr.send(formData);
    
})