// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.Username}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributing](#contributing)
  * [Tests](#tests)
  # Installation
    The fallowing necessary dependencies must be installed to run the app
  # Usage
    In order to use this app,${data.Usage}
  # License
    This project is licensed under the ${data.License} license.
    ![GitHub license](https://img.shields.io/badge/License-GPLv3-blue.svg)
  # Contributing
    Contrubutors : ${data.Contributors}
  # Tests
    What we need to run the test : ${data.Tests}    
  # Contact
  # If u have any questions contact :
   ${data.Git} at Github   
   ${data.Email}

`;
}

module.exports = generateMarkdown;
