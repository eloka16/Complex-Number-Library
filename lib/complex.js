var complex = function(real, img){
	this.real = real;
	this.img = img;
};


complex.prototype = {

	returnResult(a, b){ //returns the real and imaginary values as a number
		this.real = a;
		this.img = b;
		return this;
	},
}
    