const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Square, Circle} = require("./lib/shapes.js");

const questions = [
    {
        type: "input",
        name: "logoText",
        message: "What text is wanted for the logo (Up to three letters)?",
        validate: logoTextInput => {
            if (logoTextInput <= 3) {
                return true;
            } else {
                console.log("Need to enter text or the correct amount of text for logo!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "logoColor",
        message: "What color for the text (color keyword or hexadecimal number)?",
        validate: logoColorInput => {
            if (logoColorInput) {
                return true;
            } else {
                console.log("Need to enter color for the text of the logo!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "logoShape",
        message: "What shape for the logo?",
        choices: ["Triangle", "Square", "Circle"],
        
    },
    {
        type: "input",
        name: "logoShapeColor",
        message: "What color for the shape (color keyword or hexadecimal number)?",
        validate: logoShapeColorInput => {
            if (logoShapeColorInput) {
                return true;
            } else {
                console.log("Need to enter color for the shape of the logo!");
                return false;
            }
        }
    },
];

function init() {
    return inquirer.createPromptModule(questions);
}

init()