function main(string){
	string = string.toLowerCase()
	console.log(hasManyVowels(string))
}
function hasManyVowels(string){
	var result = 0
	for(i in string)
		if(isVowels(string[i]))
			result++;
	return result
}
function isVowels(char){
	var vowels = ['a','e','i','o','u']
	return (vowels.indexOf(char) != -1)
}

var string = process.argv[2]
main(string)