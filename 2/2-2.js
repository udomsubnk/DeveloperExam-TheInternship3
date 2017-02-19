function print(){
	process.stdout.write("+-----------------------+\n")
	for(let i=0 ; i<N ; i++ ){
		process.stdout.write("|")
		for(let j=0 ; j<N ; j++){
			if( j==x[i] )
				process.stdout.write("Q|")
			else 
				process.stdout.write(" |");
		}
		console.log()
		process.stdout.write("+-----------------------+\n")
	}
	console.log()
}

function is_free(ix,iy){
	for(let i=0 ; i<iy ; i++ )
		if( (x[i] == ix) || (Math.abs(x[i]-ix)==Math.abs(i-iy)))
			return false
	return true
}

function placequeen(n){
	if(n==N)
		print()
	else
		for(let i=0 ; i<N ; i++ )
			if( is_free(i,n) ){
				x[n] = i
				placequeen(n+1)
			}
}

var N = 8
var x = new Array(N)
placequeen(0)