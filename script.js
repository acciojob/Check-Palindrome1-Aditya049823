// complete the given function

function palindrome(str){
	let lower=str.toLowerCase();
	let str1="";
	for(let i=lower.length-1;i>=0;i--)
		{
			str1+=lower.charAt(i);
		}
	if(lower==str1)
	{
		return true;
	}
	return false;
}
module.exports = palindrome
