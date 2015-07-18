/**
 * Convert specific special characters to their HTML entities
 * @param  {String} str A string containing special chars
 * @return {String}     String with special chars replaced with HTML entities
 */
function convert(str) {
	str = str.replace(/[&]/g,'&amp;');
	str = str.replace(/[<]/g,'&lt;');
	str = str.replace(/["]/g,'&quot;');
	str = str.replace(/[>]/g,'&gt;');
	str = str.replace(/[']/g,'&apos;');
  
	return str;
}

convert('Dolce & Gabbana');
convert('Hamburgers < Pizza < Tacos');
convert('Sixty > twelve');
convert('Stuff in "quotation marks"');
convert('Shindler\'s List');
convert('<>');
convert('abc');