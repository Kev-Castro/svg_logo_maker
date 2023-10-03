const inquirer = require('inquirer');
const svg = require('./lib/logo_svg');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { writeFile } = require('fs/promises')

inquirer.prompt(
    [
        {
            name: 'logoText',
            type: 'input',
            message:
                'Enter three character text for logo text.'
        },
        {
            name: 'textColor',
            type: 'input',
            message:
                'Enter text color.'
        },
        {
            name: 'shapeType',
            type: 'list',
            message:
                'Choose shape for your logo.',
            choices:
                [
                    'Square', 'Circle', 'Triangle'
                ]
        },
        {
            name: 'shapeColor',
            type: 'input',
            message:
                'Enter shape color.'
        },
    ]
)
    .then(({ logoText, textColor, shapeType, shapeColor }) => {
        let newShape;
        switch (shapeType) {
            case 'Square':
                newShape = new Square();
                break;

            case 'Circle':
                newShape = new Circle();
                break;

            default:
                newShape = new Triangle();
                break;
        }
        newShape.setColor(shapeColor);

        let newSvg = new svg();
        newSvg.setLogoText(logoText, textColor);
        newSvg.setLogoShape(newShape);
        writeFile('logo.svg', newSvg.render());
    })
    .then(() => {
        console.log('logo.svg')
    })
    .catch((err) => {
        console.log(err);
    });