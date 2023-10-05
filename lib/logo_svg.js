class Logo_svg {
    constructor() {
        this.logoText = '';
        this.logoShape = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.logoShape}${this.logoText}</svg>`;
    }

    setLogoShape(Shape) {
        this.logoShape = Shape.render();
    }

    setLogoText(text, color) {
        if (text.length > 3) {
            throw new Error('logo text can not exceed more than 3 characters')
        }

        this.logoText = `<text x="150" y="118" font-size="45" text-anchor="middle" fill="${color}">${text.toUpperCase()}</text>`;
    }
}

module.exports = Logo_svg;