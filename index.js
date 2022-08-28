function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
const remainder = target - array[i]
// console.log(remainder)
for (let j = i +1; j < array.length; j++){
  if (array[j] === remainder){
    return true;
  }
}

  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function hastargetsum declaration
  the function takes two params and will receive them as args
  need to loop through the array
  if the first number gets any number in the array that adds up to the target subtract it to get the remainder
  use the remainder and check if any number equals that value
 if there is no number equal to the remainder after iteration, return false
 othrwise return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
