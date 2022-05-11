function coinChange(coins, amount) {
    const store = Array(amount + 1).fill(Infinity);
    store[0] = 0;
  
    for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
        if (i - coin >= 0) {
          store[i] = Math.min(store[i], store[i - coin] + 1);
        }
      }
    }
    return store[amount] === Infinity ? - 1 : store[amount];
  }

  console.log(coinChange([2], 3));


