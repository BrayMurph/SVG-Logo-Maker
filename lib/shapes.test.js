const {Triangle, Square, Circle} = require("./shapes.js");

describe("Test for Triangle", () => {
    test("Testing to see a triangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe("Test for Square", () => {
    test("Test to see a square with an orange background", () => {
        const shape = new Square();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<rect x="25" y="25" width="200" height="200" fill="orange" />');
    });
});

describe("Test for Circle", () => {
    test("Test to see a circle with a #FFFF00 (yellow) background", () => {
        const shape = new Circle();
        shape.setColor("");
        expect(shape.render()).toEqual('<circle cx="125" cy="125" r="75" fill="#FFFF00" />');
    });
});


