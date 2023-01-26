const process = require('process');
let input = '';

for(let i = 0; i < process.argv.length; ++i) {
  const arg = process.argv[i];
  if(arg === '--run') {
    input = process.argv[i+1];
    // Skip the next element since we consumed it above.
    ++i;
  }
  input += arg;
  i++;
}

changeEnough(input);

function changeEnough(coins, total) {
  let sum = 0;
  let quarters = coins[0];
  let dimes = coins[1];
  let nickels = coins[2];
  let pennies = coins[3];

  sum = (25 * quarters) + (10 * dimes) + (5 * nickels) + pennies;
  console.log('sum ', sum);
  console.log('coins ', coins);
  console.log('total', total);
  if (sum < total) {
    console.log('false');
  }
  console.log('true');
};

