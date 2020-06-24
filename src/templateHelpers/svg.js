exports.svg = function (context, options) {
    const width = context.width || 30;
    const height = context.height || 30;
    const defaultValue = {
        height: `${height}px`,
        width: `${width}px`,
        layout: `0 0 ${width} ${height}`,
    }
    const passedAttributes = { ...defaultValue, ...options.hash };
    const attributes = Object.keys(passedAttributes).reduce((attributes, key) => {
        attributes.push(`${key}="${passedAttributes[key]}"`);
        return attributes;
    }, []).join(' ');

    return `<svg ${attributes}
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        version="1.1">
        >` +
            options.fn(this) +
        '</svg>';
}