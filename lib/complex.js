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
	add(numToAdd){ //add number or another complex equation to a complex equation
		var numToAdd = this.newDeclare(numToAdd);
		return this.returnResult(this.real + numToAdd.real, this.img+numToAdd.img);
	},

	sub(numToSubtract){ //subtract number or another complex equation from a complex equation
		var numToSubtract = this.newDeclare(numToSubtract);
		return this.returnResult(this.real-numToSubtract.real, this.img-numToSubtract.img);
	},

	multiply(numToMultiply){ //multiply complex number by a number or another complex equation
		var numToMultiply = this.newDeclare(numToMultiply);
		var a = this.real;
		var b = this.img;
		return this.returnResult(
			numToMultiply.real * a - numToMultiply.img * b,
			b * numToMultiply.real + numToMultiply.img * a
			); 
	},
}
    
complex.prototype.newDeclare = function(realNumb, imgNumb){
	if (realNumb instanceof complex){ 
	 	return new complex(realNumb.real, realNumb.img);
	 }
		realNumb = +realNumb;
		imgNumb = +imgNumb;
		return new complex(isNaN(realNumb) ? 0 : realNumb, isNaN(imgNumb) ? 0 : imgNumb);
	};	

module.exports = complex;	