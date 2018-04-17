//PRINT AN ARRAY
//Write a function called printArr that will print the items of an array.
//Input: ['sam','ed','harry']

//use join array method to print array as a string
function printArr() {
  const input = ['sam','ed','harry'];
  //return the items in array as a joined string
  return input.join();
}
console.log(printArr());

//REVERSE A STRING
//Write a function called reverseString that will take a string and return the string reversed.
//Input: 'abcd'
//Output: 'dcba’

function reverseString(string) {
  //newString variable is an empty array
  let newString = [];
  //loop through string backwards and push into empty array
   for (let i=string.length-1; i>=0; i--) {
     newString.push(string[i]);
   }
   //join string back together
  return newString.join('');
}

reverseString('abcd');

//CHECK FOR PALINDROME
//Write a function called isPalindrome that will return true if a given input (string(s) or number) is a palindrome and false if it's not.
//Input: 'race car' or 'Race car' or 12321
//Output: true

function isPalindrome(input)  {
  //turn input into a string and all lowercase
  let newInput = input.toString().toLowerCase();
  //split the string to remove commas and spaces, join it together, then split it again to check for palindrome
  let forwards = newInput.split().join().split();
  //console.log('this is forwards -->', forwards)
  //declare backwards as an empty array
  let backwards = [];
    //loop through backwards and push in letters/numbers into empty array
    for (let i=forwards.length-1; i>=0; i--) {
      backwards.push(forwards[i]);
      }
      //console.log('this is backwards -->', backwards)
      //if the joined words match, return true or else return false
    if (forwards.join() === backwards.join()) {
      return true
    } else {
      return false
    }
}

//isPalindrome(12321);
isPalindrome('race car');

// FIND THE LARGEST NUMBER
// Write a function called largestNumber that will return the largest value from an array.
// Input: [1,2,5,10]
// Output: 10

const largestNumber = (array) => {

}

function largestNumber(array) {
  let newArray = array;
  //set largest to 0
  let result = [];
  //loop through the array.
  for (let i=0; i<newArray.length; i++) {
    //set the variable largest as the number in the array
    let largest = newArray[i];
    //loop through array a second time.
    for (let j=1; j<newArray.length; j++) {
      //if the next number in the array is largest than the last, that is the largest number.
      if (newArray[j] > largest) {
        largest = newArray[j];
      }
    }
    result = largest;
  }
  //return the largest number
  return result
}

largestNumber([1,2,5,10]);


// PRINT A PYRAMID
// Write a function called buildPyramid that given a number, creates a pyramid that is that number of rows.
// Input: pyramid(4)

function buildPyramid(rows) {
  let shape = '^';
  let pyramid = '';

  for (let i=0; i<=rows-1; i++) {
    pyramid += (shape + '\n')
    console.log(pyramid)
  }
}

buildPyramid(4);


