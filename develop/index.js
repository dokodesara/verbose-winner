//  Packages requirer for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// Creating an array of questions for user input
const questions = [{


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
    name: 'License',
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
    name: 'Tests',
    message: 'What command are nedded to test this app?.',
},
{
    type: 'input',
    name: 'Git',
    message: 'What is your github username?',
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your email adress?',
},
]




// Creating a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    if (error) {
        return console.log(error)
    } else
        console.log(success)
}




// Creating a function to initialize app
const init = () => {
    inquirer.prompt(questions)
      //  writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
//function init() {
   // inquirer.prompt(questions)
       // .then(function (data) {
          //  writeToFile('README.md', generateMarkdown(data));
           // console.log(data)
       // })
//}



// Function call to initialize app
init();
