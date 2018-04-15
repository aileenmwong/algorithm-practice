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
