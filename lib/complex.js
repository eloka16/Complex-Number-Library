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

	divide(numToDivide){ // divide complex number by a number or another complex equation
		var numToDivide = this.newDeclare(numToDivide);
		var divider = (Math.pow(numToDivide.real,2) + Math.pow(numToDivide.img,2));
		var a = this.real;
		var b = this.img;
		return this.returnResult(
			(a * numToDivide.real + b * numToDivide.img) / divider, //real part
			(b * numToDivide.real - a * numToDivide.img) / divider //imaginary part
			);
	},

	conjugate(numToConjugate){// checks for the conjugate of a complex equation
		return this.returnResult(this.real, -this.img);
	},

	magnitude(numMagnitude){// checks for the magnite of a complex equation
		var a = this.real;
		var b = this.img;
		return Math.sqrt(a*a + b*b);
	},

	equals(equalNum){// check if two or more complex equations are equal
		var eqNum = this.newDeclare(equalNum);
		return ((equalNum.real === this.real) && (equalNum.img === this.img));
	},

	negate(){// changes the equation to negative of the previous
		return this.returnResult(-this.real, -this.img);
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