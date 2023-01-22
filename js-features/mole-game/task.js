let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

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
            dead = 0;
            lost = 0;
            alert ("Вы победили!");
        } else if (Number(lost.textContent) === 5) {
            dead = 0;
            lost = 0;
            alert ("Вы проиграли");
        }
    }

    
}




