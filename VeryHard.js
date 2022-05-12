
function coins(coins, amount) {

    let table = [amount+1];
    for(let i = 0; i < amount + 1; i++) { //account for if the amount is 0 
        table[i] = 0;
    }
     
    for (let i = 1; i <= amount; i++) { //initialize elements to max value representable in JS
        table[i] = Number.MAX_VALUE;
    }

}

//This is as far as I could go :( 