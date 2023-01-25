let time = setInterval(function () {
    let timer = document.getElementById("timer");
    if (timer.textContent > 0) {
        timer.textContent -= 1;
    } else {
        alert('Вы победили в конкурсе!');
        clearInterval(time);
    }
},1000)

