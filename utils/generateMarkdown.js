// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');

function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes("GNU")) {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license.includes("MIT")) {
    return "https://opensource.org/license/mit";
  } else if (license.includes("Creative Commons")) {
    return "https://creativecommons.org/";
  } else if (license.includes("Choose a License")) {
    return "https://choosealicense.com/"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This Project will be covered under the ${license} license.`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.licenses)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Liecensing
  ${renderLicenseBadge(data.licenses)}

   ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

  ## Credits
  ${data.name}

   ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
`;
}
module.exports = generateMarkdown;
