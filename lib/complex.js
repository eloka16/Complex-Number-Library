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
	add(numToAdd){ ////add number or another complex equation to a complex equation
		var numToAdd = this.newDeclare(numToAdd);
		return this.returnResult(this.real + numToAdd.real, this.img+numToAdd.img);
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