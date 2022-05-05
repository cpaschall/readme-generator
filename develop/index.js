// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');
const fileName = "Readme2.md"

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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) => {
        err ? console.error(err) : console.log('Success!');
    });
}

// TODO: Create a function to initialize app
// function init() {}

function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        // const license = data.license
        const fileData = md(data)
        // console.log(typeof(md.generateMarkdown(data)))
        // console.log(license)
        writeToFile(fileName, fileData)
    });
}

// Function call to initialize app
init() 
// console.log(typeof(md.generateMarkdown(data)))