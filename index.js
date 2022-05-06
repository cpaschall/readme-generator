
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./develop/utils/generateMarkdown.js');
const fileName = "READMEexample.md"

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
        type: "list",
        message: "Choose a License: ",
        name: "license",
        choices: ["Apache", "Boost", "ISC", "Perl"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) => {
        err ? console.error(err) : console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        const fileData = md(data)
        writeToFile(fileName, fileData)
    });
}

// Function call to initialize app
init() 
