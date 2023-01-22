let clicks = 0;
const image = document.getElementById("cookie");
const clickerStatus = document.getElementById("clicker__counter");

function start() {
    clickerStatus.textContent = clicks++; 
}

image.onclick = start;

