const { Square } = require('./shapes')

describe("Square", () => {
    test("should render svg for a green polygon element", () => {
        const expectedSvg =
            '<rect x="95" y="45" width="125" height="125" fill="dodgerblue" />';
        const square = new Square();
        square.setColor("dodgerblue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
        const expectedSvg =
            '<rect x="95" y="45" width="125" height="125" fill="red" />';
        const square = new Square();
        square.setColor("red");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});