// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = 'License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = 'License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT License':
      licenseBadge = 'License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'None':
      licenseBadge = "";
      break;
  }
  return licenseBadge;
}

// Creating a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.License)
  return `
  # ${data.Title}

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
    [![License](https://img.shields.io/badge/${badge})

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
