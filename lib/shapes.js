class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color
    }
}

class Sqaure extends Shape {
    render() {
        return `<rect x="95" y="45" width="125" height="125" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="140" cy="110" r="75" fill="${this.color}" />`;
    }
}

module.exports = { Square, Circle };