# SVG Logo Maker

## Description

This is an application that is using js test, node-fetch, jest, and inquirer. All these come together to be able to make an application in which the user is able to make a logo. The user can choose three different options for shapes: Triangle, Square, and Circle. The user can then choose any color that can be key typed out or using the hexidecimal code for the color for both the text color and the background color. The user can also choose a up to 3 letters that they want on their logo. After the prompts, the logo is then made.

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Video Demonstration

https://github.com/BrayMurph/SVG-Logo-Maker/assets/130401538/fe157634-655c-4cd8-8c0e-6056b114e17b
