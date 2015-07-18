/**
 * Convert a Binary string to an English output.
 * @param  {String} str A string containing Binary code
 * @return {String}     English translated Binary
 */
function binaryAgent(str) {
  var binaryArray = str.split(' ');
  var result = '';
  
  for (var bin in binaryArray){
    var digit = parseInt(binaryArray[bin], 2);
    result += String.fromCharCode(digit);
  }
   
  return result;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');