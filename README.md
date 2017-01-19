# bc-18-Complex-Number-Library


Complex- Number-Library is a libary that deals with Complex Numbers in JavaScript. It
provides several methods ranging from add, multiply, subtract and divide numbers in the complex plane. A complex number is a number that can be expressed in the form a + bi, where a and b are real numbers and i is the imaginary unit which satisfies the equation i^2 = −1.

![alt tag](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Complex_number_illustration.svg/220px-Complex_number_illustration.svg.png)

Application of Complex Equations
--------------------------------
Complex numbers have essential concrete applications in a variety of scientific and related areas such as signal processing, control theory, electromagnetism, fluid dynamics, quantum mechanics, cartography, and vibration analysis.

#### Control theory
In control theory, systems are often transformed from the time domain to the frequency domain using the Laplace transform. The system's poles and zeros are then analyzed in the complex plane. The root locus, Nyquist plot, and Nichols plot techniques all make use of the complex plane.

In the root locus method, it is especially important whether the poles and zeros are in the left or right half planes, i.e. have real part greater than or less than zero. If a linear, time-invariant (LTI) system has poles that are

in the right half plane, it will be unstable,
all in the left half plane, it will be stable,
on the imaginary axis, it will have marginal stability.
If a system has zeros in the right half plane, it is a nonminimum phase system.

#### Signal analysis
Complex numbers are used in signal analysis and other fields for a convenient description for periodically varying signals. For given real functions representing actual physical quantities, often in terms of sines and cosines, corresponding complex functions are considered of which the real parts are the original quantities. For a sine wave of a given frequency, the absolute value | z | of the corresponding z is the amplitude and the argument arg(z) is the phase.

If Fourier analysis is employed to write a given real-valued signal as a sum of periodic functions, these periodic functions are often written as complex valued functions of the form

![alt tag](https://wikimedia.org/api/rest_v1/media/math/render/svg/651a6be82d6764e4b48320cdd4259ab8af48b1f2)

and

![alt tag](https://wikimedia.org/api/rest_v1/media/math/render/svg/ee5a1f16e771f3403dad48e5ecde41e2c462a84a)

where ω represents the angular frequency and the complex number A encodes the phase and amplitude as explained above.

This use is also extended into digital signal processing and digital image processing, which utilize digital versions of Fourier analysis (and wavelet analysis) to transmit, compress, restore, and otherwise process digital audio signals, still images, and video signals.[Wikipedia](https://en.wikipedia.org/wiki/Complex_number#Applications)

Node
-------

You can git clone the repo on your system, install dependencies then run node index.js to start up the command line:

	# install dependencies
	
	npm install
	npm install chalk
	npm install clear
	npm install figlet
	npm install inquirer
	


Testing
-------

Testing is done with Jasmine:

	# run
	
	jasmine test.js

	
	

API Documentation
-----------------

### Complex constructor: //complex numbers are in format z = x+iy

```js
var complex = new complex(real, img);
```

#### Arguments:

1. real (number) the real part of the complex equation
2. img (number) the imaginary part of the complex equation


### Method: returnResult

Sets the real and imaginary properties a and b from `a + bi`

```js
Complex.returnResult(real, img);
```

#### Arguments:

1. real (number) the real part of the number
2. img (number) the imaginary part of the number


### Method: multiply

Multiplies the number with a real or another complex equation

```js
complexNum = new complex(2,1); // complex equation 2+i
complexNum.multiply(z); 
```


### Method: divide

Divides the number by a real or another complex equation

```js
complexNum = new complex(2,1); // complex equation 2+i
complexNum.divide(z);
```


### Method: add

Adds a real or complex equation

```js
complexNum = new complex(2,1); // complex equation 2+i
complexNum.add(z);
```


### Method: sub

Subtracts a real or complex equation

```js
complexNum = new complex(2,1); // complex equation 2+i
complexNum.sub(z); // argument z can be a real number or a complex equation
```


### Method: Equals

Checks if the real and imaginary components are equal to the passed in compelex components.

```js
complexNum.equals(z);
```

### Arguments:

1. z is the complex number/equation to compare with

### Examples:

```js
new complex(5, 4).equals(new complex(5, 4)); // true
new complex(1, 4).equals(new complex(1, 3)); // false
```
