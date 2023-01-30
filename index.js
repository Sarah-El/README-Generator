const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message:
          "How would you describe your project?",
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation requirements?",
      },
      {
        type: "input",
        name: "usage",
        message: "How should your project be used?",
      },
      {
        type: "input",
        name: "contributing",
        message: "What contributed to this project?",
      },
      {
        type: "input",
        name: "testing",
        message: "How should this project be tested?",
      },
      {
        type: "list",
        name: "license",
        message: "Which license covers the application?",
        choices: [
          "Apache 2.0",
          "BSD 3",
          "GPL 3.0",
          "MIT",
          "None"
        ],
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ];

// function to write README file
function writeToFile(fileName, data) {
    let currentDirectory = path.join(process.cwd(), fileName);
    fs.writeFileSync (currentDirectory, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((userResponses)=> {
        console.log('userResponses= ', userResponses);
        let readMeString = generateMarkdown(userResponses);
        writeToFile('README.md', readMeString);
    })

}

// function call to initialize program
init();
