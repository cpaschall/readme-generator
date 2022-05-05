// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const license = data.license

function renderLicenseBadge(license) {
  // let license = data.license
  switch (license) {
      case 'Apache':
        return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      case 'Boost':
        return '![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      case 'ISC':
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      case 'Perl':
        return '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)';
      default:
        return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // let license = data.license
  switch (license) {
      case 'Apache':
        return '[License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      case 'Boost':
        return '[License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      case 'ISC':
        return '[License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      case 'Perl':
        return '[License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)';
      default:
        return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // let license = data.license
  if(license) {
    return (`${renderLicenseBadge(license)}<br>${renderLicenseLink(license)}`);
  } else {
    return ''
  };
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  let license = data.license
  return (
  `
  # ${data.title}

  ## Description
  ${data.description}

  ## Instructions
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contribution}

  ## Testing
  ${data.tests}

  ### License
  ---
  ${renderLicenseSection(license)}
  `);
};


module.exports = generateMarkdown

