const file = document.getElementById('file');
const progress = document.getElementById( 'progress' );

document.forms.form.addEventListener('sumbit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=> {
        if(xhr.readyState === xhr.DONE) {
            xhr.upload.onprogress = function() {
                progress.value = 0.7;
            }
        }
    })

    const formData = new FormData();
    formData.append('file', file.files[0]);

    xhr.open('GET','https://students.netoservices.ru/nestjs-backend/upload');

    xhr.send(formData);
})