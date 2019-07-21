const arr = [7, 1, 2, 2, 4, 3, 5, 7, 7, 7, 1, 8, 2, 1, 1, 1, 1, 1, 2, 1, 1, 3, 7, 7, 7, 77, 5, 9]; // 4, 8, 77, 9
// const arr = [2, 2, 2, 2, 1]; // 1
// const arr = [2, 1]; // 2 , 1
// const arr = [1, 1]; // []
// const arr = [1, 1, 1, 2, 1, 1, 1, 5, 7, 8, 2]; // 5, 7, 8
// const arr = [];
let matchIs = false;
let inIt = null;

for (let i = 0; i < arr.length; i += 1) {
  for (let j = 0; j < arr.length; j += 1) {
    if (i === j) continue;
    if (arr[i] === arr[j]) {
      if (!matchIs) {
        matchIs = true;
        inIt = i;
      }
      arr.splice(j, 1);
      j -= 1;
    }
    if (matchIs && j === arr.length - 1) {
      arr.splice(inIt, 1);
      matchIs = false;
      inIt = null;
      i -= 1;
    }
  }
}

// 
console.log(arr);
