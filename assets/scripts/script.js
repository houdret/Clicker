let score = 0;
let incrementNumber = 1;// value clicker number to make it change with the click bonus

let clickBonusPrice = 2;//price of init value
let autoClickPrice = 2;//price of init value
let megaClickPrice = 1;//price of init value

let autoClickValue = 0;

let intervalId = null;//variable to store info

let timer = 30;
let timerId = null;

document.getElementById('click-bonus-price').innerHTML = clickBonusPrice;
document.getElementById('auto-click-price').innerHTML = autoClickPrice;
document.getElementById('mega-click-price').innerHTML = megaClickPrice;

//Clicker function
document.getElementById('clicker').addEventListener('click', () => {
   
    score = score + incrementNumber;//change score value 
    document.getElementById('score').innerHTML = 'Score: ' + score; 

    if (score >= clickBonusPrice) { // check if you can click of the button 
    
       document.getElementById('click-bonus').disabled = false; 

    }

    if (score >= autoClickPrice) { // check if you can click of the button
         
        document.getElementById('auto-click').disabled = false;
    }

    if (score >= megaClickPrice) { // check if you can click of the button
         
        document.getElementById('mega-click').disabled = false;
    }

});

//clickBonus function 
document.getElementById('click-bonus').addEventListener('click', () => {
    
    score =  score - clickBonusPrice;//change score value -  the cost price
    document.getElementById('score').innerHTML = 'Score: '+ score;//change the display value of the score

    incrementNumber = incrementNumber + 1;//change the value at each click
    
    clickBonusPrice = clickBonusPrice * 2; // change the bonus price after buy them
    document.getElementById('click-bonus-price').innerHTML = clickBonusPrice//change the display value
    
    if (score < clickBonusPrice) {// check if you can by to next price 
        
        document.getElementById('click-bonus').disabled = true;
    }
});

//autoClick function
document.getElementById('auto-click').addEventListener('click', () => {
    
    score = score - autoClickPrice ////change score value 
    document.getElementById('score').innerHTML = 'Score: '+ score;//change the display value of the score

    autoClickPrice = autoClickPrice * 2; // change the bonus price after buy them
    document.getElementById('auto-click-price').innerHTML = autoClickPrice;//change the display value 

    autoClickValue = autoClickValue + 1; 
    
    if (score < autoClickPrice) {
        
        document.getElementById('auto-click').disabled = true;
        
    }

    if (intervalId != null) { //check interval id to make a fluid interval
        
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => {//create a loop every x sec

        score = score + autoClickValue;
        document.getElementById('score').innerHTML = 'Score: '+ score;

        if (score >= autoClickPrice) {
        
            document.getElementById('auto-click').disabled = false;
            
        }

    }, 1000)
        
    
});

//megaClick function
document.getElementById('mega-click').addEventListener('click', () => {

    score = score - megaClickPrice;
    document.getElementById('score').innerHTML = 'Score: '+ score;

    megaClickPrice = megaClickPrice * 2;
    document.getElementById('mega-click-price').innerHTML = megaClickPrice;

    if (score < megaClickPrice) {
        
        document.getElementById('mega-click').disabled = true;
    }

    
    document.getElementById('score').innerHTML = 'Score: '+ score;
    
    
    setInterval(() => {

        if (timer == -1) {
            
            clearTimeout(timerId); 
             
        } 
        else {
            
            document.getElementById('timer').innerHTML = 'second remaining: ' + timer;
            timer--;
            console.log(timerId);
            document.getElementById('clicker').addEventListener('click', () => {
                
                score = score * 2 ;
                
            }) 
        }
       
    }, 1000);

      
    
});






    



   



 