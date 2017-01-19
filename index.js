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
		    message: 'Do you want to LOAD saved variables?:',
		    choices: ['Yes','No']
		  }
		];
}