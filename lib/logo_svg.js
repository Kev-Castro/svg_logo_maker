class Logo_svg {
    constructor() {
        this.logoText = '';
        this.logoShape = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.logoShape}${this.logoText}</svg>`;
    }

    setLogoShape(Shape) {
        this.logoShape = shape.render();
    }
}

module.exports = Logo_svg;