var Complex = function(real, img){
  this.real = real;
	this.img = img;
};

var sinh = function(num){ // to calculate the sinh of a value, (e^value - e ^ -value)/2;
	return ((Math.pow(Math.E,num) - Math.pow(Math.E,-num))/2);
};
var cosh = function(num){ // to calculate the sinh of a value, (e^value + e ^ -value)/2;
	return ((Math.pow(Math.E,num) + Math.pow(Math.E,-num))/2);
};

Complex.prototype = {
	returnResult : function(a, b){ //returns the real and imaginary values as a number
		this.real = a;
		this.img = b;
		return this;
	},
	add : function(numToAdd){ //add number or another complex equation to a complex equation
		var numToAdd = this.newDeclare(numToAdd);
		return this.returnResult(this.real + numToAdd.real, this.img + numToAdd.img);
	},
	sub : function(numToSubtract){ //subtract number or another complex equation from a complex equation
		var numToSubtract = this.newDeclare(numToSubtract);
		return this.returnResult(this.real-numToSubtract.real, this.img-numToSubtract.img);
	},

	multiply : function(numToMultiply){ //multiply complex number by a number or another complex equation
		var numToMultiply = this.newDeclare(numToMultiply);
		var a = this.real;
		var b = this.img;
		return this.returnResult(
			numToMultiply.real * a - numToMultiply.img * b,
			b * numToMultiply.real + numToMultiply.img * a
			); 
	},

	divide : function(numToDivide){ // divide complex number by a number or another complex equation
		var numToDivide = this.newDeclare(numToDivide);
		var divider = (Math.pow(numToDivide.real,2) + Math.pow(numToDivide.img,2));
		var a = this.real;
		var b = this.img;
		return this.returnResult(
			(a * numToDivide.real + b * numToDivide.img) / divider, //real part
			(b * numToDivide.real - a * numToDivide.img) / divider //imaginary part
			);
	},

	conjugate : function(numToConjugate){// checks for the conjugate of a complex equation
		return this.returnResult(this.real, -this.img);
	},

	magnitude : function(numMagnitude){// checks for the magnite of a complex equation
		var a = this.real;
		var b = this.img;
		return Math.sqrt(a*a + b*b);
	},

	equals: function(equalNum){// check if two or more complex equations are equal
		var eqNum = this.newDeclare(equalNum);
		return ((equalNum.real === this.real) && (equalNum.img === this.img));
	},

	negate : function(){// changes the equation to negative of the previous
		return this.returnResult(-this.real, -this.img);
	},

	angle : function(){//finds the angle in radians, useful for polar form
		return Math.atan2(this.img, this.real);
	},

  tan : function(){ //calculate the tangent of complex equation tan(a + bi) = (sin(2*a) + i(sinh2*b)) / (cos(2*a) + (cosh2*b))
		var divider = Math.cos(2*this.real) + cosh(2*this.img);
		var r = Math.sin(2*this.real)/divider;
		var i= sinh(2*this.img)/divider;
		return this.returnResult(r, i);
	},

  sin : function(){ // calculate the sine of complex equation, sin(real+(img)i) = sin(real)cosh(img) + icos(real) sinh(img)
		var r = Math.sin(this.real)*cosh(this.img);
		var i = Math.cos(this.real)*sinh(this.img);
		return this.returnResult(r, i);
	},

  cos : function(){ //calculate the cosine of complex equation, cos(real+(img)i) = cos(real)cosh(img) − i sin(real) sinh (img)
		var r = Math.cos(this.real) * cosh(this.img);
		var i = -1*(Math.sin(this.real)*sinh(this.img));
		return this.returnResult(r, i);
	},

  sinh : function(){ //calculate the hyperbolic sine of complex equation, sinh(a+bi) = sinh(a)cos(b) + i cosh(a)sin(b)
		var r = sinh(this.real) * Math.cos(this.img);
		var i = cosh(this.real) * Math.sin(this.img);
		return this.returnResult(r,i);
	},

  cosh : function(){ //calculate the hyperbolic cosine of complex equation, cosh(a+bi) = cosh(a)cos(b) + i sinh(a)sin(b)
		var r = cosh(this.real) * Math.cos(this.img);
		var i = sinh(this.real) * Math.sin(this.img);
		return this.returnResult(r, i);
	},

  tanh : function(){ //calculate the hyperbolic tan of complex equation tanh(a +_bi) = (sinh(2*a) + sin(2*b)) / (cosh(2*a) + cos(2*b))
		var divider = cosh(2 * this.real) + Math.cos(2 * this.img);
		var r = sinh(2*this.real)/divider;
		var i = Math.sin(2*this.img)/divider;
		return this.returnResult(r, i);
	},

	exp : function(){ //calculate the exponential value of a complex equation, e^(x+i*y) = e^x (Cos[y]+i*Sin[y])= e^x*Cos[y] + i*e^x*Sin[y] 
		var r = Math.pow(Math.E,this.real) * Math.cos(this.img);
		var i = Math.pow(Math.E,this.real) * Math.sin(this.img);
		return this.returnResult(r, i);
	},

	sqrt : function(){ //calculate the square root of a complex equation, sqrt(x + iy) = sqrt((xy) + x)/2) + sqrt((xy) - x)/2)
		var abs = this.magnitude();
		var	sgn = this.img < 0 ? -1 : 1;
		var r = Math.sqrt((abs + this.real) / 2);
		var i = sgn * Math.sqrt((abs - this.real) / 2);
		return this.returnResult(r, i);
	},

	log : function(integerValue){ //calculate the logarithm of a complex equation, Log[w] = Log[|w|]+I*(Arg[w]+2*Pi*k)
		if (!integerValue){ // if k is not given find the principal value
			integerValue = 0;
		} 
		var r = Math.log(this.magnitude());
		var i = this.angle() + integerValue * 2 * Math.PI;
		return this.returnResult(r, i);			
	},

  toString : function(){//outputs complex equation in string form
		var string = '';
		var real = this.real;
		var imag = this.img;
		if (real){
			string += real;
		}
		if ((real && imag) || imag < 0) {
			string += imag < 0 ? '-' : '+';
		}
		if (imag){
			var absImg = Math.abs(imag);
			if (absImg !== 1) {
				string += absImg;
				string += 'i';
			}else{
				string += 'i';
			}
		}
		return string || '0';
	}
}
    
Complex.prototype.newDeclare = function(realNumb, imgNumb){
	if (realNumb instanceof Complex){ 
	 	return new Complex(realNumb.real, realNumb.img);
	 }
		realNumb = +realNumb;
		imgNumb = +imgNumb;
		return new Complex(isNaN(realNumb) ? 0 : realNumb, isNaN(imgNumb) ? 0 : imgNumb);
	};	

module.exports = Complex;	