/**
 * Original Filename: Bonfire - Slasher Flick.js
 * Original Creation Date: 12-07-2015
 * Original Author: Todd Johnson
 *
 * Return the remaining elements of an array after chopping 
 * off n elements from the head.
 */

/**
 * Remove n number of values from start of array
 * @param  {Array}   arr     Original Array
 * @param  {Integer} howMany Number of how many values to remove
 * @return {Array}           Modified Array
 */
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);