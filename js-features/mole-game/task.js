const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let counterDead = 0;
let counterLost = 0;

for (let index = 1; index <= 9; index++) {

    function getHole (index) {
        let holeClick = document.getElementById(`hole${index}`);
        return holeClick;
    }

    let hole = getHole (index);
 
    hole.onclick = function() {
        if (hole.className.includes("hole_has-mole") === true) {
            dead.innerHTML++;
        } else {
            lost.innerHTML++;
        }

        if (Number(dead.textContent) === 10) {
            dead.textContent = counterDead
            lost.textContent = counterLost
            alert ("Вы победили!");
        } else if (Number(lost.textContent) === 5) {
            dead.textContent = counterDead
            lost.textContent = counterLost
            alert ("Вы проиграли");
        }
    }
}




