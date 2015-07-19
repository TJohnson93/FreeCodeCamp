/**
 * Original Filename: Bonfire - Confirm the Ending.js
 * Original Creation Date: 12-07-2015
 * Original Author: Todd Johnson
 *
 * Check if a string (first argument) ends with the given 
 * target string (second argument).
 */

/**
 * check if the string ends with the target
 * @param  {String} str    String to check with
 * @param  {String} target String to check str with
 * @return {Boolean}       true or false
 */
function end(str, target) {
  var len = target.length;
  if(str.slice(-len) == target)
    return true;
  else
    return false;
}

end('Bastian', 'n');
end('Connor', 'n');
end('Walking on water and developing software from a specification 
	are easy if both are frozen.', 'specification');
end('He has to give me a new name', 'name');
end('If you want to save our world, you must hurry. We dont know how 
	much longer we can withstand the nothing', 'mountain');
