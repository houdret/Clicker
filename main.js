(() => {
    // let score =document.getElementsByClassName("score");
    // let count = 0;
    // let bonus = document.querySelector("#bonus");
    // bonus.disabled = true;
    // input.addEventListener("change", stateHandle);

    /* function stateHandle() {
        if (count !== 10) {
            bonus.disabled = true;
        } else {
            bonus.disabled = false;
        }
    } */
    document.getElementById("count").addEventListener("click", function () {
        let score =document.getElementsByClassName("score");
        let count = 0;
        let bonus = document.querySelector("#bonus");
        bonus.disabled = true;
        count++;
        
        //score.innerHTML = count;
        // stateHandle();
        if (count === 10) {
             count += 4;
        }
        score.innerHTML  += count;
        console.log(count);
        document.getElementsById('score').innerHTML += count;
    });
    
})();