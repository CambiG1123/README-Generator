// TODO: Include packages needed for this application
const inquirer = import('inquirer')
const fS = require('fs')
const path = require('node:path')
const generateMarkdown = require("Develop/utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please give a description of your project",
  },
  {
    type: "input",
    name: "screenshot",
    message:"If you would like to include a screenshot, please provide the relative path to your screenshot image file"
  },
  {
    type: "input",
    name: "link",
    message: "What is the URL of your deployed application"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license for this project if applicable",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "Please list all the dependencies of this project",
  },
  {
    type: "input",
    name: "usage",
    message:
      "State the languages or technologies associated with this project, and how to install if applicable.",
  },
  {
    type: "input",
    name: "creator",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors.",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
