// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the description of this project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "test",
  },
  {
    type: "list",
    message: "What is the license used for the project?",
    name: "license",
    choices: ["MIT", "Apache", "BSD", "none"],
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile(`README.md`, data, (err) =>
    err ? console.error(err) : console.log("Done!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    let templateData = generateMarkdown(data);
    console.log(templateData);
    writeToFile(templateData);
  });
}

// Function call to initialize app
init();
