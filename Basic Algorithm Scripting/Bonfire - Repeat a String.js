/**
 * Original Filename: Bonfire - Repeat a String.js
 * Original Creation Date: 12-07-2015
 * Original Author: Todd Johnson
 *
 * Repeat a given string (first argument) n times 
 * (second argument). Return an empty string if n is 
 * a negative number.
 */

/**
 * Repeat the parsed string n times 
 * @param  {String}  str String to be repeated
 * @param  {Integer} num Number of times sting is to be repeated
 * @return {String}      The modified repeated string
 */
function repeat(str, num) {
  var output = '';
  if(num > 0){
    for(var i = 0; i < num; i++){
      output = output + str;
    }
  }
  
  return output;
}

repeat('*', 3);
repeat('abc', 3);
repeat('abc', -2)