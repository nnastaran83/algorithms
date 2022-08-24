let outPut = [];

/**
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 * @param str
 * @returns {number}
 */
function permAlone(str) {
  let perm = 1;
  for (let i = 1; i <= str.length; i++) {
    perm *= i;
  }

  generateAll(str);

  for (let i = 0; i < outPut.length; i++) {
    for (let j = 0; j < outPut[i].length - 1; j++) {
      if (outPut[i][j] === outPut[i][j + 1]) {
        perm--;
        break;
      }
    }
  }
  console.log(perm);
  return perm;
}



/**
 * generates all the permutations for the array
 * using Heap's Algorithm
 * @param arr
 * @param k - the initial value of k is the length of arr
 */
function generate(arr, k){
  if (k === 1) {
    outPut.push(arr.slice());
    return;
  }
  generate(arr, k - 1);

  for (let i = 0; i < k - 1; i++) {
    if (k % 2 === 0) {
      swap(arr, i, k - 1);
    } else {
      swap(arr, 0, k - 1);
    }
    generate(arr, k-1);
  }
}

/**
 * swap between the content of index A and B
 * @param arr
 * @param A
 * @param B
 */
function swap(arr, A, B){
  let temp = arr[A];
  arr[A] = arr[B];
  arr[B] = temp;

}


/**
 * gets converts a string to array and calls the generateAll function with a copy of the array
 * @param str
 */
function generateAll(str){
  let arr = str.split("");
  generate(arr.slice(), arr.length);

}


permAlone('abb');
