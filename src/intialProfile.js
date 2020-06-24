const Handlebars = require('handlebars');

const template = `{{#svg size}}
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
module.exports = class InitialProfie {
    constructor() {
        this.name = "CY";
        this.hue = null;
    }

    setName(name) {
        this.name = name || 'CY';
        this.hue = null;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setBackground(background) {
        this.background = background;
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

    generateHue() {
        if(!this.hue) {
            this.hue = this.name.split('').reduce((sum, char) => {
                return sum = sum + (char.charCodeAt() << 3)
            }, 43) % 360;
        }
        return this.hue;
    }

    generateBackground() {
        return `hsl(${this.generateHue()}, 70%, 30%)`;
    }
    
    generateColor() {
        return `hsl(${this.generateHue()}, 30%, 70%)`;
    }
    
    build () {
        if (!this.background) {
            this.background=this.generateBackground()
        }
        if (!this.color) {
            this.color=this.generateColor();
        }

        const svg = render(this.context());
        console.log(svg);
        return svg;
    }
}