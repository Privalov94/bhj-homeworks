let clicks = 0;
let flag = 180;
const image = document.getElementById("cookie");
const clickerStatus = document.getElementById("clicker__counter");

image.onclick = function() {
    clickerStatus.textContent = clicks++;
    if(flag < image.width) {
        image.width = image.width - 20;
    } else {
        image.width = 200;
    }
}

