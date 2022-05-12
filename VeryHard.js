function coins(coins, amount)
{
    let table = new Array(amount+1);
    for(let i = 0; i < amount + 1; i++) //account for if the amount is 0
    {
        table[i] = 0;
    }
     
    for (let i = 1; i <= amount; i++) //initialize elements to max value
    {
        table[i] = Number.MAX_VALUE;
    }

}

console.log(coins([4,5,6,7,0,1,2], 3));