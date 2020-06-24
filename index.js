const express = require('express');
const app = express();

const { registerAllHelper } = require('./src/templateHelpers');
registerAllHelper();

app.use(require('./api'));

try {
    app.listen(80, () => {
        console.log(`port 80 is running`);
    });
} catch (error) {
    console.warn(error);
}