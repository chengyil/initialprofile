const express = require('express');
const app = express();
const port = process.env.PORT || 80; 

const { registerAllHelper } = require('./src/templateHelpers');
registerAllHelper();

app.use(require('./api'));

try {
    app.listen(port, () => {
        console.log(`port ${port} is running`);
    });
} catch (error) {
    console.warn(error);
}