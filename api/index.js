const express = require('express');
const app = express();
const InitialProfile = require('../src/intialProfile')

app.get('*', (req, res) => {
    const profile = new InitialProfile("Cheng Yi");
    const name = req.query['name'] || req.originalUrl.split('/').join(' ').trim();

    profile
        .setName(name)
        .setSize(req.query['size'])
        .setColor(req.query['color'])
        .setBackground(req.query['bg'])
    res.setHeader('Content-type', 'image/svg+xml');
    res.send(profile.build());
})

app.use((err, req, res, next) => {
  console.log('Error ', { err });
  res.status(500)
  res.send("Sorry an error had occur")
});

module.exports = app;
