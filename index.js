var inquirer = require('inquirer');
var fs = require('fs')


// Basic Card Constructor - Front/Back

function BasicCard(front, back){
	this.front = front; // process 3 
	this.back = back; // process 4 
}

// ClozeCard Constructor - Text/Close Argument

function ClozeCard(full, answer, partial){
	this.full = full;
	this.answer = answer;
	this.partial = partial;
}

// NODE CLI Read input?


//Write File?


//Read File?


function one (){

	inquirer.prompt([

  	{
      type: "input",
   	  name: "front",
      message: "Enter your Question"
  	},

  	{
  	  type:"input",
  	  name:"back",
  	  message: "Enter the Answer"
  	}

	]).then(function(answers){
		var basic = new BasicCard (answers.front, answers.back)
	

		fs.appendFile("text.txt", JSON.stringify(basic), function(){
		console.log(basic)
		})
	})

};

function two (){
	inquirer.prompt([
	{
		type:"input",
		name:"full",
		message:"Enter your Statement"
	},

	{
		type:"input",
		name:"answer",
		message:"Enter the Cloze Answer"	
	},

	{
		type:"input",
		name:"partial"
		message:"cloze phrase goes here"
	}

	]).then(function(answers){
			var clozes = new ClozeCard (answers.full, answers.answer, answers.partial)

			fs.appendFile("cloze.txt", JSON.stringify(clozes), function(){
				console.log(clozes)
			})
	   })
};

if(process.argv[2] === "basic"){
	one()
}if(process.argv[2] === "cloze"){
	two()
}