const Handlebars = require('handlebars');

module.exports = class InitialProfie {
    constructor() {
        this.name = "CY";
        this.background="black"
        this.color="white"
    }

    setName(name) {
        this.name = name || 'CY';
        return this;
    }

    setColor(color) {
        this.color = color || "white";
        return this;
    }

    setBackground(background) {
        this.background = background || "black";
        return this;
    }

    setSize(size) {
        this.size = parseInt(size) || 30;
        return this;
    }

    fontSize() {
        return this.size * 0.43;
    }

    context() {
        return {
            size: { 
                height: this.size, 
                width: this.size,
                diameter: this.size
            },
            text: {
                alignment: "middle",
                fontWeight: "400",
                fontSize: this.fontSize()
            },
            initial: this.initial(),
            background: this.background,
            color: this.color,
        }
    }

    initial() {
        const name = String(this.name);
        const names = name.split(' ');
        let result = '';
        if(names.length > 1) {
            result = names[0].charAt(0) + names[1].charAt(0);
        } else {
            result = name.slice(0, 2);
        }
        return result.toUpperCase();
    }
    
    build () {
        const template = `
        {{#svg size}}
        {{circle size fill=background}}
            {{#text ./text
                dy=".1em" 
                style="line-height: 1;font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;"
                fill=color
            }}
            {{ initial }}
            {{/text}}
        {{/svg}}`;
        const render = Handlebars.compile(template);
        const svg = render(this.context());
        console.log(svg);
        return svg;
    }
}