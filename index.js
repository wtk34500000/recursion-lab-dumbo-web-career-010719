// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(myString){
    if(myString===""){
      return ""
    }
    return reverseString(myString.substr(1))+myString.charAt(0)
 }

 function isPalindrome(myString){
     let n=myString.length;
     if(n===0 || n===1){
         return true
     }
     if(myString[0] === myString[n-1]){
         return isPalindrome(myString.slice(1, n-1))
     }
     return false
 }