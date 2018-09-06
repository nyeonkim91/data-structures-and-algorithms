// determine what is the best price to buy the stock at and what is the best price to sell to get the highest profit
// Notes:
// - If no profit is possible, return -1
// - A max profit of 0 is treated as any other max profit value
// - Try to solve in O(n) - linear - runtime

// takes in array of prices as parameter
// returns the max possible profit of the day
function maxStockProfit(pricesArr) {
  let min = pricesArr[0];
  let maxProfit = -1;

  for(let i = 1; i < pricesArr.length; i++) {
    if(min <= pricesArr[i]) {
      let profit = pricesArr[i] - min
      if(maxProfit < profit) maxProfit = profit;
    } else min = pricesArr[i]
  }

  return maxProfit;
}

// other way
// function maxStockProfit (pricesArr) {
//   var maxProfit = -1;
//   var buyPrice = 0;
//   var sellPrice = 0;
//
//   var changeBuyPrice = true;
//
//   for (var i = 0; i < pricesArr.length; i++) {
//     if (changeBuyPrice) buyPrice = pricesArr[i];
//     sellPrice = pricesArr[i + 1];
//
//     if (sellPrice < buyPrice) {
//       changeBuyPrice = true;
//     }
//     else {
//       var tempProfit = sellPrice - buyPrice;
//       if (tempProfit > maxProfit) maxProfit = tempProfit;
//       changeBuyPrice = false;
//     }
//   }
//
//   return maxProfit;
// }


maxStockProfit([32, 46, 26, 38, 40, 48, 42]); // 22
// maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]); // 12
// maxStockProfit([10, 10, 10, 10, 10, 10, 9])
