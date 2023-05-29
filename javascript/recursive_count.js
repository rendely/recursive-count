function recursiveCount(num = 9) {
  if (num > 0) recursiveCount(num-1);
  console.log(num);
}

if (require.main === module) {
  recursiveCount(9);
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
