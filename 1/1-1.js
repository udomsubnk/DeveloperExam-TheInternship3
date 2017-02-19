function start(number){
	isFactor(number,2)
	for(var i=3; i<number; i+=2)
		isFactor(number,i)
}

function isFactor(number,i){
	if(number%i == 0) 
		isPrime(i)
}

function isPrime(I){
	for(var i=3; i<=Math.sqrt(I); i+=2)
		if(I%i == 0)return false;
	console.log(I)
}

var number = process.argv[2]
start(number)