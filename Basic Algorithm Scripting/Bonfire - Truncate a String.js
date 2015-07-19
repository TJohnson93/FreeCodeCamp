/**
 * Original Filename: Bonfire - Truncate a String.js
 * Original Creation Date: 12-07-2015
 * Original Author: Todd Johnson
 *
 * Truncate a string (first argument) if it is longer 
 * than the given maximum string length (second argument). 
 * Return the truncated string with a '...' ending.
 */

/**
 * Return the truncated string with a '...' ending.
 * @param  {String}  str String to be Truncated
 * @param  {Integer} num Maximum length String
 * @return {String}      Truncated Strings
 */
function truncate(str, num) {
  if(num < 0 || num >= str.length){
     return str;
  } else {
     return str.slice(0, (num - 3)) + '...';    
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
truncate('A-tisket a-tasket A green and yellow basket', 
	'A-tisket a-tasket A green and yellow basket'.length);
truncate('A-tisket a-tasket A green and yellow basket', 
	'A-tisket a-tasket A green and yellow basket'.length + 2);