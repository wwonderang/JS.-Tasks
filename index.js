// Task 1
// function compareNum(num1, num2) {
//   if (num1 > num2) {
//     return 1;
//   } else if (num1 < num2) {
//     return -1;
//   } else if (num1 === num2) {
//     return 0;
//   }
// }
// console.log(compareNum(1,4));

// Task 1 - тернарный оператор
// let result = (num1, num2) => {
// return (
//     num1 > num2 
//     ? 1
//     : num1 < num2 
// ? -1 : 0
// )
// }
// alert(result(5, 4));

// Task 1 arrow function
// let result = (num1, num2) => {
//     if (num1 > num2) return 1
//     else if (num1 < num2) return -1
//     else return 0
// }
// console.log(result(7, 5));


// Task 2
// function getSquare (length, width) {
  
//   if (length === undefined) {
//     return width * width;
//   } else if (width === undefined) {
//     return length * length;
//   }
//   return length * width;
// }
// console.log(getSquare(2, 5));

// Task 3

// function culcSum(num1, num2) {
//   if (num1 % 2 == 0 && num2 % 2 == 0) {
//     return num1 * num2;
//   } else if (num1 % 2 != 0 && num2 & 2 != 0) {
//     return num1 + num2;
//   } else if (num1 % 2 != 0 && num2 % 2 == 0) {
//     return num1;
//   } else if (num1 % 2 == 0 && num2 % 2 != 0) {
//     return num2;
//   }
// }

// console.log(culcSum(5, 16));

// Task 4
// function sequence (start, step) {
//     return function () {
//         start = start || 0;
//         step = step || 1;
//         start += step;
//         return start;
//     }
// }

// let generator = sequence(10,3);
// let generator2 = sequence(20,4);
// alert(generator());
// alert(generator());
// alert(generator());
// alert(generator2());
// alert(generator2());
// alert(generator2());

//Task 5
// function showWords() {
//     str = "";
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i++) {
//         str += arguments[i] + " ";
//     }
//     return str;
// }
// console.log(showWords("I've", "been", "learning", "JavaScript", "for", "a", "month"));

//Task 6
function complexDigit() {
    str="";
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        str += arguments[i];
    }
    return str;
}
console.log(complexDigit(3, 6, 7));
console.log(complexDigit(1, 9, 4, 8, 3));