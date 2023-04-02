let titlePoll = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';



xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const answer = xhr.response.data.answers;
        const title = xhr.response.data.title;
        titlePoll.innerHTML = title
        answer.forEach(item => {
            create(item)
        })
    }
})

function create(answers) {
    let pollAnswer = document.createElement('button');
    pollAnswer.className = 'poll__answer';
    pollAnswer.innerHTML = answers

    pollAnswers.appendChild(pollAnswer);

    document.querySelectorAll('.poll__answer').forEach(item => {
        item.addEventListener('click', (event) => {
            console.log(event.target);
            alert('Спасибо, ваш голос засчитан!');
        })
    })
}


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();