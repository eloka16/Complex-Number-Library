#!/usr/bin/env node

"use strict";

var complex = require('./lib/complex.js');


var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var fs			= require('fs');

const program = require('commander');

var a;
var b;
var result;
var real;
var img;
var option;


clear();

console.log(
  chalk.green(
    figlet.textSync('complex Library', { horizontalLayout: 'default' })
  )
);

//Display options for Complex Input
var welcome = function(){
	var message = '\nWelcome to the Complex Number Library...\n' +
	'You can do the following with this app:\n' +
	'****Add, Subtract, Multily and Divide' +
	'****Complex numbers\n'; 
	console.log(chalk.yellow(message));

	//Get input to display stored data or not
	var question =	[
		  {
			name: 'load',
		   	type: 'list',
		    message: 'Do you want to perform complex mathematical operations?:',
		    choices: ['Yes','No']
		  }
		];

		inquirer.prompt(question).then(function(){
			var value = arguments[0].load;
			switch(value){
				case 'No':
					console.log('Thank you for stoping by... ');
					process.exit(0);
					break;

				case 'Yes':
					//Get input
					getOptionOne(function(){
						option = arguments['0'].firstNumber;	
						real = Number(arguments['0'].real);
						img = Number(arguments['0'].img);
						//Use option, real and imaginary numbers to get first number
						getDataOne();	
					});
			}
		});
}

//Display options for Complex Input
var getOptionOne = function(callback){
	var questions = [
	    {
	      name: 'firstNumber',
	      type: 'input',
	      message: 'FIRST Complex Number:\n' +
      			'---1: Give input from Keyboard\n',
	      validate: function( value ) {
    		   if (value==1) {
	    	     return true;
	        	} else {
		          return 'Enter correct choice';
		        }
	      }
	    },
	    {
	      name: 'real',
	      type: 'input',
	      message: 'Enter real number:',
	      validate: function( value ) {
	        if (!isNaN(value)) {
	          return true;
	        } else {
	          return 'Please enter valid input';
	        }
	      }
	    },
	    {
	      name: 'img',
	      type: 'input',
	      message: 'Enter imaginary number:',
	      validate: function(value) {
	        if (!isNaN(value)) {
	          return true;
	        } else {
	          return 'Please enter valid input';
	        }
	      }
	    }
	  ];

	inquirer.prompt(questions).then(callback);
}

//Display options for Number Input
var getOptionTwo = function(callback){
		var questions = [
	    {
	      name: 'secondNumber',
	      type: 'input',
	      message: 'SECOND Inut:\n' +
      			'---1: Give input from Keyboard\n',
	      validate: function( value ) {
    		   if (value==1) {
	    	     return true;
	        	} else {
		          return 'Enter valid choice';
		        }
	      }
	    },
	    {
	      name: 'real',
	      type: 'input',
	      message: 'Enter real number:',
	      validate: function( value ) {
	        if (!isNaN(value)) {
	          return true;
	        } else {
	          return 'Please enter valid input';
	        }
	      }
	    },
	    {
	      name: 'img',
	      type: 'input',
	      message: 'Enter real number:',
	      validate: function(value) {
	        if (!isNaN(value)) {
	          return true;
	        } else {
	          return 'Please enter valid input';
	        }
	      }
	    }
	  ];

	inquirer.prompt(questions).then(callback);	
}

//Get input 
var getDataOne = function(){
    a = new complex(real, img);
    console.log(a);
    getOptionTwo(function(){
				option = arguments['0'].secondNumber;	
				real = Number(arguments['0'].real);
				img = Number(arguments['0'].img);
				getDataTwo();
			});
   

}


var getDataTwo = function(){
    b = new complex(real, img);
    console.log(b);
    showOperations();
}

var showOperations = function(){	
	var question =	[
		  {
			name: 'op',
		   	type: 'list',
		    message: 'Select the operation to perform:',
		    choices: ['Add','Subtract','Multiply','Divide','Equals','EXIT']
		  }
		];

		inquirer.prompt(question).then(function(){			
			var value = arguments[0].op;
			switch(value){
				//Check for rules before calling the appropriate functions
				case 'Add':				                        
						result = a.add(b);
						displayResult()
										
					break;
				case 'Subtract':
					
					
						result = a.sub(b);
						displayResult()
					
					break;
				case 'Multiply':
					
					
						result = a.multiply(b);
						displayResult();
					
					break;

					case 'Divide':
					
					
						result = a.divide(b);
						displayResult();
					
					break;

					case 'Equals':
					
					
						result = a.equals(b);
						displayResult();
					
					break;

				case 'EXIT':
					console.log('Goodbye... ');
					process.exit(0);
					break;
														
						
			}
		});
	
}

var displayResult = function(){
	console.log('***Here is the result of the operation')
	console.log(result);

	//Prompt user for further operations
	var question =	[
		  {
			name: 'more',
		   	type: 'list',
		    message: 'Do you want to perform more operations?:',
		    choices: ['Yes','No']
		  }
		];

		inquirer.prompt(question).then(function(){
			var value = arguments[0].more;
			switch(value){

				case 'No':	
				
									console.log('Goodbye... ');
									process.exit(0);
									break;
				case 'Yes':
					getOptionOne(function(){
						option = arguments['0'].firstNumber;	
						real = Number(arguments['0'].real);
						img = Number(arguments['0'].img);
						//Use option, real and imaginary numbers to get first number
						getDataOne();	
					});

				
							}
						});

						
}

//Begin the application

welcome();