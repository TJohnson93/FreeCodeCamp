/**
 * Original Filename: Bonfire - Find the Longest Word in a String.js
 * Original Creation Date: 09-07-2015
 * Original Author: Todd Johnson
 *
 * Return the length of the longest word in the provided sentence.
 */

/**
 * Find the longest word in parsed string
 * @param  {String} str A collection of words
 * @return {Integer}    The char length of the longest word
 */
function findLongestWord(str) {
  myarray = str.split(' ');
  myarray.sort(function(a, b){
    return b.length - a.length; 
  });
  return myarray[0].length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('May the force be with you');
findLongestWord('Google do a barrel roll');
findLongestWord('What is the average airspeed velocity of an unladen swallow');