
const progress = document.getElementById('progress');
const form = document.getElementById('form');
const file = document.getElementById('file');


form.addEventListener('sumbit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=> {
        if(xhr.readyState === xhr.DONE && xhr.status === 200) {
            xhr.upload.onprogress = function() {
                progress.value = 0.7;
            }
        }
    })

    const formData = new FormData();
    formData.append('file', file.files[0]);

    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/upload');

    xhr.send(formData);
    
})