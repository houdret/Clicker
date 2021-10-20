let score = document.getElementById("score");
let x = 1;
let y = 1
let z = 0;
let count = 0;
let cpt = 0;
let auto = 0;
let sp = 0;
let cookie = document.getElementById("cookie");
cookie.hidden = true;
let bonus = document.getElementById("bonus");
bonus.disabled = true;
let b = false;
let b1 = false;
let b2 = false;
let inputBonus;
let inputBonus2;
let inputBonus3;
let autoClick = document.getElementById("autoClick");
autoClick.disabled = true;
let autocrement;
let a = false;
let special = document.getElementById("special");
special.disabled = true;
let s = false;
//let timer = 30;
function stateHandle() {
    if (cpt < 1) {
        bonus.disabled = true
        cookie.hidden = true;
    } else {
        bonus.disabled = false;
        cookie.hidden = false;
    }
}

function stateHandle2() {
    if (cpt < 2) {
        bonus.disabled = true
    } else {
        bonus.disabled = false;
    }
}

function stateHandle3() {
    if (cpt < 3) {
        bonus.disabled = true
    } else {
        bonus.disabled = false;
    }
}

 function stateHandleAuto() {
    if (auto < 1) {
        autoClick.disabled = true;
    } else {
        autoClick.disabled = false;
    }
} 

function stateHandleSpecial() {

    if (sp < 1) {
        special.disabled = true;
    } else {
        special.disabled = false;
    }
}

function funcSpecial() {
    if (count >= 3000) {
        count -= 3000;
        count *= 100 * 2;
    }
    return count;
}
function counter() {
    count += 2;
    score.innerHTML = "Score :" + count; 
    setTimeout(counter, 1000);
}

document.getElementById("count").addEventListener("click", function () {

    count++;
    score.innerHTML = "Score :" + count;
    if (count >= 50 && count < 100) {
        auto = 1;
        count -= 50;
        stateHandleAuto();
        document.getElementById("autoClick").addEventListener("click", function () {
            a = true;           
        })
        if (a === true) {
           autocrement = document.getElementById("input-autoclick").innerHTML = "Auto increment  +2";
           
        }  
          counter();
          a = false; 
    } 

    if (count >= 100 && count < 300) {
        cpt = 1;
        stateHandle();
        document.getElementById("bonus").addEventListener("click", function () {
            b = true;
        })
        if (b === true) {
            inputBonus = document.getElementById("input-bonus").innerHTML = "Bonus +2";
        }

        x = x + 2;
        b = false;
        score.innerHTML = "Score :" + x;
    }

    if (x >= 300 && x < 500) {

        cpt = 2;
        stateHandle2();
        document.getElementById("bonus").addEventListener("click", function () {
            b1 = true;
        })
        if (b1 === true) {
            inputBonus2 = document.getElementById("input-bonus").innerHTML = "Bonus +4";
        }
        b1 = false;
        y = y + 4;
        score.innerHTML = "Score :" + y;
    }

    if (y >= 600 && y < 3000) {
        cpt = 3;
        stateHandle3();
        document.getElementById("bonus").addEventListener("click", function () {
            b2 = true;
        })
        if (b2 === true) {
            inputBonus3 = document.getElementById("input-bonus").innerHTML = "Bonus +6";
        }
        b2 = false;
        z = z + 6;
        count = z;
        score.innerHTML = "Score :" + z;
    }

    if (count >= 3000 && count < 5000) { 
        sp = 1;
        stateHandleSpecial();
        document.getElementById("special").addEventListener("click", function () {
            s = true;
        })
        if (s === true) {
            count = funcSpecial(count);
            document.getElementById("input-special").innerHTML = "Spécial Bonus";

        }
        s = false;
        score.innerHTML = "Score :" + count;
    }
});