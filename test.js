'use strict'

var Complex = require('./lib/complex.js');
//var expect = require('expect.js');

describe('The complexNumber library', function(){

	it('should create a complex number',function(){
		var complexNumber = new Complex(3,5);
		expect(complexNumber.real).toEqual(3);
		expect(complexNumber.img).toEqual(5);
	});

	it('should add two complex number', function(){

		var complexNumber = new Complex(3,5);
		var complexNumber2 = new Complex(2,3);
		var result = complexNumber.add(complexNumber2);
		expect(result.real).toEqual(5);
		expect(result.img).toEqual(8);

	});

	it('should add multiple complex numbers', function(){
		var z = new Complex(1, 1);
		var y =  new Complex(1,1);
		var x =  new Complex(1,1);

		var t = ((z.add(y)).add(x));

		expect(t.real).toEqual(3);
		expect(t.img).toEqual(3);
	});

	it('should subtract complex numbers', function(){
		var x = new Complex(1, 2);
		var y =  new Complex(1,1);
		var z = new Complex(1, 11);

		var subtract = x.sub(y);		

		expect(subtract.real).toEqual(0);
		expect(subtract.img).toEqual(1);
	});

	it('should subtract multiple complex numbers', function(){
		
		var z = new Complex(1, 11);
		var y =  new Complex(1,1);
		var x = new Complex(1, 2);

		var t = ((z.sub(y)).sub(x));
		
		expect(t.real).toEqual(-1);
		expect(t.img).toEqual(8);
	});	

	it('should multiply two complex numbers', function(){
		var x = new Complex(1, 4);
		var y =  new Complex(3,2);
		var result = x.multiply(y);

		expect(result.real).toEqual(-5);
		expect(result.img).toEqual(14);

	});

	it('should multiply more than two complex numbers', function(){
		var x =  new Complex(1, 4);
		var y =  new Complex(3,2);
		var z =  new Complex(1,2);
		var result = (x.multiply(y)).multiply(z);

		expect(result.real).toEqual(-33);
		expect(result.img).toEqual(4);

	});

	it('should divide two complex numbers', function(){
		var x = new Complex(1, 4);
		var y =  new Complex(3,2);
		var result = x.divide(y);

		expect(result.real).toEqual(11/13);
		expect(result.img).toEqual(10/13);
	});

	it('should find the conjugate of complex numbers', function(){

		var conjugateNumber = new Complex(1 , 3).conjugate();

		expect(conjugateNumber.real).toEqual(1);
		expect(conjugateNumber.img).toEqual(-3);

	});

	it('should find the conjugate of complex numbers', function(){

		var conjugateNumber = new Complex(-1 , -3).conjugate();

		expect(conjugateNumber.real).toEqual(-1);
		expect(conjugateNumber.img).toEqual(3);
	});

	it('should find the magnitude of complex numbers', function(){

		var magnitudeNumber = new Complex(-3 , -4).magnitude();
		expect(magnitudeNumber).toEqual(5);
	});

	

	it('should multiply complex numbers by -1 by calling the negate function ', function(){

		var negateNumber = new Complex(-3 , -4).negate();
		expect(negateNumber.real).toEqual(3);
		expect(negateNumber.img).toEqual(4);
	});

	it('should calculate the angle between the real and the im vectors', function(){
		expect(new Complex(1, 1).angle()).toEqual(Math.PI / 4);
		expect(new Complex(-1, -1).angle()).toEqual(-3 * Math.PI / 4);
		expect(new Complex(0, 1).angle()).toEqual(Math.PI / 2);
		expect(new Complex(1, 0.5 * Math.sqrt(4 / 3)).angle()).toEqual(Math.PI / 6);
		expect(new Complex(1, 0.5 * Math.sqrt(4 / 3)).angle()).toEqual(Math.PI / 6);
	});

	it('should return values in string', function(){
		var value1 = new Complex(1,3);
		var value2 = new Complex(2,1);
		var total = value1.add(value2);
		expect(total.toString()).toEqual('3+4i');
	});

	it('should return the sine of the complex number', function(){
		var z = new Complex(1, 2).sin().toString();
		expect(z).toEqual('3.1657785132161678+1.959601041421606i');
	});

	it('should return the cosine of the complex number', function(){
		var z = new Complex(1, 2).cos().toString();
		expect(z).toEqual('2.0327230070196656-3.0518977991517997i');
	});

	it('should return the tangent of the complex number', function(){
		var z = new Complex(1, 2).tan().toString();
		expect(z).toEqual('0.0338128260798967+1.0147936161466335i');
	});

	it('should return the hyperbolic sine of the complex number', function(){
		var z = new Complex(1, 2).sinh().toString();
		expect(z).toEqual('-0.4890562590412937+1.4031192506220405i');
	});

	it('should return the hyperbolic cosine of the complex number', function(){
		var z = new Complex(1, 2).cosh().toString();
		expect(z).toEqual('-0.64214812471552+1.0686074213827783i');
	});

	it('should return the hyperbolic tangent of the complex number', function(){
		var z = new Complex(1, 2).tanh().toString();
		expect(z).toEqual('1.16673625724092-0.24345820118572528i');
	});


	it('it should return the exponential', function(){
		var z = new Complex(4,3).exp().toString();
		expect(z).toEqual('-54.05175886107815+7.7048913727311525i');
	});


	it('should take the square root of the complex number', function(){
		var z = new Complex(1,4).sqrt().toString();
		expect(z).toEqual('1.600485180440241+1.2496210676876531i');
	});
});