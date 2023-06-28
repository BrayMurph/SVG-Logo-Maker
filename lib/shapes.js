class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorShape) {
        this.color = colorShape;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="25" y="25" width="200" height="200" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="125" cy="125" r="75" fill="${this.color}" />`;
    }
}

module.exports = {Triangle, Square, Circle};