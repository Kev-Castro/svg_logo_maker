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
        return `<rect x="95" y="45" width="125" height="125" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="140" cy="110" r="75" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="148, 17 242, 180 55, 180" fill="${this.color}" />`;
    }
}

module.exports = { Square, Circle, Triangle };