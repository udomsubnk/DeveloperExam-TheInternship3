var x = new Array(8)
function print(){
	var i,j
	process.stdout.write("+-----------------------+\n")
	for(i=0;i<8;i++){
		process.stdout.write("|")
		for(j=0;j<8;j++)
			if(j==x[i])process.stdout.write("Q.|")
			else process.stdout.write(" |");
		console.log()
		process.stdout.write("+-----------------------+\n")
	}
	console.log()
}

function is_free(ix,iy){
	var i
	for(i=0;i<iy;i++)
		if((x[i]==ix) || (Math.abs(x[i]-ix)==Math.abs(i-iy)))
			return false
		return true
}

function placequeen(n){
	var i
	if(n==8)
		print()
	else
		for(i=0;i<8;i++)
			if(is_free(i,n)){
				x[n]=i
				placequeen(n+1)
			}
}

placequeen(0)