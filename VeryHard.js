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

    for (let i = 1; i <= amount; i++)
    {
      for (let j = 0; j < coins.length; j++){
        if (coins[j] <= i)
        {
            let subResult = table[i - coins[j]];
            if (subResult != Number.MAX_VALUE && subResult + 1 < table[i]){
                table[i] = subResult + 1;  
            }
        } 
      }  
    }
    
    if(table[amount] == Number.MAX_VALUE){
        return -1;
    }
    
    return table[amount];
}

console.log(coins([4,5,6,7,0,1,2], 3));