var fs = require("fs")

function main(fileName){
  fs.readFile(fileName, 'utf8', function (err,data) {
  	if (err) return console.log("err");
    	data = prepare(data)
    	var count = 0
    	for(i in data)
    		if(isPalindrome(data[i]))
    			count++
    	console.log(count)
  });
}

function prepare(data){
	data = data.toLowerCase().split(/\n/g)
  	for(i in data)
  		data[i] = data[i].replace(/[^a-z]/g,"")
  	return data
}

function isPalindrome(text){
	for(let i=0; i<text.length/2; i++)
		if(text[i] != text[text.length-i-1])
			return false;
	return true
}

var fileName = process.argv[2]
main(fileName)