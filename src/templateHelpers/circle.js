const Handlebars = require('handlebars');

exports.circle = function (size, options) {
    const diameter = parseInt(size.diameter);
    const radius = diameter / 2;
    const defaultParam = { 
        r: radius,
        cx: radius,
        cy: radius,
        width: diameter,
        height: diameter
    }
    const passedAttributes = {...defaultParam, ...options.hash}
    const attributes = Object.keys(passedAttributes).reduce((attributes, key) => {
        attributes.push(`${key}="${passedAttributes[key]}"`);
        return attributes;
    }, []).join(' ');

    return new Handlebars.SafeString(`<circle ${attributes} />`);
}