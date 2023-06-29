const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Square, Circle} = require("./lib/shapes.js");

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "logoText",
                message: "What text is wanted for the logo (Up to three letters)?",
                validate: logoTextInput => {
                    if (logoTextInput.length <= 3) {
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
        ])
        .then((answers) => {
            writeToFile("logo.svg", answers)
        })
}


function writeToFile(fileName, answers) {
    let svgText = "";
    svgText = '<svg viewbox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">';
    svgText += "<g>";
    svgText += `${answers.logoShape}`;

    let logoShapeChoice;
    if (answers.logoShape === "Triangle") {
        logoShapeChoice = new Triangle();
        svgText += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.logoShapeColor}" />`;
    } else if (answers.logoShape === "Square") {
        logoShapeChoice = new Square();
        svgText += `<rect x="60" y="30" width="180" height="180" fill="${answers.logoShapeColor}" />`;
    } else {
        logoShapeChoice === new Circle();
        svgText += `<circle cx="150" cy="112.5" r="100" fill="${answers.logoShapeColor}" />`;
    }

    svgText += `<text x="150" y="125" text-anchor="middle" font-size="35" fill="${answers.logoColor}">${answers.logoText}</text>`;
    svgText += "</g>";
    svgText += "</svg>";

    fs.writeFile(fileName, svgText, (err) => {
        err ? console.log(err) : console.log("Success!!");
    });
}

init()
