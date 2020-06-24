const Handlebars = require('handlebars');
const { svg } = require('./svg');
const { text } = require('./text');
const { circle } = require('./circle');

module.exports = {
    registerAllHelper () {
        console.log('Registering');
        Handlebars.registerHelper('svg', svg);
        Handlebars.registerHelper('text', text);
        Handlebars.registerHelper('circle', circle);
        console.log('Registered');
    }
}