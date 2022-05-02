// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe what your application does.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "instructions"
    },
    {
        type: "input",
        message: "What is the application's usage?",
        name: "usage"
    },
    {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What tests were done on this application?",
        name: "tests"
    },
    {
        type: 'checkbox',
        message: 'What license would you like to include in this Readme file?',
        name: 'license',
        choices: ['Apache', 'Boost', 'ISC', 'Perl'],
    },
];

// Apache: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// Boost: [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// ISC: [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
// Perl: [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)




// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
 
inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response.license)
    })
