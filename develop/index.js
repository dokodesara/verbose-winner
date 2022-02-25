//  Packages requirer for this application
const inquirer = require ('inquirer')
const fs = require('fs');
const generateREADME = ({title, description, license, story, git, email})

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
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
        name: 'story',
        message: 'What is your user story?',
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
  .then((answers) => {
      const README = generateREADME(answers)
    


// TODO: Create a function to write README file
fs.writeToFile('README.md', README,(err) =>
      err ? console.error(err) : console.log('Successfully generated a README file!'));
    
   
      
  });


// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
