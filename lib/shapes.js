class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="148, 17 242, 180 55, 180" fill="${this.color}" />`;
    }
}

module.exports = { Square, Circle, Triangle };