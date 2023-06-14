// complete the given function

function palindrome(str){
	let str1="";
	for(let i=str.length-1;i>=0;i--)
		{
			str1+=str.charAt(i);
		}
	if(str==str1)
	{
		return true;
	}
	return false;
}
module.exports = palindrome
