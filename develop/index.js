//  Packages requirer for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const util =require('util');

const generatorMarkdown = require('./util/generateMarkdown');

// Creating an array of questions for user input
const questions = [];
inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please write a short description of your project.',
      },
      {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What does the user need to install to use this app?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'How is the app used ? Give instructions',
      },
    {
      type: 'checkbox',
      message: 'What license are u using?',
      name: 'license',
      choices: ['None',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License'],
    },
    
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who contributet to this project?',
      },
      {
        type: 'input',
        name: 'Testing',
        message: 'What command are nedded to test this app?.',
      },
      {
        type: 'input',
        name: 'git',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email adress?',
      },   
  ])

    


// Creating a function to write README file
function writeToFile(fileName, data) {
   console.log(fileName);
   console.log(data);
   if (err) {
       return console.log (err)
   }else console.log (success)
}   




// Creating a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function(data) {
        writeToFile ('README.md',generatorMarkdown(data));
        console.log(data)
    })
}



// Function call to initialize app
init();
