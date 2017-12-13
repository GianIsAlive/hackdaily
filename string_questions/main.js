// Given a string, check if all the characters in the string is unique
// Example:
// isUnique("hello") //-> false, because there are two l's
// isUnique("great") //-> true, because there is no duplicate characters
// Bonus: Try it without using additional data structures

function isUnique(str) {
  const obj = {};
  for (let x = 0; x < str.length; x++) {
    if (obj[str[x]]) return false;
    if (!obj[str[x]]) obj[str[x]] = 1;
  }
  return true;
}

// Given two strings, check if one is permutation of the other
// Example: 
// permute('great', 'reagt') //-> true
// permute('cool', 'cold') //-> false

function permuteHelper(str, chosen) {
  if (str.length === 0) console.log(chosen);
  for (let x = 0; x < str.length; x++) {
    console.log('Chosen inside loop: ', x, chosen);
    chosen += str[x];
    let string = str.substr(x + 1, str.length);
    permuteHelper(string, chosen);
    // string = string.split('').splice(x, 1, chosen).join('');
    // chosen = chosen.substr(0, chosen.length - 1);
  }
}
function permute(str1, str2) {
  // great
  // g |r| eat, g |e| rat, g |a| ret, g |t| rea
  // great, greta, gerat, gerta, garet, garte, gtrea, gtrae
  return permuteHelper(str1, "");
}

// Given a string, check if it's palindrome
// Example:
// checkPalindrom('hannah') //-> true
// checkPalindrom('hello') //-> false

function checkPalindrom(str) {
  let count = str.length - 1;
  for (let x = 0; x < (Math.floor(str.length / 2) + 1); x++) {
    if (str[count] === str[x]) return true;
  }
  return false;
}

// Given a string, check if it's permutations is a palindrom
// Example: 
// checkPermPalindrom('Tact Coa') //-> true taco cat is a palindrom
// checkPermPalindrom('best') //-> false

function checkPermPalindrom(str) {

}

// There're three types of edits, insert a character, remove a character or replace a character
// Given two strings, check if they're one edits away
// Example:
// checkEditDistanceIsOne('pale', 'ple') //-> true
// checkEditDistanceIsOne('pale', 'bale') //-> true
// checkEditDistanceIsOne('pale', 'bake') //-> false

function checkEditDistanceIsOne(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  const length = Math.max(str1.length, str2.length);
  let diff = 0;
  let count = 0;
  for (let x = 0; x < length; x++) {
    if (diff > 1) return false;
    if (str1.length === str2.length) {
      if (str1.charAt(x) !== str2.charAt(count)) diff += 1;
    } else if (str1.length > str2.length) {
      if (str1.charAt(x) !== str2.charAt(count)) {
        count -= 1;
        diff += 1;
      }
    } else if (str1.length < str2.length) {
      if (str1.charAt(x) !== str2.charAt(count)) {
        count += 1;
        diff += 1;
      }
    }
    count += 1;
  }
  return true;
}

// Compress a string by counting the repeated characters
// Example: 
// compressString('abcccccca') //-> a1b1c6a1

function compressString(str) {
  let compressed = "";
  for (let x = 0; x < str.length; x++) {
    if (compressed[compressed.length - 2] !== str[x]) {
      compressed += str[x] + 1;
    } else if (compressed[compressed.length - 2] === str[x]) {
      compressed = compressed.substr(0, compressed.length - 1) + (parseInt(compressed[compressed.length - 1]) + 1);
    }
  }
  return compressed;
}

// Write an algorithm that decompresses a given string
// Example: 
// decompressString('a1b1c6a1') //-> a1b1c6a1
function decompressString(str) {
  let count = 0;
  let decompressed = "";
  while (count < str.length - 1) {
    decompressed = decompressed + str[count].repeat(parseInt(str[count + 1]));
    count += 2;
  }
  return decompressed;
}

// Rotate Matrix:
// Example: 
// rotateMatrix([
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]
// ])
// [1,  2,  3,  4]
// [5,  6,  7,  8]
// [9,  10, 11, 12]
// [13, 14, 15, 16]
// Output:
//  [
//    [7, 4, 1],
//    [8, 5, 2],
//    [9, 6, 3]
//  ]

function rotateMatrix(array) {
  var n = array.length;
  for (var i = 0; i < Math.ceil(n / 2); i++) {
      for (var j = 0; j < Math.floor(n / 2); j++) {
          var temp = array[i][j];
          array[i][j] = array[n - 1 - j][i];
          array[n - 1 - j][i] = array[n - 1 - i][n - 1 - j];
          array[n - 1 - i][n - 1 - j] = array[j][n - 1 - i];
          array[j][n - 1 - i] = temp;
      }
  }
  return array;
}

// Zero Matrix:
// Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0
// Example: 
// zeroMatrix([
//    [1, 2, 3],
//    [4, 0, 6],
//    [7, 8, 9]
// ])
// Output:
//  [
//    [7, 0, 1],
//    [0, 0, 0],
//    [9, 0, 3]
//  ]

function zeroMatrix(array) {
  const indicesStore = [];
  for (let x = 0; x < array.length; x++) {
    for (let i = 0; i < array.length; i++) {
      if (array[x][i] === 0) {
        indicesStore.push([x, i]);
      }
    }
  }
  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < indicesStore.length; k++) {
      array[j][indicesStore[k][1]] = 0;
      if (j === indicesStore[k][0]) array[j].fill(0);
    }
  }
  return array;
}

// String rotation:
// Given two string, check if one is the rotation of the other
// Example:
// function checkStrRotation('watterbottle', 'erbottlewat') //-> true
//     _____________________
//    /                     \
//  ^^^                     |||
//  |||                     vvv
// 'watterbottle', 'erbottlewat'

function checkStrRotation(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let x = 0; x < str2.length; x++) {
    if (str2 === str1) return true;
    str2 = str2[str2.length - 1] + str2.substr(0, str2.length - 1)
  }
  return false;
}
