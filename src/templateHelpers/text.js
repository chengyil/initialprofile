exports.text = function (context, options) {
    const defaultValue = {};
    if(context.alignment === "middle") {
        defaultValue.x="50%" 
        defaultValue.y="50%" 
        defaultValue['alignment-baseline']="middle" 
        defaultValue['text-anchor']="middle" 
        defaultValue['dominant-baseline']="middle" 
    }
    if(context.fontWeight) {
        defaultValue['font-weight']=context.fontWeight;
    }
    if(context.fontSize) {
        defaultValue['font-size']=context.fontSize;
    }

    const passedAttributes = { ...defaultValue, ...options.hash };
    const attributes = Object.keys(passedAttributes).reduce((attributes, key) => {
        attributes.push(`${key}="${passedAttributes[key]}"`);
        return attributes;
    }, []).join(' ');

    return `<text ${attributes}>` +
            options.fn(this) +
        '</text>';
}