/**
 * Reverse a string that has been parsed though
 * @param  {string} str A string to be reversed
 * @return {string}     The reverse of the string that was parsed though
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');